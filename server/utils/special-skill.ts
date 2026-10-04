import type { D1DatabaseLike } from './d1'
import { buildLocalizedSelectSql, buildLocaleAwareEqualsClause } from './tooltip-locale'

// Identity modes are not separate rows in Skill. Their unlock passive supplies
// the mode's icon and mechanics; do not fabricate a second game skill ID.
const passiveModes = [
  { classId: 103, name: 'Gravity Release Mode', passiveName: 'Gravity Release' },
]

export const getSpecialSkillNames = (classId: number) =>
  passiveModes.filter(mode => mode.classId === classId).map(mode => mode.name)

export async function getSpecialSkillTooltip(db: D1DatabaseLike, classId: number, name: string, locale: unknown) {
  const normalized = name.trim().toLowerCase()
  const mode = passiveModes.find(mode => mode.classId === classId && mode.name.toLowerCase() === normalized)
  if (!mode) return null

  const nameClause = await buildLocaleAwareEqualsClause({
    db, tableName: 'ark_passives', baseColumn: 'passive_name', value: mode.passiveName, locale,
  })
  const description = await buildLocalizedSelectSql({
    db, tableName: 'ark_passives', baseColumn: 'description', locale,
  })
  return db.prepare(`
    SELECT icon_file, icon_index, ${description} AS description
    FROM ark_passives
    WHERE class_id = ? AND ${nameClause.sql}
    ORDER BY level DESC
    LIMIT 1
  `).bind(classId, ...nameClause.bindings).first<{
    icon_file: string
    icon_index: number
    description: string | null
  }>()
}
