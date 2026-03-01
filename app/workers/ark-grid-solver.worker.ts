import type {
  Core,
  Astrogem,
  SolverResult,
  SolveRequest,
  SolveWorkerResponse,
  SolverProgress,
  CoreRarity,
  CoreType,
  CoreTargetPoints
} from '../types/arkgrid-solver'
import {
  CORE_CONFIG,
  SUN_MOON_DESTINY_BONUS,
  MAX_SOLVER_SOLUTIONS,
  CORE_TARGET_POINTS,
  getCoreCategory,
  getBreakpointsHit,
  calculateScore,
  isOrderSunCore,
  isOrderMoonCore
} from '../types/arkgrid-solver'

type ExpandedAstrogem = Astrogem & { sourceId: string }

type Combo = {
  indices: number[]
  points: number
  score: number
}

type PendingCore = {
  core: Core
  combos: Combo[]
}

type RankedChoice = {
  choice: Combo[]
  totalScore: number
  totalPoints: number
  totalGemCount: number
}

type CategorySolution = {
  results: SolverResult[]
  totalScore: number
}

type CombinedSolution = {
  results: SolverResult[]
  totalScore: number
}

type GemReplacementPlan = {
  cutGem: Astrogem
  minReplacementPoints: number
  maxReplacementWillpower: number
  score: number
}

const RARITY_ORDER: Record<CoreRarity, number> = {
  Ancient: 0,
  Relic: 1,
  Legendary: 2,
  Epic: 3
}

const GEM_MIN_POINTS = 1
const GEM_MAX_POINTS = 5
const GEM_MIN_WILLPOWER = 1
const GEM_MAX_WILLPOWER = 10
const DESTINY_BONUS_BREAKPOINT = 14
const EMPTY_COMBO: Combo = { indices: [], points: 0, score: 0 }

function postProgress(requestId: number, progress: SolverProgress) {
  const response: SolveWorkerResponse = {
    type: 'progress',
    requestId,
    progress
  }
  self.postMessage(response)
}

function expandAstrogems(astrogems: Astrogem[]): ExpandedAstrogem[] {
  const expanded: ExpandedAstrogem[] = []
  for (let gemIndex = 0; gemIndex < astrogems.length; gemIndex += 1) {
    const gem = astrogems[gemIndex]!
    const quantity = Math.max(1, gem.quantity || 1)
    for (let i = 0; i < quantity; i += 1) {
      expanded.push({
        ...gem,
        id: i === 0 ? gem.id : `${gem.id}__${gemIndex}_${i}`,
        quantity: 1,
        sourceId: gem.id
      })
    }
  }
  return expanded
}

function isComboConflict(used: Uint8Array, combo: Combo) {
  for (const index of combo.indices) {
    if (used[index] !== 0) return true
  }
  return false
}

function setUsed(used: Uint8Array, combo: Combo, state: 0 | 1) {
  for (const index of combo.indices) {
    used[index] = state
  }
}

function findValidCombinations(
  core: Core,
  expandedAstrogems: ExpandedAstrogem[],
  compatibleIndices: number[],
  maxAstrogems = 4
): Combo[] {
  const maxWillpower = CORE_CONFIG[core.rarity].maxWillpower
  const combos: Combo[] = [{ indices: [], points: 0, score: 0 }]
  const path: number[] = []

  const visit = (startIndex: number, currentWillpower: number, currentPoints: number) => {
    if (path.length >= maxAstrogems) {
      return
    }

    for (let i = startIndex; i < compatibleIndices.length; i += 1) {
      const astrogemIndex = compatibleIndices[i]!
      const gem = expandedAstrogems[astrogemIndex]!
      const nextWillpower = currentWillpower + gem.willpower
      if (nextWillpower > maxWillpower) continue

      const nextPoints = currentPoints + gem.points
      path.push(astrogemIndex)

      combos.push({
        indices: [...path],
        points: nextPoints,
        score: calculateScore(nextPoints, core.rarity)
      })

      visit(i + 1, nextWillpower, nextPoints)
      path.pop()
    }
  }

  visit(0, 0, 0)
  combos.sort((a, b) => b.score - a.score || b.points - a.points || a.indices.length - b.indices.length)
  return combos
}

function getTotalPoints(results: SolverResult[]) {
  return results.reduce((sum, result) => sum + result.totalPoints, 0)
}

