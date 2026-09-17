import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineTooltipEventHandler } from '../../../server/utils/tooltip-cache'
vi.mock('h3', () => ({
  defineEventHandler: (handler: unknown) => handler,
  getRequestURL: (event: { url: string }) => new URL(event.url),
  getResponseStatus: () => 200,
}))

afterEach(() => vi.unstubAllGlobals())

describe('public tooltip edge cache', () => {
  it('reuses successful responses and separates class and level queries', async () => {
    const entries = new Map<string, Response>()
    vi.stubGlobal('caches', { default: {
      match: vi.fn(async (key: Request) => entries.get(key.url)?.clone()),
      put: vi.fn(async (key: Request, response: Response) => { entries.set(key.url, response.clone()) }),
    } })
    const query = vi.fn(async () => ({ url: '/icon.png', description: 'Tooltip' }))
    const handler = defineTooltipEventHandler(query)
    const event = { method: 'GET', url: 'https://site.test/api/skills?class_id=103&level=14' } as any
    await handler(event)
    await handler(event)
    expect(query).toHaveBeenCalledTimes(1)
    await handler({ ...event, url: 'https://site.test/api/skills?class_id=103&level=1' })
    expect(query).toHaveBeenCalledTimes(2)
  })
  it('never caches failed lookups or database errors', async () => {
    const put = vi.fn()
    vi.stubGlobal('caches', { default: { match: vi.fn(async () => undefined), put } })
    const event = { method: 'GET', url: 'https://site.test/api/tripods' } as any
    await defineTooltipEventHandler(async () => ({ error: 'Tripod not found' }))(event)
    await expect(defineTooltipEventHandler(async () => { throw new Error('Quota exceeded') })(event)).rejects.toThrow('Quota exceeded')
    expect(put).not.toHaveBeenCalled()
  })
})
