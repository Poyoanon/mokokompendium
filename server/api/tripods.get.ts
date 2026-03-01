import { asD1Database } from '../utils/d1'
import { buildLocaleAwareEqualsClause, buildLocalizedSelectSql } from '../utils/tooltip-locale'

const CDN_PROXY_BASE_URL = '/api/cdn/efui_iconatlas'
const CACHE_TTL_SECONDS = 60 * 60 * 24 * 7
const STALE_TTL_SECONDS = 60 * 60 * 24
const CACHE_CONTROL_HEADER = `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}, stale-while-revalidate=${STALE_TTL_SECONDS}`

function getTripodUrl(tier: number, index: number): string {
  const filename = `tripod_tier_${tier}_${index}.png`
  return `${CDN_PROXY_BASE_URL}/tripod_tier/${filename}`
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const locale = query.locale

  const { cloudflare } = event.context
  if (!cloudflare?.env?.DB) {
    return { error: 'Database not available' }
  }
  const db = asD1Database(cloudflare.env.DB)

  if (query.class_id && query.skill_name && query.tripod_name) {
    const classId = parseInt(query.class_id as string, 10)
    const skillName = query.skill_name as string
    const tripodName = query.tripod_name as string
    const skillNameClause = await buildLocaleAwareEqualsClause({
      db,
      tableName: 'skills',
      baseColumn: 'skill_name',
      locale,
      value: skillName,
    })
    const tripodNameClause = await buildLocaleAwareEqualsClause({
      db,
      tableName: 'tripods',
      baseColumn: 'tripod_name',
      locale,
      value: tripodName,
    })
    const tripodNameSql = await buildLocalizedSelectSql({
      db,
      tableName: 'tripods',
      baseColumn: 'tripod_name',
      locale,
    })
    const tripodDescriptionSql = await buildLocalizedSelectSql({
      db,
      tableName: 'tripods',
      baseColumn: 'description',
      locale,
    })

    setHeader(event, 'Cache-Control', CACHE_CONTROL_HEADER)

    const skill = await db.prepare(`
      SELECT skill_id FROM skills
      WHERE class_id = ? AND ${skillNameClause.sql}
    `).bind(classId, ...skillNameClause.bindings).first() as { skill_id: number } | null

    if (!skill) {
      return {
        error: 'Skill not found',
        class_id: classId,
        skill_name: skillName
      }
    }

    const tripod = await db.prepare(`
      SELECT
        slot_number,
        icon_index,
        ${tripodNameSql} AS tripod_name,
        ${tripodDescriptionSql} AS description
      FROM tripods
      WHERE skill_id = ? AND ${tripodNameClause.sql}
    `).bind(skill.skill_id, ...tripodNameClause.bindings).first() as {
      slot_number: number
      icon_index: number
      tripod_name: string
      description: string | null
    } | null

    if (!tripod) {
      return {
        error: 'Tripod not found',
        skill_id: skill.skill_id,
        tripod_name: tripodName
      }
    }

    let tier: number
    if (tripod.slot_number <= 3) {
      tier = 1
    } else if (tripod.slot_number <= 6) {
      tier = 2
    } else {
      tier = 3
    }

    return {
      skill_name: skillName,
      tripod_name: tripod.tripod_name,
      tier,
      slot_number: tripod.slot_number,
      icon_index: tripod.icon_index,
      url: getTripodUrl(tier, tripod.icon_index),
      description: tripod.description || null
    }
  }

  return {
    error: 'Please provide class_id, skill_name, and tripod_name parameters'
  }
})
