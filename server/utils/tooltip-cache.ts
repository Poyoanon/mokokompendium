import { defineEventHandler, getRequestURL, getResponseStatus, type H3Event } from 'h3'

type EdgeCache = {
  match: (key: Request) => Promise<Response | undefined>
  put: (key: Request, value: Response) => Promise<void>
}

// Cache public tooltip JSON at the edge, not only in individual browsers.
// Include the full query (class, name, level, locale) to keep variants isolated.
export const defineTooltipEventHandler = (handler: (event: H3Event) => Promise<unknown>) =>
  defineEventHandler(async (event) => {
    const cache = (globalThis as unknown as { caches?: { default?: EdgeCache } }).caches?.default
    if (import.meta.dev || event.method !== 'GET' || !cache) return handler(event)

    const url = getRequestURL(event)
    url.searchParams.set('_tooltip_revision', '2026-09-10')
    const key = new Request(url, { method: 'GET' })
    const cached = await cache.match(key).catch(() => undefined)
    if (cached) return cached

    const result = await handler(event)
    if (getResponseStatus(event) !== 200 || !result || typeof result !== 'object' || 'error' in result) {
      return result
    }
    const response = new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=86400' },
    })
    const write = cache.put(key, response).catch(() => {})
    if (typeof event.waitUntil === 'function') event.waitUntil(write)
    else await write
    return result
  })
