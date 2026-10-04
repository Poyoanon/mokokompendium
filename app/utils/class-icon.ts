const CLASS_ICON_SLUGS = [
  'aeromancer',
  'arcana',
  'artillerist',
  'artist',
  'bard',
  'berserker',
  'breaker',
  'deadeye',
  'deathblade',
  'destroyer',
  'glaivier',
  'guardianknight',
  'gunlancer',
  'gunslinger',
  'machinist',
  'paladin',
  'reaper',
  'scrapper',
  'shadowhunter',
  'sharpshooter',
  'slayer',
  'sorceress',
  'souleater',
  'soulfist',
  'striker',
  'summoner',
  'valkyrie',
  'wardancer',
  'wildsoul',
]

const CLASS_ICON_SLUG_SET = new Set<string>(CLASS_ICON_SLUGS)

type GuideWithClassMeta = {
  subclass?: string | null
  path?: string | null
}

const toIconSlug = (value?: string | null): string => {
  if (typeof value !== 'string') return ''
  return value.trim().toLowerCase().replace(/[^a-z0-9]/g, '')
}

export function getClassIconPath(guide?: GuideWithClassMeta | null): string | null {
  const pathSlug = typeof guide?.path === 'string'
    ? guide.path.split('/').filter(Boolean).pop()
    : ''

  const slug = [toIconSlug(guide?.subclass), toIconSlug(pathSlug)]
    .find(candidate => CLASS_ICON_SLUG_SET.has(candidate))

  return slug ? `/classicons/class_${slug}.png` : null
}
