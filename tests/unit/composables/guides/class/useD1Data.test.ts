import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { createDeferred, flushMicrotasks } from '../../../../helpers/async'
import {
  createD1FetchMock,
  wasInlineTripodRequested,
  wasSkillCatalogRequested,
  wasSkillTooltipRequested,
} from '../../../../helpers/d1-fetch'

const createOptions = (classId = 101) => {
  const tooltipLocale = ref('en')
  const guide = ref<any>({ meta: { class_id: classId }, synergy: { skills: [] } })
  const currentBuild = ref<any>(undefined)
  const currentVariant = ref<any>(undefined)
  const preArkGrid = ref<any>(undefined)
  const preArkPassives = ref<any[]>([])
  const isTooltipDataReady = ref(true)

  const dbSkillNames = ref<string[]>(['stale'])
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

  const inlineSkillMentionNames = ref<string[]>([])
  const arkPassiveByName = ref<Record<string, unknown>>({})
  const arkPassiveTipNames = ref<string[]>([])
  const arkGridCoreNames = ref<string[]>([])

  const onSkillAssetsApplied = vi.fn()

  const options: any = {
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
    inlineSkillMentionNames,
    arkPassiveByName,
    arkPassiveTipNames,
    arkGridCoreNames,
    getRotationSteps: () => [],
    getSkillLookupName: (skill: { name: string }) => skill.name,
    getTripodNamesFromNotes: () => [],
    getInlineTripodKey: (skillName: string, tripodName: string) => `${skillName}:${tripodName}`,
    getGuideTripodKey: (tripodName: string) => tripodName,
    getArkPassiveKey: (passive: { name: string }) => passive.name,
    getArkPassiveTipLookupKey: (name: string) => name,
    normalizeRuneRarity: () => null,
    getRuneLookupKey: (name?: string | null) => name ?? '',
    appendSkillDetailLines: (description: string | null) => description,
    onSkillAssetsApplied,
  }

  return {
    options,
    tooltipLocale,
    guide,
    currentBuild,
    currentVariant,
    arkGridCoreNames,
    arkGridCoreDetails,
    isTooltipDataReady,
    dbSkillNames,
    skillIcons,
    skillDisplayNames,
    skillDescriptions,
    skillTooltipMeta,
    arkPassiveIcons,
    engravingDetails,
    inlineTripods,
    onSkillAssetsApplied,
  }
}

