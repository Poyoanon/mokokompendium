const normalizeSpacing = (value: string) => value.replace(/\s+/g, ' ').trim()

export const normalizeSkillGroupAliasKey = (value: string) =>
  normalizeSpacing(value.trim().toLowerCase().replace(/^\[|\]$/g, ''))

export const getSkillGroupAliasCandidates = (value: string) => {
  const normalized = normalizeSkillGroupAliasKey(value)
  if (!normalized) return []

  const candidates = new Set<string>([normalized])
  if (normalized.endsWith(' skill')) {
    const withoutSkillSuffix = normalizeSpacing(normalized.replace(/\s+skill$/, ''))
    if (withoutSkillSuffix.length > 0) {
      candidates.add(withoutSkillSuffix)
    }
  }

  return [...candidates]
}
