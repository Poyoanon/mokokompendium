<script setup lang="ts">
import BuildContent from '~/components/guides/class/BuildContent.vue'
import HeaderAndSelectors from '~/components/guides/class/HeaderAndSelectors.vue'
import IdentitySynergySection from '~/components/guides/class/IdentitySynergySection.vue'
import { useD1Data } from '~/composables/guides/class/useD1Data'
import { useAssetState } from '~/composables/guides/class/useAssetState'
import { useDocument } from '~/composables/guides/class/useDocument'
import {
  getArkPassiveKey,
  getGemIconKey,
  getGuideTripodKey,
  getInlineTripodKey,
  getRuneLookupKey,
  normalizeRuneRarity,
  tripodnumber,
} from '~/composables/guides/class/useHelpers'
import { useParsing } from '~/composables/guides/class/useParsing'
import { useRenderReadiness } from '~/composables/guides/class/useRenderReadiness'
import { useSectionBindings } from '~/composables/guides/class/useSectionBindings'
import { useSelectionState } from '~/composables/guides/class/useSelectionState'
import { useTooltipInteractions } from '~/composables/guides/class/useTooltipInteractions'
import { useSiteLocale } from '~/composables/useSiteLocale'

const {
  guide,
  guideForComposables,
  guideUpdatedDate,
} = await useDocument()
const { locale: tooltipLocale } = useSiteLocale()

const {
  skillIcons,
  skillDisplayNames,
  skillDescriptions,
  skillTooltipMeta,
  dbSkillNames,
  tripodIcons,
  inlineTripods,
  arkPassiveIcons,
  dbArkPassiveCategoryByName,
  arkGridCoreDetails,
  engravingDetails,
  runeDetails,
} = useAssetState()

const isTooltipDataReady = ref(false)

const {
  isTouchDevice,
  hasHoverPointer,
  inlineSkillTooltipStyleVars,
  clearAllTooltips,
  toggleTripodTooltip,
  isTripodTooltipActive,
  toggleSkillTooltip,
  isSkillTooltipActive,
  toggleArkPassiveTooltip,
  isArkPassiveTooltipActive,
  showArkPassiveTooltip,
  hideArkPassiveTooltip,
  toggleArkGridTooltip,
  isArkGridTooltipActive,
  toggleEngravingTooltip,
  isEngravingTooltipActive,
  showEngravingTooltip,
  hideEngravingTooltip,
  toggleRuneTooltip,
  isRuneTooltipActive,
  getRotationTooltipScope,
  getGemTooltipScope,
  getDpsTooltipScope,
} = useTooltipInteractions({
  getArkPassiveKey,
})

const {
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
} = useSelectionState({
  guide: guideForComposables,
  clearAllTooltips,
})

const {
  preArkRotationSections,
  variantRotationSections,
  variantDifficulty,
  getRotationSteps,
  getTripodNamesFromNotes,
  getSkillNoteLines,
  getSkillLookupName,
  getInlineSkillParts,
  getInlineSkillScope,
  getInlineArkPassiveParts,
  getInlineGuideTextParts,
  getInlineGuideParts,
  getArkPassiveTipLookupKey,
  getArkPassiveTipData,
  hasArkPassiveTipData,
  hasArkGridCoreDetails,
  getArkPassiveTipCategory,
  parseSkillDescription,
  appendSkillDetailLines,
  getSkillHeaderLines,
  arkGridRows,
  hasArkGridLabels,
  arkGridCoreNames,
  getInlineArkGridCoreParts,
  arkGridProseLines,
  arkGridCategoryMap,
  dpsDistribution,
  formatDpsValue,
  getDpsBarWidth,
  getDpsBarColor,
  inlineSkillMentionNames,
  arkPassiveByName,
  arkPassiveTipNames,
} = useParsing({
  tooltipLocale,
  guide: guideForComposables,
  currentBuild,
  currentVariant,
  preArkGrid,
  preArkPassives,
  dbSkillNames,
  dbArkPassiveCategoryByName,
  arkPassiveIcons,
  arkGridCoreDetails,
  skillTooltipMeta,
  getInlineTripodKey,
  getGuideTripodKey,
  getArkPassiveKey,
})

