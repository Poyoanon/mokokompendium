import { describe, expect, it } from 'vitest'

import { DEFAULT_TOOLTIP_LOCALE, normalizeTooltipLocale } from '../../../app/utils/tooltip-locale'

describe('normalizeTooltipLocale', () => {
  it('keeps english and spanish locales', () => {
    expect(normalizeTooltipLocale('en')).toBe('en')
    expect(normalizeTooltipLocale('en-US')).toBe('en')
    expect(normalizeTooltipLocale('es')).toBe('es')
    expect(normalizeTooltipLocale('es-419')).toBe('es')
  })

  it('falls back unsupported locales to english', () => {
    expect(normalizeTooltipLocale('xx')).toBe('en')
    expect(normalizeTooltipLocale('x-test')).toBe('en')
    expect(normalizeTooltipLocale('unknown-locale')).toBe('en')
  })

  it('falls back invalid values to default locale', () => {
    expect(normalizeTooltipLocale(undefined)).toBe(DEFAULT_TOOLTIP_LOCALE)
    expect(normalizeTooltipLocale(null)).toBe(DEFAULT_TOOLTIP_LOCALE)
    expect(normalizeTooltipLocale('')).toBe(DEFAULT_TOOLTIP_LOCALE)
    expect(normalizeTooltipLocale([])).toBe(DEFAULT_TOOLTIP_LOCALE)
  })
})
