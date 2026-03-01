import { asD1Database } from '../utils/d1'
import { buildLocaleAwareEqualsClause, buildLocalizedSelectSql } from '../utils/tooltip-locale'

const CDN_PROXY_BASE_URL = '/api/cdn/efui_iconatlas'
const CACHE_TTL_SECONDS = 60 * 60 * 24 * 7
const STALE_TTL_SECONDS = 60 * 60 * 24
const CACHE_CONTROL_HEADER = `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}, stale-while-revalidate=${STALE_TTL_SECONDS}`

type ArkPassiveRow = {
  passive_name: string
  class_id: number
  tier: number
  level: number
  icon_file: string
  icon_index: number
  classify_type: number
  description: string | null
}

type ArkPassiveNameRow = {
  passive_name: string
  classify_type: number
}

function getArkPassiveIconUrl(iconFile: string, iconIndex: number): string {
  const folder = iconFile.toLowerCase()
  const filename = `${iconFile.toLowerCase()}_${iconIndex}.png`
  return `${CDN_PROXY_BASE_URL}/${folder}/${filename}`
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const locale = query.locale

  const { cloudflare } = event.context
  if (!cloudflare?.env?.DB) {
    return { error: 'Database not available' }
  }
  const db = asD1Database(cloudflare.env.DB)

  const parsedClassId = query.class_id ? Number.parseInt(query.class_id as string, 10) : null
  const classId = parsedClassId !== null && !Number.isNaN(parsedClassId) ? parsedClassId : null

  const wantsCatalog = query.all === '1' || query.all === 'true' || query.mode === 'names'
  if (wantsCatalog) {
    setHeader(event, 'Cache-Control', CACHE_CONTROL_HEADER)

    let rows: ArkPassiveNameRow[] = []

    if (classId !== null) {
      const result = await db.prepare(
        `SELECT passive_name, classify_type
         FROM (
           SELECT
             passive_name,
             classify_type,
             ROW_NUMBER() OVER (
               PARTITION BY passive_name
               ORDER BY
                 CASE
                   WHEN class_id = ? THEN 0
                   WHEN class_id = 0 THEN 1
                   ELSE 2
                 END,
                 classify_type,
                 tier,
                 level
             ) AS row_num
           FROM ark_passives
           WHERE class_id = ? OR class_id = 0
         )
         WHERE row_num = 1
         ORDER BY passive_name`
      ).bind(classId, classId).all() as { results?: ArkPassiveNameRow[] }

      rows = result.results ?? []
    } else {
      const result = await db.prepare(
        `SELECT passive_name, MIN(classify_type) AS classify_type
         FROM ark_passives
         GROUP BY passive_name
         ORDER BY passive_name`
      ).all() as { results?: ArkPassiveNameRow[] }

      rows = result.results ?? []
    }

    return {
      passives: rows
    }
  }

  if (!query.name) {
    return {
      error: 'Please provide name parameter'
    }
  }

  const name = (query.name as string).trim()
  if (!name) {
    return {
      error: 'Please provide name parameter'
    }
  }

  const parsedTier = query.tier ? Number.parseInt(query.tier as string, 10) : null
  const tier = parsedTier !== null && !Number.isNaN(parsedTier) ? parsedTier : null
  const parsedLevel = query.level
    ? Number.parseInt(query.level as string, 10)
    : query.points
      ? Number.parseInt(query.points as string, 10)
      : null
  const level = parsedLevel !== null && !Number.isNaN(parsedLevel) ? parsedLevel : null
  const nameClause = await buildLocaleAwareEqualsClause({
    db,
    tableName: 'ark_passives',
    baseColumn: 'passive_name',
    locale,
    value: name,
  })
  const localizedNameSql = await buildLocalizedSelectSql({
    db,
    tableName: 'ark_passives',
    baseColumn: 'passive_name',
    locale,
  })
  const localizedDescriptionSql = await buildLocalizedSelectSql({
    db,
    tableName: 'ark_passives',
    baseColumn: 'description',
    locale,
  })

  setHeader(event, 'Cache-Control', CACHE_CONTROL_HEADER)

  const row = await db.prepare(
    `SELECT
      ${localizedNameSql} AS passive_name,
      class_id,
      tier,
      level,
      icon_file,
      icon_index,
      classify_type,
      ${localizedDescriptionSql} AS description
     FROM ark_passives
     WHERE ${nameClause.sql}
     ORDER BY
       CASE
         WHEN class_id = ? THEN 0
         WHEN class_id = 0 THEN 1
         ELSE 2
       END,
       CASE
         WHEN tier = ? THEN 0
         ELSE 1
       END,
        CASE
          WHEN level = ? THEN 0
          ELSE 1
        END,
        level,
        classify_type,
        icon_index
     LIMIT 1`
  ).bind(...nameClause.bindings, classId ?? -1, tier ?? -1, level ?? -1).first() as ArkPassiveRow | null

  if (!row) {
    return {
      error: 'Ark Passive not found',
      name
    }
  }

  return {
    name: row.passive_name,
    class_id: row.class_id,
    tier: row.tier,
    level: row.level,
    icon_file: row.icon_file,
    icon_index: row.icon_index,
    description: row.description ?? null,
    url: getArkPassiveIconUrl(row.icon_file, row.icon_index)
  }
})