const {
  isGuideShellReady,
  isGuideContentReady,
  hydrateGuideImages,
  refreshGuideShellReady,
} = useRenderReadiness({
  guideBody: computed(() => guide.value?.body),
})

onMounted(() => {
  if (!import.meta.client) return

  isTooltipDataReady.value = true
})

useD1Data({
  tooltipLocale,
  guide: guideForComposables,
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
  onSkillAssetsApplied: async () => {
    if (!import.meta.client) return
    await nextTick()
    hydrateGuideImages()
    if (!isGuideShellReady.value) {
      refreshGuideShellReady()
    }
  },
  onArkPassiveAssetsApplied: () => {
    if (import.meta.client && !isGuideShellReady.value) {
      refreshGuideShellReady()
    }
  },
  onEngravingAssetsApplied: () => {
    if (import.meta.client && !isGuideShellReady.value) {
      refreshGuideShellReady()
    }
  },
})

const {
  sharedSkillTooltipBindings,
  sharedInlineTextListBindings,
  sharedEngravingSectionBindings,
  sharedArkPassivesSectionBindings,
  sharedGemsSectionBindings,
  sharedDpsSectionBindings,
  sharedRotationSectionBindings,
  sharedSkillsSectionBindings,
  sharedVariantOverviewBindings,
  sharedPreArkOverviewBindings,
} = useSectionBindings({
  hasHoverPointer,
  isTouchDevice,
  skillIcons,
  skillDescriptions,
  tripodIcons,
  inlineTripods,
  runeDetails,
  arkPassiveIcons,
  engravingDetails,
  arkGridCoreDetails,
  variantDifficulty,
  arkGridRows,
  hasArkGridLabels,
  arkGridCategoryMap,
  arkGridProseLines,
  getInlineSkillScope,
  getSkillHeaderLines,
  parseSkillDescription,
  getInlineArkPassiveParts,
  getInlineGuideParts,
  getInlineArkGridCoreParts,
  getSkillLookupName,
  getSkillNoteLines,
  getArkPassiveKey,
  getArkPassiveTipData,
  hasArkPassiveTipData,
  getArkPassiveTipCategory,
  hasArkGridCoreDetails,
  getGemIconKey,
  getGemTooltipScope,
  getDpsTooltipScope,
  getRotationTooltipScope,
  getDpsBarColor,
  getDpsBarWidth,
  formatDpsValue,
  tripodnumber,
  normalizeRuneRarity,
  getRuneLookupKey,
  toggleSkillTooltip,
  isSkillTooltipActive,
  toggleTripodTooltip,
  isTripodTooltipActive,
  toggleArkPassiveTooltip,
  showArkPassiveTooltip,
  hideArkPassiveTooltip,
  isArkPassiveTooltipActive,
  toggleArkGridTooltip,
  isArkGridTooltipActive,
  toggleEngravingTooltip,
  showEngravingTooltip,
  hideEngravingTooltip,
  isEngravingTooltipActive,
  toggleRuneTooltip,
  isRuneTooltipActive,
})

const buildContentData = computed(() => {
  if (!currentBuild.value || !currentVariant.value) {
    return null
  }

  return {
    currentBuild: currentBuild.value,
    currentVariant: currentVariant.value,
    preArkGrid: preArkGrid.value,
    isPreArkGridOpen: isPreArkGridOpen.value,
    displayedPreArkPassives: displayedPreArkPassives.value,
    displayedVariantPriorities: displayedVariantPriorities.value,
    displayedVariantEngravings: displayedVariantEngravings.value,
    preArkRotationSections: preArkRotationSections.value,
    variantRotationSections: variantRotationSections.value,
    dpsDistribution: dpsDistribution.value,
  }
})

const buildContentActions = {
  getInlineGuideTextParts,
  getInlineSkillParts,
  isPreArkSkillExpanded,
  togglePreArkSkillNotes,
  isVariantSkillExpanded,
  toggleSkillNotes,
}

