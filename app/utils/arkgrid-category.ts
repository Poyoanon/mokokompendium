type ArkGridCategoryTone = {
  icon: string
  color: string
}

type ArkGridCategoryInput = {
  category_name?: string | null
  category_key?: string | null
}

const SUN_TONE: ArkGridCategoryTone = {
  icon: 'i-lucide-sun',
  color: 'text-amber-300',
}

const MOON_TONE: ArkGridCategoryTone = {
  icon: 'i-lucide-moon-star',
  color: 'text-sky-300',
}

const STAR_TONE: ArkGridCategoryTone = {
  icon: 'i-lucide-star',
  color: 'text-emerald-300',
}

export const resolveArkGridCategoryTone = (
  input: ArkGridCategoryInput,
): ArkGridCategoryTone => {
  const normalized = `${input.category_key ?? ''} ${input.category_name ?? ''}`.toLowerCase()

  if (normalized.includes('moon') || normalized.includes('luna')) {
    return MOON_TONE
  }

  if (normalized.includes('star') || normalized.includes('estrella')) {
    return STAR_TONE
  }

  return SUN_TONE
}

