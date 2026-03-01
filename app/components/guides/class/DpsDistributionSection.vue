<script setup lang="ts">
import type { DpsDistribution } from '~/types/guide'
import SkillTooltip from './SkillTooltip.vue'

type SkillHeaderLine = {
  text: string
  color: string
}

type SkillDescriptionPart = {
  text: string
  color: string | null
}

const props = defineProps<{
  dpsDistribution: DpsDistribution[]
  skillIcons: Record<string, string | null>
  skillDescriptions: Record<string, string | null>
  hasHoverPointer: boolean
  getDpsTooltipScope: (index: number) => string
  isSkillTooltipActive: (scope: string, skillName: string) => boolean
  toggleSkillTooltip: (event: Event, scope: string, skillName: string) => void
  getDpsBarColor: (index: number) => string
  getDpsBarWidth: (value: number) => string
  formatDpsValue: (value: number) => string
  getSkillHeaderLines: (skillName: string) => SkillHeaderLine[]
  parseSkillDescription: (description?: string | null) => SkillDescriptionPart[]
}>()

const onDpsEntryClick = (event: Event, index: number, skillName: string) => {
  props.toggleSkillTooltip(event, props.getDpsTooltipScope(index), skillName)
}

const isDpsEntryTooltipActive = (index: number, skillName: string) =>
  props.isSkillTooltipActive(props.getDpsTooltipScope(index), skillName)
</script>

<template>
  <section v-if="props.dpsDistribution.length">
    <p class="mk-eyebrow mb-3">DPS Distribution</p>
    <div class="space-y-3">
      <div
        v-for="(entry, index) in props.dpsDistribution"
        :key="`dps-${entry.name}`"
        class="relative group flex items-center gap-3"
        @click="onDpsEntryClick($event, index, entry.name)"
      >
        <div class="shrink-0">
          <img
            v-if="props.skillIcons[entry.name]"
            :src="props.skillIcons[entry.name] ?? ''"
            :alt="entry.name"
            class="size-10 rounded border border-zinc-700"
          >
          <div v-else class="size-10 rounded border border-zinc-800 bg-zinc-900" />
        </div>

        <div class="flex-1 min-w-0">
          <div class="relative h-8 rounded-md bg-zinc-900/70 border border-zinc-800 overflow-hidden">
            <div
              class="h-full rounded-md"
              :class="props.getDpsBarColor(index)"
              :style="{ width: props.getDpsBarWidth(entry.dmg) }"
            />
            <div class="absolute inset-0 flex items-center justify-start px-3 text-sm font-semibold text-white truncate text-left">
              {{ entry.name }}
            </div>
          </div>
        </div>

        <div class="w-16 text-right text-sm font-semibold text-white">
          {{ props.formatDpsValue(entry.dmg) }}%
        </div>

        <SkillTooltip
          v-if="props.skillDescriptions[entry.name] !== undefined"
          mode="inline"
          :prefer-trigger-position="props.hasHoverPointer"
          :hover-open="props.hasHoverPointer"
          :active="isDpsEntryTooltipActive(index, entry.name)"
          :name="entry.name"
          :icon-url="props.skillIcons[entry.name] ?? null"
          :header-lines="props.getSkillHeaderLines(entry.name)"
          :description-parts="props.parseSkillDescription(props.skillDescriptions[entry.name])"
        />
      </div>
    </div>
  </section>
</template>
