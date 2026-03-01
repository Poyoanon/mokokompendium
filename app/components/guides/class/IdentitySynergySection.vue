<script setup lang="ts">
import SkillTooltip from './SkillTooltip.vue'

type SkillHeaderLine = {
  text: string
  color: string
}

type SkillDescriptionPart = {
  text: string
  color: string | null
}

type GuideIdentity = {
  name: string
  description: string
}

type GuideSynergy = {
  name: string
  description: string
  skills: string[]
}

const props = defineProps<{
  identity?: GuideIdentity | null
  synergy?: GuideSynergy | null
  skillIcons: Record<string, string | null>
  skillDescriptions: Record<string, string | null>
  hasHoverPointer: boolean
  getInlineSkillScope: (scope: string, itemIndex: number, partIndex: number) => string
  isSkillTooltipActive: (scope: string, skillName: string) => boolean
  toggleSkillTooltip: (event: Event, scope: string, skillName: string) => void
  getSkillHeaderLines: (skillName: string) => SkillHeaderLine[]
  parseSkillDescription: (description?: string | null) => SkillDescriptionPart[]
}>()

const hasContent = computed(() => Boolean(props.identity || props.synergy))

const getSynergySkillScope = (skillIndex: number) =>
  props.getInlineSkillScope('synergy', 0, skillIndex)

const onSynergySkillClick = (event: Event, skillName: string, skillIndex: number) => {
  props.toggleSkillTooltip(event, getSynergySkillScope(skillIndex), skillName)
}

const isSynergySkillTooltipActive = (skillName: string, skillIndex: number) =>
  props.isSkillTooltipActive(getSynergySkillScope(skillIndex), skillName)
</script>

<template>
  <section v-if="hasContent" class="grid gap-3 md:grid-cols-2 mb-6">
    <div v-if="props.identity" class="mk-card p-4">
      <p class="mk-eyebrow mb-1">Identity</p>
      <p class="text-sm text-zinc-300 font-medium mb-1">{{ props.identity.name }}</p>
      <p class="text-sm text-zinc-400 leading-relaxed">{{ props.identity.description }}</p>
    </div>

    <div v-if="props.synergy" class="mk-card p-4">
      <p class="mk-eyebrow mb-1">Synergy</p>
      <p class="text-sm text-zinc-300 font-medium mb-1">{{ props.synergy.name }}</p>
      <p class="text-sm text-zinc-400">{{ props.synergy.description }}</p>

      <div class="flex flex-wrap gap-x-2 gap-y-1 mt-2 text-sm text-zinc-300">
        <div
          v-for="(skill, skillIndex) in props.synergy.skills"
          :key="`synergy-skill-${skillIndex}-${skill}`"
          class="relative group inline-flex items-center gap-1 align-middle text-zinc-100 underline decoration-dotted underline-offset-2 decoration-zinc-500/90 transition-colors hover:text-white hover:decoration-amber-300 cursor-help"
          @click.stop="onSynergySkillClick($event, skill, skillIndex)"
        >
          <img
            v-if="props.skillIcons[skill]"
            :src="props.skillIcons[skill] ?? ''"
            :alt="skill"
            class="size-4 rounded border border-zinc-700 shrink-0"
          >
          <div v-else class="size-4 rounded border border-zinc-700 bg-zinc-900 shrink-0"/>
          <span class="font-semibold">{{ skill }}</span>
          <SkillTooltip
            v-if="props.skillDescriptions[skill] !== undefined"
            mode="inline"
            :prefer-trigger-position="props.hasHoverPointer"
            :hover-open="props.hasHoverPointer"
            :active="isSynergySkillTooltipActive(skill, skillIndex)"
            :name="skill"
            :icon-url="props.skillIcons[skill] ?? null"
            :header-lines="props.getSkillHeaderLines(skill)"
            :description-parts="props.parseSkillDescription(props.skillDescriptions[skill])"
          />
        </div>
      </div>
    </div>
  </section>
</template>
