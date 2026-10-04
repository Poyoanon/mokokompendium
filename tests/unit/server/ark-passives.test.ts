import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { DatabaseSync } from 'node:sqlite'

vi.mock('h3', () => ({
  defineEventHandler: (handler: unknown) => handler,
  getRequestURL: () => new URL('http://localhost/api/ark-passives'),
  getResponseStatus: () => 200,
}))

type ArkPassiveSeed = {
  passive_name: string
  class_id: number
  classify_type: number
  tier: number
  level: number
  description: string
}

const createD1 = (db: DatabaseSync) => ({
  prepare: (sql: string) => {
    const statement = (params: unknown[]) => ({
      first: async () => db.prepare(sql).all(...(params as never[]))[0] ?? null,
      all: async () => ({ results: db.prepare(sql).all(...(params as never[])) }),
    })

    return {
      bind: (...params: unknown[]) => statement(params),
      ...statement([]),
    }
  },
})

const seedArkPassives = (db: DatabaseSync, rows: ArkPassiveSeed[]) => {
  db.exec(`CREATE TABLE ark_passives (
    passive_name TEXT NOT NULL,
    class_id INTEGER NOT NULL,
    tier INTEGER NOT NULL,
    level INTEGER NOT NULL,
    icon_file TEXT NOT NULL,
    icon_index INTEGER NOT NULL,
    classify_type INTEGER NOT NULL,
    description TEXT
  )`)

  const insert = db.prepare(
    `INSERT INTO ark_passives (passive_name, class_id, classify_type, tier, level, icon_file, icon_index, description)
     VALUES (?, ?, ?, ?, ?, 'icon', 0, ?)`,
  )

  for (const row of rows) {
    insert.run(row.passive_name, row.class_id, row.classify_type, row.tier, row.level, row.description)
  }
}

const limitBreakRows: ArkPassiveSeed[] = [
  { passive_name: 'Limit Break', class_id: 0, classify_type: 0, tier: 1, level: 1, description: 'Evolution-Type Damage +10%.' },
  { passive_name: 'Limit Break', class_id: 304, classify_type: 1, tier: 3, level: 1, description: 'Maximizes the effect of Hype. +11%.' },
  { passive_name: 'Limit Break', class_id: 304, classify_type: 1, tier: 3, level: 3, description: 'Maximizes the effect of Hype. +33%.' },
]

describe('ark passives tooltip lookup', () => {
  let db: DatabaseSync

  const requestTooltip = async (query: Record<string, string>) => {
    const handler = (await import('../../../server/api/ark-passives.get')).default as
      (event: unknown) => Promise<Record<string, unknown>>
    return handler({ query, context: { cloudflare: { env: { DB: createD1(db) } } } })
  }

  beforeEach(() => {
    db = new DatabaseSync(':memory:')
    ;(globalThis as Record<string, unknown>).getQuery = (event: { query: unknown }) => event.query
    ;(globalThis as Record<string, unknown>).setHeader = () => {}
  })

  afterEach(() => {
    db.close()
  })

  it('selects the generic evolution row for a name that also exists as a class node', async () => {
    seedArkPassives(db, limitBreakRows)

    const result = await requestTooltip({ name: 'Limit Break', class_id: '304', tier: '2', level: '1' })

    expect(result).toMatchObject({
      class_id: 0,
      tier: 1,
      description: 'Evolution-Type Damage +10%.',
    })
  })

  it('selects the class node when the guide tier points at it', async () => {
    seedArkPassives(db, limitBreakRows)

    const result = await requestTooltip({ name: 'Limit Break', class_id: '304', tier: '4', level: '3' })

    expect(result).toMatchObject({
      class_id: 304,
      tier: 3,
      description: 'Maximizes the effect of Hype. +33%.',
    })
  })

  it('keeps class priority when no tier is provided (tip lookups)', async () => {
    seedArkPassives(db, limitBreakRows)

    const result = await requestTooltip({ name: 'Limit Break', class_id: '304' })

    expect(result).toMatchObject({ class_id: 304 })
  })

  it('disambiguates same-named generic and class passives by tier', async () => {
    seedArkPassives(db, [
      { passive_name: 'Swiftness', class_id: 0, classify_type: 0, tier: 0, level: 1, description: 'Swiftness +50.' },
      { passive_name: 'Swiftness', class_id: 0, classify_type: 0, tier: 0, level: 28, description: 'Swiftness +1,400.' },
      { passive_name: 'Swiftness', class_id: 603, classify_type: 1, tier: 2, level: 3, description: 'Crit Damage +120%.' },
    ])

    const evolution = await requestTooltip({ name: 'Swiftness', class_id: '603', tier: '1', level: '28' })
    expect(evolution).toMatchObject({ class_id: 0, tier: 0, description: 'Swiftness +1,400.' })

    const enlightenment = await requestTooltip({ name: 'Swiftness', class_id: '603', tier: '3', level: '3' })
    expect(enlightenment).toMatchObject({ class_id: 603, tier: 2, description: 'Crit Damage +120%.' })
  })
})
