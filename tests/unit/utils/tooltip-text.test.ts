import { describe, expect, it } from 'vitest'

import { decodeTooltipEntities } from '../../../app/utils/tooltip-text'

describe('decodeTooltipEntities', () => {
  it('decodes common named entities used in tooltip text', () => {
    expect(decodeTooltipEntities('ATK&nbsp;+10 &amp; DEF&nbsp;+5')).toBe('ATK +10 & DEF +5')
    expect(decodeTooltipEntities('&lt;value&gt; &quot;quoted&quot; &#39;single&#39;')).toBe('<value> "quoted" \'single\'')
  })

  it('decodes numeric entities and normalizes non-breaking space codepoints', () => {
    expect(decodeTooltipEntities('A&#160;B C&#xA0;D')).toBe('A B C D')
    expect(decodeTooltipEntities('Heart: &#x2665;')).toBe('Heart: ♥')
  })

  it('keeps unknown or invalid entities unchanged', () => {
    expect(decodeTooltipEntities('&doesnotexist; test')).toBe('&doesnotexist; test')
    expect(decodeTooltipEntities('bad: &#xZZ;')).toBe('bad: &#xZZ;')
  })
})
