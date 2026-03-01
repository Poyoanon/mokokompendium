// @vitest-environment nuxt
// @ts-nocheck
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { computed, defineComponent, ref } from 'vue'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { useD1Data } from '../../../../../app/composables/guides/class/useD1Data'
import SkillsSection from '../../../../../app/components/guides/class/SkillsSection.vue'
import { createDeferred, flushMicrotasks } from '../../../../helpers/async'
import {
  createD1FetchMock,
  wasInlineTripodRequested,
  wasSkillTooltipRequested,
} from '../../../../helpers/d1-fetch'

const mountHarness = async ({
  initialVariant,
  tooltipLocaleValue,
  getTripodNamesFromNotes,
  getSkillNoteLines,
  fetchMock,
}: {
  initialVariant: any
  tooltipLocaleValue?: string
  getTripodNamesFromNotes?: (notes?: string) => string[]
  getSkillNoteLines?: (skillName: string, notes?: string) => Array<{ isBullet: boolean; parts: Array<Record<string, string>> }>
  fetchMock: ReturnType<typeof vi.fn>
}) => {
  vi.stubGlobal('$fetch', fetchMock)

  const guide = ref<any>({ meta: { class_id: 101 }, synergy: { skills: [] } })
  const currentBuild = ref<any>(undefined)
  const currentVariant = ref<any>(initialVariant)
  const preArkGrid = ref<any>(undefined)
  const preArkPassives = ref<any[]>([])
  const tooltipLocale = ref<string>(tooltipLocaleValue ?? 'en')
  const isTooltipDataReady = ref(true)

  const dbSkillNames = ref<string[]>([])
  const skillIcons = ref<Record<string, string | null>>({})
  const skillDisplayNames = ref<Record<string, string>>({})
  const skillDescriptions = ref<Record<string, string | null>>({})
  const skillTooltipMeta = ref<Record<string, unknown>>({})
  const tripodIcons = ref<Record<string, unknown>>({})
  const inlineTripods = ref<Record<string, unknown>>({})
  const arkPassiveIcons = ref<Record<string, { url: string | null; description?: string | null }>>({})
  const dbArkPassiveCategoryByName = ref<Record<string, unknown>>({})
  const arkGridCoreDetails = ref<Record<string, unknown>>({})
  const engravingDetails = ref<Record<string, unknown>>({})
  const runeDetails = ref<Record<string, unknown>>({})

  const onSkillAssetsApplied = vi.fn()

  const TestHarness = defineComponent({
    components: { SkillsSection },
    setup() {
      useD1Data({
        tooltipLocale,
        guide,
        currentBuild,
        currentVariant,
        preArkGrid,
        preArkPassives,
        isTooltipDataReady,
        dbSkillNames,
        skillIcons,
        skillDisplayNames,
        skillDescriptions,
        skillTooltipMeta,
        tripodIcons,
        inlineTripods,
        arkPassiveIcons,
        dbArkPassiveCategoryByName,
        arkGridCoreDetails,
        engravingDetails,
        runeDetails,
        inlineSkillMentionNames: computed(() => []),
        arkPassiveByName: computed(() => ({})),
        arkPassiveTipNames: computed(() => []),
        arkGridCoreNames: computed(() => []),
        getRotationSteps: () => [],
        getSkillLookupName: (skill) => skill.name,
        getTripodNamesFromNotes: getTripodNamesFromNotes ?? (() => []),
        getInlineTripodKey: (skillName, tripodName) => `${skillName}:${tripodName}`,
        getGuideTripodKey: (tripodName) => tripodName,
        getArkPassiveKey: (passive) => passive.name,
        getArkPassiveTipLookupKey: (name) => name,
        normalizeRuneRarity: () => null,
        getRuneLookupKey: (name) => name ?? '',
        appendSkillDetailLines: (description) => description,
        onSkillAssetsApplied,
      })

      const skillsSectionProps = computed(() => ({
        scope: 'variant',
        skills: currentVariant.value?.skills ?? [],
        hasHoverPointer: false,
        noteSkillScopeBase: 'variant-note-skill',
        notePassiveScopeBase: 'variant-note-passive',
        noteTripodScope: 'note-variant',
        skillIcons: skillIcons.value,
        skillDescriptions: skillDescriptions.value,
        tripodIcons: tripodIcons.value,
        inlineTripods: inlineTripods.value,
        runeDetails: runeDetails.value,
        isSkillExpanded: () => true,
        toggleSkillNotes: () => {},
        getSkillLookupName: (skill: { name: string }) => skill.name,
        getSkillHeaderLines: () => [],
        parseSkillDescription: (description?: string | null) => description
          ? [{ text: description, color: null }]
          : [],
        toggleSkillTooltip: () => {},
        isSkillTooltipActive: () => true,
        toggleRuneTooltip: () => {},
        isRuneTooltipActive: () => false,
        getRuneLookupKey: (name?: string | null) => name ?? '',
        normalizeRuneRarity: () => null,
        toggleTripodTooltip: () => {},
        isTripodTooltipActive: () => false,
        tripodnumber: (slotNumber?: number | null) => slotNumber ?? null,
        getSkillNoteLines: getSkillNoteLines ?? (() => []),
        getInlineSkillScope: () => 'scope',
        toggleArkPassiveTooltip: () => {},
        showArkPassiveTooltip: () => {},
        hideArkPassiveTooltip: () => {},
        isArkPassiveTooltipActive: () => false,
        getArkPassiveTipData: () => undefined,
        hasArkPassiveTipData: () => false,
        getArkPassiveTipCategory: () => 'evolution',
      }))

      return {
        skillsSectionProps,
        currentVariant,
      }
    },
    template: '<SkillsSection v-bind="skillsSectionProps" />',
  })

  const wrapper = await mountSuspended(TestHarness)

  return {
    wrapper,
    currentVariant,
    onSkillAssetsApplied,
  }
}

