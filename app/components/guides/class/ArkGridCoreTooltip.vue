<script setup lang="ts">
import { decodeTooltipEntities } from '~/utils/tooltip-text'

const props = withDefaults(defineProps<{
  active: boolean
  name: string
  category: string | null | undefined
  options: Array<{ points: number; description: string }>
  categoryIcon?: string | null
  categoryTone?: string | null
  preferTriggerPosition?: boolean
  hoverOpen?: boolean
}>(), {
  categoryIcon: null,
  categoryTone: null,
  preferTriggerPosition: false,
  hoverOpen: true,
})

const shouldAnchorToTrigger = computed(() =>
  props.preferTriggerPosition || !props.hoverOpen,
)

const hoverClass = computed(() => (
  props.hoverOpen ? 'group-hover:opacity-100 group-hover:scale-100' : ''
))

const wrapperRef = ref<HTMLElement | null>(null)
const anchoredLeft = ref(0)
const anchoredTop = ref(0)
let triggerElement: HTMLElement | null = null
let detachTriggerListeners: (() => void) | null = null

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
  const tooltipHeight = wrapper.offsetHeight || 280
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

watch([() => props.preferTriggerPosition, () => props.hoverOpen], () => {
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
  if (shouldAnchorToTrigger.value) {
    return `fixed left-0 top-0 -translate-x-1/2 mb-0 transition z-50 ${hoverClass.value}`
  }

  return `fixed left-1/2 -translate-x-1/2 bottom-4 mb-0 transition z-50 ${hoverClass.value} sm:absolute sm:bottom-full sm:mb-2`
})

const triggerAnchorStyle = computed(() => {
  if (!shouldAnchorToTrigger.value) return undefined
  return {
    left: `${anchoredLeft.value}px`,
    top: `${anchoredTop.value}px`,
  }
})

function parseDescription(desc: string | null | undefined): Array<{ text: string; color: string | null }> {
  if (!desc) return []

  const parts: Array<{ text: string; color: string | null }> = []
  let remaining = decodeTooltipEntities(desc)

  while (remaining.length > 0) {
    const greenMatch = remaining.match(/\[GREEN\](.*?)\[\/GREEN\]/)
    const yellowMatch = remaining.match(/\[YELLOW\](.*?)\[\/YELLOW\]/)
    const redMatch = remaining.match(/\[RED\](.*?)\[\/RED\]/)
    const purpleMatch = remaining.match(/\[PURPLE\](.*?)\[\/PURPLE\]/)
    const blueMatch = remaining.match(/\[BLUE\](.*?)\[\/BLUE\]/)
    const orangeMatch = remaining.match(/\[ORANGE\](.*?)\[\/ORANGE\]/)

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
      if (remaining.trim()) {
        parts.push({ text: remaining, color: null })
      }
      break
    }

    if (match.index > 0) {
      parts.push({ text: remaining.slice(0, match.index), color: null })
    }

    parts.push({ text: match[1] ?? '', color: matchType })
    remaining = remaining.slice(match.index + match[0].length)
  }

  return parts
}
</script>

<template>
  <div
    ref="wrapperRef"
    :class="[wrapperClass, props.active ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none']"
    :style="triggerAnchorStyle"
  >
    <div class="mk-inline-tooltip-card mk-inline-ark-grid-card relative bg-[#1a1d24] border border-zinc-700/60 rounded px-3 py-2 shadow-xl w-[min(280px,calc(100vw-1rem))] sm:w-[min(90vw,420px)] max-h-[70vh] overflow-y-auto">
      <div v-if="props.category" class="flex items-center gap-1 text-[10px] text-zinc-400 uppercase tracking-wide mb-1">
        <UIcon
          v-if="props.categoryIcon"
          :name="props.categoryIcon"
          class="size-3"
          :class="props.categoryTone"
        />
        <span>{{ props.category }}</span>
      </div>
      <div class="text-sm font-semibold text-white leading-tight mb-1">{{ props.name }}</div>
      <div v-if="props.options?.length" class="space-y-2">
        <div
          v-for="option in props.options"
          :key="option.points"
          class="flex gap-2 text-xs text-zinc-300"
        >
          <span class="w-12 shrink-0 text-left tabular-nums text-[10px] uppercase text-zinc-500 font-semibold pt-0.5">{{ option.points }}P</span>
          <span class="whitespace-pre-line">
            <template v-for="(part, index) in parseDescription(option.description)" :key="index">
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
          </span>
        </div>
      </div>
      <div v-else class="text-xs text-zinc-500 italic">No description available</div>
    </div>
  </div>
</template>
