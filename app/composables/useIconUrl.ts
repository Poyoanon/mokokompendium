interface IconResult {
  url: string | null
  tier?: number
  isTripod: boolean
  matches?: Array<{ filename: string; url: string; description: string; tier?: number; isTripod: boolean }>
}

interface BatchIconResult {
  [name: string]: string | null
}

const CDN_PROXY_BASE_URL = '/api/cdn/efui_iconatlas'

// Composable for fetching Lost Ark CDN icon URLs
export function useIconUrl() {
  const cache = new Map<string, string | null>()

  // Get icon URL for a single name (skill, item, passive, etc.)
  async function getIconUrl(name: string): Promise<string | null> {
    if (cache.has(name)) {
      return cache.get(name)!
    }

    try {
      const data = await $fetch<IconResult>('/api/icons', {
        query: { name }
      })
      cache.set(name, data.url)
      return data.url
    } catch {
      cache.set(name, null)
      return null
    }
  }

  // Get icon URLs for multiple names at once (more efficient)
  async function getIconUrls(names: string[]): Promise<BatchIconResult> {
    // Check cache first
    const uncached = names.filter(n => !cache.has(n))

    if (uncached.length > 0) {
      try {
        const data = await $fetch<BatchIconResult>('/api/icons', {
          query: { names: uncached.join(',') }
        })

        // Update cache
        for (const [name, url] of Object.entries(data)) {
          cache.set(name, url)
        }
      } catch {
        // On error, set all to null
        for (const name of uncached) {
          cache.set(name, null)
        }
      }
    }

    // Return results from cache
    const result: BatchIconResult = {}
    for (const name of names) {
      result[name] = cache.get(name) ?? null
    }
    return result
  }

  // Search for icons by partial name (includes tier info for tripods)
  async function searchIcons(query: string, limit = 20) {
    return await $fetch<Array<{ filename: string; url: string; description: string; tier?: number; isTripod: boolean }>>('/api/icons', {
      query: { search: query, limit }
    })
  }

  // Get full icon info including tier data for a single name
  // @param name - Icon/skill/tripod name
  // @param tier - Optional tier number (1, 2, or 3) to filter tripod results
  // @param classContext - Optional class name (e.g., "Summoner") for disambiguation
  async function getIconInfo(name: string, tier?: number, classContext?: string): Promise<IconResult | null> {
    try {
      const data = await $fetch<IconResult>('/api/icons', {
        query: {
          name,
          ...(tier && { tier }),
          ...(classContext && { class: classContext })
        }
      })
      return data
    } catch {
      return null
    }
  }

  // Clear the cache.
  function clearCache() {
    cache.clear()
  }

  // Build tripod icon URL directly from tier and index.
  // tier is tripod tier (1-3), index is icon index.
  // Example: getTripodUrl(3, 58) -> tripod_tier_3_58.png
  function getTripodUrl(tier: number, index: number): string {
    const filename = `tripod_tier_${tier}_${index}.png`
    const folder = 'tripod_tier'
    return `${CDN_PROXY_BASE_URL}/${folder}/${filename}`
  }

  return {
    getIconUrl,
    getIconUrls,
    getIconInfo,
    searchIcons,
    getTripodUrl,
    clearCache
  }
}
