<script setup lang="ts">
import type { ArkPassiveCategory, ArkGridVariant } from '~/types/guide'
import ArkGridCoreTooltip from './ArkGridCoreTooltip.vue'
import ArkPassiveTooltip from './ArkPassiveTooltip.vue'
import SkillTooltip from './SkillTooltip.vue'
import TripodTooltip from './TripodTooltip.vue'

type InlineGuidePart =
  | { type: 'text'; value: string }
  | { type: 'skill'; value: string }
  | { type: 'passive'; value: string }
  | { type: 'tripod'; key: string; name: string }

type InlineArkGridCorePart =
  | { type: 'text'; value: string }
  | { type: 'core'; value: string }

type SkillHeaderLine = {
  text: string
  color: string
}

type SkillDescriptionPart = {
  text: string
  color: string | null
}

type InlineTripodDetail = {
  name: string
  url: string | null
  tier?: number
  description?: string | null
}

type ArkGridRow = {
  label: string
  cores: string[]
}

type ArkGridCoreOption = {
  points: number
  description: string
}

type ArkGridCoreDetail = {
  core_name: string
  category_key?: string | null
  category_name: string | null
  options: ArkGridCoreOption[]
}

type ArkGridCategoryMeta = {
  icon: string
  color: string
  label: string
}

type ArkPassiveTipData = {
  name?: string
  url: string | null
  description?: string | null
}

type TripodTooltipScope = 'variant' | 'preArk' | 'note-variant' | 'note-preArk' | 'variant-overview'

const props = defineProps<{
  currentBuildEngraving: string
  currentVariant: ArkGridVariant
  variantDifficulty: number
  hasHoverPointer: boolean
  skillIcons: Record<string, string | null>
  skillDescriptions: Record<string, string | null>
  inlineTripods: Record<string, InlineTripodDetail>
  arkGridRows: ArkGridRow[]
  hasArkGridLabels: boolean
  arkGridCategoryMap: Record<string, ArkGridCategoryMeta>
  arkGridCoreDetails: Record<string, ArkGridCoreDetail>
  arkGridProseLines: string[]
  getInlineGuideParts: (text?: string) => InlineGuidePart[]
  getInlineArkGridCoreParts: (text?: string) => InlineArkGridCorePart[]
  getInlineSkillScope: (section: string, itemIndex: number, partIndex: number) => string
  toggleSkillTooltip: (event: Event, scope: string, skillName: string) => void
  isSkillTooltipActive: (scope: string, skillName: string) => boolean
  getSkillHeaderLines: (skillName: string) => SkillHeaderLine[]
  parseSkillDescription: (description?: string | null) => SkillDescriptionPart[]
  toggleTripodTooltip: (scope: TripodTooltipScope, skillName: string, tripodName: string, event?: Event) => void
  isTripodTooltipActive: (scope: TripodTooltipScope, skillName: string, tripodName: string) => boolean
  toggleArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string, event?: Event) => void
  showArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => void
  hideArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => void
  isArkPassiveTooltipActive: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => boolean
  getArkPassiveTipData: (name: string) => ArkPassiveTipData | undefined
  hasArkPassiveTipData: (name: string) => boolean
  getArkPassiveTipCategory: (name: string) => ArkPassiveCategory
  toggleArkGridTooltip: (coreName: string, event?: Event, instanceKey?: string) => void
  isArkGridTooltipActive: (coreName: string, instanceKey?: string) => boolean
  hasArkGridCoreDetails: (coreName: string) => boolean
}>()

const getOverviewSkillScope = (partIndex: number) =>
  props.getInlineSkillScope('variant-overview', 0, partIndex)

const getOverviewPassiveScope = (partIndex: number) =>
  props.getInlineSkillScope('variant-overview-passive', 0, partIndex)

const onOverviewSkillClick = (event: Event, partIndex: number, skillName: string) => {
  props.toggleSkillTooltip(event, getOverviewSkillScope(partIndex), skillName)
}

