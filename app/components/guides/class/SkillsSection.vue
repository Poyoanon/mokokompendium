<script setup lang="ts">
import type { ArkPassiveCategory, Skill } from '~/types/guide'
import ArkPassiveTooltip from './ArkPassiveTooltip.vue'
import RuneTooltip from './RuneTooltip.vue'
import SkillTooltip from './SkillTooltip.vue'
import TripodTooltip from './TripodTooltip.vue'

type SkillHeaderLine = {
  text: string
  color: string
}

type SkillDescriptionPart = {
  text: string
  color: string | null
}

type TripodIconDetail = {
  name?: string
  url: string | null
  tier?: number
  slotNumber?: number
  description?: string | null
}

type InlineTripodDetail = {
  name: string
  url: string | null
  tier?: number
  description?: string | null
}

type RuneRarity = 'uncommon' | 'rare' | 'epic' | 'legendary'

type RuneDetail = {
  name: string
  rarity: RuneRarity | null
  description: string | null
  url: string | null
}

type TripodTooltipScope =
  | 'variant'
  | 'preArk'
  | 'note-variant'
  | 'note-preArk'
  | 'variant-overview'

type ArkPassiveTipData = {
  name?: string
  url: string | null
  description?: string | null
}

type SkillNoteInlinePart =
  | { type: 'text'; value: string }
  | { type: 'bold'; value: string }
  | { type: 'skill'; value: string }
  | { type: 'passive'; value: string }
  | { type: 'tripod'; key: string; name: string }

type SkillNoteLine = {
  isBullet: boolean
  parts: SkillNoteInlinePart[]
}

const props = withDefaults(defineProps<{
  scope: 'variant' | 'preArk'
  headingClass?: string
  skills: Skill[]
  hasHoverPointer: boolean
  noteSkillScopeBase: string
  notePassiveScopeBase: string
  noteTripodScope: 'note-variant' | 'note-preArk'
  skillIcons: Record<string, string | null>
  skillDescriptions: Record<string, string | null>
  tripodIcons: Record<string, TripodIconDetail>
  inlineTripods: Record<string, InlineTripodDetail>
  runeDetails: Record<string, RuneDetail>
  isSkillExpanded: (skillName: string) => boolean
  toggleSkillNotes: (skillName: string) => void
  getSkillLookupName: (skill: { name: string; icon?: string }) => string
  getSkillHeaderLines: (skillName: string) => SkillHeaderLine[]
  parseSkillDescription: (desc?: string | null) => SkillDescriptionPart[]
  toggleSkillTooltip: (event: Event, scope: string, skillName: string) => void
  isSkillTooltipActive: (scope: string, skillName: string) => boolean
  toggleRuneTooltip: (event: Event, scope: 'variant' | 'preArk', skillName: string) => void
  isRuneTooltipActive: (scope: 'variant' | 'preArk', skillName: string) => boolean
  getRuneLookupKey: (name?: string | null, rarity?: string | null) => string
  normalizeRuneRarity: (rarity?: string | null) => RuneRarity | null
  toggleTripodTooltip: (scope: TripodTooltipScope, skillName: string, tripodName: string, event?: Event) => void
  isTripodTooltipActive: (scope: TripodTooltipScope, skillName: string, tripodName: string) => boolean
  tripodnumber: (slotNumber?: number | null) => number | null
  getSkillNoteLines: (skillName: string, notes?: string) => SkillNoteLine[]
  getInlineSkillScope: (section: string, itemIndex: number, partIndex: number) => string
  toggleArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string, event?: Event) => void
  showArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => void
  hideArkPassiveTooltip: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => void
  isArkPassiveTooltipActive: (scope: 'variant' | 'preArk', passive: { name: string; tier?: number }, instanceKey?: string) => boolean
  getArkPassiveTipData: (name: string) => ArkPassiveTipData | undefined
  hasArkPassiveTipData: (name: string) => boolean
  getArkPassiveTipCategory: (name: string) => ArkPassiveCategory
}>(), {
  headingClass: 'mk-eyebrow mb-3',
})

const getSkillLookup = (skill: Skill) => props.getSkillLookupName(skill)

const onSkillCardClick = (skill: Skill) => {
  if (!skill.notes) return
  props.toggleSkillNotes(skill.name)
}

const onSkillIconClick = (event: Event, skillName: string) => {
  props.toggleSkillTooltip(event, props.scope, skillName)
}

const isSkillIconTooltipActive = (skillName: string) =>
  props.isSkillTooltipActive(props.scope, skillName)

