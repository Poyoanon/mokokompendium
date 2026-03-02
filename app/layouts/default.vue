<script setup lang="ts">
const route = useRoute()
const githubRepositoryUrl = 'https://github.com/Poyoanon/mokokompendium'

const navigation = [
  { label: 'Home', to: '/', icon: 'i-lucide-home' },
  { label: 'Guides', to: '/guides', icon: 'i-lucide-book-open' },
  { label: 'Tools', to: '/tools', icon: 'i-lucide-wrench' },
]
</script>

<template>
  <div class="site-shell">
    <!-- Header -->
    <header class="site-header sticky top-0 z-50">
      <div class="site-header-inner">
        <div class="site-header-row">
          <div class="site-header-slot-start min-w-0">
            <NuxtLink to="/" class="flex items-center gap-2.5 group">
              <img
                src="/icon.png"
                alt="Mokokompendium logo"
                class="size-7 rounded-md bg-zinc-900/70 object-cover shrink-0"
              >
              <span class="site-brand-wordmark hidden sm:inline text-base sm:text-lg font-bold tracking-tight whitespace-nowrap">
                Mokokompendium
              </span>
            </NuxtLink>
          </div>

          <div class="site-header-slot-end">
            <nav class="site-nav">
              <NuxtLink
                v-for="item in navigation"
                :key="item.to"
                :to="item.to"
                class="site-nav-link text-sm"
                :class="route.path === item.to || (item.to !== '/' && route.path.startsWith(item.to)) ? 'is-active' : ''"
              >
                <UIcon :name="item.icon" class="size-4" />
                {{ item.label }}
              </NuxtLink>
            </nav>

            <a
              :href="githubRepositoryUrl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Mokokompendium GitHub repository"
              class="site-nav-link site-github-link text-sm"
            >
              <UIcon name="i-lucide-github" class="size-4" />
              <span class="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="relative">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="site-footer py-6 mt-12">
      <UContainer>
        <p class="text-center text-xs">
          Mokokompendium &middot; Not affiliated with Smilegate or Amazon Games
        </p>
      </UContainer>
    </footer>
  </div>
</template>
