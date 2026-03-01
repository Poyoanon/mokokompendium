// https://nuxt.com/docs/api/configuration/nuxt-config
const CDN_HOST = 'https://cdn-lostark.game.onstove.com'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/fonts',
    'nitro-cloudflare-dev',
  ],

  eslint: {
    config: {
      typescript: true,
    },
  },

  // Font configuration
  fonts: {
    families: [
      { name: 'IBM Plex Sans', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Space Grotesk', provider: 'google', weights: [500, 600, 700] },
    ],
  },

  css: ['~/assets/css/main.css'],

  // Cloudflare Pages deployment with D1 support
  nitro: {
    preset: 'cloudflare-pages',
  },

  // Content module configuration
  content: {
    // Use D1 database for Cloudflare deployment
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
    // Use native SQLite during build (Node.js 22.5+)
    experimental: {
      nativeSqlite: true,
    },
    // Enable syntax highlighting for code blocks
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: ['json', 'yaml', 'markdown'],
        },
      },
    },
  },

  // UI configuration - dark mode by default for gaming site
  colorMode: {
    preference: 'dark',
  },

  // App metadata
  app: {
    head: {
      title: 'Mokokompendium - Lost Ark Guides',
      meta: [
        { name: 'description', content: 'Comprehensive Lost Ark class guides and resources' },
      ],
      link: [
        { rel: 'preconnect', href: CDN_HOST, crossorigin: '' },
        { rel: 'dns-prefetch', href: CDN_HOST },
      ],
    },
  },
})