const isOverviewSkillTooltipActive = (partIndex: number, skillName: string) =>
  props.isSkillTooltipActive(getOverviewSkillScope(partIndex), skillName)

const onOverviewTripodClick = (event: Event, tripodName: string) => {
  props.toggleTripodTooltip('variant-overview', props.currentVariant.name, tripodName, event)
}

const isOverviewTripodTooltipActive = (tripodName: string) =>
  props.isTripodTooltipActive('variant-overview', props.currentVariant.name, tripodName)

const onOverviewPassiveClick = (event: Event, partIndex: number, passiveName: string) => {
  props.toggleArkPassiveTooltip('variant', { name: passiveName }, getOverviewPassiveScope(partIndex), event)
}

const onOverviewPassiveEnter = (partIndex: number, passiveName: string) => {
  props.showArkPassiveTooltip('variant', { name: passiveName }, getOverviewPassiveScope(partIndex))
}

const onOverviewPassiveLeave = (partIndex: number, passiveName: string) => {
  props.hideArkPassiveTooltip('variant', { name: passiveName }, getOverviewPassiveScope(partIndex))
}

const isOverviewPassiveTooltipActive = (partIndex: number, passiveName: string) =>
  props.isArkPassiveTooltipActive('variant', { name: passiveName }, getOverviewPassiveScope(partIndex))

const getOverviewPassiveDisplayName = (name: string) =>
  props.getArkPassiveTipData(name)?.name ?? name

const getArkGridTableScope = (rowIndex: number, coreIndex: number) => `table-${rowIndex}-${coreIndex}`

const getArkGridProseScope = (lineIndex: number, partIndex: number) => `prose-${lineIndex}-${partIndex}`
</script>

