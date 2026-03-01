export type SkillTooltipScope = string

type TripodTooltipScope = 'variant' | 'preArk' | 'note-variant' | 'note-preArk' | 'variant-overview'
type ArkPassiveTooltipScope = 'variant' | 'preArk'
type EngravingTooltipScope = 'variant' | 'preArk'
type RuneTooltipScope = 'variant' | 'preArk'
type ArkGridTooltipInstanceKey = string
type TooltipKind = 'tripod' | 'skill' | 'arkPassive' | 'arkGrid' | 'engraving' | 'rune'

type TooltipInteractionOptions = {
  getArkPassiveKey: (passive: { name: string; tier?: number; points?: number }) => string
}

const INLINE_TOOLTIP_EDGE_PADDING = 8
const INLINE_SKILL_TOOLTIP_TOUCH_WIDTH = 380
const INLINE_TRIPOD_TOOLTIP_TOUCH_WIDTH = 320
const INLINE_ARK_GRID_TOOLTIP_TOUCH_WIDTH = 280

const clampValue = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

const isInlineSkillTooltipScope = (scope: SkillTooltipScope) => scope !== 'variant' && scope !== 'preArk'

const isInlineTripodTooltipScope = (scope: TripodTooltipScope) => scope !== 'variant' && scope !== 'preArk'

