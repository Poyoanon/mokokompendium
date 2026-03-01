const CDN_HOST = 'https://cdn-lostark.game.onstove.com'
const CACHE_TTL_SECONDS = 60 * 60 * 24 * 7
const STALE_TTL_SECONDS = 60 * 60 * 24
const ALLOWED_CDN_PATH_PATTERN = /^efui_iconatlas\/(?!.*\/\/)(?!.*\.\.)[a-z0-9/_-]+\.png$/i

type CacheLike = {
  match: (request: Request) => Promise<Response | undefined>
  put: (request: Request, response: Response) => Promise<void>
}

export default defineEventHandler(async (event) => {
  const rawPath = event.context.params?.path

  if (!rawPath || Array.isArray(rawPath)) {
    throw createError({ statusCode: 400, statusMessage: 'Missing CDN path' })
  }

  const normalizedPath = rawPath.replace(/^\/+/, '')
  if (!ALLOWED_CDN_PATH_PATTERN.test(normalizedPath)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid CDN path' })
  }

  const targetUrl = `${CDN_HOST}/${normalizedPath}`
  const cache = (globalThis as unknown as { caches?: { default?: CacheLike } }).caches?.default
  const cacheKey = new Request(targetUrl, { method: 'GET' })

  if (cache) {
    const cached = await cache.match(cacheKey)
    if (cached) {
      return cached
    }
  }

  const response = await fetch(targetUrl, {
    headers: {
      Accept: getRequestHeader(event, 'accept') ?? '*/*'
    }
  })

  if (!response.ok) {
    return response
  }

  const cachedResponse = new Response(response.body, response)
  cachedResponse.headers.set(
    'Cache-Control',
    `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}, stale-while-revalidate=${STALE_TTL_SECONDS}, immutable`
  )

  if (cache) {
    const cachePromise = cache.put(cacheKey, cachedResponse.clone())
    if (typeof event.waitUntil === 'function') {
      event.waitUntil(cachePromise)
    } else {
      await cachePromise
    }
  }

  return cachedResponse
})
