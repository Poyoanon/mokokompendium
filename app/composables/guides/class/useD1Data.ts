import type { ComputedRef, Ref } from 'vue'
import { normalizeTooltipLocale } from '~/utils/tooltip-locale'
import type {
  ArkPassive,
  ArkPassiveCategory,
  ArkGridVariant,
  Build,
  ClassGuideDocument,
  PreArkGrid,
  Skill,
} from '~/types/guide'
import type { SkillTooltipMeta } from './useParsing'

type RuneRarity = 'uncommon' | 'rare' | 'epic' | 'legendary'

type RuneDetails = {
  name: string
  rarity: RuneRarity | null
  description: string | null
  url: string | null
}

type SkillApiResponse = {
  localized_name?: string | null
  url: string
  description?: string | null
  cast_tag?: string | null
  element_tag?: string | null
  cast_tag_color?: string | null
  element_tag_color?: string | null
  cooldown_seconds?: number | null
  parts_attack_level?: number | null
  stiffness_type?: number | null
  directional_attack_type?: number | null
  counter_attack_type?: number | null
  super_armor_type?: number | null
}

type TripodApiResponse = {
  url?: string | null
  tier?: number | null
  slot_number?: number | null
  tripod_name?: string | null
  description?: string | null
  error?: string
}

type TripodIconDetail = {
  name?: string
  url: string | null
  tier?: number
  slotNumber?: number
  description?: string | null
}

type InlineTripodDetail = {
  name: string
  url: string | null
  tier?: number
  description?: string | null
}

type TooltipDataOptions = {
  tooltipLocale?: Ref<string> | ComputedRef<string>
  guide: Ref<ClassGuideDocument | null>
  currentBuild: ComputedRef<Build | undefined>
  currentVariant: ComputedRef<ArkGridVariant | undefined>
  preArkGrid: ComputedRef<PreArkGrid | undefined>
  preArkPassives: ComputedRef<ArkPassive[]>
  isTooltipDataReady: Ref<boolean>
  dbSkillNames: Ref<string[]>
  skillIcons: Ref<Record<string, string | null>>
  skillDisplayNames: Ref<Record<string, string>>
  skillDescriptions: Ref<Record<string, string | null>>
  skillTooltipMeta: Ref<Record<string, SkillTooltipMeta>>
  tripodIcons: Ref<Record<string, TripodIconDetail>>
  inlineTripods: Ref<Record<string, InlineTripodDetail>>
  arkPassiveIcons: Ref<Record<string, { name?: string; url: string | null; description?: string | null }>>
  dbArkPassiveCategoryByName: Ref<Record<string, ArkPassiveCategory>>
  arkGridCoreDetails: Ref<Record<string, { core_name: string; category_key?: string | null; category_name: string | null; options: Array<{ points: number; description: string }> }>>
  engravingDetails: Ref<Record<string, { name: string; level: number; url: string | null; description: string | null }>>
  runeDetails: Ref<Record<string, RuneDetails>>
  inlineSkillMentionNames: ComputedRef<string[]>
  arkPassiveByName: ComputedRef<Record<string, { name: string; category: ArkPassiveCategory; tier?: number; points?: number }>>
  arkPassiveTipNames: ComputedRef<string[]>
  arkGridCoreNames: ComputedRef<string[]>
  getRotationSteps: (source?: { rotation?: string[] | null; rotation_sections?: Array<{ title?: string; steps?: string[] }> | null; rotationSections?: Array<{ title?: string; steps?: string[] }> | null } | null) => string[]
  getSkillLookupName: (skill: { name: string; icon?: string }) => string
  getTripodNamesFromNotes: (notes?: string) => string[]
  getInlineTripodKey: (skillName: string, tripodName: string) => string
  getGuideTripodKey: (tripodName: string) => string
  getArkPassiveKey: (passive: { name: string; tier?: number; points?: number }) => string
  getArkPassiveTipLookupKey: (name: string) => string
  normalizeRuneRarity: (rarity?: string | null) => RuneRarity | null
  getRuneLookupKey: (name?: string | null, rarity?: string | null) => string
  appendSkillDetailLines: (description: string | null, meta: SkillTooltipMeta) => string | null
  onSkillAssetsApplied?: () => Promise<void> | void
  onArkPassiveAssetsApplied?: () => Promise<void> | void
  onEngravingAssetsApplied?: () => Promise<void> | void
}