function getTotalGemCount(results: SolverResult[]) {
  return results.reduce((sum, result) => sum + result.astrogems.length, 0)
}

function getSolutionKey(results: SolverResult[]) {
  return results.map((result) => {
    const astrogemIds = result.astrogems
      .map((gem) => {
        const expandedGem = gem as Astrogem & { sourceId?: string }
        return expandedGem.sourceId ?? expandedGem.id
      })
      .sort()
      .join(',')
    return `${result.coreId}:${astrogemIds}`
  }).join('|')
}

function combineCategorySolutions(
  cores: Core[],
  orderSolutions: CategorySolution[],
  chaosSolutions: CategorySolution[],
  maxSolutions = MAX_SOLVER_SOLUTIONS
): CombinedSolution[] {
  const orderPool = orderSolutions.length
    ? orderSolutions
    : [{ results: [] as SolverResult[], totalScore: 0 }]
  const chaosPool = chaosSolutions.length
    ? chaosSolutions
    : [{ results: [] as SolverResult[], totalScore: 0 }]

  const combinedSolutions: CombinedSolution[] = []

  for (const orderSolution of orderPool) {
    for (const chaosSolution of chaosPool) {
      const resultsMap = new Map<string, SolverResult>()
      for (const result of [...orderSolution.results, ...chaosSolution.results]) {
        resultsMap.set(result.coreId, result)
      }

      const mergedResults = cores
        .map(core => resultsMap.get(core.id))
        .filter((result): result is SolverResult => Boolean(result))

      if (mergedResults.length !== cores.length) {
        continue
      }

      combinedSolutions.push({
        results: mergedResults,
        totalScore: orderSolution.totalScore + chaosSolution.totalScore
      })
    }
  }

  combinedSolutions.sort((a, b) => {
    if (a.totalScore !== b.totalScore) {
      return b.totalScore - a.totalScore
    }

    const pointsDiff = getTotalPoints(b.results) - getTotalPoints(a.results)
    if (pointsDiff !== 0) {
      return pointsDiff
    }

    return getTotalGemCount(a.results) - getTotalGemCount(b.results)
  })

  const uniqueSolutions: CombinedSolution[] = []
  const seen = new Set<string>()
  for (const solution of combinedSolutions) {
    const key = getSolutionKey(solution.results)
    if (seen.has(key)) {
      continue
    }

    seen.add(key)
    uniqueSolutions.push(solution)

    if (uniqueSolutions.length >= maxSolutions) {
      break
    }
  }

  return uniqueSolutions
}

function formatGemStatline(willpower: number, points: number) {
  return `${willpower}w/${points}p`
}

function getSingleGemReplacementPlan(core: Core, result: SolverResult): GemReplacementPlan | null {
  if (core.targetPoints == null) {
    return null
  }

  const targetPoints = core.targetPoints
  if (result.totalPoints >= targetPoints) {
    return null
  }

  const maxWillpower = CORE_CONFIG[core.rarity].maxWillpower
  let best: GemReplacementPlan | null = null

  for (const gem of result.astrogems) {
    const pointsWithoutGem = result.totalPoints - gem.points
    const willpowerWithoutGem = result.totalWillpower - gem.willpower

    const minReplacementPoints = targetPoints - pointsWithoutGem
    const maxReplacementWillpower = maxWillpower - willpowerWithoutGem

    if (minReplacementPoints < GEM_MIN_POINTS || minReplacementPoints > GEM_MAX_POINTS) {
      continue
    }

    if (maxReplacementWillpower < GEM_MIN_WILLPOWER) {
      continue
    }

    const pointsGainNeeded = Math.max(0, minReplacementPoints - gem.points)
    const tighterWillpowerNeeded = Math.max(0, gem.willpower - maxReplacementWillpower)
    const score = pointsGainNeeded * 100 + tighterWillpowerNeeded * 10 + minReplacementPoints

    if (!best || score < best.score) {
      best = {
        cutGem: gem,
        minReplacementPoints,
        maxReplacementWillpower,
        score
      }
    }
  }

  return best
}

