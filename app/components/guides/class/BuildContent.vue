<script setup lang="ts">
import type {
  ArkGridVariant,
  ArkPassive,
  Build,
  DpsDistribution,
  Engraving,
  PreArkGrid,
} from '~/types/guide'
import type {
  InlineGuidePart,
  InlineSkillPart,
} from '~/composables/guides/class/useParsing'
import type { useSectionBindings } from '~/composables/guides/class/useSectionBindings'
import ArkPassivesSection from './ArkPassivesSection.vue'
import DpsDistributionSection from './DpsDistributionSection.vue'
import EngravingsSection from './EngravingsSection.vue'
import GemsSection from './GemsSection.vue'
import InlineTextListSection from './InlineTextListSection.vue'
import PreArkOverviewSection from './PreArkOverviewSection.vue'
import RotationSection from './RotationSection.vue'
import SkillsSection from './SkillsSection.vue'
import VariantOverviewSection from './VariantOverviewSection.vue'

type RotationSectionData = {
  title: string
  steps: string[]
}

type SectionBindings = ReturnType<typeof useSectionBindings>
type SharedInlineTextListBindings = SectionBindings['sharedInlineTextListBindings']['value']
type SharedEngravingSectionBindings = SectionBindings['sharedEngravingSectionBindings']['value']
type SharedArkPassivesSectionBindings = SectionBindings['sharedArkPassivesSectionBindings']['value']
type SharedGemsSectionBindings = SectionBindings['sharedGemsSectionBindings']['value']
type SharedDpsSectionBindings = SectionBindings['sharedDpsSectionBindings']['value']
type SharedRotationSectionBindings = SectionBindings['sharedRotationSectionBindings']['value']
type SharedSkillsSectionBindings = SectionBindings['sharedSkillsSectionBindings']['value']
type SharedVariantOverviewBindings = SectionBindings['sharedVariantOverviewBindings']['value']
type SharedPreArkOverviewBindings = SectionBindings['sharedPreArkOverviewBindings']['value']

type BuildContentData = {
  currentBuild: Build
  currentVariant: ArkGridVariant
  preArkGrid?: PreArkGrid
  isPreArkGridOpen: boolean
  displayedPreArkPassives: ArkPassive[]
  displayedVariantPriorities: string[]
  displayedVariantEngravings: Engraving[]
  preArkRotationSections: RotationSectionData[]
  variantRotationSections: RotationSectionData[]
  dpsDistribution: DpsDistribution[]
}

type BuildContentActions = {
  getInlineGuideTextParts: (text: string) => InlineGuidePart[]
  getInlineSkillParts: (text?: string) => InlineSkillPart[]
  isPreArkSkillExpanded: (skillName: string) => boolean
  togglePreArkSkillNotes: (skillName: string) => void
  isVariantSkillExpanded: (skillName: string) => boolean
  toggleSkillNotes: (skillName: string) => void
}

type BuildContentBindings = {
  sharedInlineTextListBindings: SharedInlineTextListBindings
  sharedEngravingSectionBindings: SharedEngravingSectionBindings
  sharedArkPassivesSectionBindings: SharedArkPassivesSectionBindings
  sharedGemsSectionBindings: SharedGemsSectionBindings
  sharedDpsSectionBindings: SharedDpsSectionBindings
  sharedRotationSectionBindings: SharedRotationSectionBindings
  sharedSkillsSectionBindings: SharedSkillsSectionBindings
  sharedVariantOverviewBindings: SharedVariantOverviewBindings
  sharedPreArkOverviewBindings: SharedPreArkOverviewBindings
}

const props = defineProps<{
  content: BuildContentData
  actions: BuildContentActions
  bindings: BuildContentBindings
}>()

const emit = defineEmits<{
  'update:isPreArkGridOpen': [value: boolean]
}>()

const onPreArkOpenUpdate = (value: boolean) => {
  emit('update:isPreArkGridOpen', value)
}
</script>

