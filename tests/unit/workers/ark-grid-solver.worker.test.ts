import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import type { Astrogem, Core, SolveRequest, SolveWorkerResponse } from '../../../app/types/arkgrid-solver'

type WorkerScope = {
  postMessage: (response: SolveWorkerResponse) => void
  onmessage: ((event: MessageEvent<SolveRequest>) => void) | null
}

const getPostedResponses = (postMessageMock: ReturnType<typeof vi.fn>) => {
  return postMessageMock.mock.calls.map(([payload]) => payload as SolveWorkerResponse)
}

const getFinalResponse = (postMessageMock: ReturnType<typeof vi.fn>) => {
  const responses = getPostedResponses(postMessageMock)
  const lastResponse = responses[responses.length - 1]
  expect(lastResponse).toBeDefined()
  return lastResponse
}

const loadWorker = async () => {
  const postMessage = vi.fn()
  const workerScope: WorkerScope = {
    postMessage: (response) => postMessage(response),
    onmessage: null,
  }

  vi.stubGlobal('self', workerScope)
  await import('../../../app/workers/ark-grid-solver.worker')

  expect(workerScope.onmessage).toBeTypeOf('function')
  return {
    onmessage: workerScope.onmessage!,
    postMessage,
  }
}

describe('ark-grid-solver.worker', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns an explicit error for invalid forced targets', async () => {
    const { onmessage, postMessage } = await loadWorker()

    const cores: Core[] = [
      { id: 'core-1', type: 'Order of the Sun', rarity: 'Epic', targetPoints: 14 },
    ]
    const astrogems: Astrogem[] = [
      { id: 'gem-1', category: 'Order', willpower: 3, points: 5, quantity: 1 },
    ]

    onmessage({
      data: { requestId: 1, cores, astrogems },
    } as MessageEvent<SolveRequest>)

    const finalResponse = getFinalResponse(postMessage)
    expect(finalResponse.type).toBe('error')
    if (finalResponse.type === 'error') {
      expect(finalResponse.error).toContain('cannot target 14p at Epic rarity')
    }
  })

  it('returns an explicit error for malformed payloads', async () => {
    const { onmessage, postMessage } = await loadWorker()

    onmessage({
      data: { requestId: 10 },
    } as MessageEvent<SolveRequest>)

    const finalResponse = getFinalResponse(postMessage)
    expect(finalResponse.type).toBe('error')
    expect(finalResponse.requestId).toBe(10)
    if (finalResponse.type === 'error') {
      expect(finalResponse.error).toContain('Invalid solver request payload')
    }
  })

  it('uses a sentinel request id for malformed null payloads', async () => {
    const { onmessage, postMessage } = await loadWorker()

    onmessage({
      data: null,
    } as MessageEvent<SolveRequest>)

    const finalResponse = getFinalResponse(postMessage)
    expect(finalResponse.type).toBe('error')
    expect(finalResponse.requestId).toBe(-1)
    if (finalResponse.type === 'error') {
      expect(finalResponse.error).toContain('Invalid solver request payload')
    }
  })

  it('suggests fallback target cuts when forced targets are unreachable', async () => {
    const { onmessage, postMessage } = await loadWorker()

    const cores: Core[] = [
      { id: 'core-1', type: 'Order of the Sun', rarity: 'Relic', targetPoints: 17 },
    ]
    const astrogems: Astrogem[] = [
      { id: 'gem-1', category: 'Order', willpower: 4, points: 3, quantity: 1 },
      { id: 'gem-2', category: 'Order', willpower: 4, points: 3, quantity: 1 },
      { id: 'gem-3', category: 'Order', willpower: 4, points: 3, quantity: 1 },
      { id: 'gem-4', category: 'Order', willpower: 3, points: 3, quantity: 1 },
    ]

    onmessage({
      data: { requestId: 2, cores, astrogems },
    } as MessageEvent<SolveRequest>)

    const finalResponse = getFinalResponse(postMessage)
    expect(finalResponse.type).toBe('error')
    if (finalResponse.type === 'error') {
      expect(finalResponse.error).toContain('No solution meets all forced targets')
      expect(finalResponse.error).toContain('Suggested target cuts')
      expect(finalResponse.error).toContain('Order of the Sun 17p -> 10p')
    }
  })

  it('keeps order and chaos cores isolated to matching gem categories', async () => {
    const { onmessage, postMessage } = await loadWorker()

    const cores: Core[] = [
      { id: 'order-core', type: 'Order of the Sun', rarity: 'Relic', targetPoints: null },
      { id: 'chaos-core', type: 'Chaos of the Moon', rarity: 'Relic', targetPoints: null },
    ]

    const astrogems: Astrogem[] = [
      { id: 'order-gem', category: 'Order', willpower: 3, points: 5, quantity: 2 },
      { id: 'chaos-gem', category: 'Chaos', willpower: 3, points: 5, quantity: 2 },
    ]

    onmessage({
      data: { requestId: 3, cores, astrogems },
    } as MessageEvent<SolveRequest>)

    const finalResponse = getFinalResponse(postMessage)
    expect(finalResponse.type).toBe('result')

    if (finalResponse.type === 'result') {
      expect(finalResponse.solutions.length).toBeGreaterThan(0)
      const best = finalResponse.solutions[0]
      expect(best).toBeDefined()

      const orderResult = best?.find((result) => result.coreId === 'order-core')
      const chaosResult = best?.find((result) => result.coreId === 'chaos-core')

      expect(orderResult).toBeDefined()
      expect(chaosResult).toBeDefined()
      expect(orderResult?.astrogems.every((gem) => gem.category === 'Order')).toBe(true)
      expect(chaosResult?.astrogems.every((gem) => gem.category === 'Chaos')).toBe(true)
    }
  })

  it('expands gem quantity into distinct assignments while retaining source identity', async () => {
    const { onmessage, postMessage } = await loadWorker()

    const cores: Core[] = [
      { id: 'core-1', type: 'Order of the Star', rarity: 'Relic', targetPoints: null },
    ]
    const astrogems: Astrogem[] = [
      { id: 'stacked-gem', category: 'Order', willpower: 3, points: 5, quantity: 2 },
    ]

    onmessage({
      data: { requestId: 4, cores, astrogems },
    } as MessageEvent<SolveRequest>)

    const finalResponse = getFinalResponse(postMessage)
    expect(finalResponse.type).toBe('result')

    if (finalResponse.type === 'result') {
      const best = finalResponse.solutions[0]
      const result = best?.[0]
      expect(result?.totalPoints).toBe(10)
      expect(result?.astrogems).toHaveLength(2)

      const sourceIds = result?.astrogems
        .map((gem) => (gem as Astrogem & { sourceId?: string }).sourceId)
        .filter((sourceId): sourceId is string => typeof sourceId === 'string')
      expect(sourceIds).toEqual(['stacked-gem', 'stacked-gem'])

      const assignedIds = result?.astrogems.map((gem) => gem.id) ?? []
      expect(new Set(assignedIds).size).toBe(2)
    }
  })
})