const buildContentBindings = computed(() => ({
  sharedInlineTextListBindings: sharedInlineTextListBindings.value,
  sharedEngravingSectionBindings: sharedEngravingSectionBindings.value,
  sharedArkPassivesSectionBindings: sharedArkPassivesSectionBindings.value,
  sharedGemsSectionBindings: sharedGemsSectionBindings.value,
  sharedDpsSectionBindings: sharedDpsSectionBindings.value,
  sharedRotationSectionBindings: sharedRotationSectionBindings.value,
  sharedSkillsSectionBindings: sharedSkillsSectionBindings.value,
  sharedVariantOverviewBindings: sharedVariantOverviewBindings.value,
  sharedPreArkOverviewBindings: sharedPreArkOverviewBindings.value,
}))

const headerAndSelectorsProps = computed(() => ({
  title: guide.value?.title ?? '',
  description: guide.value?.description ?? '',
  guideUpdatedDate: guideUpdatedDate.value,
  builds: guide.value?.builds ?? [],
  selectedBuild: selectedBuild.value,
  variants: currentBuild.value?.variants ?? [],
  selectedVariant: selectedVariant.value,
  currentVariantRecommended: Boolean(currentVariant.value?.recommended),
}))

const identitySynergyProps = computed(() => ({
  identity: guide.value?.identity,
  synergy: guide.value?.synergy,
  ...sharedSkillTooltipBindings.value,
}))
</script>

<template>
  <div class="guide-page py-8 md:py-10">
    <UContainer class="max-w-4xl min-[1800px]:max-w-5xl min-[2200px]:max-w-6xl mx-auto">
      <template v-if="guide">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm text-zinc-500 mb-4">
          <NuxtLink to="/guides" class="hover:text-zinc-300 transition-colors">Guides</NuxtLink>
          <UIcon name="i-lucide-chevron-right" class="size-3" />
          <NuxtLink to="/guides" class="hover:text-zinc-300 transition-colors">Class Guides</NuxtLink>
          <UIcon name="i-lucide-chevron-right" class="size-3" />
          <span class="text-zinc-400">{{ guide.subclass }}</span>
        </div>

        <div
          v-if="!isGuideShellReady"
          class="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300"
          role="status"
          aria-live="polite"
        >
          <UIcon name="i-lucide-loader-2" class="size-3.5 animate-spin text-amber-300" />
          <span>Loading guide content...</span>
        </div>

        <div
          class="mk-guide-shell"
          :class="isGuideShellReady ? 'mk-guide-shell-ready' : 'mk-guide-shell-pending'"
          :style="inlineSkillTooltipStyleVars"
        >

        <HeaderAndSelectors
          v-bind="headerAndSelectorsProps"
          @update:selected-build="selectedBuild = $event"
          @update:selected-variant="selectedVariant = $event"
        />

        <IdentitySynergySection v-bind="identitySynergyProps" />

        <!-- Build Content -->
        <BuildContent
          v-if="buildContentData"
          :content="buildContentData"
          :actions="buildContentActions"
          :bindings="buildContentBindings"
          @update:is-pre-ark-grid-open="isPreArkGridOpen = $event"
        />

        <!-- Markdown content -->
        <div v-if="guide.body" class="mt-6 pt-4 border-t border-zinc-800">
          <div
            class="prose prose-sm prose-invert max-w-none mk-prose-content [&>h2]:text-white [&>h3]:text-zinc-200 [&>p]:text-zinc-300 [&>ul]:text-zinc-300 [&>strong]:text-white"
            :class="isGuideContentReady ? 'mk-prose-ready' : 'mk-prose-pending'"
          >
            <ContentRenderer :value="guide" />
          </div>
        </div>
        </div>
      </template>

      <!-- Not found -->
      <div v-else class="text-center py-20">
        <h1 class="text-2xl font-bold text-white mb-4">Guide not found</h1>
        <UButton to="/guides" variant="outline">Back to Guides</UButton>
      </div>
    </UContainer>
  </div>
</template>
