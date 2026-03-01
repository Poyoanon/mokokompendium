<script setup lang="ts">
import { withContentQueryRetry } from '~/utils/content-query-retry'
import { getGuideUpdatedDate } from '~/utils/guide-updated'

const { data: guides } = await useAsyncData('guides', () =>
  withContentQueryRetry(() => queryCollection('guides').all())
)
const { data: classGuides } = await useAsyncData('class-guides', () =>
  withContentQueryRetry(() => queryCollection('classGuides').all())
)

// Group class guides by class
const groupedClassGuides = computed(() => {
  if (!classGuides.value) return {}
  return classGuides.value.reduce((acc, guide) => {
    const className = guide.class || 'Other'
    if (!acc[className]) acc[className] = []
    acc[className].push(guide)
    return acc
  }, {} as Record<string, typeof classGuides.value>)
})

const hasGuides = computed(() =>
  (guides.value?.length ?? 0) + (classGuides.value?.length ?? 0) > 0
)

const summonerIconPath = '/classicons/class_summoner.png'

const isSummonerGuide = (guide: { subclass?: string | null, path?: string }) => {
  const subclass = guide.subclass?.trim().toLowerCase()
  return subclass === 'summoner' || guide.path?.includes('/summoner')
}

const getUpdatedDate = (guide: { path?: string | null, lastUpdated?: string | null }) => getGuideUpdatedDate(guide)
</script>

<template>
  <div class="py-8 md:py-10">
    <UContainer class="max-w-4xl">
      <p class="mk-eyebrow mb-2">Index</p>
      <h1 class="text-3xl font-semibold tracking-tight mb-6">Guides</h1>

      <div v-if="hasGuides" class="space-y-10">
        <section v-if="guides?.length">
          <h2 class="text-lg font-semibold text-zinc-100 mb-3">
            Guides
          </h2>

          <div class="space-y-2">
            <NuxtLink
              v-for="guide in guides"
              :key="guide.path"
              :to="guide.path"
              class="mk-link-card group flex items-center gap-4 p-4"
            >
              <div class="flex-1 min-w-0">
                <h3 class="font-medium transition-colors">
                  {{ guide.title }}
                </h3>
                <p v-if="guide.description" class="text-xs mk-subtle mt-0.5 line-clamp-1">
                  {{ guide.description }}
                </p>
              </div>
              <UBadge v-if="guide.category" color="neutral" variant="subtle" size="xs">
                {{ guide.category }}
              </UBadge>
              <UBadge v-else-if="getUpdatedDate(guide)" color="neutral" variant="subtle" size="xs">
                Updated {{ getUpdatedDate(guide) }}
              </UBadge>
              <UIcon name="i-lucide-chevron-right" class="size-4 text-zinc-600 transition-colors" />
            </NuxtLink>
          </div>
        </section>

        <section v-if="Object.keys(groupedClassGuides).length">
          <h2 class="text-lg font-semibold text-zinc-100 mb-3">
            Class Guides
          </h2>

          <div class="space-y-8">
            <section v-for="(classGuidesList, className) in groupedClassGuides" :key="className">
              <h3 class="text-base font-semibold text-zinc-300 mb-3">
                {{ className }}
              </h3>

              <div class="space-y-2">
                <NuxtLink
                  v-for="guide in classGuidesList"
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
                    <h4 class="font-medium transition-colors">
                      {{ guide.subclass || guide.title }}
                    </h4>
                    <p class="text-xs mk-subtle mt-0.5 line-clamp-1">
                      {{ guide.description }}
                    </p>
                  </div>
                  <UBadge color="neutral" variant="subtle" size="xs">{{ guide.patch }}</UBadge>
                  <UIcon name="i-lucide-chevron-right" class="size-4 text-zinc-600 transition-colors" />
                </NuxtLink>
              </div>
            </section>
          </div>
        </section>
      </div>

      <div v-else class="mk-card text-center py-12 px-6 text-zinc-600">
        <p>No guides available.</p>
      </div>
    </UContainer>
  </div>
</template>
