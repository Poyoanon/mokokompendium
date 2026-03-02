import { asD1Database, type D1DatabaseLike } from '../utils/d1'
import { getSkillGroupAliasCandidates } from '../utils/skill-category'
import { buildLocaleAwareEqualsClause, buildLocalizedSelectSql } from '../utils/tooltip-locale'

const CDN_PROXY_BASE_URL = '/api/cdn/efui_iconatlas'
const CACHE_TTL_SECONDS = 60 * 60 * 24 * 7
const STALE_TTL_SECONDS = 60 * 60 * 24
const CACHE_CONTROL_HEADER = `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}, stale-while-revalidate=${STALE_TTL_SECONDS}`
const DEV_CACHE_CONTROL_HEADER = 'no-store'

function getSkillIconUrl(iconFile: string, iconIndex: number): string {
  const folder = iconFile.replace(/_\d+$/, '').toLowerCase()
  const filename = `${iconFile.toLowerCase()}_${iconIndex}.png`
  return `${CDN_PROXY_BASE_URL}/${folder}/${filename}`
}

type SkillTooltipRow = {
  icon_file: string
  icon_index: number
  localized_skill_name?: string | null
  description?: string | null
  cast_tag?: string | null
  element_tag?: string | null
  cast_tag_color?: string | null
  element_tag_color?: string | null
  cooldown_seconds?: number | null
  parts_attack_level?: number | null
  stiffness_type?: number | null
  directional_attack_type?: number | null
  counter_attack_type?: number | null
  super_armor_type?: number | null
}

type SkillNameRow = {
  skill_name: string
}

type SkillCategoryRow = {
  skill_name: string
  localized_skill_name: string | null
  element_tag: string | null
  icon_file: string
  icon_index: number
}

type SkillTooltipGroupAliasRow = {
  group_key: string
}

type SkillColorColumnInfo = {
  castTagColorColumn: string | null
  elementTagColorColumn: string | null
}

let cachedSkillColorColumnInfo: SkillColorColumnInfo | null = null

const getPreferredColumn = (columns: Set<string>, candidates: string[]) => {
  for (const candidate of candidates) {
    if (columns.has(candidate)) {
      return candidate
    }
  }
  return null
}

async function getSkillColorColumnInfo(db: D1DatabaseLike): Promise<SkillColorColumnInfo> {
  if (cachedSkillColorColumnInfo) {
    return cachedSkillColorColumnInfo
  }

  try {
    const pragma = await db.prepare('PRAGMA table_info(skills)').all() as { results?: Array<{ name?: string | null }> }
    const columns = new Set(
      (pragma.results ?? [])
        .map((row) => typeof row.name === 'string' ? row.name.trim().toLowerCase() : '')
        .filter((name) => name.length > 0)
    )

    cachedSkillColorColumnInfo = {
      castTagColorColumn: getPreferredColumn(columns, ['cast_tag_color', 'cast_color']),
      elementTagColorColumn: getPreferredColumn(columns, ['element_tag_color', 'element_color']),
    }
  } catch {
    cachedSkillColorColumnInfo = {
      castTagColorColumn: null,
      elementTagColorColumn: null,
    }
  }

  return cachedSkillColorColumnInfo
}

const getSkillTagColorSelectSql = (columnInfo: SkillColorColumnInfo, alias?: string) => {
  const prefix = alias ? `${alias}.` : ''
  const castTagColorSql = columnInfo.castTagColorColumn
    ? `${prefix}${columnInfo.castTagColorColumn}`
    : 'NULL'
  const elementTagColorSql = columnInfo.elementTagColorColumn
    ? `${prefix}${columnInfo.elementTagColorColumn}`
    : 'NULL'

  return `${castTagColorSql} AS cast_tag_color, ${elementTagColorSql} AS element_tag_color`
}

const getSkillCategoryTagCandidates = (skillName: string) => {
  const normalized = skillName.trim()
  if (!normalized) return []

  const candidates = new Set<string>()
  const addCandidate = (value: string) => {
    const trimmed = value.trim()
    if (!trimmed) return
    candidates.add(trimmed)
  }

  addCandidate(normalized)

  if (normalized.startsWith('[') && normalized.endsWith(']')) {
    addCandidate(normalized.slice(1, -1))
  } else {
    addCandidate(`[${normalized}]`)
  }

  if (/\sskill$/i.test(normalized)) {
    const withoutSkillSuffix = normalized.replace(/\sskill$/i, '').trim()
    if (withoutSkillSuffix) {
      addCandidate(withoutSkillSuffix)
      addCandidate(`[${withoutSkillSuffix}]`)
    }
  }

  return [...candidates]
}

