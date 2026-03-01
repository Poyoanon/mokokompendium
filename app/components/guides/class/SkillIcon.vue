<script setup lang="ts">
const props = defineProps<{
  name: string
  classId?: number
  size?: 'sm' | 'md' | 'lg'
}>()

const iconUrl = ref<string | null>(null)
const isLoading = ref(true)

// Fetch icon URL using skills_compendium.db
onMounted(async () => {
  if (props.classId) {
    try {
      const data = await $fetch<{ url: string }>('/api/skills', {
        query: {
          class_id: props.classId,
          skill_name: props.name
        }
      })
      iconUrl.value = data.url
    } catch (error) {
      console.error(`Failed to fetch skill icon for ${props.name}:`, error)
      iconUrl.value = null
    }
  }
  isLoading.value = false
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'size-5'
    case 'lg':
      return 'size-8'
    case 'md':
    default:
      return 'size-6'
  }
})
</script>

<template>
  <span class="inline-flex items-center gap-1">
    <img
      v-if="iconUrl && !isLoading"
      :src="iconUrl"
      :alt="name"
      :title="name"
      loading="lazy"
      decoding="async"
      class="inline-block rounded border border-zinc-700"
      :class="sizeClasses"
    >
    <div
      v-else-if="isLoading"
      class="inline-block rounded border border-zinc-700 bg-zinc-900 animate-pulse"
      :class="sizeClasses"
    />
    <span>{{ name }}</span>
  </span>
</template>
