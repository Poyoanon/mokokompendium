import { asD1Database } from '../utils/d1'
import { buildLocaleAwareEqualsClause, buildLocalizedSelectSql } from '../utils/tooltip-locale'

const CDN_PROXY_BASE_URL = '/api/cdn/efui_iconatlas'
const CACHE_TTL_SECONDS = 60 * 60 * 24 * 7
const STALE_TTL_SECONDS = 60 * 60 * 24
const CACHE_CONTROL_HEADER = `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}, stale-while-revalidate=${STALE_TTL_SECONDS}`

const RUNE_RARITIES = ['uncommon', 'rare', 'epic', 'legendary'] as const
type RuneRarity = typeof RUNE_RARITIES[number]

type RuneRow = {
  rune_name: string
  rarity: RuneRarity
  description: string | null
  item_id: number
  icon_file: string | null
  icon_index: number | null
}

function normalizeRarity(value: unknown): RuneRarity | null {
  const normalized = String(value ?? '').trim().toLowerCase()
  if (!normalized) return null
  return (RUNE_RARITIES as readonly string[]).includes(normalized)
    ? normalized as RuneRarity
    : null
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
    setResponseStatus(event, 503)
    setHeader(event, 'Cache-Control', 'no-store')
    return { error: 'Database not available' }
  }
  const db = asD1Database(cloudflare.env.DB)

  const name = String(query.name ?? '').trim()
  if (!name) {
    setResponseStatus(event, 400)
    setHeader(event, 'Cache-Control', 'no-store')
    return {
      error: 'Please provide name parameter',
      example: '/api/runes?name=Galewind&rarity=legendary'
    }
  }

  const rarity = normalizeRarity(query.rarity)
  const nameClause = await buildLocaleAwareEqualsClause({
    db,
    tableName: 'runes',
    baseColumn: 'rune_name',
    locale,
    value: name,
  })
  const localizedNameSql = await buildLocalizedSelectSql({
    db,
    tableName: 'runes',
    baseColumn: 'rune_name',
    locale,
  })
  const localizedDescriptionSql = await buildLocalizedSelectSql({
    db,
    tableName: 'runes',
    baseColumn: 'description',
    locale,
  })

  try {
    const row = await db.prepare(
      `SELECT
        ${localizedNameSql} AS rune_name,
        rarity,
        ${localizedDescriptionSql} AS description,
        item_id,
        icon_file,
        icon_index
       FROM runes
       WHERE ${nameClause.sql}
       ORDER BY
         CASE
           WHEN rarity = ? THEN 0
           ELSE 1
         END,
         CASE rarity
           WHEN 'legendary' THEN 0
           WHEN 'epic' THEN 1
           WHEN 'rare' THEN 2
           WHEN 'uncommon' THEN 3
           ELSE 4
         END
       LIMIT 1`
    ).bind(...nameClause.bindings, rarity ?? '').first() as RuneRow | null

    if (!row) {
      setResponseStatus(event, 404)
      setHeader(event, 'Cache-Control', 'no-store')
      return {
        error: 'Rune not found',
        name,
        rarity
      }
    }

    setHeader(event, 'Cache-Control', CACHE_CONTROL_HEADER)

    return {
      name: row.rune_name,
      rarity: row.rarity,
      description: row.description ?? null,
      item_id: row.item_id,
      icon_file: row.icon_file,
      icon_index: row.icon_index,
      url: row.icon_file && row.icon_index !== null ? getIconUrl(row.icon_file, row.icon_index) : null
    }
  } catch {
    setResponseStatus(event, 500)
    setHeader(event, 'Cache-Control', 'no-store')
    return {
      error: 'Rune data table not available',
      name,
      rarity
    }
  }
})
