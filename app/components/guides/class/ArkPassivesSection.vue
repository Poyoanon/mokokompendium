<script setup lang="ts">
import type { ArkPassive, ArkPassiveCategory } from '~/types/guide'
import { DEFAULT_TOOLTIP_LOCALE, type SupportedTooltipLocale } from '~/utils/tooltip-locale'
import ArkPassiveTooltip from './ArkPassiveTooltip.vue'

type InlineArkPassivePart =
  | { type: 'text'; value: string }
  | { type: 'passive'; value: string }

type ArkPassiveTipData = {
  name?: string
  url: string | null
  description?: string | null
}

type ArkPassiveIconDetail = {
  name?: string
  url: string | null
  description?: string | null
}

const props = withDefaults(defineProps<{
  scope: 'variant' | 'preArk'
  passives: ArkPassive[]
  passiveTips?: string[]
  tipScopeBase: string
  headingClass?: string
  tipsContainerClass?: string
  hasHoverPointer: boolean
  arkPassiveIcons: Record<string, ArkPassiveIconDetail>
  getArkPassiveKey: (passive: { name: string; tier?: number; points?: number }) => string
  getInlineArkPassiveParts: (text?: string) => InlineArkPassivePart[]
  getInlineSkillScope: (section: string, itemIndex: number, partIndex: number) => string
  toggleArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string, event?: Event) => void
  showArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => void
  hideArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => void
  isArkPassiveTooltipActive: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => boolean
  getArkPassiveTipData: (name: string) => ArkPassiveTipData | undefined
  hasArkPassiveTipData: (name: string) => boolean
  getArkPassiveTipCategory: (name: string) => ArkPassiveCategory
}>(), {
  passiveTips: () => [],
  headingClass: 'mk-eyebrow mb-3',
  tipsContainerClass: 'mb-3',
})

const tooltipLocale = useState<SupportedTooltipLocale>('mk-site-locale', () => DEFAULT_TOOLTIP_LOCALE)

type ArkPassiveCategoryConfig = {
  key: ArkPassiveCategory
  titleClass: string
  tierClass: string
  rowClass: string
  pointsClass: string
}

const CATEGORY_CONFIG: ArkPassiveCategoryConfig[] = [
  {
    key: 'evolution',
    titleClass: 'text-amber-300',
    tierClass: 'text-amber-300/70',
    rowClass: 'bg-amber-900/50',
    pointsClass: 'text-amber-400',
  },
  {
    key: 'enlightenment',
    titleClass: 'text-purple-300',
    tierClass: 'text-purple-300/70',
    rowClass: 'bg-purple-900/50',
    pointsClass: 'text-purple-400',
  },
  {
    key: 'leap',
    titleClass: 'text-cyan-300',
    tierClass: 'text-cyan-300/70',
    rowClass: 'bg-cyan-900/50',
    pointsClass: 'text-cyan-400',
  },
]

const hasAnyContent = computed(() =>
  props.passives.length > 0 || props.passiveTips.length > 0,
)

const passivesByCategory = computed<Record<ArkPassiveCategory, ArkPassive[]>>(() => ({
  evolution: props.passives.filter((passive) => passive.category === 'evolution'),
  enlightenment: props.passives.filter((passive) => passive.category === 'enlightenment'),
  leap: props.passives.filter((passive) => passive.category === 'leap'),
}))

const tiersByCategory = computed<Record<ArkPassiveCategory, Array<number | undefined>>>(() => {
  const toSortedTiers = (passives: ArkPassive[]) =>
    Array.from(new Set(passives.map((passive) => passive.tier))).sort((a, b) => {
      if (a == null && b == null) return 0
      if (a == null) return 1
      if (b == null) return -1
      return a - b
    })

  return {
    evolution: toSortedTiers(passivesByCategory.value.evolution),
    enlightenment: toSortedTiers(passivesByCategory.value.enlightenment),
    leap: toSortedTiers(passivesByCategory.value.leap),
  }
})

const getTipScope = (tipIndex: number, partIndex: number) =>
  props.getInlineSkillScope(props.tipScopeBase, tipIndex, partIndex)

const onTipPassiveClick = (event: Event, tipIndex: number, partIndex: number, passiveName: string) => {
  props.toggleArkPassiveTooltip(props.scope, { name: passiveName }, getTipScope(tipIndex, partIndex), event)
}

