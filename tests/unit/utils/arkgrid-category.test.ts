import { describe, expect, it } from 'vitest'

import { resolveArkGridCategoryTone } from '../../../app/utils/arkgrid-category'

describe('resolveArkGridCategoryTone', () => {
  it('maps english categories to the right icon tone', () => {
    expect(resolveArkGridCategoryTone({ category_name: 'Order Moon' })).toEqual({
      icon: 'i-lucide-moon-star',
      color: 'text-sky-300',
    })

    expect(resolveArkGridCategoryTone({ category_name: 'Chaos Star' })).toEqual({
      icon: 'i-lucide-star',
      color: 'text-emerald-300',
    })
  })

  it('maps spanish categories to the right icon tone', () => {
    expect(resolveArkGridCategoryTone({ category_name: 'Luna del orden' })).toEqual({
      icon: 'i-lucide-moon-star',
      color: 'text-sky-300',
    })

    expect(resolveArkGridCategoryTone({ category_name: 'Estrella del caos' })).toEqual({
      icon: 'i-lucide-star',
      color: 'text-emerald-300',
    })
  })

  it('uses category key for stable fallback detection', () => {
    expect(resolveArkGridCategoryTone({
      category_key: 'sys.arkgrid.core_order_moon',
      category_name: 'Categoria',
    })).toEqual({
      icon: 'i-lucide-moon-star',
      color: 'text-sky-300',
    })
  })

  it('falls back to sun when no moon or star markers exist', () => {
    expect(resolveArkGridCategoryTone({ category_name: 'Sol del orden' })).toEqual({
      icon: 'i-lucide-sun',
      color: 'text-amber-300',
    })

    expect(resolveArkGridCategoryTone({ category_name: 'unknown category' })).toEqual({
      icon: 'i-lucide-sun',
      color: 'text-amber-300',
    })
  })
})

