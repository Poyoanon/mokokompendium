<script setup lang="ts">
const props = defineProps<{
  name: string
  size?: 'sm' | 'md' | 'lg'
}>()

const { getIconUrl } = useIconUrl()
const iconUrl = ref<string | null>(null)
const isLoading = ref(true)

// Fetch icon URL
onMounted(async () => {
  iconUrl.value = await getIconUrl(props.name)
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
  <span class="inline-flex items-center gap-1 not-prose">
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
    <span class="text-zinc-300">{{ name }}</span>
  </span>
</template>
