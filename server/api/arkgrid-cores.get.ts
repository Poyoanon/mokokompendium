import { asD1Database } from '../utils/d1'
import { buildLocalizedSelectSql } from '../utils/tooltip-locale'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const locale = query.locale

  const { cloudflare } = event.context
  if (!cloudflare?.env?.arkgrid_db) {
    return { error: 'Database not available' }
  }
  const db = asD1Database(cloudflare.env.arkgrid_db)

  if (query.name || query.names) {
    const rawNames = (query.names ?? query.name) as string
    const names = rawNames
      .split('|')
      .map((name) => name.trim())
      .filter(Boolean)

    if (!names.length) {
      return { cores: [] }
    }

    const placeholders = names.map(() => '?').join(', ')
    const coreNameSql = await buildLocalizedSelectSql({
      db,
      tableName: 'arkgrid_cores',
      baseColumn: 'core_name',
      locale,
    })
    const categoryNameSql = await buildLocalizedSelectSql({
      db,
      tableName: 'arkgrid_cores',
      baseColumn: 'category_name',
      locale,
    })
    const result = await db.prepare(
      `SELECT
        core_id,
        core_name AS core_lookup_name,
        category_key,
        ${coreNameSql} AS core_name,
        ${categoryNameSql} AS category_name
       FROM arkgrid_cores
       WHERE core_name IN (${placeholders})`
    ).bind(...names).all()

    const cores = (result.results ?? []) as Array<{
      core_id: number
      core_lookup_name: string
      category_key: string | null
      core_name: string
      category_name: string | null
    }>
    if (!cores.length) {
      return { cores: [] }
    }

    const coreIds = cores.map((core) => core.core_id)
    const optionPlaceholders = coreIds.map(() => '?').join(', ')
    const optionDescriptionSql = await buildLocalizedSelectSql({
      db,
      tableName: 'arkgrid_core_options',
      baseColumn: 'description',
      locale,
    })
    const optionsResult = await db.prepare(
      `SELECT
        core_id,
        required_points,
        ${optionDescriptionSql} AS description
       FROM arkgrid_core_options
       WHERE core_id IN (${optionPlaceholders})
       ORDER BY required_points`
    ).bind(...coreIds).all()

    const optionsByCore: Record<number, Array<{ points: number; description: string }>> = {}
    for (const row of optionsResult.results ?? []) {
      const option = row as { core_id: number; required_points: number; description: string }
      let coreOptions = optionsByCore[option.core_id]
      if (!coreOptions) {
        coreOptions = []
        optionsByCore[option.core_id] = coreOptions
      }
      coreOptions.push({
        points: option.required_points,
        description: option.description
      })
    }

    return {
      cores: cores.map((core) => ({
        ...core,
        options: optionsByCore[core.core_id] ?? []
      }))
    }
  }

  return {
    error: 'Please provide name or names parameters',
    example: '/api/arkgrid-cores?names=Ancient%20Legacy|Osh%27s%20Support'
  }
})