describe('SkillsSection integration', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  it('keeps fresh tooltip data when an older skill request resolves later', async () => {
    const staleDeferred = createDeferred<{ url: string; description?: string | null }>()

    const fetchMock = createD1FetchMock((url, query) => {
      if (url === '/api/skills' && query.skill_name === 'Old Skill') {
        return staleDeferred.promise
      }

      if (url === '/api/skills' && query.skill_name === 'Fresh Skill') {
        return Promise.resolve({
          url: '/fresh.png',
          description: 'fresh description',
        })
      }

      return undefined
    })

    const { wrapper, currentVariant, onSkillAssetsApplied } = await mountHarness({
      initialVariant: { skills: [{ name: 'Old Skill' }] },
      fetchMock,
    })

    await vi.waitFor(() => {
      expect(wasSkillTooltipRequested(fetchMock, 'Old Skill')).toBe(true)
    })

    currentVariant.value = { skills: [{ name: 'Fresh Skill' }] }

    await vi.waitFor(() => {
      expect(wrapper.text()).toContain('Fresh Skill')
    })

    await vi.waitFor(() => {
      expect(wrapper.html()).toContain('/fresh.png')
      expect(wrapper.text()).toContain('fresh description')
    })

    staleDeferred.resolve({
      url: '/old.png',
      description: 'stale description',
    })
    await flushMicrotasks()

    expect(wrapper.html()).toContain('/fresh.png')
    expect(wrapper.html()).not.toContain('/old.png')
    expect(wrapper.text()).toContain('fresh description')
    expect(onSkillAssetsApplied).toHaveBeenCalledTimes(1)
  })

  it('keeps inline tripod output stable when stale tripod fetch resolves last', async () => {
    const staleTripodDeferred = createDeferred<{ url?: string | null; tier?: number | null; tripod_name?: string | null; description?: string | null }>()

    const fetchMock = createD1FetchMock((url, query) => {
      if (url === '/api/skills' && query.skill_name === 'Old Skill') {
        return Promise.resolve({ url: '/old-skill.png', description: 'old skill' })
      }

      if (url === '/api/skills' && query.skill_name === 'Fresh Skill') {
        return Promise.resolve({ url: '/fresh-skill.png', description: 'fresh skill' })
      }

      if (url === '/api/tripods' && query.tripod_name === 'Old Tripod') {
        return staleTripodDeferred.promise
      }

      return undefined
    })

    const { wrapper, currentVariant, onSkillAssetsApplied } = await mountHarness({
      initialVariant: {
        description: 'old variant notes',
        skills: [{ name: 'Old Skill', notes: 'old tripod note' }],
      },
      getTripodNamesFromNotes: (notes?: string) => notes?.includes('old') ? ['Old Tripod'] : [],
      getSkillNoteLines: (skillName: string, notes?: string) => {
        if (!notes?.includes('old')) {
          return []
        }

        return [{
          isBullet: false,
          parts: [{ type: 'tripod', key: `${skillName}:Old Tripod`, name: 'Old Tripod' }],
        }]
      },
      fetchMock,
    })

    await vi.waitFor(() => {
      expect(wasInlineTripodRequested(fetchMock, 'Old Tripod')).toBe(true)
    })

    currentVariant.value = {
      description: 'fresh variant notes',
      skills: [{ name: 'Fresh Skill', notes: 'fresh only' }],
    }

    await vi.waitFor(() => {
      expect(wrapper.text()).toContain('Fresh Skill')
      expect(wrapper.text()).not.toContain('Old Skill')
    })

    staleTripodDeferred.resolve({
      tripod_name: 'Old Tripod',
      url: '/old-tripod.png',
      tier: 2,
      description: 'stale tripod',
    })
    await flushMicrotasks()

    expect(wrapper.html()).not.toContain('/old-tripod.png')
    expect(wrapper.text()).not.toContain('Old Tripod')
    expect(wrapper.html()).toContain('/fresh-skill.png')
    expect(onSkillAssetsApplied).toHaveBeenCalledTimes(1)
  })

  it('renders localized rune and tripod names when API provides them', async () => {
    const fetchMock = createD1FetchMock((url, query) => {
      if (url === '/api/skills' && query.skill_name === 'Ancient Spear') {
        return Promise.resolve({ url: '/ancient-spear.png', description: 'skill description' })
      }

      if (url === '/api/tripods' && query.tripod_name === 'Quick Prep') {
        return Promise.resolve({
          tripod_name: 'Preparacion rapida',
          url: '/tripod.png',
          tier: 1,
          description: 'tripod description',
        })
      }

      if (url === '/api/runes' && query.name === 'Galewind') {
        return Promise.resolve({
          name: 'Vendaval',
          rarity: 'legendary',
          description: 'rune description',
          url: '/rune.png',
        })
      }

      return undefined
    })

    const { wrapper } = await mountHarness({
      initialVariant: {
        skills: [{
          name: 'Ancient Spear',
          rune: 'Galewind',
          rune_rarity: 'legendary',
          tripods: {
            tier_1: 'Quick Prep',
          },
        }],
      },
      tooltipLocaleValue: 'es',
      fetchMock,
    })

    await vi.waitFor(() => {
      expect(wrapper.text()).toContain('Vendaval')
      expect(wrapper.text()).toContain('Preparacion rapida')
    })
  })

  it('preserves guide casing for english rune names even if API returns lowercase', async () => {
    const fetchMock = createD1FetchMock((url, query) => {
      if (url === '/api/skills' && query.skill_name === 'Ancient Spear') {
        return Promise.resolve({ url: '/ancient-spear.png', description: 'skill description' })
      }

      if (url === '/api/runes' && query.name === 'Bleed') {
        return Promise.resolve({
          name: 'bleed',
          rarity: 'legendary',
          description: 'rune description',
          url: '/rune.png',
        })
      }

      return undefined
    })

    const { wrapper } = await mountHarness({
      initialVariant: {
        skills: [{
          name: 'Ancient Spear',
          rune: 'Bleed',
          rune_rarity: 'legendary',
        }],
      },
      tooltipLocaleValue: 'en',
      fetchMock,
    })

    await vi.waitFor(() => {
      expect(wrapper.text()).toContain('Bleed')
      expect(wrapper.text()).not.toContain('bleed')
    })
  })
})
