<script setup lang="ts">
import type { Gem } from '~/types/guide'
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
  scope: 'variant' | 'preArk'
  gems: Gem[]
  skillIcons: Record<string, string | null>
  skillDescriptions: Record<string, string | null>
  hasHoverPointer: boolean
  getGemIconKey: (gem: Gem) => string
  getGemTooltipScope: (scope: 'variant' | 'preArk', type: string) => string
  isSkillTooltipActive: (scope: string, skillName: string) => boolean
  toggleSkillTooltip: (event: Event, scope: string, skillName: string) => void
  getSkillHeaderLines: (skillName: string) => SkillHeaderLine[]
  parseSkillDescription: (description?: string | null) => SkillDescriptionPart[]
}>()

const sortedDamageGems = computed(() =>
  props.gems
    .filter((gem) => gem.type === 'damage')
    .sort((a, b) => a.priority - b.priority),
)

const sortedCooldownGems = computed(() =>
  props.gems
    .filter((gem) => gem.type === 'cooldown')
    .sort((a, b) => a.priority - b.priority),
)

const getGemScope = (type: string) => props.getGemTooltipScope(props.scope, type)

const onGemClick = (event: Event, type: string, skillName: string) => {
  props.toggleSkillTooltip(event, getGemScope(type), skillName)
}

const isGemTooltipActive = (type: string, skillName: string) =>
  props.isSkillTooltipActive(getGemScope(type), skillName)
</script>

<template>
  <section v-if="props.gems.length">
    <p class="mk-eyebrow mb-3">Gem Priority</p>
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <p class="mk-eyebrow mb-2 text-red-300">Damage</p>
        <div class="flex flex-wrap gap-1">
          <span
            v-for="gem in sortedDamageGems"
            :key="`gem-damage-${props.scope}-${gem.skill}-${gem.priority}`"
            class="relative group inline-flex items-center gap-1 px-2 py-0.5 bg-red-950 rounded text-xs text-zinc-300"
            @click="onGemClick($event, gem.type, gem.skill)"
          >
            <span class="text-red-400 font-medium">{{ gem.priority }}</span>
            <img
              v-if="props.skillIcons[props.getGemIconKey(gem)]"
              :src="props.skillIcons[props.getGemIconKey(gem)] ?? ''"
              :alt="gem.skill"
              class="size-4 rounded border border-zinc-700"
            >
            {{ gem.skill }}
            <SkillTooltip
              v-if="props.skillDescriptions[gem.skill] !== undefined"
              mode="inline"
              :prefer-trigger-position="props.hasHoverPointer"
              :hover-open="props.hasHoverPointer"
              :active="isGemTooltipActive(gem.type, gem.skill)"
              :name="gem.skill"
              :icon-url="props.skillIcons[props.getGemIconKey(gem)] ?? null"
              :header-lines="props.getSkillHeaderLines(gem.skill)"
              :description-parts="props.parseSkillDescription(props.skillDescriptions[gem.skill])"
            />
          </span>
        </div>
      </div>

      <div>
        <p class="mk-eyebrow mb-2 text-blue-300">Cooldown</p>
        <div class="flex flex-wrap gap-1">
          <span
            v-for="gem in sortedCooldownGems"
            :key="`gem-cooldown-${props.scope}-${gem.skill}-${gem.priority}`"
            class="relative group inline-flex items-center gap-1 px-2 py-0.5 bg-blue-950 rounded text-xs text-zinc-300"
            @click="onGemClick($event, gem.type, gem.skill)"
          >
            <span class="text-blue-400 font-medium">{{ gem.priority }}</span>
            <img
              v-if="props.skillIcons[props.getGemIconKey(gem)]"
              :src="props.skillIcons[props.getGemIconKey(gem)] ?? ''"
              :alt="gem.skill"
              class="size-4 rounded border border-zinc-700"
            >
            {{ gem.skill }}
            <SkillTooltip
              v-if="props.skillDescriptions[gem.skill] !== undefined"
              mode="inline"
              :prefer-trigger-position="props.hasHoverPointer"
              :hover-open="props.hasHoverPointer"
              :active="isGemTooltipActive(gem.type, gem.skill)"
              :name="gem.skill"
              :icon-url="props.skillIcons[props.getGemIconKey(gem)] ?? null"
              :header-lines="props.getSkillHeaderLines(gem.skill)"
              :description-parts="props.parseSkillDescription(props.skillDescriptions[gem.skill])"
            />
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
