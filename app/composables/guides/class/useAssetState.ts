import type { ArkPassiveCategory } from '~/types/guide'
import type { SkillTooltipMeta } from './useParsing'
import type { RuneDetails } from './useHelpers'
import { useSkillDisplayNames } from './useTooltipNameMaps'

export function useAssetState() {
  const skillDisplayNames = useSkillDisplayNames()
  const skillIcons = ref<Record<string, string | null>>({})
  const skillDescriptions = ref<Record<string, string | null>>({})
  const skillTooltipMeta = ref<Record<string, SkillTooltipMeta>>({})
  const dbSkillNames = ref<string[]>([])
  const tripodIcons = ref<Record<string, { name?: string; url: string | null; tier?: number; slotNumber?: number; description?: string | null }>>({})
  const inlineTripods = ref<Record<string, { name: string; url: string | null; tier?: number; description?: string | null }>>({})
  const arkPassiveIcons = ref<Record<string, { name?: string; url: string | null; description?: string | null }>>({})
  const dbArkPassiveCategoryByName = ref<Record<string, ArkPassiveCategory>>({})
  const arkGridCoreDetails = ref<Record<string, { core_name: string; category_key?: string | null; category_name: string | null; options: Array<{ points: number; description: string }> }>>({})
  const engravingDetails = ref<Record<string, { name: string; level: number; url: string | null; description: string | null }>>({})
  const runeDetails = ref<Record<string, RuneDetails>>({})

  return {
    skillIcons,
    skillDisplayNames,
    skillDescriptions,
    skillTooltipMeta,
    dbSkillNames,
    tripodIcons,
    inlineTripods,
    arkPassiveIcons,
    dbArkPassiveCategoryByName,
    arkGridCoreDetails,
    engravingDetails,
    runeDetails,
  }
}
