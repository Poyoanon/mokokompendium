<script setup lang="ts">
import type { ArkPassiveCategory, PreArkGrid } from '~/types/guide'
import InlineTextListSection from './InlineTextListSection.vue'

type InlineGuideTextPart =
  | { type: 'text'; value: string }
  | { type: 'skill'; value: string }
  | { type: 'passive'; value: string }
  | { type: 'tripod'; key: string; name: string }

type SkillHeaderLine = {
  text: string
  color: string
}

type SkillDescriptionPart = {
  text: string
  color: string | null
}

type ArkPassiveTipData = {
  name?: string
  url: string | null
  description?: string | null
}

const props = defineProps<{
  preArkGrid: PreArkGrid
  isOpen: boolean
  hasHoverPointer: boolean
  skillIcons: Record<string, string | null>
  skillDescriptions: Record<string, string | null>
  getInlineGuideTextParts: (text: string) => InlineGuideTextPart[]
  getInlineSkillScope: (section: string, itemIndex: number, partIndex: number) => string
  toggleArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string, event?: Event) => void
  showArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => void
  hideArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => void
  isArkPassiveTooltipActive: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => boolean
  getArkPassiveTipData: (name: string) => ArkPassiveTipData | undefined
  hasArkPassiveTipData: (name: string) => boolean
  getArkPassiveTipCategory: (name: string) => ArkPassiveCategory
  toggleSkillTooltip: (event: Event, scope: string, skillName: string) => void
  isSkillTooltipActive: (scope: string, skillName: string) => boolean
  getSkillHeaderLines: (skillName: string) => SkillHeaderLine[]
  parseSkillDescription: (description?: string | null) => SkillDescriptionPart[]
}>()

const emit = defineEmits<{
  'update:isOpen': [isOpen: boolean]
}>()

const toggleOpen = () => {
  emit('update:isOpen', !props.isOpen)
}
</script>

<template>
  <section
    class="mk-surface-card mk-pre-ark-card p-4 transition-all"
    :class="props.isOpen ? '' : 'mk-pre-ark-card-clickable cursor-pointer'"
  >
    <button
      type="button"
      class="group flex w-full items-center justify-between text-left cursor-pointer"
      @click="toggleOpen"
    >
      <div>
        <p class="mk-eyebrow">Pre-Ark Grid</p>
        <p class="text-sm text-zinc-400">Starter setup before Ark Grid progression.</p>
      </div>
      <span class="flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 px-2 py-1 transition-colors group-hover:border-zinc-700">
        <UIcon
          name="i-lucide-chevron-down"
          class="size-4 text-amber-300 transition-transform"
          :class="{ 'rotate-180': props.isOpen }"
        />
      </span>
    </button>

    <div v-if="props.isOpen" class="mt-3 pt-3 pb-3 border-t border-b border-zinc-800 space-y-4">
      <p v-if="props.preArkGrid.description" class="text-sm text-zinc-400">{{ props.preArkGrid.description }}</p>
      <p v-if="props.preArkGrid.stats" class="text-sm text-zinc-400">
        <span class="text-zinc-400">Stats:</span> {{ props.preArkGrid.stats }}
      </p>

      <InlineTextListSection
        title="Priorities"
        item-key-prefix="pre-ark-priority"
        icon-name="i-lucide-arrow-right"
        heading-class="mk-eyebrow mb-2"
        skill-scope-base="pre-ark-priority"
        passive-scope-base="pre-ark-priority-passive"
        :items="props.preArkGrid.priorities ?? []"
        :part-parser="props.getInlineGuideTextParts"
        :has-hover-pointer="props.hasHoverPointer"
        :skill-icons="props.skillIcons"
        :skill-descriptions="props.skillDescriptions"
        :get-inline-skill-scope="props.getInlineSkillScope"
        :toggle-skill-tooltip="props.toggleSkillTooltip"
        :is-skill-tooltip-active="props.isSkillTooltipActive"
        :get-skill-header-lines="props.getSkillHeaderLines"
        :parse-skill-description="props.parseSkillDescription"
        passive-scope="preArk"
        :toggle-ark-passive-tooltip="props.toggleArkPassiveTooltip"
        :show-ark-passive-tooltip="props.showArkPassiveTooltip"
        :hide-ark-passive-tooltip="props.hideArkPassiveTooltip"
        :is-ark-passive-tooltip-active="props.isArkPassiveTooltipActive"
        :get-ark-passive-tip-data="props.getArkPassiveTipData"
        :has-ark-passive-tip-data="props.hasArkPassiveTipData"
        :get-ark-passive-tip-category="props.getArkPassiveTipCategory"
      />

      <slot />
    </div>
  </section>
</template>
