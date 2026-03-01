import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

type MessageHandler = (event: { data: unknown }) => void
type ErrorHandler = (event: { message?: string }) => void

class MockWorker {
  static instances: MockWorker[] = []

  postedMessages: unknown[] = []
  terminated = false
  private messageHandlers: MessageHandler[] = []
  private errorHandlers: ErrorHandler[] = []

  constructor(_url: URL, _options: { type: 'module' }) {
    MockWorker.instances.push(this)
  }

  addEventListener(type: string, handler: MessageHandler | ErrorHandler) {
    if (type === 'message') {
      this.messageHandlers.push(handler as MessageHandler)
      return
    }

    if (type === 'error') {
      this.errorHandlers.push(handler as ErrorHandler)
    }
  }

  postMessage(payload: unknown) {
    this.postedMessages.push(payload)
  }

  terminate() {
    this.terminated = true
  }

  emitMessage(payload: unknown) {
    for (const handler of this.messageHandlers) {
      handler({ data: payload })
    }
  }

  emitError(message: string) {
    for (const handler of this.errorHandlers) {
      handler({ message })
    }
  }
}

const sampleCores = [
  {
    id: 'core-1',
    type: 'Order of the Sun',
    rarity: 'Relic',
    targetPoints: null,
  },
]

const sampleAstrogems = [
  {
    id: 'gem-1',
    category: 'Order',
    willpower: 3,
    points: 1,
    quantity: 1,
  },
]

describe('useArkGridSolver', () => {
  beforeEach(() => {
    vi.resetModules()
    MockWorker.instances = []
  })

  afterEach(async () => {
    try {
      const solver = await import('../../../app/composables/useArkGridSolver')
      solver.disposeArkGridSolverWorker()
    } catch {
      // Module may fail to load in a given test case.
    }
    vi.unstubAllGlobals()
  })

  it('maps out-of-order worker responses to the correct pending request', async () => {
    vi.stubGlobal('window', {})
    vi.stubGlobal('Worker', MockWorker)

    const { solveArkGridAsync } = await import('../../../app/composables/useArkGridSolver')

    const first = solveArkGridAsync(sampleCores as any, sampleAstrogems as any)
    const second = solveArkGridAsync(sampleCores as any, sampleAstrogems as any)

    const worker = MockWorker.instances[0]
    expect(worker).toBeDefined()
    expect(worker?.postedMessages).toHaveLength(2)

    worker?.emitMessage({ type: 'result', requestId: 2, solutions: [['second']] })
    await expect(second).resolves.toEqual([['second']])

    let firstSettled = false
    void first.finally(() => {
      firstSettled = true
    })
    await Promise.resolve()
    expect(firstSettled).toBe(false)

    worker?.emitMessage({ type: 'result', requestId: 1, solutions: [['first']] })
    await expect(first).resolves.toEqual([['first']])
  })

  it('forwards progress events only to the matching request callback', async () => {
    vi.stubGlobal('window', {})
    vi.stubGlobal('Worker', MockWorker)

    const { solveArkGridAsync } = await import('../../../app/composables/useArkGridSolver')
    const onProgress = vi.fn()

    const pending = solveArkGridAsync(sampleCores as any, sampleAstrogems as any, onProgress)
    const worker = MockWorker.instances[0]

    worker?.emitMessage({
      type: 'progress',
      requestId: 999,
      progress: { phase: 'search', message: 'wrong request' },
    })
    worker?.emitMessage({
      type: 'progress',
      requestId: 1,
      progress: { phase: 'search', message: 'working', statesExplored: 20 },
    })

    expect(onProgress).toHaveBeenCalledTimes(1)
    expect(onProgress).toHaveBeenCalledWith({
      phase: 'search',
      message: 'working',
      statesExplored: 20,
    })

    worker?.emitMessage({ type: 'result', requestId: 1, solutions: [['done']] })
    await expect(pending).resolves.toEqual([['done']])
  })

  it('rejects all pending requests when the worker emits an error', async () => {
    vi.stubGlobal('window', {})
    vi.stubGlobal('Worker', MockWorker)

    const { solveArkGridAsync } = await import('../../../app/composables/useArkGridSolver')

    const first = solveArkGridAsync(sampleCores as any, sampleAstrogems as any)
    const second = solveArkGridAsync(sampleCores as any, sampleAstrogems as any)

    const worker = MockWorker.instances[0]
    worker?.emitError('worker exploded')

    await expect(first).rejects.toThrow('worker exploded')
    await expect(second).rejects.toThrow('worker exploded')
  })

  it('uses a fallback error message when worker error payload is empty', async () => {
    vi.stubGlobal('window', {})
    vi.stubGlobal('Worker', MockWorker)

    const { solveArkGridAsync } = await import('../../../app/composables/useArkGridSolver')

    const pending = solveArkGridAsync(sampleCores as any, sampleAstrogems as any)
    const worker = MockWorker.instances[0]
    worker?.emitError('')

    await expect(pending).rejects.toThrow('Ark Grid worker failed')
  })

  it('rejects matching requests on unknown worker response types', async () => {
    vi.stubGlobal('window', {})
    vi.stubGlobal('Worker', MockWorker)

    const { solveArkGridAsync } = await import('../../../app/composables/useArkGridSolver')

    const pending = solveArkGridAsync(sampleCores as any, sampleAstrogems as any)
    const worker = MockWorker.instances[0]
    worker?.emitMessage({ type: 'unexpected', requestId: 1, error: 'unknown worker response' } as any)

    await expect(pending).rejects.toThrow('unknown worker response')
  })

  it('ignores malformed worker messages without a request id', async () => {
    vi.stubGlobal('window', {})
    vi.stubGlobal('Worker', MockWorker)

    const { solveArkGridAsync } = await import('../../../app/composables/useArkGridSolver')

    const pending = solveArkGridAsync(sampleCores as any, sampleAstrogems as any)
    const worker = MockWorker.instances[0]
    worker?.emitMessage({ type: 'result', solutions: [['wrong-request-shape']] } as any)

    let settled = false
    void pending.finally(() => {
      settled = true
    })
    await Promise.resolve()
    expect(settled).toBe(false)

    worker?.emitMessage({ type: 'result', requestId: 1, solutions: [['correct']] })
    await expect(pending).resolves.toEqual([['correct']])
  })

  it('rejects pending requests during dispose and recreates worker for new requests', async () => {
    vi.stubGlobal('window', {})
    vi.stubGlobal('Worker', MockWorker)

    const { disposeArkGridSolverWorker, solveArkGridAsync } = await import('../../../app/composables/useArkGridSolver')

    const first = solveArkGridAsync(sampleCores as any, sampleAstrogems as any)
    const firstWorker = MockWorker.instances[0]

    disposeArkGridSolverWorker()

    await expect(first).rejects.toThrow('Ark Grid solver worker disposed')
    expect(firstWorker?.terminated).toBe(true)

    const second = solveArkGridAsync(sampleCores as any, sampleAstrogems as any)
    const secondWorker = MockWorker.instances[1]
    expect(secondWorker).toBeDefined()

    secondWorker?.emitMessage({ type: 'result', requestId: 2, solutions: [['new-worker']] })
    await expect(second).resolves.toEqual([['new-worker']])
  })

  it('returns an empty result set during SSR where window is unavailable', async () => {
    const { solveArkGridAsync } = await import('../../../app/composables/useArkGridSolver')

    await expect(solveArkGridAsync(sampleCores as any, sampleAstrogems as any)).resolves.toEqual([])
    expect(MockWorker.instances).toHaveLength(0)
  })
})
