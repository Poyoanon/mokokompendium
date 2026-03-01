<script setup lang="ts">
import { decodeTooltipEntities } from '~/utils/tooltip-text'
import { DEFAULT_TOOLTIP_LOCALE, type SupportedTooltipLocale } from '~/utils/tooltip-locale'

const props = withDefaults(defineProps<{
  active: boolean
  name: string
  description?: string | null
  category: 'evolution' | 'enlightenment' | 'leap'
  iconUrl?: string | null
  preferTriggerPosition?: boolean
  hoverOpen?: boolean
}>(), {
  description: null,
  iconUrl: null,
  preferTriggerPosition: false,
  hoverOpen: true,
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
  const rawTooltipHeight = wrapper.offsetHeight || 320
  const spacing = 8
  const horizontalPadding = 8
  const verticalPadding = 8
  const availableHeight = Math.max(180, viewportHeight - verticalPadding * 2)
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

const visibilityClass = computed(() => {
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
    return `mk-inline-ark-passive-tooltip-trigger fixed left-0 top-0 -translate-x-1/2 mb-0 transition z-[80] ${hoverClass.value}`
  }

  return `fixed left-1/2 -translate-x-1/2 bottom-4 mb-0 transition z-[80] ${hoverClass.value} sm:absolute sm:bottom-full sm:mb-2`
})

const triggerAnchorStyle = computed(() => {
  if (!shouldAnchorToTrigger.value) return undefined
  return {
    left: `${anchoredLeft.value}px`,
    top: `${anchoredTop.value}px`,
    '--mk-inline-ark-passive-max-height': `${triggerMaxHeight.value}px`,
  }
})

function stripGameTokens(input: string, placeholder = '…') {
  let output = ''
  let depth = 0

  for (let index = 0; index < input.length; index += 1) {
    if (input.startsWith('<$', index)) {
      if (depth === 0) {
        output += placeholder
      }
      depth += 1
      index += 1
      continue
    }

    if (depth > 0) {
      if (input.startsWith('/>', index)) {
        depth -= 1
        index += 1
      }
      continue
    }

    output += input[index]
  }

  return output
}

function normalizeDescription(desc: string) {
  let text = decodeTooltipEntities(desc)
  text = text.replace(/<br\s*\/?>(?:)/gi, ' ')
  text = text.replace(/<\$HOTKEY[^>]*?\/>/gi, 'Hotkey')
  text = stripGameTokens(text)
  return text.replace(/\s+/g, ' ').trim()
}

function parseDescription(desc: string | null | undefined): Array<{ text: string; color: string | null }> {
  if (!desc) return []

  const sanitized = normalizeDescription(desc)
  const parts: Array<{ text: string; color: string | null }> = []
  let remaining = sanitized

  while (remaining.length > 0) {
    const fontMatch = remaining.match(/<font\s+color=['"]?(#[0-9a-fA-F]{6})['"]?>(.*?)<\/font>/i)
    const greenMatch = remaining.match(/\[GREEN\](.*?)\[\/GREEN\]/)
    const yellowMatch = remaining.match(/\[YELLOW\](.*?)\[\/YELLOW\]/)
    const redMatch = remaining.match(/\[RED\](.*?)\[\/RED\]/)
    const purpleMatch = remaining.match(/\[PURPLE\](.*?)\[\/PURPLE\]/)
    const blueMatch = remaining.match(/\[BLUE\](.*?)\[\/BLUE\]/)
    const orangeMatch = remaining.match(/\[ORANGE\](.*?)\[\/ORANGE\]/)

    let match: RegExpMatchArray | null = null
    let matchType: string | null = null
    let matchIndex = Infinity

    if (fontMatch && fontMatch.index !== undefined && fontMatch.index < matchIndex) {
      match = fontMatch
      matchType = fontMatch[1] ?? null
      matchIndex = fontMatch.index
    }
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

    const text = (match === fontMatch ? match[2] : match[1]) ?? ''
    parts.push({ text, color: matchType })

    remaining = remaining.slice(match.index + match[0].length)
  }

  return parts
}

const parsedDescription = computed(() => parseDescription(props.description))

const categoryLabels: Record<SupportedTooltipLocale, Record<'evolution' | 'enlightenment' | 'leap', string>> = {
  en: {
    evolution: 'Evolution',
    enlightenment: 'Enlightenment',
    leap: 'Leap',
  },
  es: {
    evolution: 'Evolucion',
    enlightenment: 'Iluminacion',
    leap: 'Salto',
  },
}

const categoryBorderColors: Record<'evolution' | 'enlightenment' | 'leap', string> = {
  evolution: 'border-amber-500/50',
  enlightenment: 'border-purple-500/50',
  leap: 'border-cyan-500/50'
}

const categoryTextColors: Record<'evolution' | 'enlightenment' | 'leap', string> = {
  evolution: 'text-amber-300',
  enlightenment: 'text-purple-300',
  leap: 'text-cyan-300'
}

const categoryIconBorderColors: Record<'evolution' | 'enlightenment' | 'leap', string> = {
  evolution: 'border-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.45)]',
  enlightenment: 'border-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.45)]',
  leap: 'border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.45)]'
}

const localizedCategoryLabels = computed(() => categoryLabels[tooltipLocale.value])

const emptyDescriptionLabel = computed(() => (
  tooltipLocale.value === 'es'
    ? 'No hay descripcion disponible'
    : 'No description available'
))
</script>

<template>
  <div
    ref="wrapperRef"
    :class="[wrapperClass, visibilityClass]"
    :style="triggerAnchorStyle"
  >
    <div
      class="mk-inline-tooltip-card mk-inline-ark-passive-card relative bg-[#1a1d24] border rounded w-[min(280px,calc(100vw-1rem))] sm:w-auto sm:min-w-65 sm:max-w-80 shadow-xl"
      :class="categoryBorderColors[props.category]"
    >
      <div class="flex items-center gap-3 px-3 py-2.5 border-b border-zinc-700/30">
        <div class="shrink-0">
          <img
            v-if="props.iconUrl"
            :src="props.iconUrl"
            :alt="props.name"
            class="size-10 rounded border-2"
            :class="categoryIconBorderColors[props.category]"
          >
          <div
            v-else
            class="size-10 rounded border-2 bg-zinc-900/50 flex items-center justify-center"
            :class="categoryIconBorderColors[props.category]"
          >
            <span class="text-zinc-500 text-xs">?</span>
          </div>
        </div>

        <div class="flex-1 min-w-0">
          <div class="font-medium text-white text-sm leading-tight">{{ props.name }}</div>
          <div class="text-[10px] uppercase tracking-wider" :class="categoryTextColors[props.category]">
            {{ localizedCategoryLabels[props.category] }}
          </div>
        </div>
      </div>

      <div class="px-3 py-2.5">
        <div v-if="parsedDescription.length > 0" class="text-xs text-zinc-300 leading-relaxed">
          <template v-for="(part, i) in parsedDescription" :key="i">
            <span v-if="part.color === 'green'" class="text-emerald-400">{{ part.text }}</span>
            <span v-else-if="part.color === 'yellow'" class="text-amber-300">{{ part.text }}</span>
            <span v-else-if="part.color === 'red'" class="text-red-400">{{ part.text }}</span>
            <span v-else-if="part.color === 'purple'" class="text-purple-300">{{ part.text }}</span>
            <span v-else-if="part.color === 'blue'" style="color: #00ccff">{{ part.text }}</span>
            <span v-else-if="part.color === 'orange'" class="text-orange-300">{{ part.text }}</span>
            <span v-else-if="part.color && part.color.startsWith('#')" :style="{ color: part.color }">{{ part.text }}</span>
            <span v-else class="text-zinc-300">{{ part.text }}</span>
          </template>
        </div>
        <div v-else class="text-xs text-zinc-500 italic">{{ emptyDescriptionLabel }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mk-inline-ark-passive-tooltip-trigger .mk-inline-ark-passive-card {
  max-height: var(--mk-inline-ark-passive-max-height, calc(100dvh - 1rem));
  overflow-y: auto;
}
</style>
