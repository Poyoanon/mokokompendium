import { vi } from 'vitest'

export type FetchQuery = Record<string, unknown>

type FetchRequest = {
  query?: FetchQuery
}

type FetchMockLike = {
  mock: {
    calls: unknown[][]
  }
}

type FetchMockHandler = (
  url: string,
  query: FetchQuery,
) => Promise<unknown> | unknown | undefined

const getQuery = (request: unknown): FetchQuery => {
  if (!request || typeof request !== 'object') {
    return {}
  }

  const query = (request as FetchRequest).query
  if (!query || typeof query !== 'object') {
    return {}
  }

  return query
}

export const createD1FetchMock = (custom: FetchMockHandler) => vi.fn((url: string, request?: FetchRequest) => {
  const query = request?.query ?? {}
  const customResult = custom(url, query)
  if (customResult !== undefined) {
    return customResult
  }

  if (url === '/api/skills' && (query.all === 1 || query.all === '1')) {
    return Promise.resolve({ skills: [] })
  }

  if (url === '/api/ark-passives' && (query.all === 1 || query.all === '1')) {
    return Promise.resolve({ passives: [] })
  }

  if (url === '/api/arkgrid-cores') {
    return Promise.resolve({ cores: [] })
  }

  if (url === '/api/runes') {
    return Promise.resolve({ error: 'Rune not found' })
  }

  if (url === '/api/engravings') {
    return Promise.resolve({ name: String(query.name ?? ''), level: 0, url: null, description: null })
  }

  if (url === '/api/tripods') {
    return Promise.resolve({ error: 'Tripod not found' })
  }

  return Promise.resolve({})
})

export const wasSkillCatalogRequested = (fetchMock: FetchMockLike, classId: number) => {
  return fetchMock.mock.calls.some(([url, request]) => {
    const query = getQuery(request)
    return url === '/api/skills' && query.all === 1 && query.class_id === classId
  })
}

export const wasSkillTooltipRequested = (fetchMock: FetchMockLike, skillName: string) => {
  return fetchMock.mock.calls.some(([url, request]) => {
    const query = getQuery(request)
    return url === '/api/skills' && query.skill_name === skillName
  })
}

export const wasInlineTripodRequested = (fetchMock: FetchMockLike, tripodName: string) => {
  return fetchMock.mock.calls.some(([url, request]) => {
    const query = getQuery(request)
    return url === '/api/tripods' && query.tripod_name === tripodName
  })
}