describe('useD1Data race handling', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('does not apply stale skill catalog responses after invalidation', async () => {
    vi.stubGlobal('window', {})

    const deferred = createDeferred<{ skills?: string[] }>()
    const fetchMock = createD1FetchMock((url, query) => {
      if (url === '/api/skills' && query.all === 1 && query.class_id === 101) {
        return deferred.promise
      }

      return undefined
    })
    vi.stubGlobal('$fetch', fetchMock)

    const { useD1Data } = await import('../../../../../app/composables/guides/class/useD1Data')
    const { options, isTooltipDataReady, dbSkillNames } = createOptions(101)
    useD1Data(options)

    await vi.waitFor(() => {
      expect(wasSkillCatalogRequested(fetchMock, 101)).toBe(true)
    })

    isTooltipDataReady.value = false
    await flushMicrotasks()

    deferred.resolve({ skills: ['  First  ', 'Second'] })
    await flushMicrotasks()

    expect(dbSkillNames.value).toEqual([])
  })

  it('keeps skill catalog empty when catalog fetch fails', async () => {
    vi.stubGlobal('window', {})
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    const fetchMock = createD1FetchMock((url, query) => {
      if (url === '/api/skills' && query.all === 1 && query.class_id === 101) {
        return Promise.reject(new Error('catalog unavailable'))
      }

      return undefined
    })
    vi.stubGlobal('$fetch', fetchMock)

    const { useD1Data } = await import('../../../../../app/composables/guides/class/useD1Data')
    const { options, dbSkillNames } = createOptions(101)
    useD1Data(options)

    await vi.waitFor(() => {
      expect(wasSkillCatalogRequested(fetchMock, 101)).toBe(true)
    })
    await flushMicrotasks()

    expect(dbSkillNames.value).toEqual([])
    expect(consoleError.mock.calls.some(([message]) => String(message).includes('Failed to fetch skill catalog:'))).toBe(true)
  })

  it('keeps the latest skill catalog result when runs overlap', async () => {
    vi.stubGlobal('window', {})

    const staleDeferred = createDeferred<{ skills?: string[] }>()
    const fetchMock = createD1FetchMock((url, query) => {
      if (url === '/api/skills' && query.all === 1 && query.class_id === 101) {
        return staleDeferred.promise
      }

      if (url === '/api/skills' && query.all === 1 && query.class_id === 202) {
        return Promise.resolve({ skills: ['  Fresh Skill  ', '', 'Burst'] })
      }

      return undefined
    })
    vi.stubGlobal('$fetch', fetchMock)

    const { useD1Data } = await import('../../../../../app/composables/guides/class/useD1Data')
    const { options, guide, dbSkillNames } = createOptions(101)
    useD1Data(options)

    await vi.waitFor(() => {
      expect(wasSkillCatalogRequested(fetchMock, 101)).toBe(true)
    })

    guide.value = { meta: { class_id: 202 }, synergy: { skills: [] } }

    await vi.waitFor(() => {
      expect(dbSkillNames.value).toEqual(['Fresh Skill', 'Burst'])
    })

    staleDeferred.resolve({ skills: ['Should Not Win'] })
    await flushMicrotasks()

    expect(dbSkillNames.value).toEqual(['Fresh Skill', 'Burst'])
  })

  it('stores null skill assets when skill tooltip fetch fails', async () => {
    vi.stubGlobal('window', {})
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    const fetchMock = createD1FetchMock((url, query) => {
      if (url === '/api/skills' && query.skill_name === 'Fail Skill') {
        return Promise.reject(new Error('tooltip unavailable'))
      }

      return undefined
    })
    vi.stubGlobal('$fetch', fetchMock)

    const { useD1Data } = await import('../../../../../app/composables/guides/class/useD1Data')
    const { options, currentVariant, skillIcons, skillDescriptions, skillTooltipMeta, onSkillAssetsApplied } = createOptions(101)
    currentVariant.value = { skills: [{ name: 'Fail Skill' }] }
    useD1Data(options)

    await vi.waitFor(() => {
      expect(wasSkillTooltipRequested(fetchMock, 'Fail Skill')).toBe(true)
    })

    await vi.waitFor(() => {
      expect(skillIcons.value).toEqual({ 'Fail Skill': null })
    })
    expect(skillDescriptions.value).toEqual({ 'Fail Skill': null })
    expect(skillTooltipMeta.value['Fail Skill']?.castTag).toBeNull()
    expect(onSkillAssetsApplied).toHaveBeenCalledTimes(1)
    expect(consoleError.mock.calls.some(([message]) => String(message).includes('Failed to fetch skill icon for Fail Skill:'))).toBe(true)
  })

  it('does not let stale skill-asset responses overwrite newer runs', async () => {
    vi.stubGlobal('window', {})

    const staleDeferred = createDeferred<{ url: string; description?: string | null }>()
    const fetchMock = createD1FetchMock((url, query) => {
      if (url === '/api/skills' && query.skill_name === 'Old Skill') {
        return staleDeferred.promise
      }

      if (url === '/api/skills' && query.skill_name === 'Fresh Skill') {
        return Promise.resolve({ url: '/fresh.png', description: 'fresh description' })
      }

      return undefined
    })
    vi.stubGlobal('$fetch', fetchMock)

    const { useD1Data } = await import('../../../../../app/composables/guides/class/useD1Data')
    const { options, currentVariant, skillIcons, skillDescriptions, onSkillAssetsApplied } = createOptions(101)
    currentVariant.value = { skills: [{ name: 'Old Skill' }] }
    useD1Data(options)

    await vi.waitFor(() => {
      expect(wasSkillTooltipRequested(fetchMock, 'Old Skill')).toBe(true)
    })

    currentVariant.value = { skills: [{ name: 'Fresh Skill' }] }

    await vi.waitFor(() => {
      expect(skillIcons.value).toEqual({ 'Fresh Skill': '/fresh.png' })
    })
    expect(skillDescriptions.value).toEqual({ 'Fresh Skill': 'fresh description' })

    staleDeferred.resolve({ url: '/old.png', description: 'stale description' })
    await flushMicrotasks()

    expect(skillIcons.value).toEqual({ 'Fresh Skill': '/fresh.png' })
    expect(skillDescriptions.value).toEqual({ 'Fresh Skill': 'fresh description' })
    expect(onSkillAssetsApplied).toHaveBeenCalledTimes(1)
  })

  it('ignores stale inline tripod fetches after cancellation', async () => {
    vi.stubGlobal('window', {})

    const tripodDeferred = createDeferred<{ url?: string | null; tier?: number | null; tripod_name?: string | null }>()
    const fetchMock = createD1FetchMock((url, query) => {
      if (url === '/api/skills' && query.skill_name === 'Old Skill') {
        return Promise.resolve({ url: '/old-skill.png', description: 'old skill' })
      }

      if (url === '/api/skills' && query.skill_name === 'Fresh Skill') {
        return Promise.resolve({ url: '/fresh-skill.png', description: 'fresh skill' })
      }

      if (url === '/api/tripods' && query.tripod_name === 'Old Tripod') {
        return tripodDeferred.promise
      }

      return undefined
    })
    vi.stubGlobal('$fetch', fetchMock)

    const { useD1Data } = await import('../../../../../app/composables/guides/class/useD1Data')
    const { options, currentVariant, skillIcons, inlineTripods, onSkillAssetsApplied } = createOptions(101)
    options.getTripodNamesFromNotes = (notes?: string) => notes?.includes('old') ? ['Old Tripod'] : []

    currentVariant.value = {
      description: 'old rotation notes',
      skills: [{ name: 'Old Skill' }],
    }

    useD1Data(options)

    await vi.waitFor(() => {
      expect(wasInlineTripodRequested(fetchMock, 'Old Tripod')).toBe(true)
    })

    options.getTripodNamesFromNotes = () => []
    currentVariant.value = {
      description: 'fresh rotation notes',
      skills: [{ name: 'Fresh Skill' }],
    }

    await vi.waitFor(() => {
      expect(skillIcons.value).toEqual({ 'Fresh Skill': '/fresh-skill.png' })
    })

    tripodDeferred.resolve({
      tripod_name: 'Old Tripod',
      url: '/old-tripod.png',
      tier: 2,
    })
    await flushMicrotasks()

    expect(skillIcons.value).toEqual({ 'Fresh Skill': '/fresh-skill.png' })
    expect(inlineTripods.value).toEqual({})
    expect(onSkillAssetsApplied).toHaveBeenCalledTimes(1)
  })

  it('forwards locale to tooltip API requests', async () => {
    vi.stubGlobal('window', {})
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const fetchMock = createD1FetchMock(() => undefined)
    vi.stubGlobal('$fetch', fetchMock)

    const { useD1Data } = await import('../../../../../app/composables/guides/class/useD1Data')
    const { options, tooltipLocale, currentBuild, currentVariant, arkGridCoreNames } = createOptions(101)

    tooltipLocale.value = 'es'
    currentBuild.value = { engravings: [{ name: 'Grudge' }] }
    currentVariant.value = {
      skills: [
        {
          name: 'Tempest Slash',
          tripods: ['Quick Prep'],
          rune: 'Galewind',
          rune_rarity: 'legendary',
        },
      ],
      arkPassives: [{ name: 'Surge Enhancement', points: 1, category: 'evolution' }],
    }
    arkGridCoreNames.value = ['Combination']

    useD1Data(options)

    await vi.waitFor(() => {
      const calledUrls = fetchMock.mock.calls.map(([url]) => url)
      expect(calledUrls).toContain('/api/skills')
      expect(calledUrls).toContain('/api/tripods')
      expect(calledUrls).toContain('/api/ark-passives')
      expect(calledUrls).toContain('/api/arkgrid-cores')
      expect(calledUrls).toContain('/api/runes')
      expect(calledUrls).toContain('/api/engravings')
    })

    for (const [url, request] of fetchMock.mock.calls) {
      if (typeof url !== 'string' || !url.startsWith('/api/')) continue
      const query = (request as { query?: Record<string, unknown> } | undefined)?.query ?? {}
      expect(query.locale).toBe('es')
    }
  })

  it('indexes ark grid details by lookup name when localized core names differ', async () => {
    vi.stubGlobal('window', {})

    const fetchMock = createD1FetchMock((url) => {
      if (url === '/api/arkgrid-cores') {
        return Promise.resolve({
          cores: [
            {
              core_lookup_name: 'Combination',
              core_name: 'Combinacion',
              category_name: 'Categoria',
              options: [{ points: 10, description: 'Descripcion' }],
            },
          ],
        })
      }

      return undefined
    })
    vi.stubGlobal('$fetch', fetchMock)

    const { useD1Data } = await import('../../../../../app/composables/guides/class/useD1Data')
    const { options, tooltipLocale, arkGridCoreNames, arkGridCoreDetails } = createOptions(101)

    tooltipLocale.value = 'es'
    arkGridCoreNames.value = ['Combination']
    useD1Data(options)

    await vi.waitFor(() => {
      expect(arkGridCoreDetails.value.Combination?.core_name).toBe('Combinacion')
    })
  })

  it('stores localized ark passive display names from tooltip responses', async () => {
    vi.stubGlobal('window', {})

    const fetchMock = createD1FetchMock((url, query) => {
      if (url === '/api/ark-passives' && query.name === 'Release Potential') {
        return Promise.resolve({
          name: 'Potencial liberado',
          url: '/passive.png',
          description: 'descripcion',
        })
      }

      return undefined
    })
    vi.stubGlobal('$fetch', fetchMock)

    const { useD1Data } = await import('../../../../../app/composables/guides/class/useD1Data')
    const { options, tooltipLocale, currentVariant, arkPassiveIcons } = createOptions(101)

    tooltipLocale.value = 'es'
    currentVariant.value = {
      skills: [],
      arkPassives: [{ name: 'Release Potential', points: 1, category: 'leap' }],
    }
    useD1Data(options)

    await vi.waitFor(() => {
      expect(arkPassiveIcons.value['Release Potential']).toEqual({
        name: 'Potencial liberado',
        url: '/passive.png',
        description: 'descripcion',
      })
    })
  })

  it('stores localized engraving names from tooltip responses', async () => {
    vi.stubGlobal('window', {})

    const fetchMock = createD1FetchMock((url, query) => {
      if (url === '/api/engravings' && query.name === 'Grudge') {
        return Promise.resolve({
          name: 'Rencor',
          level: 3,
          url: '/engraving.png',
          description: 'descripcion',
        })
      }

      return undefined
    })
    vi.stubGlobal('$fetch', fetchMock)

    const { useD1Data } = await import('../../../../../app/composables/guides/class/useD1Data')
    const { options, tooltipLocale, currentBuild, engravingDetails } = createOptions(101)

    tooltipLocale.value = 'es'
    currentBuild.value = { engravings: [{ name: 'Grudge' }] }
    useD1Data(options)

    await vi.waitFor(() => {
      expect(engravingDetails.value.Grudge).toEqual({
        name: 'Rencor',
        level: 3,
        url: '/engraving.png',
        description: 'descripcion',
      })
    })
  })

  it('falls back to english locale when unsupported locale is requested', async () => {
    vi.stubGlobal('window', {})

    const fetchMock = createD1FetchMock(() => undefined)
    vi.stubGlobal('$fetch', fetchMock)

    const { useD1Data } = await import('../../../../../app/composables/guides/class/useD1Data')
    const { options, tooltipLocale, currentVariant } = createOptions(101)

    tooltipLocale.value = 'it'
    currentVariant.value = { skills: [{ name: 'Tempest Slash' }] }
    useD1Data(options)

    await vi.waitFor(() => {
      expect(fetchMock.mock.calls.some(([url]) => url === '/api/skills')).toBe(true)
    })

    for (const [url, request] of fetchMock.mock.calls) {
      if (url !== '/api/skills') continue
      const query = (request as { query?: Record<string, unknown> } | undefined)?.query ?? {}
      expect(query.locale).toBe('en')
    }
  })
})
