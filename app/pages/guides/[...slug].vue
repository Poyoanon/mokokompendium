<script setup lang="ts">
import { withContentQueryRetry } from '~/utils/content-query-retry'
import { getGuideUpdatedDate } from '~/utils/guide-updated'

const route = useRoute()

const { data: guide } = await useAsyncData(`guide-${route.path}`, () =>
  withContentQueryRetry(() => queryCollection('guides').path(route.path).first())
)

const guideUpdatedDate = computed(() => getGuideUpdatedDate(guide.value))

useHead({
  title: () => guide.value?.title ? `${guide.value.title} - Mokokompendium` : 'Guide',
})
</script>

<template>
  <div class="py-8 md:py-10">
    <UContainer class="max-w-4xl mx-auto">
      <template v-if="guide">
        <div class="flex items-center gap-2 text-sm text-zinc-500 mb-4">
          <NuxtLink to="/guides" class="hover:text-zinc-300 transition-colors">Guides</NuxtLink>
          <UIcon name="i-lucide-chevron-right" class="size-3" />
          <span class="text-zinc-400">{{ guide.title }}</span>
        </div>

        <header class="mk-card p-6 mb-6">
          <p class="mk-eyebrow mb-2">Guide</p>
          <h1 class="text-3xl font-bold mb-2">{{ guide.title }}</h1>
          <p v-if="guide.description" class="mk-subtle text-sm">{{ guide.description }}</p>
          <div v-if="guideUpdatedDate" class="flex items-center gap-3 mt-3 text-xs text-zinc-500">
            <span>Updated {{ guideUpdatedDate }}</span>
          </div>
        </header>

        <div
          v-if="guide.body"
          class="mk-card p-6 prose prose-sm prose-invert max-w-none mk-rich"
        >
          <ContentRenderer :value="guide" />
        </div>
        <p v-else class="mk-card p-6 text-sm text-zinc-500">Guide content coming soon.</p>
      </template>

      <div v-else class="text-center py-20">
        <h1 class="text-2xl font-bold mb-4">Guide not found</h1>
        <UButton to="/guides" variant="outline">Back to Guides</UButton>
      </div>
    </UContainer>
  </div>
</template>
