import type { Ref } from 'vue'
import type { ArkPassiveCategory, Gem } from '~/types/guide'
import type {
  InlineArkGridCorePart,
  InlineArkPassivePart,
  InlineGuidePart,
  SkillDescriptionPart,
  SkillHeaderLine,
  SkillNoteLine,
} from './useParsing'

type ArkPassiveScope = 'variant' | 'preArk'
type TripodTooltipScope = 'variant' | 'preArk' | 'note-variant' | 'note-preArk' | 'variant-overview'
type RuneRarity = 'uncommon' | 'rare' | 'epic' | 'legendary'

type EngravingDetail = {
  name: string
  level: number
  url: string | null
  description: string | null
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

type ArkPassiveIconDetail = {
  name?: string
  url: string | null
  description?: string | null
}

type ArkGridCoreDetail = {
  core_name: string
  category_key?: string | null
  category_name: string | null
  options: Array<{ points: number; description: string }>
}

type ArkGridRow = {
  label: string
  cores: string[]
}

type ArkGridCategoryMeta = {
  icon: string
  color: string
  label: string
}

type RuneDetail = {
  name: string
  rarity: RuneRarity | null
  description: string | null
  url: string | null
}

type ArkPassiveTipData = {
  name?: string
  url: string | null
  description?: string | null
}

type SectionBindingsOptions = {
  hasHoverPointer: Ref<boolean>
  isTouchDevice: Ref<boolean>
  skillIcons: Ref<Record<string, string | null>>
  skillDescriptions: Ref<Record<string, string | null>>
  tripodIcons: Ref<Record<string, TripodIconDetail>>
  inlineTripods: Ref<Record<string, InlineTripodDetail>>
  runeDetails: Ref<Record<string, RuneDetail>>
  arkPassiveIcons: Ref<Record<string, ArkPassiveIconDetail>>
  engravingDetails: Ref<Record<string, EngravingDetail>>
  arkGridCoreDetails: Ref<Record<string, ArkGridCoreDetail>>
  variantDifficulty: Ref<number>
  arkGridRows: Ref<ArkGridRow[]>
  hasArkGridLabels: Ref<boolean>
  arkGridCategoryMap: Ref<Record<string, ArkGridCategoryMeta>>
  arkGridProseLines: Ref<string[]>
  getInlineSkillScope: (section: string, itemIndex: number, partIndex: number) => string
  getSkillHeaderLines: (skillName: string) => SkillHeaderLine[]
  parseSkillDescription: (description?: string | null) => SkillDescriptionPart[]
  getInlineArkPassiveParts: (text?: string) => InlineArkPassivePart[]
  getInlineGuideParts: (text?: string) => InlineGuidePart[]
  getInlineArkGridCoreParts: (text?: string) => InlineArkGridCorePart[]
  getSkillLookupName: (skill: { name: string; icon?: string }) => string
  getSkillNoteLines: (skillName: string, notes?: string) => SkillNoteLine[]
  getArkPassiveKey: (passive: { name: string; tier?: number; points?: number }) => string
  getArkPassiveTipData: (name: string) => ArkPassiveTipData | undefined
  hasArkPassiveTipData: (name: string) => boolean
  getArkPassiveTipCategory: (name: string) => ArkPassiveCategory
  hasArkGridCoreDetails: (coreName: string) => boolean
  getGemIconKey: (gem: Gem) => string
  getGemTooltipScope: (scope: ArkPassiveScope, type: string) => string
  getDpsTooltipScope: (index: number) => string
  getRotationTooltipScope: (scope: ArkPassiveScope, index: number | string) => string
  getDpsBarColor: (index: number) => string
  getDpsBarWidth: (value: number) => string
  formatDpsValue: (value: number) => string
  tripodnumber: (slotNumber?: number | null) => number | null
  normalizeRuneRarity: (rarity?: string | null) => RuneRarity | null
  getRuneLookupKey: (name?: string | null, rarity?: string | null) => string
  toggleSkillTooltip: (event: Event, scope: string, skillName: string) => void
  isSkillTooltipActive: (scope: string, skillName: string) => boolean
  toggleTripodTooltip: (scope: TripodTooltipScope, skillName: string, tripodName: string, event?: Event) => void
  isTripodTooltipActive: (scope: TripodTooltipScope, skillName: string, tripodName: string) => boolean
  toggleArkPassiveTooltip: (scope: ArkPassiveScope, passive: { name: string; tier?: number }, instanceKey?: string, event?: Event) => void
  showArkPassiveTooltip: (scope: ArkPassiveScope, passive: { name: string; tier?: number }, instanceKey?: string) => void
  hideArkPassiveTooltip: (scope: ArkPassiveScope, passive: { name: string; tier?: number }, instanceKey?: string) => void
  isArkPassiveTooltipActive: (scope: ArkPassiveScope, passive: { name: string; tier?: number }, instanceKey?: string) => boolean
  toggleArkGridTooltip: (coreName: string, event?: Event, instanceKey?: string) => void
  isArkGridTooltipActive: (coreName: string, instanceKey?: string) => boolean
  toggleEngravingTooltip: (event: Event, scope: ArkPassiveScope, engravingName: string) => void
  showEngravingTooltip: (scope: ArkPassiveScope, engravingName: string) => void
  hideEngravingTooltip: (scope: ArkPassiveScope, engravingName: string) => void
  isEngravingTooltipActive: (scope: ArkPassiveScope, engravingName: string) => boolean
  toggleRuneTooltip: (event: Event, scope: ArkPassiveScope, skillName: string) => void
  isRuneTooltipActive: (scope: ArkPassiveScope, skillName: string) => boolean
}

export function useSectionBindings(options: SectionBindingsOptions) {
  const sharedArkPassiveTooltipBindings = {
    toggleArkPassiveTooltip: options.toggleArkPassiveTooltip,
    showArkPassiveTooltip: options.showArkPassiveTooltip,
    hideArkPassiveTooltip: options.hideArkPassiveTooltip,
    isArkPassiveTooltipActive: options.isArkPassiveTooltipActive,
    getArkPassiveTipData: options.getArkPassiveTipData,
    hasArkPassiveTipData: options.hasArkPassiveTipData,
    getArkPassiveTipCategory: options.getArkPassiveTipCategory,
  }

  const sharedSkillTooltipBindings = computed(() => ({
    hasHoverPointer: options.hasHoverPointer.value,
    skillIcons: options.skillIcons.value,
    skillDescriptions: options.skillDescriptions.value,
    getInlineSkillScope: options.getInlineSkillScope,
    toggleSkillTooltip: options.toggleSkillTooltip,
    isSkillTooltipActive: options.isSkillTooltipActive,
    getSkillHeaderLines: options.getSkillHeaderLines,
    parseSkillDescription: options.parseSkillDescription,
  }))

  const sharedInlineTextListBindings = computed(() => ({
    ...sharedSkillTooltipBindings.value,
    ...sharedArkPassiveTooltipBindings,
  }))

  const sharedEngravingSectionBindings = computed(() => ({
    engravingDetails: options.engravingDetails.value,
    hasHoverPointer: options.hasHoverPointer.value,
    isTouchDevice: options.isTouchDevice.value,
    toggleEngravingTooltip: options.toggleEngravingTooltip,
    showEngravingTooltip: options.showEngravingTooltip,
    hideEngravingTooltip: options.hideEngravingTooltip,
    isEngravingTooltipActive: options.isEngravingTooltipActive,
  }))

  const sharedArkPassivesSectionBindings = computed(() => ({
    hasHoverPointer: options.hasHoverPointer.value,
    arkPassiveIcons: options.arkPassiveIcons.value,
    getArkPassiveKey: options.getArkPassiveKey,
    getInlineArkPassiveParts: options.getInlineArkPassiveParts,
    getInlineSkillScope: options.getInlineSkillScope,
    ...sharedArkPassiveTooltipBindings,
  }))

  const sharedGemsSectionBindings = computed(() => ({
    skillIcons: options.skillIcons.value,
    skillDescriptions: options.skillDescriptions.value,
    hasHoverPointer: options.hasHoverPointer.value,
    getGemIconKey: options.getGemIconKey,
    getGemTooltipScope: options.getGemTooltipScope,
    isSkillTooltipActive: options.isSkillTooltipActive,
    toggleSkillTooltip: options.toggleSkillTooltip,
    getSkillHeaderLines: options.getSkillHeaderLines,
    parseSkillDescription: options.parseSkillDescription,
  }))

  const sharedDpsSectionBindings = computed(() => ({
    skillIcons: options.skillIcons.value,
    skillDescriptions: options.skillDescriptions.value,
    hasHoverPointer: options.hasHoverPointer.value,
    getDpsTooltipScope: options.getDpsTooltipScope,
    isSkillTooltipActive: options.isSkillTooltipActive,
    toggleSkillTooltip: options.toggleSkillTooltip,
    getDpsBarColor: options.getDpsBarColor,
    getDpsBarWidth: options.getDpsBarWidth,
    formatDpsValue: options.formatDpsValue,
    getSkillHeaderLines: options.getSkillHeaderLines,
    parseSkillDescription: options.parseSkillDescription,
  }))

  const sharedRotationSectionBindings = computed(() => ({
    skillIcons: options.skillIcons.value,
    skillDescriptions: options.skillDescriptions.value,
    hasHoverPointer: options.hasHoverPointer.value,
    getRotationTooltipScope: options.getRotationTooltipScope,
    isSkillTooltipActive: options.isSkillTooltipActive,
    toggleSkillTooltip: options.toggleSkillTooltip,
    getSkillHeaderLines: options.getSkillHeaderLines,
    parseSkillDescription: options.parseSkillDescription,
  }))

  const sharedSkillsSectionBindings = computed(() => ({
    hasHoverPointer: options.hasHoverPointer.value,
    skillIcons: options.skillIcons.value,
    skillDescriptions: options.skillDescriptions.value,
    tripodIcons: options.tripodIcons.value,
    inlineTripods: options.inlineTripods.value,
    runeDetails: options.runeDetails.value,
    getSkillLookupName: options.getSkillLookupName,
    getSkillHeaderLines: options.getSkillHeaderLines,
    parseSkillDescription: options.parseSkillDescription,
    toggleSkillTooltip: options.toggleSkillTooltip,
    isSkillTooltipActive: options.isSkillTooltipActive,
    toggleRuneTooltip: options.toggleRuneTooltip,
    isRuneTooltipActive: options.isRuneTooltipActive,
    getRuneLookupKey: options.getRuneLookupKey,
    normalizeRuneRarity: options.normalizeRuneRarity,
    toggleTripodTooltip: options.toggleTripodTooltip,
    isTripodTooltipActive: options.isTripodTooltipActive,
    tripodnumber: options.tripodnumber,
    getSkillNoteLines: options.getSkillNoteLines,
    getInlineSkillScope: options.getInlineSkillScope,
    ...sharedArkPassiveTooltipBindings,
  }))

  const sharedVariantOverviewBindings = computed(() => ({
    variantDifficulty: options.variantDifficulty.value,
    hasHoverPointer: options.hasHoverPointer.value,
    skillIcons: options.skillIcons.value,
    skillDescriptions: options.skillDescriptions.value,
    inlineTripods: options.inlineTripods.value,
    arkGridRows: options.arkGridRows.value,
    hasArkGridLabels: options.hasArkGridLabels.value,
    arkGridCategoryMap: options.arkGridCategoryMap.value,
    arkGridCoreDetails: options.arkGridCoreDetails.value,
    arkGridProseLines: options.arkGridProseLines.value,
    getInlineGuideParts: options.getInlineGuideParts,
    getInlineArkGridCoreParts: options.getInlineArkGridCoreParts,
    getInlineSkillScope: options.getInlineSkillScope,
    toggleSkillTooltip: options.toggleSkillTooltip,
    isSkillTooltipActive: options.isSkillTooltipActive,
    getSkillHeaderLines: options.getSkillHeaderLines,
    parseSkillDescription: options.parseSkillDescription,
    toggleTripodTooltip: options.toggleTripodTooltip,
    isTripodTooltipActive: options.isTripodTooltipActive,
    ...sharedArkPassiveTooltipBindings,
    toggleArkGridTooltip: options.toggleArkGridTooltip,
    isArkGridTooltipActive: options.isArkGridTooltipActive,
    hasArkGridCoreDetails: options.hasArkGridCoreDetails,
  }))

  const sharedPreArkOverviewBindings = computed(() => ({
    hasHoverPointer: options.hasHoverPointer.value,
    skillIcons: options.skillIcons.value,
    skillDescriptions: options.skillDescriptions.value,
    getInlineSkillScope: options.getInlineSkillScope,
    ...sharedArkPassiveTooltipBindings,
    toggleSkillTooltip: options.toggleSkillTooltip,
    isSkillTooltipActive: options.isSkillTooltipActive,
    getSkillHeaderLines: options.getSkillHeaderLines,
    parseSkillDescription: options.parseSkillDescription,
  }))

  return {
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
  }
}