function buildTargetCutSuggestion(cores: Core[], results: SolverResult[]): string {
  const resultByCoreId = new Map(results.map(result => [result.coreId, result]))

  const closestReachedPoints: string[] = []
  const suggestedCuts: string[] = []
  const gemUpgradeSuggestions: string[] = []

  for (const core of cores) {
    const coreResult = resultByCoreId.get(core.id)
    const achievedPoints = coreResult?.totalPoints ?? 0
    closestReachedPoints.push(`${achievedPoints}p`)

    if (core.targetPoints == null || achievedPoints >= core.targetPoints) {
      continue
    }

    const reachableBreakpoints = CORE_CONFIG[core.rarity].breakpoints.filter(bp => bp <= achievedPoints)
    const fallbackTarget = reachableBreakpoints.length
      ? reachableBreakpoints[reachableBreakpoints.length - 1]!
      : null

    if (fallbackTarget == null) {
      suggestedCuts.push(`${core.type} ${core.targetPoints}p -> Auto`)
    } else {
      suggestedCuts.push(`${core.type} ${core.targetPoints}p -> ${fallbackTarget}p`)
    }

    if (coreResult) {
      const replacementPlan = getSingleGemReplacementPlan(core, coreResult)
      if (replacementPlan) {
        const cappedWillpower = Math.min(replacementPlan.maxReplacementWillpower, GEM_MAX_WILLPOWER)
        gemUpgradeSuggestions.push(
          `${core.type}: cut ${formatGemStatline(replacementPlan.cutGem.willpower, replacementPlan.cutGem.points)} and aim for <=${cappedWillpower}w/>=${replacementPlan.minReplacementPoints}p`
        )
      } else {
        const shortBy = core.targetPoints - achievedPoints
        gemUpgradeSuggestions.push(
          `${core.type}: short ${shortBy}p, likely needs two gem upgrades instead of one swap`
        )
      }
    }
  }

  const parts: string[] = [
    `No solution meets all forced targets. Closest reachable setup: ${closestReachedPoints.join('/')}.`
  ]

  if (suggestedCuts.length) {
    parts.push(`Suggested target cuts: ${suggestedCuts.join('; ')}.`)
  }

  if (gemUpgradeSuggestions.length) {
    parts.push(`Astrogems to aim for: ${gemUpgradeSuggestions.join('; ')}.`)
  }

  return parts.join('\n')
}

