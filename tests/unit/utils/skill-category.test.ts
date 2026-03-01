import { describe, expect, it } from 'vitest'

import { isAncientElementalSkillGroupName, SUMMONER_ANCIENT_ELEMENTAL_SKILLS } from '../../../server/utils/skill-category'

describe('isAncientElementalSkillGroupName', () => {
  it('matches english and spanish aliases for the Summoner group gem', () => {
    expect(isAncientElementalSkillGroupName('Ancient Elemental Skill')).toBe(true)
    expect(isAncientElementalSkillGroupName('[Ancient Elemental]')).toBe(true)
    expect(isAncientElementalSkillGroupName('Elemental ancestral')).toBe(true)
    expect(isAncientElementalSkillGroupName('Habilidad de elemental ancestral')).toBe(true)
  })

  it('rejects unrelated skill names', () => {
    expect(isAncientElementalSkillGroupName('Ancient Spear')).toBe(false)
    expect(isAncientElementalSkillGroupName('Water Elemental')).toBe(false)
  })
})

describe('SUMMONER_ANCIENT_ELEMENTAL_SKILLS', () => {
  it('keeps the canonical five Ancient Elemental summons', () => {
    expect([...SUMMONER_ANCIENT_ELEMENTAL_SKILLS]).toEqual([
      'Osh',
      'Alimaji',
      'Phoenix',
      'Jahia & Ligheas',
      'Akir',
    ])
  })
})