const createsFixedContainingBlock = (element: HTMLElement) => {
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

const getFixedContainingBlockRect = (target: HTMLElement) => {
  let current = target.parentElement
  while (current && current !== document.documentElement) {
    if (createsFixedContainingBlock(current)) {
      return current.getBoundingClientRect()
    }
    current = current.parentElement
  }

  return null
}

export function useTooltipInteractions(options: TooltipInteractionOptions) {
  const { getArkPassiveKey } = options

  const activeTripodTooltip = ref<string | null>(null)
  const activeSkillTooltip = ref<string | null>(null)
  const activeArkPassiveTooltip = ref<string | null>(null)
  const activeArkGridTooltip = ref<string | null>(null)
  const activeEngravingTooltip = ref<string | null>(null)
  const activeRuneTooltip = ref<string | null>(null)
  const isTouchDevice = ref(false)
  const hasHoverPointer = ref(false)
  const inlineSkillTooltipX = ref(0)
  const inlineSkillTooltipY = ref(0)
  const inlineSkillTooltipShiftY = ref<'-100%' | '0'>('-100%')
  const lastTooltipTapPoint = ref<{ x: number; y: number } | null>(null)

  let handleTooltipScroll: (() => void) | null = null
  let captureTooltipTapPoint: ((event: PointerEvent) => void) | null = null
  let detectHoverPointerFromPointerMove: ((event: PointerEvent) => void) | null = null
  let handleTooltipOutsideClick: ((event: MouseEvent) => void) | null = null
  let hoverMediaQuery: MediaQueryList | null = null
  let coarsePointerMediaQuery: MediaQueryList | null = null
  let updateTouchDeviceMode: (() => void) | null = null

  const inlineSkillTooltipStyleVars = computed(() => ({
    '--mk-inline-skill-tooltip-x': `${inlineSkillTooltipX.value}px`,
    '--mk-inline-skill-tooltip-y': `${inlineSkillTooltipY.value}px`,
    '--mk-inline-skill-tooltip-shift-y': inlineSkillTooltipShiftY.value,
  }))

  const getTripodKey = (scope: TripodTooltipScope, skillName: string, tripodName: string) =>
    `${scope}:${skillName}:${tripodName}`

  const getArkPassiveTooltipKey = (
    scope: ArkPassiveTooltipScope,
    passive: { name: string; tier?: number },
    instanceKey?: string,
  ) => `${scope}:${getArkPassiveKey(passive)}:${instanceKey ?? 'default'}`

  const getSkillTooltipKey = (scope: SkillTooltipScope, skillName: string) => `${scope}:${skillName}`
  const getArkGridTooltipKey = (coreName: string, instanceKey?: ArkGridTooltipInstanceKey) =>
    `arkgrid:${coreName}:${instanceKey ?? 'default'}`
  const getEngravingTooltipKey = (scope: EngravingTooltipScope, engravingName: string) => `${scope}:${engravingName}`
  const getRuneTooltipKey = (scope: RuneTooltipScope, skillName: string) => `${scope}:${skillName}`

  const getRotationTooltipScope = (scope: 'variant' | 'preArk', index: number | string) => `${scope}-rotation-${index}`
  const getGemTooltipScope = (scope: 'variant' | 'preArk', type: string) => `${scope}-gem-${type}`
  const getDpsTooltipScope = (index: number) => `variant-dps-${index}`

  const setInlineSkillTooltipAnchor = (event?: Event, options?: { estimatedHeight?: number; tooltipWidth?: number }) => {
    if (!import.meta.client) return

    const target = event?.currentTarget instanceof HTMLElement
      ? event.currentTarget
      : null

    const rect = target
      ? target.getBoundingClientRect()
      : lastTooltipTapPoint.value
        ? {
            left: lastTooltipTapPoint.value.x,
            right: lastTooltipTapPoint.value.x,
            top: lastTooltipTapPoint.value.y,
            bottom: lastTooltipTapPoint.value.y,
            width: 0,
            height: 0,
          }
        : null

    if (!rect) return

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const tooltipWidth = Math.min(
      options?.tooltipWidth ?? INLINE_SKILL_TOOLTIP_TOUCH_WIDTH,
      viewportWidth - (INLINE_TOOLTIP_EDGE_PADDING * 2),
    )
    const tooltipHalfWidth = tooltipWidth / 2
    const desiredCenterX = rect.left + (rect.width / 2)

    const minX = INLINE_TOOLTIP_EDGE_PADDING + tooltipHalfWidth
    const maxX = viewportWidth - INLINE_TOOLTIP_EDGE_PADDING - tooltipHalfWidth
    const anchorX = clampValue(desiredCenterX, minX, maxX)

    const estimatedTooltipHeight = Math.min(options?.estimatedHeight ?? 260, viewportHeight - (INLINE_TOOLTIP_EDGE_PADDING * 2))
    const roomAbove = rect.top - INLINE_TOOLTIP_EDGE_PADDING
    const roomBelow = viewportHeight - rect.bottom - INLINE_TOOLTIP_EDGE_PADDING
    const placeBelow = roomAbove < estimatedTooltipHeight && roomBelow > roomAbove

    inlineSkillTooltipShiftY.value = placeBelow ? '0' : '-100%'
    const anchorY = placeBelow
      ? clampValue(rect.bottom + 8, INLINE_TOOLTIP_EDGE_PADDING, viewportHeight - INLINE_TOOLTIP_EDGE_PADDING)
      : clampValue(rect.top - 8, INLINE_TOOLTIP_EDGE_PADDING, viewportHeight - INLINE_TOOLTIP_EDGE_PADDING)

    const fixedContainingBlockRect = target ? getFixedContainingBlockRect(target) : null
    if (fixedContainingBlockRect) {
      inlineSkillTooltipX.value = anchorX - fixedContainingBlockRect.left
      inlineSkillTooltipY.value = anchorY - fixedContainingBlockRect.top
      return
    }

    inlineSkillTooltipX.value = anchorX
    inlineSkillTooltipY.value = anchorY
  }

  const clearAllTooltips = (except?: TooltipKind) => {
    if (except !== 'tripod') activeTripodTooltip.value = null
    if (except !== 'skill') activeSkillTooltip.value = null
    if (except !== 'arkPassive') activeArkPassiveTooltip.value = null
    if (except !== 'arkGrid') activeArkGridTooltip.value = null
    if (except !== 'engraving') activeEngravingTooltip.value = null
    if (except !== 'rune') activeRuneTooltip.value = null
  }

  const getTooltipValue = (kind: TooltipKind): string | null => {
    switch (kind) {
      case 'tripod':
        return activeTripodTooltip.value
      case 'skill':
        return activeSkillTooltip.value
      case 'arkPassive':
        return activeArkPassiveTooltip.value
      case 'arkGrid':
        return activeArkGridTooltip.value
      case 'engraving':
        return activeEngravingTooltip.value
      case 'rune':
        return activeRuneTooltip.value
      default:
        return null
    }
  }

  const setTooltipValue = (kind: TooltipKind, value: string | null) => {
    switch (kind) {
      case 'tripod':
        activeTripodTooltip.value = value
        return
      case 'skill':
        activeSkillTooltip.value = value
        return
      case 'arkPassive':
        activeArkPassiveTooltip.value = value
        return
      case 'arkGrid':
        activeArkGridTooltip.value = value
        return
      case 'engraving':
        activeEngravingTooltip.value = value
        return
      case 'rune':
        activeRuneTooltip.value = value
        return
      default:
        return
    }
  }

  const toggleTouchTooltip = (kind: TooltipKind, key: string) => {
    if (!isTouchDevice.value) return

    if (getTooltipValue(kind) === key) {
      setTooltipValue(kind, null)
      return
    }

    clearAllTooltips(kind)
    setTooltipValue(kind, key)
  }

  const toggleTripodTooltip = (scope: TripodTooltipScope, skillName: string, tripodName: string, event?: Event) => {
    if (isTouchDevice.value && isInlineTripodTooltipScope(scope)) {
      setInlineSkillTooltipAnchor(event, { tooltipWidth: INLINE_TRIPOD_TOOLTIP_TOUCH_WIDTH, estimatedHeight: 220 })
    }

    const key = getTripodKey(scope, skillName, tripodName)
    toggleTouchTooltip('tripod', key)
  }

  const isTripodTooltipActive = (scope: TripodTooltipScope, skillName: string, tripodName: string) =>
    activeTripodTooltip.value === getTripodKey(scope, skillName, tripodName)

  const toggleSkillTooltip = (event: Event, scope: SkillTooltipScope, skillName: string) => {
    if (!isTouchDevice.value) return
    event.preventDefault()
    event.stopPropagation()

    if (isInlineSkillTooltipScope(scope)) {
      setInlineSkillTooltipAnchor(event, { tooltipWidth: INLINE_SKILL_TOOLTIP_TOUCH_WIDTH, estimatedHeight: 260 })
    }

    const key = getSkillTooltipKey(scope, skillName)
    toggleTouchTooltip('skill', key)
  }

  const isSkillTooltipActive = (scope: SkillTooltipScope, skillName: string) =>
    activeSkillTooltip.value === getSkillTooltipKey(scope, skillName)

  const toggleArkPassiveTooltip = (
    scope: ArkPassiveTooltipScope,
    passive: { name: string; tier?: number },
    instanceKey?: string,
    _event?: Event,
  ) => {
    const key = getArkPassiveTooltipKey(scope, passive, instanceKey)
    toggleTouchTooltip('arkPassive', key)
  }

  const isArkPassiveTooltipActive = (
    scope: ArkPassiveTooltipScope,
    passive: { name: string; tier?: number },
    instanceKey?: string,
  ) => activeArkPassiveTooltip.value === getArkPassiveTooltipKey(scope, passive, instanceKey)

  const showArkPassiveTooltip = (
    scope: ArkPassiveTooltipScope,
    passive: { name: string; tier?: number },
    instanceKey?: string,
  ) => {
    if (isTouchDevice.value && !hasHoverPointer.value) return
    activeArkPassiveTooltip.value = getArkPassiveTooltipKey(scope, passive, instanceKey)
  }

  const hideArkPassiveTooltip = (
    scope: ArkPassiveTooltipScope,
    passive: { name: string; tier?: number },
    instanceKey?: string,
  ) => {
    if (isTouchDevice.value && !hasHoverPointer.value) return
    const key = getArkPassiveTooltipKey(scope, passive, instanceKey)
    if (activeArkPassiveTooltip.value === key) {
      activeArkPassiveTooltip.value = null
    }
  }

  const toggleArkGridTooltip = (coreName: string, event?: Event, instanceKey?: ArkGridTooltipInstanceKey) => {
    if (isTouchDevice.value) {
      setInlineSkillTooltipAnchor(event, { tooltipWidth: INLINE_ARK_GRID_TOOLTIP_TOUCH_WIDTH, estimatedHeight: 360 })
    }
    const key = getArkGridTooltipKey(coreName, instanceKey)
    toggleTouchTooltip('arkGrid', key)
  }

  const isArkGridTooltipActive = (coreName: string, instanceKey?: ArkGridTooltipInstanceKey) =>
    activeArkGridTooltip.value === getArkGridTooltipKey(coreName, instanceKey)

  const toggleEngravingTooltip = (event: Event, scope: EngravingTooltipScope, engravingName: string) => {
    if (!isTouchDevice.value) return
    event.preventDefault()
    event.stopPropagation()
    const key = getEngravingTooltipKey(scope, engravingName)
    toggleTouchTooltip('engraving', key)
  }

  const isEngravingTooltipActive = (scope: EngravingTooltipScope, engravingName: string) =>
    activeEngravingTooltip.value === getEngravingTooltipKey(scope, engravingName)

  const showEngravingTooltip = (scope: EngravingTooltipScope, engravingName: string) => {
    if (isTouchDevice.value && !hasHoverPointer.value) return
    activeEngravingTooltip.value = getEngravingTooltipKey(scope, engravingName)
  }

  const hideEngravingTooltip = (scope: EngravingTooltipScope, engravingName: string) => {
    if (isTouchDevice.value && !hasHoverPointer.value) return
    const key = getEngravingTooltipKey(scope, engravingName)
    if (activeEngravingTooltip.value === key) {
      activeEngravingTooltip.value = null
    }
  }

  const toggleRuneTooltip = (event: Event, scope: RuneTooltipScope, skillName: string) => {
    if (!isTouchDevice.value) return
    event.preventDefault()
    event.stopPropagation()
    const key = getRuneTooltipKey(scope, skillName)
    toggleTouchTooltip('rune', key)
  }

  const isRuneTooltipActive = (scope: RuneTooltipScope, skillName: string) =>
    activeRuneTooltip.value === getRuneTooltipKey(scope, skillName)

  onMounted(() => {
    if (!import.meta.client) return

    hoverMediaQuery = window.matchMedia('(hover: hover)')
    coarsePointerMediaQuery = window.matchMedia('(pointer: coarse)')
    updateTouchDeviceMode = () => {
      if (!import.meta.client) return

      const canHover = hoverMediaQuery?.matches ?? window.matchMedia('(hover: hover)').matches
      const pointerCoarse = coarsePointerMediaQuery?.matches ?? window.matchMedia('(pointer: coarse)').matches
      const anyHover = window.matchMedia('(any-hover: hover)').matches
      const anyFinePointer = window.matchMedia('(any-pointer: fine)').matches
      const userAgent = navigator.userAgent || ''
      const isMobileUserAgent = /iPhone|iPad|iPod|Android|Mobile/i.test(userAgent)
      const isNarrowViewport = window.innerWidth <= 768

      hasHoverPointer.value = canHover || anyHover || anyFinePointer
      isTouchDevice.value = !canHover || pointerCoarse || navigator.maxTouchPoints > 0 || isMobileUserAgent || isNarrowViewport
    }
    updateTouchDeviceMode()
    inlineSkillTooltipX.value = window.innerWidth / 2
    inlineSkillTooltipY.value = window.innerHeight / 2

    hoverMediaQuery.addEventListener?.('change', updateTouchDeviceMode)
    coarsePointerMediaQuery.addEventListener?.('change', updateTouchDeviceMode)
    window.addEventListener('resize', updateTouchDeviceMode, { passive: true })

    detectHoverPointerFromPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      hasHoverPointer.value = true
    }
    window.addEventListener('pointermove', detectHoverPointerFromPointerMove, { passive: true })

    captureTooltipTapPoint = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') return
      lastTooltipTapPoint.value = {
        x: event.clientX,
        y: event.clientY,
      }
    }
    window.addEventListener('pointerdown', captureTooltipTapPoint, { passive: true })

    handleTooltipOutsideClick = (event: MouseEvent) => {
      if (!isTouchDevice.value) return
      if (
        !activeTripodTooltip.value
        && !activeSkillTooltip.value
        && !activeArkPassiveTooltip.value
        && !activeArkGridTooltip.value
        && !activeEngravingTooltip.value
        && !activeRuneTooltip.value
      ) {
        return
      }

      const target = event.target
      if (target instanceof Element && target.closest('.mk-inline-tooltip-card')) {
        return
      }

      clearAllTooltips()
    }
    window.addEventListener('click', handleTooltipOutsideClick, { passive: true })

    handleTooltipScroll = () => {
      if (!isTouchDevice.value) return
      if (
        activeTripodTooltip.value
        || activeSkillTooltip.value
        || activeArkPassiveTooltip.value
        || activeArkGridTooltip.value
        || activeEngravingTooltip.value
        || activeRuneTooltip.value
      ) {
        clearAllTooltips()
      }
    }
    window.addEventListener('scroll', handleTooltipScroll, { passive: true })
    window.addEventListener('touchmove', handleTooltipScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    if (hoverMediaQuery && updateTouchDeviceMode) {
      hoverMediaQuery.removeEventListener?.('change', updateTouchDeviceMode)
    }
    if (coarsePointerMediaQuery && updateTouchDeviceMode) {
      coarsePointerMediaQuery.removeEventListener?.('change', updateTouchDeviceMode)
    }
    if (updateTouchDeviceMode) {
      window.removeEventListener('resize', updateTouchDeviceMode)
    }
    if (detectHoverPointerFromPointerMove) {
      window.removeEventListener('pointermove', detectHoverPointerFromPointerMove)
    }
    hoverMediaQuery = null
    coarsePointerMediaQuery = null
    updateTouchDeviceMode = null
    detectHoverPointerFromPointerMove = null

    if (captureTooltipTapPoint) {
      window.removeEventListener('pointerdown', captureTooltipTapPoint)
    }
    captureTooltipTapPoint = null

    if (handleTooltipOutsideClick) {
      window.removeEventListener('click', handleTooltipOutsideClick)
    }
    handleTooltipOutsideClick = null

    if (handleTooltipScroll) {
      window.removeEventListener('scroll', handleTooltipScroll)
      window.removeEventListener('touchmove', handleTooltipScroll)
    }
    handleTooltipScroll = null
  })

  return {
    isTouchDevice,
    hasHoverPointer,
    inlineSkillTooltipStyleVars,
    clearAllTooltips,
    toggleTripodTooltip,
    isTripodTooltipActive,
    toggleSkillTooltip,
    isSkillTooltipActive,
    toggleArkPassiveTooltip,
    isArkPassiveTooltipActive,
    showArkPassiveTooltip,
    hideArkPassiveTooltip,
    toggleArkGridTooltip,
    isArkGridTooltipActive,
    toggleEngravingTooltip,
    isEngravingTooltipActive,
    showEngravingTooltip,
    hideEngravingTooltip,
    toggleRuneTooltip,
    isRuneTooltipActive,
    getRotationTooltipScope,
    getGemTooltipScope,
    getDpsTooltipScope,
  }
}
