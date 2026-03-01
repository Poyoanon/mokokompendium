import { describe, expect, it, vi } from 'vitest'

import { withContentQueryRetry } from '../../../app/utils/content-query-retry'

describe('withContentQueryRetry', () => {
  it('retries missing content table errors until success', async () => {
    let attempts = 0

    const result = await withContentQueryRetry(async () => {
      attempts += 1
      if (attempts < 3) {
        throw new Error('no such table: _content_posts')
      }
      return 'ok'
    }, { retries: 5, delayMs: 0 })

    expect(result).toBe('ok')
    expect(attempts).toBe(3)
  })

  it('retries SQLITE_BUSY errors surfaced in a nested cause', async () => {
    let attempts = 0

    const result = await withContentQueryRetry(async () => {
      attempts += 1
      if (attempts < 2) {
        throw {
          message: 'query failed',
          cause: { message: 'SQLITE_BUSY: database is locked' },
        }
      }

      return 'ok'
    }, { retries: 3, delayMs: 0 })

    expect(result).toBe('ok')
    expect(attempts).toBe(2)
  })

  it('retries transient errors when Error.cause is a message object', async () => {
    let attempts = 0

    const result = await withContentQueryRetry(async () => {
      attempts += 1
      if (attempts < 3) {
        const error = new Error('query failed') as Error & { cause?: unknown }
        error.cause = { message: 'SQLITE_BUSY: database is locked' }
        throw error
      }

      return 'ok'
    }, { retries: 4, delayMs: 0 })

    expect(result).toBe('ok')
    expect(attempts).toBe(3)
  })

  it('retries transient errors when Error.cause is an Error', async () => {
    let attempts = 0

    const result = await withContentQueryRetry(async () => {
      attempts += 1
      if (attempts < 2) {
        throw new Error('query failed', { cause: new Error('database is locked') })
      }

      return 'ok'
    }, { retries: 3, delayMs: 0 })

    expect(result).toBe('ok')
    expect(attempts).toBe(2)
  })

  it('retries transient errors when Error.cause is a string', async () => {
    let attempts = 0

    const result = await withContentQueryRetry(async () => {
      attempts += 1
      if (attempts < 2) {
        throw new Error('query failed', { cause: 'SQLITE_BUSY: database is locked' })
      }

      return 'ok'
    }, { retries: 3, delayMs: 0 })

    expect(result).toBe('ok')
    expect(attempts).toBe(2)
  })

  it('does not retry non-transient errors', async () => {
    let attempts = 0
    const error = new Error('permission denied')

    await expect(withContentQueryRetry(async () => {
      attempts += 1
      throw error
    }, { retries: 5, delayMs: 0 })).rejects.toBe(error)

    expect(attempts).toBe(1)
  })

  it('throws after retries are exhausted for transient errors', async () => {
    let attempts = 0

    await expect(withContentQueryRetry(async () => {
      attempts += 1
      throw new Error('database is locked')
    }, { retries: 2, delayMs: 0 })).rejects.toThrow('database is locked')

    expect(attempts).toBe(3)
  })

  it('attempts only once when retries is zero', async () => {
    let attempts = 0
    const error = new Error('database is locked')

    await expect(withContentQueryRetry(async () => {
      attempts += 1
      throw error
    }, { retries: 0, delayMs: 0 })).rejects.toBe(error)

    expect(attempts).toBe(1)
  })

  it('uses linear backoff delays for retries', async () => {
    vi.useFakeTimers()

    try {
      let attempts = 0
      const runPromise = withContentQueryRetry(async () => {
        attempts += 1
        if (attempts < 4) {
          throw new Error('database is locked')
        }

        return 'ok'
      }, { retries: 4, delayMs: 100 })

      await vi.advanceTimersByTimeAsync(0)
      expect(attempts).toBe(1)

      await vi.advanceTimersByTimeAsync(99)
      expect(attempts).toBe(1)
      await vi.advanceTimersByTimeAsync(1)
      expect(attempts).toBe(2)

      await vi.advanceTimersByTimeAsync(199)
      expect(attempts).toBe(2)
      await vi.advanceTimersByTimeAsync(1)
      expect(attempts).toBe(3)

      await vi.advanceTimersByTimeAsync(299)
      expect(attempts).toBe(3)
      await vi.advanceTimersByTimeAsync(1)
      expect(attempts).toBe(4)

      await expect(runPromise).resolves.toBe('ok')
    } finally {
      vi.useRealTimers()
    }
  })

  it('rethrows the same error instance after transient retries are exhausted', async () => {
    let attempts = 0
    const error = new Error('database is locked')

    await expect(withContentQueryRetry(async () => {
      attempts += 1
      throw error
    }, { retries: 2, delayMs: 0 })).rejects.toBe(error)

    expect(attempts).toBe(3)
  })

  it('keeps retry state isolated across concurrent calls', async () => {
    let firstAttempts = 0
    let secondAttempts = 0

    const first = withContentQueryRetry(async () => {
      firstAttempts += 1
      if (firstAttempts < 2) {
        throw new Error('database is locked')
      }

      return 'first'
    }, { retries: 2, delayMs: 0 })

    const second = withContentQueryRetry(async () => {
      secondAttempts += 1
      if (secondAttempts < 3) {
        throw new Error('no such table: _content_navigation')
      }

      return 'second'
    }, { retries: 3, delayMs: 0 })

    await expect(Promise.all([first, second])).resolves.toEqual(['first', 'second'])
    expect(firstAttempts).toBe(2)
    expect(secondAttempts).toBe(3)
  })
})
