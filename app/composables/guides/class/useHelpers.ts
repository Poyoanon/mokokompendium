import type { Gem } from '~/types/guide'

export const RUNE_RARITY_VALUES = ['uncommon', 'rare', 'epic', 'legendary'] as const

export type RuneRarity = typeof RUNE_RARITY_VALUES[number]

export type RuneDetails = {
  name: string
  rarity: RuneRarity | null
  description: string | null
  url: string | null
}

export const getInlineTripodKey = (skillName: string, tripodName: string) => `${skillName}:${tripodName}`

export const getGuideTripodKey = (tripodName: string) => `guide:${tripodName}`

export const tripodnumber = (slotNumber?: number | null): number | null => {
  if (!slotNumber || slotNumber < 1) return null
  if (slotNumber <= 3) return slotNumber
  if (slotNumber <= 6) return slotNumber - 3
  if (slotNumber <= 8) return slotNumber - 6
  return null
}

export const getArkPassiveKey = (passive: { name: string; tier?: number; points?: number }) =>
  `${passive.name}:${passive.tier ?? 'base'}:${passive.points ?? 'base'}`

export const getGemIconKey = (gem: Gem) =>
  gem.icon ?? gem['alt-icon'] ?? gem.skill

export const normalizeRuneRarity = (rarity?: string | null): RuneRarity | null => {
  const normalized = rarity?.trim().toLowerCase()
  if (!normalized) return null
  return (RUNE_RARITY_VALUES as readonly string[]).includes(normalized)
    ? normalized as RuneRarity
    : null
}

export const getRuneLookupKey = (name?: string | null, rarity?: string | null) => {
  const normalizedName = name?.trim().toLowerCase()
  if (!normalizedName) return ''
  const normalizedRarity = normalizeRuneRarity(rarity)
  return `${normalizedName}:${normalizedRarity ?? 'any'}`
}
