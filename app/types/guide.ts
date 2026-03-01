// Type definitions for Lost Ark class guides

export type ArkPassiveCategory = 'evolution' | 'enlightenment' | 'leap'

export interface Skill {
  name: string
  icon?: string
  level?: number
  level_label?: string
  tripods?: string[] | Record<string, string | number>
  rune?: string
  rune_rarity?: 'uncommon' | 'rare' | 'epic' | 'legendary'
  notes?: string
}

export interface Engraving {
  name: string
  level?: number
  priority?: 'required' | 'recommended' | 'optional'
}

export interface Gem {
  skill: string
  type: 'damage' | 'cooldown'
  priority: number
  icon?: string
  'alt-icon'?: string
}

export interface DpsDistribution {
  name: string
  dmg: number
  level?: number
}

export interface ArkPassive {
  name: string
  points: number
  category: ArkPassiveCategory
  tier?: number
}

export interface RotationSection {
  title?: string
  steps?: string[]
}

export interface ArkGridVariant {
  name: string
  description: string
  difficulty?: 1 | 2 | 3
  recommended?: boolean
  arkgrid_cores?: string
  arkgrid_prose?: string
  engravings?: Engraving[]
  dpsDistribution?: DpsDistribution[]
  dps_distribution?: DpsDistribution[]
  skills?: Skill[]
  gems?: Gem[]
  arkPassives?: ArkPassive[]
  arkPassiveTips?: string[]
  rotation?: string[]
  rotation_sections?: RotationSection[]
  rotationSections?: RotationSection[]
  priorities?: string[]
  tips?: string[]
  stats?: string
}

export interface PreArkGrid {
  description?: string
  stats?: string
  engravings?: Engraving[]
  skills?: Skill[]
  gems?: Gem[]
  rotation?: string[]
  rotation_sections?: RotationSection[]
  rotationSections?: RotationSection[]
  tips?: string[]
  priorities?: string[]
  arkPassiveTips?: string[]
  arkPassives?: ArkPassive[]
}

export interface Build {
  name: string
  engraving: string
  description?: string
  playstyle?: string
  difficulty?: 'easy' | 'medium' | 'hard'
  engravings?: Engraving[]
  variants?: ArkGridVariant[]
  preArkGrid?: PreArkGrid
}

export interface GuideMetadata {
  title: string
  class: string
  subclass: string
  description: string
  author?: string
  lastUpdated?: string
  patch: string
  builds: Build[]
  identity: {
    name: string
    description: string
  }
  synergy?: {
    name: string
    description: string
    skills: string[]
  }
}

export interface ClassGuideDocument {
  title: string
  class?: string
  subclass: string
  description: string
  identity?: {
    name: string
    description: string
  }
  synergy?: {
    name: string
    description: string
    skills: string[]
  }
  builds?: Build[]
  body?: unknown
  path?: string
  meta?: {
    class_id?: number | string
    [key: string]: unknown
  }
}