const mapArkPassiveClassifyTypeToCategory = (classifyType?: number | null): ArkPassiveCategory | null => {
  if (classifyType === 1) return 'evolution'
  if (classifyType === 2) return 'enlightenment'
  if (classifyType === 3) return 'leap'
  return null
}

const normalizeTripodApiResponse = (response: TripodApiResponse, fallbackTripodName: string) => {
  if (response.error) {
    throw new Error(response.error)
  }

  if (typeof response.url !== 'string' || response.url.length === 0 || typeof response.tier !== 'number') {
    throw new Error('Tripod data missing required fields')
  }

  return {
    tripodName: typeof response.tripod_name === 'string' && response.tripod_name.length > 0
      ? response.tripod_name
      : fallbackTripodName,
    url: response.url,
    tier: response.tier,
    slotNumber: typeof response.slot_number === 'number' ? response.slot_number : undefined,
    description: response.description ?? null,
  }
}

const isClientRuntime = () => import.meta.client || typeof window !== 'undefined'

const createInvalidationGuard = (onInvalidate: (cleanup: () => void) => void) => {
  let cancelled = false
  onInvalidate(() => {
    cancelled = true
  })

  return () => cancelled
}

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

export function useD1Data(options: TooltipDataOptions) {
  const {
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
    getRotationSteps,
    getSkillLookupName,
    getTripodNamesFromNotes,
    getInlineTripodKey,
    getGuideTripodKey,
    getArkPassiveKey,
    getArkPassiveTipLookupKey,
    normalizeRuneRarity,
    getRuneLookupKey,
    appendSkillDetailLines,
    onSkillAssetsApplied,
    onArkPassiveAssetsApplied,
    onEngravingAssetsApplied,
  } = options

  const { getTripodUrl } = useIconUrl()
  const getTooltipLocale = () => normalizeTooltipLocale(tooltipLocale?.value)

  watchEffect(async (onInvalidate) => {
    if (!isClientRuntime() || !isTooltipDataReady.value) return

    dbSkillNames.value = []
    const locale = getTooltipLocale()
    const classId = Number(guide.value?.meta?.class_id ?? 0)
    if (!classId) return

    const isCancelled = createInvalidationGuard(onInvalidate)

    try {
      const data = await $fetch<{ skills?: string[] }>('/api/skills', {
        query: { all: 1, class_id: classId, locale },
      })

      if (isCancelled()) return
      dbSkillNames.value = (data.skills ?? [])
        .map((skillName) => skillName.trim())
        .filter((skillName) => skillName.length > 0)
    } catch (error) {
      if (!isCancelled()) {
        console.error('Failed to fetch skill catalog:', error)
      }
    }
  })

  watchEffect(async (onInvalidate) => {
    if (!isClientRuntime() || !isTooltipDataReady.value) return

    const variantSkills = currentVariant.value?.skills ?? []
    const preArkSkills = preArkGrid.value?.skills ?? []
    const skills = [...variantSkills, ...preArkSkills]
    const dpsSkills = currentVariant.value?.dps_distribution ?? currentVariant.value?.dpsDistribution ?? []
    const variantGems = currentVariant.value?.gems ?? []
    const preArkGems = preArkGrid.value?.gems ?? []
    const synergySkills = guide.value?.synergy?.skills ?? []
    const variantRotation = getRotationSteps(currentVariant.value)
    const preArkRotation = getRotationSteps(preArkGrid.value)
    const inlineMentionNames = inlineSkillMentionNames.value

    const skillLevelsByName = new Map<string, number>()
    for (const skill of skills) {
      if (skill.level) {
        skillLevelsByName.set(getSkillLookupName(skill), skill.level)
      }
    }
    for (const skill of dpsSkills) {
      if ('level' in skill && typeof skill.level === 'number') {
        skillLevelsByName.set(skill.name, skill.level)
      }
    }

    const gemIconNames = [...variantGems, ...preArkGems].map((gem) => gem.icon ?? gem['alt-icon'] ?? gem.skill)
    const gemSkillNames = [...variantGems, ...preArkGems].map((gem) => gem.skill)
    const rotationSkills = [...variantRotation, ...preArkRotation]

    const skillIconNames = new Set([
      ...skills.map((skill) => getSkillLookupName(skill)),
      ...dpsSkills.map((skill) => skill.name),
      ...gemIconNames,
      ...gemSkillNames,
      ...synergySkills,
      ...rotationSkills,
      ...inlineMentionNames,
    ])

    if (!skillIconNames.size) return

    skillIcons.value = {}
    skillDisplayNames.value = {}
    skillDescriptions.value = {}
    skillTooltipMeta.value = {}
    tripodIcons.value = {}
    inlineTripods.value = {}

    const classId = guide.value?.meta?.class_id
    const skillCacheBust = import.meta.dev ? Date.now() : undefined
    const locale = getTooltipLocale()

    const nextSkillIcons: Record<string, string | null> = {}
    const nextSkillDisplayNames: Record<string, string> = {}
    const nextSkillDescriptions: Record<string, string | null> = {}
    const nextSkillTooltipMeta: Record<string, SkillTooltipMeta> = {}
    const nextTripodIcons: Record<string, TripodIconDetail> = {}
    const nextInlineTripods: Record<string, InlineTripodDetail> = {}
    const inlineTripodRequests = new Map<string, { key: string; tripodName: string; skillNames: string[] }>()

    const isCancelled = createInvalidationGuard(onInvalidate)

    const registerInlineTripodRequest = (key: string, tripodName: string, skillNames: string[]) => {
      const normalizedSkillNames = skillNames
        .map((skillName) => skillName.trim())
        .filter((skillName) => skillName.length > 0)

      if (!normalizedSkillNames.length) return

      const existing = inlineTripodRequests.get(key)
      if (existing) {
        existing.skillNames = Array.from(new Set([...existing.skillNames, ...normalizedSkillNames]))
        return
      }

      inlineTripodRequests.set(key, {
        key,
        tripodName,
        skillNames: Array.from(new Set(normalizedSkillNames)),
      })
    }

    const tripodRequests: Array<Promise<void>> = []

    for (const skill of skills) {
      if (skill.tripods) {
        if (typeof skill.tripods === 'object' && !Array.isArray(skill.tripods)) {
          for (const [key, tripodValue] of Object.entries(skill.tripods)) {
            const tierMatch = key.match(/tier_(\d)/)
            const tierNumRaw = tierMatch?.[1]
            const tierNum = tierNumRaw ? Number.parseInt(tierNumRaw, 10) : undefined

            if (typeof tripodValue === 'number' && tierNum) {
              const url = getTripodUrl(tierNum, tripodValue)
              const iconKey = `${skill.name}:${key}`
              nextTripodIcons[iconKey] = { url, tier: tierNum }
            } else if (typeof tripodValue === 'string' && classId) {
              tripodRequests.push((async () => {
                try {
                  const response = await $fetch<TripodApiResponse>('/api/tripods', {
                  query: {
                    class_id: classId,
                    skill_name: skill.name,
                    tripod_name: tripodValue,
                    locale,
                  },
                })
                  const data = normalizeTripodApiResponse(response, tripodValue)
                  const iconKey = `${skill.name}:${key}`
                  nextTripodIcons[iconKey] = {
                    name: data.tripodName,
                    url: data.url,
                    tier: data.tier,
                    slotNumber: data.slotNumber,
                  }
                } catch (error) {
                  console.error(`Failed to fetch tripod ${tripodValue} for ${skill.name}:`, error)
                  const iconKey = `${skill.name}:${key}`
                  nextTripodIcons[iconKey] = { url: null, tier: tierNum }
                }
              })())
            }
          }
        } else if (Array.isArray(skill.tripods) && classId) {
          for (const tripodName of skill.tripods) {
            tripodRequests.push((async () => {
              try {
                const response = await $fetch<TripodApiResponse>('/api/tripods', {
                  query: {
                    class_id: classId,
                    skill_name: skill.name,
                    tripod_name: tripodName,
                    locale,
                  },
                })
                const data = normalizeTripodApiResponse(response, tripodName)
                const iconKey = `${skill.name}:${tripodName}`
                nextTripodIcons[iconKey] = {
                  name: data.tripodName,
                  url: data.url,
                  tier: data.tier,
                  slotNumber: data.slotNumber,
                  description: data.description,
                }
              } catch (error) {
                console.error(`Failed to fetch tripod ${tripodName} for ${skill.name}:`, error)
                const iconKey = `${skill.name}:${tripodName}`
                nextTripodIcons[iconKey] = { url: null, tier: undefined, description: null }
              }
            })())
          }
        }
      }

      if (skill.notes) {
        for (const tripodName of getTripodNamesFromNotes(skill.notes)) {
          const key = getInlineTripodKey(skill.name, tripodName)
          registerInlineTripodRequest(key, tripodName, [skill.name])
        }
      }
    }

    const guideInlineTripodSkillNames = [
      ...(currentVariant.value?.skills ?? []).map((skill) => skill.name),
      ...(preArkGrid.value?.skills ?? []).map((skill) => skill.name),
    ]

    for (const tripodName of getTripodNamesFromNotes(currentVariant.value?.description)) {
      registerInlineTripodRequest(getGuideTripodKey(tripodName), tripodName, guideInlineTripodSkillNames)
    }

    const skillNamesToFetch = Array.from(skillIconNames)
    await Promise.all(skillNamesToFetch.map(async (skillName) => {
      if (!classId) {
        nextSkillIcons[skillName] = null
        nextSkillDisplayNames[skillName] = skillName
        nextSkillDescriptions[skillName] = null
        nextSkillTooltipMeta[skillName] = createEmptySkillTooltipMeta()
        return
      }

      try {
        const skillLevel = skillLevelsByName.get(skillName)
        const data = await $fetch<SkillApiResponse>('/api/skills', {
          query: {
            class_id: classId,
            skill_name: skillName,
            ...(skillLevel !== undefined ? { level: skillLevel } : {}),
            locale,
            ...(skillCacheBust !== undefined && { t: skillCacheBust }),
          },
        })

        const skillMeta: SkillTooltipMeta = {
          castTag: data.cast_tag ?? null,
          elementTag: data.element_tag ?? null,
          castTagColor: data.cast_tag_color ?? null,
          elementTagColor: data.element_tag_color ?? null,
          cooldownSeconds: data.cooldown_seconds ?? null,
          partsAttackLevel: data.parts_attack_level ?? null,
          stiffnessType: data.stiffness_type ?? null,
          directionalAttackType: data.directional_attack_type ?? null,
          counterAttackType: data.counter_attack_type ?? null,
          superArmorType: data.super_armor_type ?? null,
        }

        nextSkillIcons[skillName] = data.url
        nextSkillDisplayNames[skillName] = typeof data.localized_name === 'string' && data.localized_name.trim().length > 0
          ? data.localized_name.trim()
          : skillName
        nextSkillDescriptions[skillName] = appendSkillDetailLines(data.description ?? null, skillMeta)
        nextSkillTooltipMeta[skillName] = skillMeta
      } catch (error) {
        console.error(`Failed to fetch skill icon for ${skillName}:`, error)
        nextSkillIcons[skillName] = null
        nextSkillDisplayNames[skillName] = skillName
        nextSkillDescriptions[skillName] = null
        nextSkillTooltipMeta[skillName] = createEmptySkillTooltipMeta()
      }
    }))

    if (tripodRequests.length) {
      await Promise.all(tripodRequests)
    }

    if (isCancelled()) return

    if (classId && inlineTripodRequests.size) {
      await Promise.all([...inlineTripodRequests.values()].map(async (request) => {
        let resolved: { tripod_name: string; url: string; tier: number; description?: string | null } | null = null

        for (const skillName of request.skillNames) {
          try {
            const response = await $fetch<TripodApiResponse>('/api/tripods', {
              query: {
                class_id: classId,
                skill_name: skillName,
                tripod_name: request.tripodName,
                locale,
              },
            })
            const normalized = normalizeTripodApiResponse(response, request.tripodName)
            resolved = {
              tripod_name: normalized.tripodName,
              url: normalized.url,
              tier: normalized.tier,
              description: normalized.description,
            }
            break
          } catch {
            // Keep trying alternate skill names.
          }
        }

        if (!resolved) {
          console.error(`Failed to fetch inline tripod for ${request.tripodName}`)
          return
        }

        nextInlineTripods[request.key] = {
          name: resolved.tripod_name,
          url: resolved.url,
          tier: resolved.tier,
          description: resolved.description,
        }
      }))
    }

    if (isCancelled()) return

    skillIcons.value = nextSkillIcons
    skillDisplayNames.value = nextSkillDisplayNames
    skillDescriptions.value = nextSkillDescriptions
    skillTooltipMeta.value = nextSkillTooltipMeta
    tripodIcons.value = nextTripodIcons
    inlineTripods.value = nextInlineTripods

    await onSkillAssetsApplied?.()
  })

  watchEffect(async (onInvalidate) => {
    if (!isClientRuntime() || !isTooltipDataReady.value) return

    dbArkPassiveCategoryByName.value = {}
    const locale = getTooltipLocale()

    const classId = Number(guide.value?.meta?.class_id ?? 0)
    if (!classId) return

    const isCancelled = createInvalidationGuard(onInvalidate)

    try {
      const data = await $fetch<{ passives?: Array<{ passive_name?: string | null; classify_type?: number | null }> }>('/api/ark-passives', {
        query: {
          all: 1,
          class_id: classId,
          locale,
        },
      })

      if (isCancelled()) return

      const nextCategories: Record<string, ArkPassiveCategory> = {}
      for (const passive of data.passives ?? []) {
        const name = typeof passive.passive_name === 'string' ? passive.passive_name.trim() : ''
        if (!name || nextCategories[name]) continue

        const category = mapArkPassiveClassifyTypeToCategory(passive.classify_type)
        if (!category) continue
        nextCategories[name] = category
      }

      dbArkPassiveCategoryByName.value = nextCategories
    } catch (error) {
      if (!isCancelled()) {
        console.error('Failed to fetch ark passive catalog:', error)
      }
    }
  })

  watchEffect(async (onInvalidate) => {
    if (!isClientRuntime() || !isTooltipDataReady.value) return

    const passives = [
      ...(currentVariant.value?.arkPassives ?? []),
      ...preArkPassives.value,
    ]

    const tipPassiveNames = arkPassiveTipNames.value
    arkPassiveIcons.value = {}
    if (!passives.length && !tipPassiveNames.length) return

    const classId = guide.value?.meta?.class_id
    const locale = getTooltipLocale()
    const nextArkPassiveIcons: Record<string, { name?: string; url: string | null; description?: string | null }> = {}
    const passiveRequests = new Map<string, { name: string; tier?: number; points?: number }>()

    for (const passive of passives) {
      const key = getArkPassiveKey(passive)
      if (!passiveRequests.has(key)) passiveRequests.set(key, passive)
    }

    for (const passiveName of tipPassiveNames) {
      if (arkPassiveByName.value[passiveName]) continue
      const key = getArkPassiveTipLookupKey(passiveName)
      if (!passiveRequests.has(key)) {
        passiveRequests.set(key, { name: passiveName })
      }
    }

    const isCancelled = createInvalidationGuard(onInvalidate)

    await Promise.all([...passiveRequests.values()].map(async (passive) => {
      if (isCancelled()) return
      const key = getArkPassiveKey(passive)

      try {
        const data = await $fetch<{ name?: string | null; url: string; description?: string | null }>('/api/ark-passives', {
          query: {
            name: passive.name,
            ...(classId && { class_id: classId }),
            ...(passive.tier && { tier: passive.tier }),
            ...(passive.points !== undefined && { level: passive.points }),
            locale,
          },
        })

        nextArkPassiveIcons[key] = {
          name: typeof data.name === 'string' && data.name.trim().length > 0 ? data.name.trim() : passive.name,
          url: data.url,
          description: data.description ?? null,
        }
      } catch (error) {
        console.error(`Failed to fetch ark passive icon for ${passive.name}:`, error)
        nextArkPassiveIcons[key] = { name: passive.name, url: null, description: null }
      }
    }))

    if (isCancelled()) return
    arkPassiveIcons.value = nextArkPassiveIcons
    await onArkPassiveAssetsApplied?.()
  })

  watchEffect(async (onInvalidate) => {
    if (!isClientRuntime() || !isTooltipDataReady.value) return

    const names = arkGridCoreNames.value
    const locale = getTooltipLocale()
    arkGridCoreDetails.value = {}
    if (!names.length) return

    const isCancelled = createInvalidationGuard(onInvalidate)

    try {
      const data = await $fetch<{ cores: { core_lookup_name?: string | null; core_name: string; category_key?: string | null; category_name: string | null; options: Array<{ points: number; description: string }> }[] }>('/api/arkgrid-cores', {
        query: { names: names.join('|'), locale },
      })

      if (isCancelled()) return

      const nextDetails: Record<string, { core_name: string; category_key?: string | null; category_name: string | null; options: Array<{ points: number; description: string }> }> = {}
      for (const core of data.cores ?? []) {
        const lookupName = typeof core.core_lookup_name === 'string' && core.core_lookup_name.trim().length > 0
          ? core.core_lookup_name.trim()
          : core.core_name

        nextDetails[lookupName] = core

        // Keep localized name lookups as aliases for localized prose references.
        if (core.core_name !== lookupName) {
          nextDetails[core.core_name] = core
        }
      }
      arkGridCoreDetails.value = nextDetails
    } catch (error) {
      console.error('Failed to fetch ark grid cores:', error)
    }
  })

  watchEffect(async (onInvalidate) => {
    if (!isClientRuntime() || !isTooltipDataReady.value) return

    const runeSkills: Skill[] = [
      ...(currentVariant.value?.skills ?? []),
      ...(preArkGrid.value?.skills ?? []),
    ]
    const locale = getTooltipLocale()

    runeDetails.value = {}

    const runeRequests = new Map<string, { name: string; rarity: RuneRarity | null }>()
    for (const skill of runeSkills) {
      if (!skill.rune) continue
      const key = getRuneLookupKey(skill.rune, skill.rune_rarity)
      if (!key || runeRequests.has(key)) continue
      runeRequests.set(key, {
        name: skill.rune,
        rarity: normalizeRuneRarity(skill.rune_rarity),
      })
    }

    if (!runeRequests.size) return

    const isCancelled = createInvalidationGuard(onInvalidate)

    const nextRuneDetails: Record<string, RuneDetails> = {}

    await Promise.all([...runeRequests.entries()].map(async ([key, rune]) => {
      if (isCancelled()) return

      try {
        const data = await $fetch<{ name?: string; rarity?: RuneRarity | null; description?: string | null; url?: string | null; error?: string }>('/api/runes', {
          query: {
            name: rune.name,
            ...(rune.rarity ? { rarity: rune.rarity } : {}),
            locale,
          },
        })

        if (data.error || !data.name) {
          throw new Error(data.error ?? `Rune not found: ${rune.name}`)
        }

        const localizedRuneName = data.name.trim()
        const runeDisplayName = locale === 'en'
          ? rune.name
          : (localizedRuneName || rune.name)

        nextRuneDetails[key] = {
          name: runeDisplayName,
          rarity: normalizeRuneRarity(data.rarity ?? rune.rarity),
          description: data.description ?? null,
          url: data.url ?? null,
        }
      } catch (error) {
        console.error(`Failed to fetch rune tooltip for ${rune.name}:`, error)
        nextRuneDetails[key] = {
          name: rune.name,
          rarity: rune.rarity,
          description: null,
          url: null,
        }
      }
    }))

    if (isCancelled()) return
    runeDetails.value = nextRuneDetails
  })

  watchEffect(async (onInvalidate) => {
    if (!isClientRuntime() || !isTooltipDataReady.value) return

    const buildEngravings = currentBuild.value?.engravings ?? []
    const preArkEngravings = preArkGrid.value?.engravings ?? []
    const engravingNames = Array.from(new Set([
      ...buildEngravings.map((eng) => eng.name),
      ...preArkEngravings.map((eng) => eng.name),
    ].filter(Boolean)))

    engravingDetails.value = {}
    if (!engravingNames.length) return

    const classId = guide.value?.meta?.class_id
    const locale = getTooltipLocale()
    const nextEngravingDetails: Record<string, { name: string; level: number; url: string | null; description: string | null }> = {}

    const isCancelled = createInvalidationGuard(onInvalidate)

    await Promise.all(engravingNames.map(async (name) => {
      if (isCancelled()) return

      try {
        const data = await $fetch<{ name: string; level: number; url: string | null; description?: string | null }>('/api/engravings', {
          query: {
            name,
            ...(classId && { class_id: classId }),
            locale,
          },
        })

        nextEngravingDetails[name] = {
          name: data.name,
          level: data.level,
          url: data.url,
          description: data.description ?? null,
        }
      } catch (error) {
        console.error(`Failed to fetch engraving tooltip for ${name}:`, error)
        nextEngravingDetails[name] = {
          name,
          level: 0,
          url: null,
          description: null,
        }
      }
    }))

    if (isCancelled()) return
    engravingDetails.value = nextEngravingDetails
    await onEngravingAssetsApplied?.()
  })
}
