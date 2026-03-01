<script setup lang="ts">
import type { ArkGridVariant, Build } from '~/types/guide'

const props = withDefaults(defineProps<{
  title: string
  description: string
  guideUpdatedDate?: string | null
  builds: Build[]
  selectedBuild: number
  variants: ArkGridVariant[]
  selectedVariant: number
  currentVariantRecommended: boolean
}>(), {
  guideUpdatedDate: null,
})

const emit = defineEmits<{
  'update:selectedBuild': [index: number]
  'update:selectedVariant': [index: number]
}>()

const onBuildClick = (index: number) => {
  emit('update:selectedBuild', index)
}

const onVariantChange = (event: Event) => {
  const target = event.target
  if (!(target instanceof HTMLSelectElement)) return

  const nextVariant = Number.parseInt(target.value, 10)
  emit('update:selectedVariant', Number.isNaN(nextVariant) ? 0 : nextVariant)
}
</script>

<template>
  <header class="mk-card p-6 mb-6">
    <p class="mk-eyebrow mb-2">Class Guide</p>
    <h1 class="text-3xl font-bold mb-2">{{ props.title }}</h1>
    <p class="mk-subtle text-sm">{{ props.description }}</p>
    <div v-if="props.guideUpdatedDate" class="flex items-center gap-3 mt-3 text-xs text-zinc-500">
      <span>Updated {{ props.guideUpdatedDate }}</span>
    </div>
  </header>

  <div v-if="props.builds.length" class="mb-4">
    <div class="mk-tab-shell">
      <button
        v-for="(build, index) in props.builds"
        :key="build.name"
        class="mk-tab font-medium shrink-0 whitespace-nowrap"
        :class="props.selectedBuild === index ? 'is-active' : ''"
        @click="onBuildClick(index)"
      >
        {{ build.name }}
      </button>
    </div>
  </div>

  <div v-if="props.variants.length" class="mb-6">
    <div class="flex flex-col gap-1">
      <span class="mk-eyebrow">Ark Grid Variant</span>
      <div class="mk-variant-row">
        <div class="mk-select-shell">
          <select
            class="mk-select"
            :value="props.selectedVariant"
            @change="onVariantChange"
          >
            <option
              v-for="(variant, index) in props.variants"
              :key="variant.name"
              :value="index"
            >
              {{ variant.name }}
            </option>
          </select>
          <UIcon
            name="i-lucide-chevron-down"
            class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500"
          />
        </div>
        <span
          v-if="props.currentVariantRecommended"
          class="mk-pill mk-pill-recommended"
        >
          Recommended
        </span>
      </div>
    </div>
  </div>
</template>