function solveCategoryOptimal(
  requestId: number,
  phaseLabel: 'Order' | 'Chaos',
  cores: Core[],
  expandedAstrogems: ExpandedAstrogem[],
  maxSolutions = MAX_SOLVER_SOLUTIONS,
  respectTargets = true
) {
  if (cores.length === 0) return [] as CategorySolution[]

  const sortedCores = [...cores].sort((a, b) => {
    return RARITY_ORDER[a.rarity] - RARITY_ORDER[b.rarity]
  })

  const category = phaseLabel
  const categoryGemIndices: number[] = []
  for (let index = 0; index < expandedAstrogems.length; index += 1) {
    if (expandedAstrogems[index]?.category === category) {
      categoryGemIndices.push(index)
    }
  }

  const coreCombos: PendingCore[] = []
  for (let i = 0; i < sortedCores.length; i += 1) {
    const core = sortedCores[i]!
    const rawTargetPoints = respectTargets ? core.targetPoints : null
    const hasForcedTarget = rawTargetPoints != null
    const forcedTargetPoints = hasForcedTarget
      ? Number(rawTargetPoints)
      : null

    if (hasForcedTarget && !CORE_TARGET_POINTS.includes(forcedTargetPoints as CoreTargetPoints)) {
      throw new Error(`${core.type} has an invalid forced target.`)
    }

    if (hasForcedTarget && !CORE_CONFIG[core.rarity].breakpoints.includes(forcedTargetPoints as number)) {
      throw new Error(`${core.type} cannot target ${forcedTargetPoints}p at ${core.rarity} rarity.`)
    }

    let combos = findValidCombinations(core, expandedAstrogems, categoryGemIndices)
    if (respectTargets && forcedTargetPoints != null) {
      combos = combos.filter(combo => combo.points >= forcedTargetPoints)
      if (!combos.length) {
        throw new Error(`${core.type} cannot reach forced ${forcedTargetPoints}p with current astrogems.`)
      }
    }

    coreCombos.push({ core, combos })

    postProgress(requestId, {
      phase: 'combos',
      message: `Preparing ${phaseLabel} combinations (${i + 1}/${sortedCores.length})`,
      percent: Math.round(((i + 1) / Math.max(sortedCores.length, 1)) * 35)
    })
  }

  // Search constrained cores first to reduce branching depth quickly.
  coreCombos.sort((a, b) => {
    const comboCountDiff = a.combos.length - b.combos.length
    if (comboCountDiff !== 0) {
      return comboCountDiff
    }

    const rarityDiff = RARITY_ORDER[a.core.rarity] - RARITY_ORDER[b.core.rarity]
    if (rarityDiff !== 0) {
      return rarityDiff
    }

    return a.core.id.localeCompare(b.core.id)
  })

  const sunIdx = coreCombos.findIndex(entry => isOrderSunCore(entry.core.type))
  const moonIdx = coreCombos.findIndex(entry => isOrderMoonCore(entry.core.type))
  const canGetDestinyBonus = sunIdx !== -1
    && moonIdx !== -1
    && coreCombos[sunIdx]!.combos.some(combo => combo.points >= DESTINY_BONUS_BREAKPOINT)
    && coreCombos[moonIdx]!.combos.some(combo => combo.points >= DESTINY_BONUS_BREAKPOINT)
  const destinyBonusValue = canGetDestinyBonus ? SUN_MOON_DESTINY_BONUS : 0

  const maxRemainingScores = new Array(coreCombos.length + 1).fill(0)
  for (let i = coreCombos.length - 1; i >= 0; i -= 1) {
    const current = coreCombos[i]!
    // Combos are sorted descending by score, so index 0 is the tightest per-core upper bound.
    const maxCoreScore = current.combos[0]?.score ?? 0
    maxRemainingScores[i] = maxRemainingScores[i + 1]! + maxCoreScore
  }

  const used = new Uint8Array(expandedAstrogems.length)
  const currentChoice: Combo[] = new Array(coreCombos.length).fill(coreCombos[0]!.combos[0]!)
  const topChoices: RankedChoice[] = []
  let statesExplored = 0
  let lastUpdate = performance.now()

  const compareChoices = (a: RankedChoice, b: RankedChoice) => {
    if (a.totalScore !== b.totalScore) {
      return b.totalScore - a.totalScore
    }

    const pointsDiff = b.totalPoints - a.totalPoints
    if (pointsDiff !== 0) {
      return pointsDiff
    }

    return a.totalGemCount - b.totalGemCount
  }

  const addTopChoice = (candidate: RankedChoice) => {
    topChoices.push(candidate)
    topChoices.sort(compareChoices)
    if (topChoices.length > maxSolutions) {
      topChoices.pop()
    }
  }

  const search = (coreIndex: number, currentScore: number, currentPoints: number, currentGemCount: number) => {
    statesExplored += 1
    if (statesExplored % 20000 === 0) {
      const now = performance.now()
      if (now - lastUpdate > 120) {
        const roughPercent = 35 + Math.min(60, Math.round(Math.log10(statesExplored + 1) * 12))
        postProgress(requestId, {
          phase: 'search',
          message: `Searching ${phaseLabel} states...`,
          percent: roughPercent,
          statesExplored
        })
        lastUpdate = now
      }
    }

    if (coreIndex === coreCombos.length) {
      let totalScore = currentScore
      if (canGetDestinyBonus && sunIdx !== -1 && moonIdx !== -1) {
        const sunPoints = currentChoice[sunIdx]?.points ?? 0
        const moonPoints = currentChoice[moonIdx]?.points ?? 0
        if (sunPoints >= DESTINY_BONUS_BREAKPOINT && moonPoints >= DESTINY_BONUS_BREAKPOINT) {
          totalScore += SUN_MOON_DESTINY_BONUS
        }
      }

      addTopChoice({
        choice: [...currentChoice],
        totalScore,
        totalPoints: currentPoints,
        totalGemCount: currentGemCount
      })
      return
    }

    const worstAcceptedScore = topChoices.length < maxSolutions
      ? -Infinity
      : (topChoices[topChoices.length - 1]?.totalScore ?? -Infinity)

    if (currentScore + (maxRemainingScores[coreIndex] ?? 0) + destinyBonusValue <= worstAcceptedScore) {
      return
    }

    const currentCore = coreCombos[coreIndex]!
    for (const combo of currentCore.combos) {
      if (isComboConflict(used, combo)) continue

      setUsed(used, combo, 1)
      currentChoice[coreIndex] = combo
      search(coreIndex + 1, currentScore + combo.score, currentPoints + combo.points, currentGemCount + combo.indices.length)
      setUsed(used, combo, 0)
    }
  }

  search(0, 0, 0, 0)

  return topChoices.map((rankedChoice) => {
    const results: SolverResult[] = coreCombos.map((entry, index) => {
      const combo = rankedChoice.choice[index] ?? EMPTY_COMBO
      const assignedAstrogems = combo.indices.map(astrogemIndex => expandedAstrogems[astrogemIndex]!)
      const totalPoints = combo.points
      const totalWillpower = assignedAstrogems.reduce((sum, gem) => sum + gem.willpower, 0)

      return {
        coreId: entry.core.id,
        astrogems: assignedAstrogems,
        totalPoints,
        totalWillpower,
        breakpointsHit: getBreakpointsHit(totalPoints, entry.core.rarity),
        score: combo.score
      }
    })

    return {
      results,
      totalScore: rankedChoice.totalScore
    }
  })
}