<template>
  <section class="mk-surface-card p-4">
    <div class="flex items-center justify-between mb-3">
      <div>
        <p class="mk-eyebrow">Variant Overview</p>
        <p class="text-sm text-zinc-400">{{ props.currentVariant.name }}</p>
      </div>
      <div class="flex items-center gap-2">
        <div v-if="props.variantDifficulty" class="flex items-center gap-0.5">
          <div
            v-for="index in 3"
            :key="index"
            class="w-2 h-4 rounded-sm"
            :class="{
              'bg-green-500': props.variantDifficulty === 1 && index === 1,
              'bg-amber-500': props.variantDifficulty === 2 && index <= 2,
              'bg-red-500': props.variantDifficulty === 3,
              'bg-zinc-700': !props.variantDifficulty || (props.variantDifficulty === 1 && index > 1) || (props.variantDifficulty === 2 && index > 2),
            }"
          />
        </div>
        <span class="text-sm text-zinc-300">{{ props.currentBuildEngraving }}</span>
      </div>
    </div>

    <div class="text-sm text-zinc-400 mb-2">
      <template v-for="(part, partIndex) in props.getInlineGuideParts(props.currentVariant.description)" :key="`variant-desc-${partIndex}`">
        <span v-if="part.type === 'text'">{{ part.value }}</span>

        <div
          v-else-if="part.type === 'skill'"
          class="relative group inline-flex items-center gap-1 align-middle text-zinc-100 underline decoration-dotted underline-offset-2 decoration-zinc-500/90 transition-colors hover:text-white hover:decoration-amber-300 cursor-help"
          @click.stop="onOverviewSkillClick($event, partIndex, part.value)"
        >
          <img
            v-if="props.skillIcons[part.value]"
            :src="props.skillIcons[part.value] ?? ''"
            :alt="part.value"
            class="size-4 rounded border border-zinc-700 shrink-0"
          >
          <div v-else class="size-4 rounded border border-zinc-700 bg-zinc-900 shrink-0"/>
          <span class="font-semibold">{{ part.value }}</span>
          <SkillTooltip
            v-if="props.skillDescriptions[part.value] !== undefined"
            mode="inline"
            :prefer-trigger-position="props.hasHoverPointer"
            :hover-open="props.hasHoverPointer"
            :active="isOverviewSkillTooltipActive(partIndex, part.value)"
            :name="part.value"
            :icon-url="props.skillIcons[part.value] ?? null"
            :header-lines="props.getSkillHeaderLines(part.value)"
            :description-parts="props.parseSkillDescription(props.skillDescriptions[part.value])"
          />
        </div>

        <span
          v-else-if="part.type === 'tripod'"
          class="relative group inline-flex items-center gap-1 align-middle text-zinc-100 underline decoration-dotted underline-offset-2 decoration-zinc-500/90 transition-colors hover:text-white hover:decoration-amber-300 cursor-help"
          @click.stop="onOverviewTripodClick($event, part.name)"
        >
          <img
            v-if="props.inlineTripods[part.key]?.url"
            :src="props.inlineTripods[part.key]?.url ?? ''"
            :alt="props.inlineTripods[part.key]?.name ?? part.name"
            class="size-4 rounded border border-zinc-700 shrink-0"
          >
          <span class="font-semibold">{{ props.inlineTripods[part.key]?.name ?? part.name }}</span>
          <TripodTooltip
            v-if="props.inlineTripods[part.key]?.description || props.inlineTripods[part.key]?.url"
            :active="isOverviewTripodTooltipActive(part.name)"
            :prefer-trigger-position="props.hasHoverPointer"
            :hover-open="props.hasHoverPointer"
            :name="props.inlineTripods[part.key]?.name ?? part.name"
            :description="props.inlineTripods[part.key]?.description"
            :tier="props.inlineTripods[part.key]?.tier || 1"
            :icon-url="props.inlineTripods[part.key]?.url"
          />
        </span>

        <span
          v-else
          class="relative group inline-flex items-center gap-1 align-middle text-zinc-100 underline decoration-dotted underline-offset-2 decoration-zinc-500/90 transition-colors hover:text-white hover:decoration-amber-300 cursor-help"
          @click.stop="onOverviewPassiveClick($event, partIndex, part.value)"
          @mouseenter="onOverviewPassiveEnter(partIndex, part.value)"
          @mouseleave="onOverviewPassiveLeave(partIndex, part.value)"
        >
          <img
            v-if="props.getArkPassiveTipData(part.value)?.url"
            :src="props.getArkPassiveTipData(part.value)?.url ?? ''"
            :alt="getOverviewPassiveDisplayName(part.value)"
            class="size-4 rounded border border-zinc-700 shrink-0"
          >
          <span class="font-semibold">{{ getOverviewPassiveDisplayName(part.value) }}</span>
          <ArkPassiveTooltip
            v-if="props.hasArkPassiveTipData(part.value)"
            :active="isOverviewPassiveTooltipActive(partIndex, part.value)"
            :prefer-trigger-position="props.hasHoverPointer"
            :hover-open="props.hasHoverPointer"
            :name="getOverviewPassiveDisplayName(part.value)"
            :description="props.getArkPassiveTipData(part.value)?.description"
            :category="props.getArkPassiveTipCategory(part.value)"
            :icon-url="props.getArkPassiveTipData(part.value)?.url"
          />
        </span>
      </template>
    </div>

    <div v-if="props.arkGridRows.length" class="mt-3">
      <p class="mk-eyebrow mb-2">Ark Grid Cores</p>
      <div class="rounded-lg border border-zinc-800 overflow-visible">
        <table class="w-full text-xs text-zinc-300">
          <thead
            v-if="props.hasArkGridLabels"
            class="bg-zinc-900/70 mk-mini-label text-zinc-500"
          >
            <tr>
              <th class="px-3 py-2 text-left">Setup</th>
              <th class="px-3 py-2 text-left">Cores</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, rowIndex) in props.arkGridRows"
              :key="`arkgrid-row-${rowIndex}`"
              class="border-t border-zinc-800 first:border-t-0"
            >
              <td v-if="props.hasArkGridLabels" class="px-3 py-2 text-zinc-400 whitespace-nowrap">
                {{ row.label || `Setup ${rowIndex + 1}` }}
              </td>
              <td class="px-3 py-2">
                <div class="flex flex-wrap gap-2">
                  <div
                    v-for="(core, coreIndex) in row.cores"
                    :key="`${core}-${coreIndex}`"
                    class="relative group inline-flex items-center gap-1 px-2 py-1 rounded bg-zinc-900/60 border border-zinc-700 text-xs text-zinc-200"
                    @click.stop="props.toggleArkGridTooltip(core, $event, getArkGridTableScope(rowIndex, coreIndex))"
                  >
                    <UIcon
                      v-if="props.arkGridCategoryMap[core]"
                      :name="props.arkGridCategoryMap[core]?.icon"
                      class="size-3"
                      :class="props.arkGridCategoryMap[core]?.color"
                      :title="props.arkGridCategoryMap[core]?.label"
                    />
                    {{ core }}
                    <ArkGridCoreTooltip
                      v-if="props.hasArkGridCoreDetails(core)"
                      :active="props.isArkGridTooltipActive(core, getArkGridTableScope(rowIndex, coreIndex))"
                      :prefer-trigger-position="props.hasHoverPointer"
                      :hover-open="props.hasHoverPointer"
                      :name="props.arkGridCoreDetails[core]?.core_name ?? core"
                      :category="props.arkGridCoreDetails[core]?.category_name ?? null"
                      :options="props.arkGridCoreDetails[core]?.options ?? []"
                      :category-icon="props.arkGridCategoryMap[core]?.icon"
                      :category-tone="props.arkGridCategoryMap[core]?.color"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="props.currentVariant.arkgrid_prose" class="mt-3">
        <p class="mk-eyebrow mb-1">Core Priority</p>
        <p class="text-sm text-zinc-400 leading-relaxed">
          <template v-for="(line, lineIndex) in props.arkGridProseLines" :key="`arkgrid-prose-line-${lineIndex}`">
            <template
              v-for="(part, partIndex) in props.getInlineArkGridCoreParts(line)"
              :key="`arkgrid-prose-part-${lineIndex}-${partIndex}`"
            >
              <span v-if="part.type === 'text'">{{ part.value }}</span>
              <span
                v-else
                class="relative group inline-flex items-center gap-1 align-middle text-zinc-100 underline decoration-dotted underline-offset-2 decoration-zinc-500/90 transition-colors hover:text-white hover:decoration-amber-300 cursor-help"
                @click.stop="props.toggleArkGridTooltip(part.value, $event, getArkGridProseScope(lineIndex, partIndex))"
              >
                <UIcon
                  v-if="props.arkGridCategoryMap[part.value]"
                  :name="props.arkGridCategoryMap[part.value]?.icon"
                  class="size-3 shrink-0"
                  :class="props.arkGridCategoryMap[part.value]?.color"
                  :title="props.arkGridCategoryMap[part.value]?.label"
                />
                <span class="font-semibold">{{ part.value }}</span>
                <ArkGridCoreTooltip
                  v-if="props.hasArkGridCoreDetails(part.value)"
                  :active="props.isArkGridTooltipActive(part.value, getArkGridProseScope(lineIndex, partIndex))"
                  :prefer-trigger-position="props.hasHoverPointer"
                  :hover-open="props.hasHoverPointer"
                  :name="props.arkGridCoreDetails[part.value]?.core_name ?? part.value"
                  :category="props.arkGridCoreDetails[part.value]?.category_name ?? null"
                  :options="props.arkGridCoreDetails[part.value]?.options ?? []"
                  :category-icon="props.arkGridCategoryMap[part.value]?.icon"
                  :category-tone="props.arkGridCategoryMap[part.value]?.color"
                />
              </span>
            </template>
            <br v-if="lineIndex < props.arkGridProseLines.length - 1">
          </template>
        </p>
      </div>
    </div>
  </section>
</template>
