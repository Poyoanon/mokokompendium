<script setup lang="ts">
import { decodeTooltipEntities } from '~/utils/tooltip-text'
import { DEFAULT_TOOLTIP_LOCALE, type SupportedTooltipLocale } from '~/utils/tooltip-locale'

type RuneRarity = 'uncommon' | 'rare' | 'epic' | 'legendary'

const props = defineProps<{
  name: string
  rarity?: RuneRarity | null
  description?: string | null
}>()

const tooltipLocale = useState<SupportedTooltipLocale>('mk-site-locale', () => DEFAULT_TOOLTIP_LOCALE)

const rarityLabelMap: Record<SupportedTooltipLocale, Record<RuneRarity, string>> = {
  en: {
    uncommon: 'Uncommon',
    rare: 'Rare',
    epic: 'Epic',
    legendary: 'Legendary',
  },
  es: {
    uncommon: 'Poco comun',
    rare: 'Raro',
    epic: 'Epico',
    legendary: 'Legendario',
  },
}

const rarityBadgeClassMap: Record<RuneRarity, string> = {
  uncommon: 'border-green-500/60 bg-green-500/20 text-green-200',
  rare: 'border-blue-500/60 bg-blue-500/20 text-blue-200',
  epic: 'border-purple-500/60 bg-purple-500/20 text-purple-200',
  legendary: 'border-yellow-500/60 bg-yellow-500/20 text-yellow-200'
}

const normalizedDescription = computed(() => {
  const value = props.description ? decodeTooltipEntities(props.description).trim() : null
  return value ? value : null
})

const rarityLabel = computed(() => {
  if (!props.rarity) return null
  return rarityLabelMap[tooltipLocale.value][props.rarity]
})

const rarityBadgeClass = computed(() => {
  if (!props.rarity) return 'border-zinc-600 bg-zinc-800/80 text-zinc-300'
  return rarityBadgeClassMap[props.rarity]
})

const emptyDescriptionLabel = computed(() => (
  tooltipLocale.value === 'es'
    ? 'No hay descripcion disponible'
    : 'No description available'
))
</script>

<template>
  <div class="mk-inline-tooltip-card relative bg-[#1a1d24] border border-zinc-700/60 rounded min-w-62.5 max-w-80 shadow-xl font-normal">
    <div class="flex items-center justify-between gap-2 px-3 py-2.5 border-b border-zinc-700/30">
      <div class="text-sm font-medium text-white leading-tight">{{ name }}</div>
      <span
        v-if="rarityLabel"
        class="inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] uppercase tracking-wide"
        :class="rarityBadgeClass"
      >
        {{ rarityLabel }}
      </span>
    </div>

    <div class="px-3 py-2.5">
      <p v-if="normalizedDescription" class="text-xs text-zinc-300 leading-relaxed">{{ normalizedDescription }}</p>
      <p v-else class="text-xs text-zinc-500 italic">{{ emptyDescriptionLabel }}</p>
    </div>
  </div>
</template>