const filterBurstVariantSkillNames = (names: string[]) => {
  const nameSet = new Set(names)
  return names.filter((name) => {
    const burstMatch = name.match(/^(.*)\s+Burst$/i)
    if (!burstMatch) return true
    const baseName = burstMatch[1]?.trim()
    if (!baseName) return true
    return !nameSet.has(baseName)
  })
}

async function buildSkillCategoryTooltip(
  db: D1DatabaseLike,
  classId: number,
  skillName: string,
  locale: unknown,
): Promise<SkillTooltipRow | null> {
  const localizedSkillNameSql = await buildLocalizedSelectSql({
    db,
    tableName: 'skills',
    baseColumn: 'skill_name',
    locale,
    alias: 's',
  })
  const localizedElementTagSql = await buildLocalizedSelectSql({
    db,
    tableName: 'skills',
    baseColumn: 'element_tag',
    locale,
    alias: 's',
  })

  const groupAliasCandidates = getSkillGroupAliasCandidates(skillName)
  if (groupAliasCandidates.length) {
    const aliasPlaceholders = groupAliasCandidates.map(() => '?').join(', ')

    try {
      const groupAliasRow = await db.prepare(`
        SELECT group_key
        FROM skill_tooltip_group_aliases
        WHERE class_id = ?
          AND alias_key IN (${aliasPlaceholders})
        ORDER BY LENGTH(alias_key) DESC
        LIMIT 1
      `).bind(classId, ...groupAliasCandidates).first() as SkillTooltipGroupAliasRow | null

      const groupKey = groupAliasRow?.group_key?.trim()
      if (groupKey) {
        const groupedRows = await db.prepare(`
          SELECT
            m.skill_name,
            ${localizedSkillNameSql} AS localized_skill_name,
            ${localizedElementTagSql} AS element_tag,
            s.icon_file,
            s.icon_index
          FROM skill_tooltip_group_members m
          JOIN skills s
            ON s.class_id = m.class_id
            AND s.skill_name = m.skill_name
          WHERE m.class_id = ?
            AND m.group_key = ?
          ORDER BY m.sort_order ASC, s.skill_name ASC
        `).bind(classId, groupKey).all() as { results?: SkillCategoryRow[] }

        const matches = (groupedRows.results ?? [])
          .filter((row) => typeof row.skill_name === 'string' && row.skill_name.trim().length > 0)

        if (matches.length) {
          const lines = ['[BLUE]Affected Skills[/BLUE]']
          const uniqueTags = Array.from(new Set(
            matches
              .map((row) => row.element_tag?.trim())
              .filter((tag): tag is string => !!tag && tag.length > 0)
          ))
          if (uniqueTags.length === 1) {
            lines.push(`[PURPLE]${uniqueTags[0]}[/PURPLE]`)
          }

          for (const row of matches) {
            const displayName = row.localized_skill_name?.trim() || row.skill_name.trim()
            lines.push(`[GREEN]•[/GREEN] ${displayName}`)
          }

          const iconSource = matches[0]
          if (iconSource) {
            return {
              icon_file: iconSource.icon_file,
              icon_index: iconSource.icon_index,
              description: lines.join('\n'),
              cast_tag: null,
              element_tag: null,
              cast_tag_color: null,
              element_tag_color: null,
              cooldown_seconds: null,
              parts_attack_level: null,
              stiffness_type: null,
              directional_attack_type: null,
              counter_attack_type: null,
              super_armor_type: null,
            }
          }
        }
      }
    } catch {
      // Group tables are optional during rollout; fallback to element-tag grouping.
    }
  }

  const categoryTags = getSkillCategoryTagCandidates(skillName)
  if (!categoryTags.length) return null

  const normalizedTags = categoryTags.map((tag) => tag.toLowerCase())
  const placeholders = normalizedTags.map(() => '?').join(', ')
  const rows = await db.prepare(`
    SELECT
      s.skill_name,
      ${localizedSkillNameSql} AS localized_skill_name,
      ${localizedElementTagSql} AS element_tag,
      s.icon_file,
      s.icon_index
    FROM skills s
    WHERE s.class_id = ?
      AND s.element_tag IS NOT NULL
      AND LOWER(s.element_tag) IN (${placeholders})
    ORDER BY s.skill_name
  `).bind(classId, ...normalizedTags).all() as { results?: SkillCategoryRow[] }

  const matches = (rows.results ?? []).filter((row) => typeof row.skill_name === 'string' && row.skill_name.length > 0)
  if (!matches.length) return null

  const localizedByBaseName = new Map<string, string>()
  for (const row of matches) {
    const baseName = row.skill_name.trim()
    if (!baseName || localizedByBaseName.has(baseName)) continue
    localizedByBaseName.set(baseName, row.localized_skill_name?.trim() || baseName)
  }

  const uniqueBaseNames = Array.from(new Set(matches.map((row) => row.skill_name.trim()).filter((name) => name.length > 0)))
  const filteredBaseNames = filterBurstVariantSkillNames(uniqueBaseNames)
  if (!filteredBaseNames.length) return null

  const preferredName = filteredBaseNames[0]
  const iconSource = matches.find((row) => row.skill_name.trim() === preferredName) ?? matches[0]
  if (!iconSource) return null

  const uniqueTags = Array.from(new Set(matches.map((row) => row.element_tag?.trim()).filter((tag): tag is string => !!tag)))
  const lines = ['[BLUE]Affected Skills[/BLUE]']
  if (uniqueTags.length === 1) {
    lines.push(`[PURPLE]${uniqueTags[0]}[/PURPLE]`)
  }
  lines.push(...filteredBaseNames.map((name) => `[GREEN]•[/GREEN] ${localizedByBaseName.get(name) ?? name}`))

  return {
    icon_file: iconSource.icon_file,
    icon_index: iconSource.icon_index,
    description: lines.join('\n'),
    cast_tag: null,
    element_tag: null,
    cast_tag_color: null,
    element_tag_color: null,
    cooldown_seconds: null,
    parts_attack_level: null,
    stiffness_type: null,
    directional_attack_type: null,
    counter_attack_type: null,
    super_armor_type: null,
  }
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const locale = query.locale

  const { cloudflare } = event.context
  if (!cloudflare?.env?.DB) {
    return { error: 'Database not available' }
  }
  const db = asD1Database(cloudflare.env.DB)

  const parsedClassId = query.class_id ? parseInt(query.class_id as string, 10) : NaN
  const classId = Number.isNaN(parsedClassId) ? null : parsedClassId

  const wantsSkillCatalog = query.all === '1' || query.all === 'true' || query.mode === 'names'
  if (classId !== null && wantsSkillCatalog) {
    setHeader(
      event,
      'Cache-Control',
      import.meta.dev ? DEV_CACHE_CONTROL_HEADER : CACHE_CONTROL_HEADER
    )

    const rows = await db.prepare(`
      SELECT DISTINCT skill_name
      FROM skills
      WHERE class_id = ?
      ORDER BY skill_name
    `).bind(classId).all() as { results?: SkillNameRow[] }

    return {
      skills: (rows.results ?? [])
        .map((row) => row.skill_name)
        .filter((name): name is string => typeof name === 'string' && name.length > 0)
    }
  }

  if (classId !== null && query.skill_name) {
    const skillName = query.skill_name as string
    const parsedLevel = query.level ? parseInt(query.level as string, 10) : null
    const level = parsedLevel !== null && !Number.isNaN(parsedLevel) ? parsedLevel : null
    const skillColorColumns = await getSkillColorColumnInfo(db)
    const skillNameClause = await buildLocaleAwareEqualsClause({
      db,
      tableName: 'skills',
      baseColumn: 'skill_name',
      locale,
      value: skillName,
      alias: 's',
    })
    const flatSkillNameClause = await buildLocaleAwareEqualsClause({
      db,
      tableName: 'skills',
      baseColumn: 'skill_name',
      locale,
      value: skillName,
    })
    const skillDescriptionSql = await buildLocalizedSelectSql({
      db,
      tableName: 'skills',
      baseColumn: 'description',
      locale,
      alias: 's',
    })
    const skillNameSql = await buildLocalizedSelectSql({
      db,
      tableName: 'skills',
      baseColumn: 'skill_name',
      locale,
      alias: 's',
    })
    const skillDescriptionByLevelSql = await buildLocalizedSelectSql({
      db,
      tableName: 'skill_descriptions',
      baseColumn: 'description',
      locale,
      alias: 'sd',
    })
    const castTagSql = await buildLocalizedSelectSql({
      db,
      tableName: 'skills',
      baseColumn: 'cast_tag',
      locale,
      alias: 's',
    })
    const elementTagSql = await buildLocalizedSelectSql({
      db,
      tableName: 'skills',
      baseColumn: 'element_tag',
      locale,
      alias: 's',
    })

    let skill: SkillTooltipRow | null = null

    try {
      if (level !== null) {
        skill = await db.prepare(`
          SELECT
            s.icon_file,
            s.icon_index,
            ${skillNameSql} AS localized_skill_name,
            COALESCE(${skillDescriptionByLevelSql}, ${skillDescriptionSql}) AS description,
            ${castTagSql} AS cast_tag,
            ${elementTagSql} AS element_tag,
            s.cooldown_seconds,
            s.parts_attack_level,
            s.stiffness_type,
            s.directional_attack_type,
            s.counter_attack_type,
            s.super_armor_type,
            ${getSkillTagColorSelectSql(skillColorColumns, 's')}
          FROM skills s
          LEFT JOIN skill_descriptions sd
            ON sd.skill_id = s.skill_id AND sd.level = ?
          WHERE s.class_id = ? AND ${skillNameClause.sql}
        `).bind(level, classId, ...skillNameClause.bindings).first() as SkillTooltipRow | null
      } else {
        skill = await db.prepare(`
          SELECT
            s.icon_file,
            s.icon_index,
            ${skillNameSql} AS localized_skill_name,
            ${skillDescriptionSql} AS description,
            ${castTagSql} AS cast_tag,
            ${elementTagSql} AS element_tag,
            s.cooldown_seconds,
            s.parts_attack_level,
            s.stiffness_type,
            s.directional_attack_type,
            s.counter_attack_type,
            s.super_armor_type,
            ${getSkillTagColorSelectSql(skillColorColumns, 's')}
          FROM skills s
          WHERE s.class_id = ? AND ${skillNameClause.sql}
        `).bind(classId, ...skillNameClause.bindings).first() as SkillTooltipRow | null
      }
    } catch {
      const catchNameSql = await buildLocalizedSelectSql({
        db,
        tableName: 'skills',
        baseColumn: 'skill_name',
        locale,
      })
      const catchDescriptionSql = await buildLocalizedSelectSql({
        db,
        tableName: 'skills',
        baseColumn: 'description',
        locale,
      })
      const catchCastTagSql = await buildLocalizedSelectSql({
        db,
        tableName: 'skills',
        baseColumn: 'cast_tag',
        locale,
      })
      const catchElementTagSql = await buildLocalizedSelectSql({
        db,
        tableName: 'skills',
        baseColumn: 'element_tag',
        locale,
      })
      skill = await db.prepare(`
        SELECT
          icon_file,
          icon_index,
          ${catchNameSql} AS localized_skill_name,
          ${catchDescriptionSql} AS description,
          ${catchCastTagSql} AS cast_tag,
          ${catchElementTagSql} AS element_tag,
          cooldown_seconds,
          ${getSkillTagColorSelectSql(skillColorColumns)}
        FROM skills
        WHERE class_id = ? AND ${flatSkillNameClause.sql}
      `).bind(classId, ...flatSkillNameClause.bindings).first() as SkillTooltipRow | null
    }

    if (!skill) {
      skill = await buildSkillCategoryTooltip(db, classId, skillName, locale)
    }

    if (!skill) {
      setHeader(event, 'Cache-Control', DEV_CACHE_CONTROL_HEADER)
      return {
        error: 'Skill not found',
        class_id: classId,
        skill_name: skillName
      }
    }

    const description = skill.description ?? null

    setHeader(
      event,
      'Cache-Control',
      import.meta.dev ? DEV_CACHE_CONTROL_HEADER : CACHE_CONTROL_HEADER
    )

    return {
      skill_name: skillName,
      localized_name: skill.localized_skill_name ?? skillName,
      icon_file: skill.icon_file,
      icon_index: skill.icon_index,
      cast_tag: skill.cast_tag ?? null,
      element_tag: skill.element_tag ?? null,
      cast_tag_color: skill.cast_tag_color ?? null,
      element_tag_color: skill.element_tag_color ?? null,
      cooldown_seconds: skill.cooldown_seconds ?? null,
      parts_attack_level: skill.parts_attack_level ?? null,
      stiffness_type: skill.stiffness_type ?? null,
      directional_attack_type: skill.directional_attack_type ?? null,
      counter_attack_type: skill.counter_attack_type ?? null,
      super_armor_type: skill.super_armor_type ?? null,
      description,
      url: getSkillIconUrl(skill.icon_file, skill.icon_index)
    }
  }

  setHeader(event, 'Cache-Control', DEV_CACHE_CONTROL_HEADER)
  return {
    error: 'Please provide class_id and skill_name parameters'
  }
})
