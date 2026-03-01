import { defineContentConfig, defineCollection, z } from '@nuxt/content'

// Schema for skills
const skillSchema = z.object({
  name: z.string(),
  icon: z.string().optional(),
  level: z.number().optional(),
  level_label: z.string().optional(),
  tripods: z.array(z.string()).optional(),
  rune: z.string().optional(),
  rune_rarity: z.enum(['uncommon', 'rare', 'epic', 'legendary']).optional(),
  notes: z.string().optional(),
})

// Schema for engravings
const engravingSchema = z.object({
  name: z.string(),
  level: z.number().min(1).max(3),
  priority: z.enum(['required', 'recommended', 'optional']),
})

// Schema for gems
const gemSchema = z.object({
  skill: z.string(),
  type: z.enum(['damage', 'cooldown']),
  priority: z.number(),
})

const dpsDistributionSchema = z.object({
  name: z.string(),
  dmg: z.number(),
})

// Schema for ark passives
const arkPassiveSchema = z.object({
  name: z.string(),
  points: z.number(),
  category: z.enum(['evolution', 'enlightenment', 'leap']),
  tier: z.number().int().min(1).optional(),
})

// Schema for variants
const variantSchema = z.object({
  name: z.string(),
  description: z.string(),
  difficulty: z.number().int().min(1).max(3).optional(),
  recommended: z.boolean().optional(),
  dps_distribution: z.array(dpsDistributionSchema).optional(),
}).passthrough()

const preArkGridSchema = z.object({
  description: z.string().optional(),
  stats: z.string().optional(),
  engravings: z.array(engravingSchema).optional(),
  skills: z.array(skillSchema).optional(),
  gems: z.array(gemSchema).optional(),
  rotation: z.array(z.string()).optional(),
  tips: z.array(z.string()).optional(),
  priorities: z.array(z.string()).optional(),
  arkPassiveTips: z.array(z.string()).optional(),
})

// Schema for builds
const buildSchema = z.object({
  name: z.string(),
  engraving: z.string(),
  description: z.string(),
  playstyle: z.string(),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  variants: z.array(variantSchema).optional(),
  preArkGrid: preArkGridSchema.optional(),
  skills: z.array(skillSchema).optional(),
  engravings: z.array(engravingSchema).optional(),
  gems: z.array(gemSchema).optional(),
  arkPassives: z.array(arkPassiveSchema).optional(),
  rotation: z.array(z.string()).optional(),
  tips: z.array(z.string()).optional(),
})

const classGuideSchema = z.object({
  title: z.string(),
  class: z.string(),
  subclass: z.string(),
  description: z.string(),
  author: z.string().optional(),
  lastUpdated: z.string().optional(),
  patch: z.string(),
  identity: z.object({
    name: z.string(),
    description: z.string(),
  }),
  synergy: z.object({
    name: z.string(),
    description: z.string(),
    skills: z.array(z.string()),
  }).optional(),
  builds: z.array(buildSchema),
})

const guideSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  author: z.string().optional(),
  lastUpdated: z.string().optional(),
  category: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    guides: defineCollection({
      type: 'page',
      source: 'guides/*.md',
      schema: guideSchema,
    }),
    classGuides: defineCollection({
      type: 'page',
      source: 'guides/classes/**/*.md',
      schema: classGuideSchema,
    }),
  },
})
