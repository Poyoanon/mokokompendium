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

const benchmarkCores: Core[] = [
  { id: 'order-sun', type: 'Order of the Sun', rarity: 'Ancient', targetPoints: 14 },
  { id: 'order-moon', type: 'Order of the Moon', rarity: 'Relic', targetPoints: 14 },
  { id: 'order-star', type: 'Order of the Star', rarity: 'Relic', targetPoints: null },
  { id: 'chaos-sun', type: 'Chaos of the Sun', rarity: 'Ancient', targetPoints: 14 },
  { id: 'chaos-moon', type: 'Chaos of the Moon', rarity: 'Relic', targetPoints: 10 },
  { id: 'chaos-star', type: 'Chaos of the Star', rarity: 'Relic', targetPoints: null },
]

const benchmarkAstrogems: Astrogem[] = [
  { id: 'o1', category: 'Order', willpower: 3, points: 5, quantity: 2 },
  { id: 'o2', category: 'Order', willpower: 4, points: 4, quantity: 2 },
  { id: 'o3', category: 'Order', willpower: 2, points: 3, quantity: 3 },
  { id: 'o4', category: 'Order', willpower: 5, points: 5, quantity: 1 },
  { id: 'o5', category: 'Order', willpower: 3, points: 2, quantity: 3 },
  { id: 'c1', category: 'Chaos', willpower: 3, points: 5, quantity: 2 },
  { id: 'c2', category: 'Chaos', willpower: 4, points: 4, quantity: 2 },
  { id: 'c3', category: 'Chaos', willpower: 2, points: 3, quantity: 3 },
  { id: 'c4', category: 'Chaos', willpower: 5, points: 5, quantity: 1 },
  { id: 'c5', category: 'Chaos', willpower: 3, points: 2, quantity: 3 },
]

describe('ark-grid-solver.worker benchmark', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('solves a representative high-load input with stable results', async () => {
    const firstRun = await loadWorker()
    const firstRequestId = 501
    const firstStart = performance.now()
    firstRun.onmessage({
      data: {
        requestId: firstRequestId,
        cores: benchmarkCores,
        astrogems: benchmarkAstrogems,
      },
    } as MessageEvent<SolveRequest>)
    const firstElapsedMs = performance.now() - firstStart
    const firstFinal = getFinalResponse(firstRun.postMessage)

    expect(firstFinal.type).toBe('result')
    if (firstFinal.type !== 'result') return
    expect(firstFinal.solutions.length).toBeGreaterThan(0)
    expect(firstElapsedMs).toBeLessThan(8000)

    vi.resetModules()
    vi.unstubAllGlobals()

    const secondRun = await loadWorker()
    const secondRequestId = 502
    secondRun.onmessage({
      data: {
        requestId: secondRequestId,
        cores: benchmarkCores,
        astrogems: benchmarkAstrogems,
      },
    } as MessageEvent<SolveRequest>)
    const secondFinal = getFinalResponse(secondRun.postMessage)

    expect(secondFinal.type).toBe('result')
    if (secondFinal.type !== 'result') return

    // Deterministic ordering of top solutions helps keep UX stable.
    expect(secondFinal.solutions).toEqual(firstFinal.solutions)
  }, 15000)
})
