type RetryOptions = {
  retries?: number
  delayMs?: number
}

const CONTENT_TABLE_MISSING_PATTERN = /no such table:\s*_content_/i
const CONTENT_DB_LOCKED_PATTERN = /database is locked|sql(?:ite)?_busy/i

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

const getErrorText = (error: unknown) => {
  if (!error) return ''

  if (typeof error === 'string') return error

  if (error instanceof Error) {
    const causeText = typeof error.cause === 'string'
      ? error.cause
      : error.cause instanceof Error
        ? error.cause.message
        : error.cause && typeof error.cause === 'object' && typeof (error.cause as Record<string, unknown>).message === 'string'
          ? String((error.cause as Record<string, unknown>).message)
        : ''
    return `${error.message}\n${causeText}`
  }

  if (typeof error === 'object') {
    const record = error as Record<string, unknown>
    const message = typeof record.message === 'string' ? record.message : ''
    const cause = record.cause
    const causeMessage = typeof cause === 'string'
      ? cause
      : cause && typeof cause === 'object' && typeof (cause as Record<string, unknown>).message === 'string'
        ? String((cause as Record<string, unknown>).message)
        : ''
    return `${message}\n${causeMessage}`
  }

  return ''
}

const isTransientContentTableError = (error: unknown) => {
  const errorText = getErrorText(error)
  return CONTENT_TABLE_MISSING_PATTERN.test(errorText) || CONTENT_DB_LOCKED_PATTERN.test(errorText)
}

export async function withContentQueryRetry<T>(
  run: () => Promise<T>,
  options: RetryOptions = {},
): Promise<T> {
  const retries = options.retries ?? 6
  const delayMs = options.delayMs ?? 250

  let lastError: unknown

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await run()
    } catch (error) {
      lastError = error
      if (!isTransientContentTableError(error) || attempt === retries) {
        throw error
      }

      await sleep(delayMs * (attempt + 1))
    }
  }

  throw lastError
}
