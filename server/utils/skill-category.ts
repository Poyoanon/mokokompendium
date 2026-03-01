export const SUMMONER_ANCIENT_ELEMENTAL_SKILLS = [
  'Osh',
  'Alimaji',
  'Phoenix',
  'Jahia & Ligheas',
  'Akir',
] as const

const ANCIENT_ELEMENTAL_GROUP_KEYS = new Set([
  'ancient elemental skill',
  'ancient elemental',
  'elemental ancestral',
  'habilidad de elemental ancestral',
])

const normalizeGroupKey = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/^\[|\]$/g, '')
    .replace(/\s+/g, ' ')

export const isAncientElementalSkillGroupName = (value: string) => {
  const normalized = normalizeGroupKey(value)
  if (!normalized) return false
  if (ANCIENT_ELEMENTAL_GROUP_KEYS.has(normalized)) return true

  if (normalized.endsWith(' skill')) {
    const withoutSkill = normalized.replace(/\s+skill$/, '').trim()
    return ANCIENT_ELEMENTAL_GROUP_KEYS.has(withoutSkill)
  }

  return false
}

