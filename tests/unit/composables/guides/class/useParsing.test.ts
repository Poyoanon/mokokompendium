import { computed, ref } from 'vue'
import { describe, expect, it } from 'vitest'

import { useParsing, type SkillTooltipMeta } from '../../../../../app/composables/guides/class/useParsing'

const createEmptySkillTooltipMeta = (): SkillTooltipMeta => ({
  castTag: null,
  elementTag: null,
  castTagColor: null,
  elementTagColor: null,
  cooldownSeconds: null,
  partsAttackLevel: null,
  stiffnessType: null,
  directionalAttackType: null,
  counterAttackType: null,
  superArmorType: null,
})

const createHarness = (locale: string) => {
  const tooltipLocale = ref(locale)
  const skillTooltipMeta = ref<Record<string, SkillTooltipMeta>>({})

  const parsing = useParsing({
    tooltipLocale,
    guide: ref(null),
    currentBuild: computed(() => undefined),
    currentVariant: computed(() => undefined),
    preArkGrid: computed(() => undefined),
    preArkPassives: computed(() => []),
    dbSkillNames: ref([]),
    dbArkPassiveCategoryByName: ref({}),
    arkPassiveIcons: ref({}),
    arkGridCoreDetails: ref({}),
    skillTooltipMeta,
    getInlineTripodKey: (skillName: string, tripodName: string) => `${skillName}:${tripodName}`,
    getGuideTripodKey: (tripodName: string) => tripodName,
    getArkPassiveKey: (passive: { name: string }) => passive.name,
  })

  return { skillTooltipMeta, getSkillHeaderLines: parsing.getSkillHeaderLines }
}

describe('useParsing skill header colors', () => {
  it('keeps ancient elemental tags magenta for localized labels', () => {
    const { skillTooltipMeta, getSkillHeaderLines } = createHarness('es')
    skillTooltipMeta.value['Akir'] = {
      ...createEmptySkillTooltipMeta(),
      elementTag: '[Elemental ancestral]',
    }

    const lines = getSkillHeaderLines('Akir')
    expect(lines).toHaveLength(1)
    expect(lines[0]).toEqual({
      text: '[Elemental ancestral]',
      color: '#FEA3F2',
    })
  })

  it('keeps english ancient elemental tags magenta', () => {
    const { skillTooltipMeta, getSkillHeaderLines } = createHarness('en')
    skillTooltipMeta.value['Akir'] = {
      ...createEmptySkillTooltipMeta(),
      elementTag: '[Ancient Elemental]',
    }

    const lines = getSkillHeaderLines('Akir')
    expect(lines).toHaveLength(1)
    expect(lines[0]).toEqual({
      text: '[Ancient Elemental]',
      color: '#FEA3F2',
    })
  })
})

