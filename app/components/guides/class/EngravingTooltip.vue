<script setup lang="ts">
import { decodeTooltipEntities } from '~/utils/tooltip-text'
import { DEFAULT_TOOLTIP_LOCALE, type SupportedTooltipLocale } from '~/utils/tooltip-locale'

const props = withDefaults(defineProps<{
  active: boolean
  mobileFixed: boolean
  name: string
  description: string | null | undefined
  level?: number | null
  iconUrl?: string | null
  hoverOpen?: boolean
  preferTriggerPosition?: boolean
}>(), {
  level: null,
  iconUrl: null,
  hoverOpen: true,
  preferTriggerPosition: false,
})

const tooltipLocale = useState<SupportedTooltipLocale>('mk-site-locale', () => DEFAULT_TOOLTIP_LOCALE)

const shouldAnchorToTrigger = computed(() =>
  props.preferTriggerPosition || !props.hoverOpen,
)

const wrapperRef = ref<HTMLElement | null>(null)
const anchoredLeft = ref(0)
const anchoredTop = ref(0)
const triggerMaxHeight = ref(0)
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

  const tooltipWidth = wrapper.offsetWidth || 280
  const rawTooltipHeight = wrapper.offsetHeight || 300
  const spacing = 8
  const horizontalPadding = 8
  const verticalPadding = 8
  const availableHeight = Math.max(160, viewportHeight - verticalPadding * 2)
  const tooltipHeight = Math.min(rawTooltipHeight, availableHeight)

  triggerMaxHeight.value = availableHeight

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

const desktopVisibilityClass = computed(() => {
  if (props.active) {
    return 'opacity-100 scale-100 pointer-events-auto'
  }

  return 'opacity-0 scale-95 pointer-events-none'
})

const mobileVisibilityClass = computed(() => {
  if (props.active) {
    return 'opacity-100 scale-100 pointer-events-auto'
  }

  return 'opacity-0 scale-95 pointer-events-none'
})

const hoverClass = computed(() => (
  props.hoverOpen ? 'group-hover:opacity-100 group-hover:scale-100' : ''
))

const wrapperClass = computed(() => {
  if (shouldAnchorToTrigger.value) {
    return `mk-engraving-inline-tooltip-trigger fixed left-0 top-0 -translate-x-1/2 mb-0 transition z-[80] ${hoverClass.value}`
  }

  return `fixed left-1/2 -translate-x-1/2 bottom-4 mb-0 transition z-[80] ${hoverClass.value} sm:absolute sm:bottom-full sm:mb-2`
})

const triggerAnchorStyle = computed(() => {
  if (!shouldAnchorToTrigger.value) return undefined
  return {
    left: `${anchoredLeft.value}px`,
    top: `${anchoredTop.value}px`,
    '--mk-inline-engraving-max-height': `${triggerMaxHeight.value}px`,
  }
})

function autoColorizeDescription(desc: string): Array<{ text: string; color: string | null }> {
  const parts: Array<{ text: string; color: string | null }> = []
  const pattern = /([+-]\d[\d,]*(?:\.\d+)?%?)/g

  let cursor = 0
  let match = pattern.exec(desc)
  while (match) {
    if (match.index > cursor) {
      parts.push({ text: desc.slice(cursor, match.index), color: null })
    }

    const token = match[0]
    parts.push({ text: token, color: token.startsWith('-') ? 'red' : 'green' })

    cursor = match.index + token.length
    match = pattern.exec(desc)
  }

  if (cursor < desc.length) {
    parts.push({ text: desc.slice(cursor), color: null })
  }

  return parts
}

function parseDescription(desc: string | null | undefined): Array<{ text: string; color: string | null }> {
  if (!desc) return []
  const cleaned = decodeTooltipEntities(desc).replace(/\[(?:\/)?(?:GREEN|YELLOW|RED|PURPLE|ORANGE|BLUE)\]/gi, '')
  return autoColorizeDescription(cleaned)
}

const parsedDescription = computed(() => parseDescription(props.description))

const levelLabelPrefix = computed(() => (
  tooltipLocale.value === 'es'
    ? 'Nivel'
    : 'Level'
))

const emptyDescriptionLabel = computed(() => (
  tooltipLocale.value === 'es'
    ? 'No hay descripcion disponible'
    : 'No description available'
))
</script>

