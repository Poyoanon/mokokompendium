import { DatabaseSync } from 'node:sqlite'
import { afterEach, describe, expect, it } from 'vitest'
import { getSpecialSkillNames, getSpecialSkillTooltip } from '../../../server/utils/special-skill'
import type { D1DatabaseLike } from '../../../server/utils/d1'

const databases: DatabaseSync[] = []
afterEach(() => databases.splice(0).forEach(db => db.close()))

const fixture = () => {
  const sqlite = new DatabaseSync(':memory:')
  databases.push(sqlite)
  sqlite.exec(`CREATE TABLE ark_passives(class_id, passive_name, level, icon_file, icon_index, description);
    INSERT INTO ark_passives VALUES(103,'Gravity Release',1,'Ark_Passive_DT',4,'Rank one');
    INSERT INTO ark_passives VALUES(103,'Gravity Release',3,'Ark_Passive_DT',4,'Mode mechanics');`)
  const db = {
    prepare(sql: string) {
      const statement = sqlite.prepare(sql)
      let values: any[] = []
      return {
        bind(...args: any[]) { values = args; return this },
        async first() { return statement.get(...values) ?? null },
        async all() { return { results: statement.all(...values) } },
      }
    },
  } as D1DatabaseLike
  return db
}

describe('special identity skill tooltips', () => {
  it('resolves Destroyer mode mechanics from the highest unlock passive rank', async () => {
    expect(await getSpecialSkillTooltip(fixture(), 103, 'gravity release mode', 'en')).toMatchObject({
      icon_file: 'Ark_Passive_DT', icon_index: 4, description: 'Mode mechanics',
    })
    expect(getSpecialSkillNames(103)).toContain('Gravity Release Mode')
  })
  it('does not attach the Destroyer override to other classes or normal skills', async () => {
    const db = fixture()
    expect(await getSpecialSkillTooltip(db, 203, 'Gravity Release Mode', 'en')).toBeNull()
    expect(await getSpecialSkillTooltip(db, 103, 'Earth Wave', 'en')).toBeNull()
  })
})