<template>
  <div class="space-y-6">
    <VariantOverviewSection
      :current-build-engraving="props.content.currentBuild.engraving"
      :current-variant="props.content.currentVariant"
      v-bind="props.bindings.sharedVariantOverviewBindings"
    />

    <PreArkOverviewSection
      v-if="props.content.preArkGrid"
      :pre-ark-grid="props.content.preArkGrid"
      :is-open="props.content.isPreArkGridOpen"
      :get-inline-guide-text-parts="props.actions.getInlineGuideTextParts"
      v-bind="props.bindings.sharedPreArkOverviewBindings"
      @update:is-open="onPreArkOpenUpdate"
    >
      <SkillsSection
        scope="preArk"
        heading-class="mk-eyebrow mb-2"
        note-skill-scope-base="pre-ark-note"
        note-passive-scope-base="pre-ark-note-passive"
        note-tripod-scope="note-preArk"
        :skills="props.content.preArkGrid.skills ?? []"
        :is-skill-expanded="props.actions.isPreArkSkillExpanded"
        :toggle-skill-notes="props.actions.togglePreArkSkillNotes"
        v-bind="props.bindings.sharedSkillsSectionBindings"
      />
      <EngravingsSection
        scope="preArk"
        heading-class="mk-eyebrow mb-2"
        :engravings="props.content.preArkGrid.engravings ?? []"
        v-bind="props.bindings.sharedEngravingSectionBindings"
      />
      <ArkPassivesSection
        scope="preArk"
        heading-class="mk-eyebrow"
        tips-container-class=""
        tip-scope-base="pre-ark-passive-tip"
        :passives="props.content.displayedPreArkPassives"
        :passive-tips="props.content.preArkGrid.arkPassiveTips ?? []"
        v-bind="props.bindings.sharedArkPassivesSectionBindings"
      />
      <GemsSection
        scope="preArk"
        :gems="props.content.preArkGrid.gems ?? []"
        v-bind="props.bindings.sharedGemsSectionBindings"
      />
      <RotationSection
        scope="preArk"
        :rotation-sections="props.content.preArkRotationSections"
        v-bind="props.bindings.sharedRotationSectionBindings"
      />
      <InlineTextListSection
        title="Tips"
        item-key-prefix="pre-ark-tip"
        icon-name="i-lucide-check"
        heading-class="mk-eyebrow mb-2"
        skill-scope-base="pre-ark-tip"
        :items="props.content.preArkGrid.tips ?? []"
        :part-parser="props.actions.getInlineSkillParts"
        passive-scope="preArk"
        v-bind="props.bindings.sharedInlineTextListBindings"
      />
    </PreArkOverviewSection>

    <InlineTextListSection
      title="Priorities"
      item-key-prefix="variant-priority"
      icon-name="i-lucide-check"
      heading-class="mk-eyebrow mb-3"
      skill-scope-base="variant-priority"
      passive-scope-base="variant-priority-passive"
      :items="props.content.displayedVariantPriorities"
      :part-parser="props.actions.getInlineGuideTextParts"
      passive-scope="variant"
      v-bind="props.bindings.sharedInlineTextListBindings"
    />

    <SkillsSection
      scope="variant"
      heading-class="mk-eyebrow mb-3"
      note-skill-scope-base="variant-note"
      note-passive-scope-base="variant-note-passive"
      note-tripod-scope="note-variant"
      :skills="props.content.currentVariant.skills ?? []"
      :is-skill-expanded="props.actions.isVariantSkillExpanded"
      :toggle-skill-notes="props.actions.toggleSkillNotes"
      v-bind="props.bindings.sharedSkillsSectionBindings"
    />

    <EngravingsSection
      scope="variant"
      heading-class="mk-eyebrow mb-3"
      :engravings="props.content.displayedVariantEngravings"
      v-bind="props.bindings.sharedEngravingSectionBindings"
    />

    <ArkPassivesSection
      scope="variant"
      heading-class="mk-eyebrow mb-3"
      tips-container-class="mb-3"
      tip-scope-base="variant-passive-tip"
      :passives="props.content.currentVariant.arkPassives ?? []"
      :passive-tips="props.content.currentVariant.arkPassiveTips ?? []"
      v-bind="props.bindings.sharedArkPassivesSectionBindings"
    />

    <GemsSection
      scope="variant"
      :gems="props.content.currentVariant.gems ?? []"
      v-bind="props.bindings.sharedGemsSectionBindings"
    />

    <DpsDistributionSection
      :dps-distribution="props.content.dpsDistribution"
      v-bind="props.bindings.sharedDpsSectionBindings"
    />

    <RotationSection
      scope="variant"
      :rotation-sections="props.content.variantRotationSections"
      v-bind="props.bindings.sharedRotationSectionBindings"
    />
  </div>
</template>
