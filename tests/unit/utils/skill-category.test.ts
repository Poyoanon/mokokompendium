import { describe, expect, it } from 'vitest'

import { getSkillGroupAliasCandidates, normalizeSkillGroupAliasKey } from '../../../server/utils/skill-category'

describe('normalizeSkillGroupAliasKey', () => {
  it('normalizes case, surrounding brackets, and whitespace', () => {
    expect(normalizeSkillGroupAliasKey('  [Ancient   Elemental]  ')).toBe('ancient elemental')
    expect(normalizeSkillGroupAliasKey('Habilidad de elemental ancestral')).toBe('habilidad de elemental ancestral')
  })
})

describe('getSkillGroupAliasCandidates', () => {
  it('includes normalized alias and the no-skill variant', () => {
    expect(getSkillGroupAliasCandidates('Ancient Elemental Skill')).toEqual([
      'ancient elemental skill',
      'ancient elemental',
    ])
  })

  it('returns an empty list for blank aliases', () => {
    expect(getSkillGroupAliasCandidates('  ')).toEqual([])
  })
})
