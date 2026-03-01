import { computed } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type {
  ArkPassive,
  ArkPassiveCategory,
  ArkGridVariant,
  Build,
  ClassGuideDocument,
  DpsDistribution,
  PreArkGrid,
  Skill,
} from '~/types/guide'
import { normalizeTooltipLocale, type SupportedTooltipLocale } from '~/utils/tooltip-locale'
import { resolveArkGridCategoryTone } from '~/utils/arkgrid-category'
import { decodeTooltipEntities } from '~/utils/tooltip-text'

export type SkillTooltipMeta = {
  castTag: string | null
  elementTag: string | null
  castTagColor: string | null
  elementTagColor: string | null
  cooldownSeconds: number | null
  partsAttackLevel: number | null
  stiffnessType: number | null
  directionalAttackType: number | null
  counterAttackType: number | null
  superArmorType: number | null
}

type SkillNoteToken =
  | { type: 'text'; value: string }
  | { type: 'tripod'; key: string; name: string }

type GuideTripodToken =
  | { type: 'text'; value: string }
  | { type: 'tripod'; key: string; name: string }

export type SkillNoteInlinePart =
  | { type: 'text'; value: string }
  | { type: 'bold'; value: string }
  | { type: 'skill'; value: string }
  | { type: 'passive'; value: string }
  | { type: 'tripod'; key: string; name: string }

export type SkillNoteLine = {
  isBullet: boolean
  parts: SkillNoteInlinePart[]
}

export type InlineSkillPart =
  | { type: 'text'; value: string }
  | { type: 'skill'; value: string }

export type InlineGuidePart =
  | { type: 'text'; value: string }
  | { type: 'skill'; value: string }
  | { type: 'passive'; value: string }
  | { type: 'tripod'; key: string; name: string }

export type InlineArkPassivePart =
  | { type: 'text'; value: string }
  | { type: 'passive'; value: string }

export type InlineArkGridCorePart =
  | { type: 'text'; value: string }
  | { type: 'core'; value: string }

export type SkillDescriptionPart = {
  text: string
  color: string | null
}

export type SkillHeaderLine = {
  text: string
  color: string
}

type RotationSection = {
  title: string
  steps: string[]
}

type RotationSource = {
  rotation?: string[] | null
  rotation_sections?: Array<{ title?: string; steps?: string[] }> | null
  rotationSections?: Array<{ title?: string; steps?: string[] }> | null
}

type ArkGridRow = {
  label: string
  cores: string[]
}

type ParsingOptions = {
  tooltipLocale?: Ref<string> | ComputedRef<string>
  guide: Ref<ClassGuideDocument | null>
  currentBuild: ComputedRef<Build | undefined>
  currentVariant: ComputedRef<ArkGridVariant | undefined>
  preArkGrid: ComputedRef<PreArkGrid | undefined>
  preArkPassives: ComputedRef<ArkPassive[]>
  dbSkillNames: Ref<string[]>
  dbArkPassiveCategoryByName: Ref<Record<string, ArkPassiveCategory>>
  arkPassiveIcons: Ref<Record<string, { name?: string; url: string | null; description?: string | null }>>
  arkGridCoreDetails: Ref<Record<string, { core_name: string; category_key?: string | null; category_name: string | null; options: Array<{ points: number; description: string }> }>>
  skillTooltipMeta: Ref<Record<string, SkillTooltipMeta>>
  getInlineTripodKey: (skillName: string, tripodName: string) => string
  getGuideTripodKey: (tripodName: string) => string
  getArkPassiveKey: (passive: { name: string; tier?: number; points?: number }) => string
}

const ARK_PASSIVE_TIP_FALLBACK_CATEGORIES: Record<string, ArkPassiveCategory> = {
  'Release Potential': 'leap',
}

const SKILL_TOOLTIP_META_LINE_PATTERNS = [
  /^pve$/i,
  /^pvp$/i,
  /^skill\s*lv\./i,
]

const CAST_TAG_COLORS: Record<string, string> = {
  normal: '#FFFFAC',
  point: '#FFFFAC',
  casting: '#FEA3F2',
  charge: '#56FFD6',
  holding: '#40E15F',
  combo: '#20EDFE',
  toggle: '#F80EC6',
  chain: '#00ADEC',
  'perfect combo': '#4E99FF',
}

const CAST_TAG_TRANSLATIONS: Partial<Record<SupportedTooltipLocale, Record<string, string>>> = {
  es: {
    normal: 'Normal',
    point: 'Punto',
    casting: 'Lanzamiento',
    charge: 'Carga',
    holding: 'Canalizacion',
    combo: 'Combo',
    toggle: 'Alternable',
    chain: 'Cadena',
    'perfect combo': 'Combo perfecto',
    move: 'Movimiento',
    special: 'Especial',
  },
}

const ELEMENT_TAG_COLORS: Record<string, string> = {
  'flame skill': '#FF0000',
  'lightning skill': '#A566FF',
  'frost skill': '#489CFF',
  '[ancient elemental]': '#FEA3F2',
  'ancient elemental': '#FEA3F2',
  'ancient elemental skill': '#FEA3F2',
  '[elemental ancestral]': '#FEA3F2',
  'elemental ancestral': '#FEA3F2',
  '[habilidad de elemental ancestral]': '#FEA3F2',
  'habilidad de elemental ancestral': '#FEA3F2',
}

const ELEMENT_TAG_TRANSLATIONS: Partial<Record<SupportedTooltipLocale, Record<string, string>>> = {
  es: {
    'flame skill': 'Habilidad de Fuego',
    'lightning skill': 'Habilidad de Rayo',
    'frost skill': 'Habilidad de Escarcha',
    '[normal skill]': '[Habilidad normal]',
    '[summon skill]': '[Habilidad de invocacion]',
    '[ancient elemental]': '[Elemental ancestral]',
    '[ancient elemental skill]': '[Elemental ancestral]',
    'ancient elemental skill': '[Elemental ancestral]',
  },
}

const SKILL_DESCRIPTION_NAMED_COLORS: Record<string, string> = {
  green: 'green',
  yellow: 'yellow',
  red: 'red',
  purple: 'purple',
  blue: 'blue',
  orange: 'orange',
}

