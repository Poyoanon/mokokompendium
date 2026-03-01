<script setup lang="ts">
import { useSkillDisplayNames } from '~/composables/guides/class/useTooltipNameMaps'

type SkillTooltipHeaderLine = {
  text: string
  color: string
}

type SkillTooltipDescriptionPart = {
  text: string
  color?: string | null
}

const props = withDefaults(defineProps<{
  active: boolean
  name: string
  iconUrl?: string | null
  headerLines?: SkillTooltipHeaderLine[]
  descriptionParts?: SkillTooltipDescriptionPart[]
  mode?: 'inline' | 'skillcard'
  preferTriggerPosition?: boolean
  hoverOpen?: boolean
}>(), {
  iconUrl: null,
  headerLines: () => [],
  descriptionParts: () => [],
  mode: 'skillcard',
  preferTriggerPosition: false,
  hoverOpen: true,
})

const skillDisplayNames = useSkillDisplayNames()
const displayName = computed(() => skillDisplayNames.value[props.name] ?? props.name)

const shouldAnchorToTrigger = computed(() =>
  props.mode === 'inline' && props.preferTriggerPosition,
)

const useCssVariableAnchor = computed(() =>
  props.mode === 'inline' && !props.hoverOpen,
)

const hoverClass = computed(() => (
  props.hoverOpen ? 'group-hover:opacity-100 group-hover:scale-100' : ''
))

const wrapperRef = ref<HTMLElement | null>(null)
const anchoredLeft = ref(0)
const anchoredTop = ref(0)
let triggerElement: HTMLElement | null = null
let detachTriggerListeners: (() => void) | null = null

const HEX_COLOR_PATTERN = /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i

const isHexColor = (value?: string | null): value is string =>
  !!value && HEX_COLOR_PATTERN.test(value)

function createsFixedContainingBlock(element: HTMLElement) {
  const style = window.getComputedStyle(element)
  const backdropFilter = (style as CSSStyleDeclaration & { backdropFilter?: string }).backdropFilter

  return (
    style.transform !== 'none'
    || style.perspective !== 'none'
    || style.filter !== 'none'
    || (typeof backdropFilter === 'string' && backdropFilter !== 'none')
    || style.contain.includes('paint')
    || style.contain.includes('layout')
    || style.willChange.includes('transform')
    || style.willChange.includes('perspective')
    || style.willChange.includes('filter')
  )
}

function getFixedContainingBlockRect(trigger: HTMLElement) {
  let current = trigger.parentElement
  while (current && current !== document.documentElement) {
    if (createsFixedContainingBlock(current)) {
      return current.getBoundingClientRect()
    }
    current = current.parentElement
  }

  return null
}

function updateTriggerAnchorPosition() {
  if (!import.meta.client) return
  if (!shouldAnchorToTrigger.value) return

  const wrapper = wrapperRef.value
  if (!wrapper) return

  if (!triggerElement) {
    const parent = wrapper.parentElement
    if (parent instanceof HTMLElement) {
      triggerElement = parent
    }
  }
  if (!triggerElement) return

  const triggerRect = triggerElement.getBoundingClientRect()
  const viewport = window.visualViewport
  const viewportWidth = viewport?.width ?? window.innerWidth
  const viewportHeight = viewport?.height ?? window.innerHeight

  const tooltipWidth = wrapper.offsetWidth || 320
  const tooltipHeight = wrapper.offsetHeight || 260
  const spacing = 8
  const horizontalPadding = 8
  const verticalPadding = 8

  let left = triggerRect.left + triggerRect.width / 2
  left = Math.max(
    horizontalPadding + tooltipWidth / 2,
    Math.min(left, viewportWidth - horizontalPadding - tooltipWidth / 2),
  )

  const topAbove = triggerRect.top - spacing - tooltipHeight
  const topBelow = triggerRect.bottom + spacing
  const canPlaceAbove = topAbove >= verticalPadding
  const canPlaceBelow = topBelow + tooltipHeight <= viewportHeight - verticalPadding
  const placeAbove = canPlaceAbove || (!canPlaceBelow && triggerRect.top >= viewportHeight - triggerRect.bottom)

  const top = placeAbove
    ? Math.max(verticalPadding, topAbove)
    : Math.min(viewportHeight - verticalPadding - tooltipHeight, topBelow)
  const fixedContainingBlockRect = getFixedContainingBlockRect(triggerElement)

  if (fixedContainingBlockRect) {
    anchoredLeft.value = left - fixedContainingBlockRect.left
    anchoredTop.value = top - fixedContainingBlockRect.top
    return
  }

  anchoredLeft.value = left
  anchoredTop.value = top
}

