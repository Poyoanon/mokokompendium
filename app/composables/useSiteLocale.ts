import {
  DEFAULT_TOOLTIP_LOCALE,
  normalizeTooltipLocale,
  type SupportedTooltipLocale,
} from '~/utils/tooltip-locale'

type SetSiteLocaleOptions = {
  syncQuery?: boolean
}

const STORAGE_KEY = 'mk-site-locale'

export const useSiteLocale = () => {
  const route = useRoute()
  const router = useRouter()

  const locale = useState<SupportedTooltipLocale>(
    'mk-site-locale',
    () => DEFAULT_TOOLTIP_LOCALE,
  )

  const normalizeRouteLocale = () => {
    if (typeof route.query.locale === 'string') {
      return normalizeTooltipLocale(route.query.locale)
    }
    if (typeof route.query.lang === 'string') {
      return normalizeTooltipLocale(route.query.lang)
    }
    return null
  }

  const syncQueryLocale = async (nextLocale: SupportedTooltipLocale) => {
    const query = { ...route.query }
    query.locale = nextLocale
    if ('lang' in query) {
      delete query.lang
    }
    await router.replace({ query })
  }

  const setLocale = async (value: unknown, options: SetSiteLocaleOptions = {}) => {
    const normalized = normalizeTooltipLocale(value)
    const hasChanged = locale.value !== normalized
    locale.value = normalized

    const routeLocaleValue = typeof route.query.locale === 'string'
      ? route.query.locale
      : null
    const hasLegacyLangQuery = typeof route.query.lang === 'string'

    if (
      options.syncQuery
      && import.meta.client
      && (routeLocaleValue !== normalized || hasLegacyLangQuery)
    ) {
      await syncQueryLocale(normalized)
    }

    if (hasChanged && import.meta.client) {
      window.localStorage.setItem(STORAGE_KEY, normalized)
    }
  }

  watch(
    () => [route.query.locale, route.query.lang],
    () => {
      const routeLocale = normalizeRouteLocale()
      if (!routeLocale || routeLocale === locale.value) {
        return
      }
      locale.value = routeLocale
      if (import.meta.client) {
        window.localStorage.setItem(STORAGE_KEY, routeLocale)
      }
    },
    { immediate: true },
  )

  if (import.meta.client) {
    onMounted(() => {
      const routeLocale = normalizeRouteLocale()
      if (routeLocale) {
        locale.value = routeLocale
        window.localStorage.setItem(STORAGE_KEY, routeLocale)
        return
      }

      const storedLocale = window.localStorage.getItem(STORAGE_KEY)
      if (!storedLocale) {
        return
      }

      const normalizedStoredLocale = normalizeTooltipLocale(storedLocale)
      if (normalizedStoredLocale === locale.value) {
        return
      }

      locale.value = normalizedStoredLocale
    })
  }

  return {
    locale,
    setLocale,
  }
}