const SKILL_DESCRIPTION_COLOR_TAG_PATTERN = /\[(GREEN|YELLOW|RED|PURPLE|BLUE|ORANGE|#[0-9A-Fa-f]{3,8})\]([\s\S]*?)\[\/\1\]/i
const SKILL_DESCRIPTION_COLOR_EQUALS_TAG_PATTERN = /\[COLOR=['"]?(#[0-9A-Fa-f]{3,8})['"]?\]([\s\S]*?)\[\/COLOR\]/i
const SKILL_DESCRIPTION_FONT_COLOR_TAG_PATTERN = /<font\b[^>]*color\s*=\s*['"]?(#[0-9A-Fa-f]{3,8})['"]?[^>]*>([\s\S]*?)<\/font>/i
const SKILL_DESCRIPTION_FONT_TAG_PATTERN = /<\/?font\b[^>]*>/gi
const SKILL_DESCRIPTION_BR_TAG_PATTERN = /<br\s*\/?\s*>/gi

const DEFAULT_SKILL_META_COLOR = '#F6F6F6'

type SkillMetaLabelSet = {
  weakPoint: (level: number) => string
  stagger: Record<number, string>
  attackType: Record<number, string>
  counter: Record<number, string>
  superArmor: Record<number, string>
}

const SKILL_META_LABELS: Record<SupportedTooltipLocale, SkillMetaLabelSet> = {
  en: {
    weakPoint: (level) => `Weak Point: Lv. ${level}`,
    stagger: {
      1: 'Stagger: Low',
      2: 'Stagger: Mid',
      3: 'Stagger: Mid-high',
      4: 'Stagger: High',
      5: 'Stagger: Max',
    },
    attackType: {
      1: 'Attack type: Back Attack',
      2: 'Attack type: Frontal Attack',
      3: 'Attack type: Frontal Attack, Back Attack',
    },
    counter: {
      1: 'Counter: Yes',
    },
    superArmor: {
      1: 'Super Armor: Paralysis Immunity',
      2: 'Super Armor: Push Immunity',
      3: 'Super Armor: Push Immunity, Status Ailment Immunity',
    },
  },
  es: {
    weakPoint: (level) => `Punto debil: Nv. ${level}`,
    stagger: {
      1: 'Aturdimiento: Bajo',
      2: 'Aturdimiento: Medio',
      3: 'Aturdimiento: Medio-alto',
      4: 'Aturdimiento: Alto',
      5: 'Aturdimiento: Maximo',
    },
    attackType: {
      1: 'Tipo de ataque: Ataque por la espalda',
      2: 'Tipo de ataque: Ataque frontal',
      3: 'Tipo de ataque: Ataque frontal, Ataque por la espalda',
    },
    counter: {
      1: 'Contraataque: Si',
    },
    superArmor: {
      1: 'Superarmadura: Inmunidad a paralisis',
      2: 'Superarmadura: Inmunidad al empuje',
      3: 'Superarmadura: Inmunidad al empuje y a estados alterados',
    },
  },
}

const dpsBarColors = [
  'bg-amber-500/80',
  'bg-sky-500/80',
  'bg-orange-500/80',
  'bg-yellow-600/80',
  'bg-emerald-500/80',
  'bg-purple-500/80',
  'bg-red-500/80',
  'bg-cyan-500/80',
  'bg-lime-500/80',
  'bg-rose-500/80',
  'bg-indigo-500/80',
  'bg-teal-500/80',
]

const isWordChar = (char?: string) => !!char && /[A-Za-z0-9]/.test(char)
const INLINE_UNTAG_PATTERN = /<(?:untag|no-tag)>([\s\S]*?)<\/(?:untag|no-tag)>/gi

const isAsciiDigit = (char?: string) => !!char && char >= '0' && char <= '9'
const isAsciiDigits = (value: string) => value.length > 0 && [...value].every((char) => isAsciiDigit(char))
const isRegexWordChar = (char?: string) => !!char && /[A-Za-z0-9_]/.test(char)

const isDecimalNumberToken = (value: string) => {
  if (!value) return false

  const decimalIndex = value.indexOf('.')
  if (decimalIndex < 0) {
    return isAsciiDigits(value)
  }

  if (value.indexOf('.', decimalIndex + 1) >= 0) {
    return false
  }

  const integerPart = value.slice(0, decimalIndex)
  const fractionalPart = value.slice(decimalIndex + 1)
  return isAsciiDigits(integerPart) && isAsciiDigits(fractionalPart)
}

const isConsumeElementalOrbsMetaLine = (line: string) => {
  const normalized = line.trim().toLowerCase()
  if (!normalized.startsWith('consume ')) return false

  let suffix = ''
  if (normalized.endsWith(' elemental orb')) {
    suffix = ' elemental orb'
  } else if (normalized.endsWith(' elemental orbs')) {
    suffix = ' elemental orbs'
  } else {
    return false
  }

  const amount = normalized.slice('consume '.length, normalized.length - suffix.length).trim()
  return isDecimalNumberToken(amount)
}

const isSkillTooltipMetaLine = (line: string) => {
  if (SKILL_TOOLTIP_META_LINE_PATTERNS.some((pattern) => pattern.test(line))) {
    return true
  }

  return isConsumeElementalOrbsMetaLine(line)
}

const isLargeNumberToken = (token: string) => {
  if (!token) return false

  const decimalIndex = token.indexOf('.')
  const hasDecimal = decimalIndex >= 0
  if (hasDecimal && token.indexOf('.', decimalIndex + 1) >= 0) {
    return false
  }

  const integerPart = hasDecimal ? token.slice(0, decimalIndex) : token
  const fractionalPart = hasDecimal ? token.slice(decimalIndex + 1) : ''
  if (!integerPart) return false
  if (hasDecimal && !isAsciiDigits(fractionalPart)) return false

  if (integerPart.includes(',')) {
    const groups = integerPart.split(',')
    if (groups.length < 2) return false

    const leadingGroup = groups[0] ?? ''
    if (leadingGroup.length < 1 || leadingGroup.length > 3 || !isAsciiDigits(leadingGroup)) {
      return false
    }

    for (const group of groups.slice(1)) {
      if (group.length !== 3 || !isAsciiDigits(group)) {
        return false
      }
    }

    return true
  }

  return integerPart.length >= 4 && isAsciiDigits(integerPart)
}

type InlineUntagSegment = {
  value: string
  isUntagged: boolean
}

const getInlineUntagSegments = (text: string): InlineUntagSegment[] => {
  INLINE_UNTAG_PATTERN.lastIndex = 0
  const segments: InlineUntagSegment[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while (true) {
    match = INLINE_UNTAG_PATTERN.exec(text)
    if (!match) break

    const matchIndex = match.index ?? 0
    if (matchIndex > lastIndex) {
      segments.push({ value: text.slice(lastIndex, matchIndex), isUntagged: false })
    }

    const untaggedValue = match[1] ?? ''
    if (untaggedValue.length > 0) {
      segments.push({ value: untaggedValue, isUntagged: true })
    }

    lastIndex = matchIndex + match[0].length
  }

  if (lastIndex < text.length) {
    segments.push({ value: text.slice(lastIndex), isUntagged: false })
  }

  return segments.length ? segments : [{ value: text, isUntagged: false }]
}

const isSkillBoundary = (text: string, startIndex: number, name: string) => {
  const before = startIndex > 0 ? text[startIndex - 1] : undefined
  const after = text[startIndex + name.length]
  return !isWordChar(before) && !isWordChar(after)
}

const isArkPassiveBoundary = (text: string, startIndex: number, name: string) => {
  const before = startIndex > 0 ? text[startIndex - 1] : undefined
  const after = text[startIndex + name.length]
  return !isWordChar(before) && !isWordChar(after)
}

const isArkPassiveExcludedMatch = (text: string, startIndex: number, name: string) => {
  if (name.toLowerCase() === 'crit') {
    const afterText = text.slice(startIndex + name.length)
    if (/^\s+rate\b/i.test(afterText)) {
      return true
    }
  }
  return false
}

const formatCooldown = (seconds: number | null | undefined, locale: SupportedTooltipLocale) => {
  if (seconds === null || seconds === undefined || Number.isNaN(seconds) || seconds <= 0) return null
  const rounded = Math.round(seconds * 10) / 10
  const value = Number.isInteger(rounded) ? String(Math.trunc(rounded)) : rounded.toFixed(1)
  return locale === 'es' ? `Enfriamiento ${value}s` : `Cooldown ${value}s`
}

const HEX_COLOR_PATTERN = /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i

const getExplicitTagColor = (rawColor?: string | null) => {
  const normalized = rawColor?.trim()
  if (!normalized) return null
  return HEX_COLOR_PATTERN.test(normalized) ? normalized : null
}

const stripSkillDescriptionFormattingTags = (value: string) =>
  decodeTooltipEntities(value.replace(SKILL_DESCRIPTION_FONT_TAG_PATTERN, ''))

const getSkillDescriptionTagColor = (rawTag?: string | null) => {
  const normalized = rawTag?.trim().toLowerCase()
  if (!normalized) return null
  return getExplicitTagColor(normalized) ?? SKILL_DESCRIPTION_NAMED_COLORS[normalized] ?? null
}

const getCastTagColor = (tag: string, explicitColor?: string | null) =>
  getExplicitTagColor(explicitColor)
  ?? CAST_TAG_COLORS[tag.toLowerCase()]
  ?? DEFAULT_SKILL_META_COLOR

const getElementTagColor = (tag: string, explicitColor?: string | null) =>
  getExplicitTagColor(explicitColor)
  ?? ELEMENT_TAG_COLORS[tag.toLowerCase()]
  ?? DEFAULT_SKILL_META_COLOR

const localizeTagLabel = (
  label: string,
  locale: SupportedTooltipLocale,
  dictionary: Partial<Record<SupportedTooltipLocale, Record<string, string>>>,
) => {
  const translations = dictionary[locale]
  if (!translations) return label
  return translations[label.toLowerCase()] ?? label
}
const hasDamageKeyword = (value: string) => /\bDamage\b/i.test(value)

const normalizeDpsValue = (value: number) => {
  if (Number.isNaN(value)) return 0
  const floored = Math.floor(value * 10) / 10
  return Math.min(100, Math.max(0, floored))
}

export function useParsing(options: ParsingOptions) {
  const {
    tooltipLocale,
    guide,
    currentBuild,
    currentVariant,
    preArkGrid,
    preArkPassives,
    dbSkillNames,
    dbArkPassiveCategoryByName,
    arkPassiveIcons,
    arkGridCoreDetails,
    skillTooltipMeta,
    getInlineTripodKey,
    getGuideTripodKey,
    getArkPassiveKey,
  } = options
  const currentTooltipLocale = computed<SupportedTooltipLocale>(() =>
    normalizeTooltipLocale(tooltipLocale?.value),
  )

  const normalizeRotationSteps = (steps: unknown): string[] => {
    if (!Array.isArray(steps)) return []
    return steps
      .map((step) => typeof step === 'string' ? step.trim() : '')
      .filter((step) => step.length > 0)
  }

  const getRotationSections = (source?: RotationSource | null): RotationSection[] => {
    if (!source) return []

    const rawSections = source.rotation_sections ?? source.rotationSections
    if (Array.isArray(rawSections)) {
      const sections: RotationSection[] = []
      rawSections.forEach((section, index) => {
        if (!section || typeof section !== 'object') return
        const rawTitle = typeof section.title === 'string' ? section.title.trim() : ''
        const steps = normalizeRotationSteps(section.steps)
        if (!steps.length) return
        sections.push({ title: rawTitle || `Section ${index + 1}`, steps })
      })
      if (sections.length) return sections
    }

    const fallbackSteps = normalizeRotationSteps(source.rotation)
    if (!fallbackSteps.length) return []
    return [{ title: 'Rotation', steps: fallbackSteps }]
  }

  const getRotationSteps = (source?: RotationSource | null) =>
    getRotationSections(source).flatMap((section) => section.steps)

  const preArkRotationSections = computed(() => getRotationSections(preArkGrid.value))
  const variantRotationSections = computed(() => getRotationSections(currentVariant.value))

  const variantDifficulty = computed(() => {
    if (currentVariant.value?.difficulty) return currentVariant.value.difficulty
    if (currentBuild.value?.difficulty === 'easy') return 1
    if (currentBuild.value?.difficulty === 'medium') return 2
    if (currentBuild.value?.difficulty === 'hard') return 3
    return 0
  })

  const getSkillLookupName = (skill: { name: string; icon?: string }) => {
    const iconName = typeof skill.icon === 'string' ? skill.icon.trim() : ''
    return iconName || skill.name
  }

  const getTripodNamesFromNotes = (notes?: string) => {
    if (!notes) return []
    const pattern = /<tripod>(.*?)<\/tripod>/g
    const matches = [...notes.matchAll(pattern)]
    return matches.map((match) => (match[1] ?? '').trim()).filter((tripodName) => tripodName.length > 0)
  }

  const getSkillNoteTokens = (skillName: string, notes?: string): SkillNoteToken[] => {
    if (!notes) return []
    const pattern = /<tripod>(.*?)<\/tripod>/g
    const matches = [...notes.matchAll(pattern)]
    if (!matches.length) return [{ type: 'text', value: notes }]

    const tokens: SkillNoteToken[] = []
    let lastIndex = 0
    for (const match of matches) {
      const matchIndex = match.index ?? 0
      if (matchIndex > lastIndex) {
        tokens.push({ type: 'text', value: notes.slice(lastIndex, matchIndex) })
      }
      const name = (match[1] ?? '').trim()
      tokens.push({ type: 'tripod', key: getInlineTripodKey(skillName, name), name })
      lastIndex = matchIndex + match[0].length
    }
    if (lastIndex < notes.length) {
      tokens.push({ type: 'text', value: notes.slice(lastIndex) })
    }
    return tokens
  }

  const getGuideTripodTokens = (text?: string): GuideTripodToken[] => {
    if (!text) return []
    const pattern = /<tripod>(.*?)<\/tripod>/g
    const matches = [...text.matchAll(pattern)]
    if (!matches.length) return [{ type: 'text', value: text }]

    const tokens: GuideTripodToken[] = []
    let lastIndex = 0
    for (const match of matches) {
      const matchIndex = match.index ?? 0
      if (matchIndex > lastIndex) {
        tokens.push({ type: 'text', value: text.slice(lastIndex, matchIndex) })
      }
      const name = (match[1] ?? '').trim()
      if (name.length > 0) {
        tokens.push({ type: 'tripod', key: getGuideTripodKey(name), name })
      }
      lastIndex = matchIndex + match[0].length
    }
    if (lastIndex < text.length) {
      tokens.push({ type: 'text', value: text.slice(lastIndex) })
    }
    return tokens
  }

  const getBoldParts = (text: string): Array<{ type: 'text' | 'bold'; value: string }> => {
    if (!text) return []
    const parts: Array<{ type: 'text' | 'bold'; value: string }> = []
    const pattern = /\*\*(.+?)\*\*/g
    let lastIndex = 0
    let match: RegExpExecArray | null

    while (true) {
      match = pattern.exec(text)
      if (!match) break
      if (match.index > lastIndex) {
        parts.push({ type: 'text', value: text.slice(lastIndex, match.index) })
      }
      parts.push({ type: 'bold', value: match[1] ?? '' })
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < text.length) {
      parts.push({ type: 'text', value: text.slice(lastIndex) })
    }
    return parts.length ? parts : [{ type: 'text', value: text }]
  }

  const hasSkillMention = (text: string, name: string) => {
    let searchIndex = text.indexOf(name)
    while (searchIndex !== -1) {
      if (isSkillBoundary(text, searchIndex, name)) {
        return true
      }
      searchIndex = text.indexOf(name, searchIndex + name.length)
    }
    return false
  }

  const addInlineSkillNameVariants = (target: Set<string>, rawName?: string | null) => {
    const normalizedName = rawName?.trim()
    if (!normalizedName) return
    target.add(normalizedName)
    if (!normalizedName.includes('/')) return
    for (const segment of normalizedName.split('/').map((value) => value.trim())) {
      if (segment.length >= 4) target.add(segment)
    }
  }

  const guideInlineSkillNames = computed(() => {
    const names = new Set<string>()
    for (const skill of currentVariant.value?.skills ?? []) {
      addInlineSkillNameVariants(names, skill.name)
      addInlineSkillNameVariants(names, skill.icon)
    }
    for (const skill of preArkGrid.value?.skills ?? []) {
      addInlineSkillNameVariants(names, skill.name)
      addInlineSkillNameVariants(names, skill.icon)
    }
    for (const entry of currentVariant.value?.dps_distribution ?? currentVariant.value?.dpsDistribution ?? []) {
      addInlineSkillNameVariants(names, entry.name)
    }
    for (const gem of currentVariant.value?.gems ?? []) {
      addInlineSkillNameVariants(names, gem.skill)
    }
    for (const gem of preArkGrid.value?.gems ?? []) {
      addInlineSkillNameVariants(names, gem.skill)
    }
    for (const step of getRotationSteps(currentVariant.value)) {
      addInlineSkillNameVariants(names, step)
    }
    for (const step of getRotationSteps(preArkGrid.value)) {
      addInlineSkillNameVariants(names, step)
    }
    for (const skill of guide.value?.synergy?.skills ?? []) {
      addInlineSkillNameVariants(names, skill)
    }
    return Array.from(names).sort((a, b) => b.length - a.length)
  })

  const inlineSkillNames = computed(() => {
    const names = new Set<string>()
    for (const name of dbSkillNames.value) addInlineSkillNameVariants(names, name)
    for (const name of guideInlineSkillNames.value) addInlineSkillNameVariants(names, name)
    return Array.from(names).sort((a, b) => b.length - a.length)
  })

  const inlineSkillMentionSources = computed(() => [
    currentVariant.value?.description ?? '',
    preArkGrid.value?.description ?? '',
    ...(currentVariant.value?.priorities ?? []),
    ...(currentVariant.value?.tips ?? []),
    ...(preArkGrid.value?.tips ?? []),
    ...(currentVariant.value?.arkPassiveTips ?? []),
    ...(preArkGrid.value?.arkPassiveTips ?? []),
    ...(preArkGrid.value?.priorities ?? []),
    ...(currentVariant.value?.skills ?? []).map((skill: Skill) => skill.notes ?? ''),
    ...(preArkGrid.value?.skills ?? []).map((skill: Skill) => skill.notes ?? ''),
  ])

  const inlineSkillMentionNames = computed(() => {
    const mentions = new Set<string>()
    for (const name of inlineSkillNames.value) {
      if (inlineSkillMentionSources.value.some((source: string) => hasSkillMention(source, name))) {
        mentions.add(name)
      }
    }
    return Array.from(mentions)
  })

  const getInlineSkillPartsFromSegment = (text: string, names: string[]): InlineSkillPart[] => {
    if (!names.length) return [{ type: 'text', value: text }]
    const parts: InlineSkillPart[] = []
    let cursor = 0

    while (cursor < text.length) {
      let matchIndex = -1
      let matchName = ''
      for (const name of names) {
        let searchIndex = text.indexOf(name, cursor)
        while (searchIndex !== -1 && !isSkillBoundary(text, searchIndex, name)) {
          searchIndex = text.indexOf(name, searchIndex + name.length)
        }
        if (searchIndex === -1) continue
        if (matchIndex === -1 || searchIndex < matchIndex || (searchIndex === matchIndex && name.length > matchName.length)) {
          matchIndex = searchIndex
          matchName = name
        }
      }
      if (matchIndex === -1) break
      if (matchIndex > cursor) {
        parts.push({ type: 'text', value: text.slice(cursor, matchIndex) })
      }
      parts.push({ type: 'skill', value: matchName })
      cursor = matchIndex + matchName.length
    }
    if (cursor < text.length) {
      parts.push({ type: 'text', value: text.slice(cursor) })
    }
    return parts
  }

  const getInlineSkillParts = (text?: string): InlineSkillPart[] => {
    if (!text) return []
    const parts: InlineSkillPart[] = []
    for (const segment of getInlineUntagSegments(text)) {
      if (!segment.value.length) continue
      if (segment.isUntagged) {
        parts.push({ type: 'text', value: segment.value })
      } else {
        parts.push(...getInlineSkillPartsFromSegment(segment.value, inlineSkillNames.value))
      }
    }
    return parts.length ? parts : [{ type: 'text', value: text }]
  }

  const getInlineSkillScope = (section: string, itemIndex: number, partIndex: number) => `${section}-${itemIndex}-${partIndex}`

  const arkPassiveByName = computed(() => {
    const map: Record<string, { name: string; category: ArkPassiveCategory; tier?: number; points?: number }> = {}
    for (const passive of currentVariant.value?.arkPassives ?? []) {
      if (!map[passive.name]) map[passive.name] = passive
    }
    for (const passive of preArkPassives.value) {
      if (!map[passive.name]) map[passive.name] = passive
    }
    return map
  })

  const arkPassiveTipNames = computed(() => {
    const names = new Set<string>()
    for (const passive of currentVariant.value?.arkPassives ?? []) names.add(passive.name)
    for (const passive of preArkPassives.value) names.add(passive.name)

    const tips = [
      ...(currentVariant.value?.priorities ?? []),
      ...(preArkGrid.value?.priorities ?? []),
      ...(preArkGrid.value?.tips ?? []),
      ...(currentVariant.value?.tips ?? []),
      ...(preArkGrid.value?.arkPassiveTips ?? []),
      ...(currentVariant.value?.arkPassiveTips ?? []),
    ]

    const detectionSources = [
      ...tips,
      preArkGrid.value?.description ?? '',
      currentVariant.value?.description ?? '',
      ...(preArkGrid.value?.skills ?? []).map((skill: Skill) => skill.notes ?? ''),
      ...(currentVariant.value?.skills ?? []).map((skill: Skill) => skill.notes ?? ''),
    ].map((source) => source.toLowerCase())

    for (const passiveName of Object.keys(dbArkPassiveCategoryByName.value)) {
      if (detectionSources.some((source) => source.includes(passiveName.toLowerCase()))) {
        names.add(passiveName)
      }
    }

    for (const [name] of Object.entries(ARK_PASSIVE_TIP_FALLBACK_CATEGORIES)) {
      if (detectionSources.some((source) => source.includes(name.toLowerCase()))) {
        names.add(name)
      }
    }

    return Array.from(names).sort((a, b) => b.length - a.length)
  })

  const getInlineArkPassiveParts = (text?: string): InlineArkPassivePart[] => {
    if (!text) return []
    const names = arkPassiveTipNames.value

    const getPartsFromSegment = (segmentText: string): InlineArkPassivePart[] => {
      if (!names.length) return [{ type: 'text', value: segmentText }]

      const parts: InlineArkPassivePart[] = []
      let cursor = 0
      while (cursor < segmentText.length) {
        let matchIndex = -1
        let matchName = ''

        for (const name of names) {
          let searchIndex = segmentText.indexOf(name, cursor)
          while (searchIndex !== -1 && (!isArkPassiveBoundary(segmentText, searchIndex, name) || isArkPassiveExcludedMatch(segmentText, searchIndex, name))) {
            searchIndex = segmentText.indexOf(name, searchIndex + name.length)
          }
          if (searchIndex === -1) continue
          if (matchIndex === -1 || searchIndex < matchIndex || (searchIndex === matchIndex && name.length > matchName.length)) {
            matchIndex = searchIndex
            matchName = name
          }
        }

        if (matchIndex === -1) break
        if (matchIndex > cursor) {
          parts.push({ type: 'text', value: segmentText.slice(cursor, matchIndex) })
        }
        parts.push({ type: 'passive', value: matchName })
        cursor = matchIndex + matchName.length
      }

      if (cursor < segmentText.length) {
        parts.push({ type: 'text', value: segmentText.slice(cursor) })
      }
      return parts
    }

    const parts: InlineArkPassivePart[] = []
    for (const segment of getInlineUntagSegments(text)) {
      if (!segment.value.length) continue
      if (segment.isUntagged) {
        parts.push({ type: 'text', value: segment.value })
      } else {
        parts.push(...getPartsFromSegment(segment.value))
      }
    }

    return parts.length ? parts : [{ type: 'text', value: text }]
  }

  const getInlineGuideTextParts = (text: string): InlineGuidePart[] => {
    if (!text) return []
    const skillNames = inlineSkillNames.value
    const passiveNames = arkPassiveTipNames.value

    const getPartsFromSegment = (segmentText: string): InlineGuidePart[] => {
      if (!skillNames.length && !passiveNames.length) {
        return [{ type: 'text', value: segmentText }]
      }

      const parts: InlineGuidePart[] = []
      let cursor = 0

      while (cursor < segmentText.length) {
        let matchIndex = -1
        let matchName = ''
        let matchType: 'skill' | 'passive' | null = null

        for (const name of skillNames) {
          let searchIndex = segmentText.indexOf(name, cursor)
          while (searchIndex !== -1 && !isSkillBoundary(segmentText, searchIndex, name)) {
            searchIndex = segmentText.indexOf(name, searchIndex + name.length)
          }
          if (searchIndex === -1) continue
          if (matchIndex === -1 || searchIndex < matchIndex || (searchIndex === matchIndex && name.length > matchName.length)) {
            matchIndex = searchIndex
            matchName = name
            matchType = 'skill'
          }
        }

        for (const name of passiveNames) {
          let searchIndex = segmentText.indexOf(name, cursor)
          while (searchIndex !== -1 && (!isArkPassiveBoundary(segmentText, searchIndex, name) || isArkPassiveExcludedMatch(segmentText, searchIndex, name))) {
            searchIndex = segmentText.indexOf(name, searchIndex + name.length)
          }
          if (searchIndex === -1) continue
          if (matchIndex === -1 || searchIndex < matchIndex || (searchIndex === matchIndex && name.length > matchName.length)) {
            matchIndex = searchIndex
            matchName = name
            matchType = 'passive'
          }
        }

        if (matchIndex === -1 || matchType === null) break
        if (matchIndex > cursor) {
          parts.push({ type: 'text', value: segmentText.slice(cursor, matchIndex) })
        }
        parts.push({ type: matchType, value: matchName })
        cursor = matchIndex + matchName.length
      }

      if (cursor < segmentText.length) {
        parts.push({ type: 'text', value: segmentText.slice(cursor) })
      }

      return parts
    }

    const parts: InlineGuidePart[] = []
    for (const segment of getInlineUntagSegments(text)) {
      if (!segment.value.length) continue
      if (segment.isUntagged) {
        parts.push({ type: 'text', value: segment.value })
      } else {
        parts.push(...getPartsFromSegment(segment.value))
      }
    }
    return parts.length ? parts : [{ type: 'text', value: text }]
  }

  const getInlineGuideParts = (text?: string): InlineGuidePart[] => {
    if (!text) return []
    const parts: InlineGuidePart[] = []
    for (const token of getGuideTripodTokens(text)) {
      if (token.type === 'tripod') {
        parts.push(token)
      } else {
        parts.push(...getInlineGuideTextParts(token.value))
      }
    }
    return parts
  }

  const getSkillNoteLines = (skillName: string, notes?: string): SkillNoteLine[] => {
    const tokens = getSkillNoteTokens(skillName, notes)
    if (!tokens.length) return []

    const lines: SkillNoteToken[][] = [[]]
    for (const token of tokens) {
      if (token.type === 'tripod') {
        lines[lines.length - 1]?.push(token)
        continue
      }
      const textLines = token.value.split(/\r?\n/)
      for (let index = 0; index < textLines.length; index += 1) {
        const textLine = textLines[index] ?? ''
        if (textLine.length) {
          lines[lines.length - 1]?.push({ type: 'text', value: textLine })
        }
        if (index < textLines.length - 1) lines.push([])
      }
    }

    return lines.map((lineTokens) => {
      const normalizedTokens = lineTokens.map((token) => token.type === 'text'
        ? { type: 'text', value: token.value }
        : token,
      ) as SkillNoteToken[]

      let isBullet = false
      const firstTextIndex = normalizedTokens.findIndex((token) => token.type === 'text' && token.value.length > 0)
      const hasTripodBeforeText = firstTextIndex > 0
        ? normalizedTokens.slice(0, firstTextIndex).some((token) => token.type === 'tripod')
        : false

      if (firstTextIndex !== -1 && !hasTripodBeforeText) {
        const firstToken = normalizedTokens[firstTextIndex]
        if (firstToken?.type === 'text') {
          const bulletMatch = firstToken.value.match(/^\s*-\s+/)
          if (bulletMatch) {
            isBullet = true
            firstToken.value = firstToken.value.slice(bulletMatch[0].length)
          }
        }
      }

      const parts: SkillNoteInlinePart[] = []
      for (const token of normalizedTokens) {
        if (token.type === 'tripod') {
          parts.push(token)
          continue
        }

        for (const part of getBoldParts(token.value)) {
          if (part.value.length === 0) continue
          if (part.type === 'bold') {
            parts.push(part)
            continue
          }

          for (const inlinePart of getInlineGuideTextParts(part.value)) {
            if (inlinePart.type === 'text' && inlinePart.value.length === 0) continue
            parts.push(inlinePart)
          }
        }
      }

      return { isBullet, parts }
    })
  }

  const getArkPassiveTipLookupKey = (name: string) => getArkPassiveKey({ name })

  const getArkPassiveTipData = (name: string) => {
    const selectedPassive = arkPassiveByName.value[name]
    if (selectedPassive) {
      return arkPassiveIcons.value[getArkPassiveKey(selectedPassive)]
    }
    return arkPassiveIcons.value[getArkPassiveTipLookupKey(name)]
  }

  const hasArkPassiveTipData = (name: string) => getArkPassiveTipData(name) !== undefined
  const hasArkGridCoreDetails = (coreName: string) => arkGridCoreDetails.value[coreName] !== undefined

  const getArkPassiveTipCategory = (name: string): ArkPassiveCategory => {
    const selectedPassive = arkPassiveByName.value[name]
    if (selectedPassive) return selectedPassive.category
    const dbCategory = dbArkPassiveCategoryByName.value[name]
    if (dbCategory) return dbCategory
    return ARK_PASSIVE_TIP_FALLBACK_CATEGORIES[name] ?? 'evolution'
  }

  const normalizeSkillDescription = (description?: string | null) => {
    if (!description) return null
    const normalized = decodeTooltipEntities(description)
      .replace(/\r\n?/g, '\n')
      .replace(SKILL_DESCRIPTION_BR_TAG_PATTERN, '\n')
      .replace(/\u00A0/g, ' ')
      .replace(/\u200B/g, '')
      .trim()

    const lines = normalized.split('\n').map((line) => line.trim())
    const hasLegacyMetaLines = lines.some((line) => isSkillTooltipMetaLine(line))
    if (!hasLegacyMetaLines) return normalized

    const filteredLines = lines.filter((line) =>
      line.length > 0 && !isSkillTooltipMetaLine(line),
    )
    return filteredLines.join('\n').trim() || normalized
  }

  const splitPlainDamageNumbers = (text: string): SkillDescriptionPart[] => {
    const parts: SkillDescriptionPart[] = []
    let cursor = 0
    let index = 0

    while (index < text.length) {
      if (!isAsciiDigit(text[index])) {
        index += 1
        continue
      }

      let tokenEnd = index
      let seenDecimalPoint = false

      while (tokenEnd < text.length) {
        const tokenChar = text[tokenEnd]
        if (isAsciiDigit(tokenChar) || tokenChar === ',') {
          tokenEnd += 1
          continue
        }

        if (tokenChar === '.' && !seenDecimalPoint) {
          seenDecimalPoint = true
          tokenEnd += 1
          continue
        }

        break
      }

      const token = text.slice(index, tokenEnd)
      const hasBoundaryBefore = !isRegexWordChar(text[index - 1])
      const hasBoundaryAfter = !isRegexWordChar(text[tokenEnd])

      if (hasBoundaryBefore && hasBoundaryAfter && isLargeNumberToken(token)) {
        if (index > cursor) {
          parts.push({ text: text.slice(cursor, index), color: null })
        }

        parts.push({ text: token, color: 'orange' })
        cursor = tokenEnd
        index = tokenEnd
        continue
      }

      index += 1
    }

    if (cursor < text.length) parts.push({ text: text.slice(cursor), color: null })
    return parts
  }

  const normalizeDamageNumberColors = (parts: SkillDescriptionPart[]): SkillDescriptionPart[] => parts.map((part, index) => {
    if (part.color !== null) return part
    const token = part.text.trim()
    if (!isLargeNumberToken(token)) return part
    const previousText = parts[index - 1]?.text ?? ''
    const nextText = parts[index + 1]?.text ?? ''
    const nextNextText = parts[index + 2]?.text ?? ''
    const hasDamageContext = hasDamageKeyword(previousText) || hasDamageKeyword(nextText) || hasDamageKeyword(nextNextText)
    return hasDamageContext ? { text: part.text, color: 'orange' } : part
  })

  const parseSkillDescription = (desc?: string | null) => {
    if (!desc) return []
    const rawParts: SkillDescriptionPart[] = []
    let remaining = desc

    const getColorMatch = (value: string): { index: number; length: number; text: string; color: string } | null => {
      const candidates: Array<{ index: number; length: number; text: string; color: string }> = []

      const tagMatch = value.match(SKILL_DESCRIPTION_COLOR_TAG_PATTERN)
      if (tagMatch && tagMatch.index !== undefined) {
        const color = getSkillDescriptionTagColor(tagMatch[1])
        if (color) {
          candidates.push({
            index: tagMatch.index,
            length: tagMatch[0].length,
            text: stripSkillDescriptionFormattingTags(tagMatch[2] ?? ''),
            color,
          })
        }
      }

      const colorEqualsMatch = value.match(SKILL_DESCRIPTION_COLOR_EQUALS_TAG_PATTERN)
      if (colorEqualsMatch && colorEqualsMatch.index !== undefined) {
        const color = getExplicitTagColor(colorEqualsMatch[1])
        if (color) {
          candidates.push({
            index: colorEqualsMatch.index,
            length: colorEqualsMatch[0].length,
            text: stripSkillDescriptionFormattingTags(colorEqualsMatch[2] ?? ''),
            color,
          })
        }
      }

      const fontMatch = value.match(SKILL_DESCRIPTION_FONT_COLOR_TAG_PATTERN)
      if (fontMatch && fontMatch.index !== undefined) {
        const color = getExplicitTagColor(fontMatch[1])
        if (color) {
          candidates.push({
            index: fontMatch.index,
            length: fontMatch[0].length,
            text: stripSkillDescriptionFormattingTags(fontMatch[2] ?? ''),
            color,
          })
        }
      }

      if (!candidates.length) return null

      candidates.sort((a, b) => a.index - b.index)
      return candidates[0] ?? null
    }

    while (remaining.length > 0) {
      const colorMatch = getColorMatch(remaining)

      if (!colorMatch) {
        const plainText = stripSkillDescriptionFormattingTags(remaining)
        if (plainText.trim()) rawParts.push({ text: plainText, color: null })
        break
      }

      if (colorMatch.index > 0) {
        const leadingText = stripSkillDescriptionFormattingTags(remaining.slice(0, colorMatch.index))
        if (leadingText.length > 0) {
          rawParts.push({ text: leadingText, color: null })
        }
      }

      rawParts.push({ text: colorMatch.text, color: colorMatch.color })
      remaining = remaining.slice(colorMatch.index + colorMatch.length)
    }

    const parts: SkillDescriptionPart[] = []
    for (let index = 0; index < rawParts.length; index += 1) {
      const part = rawParts[index]
      if (!part) continue
      if (part.color !== null) {
        parts.push(part)
        continue
      }

      const previousText = rawParts[index - 1]?.text ?? ''
      const nextText = rawParts[index + 1]?.text ?? ''
      const nextNextText = rawParts[index + 2]?.text ?? ''
      const hasDamageContext = hasDamageKeyword(part.text)
        || hasDamageKeyword(previousText)
        || hasDamageKeyword(nextText)
        || hasDamageKeyword(nextNextText)
        || /^\s*Damage\b/i.test(nextText)
        || /^\s*Damage\b/i.test(nextNextText)

      if (!hasDamageContext) {
        parts.push(part)
        continue
      }

      parts.push(...splitPlainDamageNumbers(part.text))
    }

    return normalizeDamageNumberColors(parts)
  }

  const getSkillDetailLines = (meta: SkillTooltipMeta): Array<{ text: string; color: 'YELLOW' | 'ORANGE' }> => {
    const lines: Array<{ text: string; color: 'YELLOW' | 'ORANGE' }> = []
    const labels = SKILL_META_LABELS[currentTooltipLocale.value] ?? SKILL_META_LABELS.en
    if (meta.partsAttackLevel !== null && meta.partsAttackLevel > 0) {
      lines.push({ text: labels.weakPoint(Math.trunc(meta.partsAttackLevel)), color: 'YELLOW' })
    }
    const attackTypeText = meta.directionalAttackType !== null ? labels.attackType[meta.directionalAttackType] : undefined
    if (attackTypeText) lines.push({ text: attackTypeText, color: 'ORANGE' })
    const counterText = meta.counterAttackType !== null ? labels.counter[meta.counterAttackType] : undefined
    if (counterText) lines.push({ text: counterText, color: 'ORANGE' })
    const staggerText = meta.stiffnessType !== null ? labels.stagger[meta.stiffnessType] : undefined
    if (staggerText) lines.push({ text: staggerText, color: 'ORANGE' })
    const superArmorText = meta.superArmorType !== null ? labels.superArmor[meta.superArmorType] : undefined
    if (superArmorText) lines.push({ text: superArmorText, color: 'ORANGE' })
    return lines
  }

  const appendSkillDetailLines = (description: string | null, meta: SkillTooltipMeta) => {
    const normalizedDescription = normalizeSkillDescription(description)
    const detailLines = getSkillDetailLines(meta)
    if (!detailLines.length) return normalizedDescription
    const existingText = (normalizedDescription ?? '').toLowerCase()
    const missingLines = detailLines.filter((line) => !existingText.includes(line.text.toLowerCase()))
    if (!missingLines.length) return normalizedDescription

    const formattedLines = missingLines.map((line) => `[${line.color}]${line.text}[/${line.color}]`).join('\n')
    const baseDescription = normalizedDescription?.trimEnd() ?? ''
    if (!baseDescription) return formattedLines
    return `${baseDescription}\n${formattedLines}`
  }

  const getSkillHeaderLines = (skillName: string): SkillHeaderLine[] => {
    const meta = skillTooltipMeta.value[skillName]
    if (!meta) return []
    const lines: SkillHeaderLine[] = []

    const castTag = meta.castTag?.trim()
    if (castTag) {
      lines.push({
        text: localizeTagLabel(castTag, currentTooltipLocale.value, CAST_TAG_TRANSLATIONS),
        color: getCastTagColor(castTag, meta.castTagColor),
      })
    }

    const elementTag = meta.elementTag?.trim()
    if (elementTag) {
      lines.push({
        text: localizeTagLabel(elementTag, currentTooltipLocale.value, ELEMENT_TAG_TRANSLATIONS),
        color: getElementTagColor(elementTag, meta.elementTagColor),
      })
    }

    const cooldown = formatCooldown(meta.cooldownSeconds, currentTooltipLocale.value)
    if (cooldown) lines.push({ text: cooldown, color: DEFAULT_SKILL_META_COLOR })
    return lines
  }

  const parseArkGridRows = (raw?: string): ArkGridRow[] => {
    if (!raw) return []
    return raw
      .split('|')
      .map((segment) => segment.trim())
      .filter(Boolean)
      .map((segment) => {
        let label = ''
        const cores = segment
          .split('+')
          .map((core) => core.trim())
          .filter(Boolean)
          .map((core) => {
            const match = core.match(/^(.*)\(([^)]+)\)$/)
            if (match) {
              const coreLabel = match[2]?.trim() ?? ''
              const coreName = match[1]?.trim() ?? ''
              if (!label && coreLabel) label = coreLabel
              return coreName || core
            }
            return core
          })
          .filter(Boolean)
        return { label, cores }
      })
      .filter((row) => row.cores.length)
  }

  const arkGridRows = computed(() => parseArkGridRows(currentVariant.value?.arkgrid_cores))
  const hasArkGridLabels = computed(() => arkGridRows.value.some((row: ArkGridRow) => row.label))
  const arkGridCoreNames = computed(() => Array.from(new Set(arkGridRows.value.flatMap((row: ArkGridRow) => row.cores))))
  const inlineArkGridCoreNames = computed(() => [...arkGridCoreNames.value].sort((a, b) => b.length - a.length))

  const getInlineArkGridCoreParts = (text?: string): InlineArkGridCorePart[] => {
    if (!text) return []
    const coreNames = inlineArkGridCoreNames.value
    if (!coreNames.length) return [{ type: 'text', value: text }]

    const parts: InlineArkGridCorePart[] = []
    let cursor = 0
    while (cursor < text.length) {
      let matchIndex = -1
      let matchName = ''

      for (const name of coreNames) {
        let searchIndex = text.indexOf(name, cursor)
        while (searchIndex !== -1 && !isSkillBoundary(text, searchIndex, name)) {
          searchIndex = text.indexOf(name, searchIndex + name.length)
        }
        if (searchIndex === -1) continue
        if (matchIndex === -1 || searchIndex < matchIndex || (searchIndex === matchIndex && name.length > matchName.length)) {
          matchIndex = searchIndex
          matchName = name
        }
      }

      if (matchIndex === -1) break
      if (matchIndex > cursor) {
        parts.push({ type: 'text', value: text.slice(cursor, matchIndex) })
      }
      parts.push({ type: 'core', value: matchName })
      cursor = matchIndex + matchName.length
    }

    if (cursor < text.length) {
      parts.push({ type: 'text', value: text.slice(cursor) })
    }
    return parts
  }

  const getArkGridProseLines = (text?: string) => (text ?? '').split(/\r?\n/)
  const arkGridProseLines = computed(() => getArkGridProseLines(currentVariant.value?.arkgrid_prose))

  const arkGridCategoryMap = computed(() => {
    const map: Record<string, { icon: string; color: string; label: string }> = {}
    for (const [coreName, detail] of Object.entries(arkGridCoreDetails.value)) {
      if (!detail?.category_name) continue
      const { icon, color } = resolveArkGridCategoryTone({
        category_name: detail.category_name,
        category_key: detail.category_key,
      })
      map[coreName] = { icon, color, label: detail.category_name }
    }
    return map
  })

  const dpsDistribution = computed(() => {
    const raw: DpsDistribution[] | undefined = currentVariant.value?.dps_distribution ?? currentVariant.value?.dpsDistribution
    if (!raw?.length) return []
    return raw
      .filter((entry: DpsDistribution) => (entry.dmg ?? 0) >= 2)
      .sort((a: DpsDistribution, b: DpsDistribution) => (b.dmg ?? 0) - (a.dmg ?? 0))
  })

  const formatDpsValue = (value: number) => normalizeDpsValue(value).toFixed(1)
  const getDpsBarWidth = (value: number) => `${normalizeDpsValue(value)}%`
  const getDpsBarColor = (index: number) => dpsBarColors[index % dpsBarColors.length] ?? 'bg-zinc-600/80'

  return {
    preArkRotationSections,
    variantRotationSections,
    variantDifficulty,
    getRotationSections,
    getRotationSteps,
    getTripodNamesFromNotes,
    getSkillNoteLines,
    getSkillLookupName,
    getInlineSkillParts,
    getInlineSkillScope,
    getInlineArkPassiveParts,
    getInlineGuideTextParts,
    getInlineGuideParts,
    getArkPassiveTipLookupKey,
    getArkPassiveTipData,
    hasArkPassiveTipData,
    hasArkGridCoreDetails,
    getArkPassiveTipCategory,
    parseSkillDescription,
    appendSkillDetailLines,
    getSkillHeaderLines,
    arkGridRows,
    hasArkGridLabels,
    arkGridCoreNames,
    getInlineArkGridCoreParts,
    arkGridProseLines,
    arkGridCategoryMap,
    dpsDistribution,
    formatDpsValue,
    getDpsBarWidth,
    getDpsBarColor,
    inlineSkillMentionNames,
    arkPassiveByName,
    arkPassiveTipNames,
  }
}
