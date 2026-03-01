import type { Ref } from 'vue'

type RenderReadinessOptions = {
  guideBody: Ref<unknown>
}

const GUIDE_PROSE_SELECTOR = '.guide-page .prose'
const GUIDE_IMAGE_SELECTOR = '.prose img'
const GUIDE_CRITICAL_IMAGE_SELECTOR = '.guide-page img[src*="/api/cdn/"]'
const GUIDE_IMAGE_INIT_ATTR = 'data-mk-lazy-init'
const GUIDE_IMAGE_SRC_ATTR = 'data-mk-lazy-src'
const GUIDE_IMAGE_LOADED_CLASS = 'mk-image-loaded'
const GUIDE_CONTENT_TIMEOUT_MS = 1100
const GUIDE_SHELL_TIMEOUT_MS = 1500
const GUIDE_SHELL_POLL_MS = 80
const GUIDE_MAX_CRITICAL_IMAGES = 12

export function useRenderReadiness(options: RenderReadinessOptions) {
  const { guideBody } = options

  const isGuideShellReady = ref(false)
  const isGuideContentReady = ref(false)
  const guideImageMutationObserver = ref<MutationObserver | null>(null)

  let guideShellReadyToken = 0
  let guideContentReadyToken = 0

  const markGuideImageLoaded = (img: HTMLImageElement) => {
    img.classList.remove(GUIDE_IMAGE_LOADED_CLASS)
    requestAnimationFrame(() => {
      img.classList.add(GUIDE_IMAGE_LOADED_CLASS)
    })
  }

  const enhanceGuideImage = (img: HTMLImageElement) => {
    const src = img.getAttribute('src') ?? ''
    const isInitialized = img.getAttribute(GUIDE_IMAGE_INIT_ATTR) === '1'
    const previousSrc = img.getAttribute(GUIDE_IMAGE_SRC_ATTR) ?? ''

    if (isInitialized && previousSrc === src) return

    img.setAttribute(GUIDE_IMAGE_INIT_ATTR, '1')
    img.setAttribute(GUIDE_IMAGE_SRC_ATTR, src)

    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy')
    }

    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async')
    }

    const finalize = () => {
      markGuideImageLoaded(img)
    }

    if (img.complete) {
      finalize()
      return
    }

    img.addEventListener('load', finalize, { once: true })
    img.addEventListener('error', finalize, { once: true })
  }

  const hydrateGuideImages = (root: ParentNode = document) => {
    if (!import.meta.client) return

    const images = root.querySelectorAll<HTMLImageElement>(GUIDE_IMAGE_SELECTOR)
    for (const image of images) {
      enhanceGuideImage(image)
    }
  }

  const isElementInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect()
    return rect.bottom > 0 && rect.top < window.innerHeight
  }

  const getVisibleCriticalGuideImages = () => {
    const images = Array.from(document.querySelectorAll<HTMLImageElement>(GUIDE_CRITICAL_IMAGE_SELECTOR))
      .filter((image) => isElementInViewport(image))
      .sort((a, b) => {
        const aRect = a.getBoundingClientRect()
        const bRect = b.getBoundingClientRect()
        if (aRect.top === bRect.top) {
          return aRect.left - bRect.left
        }
        return aRect.top - bRect.top
      })

    return images.slice(0, GUIDE_MAX_CRITICAL_IMAGES)
  }

  const waitForImageReady = (img: HTMLImageElement) => {
    if (img.complete && img.naturalWidth > 0) {
      return Promise.resolve()
    }

    if (typeof img.decode === 'function') {
      return img.decode().catch(() => undefined)
    }

    return new Promise<void>((resolve) => {
      const finalize = () => {
        resolve()
      }
      img.addEventListener('load', finalize, { once: true })
      img.addEventListener('error', finalize, { once: true })
    })
  }

  const waitForNextPaint = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))

  const waitForCriticalGuideImages = async () => {
    const deadline = Date.now() + GUIDE_SHELL_TIMEOUT_MS
    let images = getVisibleCriticalGuideImages()

    while (!images.length && Date.now() < deadline) {
      await new Promise<void>((resolve) => window.setTimeout(resolve, GUIDE_SHELL_POLL_MS))
      images = getVisibleCriticalGuideImages()
    }

    if (!images.length) return

    const remainingMs = Math.max(0, deadline - Date.now())
    if (!remainingMs) return

    await Promise.race([
      Promise.all(images.map((image) => waitForImageReady(image))),
      new Promise<void>((resolve) => window.setTimeout(resolve, remainingMs)),
    ])
  }

  const refreshGuideShellReady = async () => {
    if (!import.meta.client) return

    guideShellReadyToken += 1
    const currentToken = guideShellReadyToken
    isGuideShellReady.value = false

    await nextTick()
    if (currentToken !== guideShellReadyToken) return

    await waitForCriticalGuideImages()
    if (currentToken !== guideShellReadyToken) return

    await waitForNextPaint()
    if (currentToken !== guideShellReadyToken) return

    isGuideShellReady.value = true
  }

  const waitForGuideContentReady = async () => {
    const prose = document.querySelector<HTMLElement>(GUIDE_PROSE_SELECTOR)
    if (!prose) return

    const images = Array.from(prose.querySelectorAll<HTMLImageElement>('img'))
    if (!images.length) return

    const visibleImages = images.filter((image) => isElementInViewport(image))
    if (!visibleImages.length) return

    await Promise.race([
      Promise.all(visibleImages.map((image) => waitForImageReady(image))),
      new Promise<void>((resolve) => window.setTimeout(resolve, GUIDE_CONTENT_TIMEOUT_MS)),
    ])
  }

  const refreshGuideContentReady = async () => {
    if (!import.meta.client) return

    guideContentReadyToken += 1
    const currentToken = guideContentReadyToken
    isGuideContentReady.value = false

    await nextTick()
    if (currentToken !== guideContentReadyToken) return

    await waitForGuideContentReady()
    if (currentToken !== guideContentReadyToken) return

    await waitForNextPaint()
    if (currentToken !== guideContentReadyToken) return

    isGuideContentReady.value = true
  }

  onMounted(() => {
    if (!import.meta.client) return

    nextTick(() => {
      refreshGuideShellReady()
      hydrateGuideImages()
      refreshGuideContentReady()

      const root = document.querySelector(GUIDE_PROSE_SELECTOR)
      if (!root) return

      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === 'attributes') {
            const target = mutation.target
            if (target instanceof HTMLImageElement) {
              enhanceGuideImage(target)
            }
            continue
          }

          for (const node of mutation.addedNodes) {
            if (!(node instanceof Element)) continue

            if (node instanceof HTMLImageElement) {
              enhanceGuideImage(node)
            }

            hydrateGuideImages(node)
          }
        }
      })

      observer.observe(root, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['src'],
      })

      guideImageMutationObserver.value = observer
    })
  })

  onBeforeUnmount(() => {
    guideImageMutationObserver.value?.disconnect()
    guideImageMutationObserver.value = null
  })

  watch(guideBody, () => {
    refreshGuideShellReady()
    refreshGuideContentReady()
  })

  return {
    isGuideShellReady,
    isGuideContentReady,
    hydrateGuideImages,
    refreshGuideShellReady,
  }
}
