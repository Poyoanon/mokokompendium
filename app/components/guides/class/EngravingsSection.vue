<script setup lang="ts">
import type { Engraving } from '~/types/guide'
import { DEFAULT_TOOLTIP_LOCALE, type SupportedTooltipLocale } from '~/utils/tooltip-locale'
import EngravingTooltip from './EngravingTooltip.vue'

type EngravingDetail = {
  name: string
  level: number
  url: string | null
  description: string | null
}

type EngravingTone = {
  labelClass: string
  badgeClass: string
}

const props = withDefaults(defineProps<{
  scope: 'variant' | 'preArk'
  engravings: Engraving[]
  engravingDetails: Record<string, EngravingDetail>
  hasHoverPointer: boolean
  isTouchDevice: boolean
  headingClass?: string
  toggleEngravingTooltip: (event: Event, scope: 'variant' | 'preArk', engravingName: string) => void
  showEngravingTooltip: (scope: 'variant' | 'preArk', engravingName: string) => void
  hideEngravingTooltip: (scope: 'variant' | 'preArk', engravingName: string) => void
  isEngravingTooltipActive: (scope: 'variant' | 'preArk', engravingName: string) => boolean
}>(), {
  headingClass: 'mk-eyebrow mb-3',
})

const tooltipLocale = useState<SupportedTooltipLocale>('mk-site-locale', () => DEFAULT_TOOLTIP_LOCALE)

const normalizeEngravingPriority = (priority?: string): 'required' | 'recommended' | 'optional' | null => {
  const normalized = (priority ?? '').toLowerCase()
  if (normalized === 'required' || normalized === 'recommended' || normalized === 'optional') {
    return normalized
  }
  return null
}

const getEngravingImportanceLabel = (priority?: string, index = 0, total = 0): 'Core' | 'High' | 'Flex' => {
  const normalized = normalizeEngravingPriority(priority)
  if (normalized === 'required') return 'Core'
  if (normalized === 'recommended') return 'High'
  if (normalized === 'optional') return 'Flex'

  if (total <= 1) return 'Core'
  const ratio = (index + 1) / Math.max(total, 1)
  if (ratio <= 0.34) return 'Core'
  if (ratio <= 0.67) return 'High'
  return 'Flex'
}

const getEngravingImportanceTone = (priority?: string, index = 0, total = 0): EngravingTone => {
  const label = getEngravingImportanceLabel(priority, index, total)
  if (label === 'Core') {
    return {
      labelClass: 'text-green-300',
      badgeClass: 'border-green-600/70 bg-green-950/60 text-green-200',
    }
  }
  if (label === 'High') {
    return {
      labelClass: 'text-amber-300',
      badgeClass: 'border-amber-600/70 bg-amber-950/60 text-amber-200',
    }
  }
  return {
    labelClass: 'text-red-300',
    badgeClass: 'border-red-600/70 bg-red-950/60 text-red-200',
  }
}

const totalEngravings = computed(() => props.engravings.length)

const onEngravingClick = (event: Event, engravingName: string) => {
  props.toggleEngravingTooltip(event, props.scope, engravingName)
}

const onEngravingEnter = (engravingName: string) => {
  props.showEngravingTooltip(props.scope, engravingName)
}

const onEngravingLeave = (engravingName: string) => {
  props.hideEngravingTooltip(props.scope, engravingName)
}

const isTooltipActive = (engravingName: string) =>
  props.isEngravingTooltipActive(props.scope, engravingName)

const getEngravingDisplayName = (engravingName: string) =>
  props.engravingDetails[engravingName]?.name ?? engravingName

const sectionTitle = computed(() => (
  tooltipLocale.value === 'es'
    ? 'Grabados'
    : 'Engravings'
))

const getImportanceDisplayLabel = (priority?: string, index = 0, total = 0) => {
  const label = getEngravingImportanceLabel(priority, index, total)
  if (tooltipLocale.value !== 'es') return label

  if (label === 'Core') return 'Base'
  if (label === 'High') return 'Alta'
  return 'Flex'
}
</script>

<template>
  <section v-if="props.engravings.length">
    <p :class="props.headingClass">{{ sectionTitle }}</p>
    <div class="flex flex-wrap gap-2">
      <div
        v-for="(eng, engIndex) in props.engravings"
        :key="eng.name"
        class="relative group inline-flex max-w-full items-center gap-2 rounded-lg border border-zinc-700/70 bg-zinc-900/70 pl-2 pr-2.5 py-1.5 cursor-pointer transition-colors hover:border-zinc-500/80"
        @click="onEngravingClick($event, eng.name)"
        @mouseenter="onEngravingEnter(eng.name)"
        @mouseleave="onEngravingLeave(eng.name)"
      >
        <span
          class="inline-flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold"
          :class="getEngravingImportanceTone(eng.priority, engIndex, totalEngravings).badgeClass"
        >
          {{ engIndex + 1 }}
        </span>
        <img
          v-if="props.engravingDetails[eng.name]?.url"
          :src="props.engravingDetails[eng.name]?.url ?? ''"
          :alt="getEngravingDisplayName(eng.name)"
          class="size-4 shrink-0 rounded border border-zinc-700"
        >
        <span class="truncate max-w-45 text-sm text-zinc-100 leading-none">{{ getEngravingDisplayName(eng.name) }}</span>
        <span
          class="mk-mini-label ml-0.5"
          :class="getEngravingImportanceTone(eng.priority, engIndex, totalEngravings).labelClass"
        >
          {{ getImportanceDisplayLabel(eng.priority, engIndex, totalEngravings) }}
        </span>
        <EngravingTooltip
          v-if="props.engravingDetails[eng.name]"
          :active="isTooltipActive(eng.name)"
          :mobile-fixed="props.isTouchDevice"
          :prefer-trigger-position="props.hasHoverPointer"
          :hover-open="props.hasHoverPointer"
          :name="props.engravingDetails[eng.name]?.name ?? eng.name"
          :level="props.engravingDetails[eng.name]?.level"
          :description="props.engravingDetails[eng.name]?.description"
          :icon-url="props.engravingDetails[eng.name]?.url"
        />
      </div>
    </div>
  </section>
</template>