const onRuneClick = (event: Event, skillName: string) => {
  props.toggleRuneTooltip(event, props.scope, skillName)
}

const isRuneTooltipActiveForSkill = (skillName: string) =>
  props.isRuneTooltipActive(props.scope, skillName)

const getRuneDetailsForSkill = (skill: Skill) =>
  props.runeDetails[props.getRuneLookupKey(skill.rune, skill.rune_rarity)]

const getRuneDisplayNameForSkill = (skill: Skill) =>
  getRuneDetailsForSkill(skill)?.name ?? skill.rune

const getTierTripodIconKey = (skillName: string, tierKey: string) => `${skillName}:${tierKey}`
const getNamedTripodIconKey = (skillName: string, tripodName: string) => `${skillName}:${tripodName}`

const getTierTripodDisplayName = (skillName: string, tierKey: string, fallbackName: string | number) =>
  props.tripodIcons[getTierTripodIconKey(skillName, tierKey)]?.name ?? String(fallbackName)

const getNamedTripodDisplayName = (skillName: string, tripodName: string) =>
  props.tripodIcons[getNamedTripodIconKey(skillName, tripodName)]?.name ?? tripodName

const onTripodClick = (event: Event, skillName: string, tripodName: string) => {
  props.toggleTripodTooltip(props.scope, skillName, tripodName, event)
}

const isTripodTooltipActiveForSkill = (skillName: string, tripodName: string) =>
  props.isTripodTooltipActive(props.scope, skillName, tripodName)

const getNoteSkillScope = (sourceSkillName: string, lineIndex: number, partIndex: number) =>
  props.getInlineSkillScope(`${props.noteSkillScopeBase}-${sourceSkillName}`, lineIndex, partIndex)

const getNotePassiveScope = (sourceSkillName: string, lineIndex: number, partIndex: number) =>
  props.getInlineSkillScope(`${props.notePassiveScopeBase}-${sourceSkillName}`, lineIndex, partIndex)

const onNoteSkillClick = (
  event: Event,
  sourceSkillName: string,
  lineIndex: number,
  partIndex: number,
  skillName: string,
) => {
  props.toggleSkillTooltip(event, getNoteSkillScope(sourceSkillName, lineIndex, partIndex), skillName)
}

const isNoteSkillTooltipActive = (
  sourceSkillName: string,
  lineIndex: number,
  partIndex: number,
  skillName: string,
) => props.isSkillTooltipActive(getNoteSkillScope(sourceSkillName, lineIndex, partIndex), skillName)

const onNotePassiveClick = (
  event: Event,
  sourceSkillName: string,
  lineIndex: number,
  partIndex: number,
  passiveName: string,
) => {
  props.toggleArkPassiveTooltip(props.scope, { name: passiveName }, getNotePassiveScope(sourceSkillName, lineIndex, partIndex), event)
}

const onNotePassiveEnter = (sourceSkillName: string, lineIndex: number, partIndex: number, passiveName: string) => {
  props.showArkPassiveTooltip(props.scope, { name: passiveName }, getNotePassiveScope(sourceSkillName, lineIndex, partIndex))
}

const onNotePassiveLeave = (sourceSkillName: string, lineIndex: number, partIndex: number, passiveName: string) => {
  props.hideArkPassiveTooltip(props.scope, { name: passiveName }, getNotePassiveScope(sourceSkillName, lineIndex, partIndex))
}

const isNotePassiveTooltipActive = (
  sourceSkillName: string,
  lineIndex: number,
  partIndex: number,
  passiveName: string,
) => props.isArkPassiveTooltipActive(props.scope, { name: passiveName }, getNotePassiveScope(sourceSkillName, lineIndex, partIndex))

const onNoteTripodClick = (event: Event, skillName: string, tripodName: string) => {
  props.toggleTripodTooltip(props.noteTripodScope, skillName, tripodName, event)
}

const isNoteTripodTooltipActive = (skillName: string, tripodName: string) =>
  props.isTripodTooltipActive(props.noteTripodScope, skillName, tripodName)

const getCompactTripodName = (name: string) => {
  const words = name.trim().split(/\s+/).filter(Boolean)
  if (words.length <= 1) return name
  return words
    .map((word, index) => (index === 0 ? word : `${word.charAt(0)}.`))
    .join(' ')
}

const getNotePassiveDisplayName = (name: string) =>
  props.getArkPassiveTipData(name)?.name ?? name
</script>

