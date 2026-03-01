<script setup lang="ts">
import type { ArkPassiveCategory } from '~/types/guide'
import ArkPassiveTooltip from './ArkPassiveTooltip.vue'
import SkillTooltip from './SkillTooltip.vue'

type InlineTextPart =
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

const props = withDefaults(defineProps<{
  title: string
  items: string[]
  itemKeyPrefix: string
  iconName?: string
  headingClass?: string
  skillScopeBase: string
  passiveScopeBase?: string | null
  partParser: (text: string) => InlineTextPart[]
  hasHoverPointer: boolean
  skillIcons: Record<string, string | null>
  skillDescriptions: Record<string, string | null>
  getInlineSkillScope: (section: string, itemIndex: number, partIndex: number) => string
  toggleSkillTooltip: (event: Event, scope: string, skillName: string) => void
  isSkillTooltipActive: (scope: string, skillName: string) => boolean
  getSkillHeaderLines: (skillName: string) => SkillHeaderLine[]
  parseSkillDescription: (description?: string | null) => SkillDescriptionPart[]
  passiveScope: 'variant' | 'preArk'
  toggleArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string, event?: Event) => void
  showArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => void
  hideArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => void
  isArkPassiveTooltipActive: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => boolean
  getArkPassiveTipData: (name: string) => ArkPassiveTipData | undefined
  hasArkPassiveTipData: (name: string) => boolean
  getArkPassiveTipCategory: (name: string) => ArkPassiveCategory
}>(), {
  iconName: 'i-lucide-check',
  headingClass: 'mk-eyebrow mb-2',
  passiveScopeBase: null,
})

const getSkillScope = (itemIndex: number, partIndex: number) =>
  props.getInlineSkillScope(props.skillScopeBase, itemIndex, partIndex)

const getPassiveScope = (itemIndex: number, partIndex: number) => {
  if (!props.passiveScopeBase) return null
  return props.getInlineSkillScope(props.passiveScopeBase, itemIndex, partIndex)
}

const onSkillClick = (event: Event, itemIndex: number, partIndex: number, skillName: string) => {
  props.toggleSkillTooltip(event, getSkillScope(itemIndex, partIndex), skillName)
}

const isSkillActive = (itemIndex: number, partIndex: number, skillName: string) =>
  props.isSkillTooltipActive(getSkillScope(itemIndex, partIndex), skillName)

const onPassiveClick = (event: Event, itemIndex: number, partIndex: number, passiveName: string) => {
  const scope = getPassiveScope(itemIndex, partIndex)
  if (!scope) return
  props.toggleArkPassiveTooltip(props.passiveScope, { name: passiveName }, scope, event)
}

const onPassiveEnter = (itemIndex: number, partIndex: number, passiveName: string) => {
  const scope = getPassiveScope(itemIndex, partIndex)
  if (!scope) return
  props.showArkPassiveTooltip(props.passiveScope, { name: passiveName }, scope)
}

const onPassiveLeave = (itemIndex: number, partIndex: number, passiveName: string) => {
  const scope = getPassiveScope(itemIndex, partIndex)
  if (!scope) return
  props.hideArkPassiveTooltip(props.passiveScope, { name: passiveName }, scope)
}

const isPassiveActive = (itemIndex: number, partIndex: number, passiveName: string) => {
  const scope = getPassiveScope(itemIndex, partIndex)
  if (!scope) return false
  return props.isArkPassiveTooltipActive(props.passiveScope, { name: passiveName }, scope)
}

const getPassiveDisplayName = (name: string) =>
  props.getArkPassiveTipData(name)?.name ?? name
</script>

<template>
  <section v-if="props.items.length">
    <p :class="props.headingClass">{{ props.title }}</p>
    <ul class="space-y-1">
      <li
        v-for="(item, itemIndex) in props.items"
        :key="`${props.itemKeyPrefix}-${itemIndex}`"
        class="flex items-start gap-2 text-sm text-zinc-400"
      >
        <UIcon :name="props.iconName" class="size-4 text-white mt-0.5 shrink-0" />
        <span>
          <template
            v-for="(part, partIndex) in props.partParser(item)"
            :key="`${props.itemKeyPrefix}-${itemIndex}-${partIndex}`"
          >
            <span v-if="part.type === 'text'">{{ part.value }}</span>
            <span
              v-else-if="part.type === 'skill'"
              class="relative group inline-flex items-center gap-1 align-middle text-zinc-100 underline decoration-dotted underline-offset-2 decoration-zinc-500/90 transition-colors hover:text-white hover:decoration-amber-300 cursor-help"
              @click.stop="onSkillClick($event, itemIndex, partIndex, part.value)"
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
                :active="isSkillActive(itemIndex, partIndex, part.value)"
                :name="part.value"
                :icon-url="props.skillIcons[part.value] ?? null"
                :header-lines="props.getSkillHeaderLines(part.value)"
                :description-parts="props.parseSkillDescription(props.skillDescriptions[part.value])"
              />
            </span>
            <span
              v-else-if="part.type === 'passive' && props.passiveScopeBase"
              class="relative group inline-flex items-center gap-1 align-middle text-zinc-100 underline decoration-dotted underline-offset-2 decoration-zinc-500/90 transition-colors hover:text-white hover:decoration-amber-300 cursor-help"
              @click.stop="onPassiveClick($event, itemIndex, partIndex, part.value)"
              @mouseenter="onPassiveEnter(itemIndex, partIndex, part.value)"
              @mouseleave="onPassiveLeave(itemIndex, partIndex, part.value)"
            >
              <img
                v-if="props.getArkPassiveTipData(part.value)?.url"
                :src="props.getArkPassiveTipData(part.value)?.url ?? ''"
                :alt="getPassiveDisplayName(part.value)"
                class="size-4 rounded border border-zinc-700 shrink-0"
              >
              <span class="font-semibold">{{ getPassiveDisplayName(part.value) }}</span>
              <ArkPassiveTooltip
                v-if="props.hasArkPassiveTipData(part.value)"
                :active="isPassiveActive(itemIndex, partIndex, part.value)"
                :prefer-trigger-position="props.hasHoverPointer"
                :hover-open="props.hasHoverPointer"
                :name="getPassiveDisplayName(part.value)"
                :description="props.getArkPassiveTipData(part.value)?.description"
                :category="props.getArkPassiveTipCategory(part.value)"
                :icon-url="props.getArkPassiveTipData(part.value)?.url"
              />
            </span>
            <span v-else-if="part.type === 'passive'" class="font-semibold text-zinc-100">{{ part.value }}</span>
            <span v-else-if="part.type === 'tripod'" class="font-semibold text-zinc-100">{{ part.name }}</span>
          </template>
        </span>
      </li>
    </ul>
  </section>
</template>