<template>
  <Teleport v-if="props.mobileFixed && !shouldAnchorToTrigger" to="body">
    <div
      class="mk-engraving-inline-tooltip-mobile fixed left-1/2 -translate-x-1/2 bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)] mb-0 transition z-70"
      :class="mobileVisibilityClass"
    >
      <div class="mk-inline-tooltip-card mk-inline-engraving-card relative bg-[#1a1d24] border border-zinc-700/60 rounded w-[min(280px,calc(100dvw-1rem))] sm:w-auto sm:min-w-67.5 sm:max-w-85 shadow-xl">
        <div class="flex items-center gap-3 px-3 py-2.5 border-b border-zinc-700/30">
          <div class="shrink-0">
            <img
              v-if="props.iconUrl"
              :src="props.iconUrl"
              :alt="props.name"
              class="size-11 rounded border-2 border-zinc-600/80"
            >
            <div
              v-else
              class="size-11 rounded border-2 border-zinc-700 bg-zinc-900/50 flex items-center justify-center"
            >
              <span class="text-zinc-500 text-xs">?</span>
            </div>
          </div>

          <div class="flex-1 min-w-0">
            <div class="font-medium text-white text-sm leading-tight">{{ props.name }}</div>
            <div v-if="props.level" class="mk-mini-label mt-1 text-zinc-400">{{ levelLabelPrefix }} {{ props.level }}</div>
          </div>
        </div>

        <div class="px-3 py-2.5">
          <div v-if="parsedDescription.length > 0" class="text-xs text-zinc-300 leading-relaxed">
            <template v-for="(part, i) in parsedDescription" :key="i">
              <span v-if="part.color === 'green'" class="text-emerald-400">{{ part.text }}</span>
              <span v-else-if="part.color === 'red'" class="text-red-400">{{ part.text }}</span>
              <span v-else class="text-zinc-300">{{ part.text }}</span>
            </template>
          </div>
          <div v-else class="text-xs text-zinc-500 italic">{{ emptyDescriptionLabel }}</div>
        </div>
      </div>
    </div>
  </Teleport>
  <div
    v-else
    ref="wrapperRef"
    :class="[wrapperClass, desktopVisibilityClass]"
    :style="triggerAnchorStyle"
  >
    <div class="mk-inline-tooltip-card mk-inline-engraving-card relative bg-[#1a1d24] border border-zinc-700/60 rounded w-[min(280px,calc(100dvw-1rem))] sm:w-auto sm:min-w-67.5 sm:max-w-85 shadow-xl">
      <div class="flex items-center gap-3 px-3 py-2.5 border-b border-zinc-700/30">
        <div class="shrink-0">
          <img
            v-if="props.iconUrl"
            :src="props.iconUrl"
            :alt="props.name"
            class="size-11 rounded border-2 border-zinc-600/80"
          >
          <div
            v-else
            class="size-11 rounded border-2 border-zinc-700 bg-zinc-900/50 flex items-center justify-center"
          >
            <span class="text-zinc-500 text-xs">?</span>
          </div>
        </div>

        <div class="flex-1 min-w-0">
          <div class="font-medium text-white text-sm leading-tight">{{ props.name }}</div>
          <div v-if="props.level" class="mk-mini-label mt-1 text-zinc-400">{{ levelLabelPrefix }} {{ props.level }}</div>
        </div>
      </div>

      <div class="px-3 py-2.5">
        <div v-if="parsedDescription.length > 0" class="text-xs text-zinc-300 leading-relaxed">
          <template v-for="(part, i) in parsedDescription" :key="i">
            <span v-if="part.color === 'green'" class="text-emerald-400">{{ part.text }}</span>
            <span v-else-if="part.color === 'red'" class="text-red-400">{{ part.text }}</span>
            <span v-else class="text-zinc-300">{{ part.text }}</span>
          </template>
        </div>
        <div v-else class="text-xs text-zinc-500 italic">{{ emptyDescriptionLabel }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mk-engraving-inline-tooltip-mobile .mk-inline-engraving-card {
  width: min(280px, calc(100dvw - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px) - 1rem));
  max-width: calc(100dvw - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px) - 1rem);
  max-height: calc(100dvh - env(safe-area-inset-bottom, 0px) - 1rem);
  overflow-y: auto;
}

.mk-engraving-inline-tooltip-trigger .mk-inline-engraving-card {
  max-height: var(--mk-inline-engraving-max-height, calc(100dvh - 1rem));
  overflow-y: auto;
}

.mk-inline-engraving-card {
  max-height: calc(100dvh - env(safe-area-inset-bottom, 0px) - 1rem);
  overflow-y: auto;
}

@media (min-width: 640px) {
  .mk-inline-engraving-card {
    max-height: none;
    overflow-y: visible;
  }
}
</style>
