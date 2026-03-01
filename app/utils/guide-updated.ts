import { GUIDE_UPDATED_BY_PATH } from '~/generated/guide-updated'

type GuideWithUpdatedMeta = {
  path?: string | null
  lastUpdated?: string | null
  meta?: Record<string, unknown> | null
}

const normalizeDateString = (value: unknown): string => {
  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
      return trimmed
    }

    const parsed = new Date(trimmed)
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10)
    }
  }

  if (typeof value === 'number') {
    const parsed = new Date(value)
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10)
    }
  }

  return ''
}

export function getGuideUpdatedDate(guide?: GuideWithUpdatedMeta | null): string {
  const path = typeof guide?.path === 'string' ? guide.path : ''
  if (path && GUIDE_UPDATED_BY_PATH[path]) {
    return GUIDE_UPDATED_BY_PATH[path]
  }

  const meta = guide?.meta
  if (meta && typeof meta === 'object') {
    const metaDate = normalizeDateString(
      meta.updatedAt
      ?? meta.lastModified
      ?? meta.lastUpdated
      ?? meta.mtime,
    )
    if (metaDate) {
      return metaDate
    }
  }

  return normalizeDateString(guide?.lastUpdated)
}