function attachTriggerListeners() {
  if (!import.meta.client) return
  if (!shouldAnchorToTrigger.value) return

  const wrapper = wrapperRef.value
  if (!wrapper) return
  const parent = wrapper.parentElement
  if (!(parent instanceof HTMLElement)) return

  detachTriggerListeners?.()
  detachTriggerListeners = null

  triggerElement = parent

  const onTriggerHover = () => {
    updateTriggerAnchorPosition()
  }

  triggerElement.addEventListener('mouseenter', onTriggerHover)
  triggerElement.addEventListener('focusin', onTriggerHover)

  detachTriggerListeners = () => {
    triggerElement?.removeEventListener('mouseenter', onTriggerHover)
    triggerElement?.removeEventListener('focusin', onTriggerHover)
  }
}

onMounted(() => {
  if (!import.meta.client) return
  nextTick(() => {
    attachTriggerListeners()
    updateTriggerAnchorPosition()
  })
})

onBeforeUnmount(() => {
  detachTriggerListeners?.()
  detachTriggerListeners = null
  triggerElement = null
})

watch([() => props.preferTriggerPosition, () => props.hoverOpen, () => props.mode], () => {
  if (!shouldAnchorToTrigger.value) {
    detachTriggerListeners?.()
    detachTriggerListeners = null
    triggerElement = null
    return
  }
  nextTick(() => {
    attachTriggerListeners()
    updateTriggerAnchorPosition()
  })
})

watch(() => props.active, (isActive) => {
  if (!isActive || !shouldAnchorToTrigger.value) return
  nextTick(() => {
    updateTriggerAnchorPosition()
  })
})

const wrapperClass = computed(() => {
  if (shouldAnchorToTrigger.value || useCssVariableAnchor.value) {
    return `fixed left-0 top-0 mb-0 transition z-50 ${hoverClass.value}`
  }

  return `fixed left-1/2 -translate-x-1/2 bottom-4 mb-0 transition z-50 ${hoverClass.value} sm:absolute sm:bottom-full sm:mb-2`
})

const triggerAnchorStyle = computed(() => {
  if (useCssVariableAnchor.value) {
    return {
      left: 'var(--mk-inline-skill-tooltip-x)',
      top: 'var(--mk-inline-skill-tooltip-y)',
      transform: 'translate(-50%, var(--mk-inline-skill-tooltip-shift-y))',
    }
  }

  if (!shouldAnchorToTrigger.value) return undefined

  return {
    left: `${anchoredLeft.value}px`,
    top: `${anchoredTop.value}px`,
    transform: 'translateX(-50%)',
  }
})
</script>

<template>
  <div
    ref="wrapperRef"
    :class="[ wrapperClass, props.active ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none' ]"
    :style="triggerAnchorStyle"
  >
    <div class="relative bg-[#1a1d24] border border-zinc-700/50 rounded min-w-75 max-w-95 shadow-xl">
      <div class="flex items-center gap-3 px-3 py-2.5 border-b border-zinc-700/30">
        <div class="shrink-0">
          <img
            v-if="props.iconUrl"
            :src="props.iconUrl"
            :alt="displayName"
            class="size-16 rounded border-2 border-zinc-600/80"
          >
          <div
            v-else
            class="size-16 rounded border-2 border-zinc-700 bg-zinc-900/50 flex items-center justify-center"
          >
            <span class="text-zinc-500 text-xs">?</span>
          </div>
        </div>
        <div class="flex-1 min-w-0">
          <div class="mk-skill-tooltip-name font-semibold text-white text-sm leading-tight wrap-break-word">{{ displayName }}</div>
          <div
            v-for="(line, lineIndex) in props.headerLines"
            :key="`${props.name}-meta-${lineIndex}`"
            class="text-xs leading-tight mt-0.5"
            :style="{ color: line.color }"
          >
            {{ line.text }}
          </div>
        </div>
      </div>
      <div class="px-3 py-2.5">
        <div
          v-if="props.descriptionParts.length > 0"
          class="text-xs text-zinc-300 leading-relaxed whitespace-pre-line"
        >
          <template v-for="(part, partIndex) in props.descriptionParts" :key="`${props.name}-desc-${partIndex}`">
            <span v-if="part.color === 'green'" class="text-emerald-400">{{ part.text }}</span>
            <span v-else-if="part.color === 'yellow'" class="text-amber-300">{{ part.text }}</span>
            <span v-else-if="part.color === 'red'" class="text-red-400">{{ part.text }}</span>
            <span v-else-if="part.color === 'purple'" style="color: #ff00ff">{{ part.text }}</span>
            <span v-else-if="part.color === 'blue'" style="color: #00ccff">{{ part.text }}</span>
            <span v-else-if="part.color === 'orange'" class="text-orange-300">{{ part.text }}</span>
            <span v-else-if="isHexColor(part.color)" :style="{ color: part.color }">{{ part.text }}</span>
            <span v-else class="text-zinc-300">{{ part.text }}</span>
          </template>
        </div>
        <div v-else class="text-xs text-zinc-500 italic">No description available</div>
      </div>
    </div>
  </div>
</template>