function solveArkGrid(requestId: number, cores: Core[], astrogems: Astrogem[]) {
  if (!cores.length || !astrogems.length) return [] as SolverResult[][]

  postProgress(requestId, {
    phase: 'init',
    message: 'Preparing solver...',
    percent: 5
  })

  const expandedAstrogems = expandAstrogems(astrogems)
  const orderCores = cores.filter(core => getCoreCategory(core.type as CoreType) === 'Order')
  const chaosCores = cores.filter(core => getCoreCategory(core.type as CoreType) === 'Chaos')

  const hasForcedTargets = cores.some(core => core.targetPoints != null)

  let constrainedFailureMessage: string | null = null
  let constrainedSolutions: CombinedSolution[] = []

  try {
    const orderSolutions = solveCategoryOptimal(requestId, 'Order', orderCores, expandedAstrogems, MAX_SOLVER_SOLUTIONS, true)
    const chaosSolutions = solveCategoryOptimal(requestId, 'Chaos', chaosCores, expandedAstrogems, MAX_SOLVER_SOLUTIONS, true)
    constrainedSolutions = combineCategorySolutions(cores, orderSolutions, chaosSolutions, MAX_SOLVER_SOLUTIONS)
  } catch (error) {
    constrainedFailureMessage = error instanceof Error
      ? error.message
      : 'Failed to satisfy forced targets.'
  }

  if (constrainedFailureMessage) {
    if (constrainedFailureMessage.includes('invalid forced target') || constrainedFailureMessage.includes('cannot target')) {
      throw new Error(constrainedFailureMessage)
    }
  }

  if (!constrainedSolutions.length) {
    const relaxedOrderSolutions = solveCategoryOptimal(requestId, 'Order', orderCores, expandedAstrogems, 1, false)
    const relaxedChaosSolutions = solveCategoryOptimal(requestId, 'Chaos', chaosCores, expandedAstrogems, 1, false)
    const relaxedCombined = combineCategorySolutions(cores, relaxedOrderSolutions, relaxedChaosSolutions, 1)

    if (hasForcedTargets && relaxedCombined.length) {
      throw new Error(buildTargetCutSuggestion(cores, relaxedCombined[0]!.results))
    }

    if (constrainedFailureMessage) {
      throw new Error(constrainedFailureMessage)
    }

    throw new Error('No valid assignment found with current astrogems.')
  }

  postProgress(requestId, {
    phase: 'done',
    message: 'Finalizing results...',
    percent: 100
  })

  return constrainedSolutions.map(solution => solution.results)
}

self.onmessage = (event: MessageEvent<SolveRequest>) => {
  const payload = event.data as Partial<SolveRequest> | null | undefined
  const requestId = typeof payload?.requestId === 'number' ? payload.requestId : -1

  try {
    if (!payload || !Array.isArray(payload.cores) || !Array.isArray(payload.astrogems)) {
      throw new Error('Invalid solver request payload.')
    }

    const solutions = solveArkGrid(requestId, payload.cores, payload.astrogems)
    const response: SolveWorkerResponse = {
      type: 'result',
      requestId,
      solutions
    }
    self.postMessage(response)
  } catch (error) {
    const response: SolveWorkerResponse = {
      type: 'error',
      requestId,
      error: error instanceof Error ? error.message : 'Ark Grid solver failed'
    }
    self.postMessage(response)
  }
}

export {}
