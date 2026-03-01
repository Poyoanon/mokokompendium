import type {
  Core,
  Astrogem,
  SolverResult,
  SolverProgress,
  SolveRequest,
  SolveWorkerResponse
} from '~/types/arkgrid-solver'

let worker: Worker | null = null
let requestIdCounter = 0

type PendingRequest = {
  resolve: (solutions: SolverResult[][]) => void
  reject: (error: Error) => void
  onProgress?: (progress: SolverProgress) => void
}

const pendingRequests = new Map<number, PendingRequest>()

const rejectAllPendingRequests = (message: string) => {
  if (!pendingRequests.size) {
    return
  }

  const pendingEntries = [...pendingRequests.values()]
  pendingRequests.clear()
  for (const pending of pendingEntries) {
    pending.reject(new Error(message))
  }
}

function ensureWorker() {
  if (typeof window === 'undefined') {
    return null
  }

  if (!worker) {
    worker = new Worker(new URL('../workers/ark-grid-solver.worker.ts', import.meta.url), {
      type: 'module'
    })

    worker.addEventListener('message', (event: MessageEvent<SolveWorkerResponse>) => {
      const payload = event.data
      const pending = pendingRequests.get(payload.requestId)
      if (!pending) {
        return
      }

      if (payload.type === 'progress') {
        pending.onProgress?.(payload.progress)
        return
      }

      pendingRequests.delete(payload.requestId)

      if (payload.type === 'result') {
        pending.resolve(payload.solutions)
        return
      }

      pending.reject(new Error(payload.error))
    })

    worker.addEventListener('error', (event) => {
      rejectAllPendingRequests(event.message || 'Ark Grid worker failed')
    })
  }

  return worker
}

export function solveArkGridAsync(
  cores: Core[],
  astrogems: Astrogem[],
  onProgress?: (progress: SolverProgress) => void
): Promise<SolverResult[][]> {
  if (!cores.length || !astrogems.length) {
    return Promise.resolve([])
  }

  const solverWorker = ensureWorker()
  if (!solverWorker) {
    return Promise.resolve([])
  }

  const requestId = ++requestIdCounter
  const request: SolveRequest = {
    requestId,
    cores,
    astrogems
  }

  return new Promise((resolve, reject) => {
    pendingRequests.set(requestId, {
      resolve,
      reject,
      onProgress
    })

    solverWorker.postMessage(request)
  })
}

export function disposeArkGridSolverWorker() {
  if (worker) {
    worker.terminate()
    worker = null
  }

  rejectAllPendingRequests('Ark Grid solver worker disposed')
}