const onTipPassiveEnter = (tipIndex: number, partIndex: number, passiveName: string) => {
  props.showArkPassiveTooltip(props.scope, { name: passiveName }, getTipScope(tipIndex, partIndex))
}

const onTipPassiveLeave = (tipIndex: number, partIndex: number, passiveName: string) => {
  props.hideArkPassiveTooltip(props.scope, { name: passiveName }, getTipScope(tipIndex, partIndex))
}

const isTipPassiveTooltipActive = (tipIndex: number, partIndex: number, passiveName: string) =>
  props.isArkPassiveTooltipActive(props.scope, { name: passiveName }, getTipScope(tipIndex, partIndex))

const onPassiveClick = (event: Event, passive: ArkPassive) => {
  props.toggleArkPassiveTooltip(props.scope, passive, undefined, event)
}

const onPassiveEnter = (passive: ArkPassive) => {
  props.showArkPassiveTooltip(props.scope, passive)
}

const onPassiveLeave = (passive: ArkPassive) => {
  props.hideArkPassiveTooltip(props.scope, passive)
}

const isPassiveTooltipActive = (passive: ArkPassive) =>
  props.isArkPassiveTooltipActive(props.scope, passive)

const getPassiveDisplayName = (passive: ArkPassive) =>
  props.arkPassiveIcons[props.getArkPassiveKey(passive)]?.name ?? passive.name

const getTipPassiveDisplayName = (name: string) =>
  props.getArkPassiveTipData(name)?.name ?? name

const getCategoryTitle = (category: ArkPassiveCategory) => {
  if (tooltipLocale.value === 'es') {
    if (category === 'evolution') return 'Evolucion'
    if (category === 'enlightenment') return 'Iluminacion'
    return 'Salto'
  }

  if (category === 'evolution') return 'Evolution'
  if (category === 'enlightenment') return 'Enlightenment'
  return 'Leap'
}

const sectionTitle = computed(() => (
  tooltipLocale.value === 'es'
    ? 'Pasivos de Arca'
    : 'Ark Passives'
))

const tipSectionTitle = computed(() => (
  tooltipLocale.value === 'es'
    ? 'Consejos de pasivos de Arca'
    : 'Ark Passive Tips'
))

const getTierLabel = (tier: number) => (
  tooltipLocale.value === 'es'
    ? `Nivel ${tier}`
    : `Tier ${tier}`
)
</script>

