import type { Ref } from 'vue'
import type {
  ArkPassive,
  ArkGridVariant,
  Build,
  ClassGuideDocument,
  Engraving,
  PreArkGrid,
} from '~/types/guide'

type SelectionStateOptions = {
  guide: Ref<ClassGuideDocument | null>
  clearAllTooltips: () => void
}

const getRecommendedVariantIndex = (build?: Build) => {
  if (!build?.variants?.length) return 0
  const recommendedIndex = build.variants.findIndex((variant) => variant.recommended)
  return recommendedIndex === -1 ? 0 : recommendedIndex
}

export function useSelectionState(options: SelectionStateOptions) {
  const { guide, clearAllTooltips } = options

  const selectedBuild = ref(0)
  const selectedVariant = ref(0)
  const isPreArkGridOpen = ref(false)

  const currentBuild = computed<Build | undefined>(() => guide.value?.builds?.[selectedBuild.value])
  const currentVariant = computed<ArkGridVariant | undefined>(() => currentBuild.value?.variants?.[selectedVariant.value])
  const preArkGrid = computed<PreArkGrid | undefined>(() => currentBuild.value?.preArkGrid)
  const preArkPassives = computed<ArkPassive[]>(() => preArkGrid.value?.arkPassives ?? [])

  const displayedVariantPriorities = computed<string[]>(() =>
    currentVariant.value?.priorities?.length
      ? currentVariant.value.priorities
      : (currentVariant.value?.tips ?? []),
  )

  const displayedVariantEngravings = computed<Engraving[]>(() =>
    currentVariant.value?.engravings?.length
      ? currentVariant.value.engravings
      : (currentBuild.value?.engravings ?? []),
  )

  const displayedPreArkPassives = computed<ArkPassive[]>(() =>
    preArkPassives.value.length ? preArkPassives.value : (currentVariant.value?.arkPassives ?? []),
  )

  const expandedSkills = ref<Set<string>>(new Set())
  const expandedPreArkSkills = ref<Set<string>>(new Set())

  const toggleSkillNotes = (skillName: string) => {
    clearAllTooltips()
    if (expandedSkills.value.has(skillName)) {
      expandedSkills.value.delete(skillName)
      return
    }
    expandedSkills.value.add(skillName)
  }

  const togglePreArkSkillNotes = (skillName: string) => {
    clearAllTooltips()
    if (expandedPreArkSkills.value.has(skillName)) {
      expandedPreArkSkills.value.delete(skillName)
      return
    }
    expandedPreArkSkills.value.add(skillName)
  }

  const isVariantSkillExpanded = (skillName: string) => expandedSkills.value.has(skillName)
  const isPreArkSkillExpanded = (skillName: string) => expandedPreArkSkills.value.has(skillName)

  watch(currentBuild, (build) => {
    selectedVariant.value = getRecommendedVariantIndex(build)
    isPreArkGridOpen.value = false
    expandedSkills.value = new Set()
    expandedPreArkSkills.value = new Set()
    clearAllTooltips()
  }, { immediate: true })

  watch(selectedVariant, () => {
    expandedSkills.value = new Set()
    clearAllTooltips()
  })

  return {
    selectedBuild,
    selectedVariant,
    isPreArkGridOpen,
    currentBuild,
    currentVariant,
    preArkGrid,
    preArkPassives,
    displayedVariantPriorities,
    displayedVariantEngravings,
    displayedPreArkPassives,
    toggleSkillNotes,
    togglePreArkSkillNotes,
    isVariantSkillExpanded,
    isPreArkSkillExpanded,
  }
}
