export type CoreRarity = 'Epic' | 'Legendary' | 'Relic' | 'Ancient'
export type CoreType =
  | 'Order of the Sun'
  | 'Order of the Moon'
  | 'Order of the Star'
  | 'Chaos of the Sun'
  | 'Chaos of the Moon'
  | 'Chaos of the Star'

export type AstrogemCategory = 'Order' | 'Chaos'
export type CoreTargetPoints = 10 | 14 | 17

export interface Astrogem {
  id: string
  category: AstrogemCategory
  willpower: number
  points: number
  quantity: number
}

export interface Core {
  id: string
  type: CoreType
  rarity: CoreRarity
  targetPoints?: CoreTargetPoints | null
}

export interface SolverResult {
  coreId: string
  astrogems: Astrogem[]
  totalPoints: number
  totalWillpower: number
  breakpointsHit: number[]
  score: number
}

export interface SolverProgress {
  message: string
  phase: 'init' | 'combos' | 'search' | 'done'
  percent?: number
  statesExplored?: number
}

export interface SolveRequest {
  requestId: number
  cores: Core[]
  astrogems: Astrogem[]
}

export interface SolveSuccessResponse {
  type: 'result'
  requestId: number
  solutions: SolverResult[][]
}

export interface SolveErrorResponse {
  type: 'error'
  requestId: number
  error: string
}

export interface SolveProgressResponse {
  type: 'progress'
  requestId: number
  progress: SolverProgress
}

export type SolveWorkerResponse =
  | SolveSuccessResponse
  | SolveErrorResponse
  | SolveProgressResponse

export const CORE_TYPES: CoreType[] = [
  'Order of the Sun',
  'Order of the Moon',
  'Order of the Star',
  'Chaos of the Sun',
  'Chaos of the Moon',
  'Chaos of the Star'
]

export const CORE_RARITIES: CoreRarity[] = ['Epic', 'Legendary', 'Relic', 'Ancient']
export const CORE_TARGET_POINTS: CoreTargetPoints[] = [10, 14, 17]

export const CORE_CONFIG: Record<CoreRarity, { maxWillpower: number, breakpoints: number[] }> = {
  Epic: { maxWillpower: 9, breakpoints: [10] },
  Legendary: { maxWillpower: 12, breakpoints: [10, 14] },
  Relic: { maxWillpower: 15, breakpoints: [10, 14, 17, 18, 19, 20] },
  Ancient: { maxWillpower: 17, breakpoints: [10, 14, 17, 18, 19, 20] }
}

export const BREAKPOINT_WEIGHTS: Record<number, number> = {
  10: 1,
  14: 5,
  17: 5,
  18: 0.5,
  19: 0.5,
  20: 0.5
}

export const ANCIENT_17P_BONUS = 1.5
export const SUN_MOON_DESTINY_BONUS = 10
export const MAX_SOLVER_SOLUTIONS = 5

export const CORE_CATEGORIES: Record<CoreType, AstrogemCategory> = {
  'Order of the Sun': 'Order',
  'Order of the Moon': 'Order',
  'Order of the Star': 'Order',
  'Chaos of the Sun': 'Chaos',
  'Chaos of the Moon': 'Chaos',
  'Chaos of the Star': 'Chaos'
}

export function generateId(): string {
  return Math.random().toString(36).slice(2, 11)
}

export function createEmptyCore(type: CoreType = 'Order of the Sun', rarity: CoreRarity = 'Relic'): Core {
  return {
    id: generateId(),
    type,
    rarity,
    targetPoints: null
  }
}

export function getCoreTargetOptions(rarity: CoreRarity): CoreTargetPoints[] {
  return CORE_TARGET_POINTS.filter(points => CORE_CONFIG[rarity].breakpoints.includes(points))
}

export function normalizeCoreTargetPoints(rarity: CoreRarity, targetPoints: number | null | undefined): CoreTargetPoints | null {
  if (targetPoints == null) {
    return null
  }

  if (!CORE_TARGET_POINTS.includes(targetPoints as CoreTargetPoints)) {
    return null
  }

  return CORE_CONFIG[rarity].breakpoints.includes(targetPoints)
    ? (targetPoints as CoreTargetPoints)
    : null
}

export function createEmptyAstrogem(category: AstrogemCategory = 'Order'): Astrogem {
  return {
    id: generateId(),
    category,
    willpower: 3,
    points: 1,
    quantity: 1
  }
}

export function getCoreCategory(type: CoreType): AstrogemCategory {
  return CORE_CATEGORIES[type]
}

export function calculateTotalWillpower(astrogems: Astrogem[]): number {
  return astrogems.reduce((sum, gem) => sum + gem.willpower, 0)
}

export function calculateTotalPoints(astrogems: Astrogem[]): number {
  return astrogems.reduce((sum, gem) => sum + gem.points, 0)
}

export function getBreakpointsHit(points: number, rarity: CoreRarity): number[] {
  return CORE_CONFIG[rarity].breakpoints.filter(bp => points >= bp)
}

export function calculateScore(points: number, rarity: CoreRarity): number {
  return getBreakpointsHit(points, rarity).reduce((score, bp) => {
    let weight = BREAKPOINT_WEIGHTS[bp] || 0
    if (bp === 17 && rarity === 'Ancient') {
      weight += ANCIENT_17P_BONUS
    }
    return score + weight
  }, 0)
}

export function isOrderSunCore(type: CoreType): boolean {
  return type === 'Order of the Sun'
}

export function isOrderMoonCore(type: CoreType): boolean {
  return type === 'Order of the Moon'
}
