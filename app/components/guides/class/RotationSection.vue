<script setup lang="ts">
import SkillTooltip from './SkillTooltip.vue'

type RotationSection = {
  title: string
  steps: string[]
}

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
  rotationSections: RotationSection[]
  skillIcons: Record<string, string | null>
  skillDescriptions: Record<string, string | null>
  hasHoverPointer: boolean
  getRotationTooltipScope: (scope: 'variant' | 'preArk', index: number | string) => string
  isSkillTooltipActive: (scope: string, skillName: string) => boolean
  toggleSkillTooltip: (event: Event, scope: string, skillName: string) => void
  getSkillHeaderLines: (skillName: string) => SkillHeaderLine[]
  parseSkillDescription: (description?: string | null) => SkillDescriptionPart[]
}>()

const getStepScope = (sectionIndex: number, stepIndex: number) =>
  props.getRotationTooltipScope(props.scope, `${sectionIndex}-${stepIndex}`)

const onStepClick = (event: Event, sectionIndex: number, stepIndex: number, skillName: string) => {
  props.toggleSkillTooltip(event, getStepScope(sectionIndex, stepIndex), skillName)
}

const isStepTooltipActive = (sectionIndex: number, stepIndex: number, skillName: string) =>
  props.isSkillTooltipActive(getStepScope(sectionIndex, stepIndex), skillName)
</script>

<template>
  <section v-if="props.rotationSections.length">
    <p class="mk-eyebrow mb-3">Rotation</p>
    <div class="space-y-2">
      <div
        v-for="(section, sectionIndex) in props.rotationSections"
        :key="`rotation-section-${props.scope}-${sectionIndex}`"
        class="space-y-1"
      >
        <p
          v-if="props.rotationSections.length > 1 || section.title !== 'Rotation'"
          class="mk-mini-label text-zinc-500"
        >
          {{ section.title }}
        </p>
        <div class="flex flex-wrap items-center gap-1">
          <template v-for="(step, stepIndex) in section.steps" :key="`rotation-step-${props.scope}-${sectionIndex}-${stepIndex}`">
            <span
              class="relative group flex items-center gap-1 px-2 py-1 bg-zinc-900 rounded text-sm text-white"
              @click="onStepClick($event, sectionIndex, stepIndex, step)"
            >
              <img
                v-if="props.skillIcons[step]"
                :src="props.skillIcons[step] ?? ''"
                :alt="step"
                class="size-4 rounded border border-zinc-700"
              >
              {{ step }}
              <SkillTooltip
                v-if="props.skillDescriptions[step] !== undefined"
                mode="inline"
                :prefer-trigger-position="props.hasHoverPointer"
                :hover-open="props.hasHoverPointer"
                :active="isStepTooltipActive(sectionIndex, stepIndex, step)"
                :name="step"
                :icon-url="props.skillIcons[step] ?? null"
                :header-lines="props.getSkillHeaderLines(step)"
                :description-parts="props.parseSkillDescription(props.skillDescriptions[step])"
              />
            </span>
            <UIcon
              v-if="stepIndex < section.steps.length - 1"
              name="i-lucide-arrow-right"
              class="size-3 text-zinc-600"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
