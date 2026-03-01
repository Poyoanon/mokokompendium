<script setup lang="ts">
import { decodeTooltipEntities } from '~/utils/tooltip-text'

const props = withDefaults(defineProps<{
  active: boolean
  name: string
  description?: string | null
  tier?: number
  iconUrl?: string | null
  mode?: 'inline' | 'skillcard'
  preferTriggerPosition?: boolean
  hoverOpen?: boolean
}>(), {
  description: null,
  tier: 1,
  iconUrl: null,
  mode: 'inline',
  preferTriggerPosition: false,
  hoverOpen: true,
})

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
  const tooltipHeight = wrapper.offsetHeight || 220
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

function parseDescription(desc: string | null | undefined): Array<{ text: string; color: string | null }> {
  if (!desc) return []

  const parts: Array<{ text: string; color: string | null }> = []
  let remaining = decodeTooltipEntities(desc)

  while (remaining.length > 0) {
    // Check for color markers
    const greenMatch = remaining.match(/\[GREEN\](.*?)\[\/GREEN\]/)
    const yellowMatch = remaining.match(/\[YELLOW\](.*?)\[\/YELLOW\]/)
    const redMatch = remaining.match(/\[RED\](.*?)\[\/RED\]/)
    const purpleMatch = remaining.match(/\[PURPLE\](.*?)\[\/PURPLE\]/)
    const blueMatch = remaining.match(/\[BLUE\](.*?)\[\/BLUE\]/)
    const orangeMatch = remaining.match(/\[ORANGE\](.*?)\[\/ORANGE\]/)

    // Find the earliest match
    let match: RegExpMatchArray | null = null
    let matchType: string | null = null
    let matchIndex = Infinity

    if (greenMatch && greenMatch.index !== undefined && greenMatch.index < matchIndex) {
      match = greenMatch
      matchType = 'green'
      matchIndex = greenMatch.index
    }
    if (yellowMatch && yellowMatch.index !== undefined && yellowMatch.index < matchIndex) {
      match = yellowMatch
      matchType = 'yellow'
      matchIndex = yellowMatch.index
    }
    if (redMatch && redMatch.index !== undefined && redMatch.index < matchIndex) {
      match = redMatch
      matchType = 'red'
      matchIndex = redMatch.index
    }
    if (purpleMatch && purpleMatch.index !== undefined && purpleMatch.index < matchIndex) {
      match = purpleMatch
      matchType = 'purple'
      matchIndex = purpleMatch.index
    }
    if (blueMatch && blueMatch.index !== undefined && blueMatch.index < matchIndex) {
      match = blueMatch
      matchType = 'blue'
      matchIndex = blueMatch.index
    }
    if (orangeMatch && orangeMatch.index !== undefined && orangeMatch.index < matchIndex) {
      match = orangeMatch
      matchType = 'orange'
      matchIndex = orangeMatch.index
    }

    if (!match || match.index === undefined) {
      // No more color markers, add remaining text
      if (remaining.trim()) {
        parts.push({ text: remaining, color: null })
      }
      break
    }

    // Add text before the match
    if (match.index > 0) {
      parts.push({ text: remaining.slice(0, match.index), color: null })
    }

    // Add colored text
    parts.push({ text: match[1] ?? '', color: matchType })

    // Continue with remaining text
    remaining = remaining.slice(match.index + match[0].length)
  }

  return parts
}

const parsedDescription = computed(() => parseDescription(props.description))

// Tier border colors matching in-game style
const tierBorderColors: Record<number, string> = {
  1: 'border-blue-500/50',
  2: 'border-green-500/50',
  3: 'border-yellow-500/50'
}

// Icon border glow colors
const tierIconBorderColors: Record<number, string> = {
  1: 'border-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]',
  2: 'border-green-400 shadow-[0_0_8px_rgba(34,197,94,0.5)]',
  3: 'border-yellow-400 shadow-[0_0_8px_rgba(234,179,8,0.5)]'
}
</script>

<template>
  <div
    ref="wrapperRef"
    :class="[wrapperClass, props.active ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none']"
    :style="triggerAnchorStyle"
  >
    <div
      class="relative bg-[#1a1d24] border rounded min-w-65 max-w-80 shadow-xl"
      :class="tierBorderColors[props.tier]"
    >
      <div class="flex items-center gap-3 px-3 py-2.5 border-b border-zinc-700/30">
        <div class="shrink-0">
          <img
            v-if="props.iconUrl"
            :src="props.iconUrl"
            :alt="props.name"
            class="size-10 rounded border-2"
            :class="tierIconBorderColors[props.tier]"
          >
          <div
            v-else
            class="size-10 rounded border-2 bg-zinc-900/50 flex items-center justify-center"
            :class="tierIconBorderColors[props.tier]"
          >
            <span class="text-zinc-500 text-xs">?</span>
          </div>
        </div>

        <div class="flex-1 min-w-0">
          <div class="font-medium text-white text-sm leading-tight">{{ props.name }}</div>
        </div>
      </div>

      <div class="px-3 py-2.5">
        <div v-if="parsedDescription.length > 0" class="text-xs text-zinc-300 leading-relaxed">
          <template v-for="(part, i) in parsedDescription" :key="i">
            <span
              v-if="part.color === 'green'"
              class="text-emerald-400"
            >{{ part.text }}</span>
            <span
              v-else-if="part.color === 'yellow'"
              class="text-amber-300"
            >{{ part.text }}</span>
            <span
              v-else-if="part.color === 'red'"
              class="text-red-400"
            >{{ part.text }}</span>
            <span
              v-else-if="part.color === 'purple'"
              class="text-purple-300"
            >{{ part.text }}</span>
            <span
              v-else-if="part.color === 'blue'"
              style="color: #00ccff"
            >{{ part.text }}</span>
            <span
              v-else-if="part.color === 'orange'"
              class="text-orange-300"
            >{{ part.text }}</span>
            <span v-else class="text-zinc-300">{{ part.text }}</span>
          </template>
        </div>
        <div v-else class="text-xs text-zinc-500 italic">No description available</div>
      </div>
    </div>
  </div>
</template>