<template>
  <section v-if="hasAnyContent" class="space-y-3">
    <p :class="props.headingClass">{{ sectionTitle }}</p>

    <div v-if="props.passiveTips.length" :class="props.tipsContainerClass">
      <div class="mk-mini-label mb-2 text-purple-300/75">{{ tipSectionTitle }}</div>
      <ul class="space-y-1">
        <li
          v-for="(tip, tipIndex) in props.passiveTips"
          :key="tip"
          class="flex items-start gap-2 text-sm text-zinc-400"
        >
          <UIcon name="i-lucide-check" class="size-4 text-white mt-0.5 shrink-0" />
          <span>
            <template
              v-for="(part, partIndex) in props.getInlineArkPassiveParts(tip)"
              :key="`${props.scope}-passive-tip-${tipIndex}-${partIndex}`"
            >
              <span v-if="part.type === 'text'">{{ part.value }}</span>
              <span
                v-else
                class="relative group inline-flex items-center gap-1 align-middle text-zinc-100 underline decoration-dotted underline-offset-2 decoration-zinc-500/90 transition-colors hover:text-white hover:decoration-amber-300 cursor-help"
                @click.stop="onTipPassiveClick($event, tipIndex, partIndex, part.value)"
                @mouseenter="onTipPassiveEnter(tipIndex, partIndex, part.value)"
                @mouseleave="onTipPassiveLeave(tipIndex, partIndex, part.value)"
              >
                <img
                  v-if="props.getArkPassiveTipData(part.value)?.url"
                  :src="props.getArkPassiveTipData(part.value)?.url ?? ''"
                  :alt="getTipPassiveDisplayName(part.value)"
                  class="size-4 rounded border border-zinc-700 shrink-0"
                >
                <span class="font-semibold">{{ getTipPassiveDisplayName(part.value) }}</span>
                <ArkPassiveTooltip
                  v-if="props.hasArkPassiveTipData(part.value)"
                  :active="isTipPassiveTooltipActive(tipIndex, partIndex, part.value)"
                  :prefer-trigger-position="props.hasHoverPointer"
                  :hover-open="props.hasHoverPointer"
                  :name="getTipPassiveDisplayName(part.value)"
                  :description="props.getArkPassiveTipData(part.value)?.description"
                  :category="props.getArkPassiveTipCategory(part.value)"
                  :icon-url="props.getArkPassiveTipData(part.value)?.url"
                />
              </span>
            </template>
          </span>
        </li>
      </ul>
    </div>

    <div class="grid md:grid-cols-3 gap-4">
      <div v-for="category in CATEGORY_CONFIG" :key="`${props.scope}-${category.key}`">
        <p class="mk-eyebrow mb-2" :class="category.titleClass">{{ getCategoryTitle(category.key) }}</p>
        <div class="space-y-2">
          <template
            v-for="tier in tiersByCategory[category.key]"
            :key="`${props.scope}-${category.key}-tier-${tier}`"
          >
            <div v-if="tier" class="space-y-1">
              <div class="mk-mini-label" :class="category.tierClass">{{ getTierLabel(tier) }}</div>
              <div
                v-for="passive in passivesByCategory[category.key].filter((item) => item.tier === tier)"
                :key="`${props.scope}-${category.key}-${passive.name}-${tier}`"
                class="relative group flex items-center justify-between px-2 py-1 rounded text-xs text-zinc-300"
                :class="category.rowClass"
                @click.stop="onPassiveClick($event, passive)"
                @mouseenter="onPassiveEnter(passive)"
                @mouseleave="onPassiveLeave(passive)"
              >
                <span class="flex items-center gap-2">
                  <img
                    v-if="props.arkPassiveIcons[props.getArkPassiveKey(passive)]?.url"
                    :src="props.arkPassiveIcons[props.getArkPassiveKey(passive)]?.url ?? ''"
                    :alt="getPassiveDisplayName(passive)"
                    :title="getPassiveDisplayName(passive)"
                    class="size-4 rounded border border-zinc-700"
                  >
                  <span>{{ getPassiveDisplayName(passive) }}</span>
                </span>
                <span class="font-medium" :class="category.pointsClass">{{ passive.points }}</span>
                <ArkPassiveTooltip
                  :active="isPassiveTooltipActive(passive)"
                  :prefer-trigger-position="props.hasHoverPointer"
                  :hover-open="props.hasHoverPointer"
                  :name="getPassiveDisplayName(passive)"
                  :description="props.arkPassiveIcons[props.getArkPassiveKey(passive)]?.description"
                  :category="passive.category"
                  :icon-url="props.arkPassiveIcons[props.getArkPassiveKey(passive)]?.url"
                />
              </div>
            </div>

            <div v-else class="space-y-1">
              <div
                v-for="passive in passivesByCategory[category.key].filter((item) => !item.tier)"
                :key="`${props.scope}-${category.key}-${passive.name}-base`"
                class="relative group flex items-center justify-between px-2 py-1 rounded text-xs text-zinc-300"
                :class="category.rowClass"
                @click.stop="onPassiveClick($event, passive)"
                @mouseenter="onPassiveEnter(passive)"
                @mouseleave="onPassiveLeave(passive)"
              >
                <span class="flex items-center gap-2">
                  <img
                    v-if="props.arkPassiveIcons[props.getArkPassiveKey(passive)]?.url"
                    :src="props.arkPassiveIcons[props.getArkPassiveKey(passive)]?.url ?? ''"
                    :alt="getPassiveDisplayName(passive)"
                    :title="getPassiveDisplayName(passive)"
                    class="size-4 rounded border border-zinc-700"
                  >
                  <span>{{ getPassiveDisplayName(passive) }}</span>
                </span>
                <span class="font-medium" :class="category.pointsClass">{{ passive.points }}</span>
                <ArkPassiveTooltip
                  :active="isPassiveTooltipActive(passive)"
                  :prefer-trigger-position="props.hasHoverPointer"
                  :hover-open="props.hasHoverPointer"
                  :name="getPassiveDisplayName(passive)"
                  :description="props.arkPassiveIcons[props.getArkPassiveKey(passive)]?.description"
                  :category="passive.category"
                  :icon-url="props.arkPassiveIcons[props.getArkPassiveKey(passive)]?.url"
                />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
