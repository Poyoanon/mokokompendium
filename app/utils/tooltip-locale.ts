export const SUPPORTED_TOOLTIP_LOCALES = ['en', 'es'] as const

export type SupportedTooltipLocale = typeof SUPPORTED_TOOLTIP_LOCALES[number]

export const DEFAULT_TOOLTIP_LOCALE: SupportedTooltipLocale = 'en'

const TOOLTIP_LOCALE_ALIAS: Record<string, SupportedTooltipLocale> = {
  en: 'en',
  'en-us': 'en',
  'en-gb': 'en',
  es: 'es',
  'es-es': 'es',
  'es-419': 'es',
}

const normalizeLocaleToken = (value: string) => {
  return value
    .trim()
    .toLowerCase()
    .replace(/_/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

export const normalizeTooltipLocale = (value: unknown): SupportedTooltipLocale => {
  const rawValue = Array.isArray(value) ? value[0] : value
  if (typeof rawValue !== 'string') {
    return DEFAULT_TOOLTIP_LOCALE
  }

  const normalized = normalizeLocaleToken(rawValue)
  if (!normalized) {
    return DEFAULT_TOOLTIP_LOCALE
  }

  return TOOLTIP_LOCALE_ALIAS[normalized] ?? DEFAULT_TOOLTIP_LOCALE
}
