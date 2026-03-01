import type { ClassGuideDocument } from '~/types/guide'
import { withContentQueryRetry } from '~/utils/content-query-retry'
import { getGuideUpdatedDate } from '~/utils/guide-updated'

export async function useDocument() {
  const route = useRoute()

  const guideAsyncData = useAsyncData<ClassGuideDocument | null>(
    `class-guide-${route.path}`,
    async () => (await withContentQueryRetry(() => queryCollection('classGuides').path(route.path).first())) as ClassGuideDocument | null,
  )

  const guide = guideAsyncData.data

  const guideForComposables = computed<ClassGuideDocument | null>(() => guide.value ?? null)
  const guideUpdatedDate = computed(() => getGuideUpdatedDate(guide.value))

  useHead({
    title: () => guide.value?.title ? `${guide.value.title} - Mokokompendium` : 'Guide',
  })

  await guideAsyncData

  return {
    guide,
    guideForComposables,
    guideUpdatedDate,
  }
}
