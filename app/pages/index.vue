<script setup lang="ts">
import { withContentQueryRetry } from '~/utils/content-query-retry'
import { getGuideUpdatedDate } from '~/utils/guide-updated'

const { data: classGuides } = await useAsyncData('class-guides', () =>
  withContentQueryRetry(() => queryCollection('classGuides').all())
)
const { data: guides } = await useAsyncData('guides', () =>
  withContentQueryRetry(() => queryCollection('guides').all())
)

const hasGuides = computed(() =>
  (classGuides.value?.length ?? 0) + (guides.value?.length ?? 0) > 0
)

const summonerIconPath = '/classicons/class_summoner.png'

const isSummonerGuide = (guide: { subclass?: string | null, path?: string }) => {
  const subclass = guide.subclass?.trim().toLowerCase()
  return subclass === 'summoner' || guide.path?.includes('/summoner')
}

const getUpdatedDate = (guide: { path?: string | null, lastUpdated?: string | null }) => getGuideUpdatedDate(guide)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-10 pb-16 md:pt-12 md:pb-20">
      <UContainer class="max-w-4xl mx-auto">
        <div class="text-center mb-8 md:mb-10">
          <img
            src="/icon.png"
            alt="Mokokompendium logo"
            class="size-16 mx-auto mb-3 rounded-md object-cover"
          >
          <p class="mk-eyebrow mb-2">Welcome to</p>
          <h1 class="text-3xl md:text-5xl font-bold mb-3">
            Mokokompendium
          </h1>
          <p class="mk-subtle max-w-2xl mx-auto">
            Lost Ark Guides
          </p>
        </div>

        <section class="mb-8">
          <h2 class="mk-eyebrow mb-3 text-left">Quick Tools</h2>
          <div class="grid md:grid-cols-2 gap-3">
            <NuxtLink to="/tools/ark-grid-solver" class="mk-link-card group flex items-start gap-4 p-5">
              <div class="size-11 rounded-xl border border-zinc-700/70 bg-zinc-900/70 flex items-center justify-center shrink-0">
                <UIcon name="i-lucide-hexagon" class="size-5 text-zinc-200" />
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-semibold text-zinc-100">Ark Grid Solver</h3>
                <p class="text-sm text-zinc-400 mt-1">Optimize astrogem assignments for your cores with breakpoint scoring.</p>
              </div>
              <UIcon name="i-lucide-chevron-right" class="size-4 text-zinc-600 mt-1" />
            </NuxtLink>

            <NuxtLink to="/tools/ssb-calc" class="mk-link-card group flex items-start gap-4 p-5">
              <div class="size-11 rounded-xl border border-zinc-700/70 bg-zinc-900/70 flex items-center justify-center shrink-0">
                <UIcon name="i-lucide-gauge" class="size-5 text-zinc-200" />
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-semibold text-zinc-100">SSB Calc</h3>
                <p class="text-sm text-zinc-400 mt-1">Supersonic Breakthrough calculator with overcap and swiftness breakpoint math.</p>
              </div>
              <UIcon name="i-lucide-chevron-right" class="size-4 text-zinc-600 mt-1" />
            </NuxtLink>
          </div>
        </section>

        <div v-if="hasGuides" class="space-y-8">
          <section v-if="classGuides?.length">
            <h2 class="mk-eyebrow mb-3 text-left">
              Class Guides
            </h2>

            <div class="grid gap-3 md:grid-cols-2">
              <NuxtLink
                v-for="guide in classGuides"
                :key="guide.path"
                :to="guide.path"
                class="mk-link-card group flex items-center gap-4 p-4"
              >
                <img
                  v-if="isSummonerGuide(guide)"
                  :src="summonerIconPath"
                  :alt="`${guide.subclass || guide.title} icon`"
                  class="size-11 rounded-xl border border-zinc-700/70 bg-zinc-900/70 object-cover shrink-0"
                >
                <div class="flex-1 min-w-0">
                  <h3 class="font-medium transition-colors truncate">
                    {{ guide.subclass || guide.title }}
                  </h3>
                  <p v-if="getUpdatedDate(guide)" class="text-xs mk-subtle truncate">
                    {{ guide.class }} &middot; Updated {{ getUpdatedDate(guide) }}
                  </p>
                  <p v-else class="text-xs mk-subtle truncate">
                    {{ guide.class }}
                  </p>
                </div>
                <UIcon name="i-lucide-chevron-right" class="size-4 text-zinc-600 transition-colors" />
              </NuxtLink>
            </div>
          </section>

          <section v-if="guides?.length">
            <h2 class="mk-eyebrow mb-3 text-left">
              Guides
            </h2>

            <div class="grid gap-3 md:grid-cols-2">
              <NuxtLink
                v-for="guide in guides"
                :key="guide.path"
                :to="guide.path"
                class="mk-link-card group flex items-center gap-4 p-4"
              >
                <div class="flex-1 min-w-0">
                  <h3 class="font-medium transition-colors truncate">
                    {{ guide.title }}
                  </h3>
                  <p v-if="guide.description" class="text-xs mk-subtle truncate">
                    {{ guide.description }}
                  </p>
                  <p v-else-if="getUpdatedDate(guide)" class="text-xs mk-subtle truncate">
                    Updated {{ getUpdatedDate(guide) }}
                  </p>
                </div>
                <UIcon name="i-lucide-chevron-right" class="size-4 text-zinc-600 transition-colors" />
              </NuxtLink>
            </div>
          </section>
        </div>

        <div v-else class="mk-card text-center py-12 px-6 text-zinc-600">
          <p>No guides yet.</p>
        </div>
      </UContainer>
    </section>
  </div>
</template>
