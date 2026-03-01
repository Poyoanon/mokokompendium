<script setup lang="ts">
const tools = [
  {
    name: 'Ark Grid Solver',
    description: 'Optimize astrogem assignments across up to 6 cores with breakpoint-aware scoring.',
    to: '/tools/ark-grid-solver',
    icon: 'i-lucide-hexagon'
  },
  {
    name: 'SSB Calc',
    description: 'Supersonic Breakthrough calculator for Evolution Damage and Swiftness breakpoints.',
    to: '/tools/ssb-calc',
    icon: 'i-lucide-gauge'
  }
]
</script>

<template>
  <div class="py-8 md:py-10">
    <UContainer class="max-w-4xl">
      <p class="mk-eyebrow mb-2">Tools</p>
      <h1 class="text-3xl font-bold mb-6">Calculators & Utilities</h1>

      <div class="grid gap-4">
        <NuxtLink
          v-for="tool in tools"
          :key="tool.to"
          :to="tool.to"
          class="mk-link-card group flex items-start gap-4 p-5"
        >
          <div class="size-11 rounded-xl border border-zinc-700/70 bg-zinc-900/70 flex items-center justify-center shrink-0">
            <UIcon :name="tool.icon" class="size-5 text-zinc-200" />
          </div>

          <div class="min-w-0 flex-1">
            <h2 class="text-lg font-semibold text-zinc-100">{{ tool.name }}</h2>
            <p class="text-sm text-zinc-400 mt-1">{{ tool.description }}</p>
          </div>

          <UIcon name="i-lucide-chevron-right" class="size-4 text-zinc-600 mt-1" />
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>
