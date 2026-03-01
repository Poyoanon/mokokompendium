import { asD1Database } from '../utils/d1'
import { buildLocaleAwareEqualsClause, buildLocalizedSelectSql } from '../utils/tooltip-locale'

const CDN_PROXY_BASE_URL = '/api/cdn/efui_iconatlas'
const CACHE_TTL_SECONDS = 60 * 60 * 24 * 7
const STALE_TTL_SECONDS = 60 * 60 * 24
const CACHE_CONTROL_HEADER = `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}, stale-while-revalidate=${STALE_TTL_SECONDS}`

type EngravingRow = {
  engraving_id: number
  level: number
  class_id: number
  req_point: number
  icon_file: string | null
  icon_index: number | null
  name: string
  description: string | null
}

function getIconUrl(iconFile: string, iconIndex: number): string {
  const folder = iconFile.replace(/_\d+$/, '').toLowerCase()
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

  if (!query.name) {
    return {
      error: 'Please provide name parameter'
    }
  }

  const name = String(query.name).trim()
  if (!name) {
    return {
      error: 'Please provide name parameter'
    }
  }

  const parsedClassId = query.class_id ? Number.parseInt(query.class_id as string, 10) : null
  const classId = parsedClassId !== null && !Number.isNaN(parsedClassId) ? parsedClassId : null
  const parsedLevel = query.level ? Number.parseInt(query.level as string, 10) : null
  const requestedLevel = parsedLevel !== null && !Number.isNaN(parsedLevel) ? parsedLevel : null
  const nameClause = await buildLocaleAwareEqualsClause({
    db,
    tableName: 'engravings',
    baseColumn: 'name',
    locale,
    value: name,
  })
  const localizedNameSql = await buildLocalizedSelectSql({
    db,
    tableName: 'engravings',
    baseColumn: 'name',
    locale,
  })
  const localizedDescriptionSql = await buildLocalizedSelectSql({
    db,
    tableName: 'engravings',
    baseColumn: 'description',
    locale,
  })

  setHeader(event, 'Cache-Control', CACHE_CONTROL_HEADER)

  const row = requestedLevel === null
    ? await db.prepare(
      `SELECT engraving_id, level, class_id, req_point, icon_file, icon_index,
        ${localizedNameSql} AS name,
        ${localizedDescriptionSql} AS description
       FROM engravings
       WHERE ${nameClause.sql}
       ORDER BY
         CASE
           WHEN class_id = ? THEN 0
           WHEN class_id = 0 THEN 1
           ELSE 2
         END,
         level DESC
       LIMIT 1`
    ).bind(...nameClause.bindings, classId ?? -1).first() as EngravingRow | null
    : await db.prepare(
      `SELECT engraving_id, level, class_id, req_point, icon_file, icon_index,
        ${localizedNameSql} AS name,
        ${localizedDescriptionSql} AS description
       FROM engravings
       WHERE ${nameClause.sql}
       ORDER BY
         CASE
           WHEN class_id = ? THEN 0
           WHEN class_id = 0 THEN 1
           ELSE 2
         END,
         CASE
           WHEN level = ? THEN 0
           ELSE 1
         END,
         level DESC
       LIMIT 1`
    ).bind(...nameClause.bindings, classId ?? -1, requestedLevel).first() as EngravingRow | null

  if (!row) {
    return {
      error: 'Engraving not found',
      name
    }
  }

  return {
    engraving_id: row.engraving_id,
    name: row.name,
    class_id: row.class_id,
    level: row.level,
    req_point: row.req_point,
    description: row.description ?? null,
    icon_file: row.icon_file,
    icon_index: row.icon_index,
    url: row.icon_file && row.icon_index !== null ? getIconUrl(row.icon_file, row.icon_index) : null
  }
})