<template>
  <section v-if="props.skills.length">
    <p :class="props.headingClass">Skills</p>
    <div class="grid md:grid-cols-2 gap-3 items-start">
      <div
        v-for="skill in props.skills"
        :key="`${props.scope}-${skill.name}`"
        class="mk-skill-card relative p-3"
        :class="[skill.notes ? 'cursor-pointer' : '', props.isSkillExpanded(skill.name) ? 'self-stretch' : 'self-start']"
        @click="onSkillCardClick(skill)"
      >
        <div class="flex items-start gap-2.5 max-[390px]:flex-wrap">
          <div class="flex items-start gap-2.5 shrink-0 max-[390px]:min-w-0 max-[390px]:flex-1">
            <div
              class="relative group self-center"
              @click="onSkillIconClick($event, skill.name)"
            >
              <img
                v-if="props.skillIcons[getSkillLookup(skill)]"
                :src="props.skillIcons[getSkillLookup(skill)] ?? ''"
                :alt="skill.name"
                class="size-12 rounded border-2 border-zinc-700"
              >
              <div v-else class="size-12 rounded border-2 border-zinc-700 bg-zinc-900"/>

              <SkillTooltip
                v-if="props.skillDescriptions[getSkillLookup(skill)] !== undefined"
                :active="isSkillIconTooltipActive(skill.name)"
                :hover-open="props.hasHoverPointer"
                :name="skill.name"
                :icon-url="props.skillIcons[getSkillLookup(skill)] ?? null"
                :header-lines="props.getSkillHeaderLines(skill.name)"
                :description-parts="props.parseSkillDescription(props.skillDescriptions[getSkillLookup(skill)])"
              />
            </div>

            <div class="flex flex-col gap-1 shrink-0 max-[390px]:min-w-0">
              <div v-if="skill.level" class="mk-mini-label muted normal-case tracking-normal leading-tight">
                Lv. <span class="font-bold">{{ skill.level }}</span>
              </div>
              <div v-else-if="skill.level_label" class="mk-mini-label muted normal-case tracking-normal leading-tight">
                {{ skill.level_label }}
              </div>
              <h3 class="text-sm font-semibold text-white leading-tight max-[390px]:break-words">{{ skill.name }}</h3>
              <div
                v-if="skill.rune"
                class="relative group w-fit"
                @click.stop="onRuneClick($event, skill.name)"
              >
                <span
                  class="px-2 py-0.5 rounded-full mk-pill-rune w-fit"
                  :class="{
                    'bg-yellow-500/20 text-yellow-300': skill.rune_rarity === 'legendary',
                    'bg-purple-500/20 text-purple-300': skill.rune_rarity === 'epic',
                    'bg-blue-500/20 text-blue-300': skill.rune_rarity === 'rare',
                    'bg-green-500/20 text-green-300': skill.rune_rarity === 'uncommon',
                    'bg-zinc-500/20 text-zinc-300': !skill.rune_rarity,
                  }"
                >
                  {{ getRuneDisplayNameForSkill(skill) }}
                </span>
                <div
                  class="fixed left-1/2 -translate-x-1/2 bottom-4 mb-0 transition z-50 sm:absolute sm:bottom-full sm:mb-2"
                  :class="[
                    props.hasHoverPointer ? 'group-hover:opacity-100 group-hover:scale-100' : '',
                    isRuneTooltipActiveForSkill(skill.name) ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none',
                  ]"
                >
                  <RuneTooltip
                    :name="getRuneDetailsForSkill(skill)?.name ?? skill.rune"
                    :rarity="getRuneDetailsForSkill(skill)?.rarity ?? props.normalizeRuneRarity(skill.rune_rarity)"
                    :description="getRuneDetailsForSkill(skill)?.description ?? null"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex min-w-0 flex-1 items-center justify-end gap-1.5 self-center max-[390px]:order-3 max-[390px]:basis-full max-[390px]:justify-start max-[390px]:overflow-x-auto max-[390px]:pt-1 max-[390px]:flex-nowrap">
            <template v-if="skill.tripods && typeof skill.tripods === 'object' && !Array.isArray(skill.tripods)">
              <div
                v-for="(tripodValue, tierKey) in skill.tripods"
                :key="String(tierKey)"
                class="flex shrink-0 flex-col items-center"
              >
                <div class="relative">
                  <img
                    v-if="props.tripodIcons[getTierTripodIconKey(skill.name, String(tierKey))]?.url"
                    :src="props.tripodIcons[getTierTripodIconKey(skill.name, String(tierKey))]?.url ?? ''"
                    :alt="typeof tripodValue === 'number' ? `Tier ${String(tierKey).replace('tier_', '')} - ${tripodValue}` : getTierTripodDisplayName(skill.name, String(tierKey), tripodValue)"
                    class="size-10 shrink-0 rounded border-2"
                    :class="{
                      'border-blue-500': String(tierKey) === 'tier_1',
                      'border-green-500': String(tierKey) === 'tier_2',
                      'border-yellow-500': String(tierKey) === 'tier_3',
                    }"
                    :title="typeof tripodValue === 'number' ? `Index ${tripodValue}` : getTierTripodDisplayName(skill.name, String(tierKey), tripodValue)"
                  >
                  <div v-else class="size-10 shrink-0 rounded border-2 border-zinc-700 bg-zinc-900"/>
                  <span
                    v-if="props.tripodIcons[getTierTripodIconKey(skill.name, String(tierKey))]?.slotNumber"
                    class="absolute -top-1 -right-1 z-10 flex size-4 items-center justify-center rounded-sm border bg-zinc-900/95 text-[10px] font-semibold leading-none shadow-sm"
                    :class="{
                      'border-blue-300/80 text-blue-200': String(tierKey) === 'tier_1',
                      'border-emerald-300/80 text-emerald-200': String(tierKey) === 'tier_2',
                      'border-amber-300/80 text-amber-200': String(tierKey) === 'tier_3',
                    }"
                  >
                    {{ props.tripodnumber(props.tripodIcons[getTierTripodIconKey(skill.name, String(tierKey))]?.slotNumber) }}
                  </span>
                </div>
                <span
                  v-if="typeof tripodValue === 'string'"
                  class="mk-mini-label muted mt-1 max-w-24 text-center leading-tight normal-case tracking-normal"
                  :title="getTierTripodDisplayName(skill.name, String(tierKey), tripodValue)"
                >
                  <span class="max-[390px]:hidden">{{ getTierTripodDisplayName(skill.name, String(tierKey), tripodValue) }}</span>
                  <span class="hidden max-[390px]:inline">{{ getCompactTripodName(getTierTripodDisplayName(skill.name, String(tierKey), tripodValue)) }}</span>
                </span>
              </div>
            </template>

            <template v-else-if="Array.isArray(skill.tripods)">
              <div
                v-for="tripodName in skill.tripods"
                :key="tripodName"
                class="relative group shrink-0"
                @click.stop="onTripodClick($event, skill.name, tripodName)"
              >
                <img
                  v-if="props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.url"
                  :src="props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.url ?? ''"
                  :alt="getNamedTripodDisplayName(skill.name, tripodName)"
                  class="size-10 shrink-0 rounded border-2 transition-all"
                  :class="{
                    'border-blue-500': props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.tier === 1,
                    'border-green-500': props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.tier === 2,
                    'border-yellow-500': props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.tier === 3,
                    'border-zinc-700': !props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.tier,
                    'ring-2 ring-white/60': false,
                  }"
                >
                <div v-else class="size-10 shrink-0 rounded border-2 border-zinc-700 bg-zinc-900"/>
                <span
                  v-if="props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.slotNumber"
                  class="absolute -top-1 -right-1 z-10 flex size-4 items-center justify-center rounded-sm border bg-zinc-900/95 text-[10px] font-semibold leading-none shadow-sm"
                  :class="{
                    'border-blue-300/80 text-blue-200': props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.tier === 1,
                    'border-emerald-300/80 text-emerald-200': props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.tier === 2,
                    'border-amber-300/80 text-amber-200': props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.tier === 3,
                    'border-zinc-300/70 text-zinc-100': !props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.tier,
                  }"
                >
                  {{ props.tripodnumber(props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.slotNumber) }}
                </span>

                <TripodTooltip
                  mode="skillcard"
                  :active="isTripodTooltipActiveForSkill(skill.name, tripodName)"
                  :hover-open="props.hasHoverPointer"
                  :name="getNamedTripodDisplayName(skill.name, tripodName)"
                  :description="props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.description"
                  :tier="props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.tier || 1"
                  :icon-url="props.tripodIcons[getNamedTripodIconKey(skill.name, tripodName)]?.url"
                />
              </div>
            </template>
          </div>

          <button
            v-if="skill.notes"
            class="flex items-center self-center rounded-full border border-zinc-800 bg-zinc-900/80 px-2 py-1 transition-colors hover:border-zinc-700 max-[390px]:ml-auto max-[390px]:self-start"
            title="Click to view skill notes"
            @click.stop="props.toggleSkillNotes(skill.name)"
          >
            <UIcon
              name="i-lucide-chevron-down"
              class="size-4 text-amber-300 transition-transform"
              :class="{ 'rotate-180': props.isSkillExpanded(skill.name) }"
            />
          </button>
        </div>

        <div
          v-if="skill.notes && props.isSkillExpanded(skill.name)"
          class="mt-3 pt-3 border-t border-zinc-800 text-sm text-zinc-300 leading-relaxed"
          @click.stop
        >
          <template
            v-for="(line, lineIndex) in props.getSkillNoteLines(skill.name, skill.notes)"
            :key="`${props.scope}-note-line-${skill.name}-${lineIndex}`"
          >
            <div v-if="line.parts.length === 0" class="h-2" />
            <div v-else class="min-w-0" :class="line.isBullet ? 'flex items-start gap-2' : ''">
              <span v-if="line.isBullet" class="text-zinc-500">-</span>
              <span>
                <template
                  v-for="(part, partIndex) in line.parts"
                  :key="`${props.scope}-note-part-${skill.name}-${lineIndex}-${partIndex}`"
                >
                  <span v-if="part.type === 'text'">{{ part.value }}</span>
                  <span v-else-if="part.type === 'bold'" class="font-semibold text-zinc-100">{{ part.value }}</span>
                  <span
                    v-else-if="part.type === 'skill'"
                    class="relative group inline-flex items-center gap-1 align-middle text-zinc-100 underline decoration-dotted underline-offset-2 decoration-zinc-500/90 transition-colors hover:text-white hover:decoration-amber-300 cursor-help"
                    @click.stop="onNoteSkillClick($event, skill.name, lineIndex, partIndex, part.value)"
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
                      :active="isNoteSkillTooltipActive(skill.name, lineIndex, partIndex, part.value)"
                      :name="part.value"
                      :icon-url="props.skillIcons[part.value] ?? null"
                      :header-lines="props.getSkillHeaderLines(part.value)"
                      :description-parts="props.parseSkillDescription(props.skillDescriptions[part.value])"
                    />
                  </span>
                  <span
                    v-else-if="part.type === 'passive'"
                    class="relative group inline-flex items-center gap-1 align-middle text-zinc-100 underline decoration-dotted underline-offset-2 decoration-zinc-500/90 transition-colors hover:text-white hover:decoration-amber-300 cursor-help"
                    @click.stop="onNotePassiveClick($event, skill.name, lineIndex, partIndex, part.value)"
                    @mouseenter="onNotePassiveEnter(skill.name, lineIndex, partIndex, part.value)"
                    @mouseleave="onNotePassiveLeave(skill.name, lineIndex, partIndex, part.value)"
                  >
                    <img
                      v-if="props.getArkPassiveTipData(part.value)?.url"
                      :src="props.getArkPassiveTipData(part.value)?.url ?? ''"
                      :alt="getNotePassiveDisplayName(part.value)"
                      class="size-4 rounded border border-zinc-700 shrink-0"
                    >
                    <span class="font-semibold">{{ getNotePassiveDisplayName(part.value) }}</span>
                    <ArkPassiveTooltip
                      v-if="props.hasArkPassiveTipData(part.value)"
                      :active="isNotePassiveTooltipActive(skill.name, lineIndex, partIndex, part.value)"
                      :prefer-trigger-position="props.hasHoverPointer"
                      :hover-open="props.hasHoverPointer"
                      :name="getNotePassiveDisplayName(part.value)"
                      :description="props.getArkPassiveTipData(part.value)?.description"
                      :category="props.getArkPassiveTipCategory(part.value)"
                      :icon-url="props.getArkPassiveTipData(part.value)?.url"
                    />
                  </span>
                  <span
                    v-else-if="part.type === 'tripod'"
                    class="relative group inline-flex items-center gap-1 align-middle text-zinc-100 underline decoration-dotted underline-offset-2 decoration-zinc-500/90 transition-colors hover:text-white hover:decoration-amber-300 cursor-help"
                    @click.stop="onNoteTripodClick($event, skill.name, part.name)"
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
                      :active="isNoteTripodTooltipActive(skill.name, part.name)"
                      :prefer-trigger-position="props.hasHoverPointer"
                      :hover-open="props.hasHoverPointer"
                      :name="props.inlineTripods[part.key]?.name ?? part.name"
                      :description="props.inlineTripods[part.key]?.description"
                      :tier="props.inlineTripods[part.key]?.tier || 1"
                      :icon-url="props.inlineTripods[part.key]?.url"
                    />
                  </span>
                </template>
              </span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
