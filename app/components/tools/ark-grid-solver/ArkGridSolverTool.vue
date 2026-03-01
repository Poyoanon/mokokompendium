<script setup lang="ts">
import type { CoreRarity, CoreType } from '~/types/arkgrid-solver'
import { useArkGridSolverPage } from '~/composables/tools/useArkGridSolverPage'

const {
  CORE_TYPES,
  CORE_RARITIES,
  MAX_SOLVER_SOLUTIONS,
  getCoreTargetOptions,
  characters,
  activeCharacterId,
  activeCharacter,
  cores,
  astrogems,
  allSolutions,
  selectedSolutionIndex,
  showResults,
  solverErrorMessage,
  isCalculating,
  solverProgress,
  elapsedSeconds,
  astrogemFilter,
  sortMode,
  sortDirection,
  showAddCharacter,
  newCharacterName,
  isEditingCharacterName,
  editedCharacterName,
  showDeleteCharacterConfirm,
  addCharacter,
  startEditingCharacterName,
  saveCharacterName,
  deleteActiveCharacter,
  addCore,
  removeCore,
  updateCoreType,
  updateCoreRarity,
  parseCoreTargetPoints,
  updateCoreTargetPoints,
  addAstrogem,
  removeAstrogem,
  updateAstrogem,
  toggleSort,
  sortedAstrogems,
  orderAstrogems,
  chaosAstrogems,
  selectSolution,
  getResultForCore,
  getCoreIcon,
  getCoreAccentClass,
  getCoreResultBreakpoints,
  totalScore,
  maxPossibleScore,
  canCalculate,
  summary,
  calculate,
  resetAll,
} = useArkGridSolverPage()
</script>

<template>
  <div class="py-8 md:py-10 mk-tools-tone">
    <UContainer class="max-w-6xl">
      <header class="mb-6">
        <p class="mk-eyebrow mb-2">Tools</p>
        <h1 class="text-3xl md:text-4xl font-bold mb-3">Ark Grid Solver</h1>
        <p class="text-zinc-400 max-w-3xl">
          Optimize astrogem assignments for your cores.
        </p>
      </header>

      <section class="mk-card p-5 md:p-6 mb-5">
        <div class="flex items-center justify-between gap-3 flex-wrap">
          <h2 class="text-xl font-semibold flex items-center gap-2">
            <UIcon name="i-lucide-users" class="size-5" />
            Characters
          </h2>
          <button
            type="button"
            class="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-300 px-3 py-1.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-amber-200"
            @click="showAddCharacter = true"
          >
            <UIcon name="i-lucide-plus" class="size-4" />
            Add Character
          </button>
        </div>

        <div class="mt-3 flex flex-wrap items-center gap-2">
          <button
            v-for="character in characters"
            :key="character.id"
            type="button"
            class="rounded-full border px-3 py-1.5 text-sm transition-colors"
            :class="character.id === activeCharacterId ? 'border-amber-300 bg-amber-300 text-zinc-900 font-medium' : 'border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800/60'"
            @click="activeCharacterId = character.id"
          >
            {{ character.name }}
          </button>
        </div>

        <div v-if="activeCharacter" class="mt-3 flex flex-wrap items-center gap-2">
          <template v-if="isEditingCharacterName">
            <input
              v-model="editedCharacterName"
              type="text"
              class="w-56 rounded-lg border border-zinc-700/80 bg-zinc-800/80 px-3 py-1.5 text-sm"
              placeholder="Character name"
              @keyup.enter="saveCharacterName"
            >
            <UButton size="xs" icon="i-lucide-check" color="warning" variant="ghost" class="rounded-full hover:bg-amber-300/30" @click="saveCharacterName" />
            <UButton size="xs" icon="i-lucide-x" color="neutral" variant="ghost" class="rounded-full hover:bg-zinc-700/60" @click="isEditingCharacterName = false" />
          </template>
          <template v-else>
            <UButton size="xs" icon="i-lucide-pencil" color="neutral" variant="ghost" class="rounded-full hover:bg-amber-300/30 hover:text-amber-100" @click="startEditingCharacterName" />
            <UButton
              v-if="characters.length > 1"
              size="xs"
              icon="i-lucide-trash-2"
              color="error"
              variant="ghost"
              class="rounded-full hover:bg-red-500/15"
              @click="showDeleteCharacterConfirm = true"
            />
          </template>
        </div>

        <div v-if="showAddCharacter" class="mt-4 rounded-xl border border-zinc-700/70 bg-zinc-900/70 p-3">
          <p class="mk-mini-label text-zinc-500 mb-2">New Character</p>
          <div class="flex flex-wrap items-center gap-2">
            <input
              v-model="newCharacterName"
              type="text"
              class="w-64 rounded-lg border border-zinc-700/80 bg-zinc-800/80 px-3 py-1.5 text-sm"
              placeholder="Character name"
              @keyup.enter="addCharacter"
            >
            <UButton size="sm" icon="i-lucide-check" color="warning" class="rounded-full !bg-amber-300 !text-zinc-900 hover:!bg-amber-200" @click="addCharacter">Create</UButton>
            <UButton size="sm" color="neutral" variant="outline" class="rounded-full hover:bg-zinc-700/40" @click="showAddCharacter = false">Cancel</UButton>
          </div>
        </div>

        <div v-if="showDeleteCharacterConfirm" class="mt-3 rounded-xl border border-red-600/60 bg-red-950/30 p-3">
          <p class="text-sm text-red-200 mb-2">Delete this character and all of its cores/astrogems?</p>
          <div class="flex items-center gap-2">
            <UButton size="sm" color="error" icon="i-lucide-trash-2" class="rounded-full" @click="deleteActiveCharacter">Delete</UButton>
            <UButton size="sm" color="neutral" variant="outline" class="rounded-full hover:bg-zinc-700/40" @click="showDeleteCharacterConfirm = false">Cancel</UButton>
          </div>
        </div>
      </section>

      <section class="mk-card p-5 md:p-6 mb-5">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="mk-eyebrow mb-1">Workflow</p>
            <p class="text-sm text-zinc-400">Set cores, add astrogems, then calculate the best assignment. Data is saved locally in your browser.</p>
          </div>
          <div class="grid w-full grid-cols-1 gap-2 sm:flex sm:w-auto sm:items-center">
            <UButton icon="i-lucide-calculator" color="warning" class="w-full justify-center rounded-full !bg-amber-300 !text-zinc-900 hover:!bg-amber-200 sm:w-auto" :loading="isCalculating" :disabled="!canCalculate" @click="calculate">
              <span class="sm:hidden">{{ isCalculating ? 'Calculating...' : 'Calculate' }}</span>
              <span class="hidden sm:inline">{{ isCalculating ? 'Calculating...' : 'Calculate Optimal Assignment' }}</span>
            </UButton>
            <UButton color="neutral" variant="outline" icon="i-lucide-refresh-cw" class="w-full justify-center rounded-full hover:bg-zinc-700/40 sm:w-auto" :disabled="isCalculating" @click="resetAll">
              Reset
            </UButton>
          </div>
        </div>

        <div v-if="isCalculating" class="mt-4 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3">
          <div class="flex items-center gap-2 text-amber-200">
            <UIcon name="i-lucide-loader-2" class="size-4 animate-spin" />
            <span class="text-sm font-medium">{{ solverProgress?.message ?? 'Calculating...' }}</span>
            <span v-if="solverProgress?.percent !== undefined" class="text-xs text-amber-300">{{ solverProgress.percent }}%</span>
          </div>
          <p class="text-xs text-amber-300/90 mt-1">
            {{ elapsedSeconds }}s elapsed<span v-if="solverProgress?.statesExplored"> · {{ solverProgress.statesExplored.toLocaleString() }} states explored</span>
          </p>
        </div>

        <div v-if="solverErrorMessage && !isCalculating" class="mt-4 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3">
          <div class="flex items-start gap-2 text-red-200">
            <UIcon name="i-lucide-triangle-alert" class="mt-0.5 size-4 shrink-0" />
            <p class="text-sm whitespace-pre-line">{{ solverErrorMessage }}</p>
          </div>
        </div>
      </section>

      <section class="grid gap-5 lg:grid-cols-2">
        <div class="mk-card p-5 md:p-6 space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">Cores</h2>
            <UButton size="sm" icon="i-lucide-plus" color="warning" class="rounded-full !bg-amber-300 !text-zinc-900 hover:!bg-amber-200" :disabled="cores.length >= 6" @click="addCore">Add Core</UButton>
          </div>

          <div v-if="cores.length === 0" class="rounded-xl border border-dashed border-zinc-700/70 bg-zinc-900/60 py-10 text-center text-zinc-500">
            Add up to 6 cores to begin.
          </div>

          <div v-else class="space-y-3">
            <div
              v-for="core in cores"
              :key="core.id"
              class="rounded-xl border border-zinc-700/70 bg-zinc-900/80 p-3"
            >
              <div class="grid grid-cols-1 sm:grid-cols-[1fr_140px_120px_auto] gap-2 items-end">
                <div>
                  <label class="mk-mini-label text-zinc-500 flex items-center gap-1.5 mb-1">
                    <UIcon :name="getCoreIcon(core.type)" class="size-3.5" :class="getCoreAccentClass(core.type)" />
                    <span>Core Type</span>
                  </label>
                  <select
                    :value="core.type"
                    class="mk-native-amber-select w-full rounded-lg border border-zinc-700/80 bg-zinc-800/80 px-3 py-2 text-sm"
                    @change="updateCoreType(core.id, ($event.target as HTMLSelectElement).value as CoreType)"
                  >
                    <option v-for="type in CORE_TYPES" :key="type" :value="type">{{ type }}</option>
                  </select>
                </div>

                <div>
                  <label class="mk-mini-label text-zinc-500 block mb-1">Rarity</label>
                  <select
                    :value="core.rarity"
                    class="mk-native-amber-select w-full rounded-lg border border-zinc-700/80 bg-zinc-800/80 px-3 py-2 text-sm"
                    @change="updateCoreRarity(core.id, ($event.target as HTMLSelectElement).value as CoreRarity)"
                  >
                    <option v-for="rarity in CORE_RARITIES" :key="rarity" :value="rarity">{{ rarity }}</option>
                  </select>
                </div>

                <div>
                  <label class="mk-mini-label text-zinc-500 block mb-1">Target</label>
                  <select
                    :value="core.targetPoints ?? ''"
                    class="mk-native-amber-select w-full rounded-lg border border-zinc-700/80 bg-zinc-800/80 px-3 py-2 text-sm"
                    @change="updateCoreTargetPoints(core.id, parseCoreTargetPoints(core.rarity, ($event.target as HTMLSelectElement).value))"
                  >
                    <option value="">Auto</option>
                    <option
                      v-for="target in getCoreTargetOptions(core.rarity)"
                      :key="`target-${core.id}-${target}`"
                      :value="target"
                    >
                      {{ target }}p
                    </option>
                  </select>
                </div>

                <UButton color="error" variant="ghost" icon="i-lucide-trash-2" class="rounded-full hover:bg-red-500/15" @click="removeCore(core.id)" />
              </div>
            </div>
          </div>
        </div>

        <div class="mk-card p-5 md:p-6 space-y-4">
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <div class="flex items-center gap-2 flex-wrap">
              <h2 class="text-xl font-semibold flex items-center gap-2">
                Astrogems
                <span class="rounded-md border border-zinc-700/80 bg-zinc-800/75 px-2 py-0.5 text-xs text-zinc-300">{{ astrogems.length }}</span>
              </h2>
              <span class="inline-flex items-center gap-1 rounded-md border border-zinc-700/80 bg-zinc-900/70 px-2 py-1 text-[11px] text-zinc-400" title="Click Order/Chaos to swap gem category">
                <UIcon name="i-lucide-arrow-left-right" class="size-3.5" />
                Click gem type to swap
              </span>
            </div>
            <div class="flex items-center gap-2 w-full sm:w-auto">
              <UButton
                size="sm"
                icon="i-lucide-plus"
                color="warning"
                class="w-full justify-center rounded-full !bg-amber-300 !text-zinc-900 hover:!bg-amber-200 sm:w-auto"
                @click="addAstrogem(astrogemFilter === 'chaos' ? 'Chaos' : 'Order')"
              >
                Add Astrogem
              </UButton>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-2 gap-y-2 text-sm">
            <span class="text-zinc-500">Filter:</span>
            <button
              type="button"
              class="rounded-md px-2.5 py-1 border text-xs"
              :class="astrogemFilter === 'all' ? 'border-amber-300 bg-amber-300 text-zinc-900 font-medium' : 'border-zinc-700 text-zinc-400 hover:bg-zinc-800/60'"
              @click="astrogemFilter = 'all'"
            >
              All
            </button>
            <button
              type="button"
              class="rounded-md px-2.5 py-1 border text-xs"
              :class="astrogemFilter === 'order' ? 'border-amber-300 bg-amber-300 text-zinc-900 font-medium' : 'border-zinc-700 text-zinc-400 hover:bg-zinc-800/60'"
              @click="astrogemFilter = 'order'"
            >
              Order ({{ orderAstrogems.length }})
            </button>
            <button
              type="button"
              class="rounded-md px-2.5 py-1 border text-xs"
              :class="astrogemFilter === 'chaos' ? 'border-amber-300 bg-amber-300 text-zinc-900 font-medium' : 'border-zinc-700 text-zinc-400 hover:bg-zinc-800/60'"
              @click="astrogemFilter = 'chaos'"
            >
              Chaos ({{ chaosAstrogems.length }})
            </button>

            <span class="text-zinc-500 ml-2">Sort:</span>
            <span class="text-zinc-400 text-xs">Willpower</span>
            <button
              type="button"
              class="inline-flex size-8 items-center justify-center rounded-md border leading-none"
              :class="sortMode === 'willpower' ? 'border-amber-300 bg-amber-300 text-zinc-900' : 'border-zinc-700 text-zinc-400 hover:bg-zinc-800/60'"
              @click="toggleSort('willpower')"
            >
              <UIcon :name="sortMode === 'willpower' && sortDirection === 'asc' ? 'i-lucide-arrow-up-narrow-wide' : 'i-lucide-arrow-down-wide-narrow'" class="block size-4 shrink-0" />
            </button>

            <span class="text-zinc-400 text-xs">Points</span>
            <button
              type="button"
              class="inline-flex size-8 items-center justify-center rounded-md border leading-none"
              :class="sortMode === 'points' ? 'border-amber-300 bg-amber-300 text-zinc-900' : 'border-zinc-700 text-zinc-400 hover:bg-zinc-800/60'"
              @click="toggleSort('points')"
            >
              <UIcon :name="sortMode === 'points' && sortDirection === 'asc' ? 'i-lucide-arrow-up-narrow-wide' : 'i-lucide-arrow-down-wide-narrow'" class="block size-4 shrink-0" />
            </button>

          </div>

          <div class="rounded-xl border border-zinc-700/70 bg-zinc-900/80 overflow-hidden">
            <div class="hidden sm:grid grid-cols-[minmax(110px,1fr)_96px_110px_84px_36px] gap-2 px-4 py-2.5 text-xs font-semibold text-zinc-400 border-b border-zinc-700/70 bg-zinc-900/80">
              <span>Gem</span>
              <span>✧ Willpower</span>
              <span>Ⓟ Core Points</span>
              <span>Quantity</span>
              <span />
            </div>

            <div v-if="sortedAstrogems.length === 0" class="py-10 text-center text-zinc-500 text-sm">
              No astrogems for this filter.
            </div>

            <div v-else class="max-h-135 overflow-y-auto">
              <div class="sm:hidden divide-y divide-zinc-800/70">
                <div
                  v-for="gem in sortedAstrogems"
                  :key="`mobile-${gem.id}`"
                  class="space-y-2.5 px-3 py-3 odd:bg-zinc-900/60 even:bg-zinc-900/55"
                >
                  <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-2 min-w-0">
                      <UIcon
                        :name="gem.category === 'Order' ? 'i-lucide-gem' : 'i-lucide-sparkles'"
                        class="size-4 shrink-0"
                        :class="gem.category === 'Order' ? 'text-red-300' : 'text-blue-300'"
                      />
                      <button
                        type="button"
                        class="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-sm font-medium whitespace-nowrap transition-colors"
                        :class="gem.category === 'Order' ? 'text-red-200 hover:bg-red-300/10 hover:text-red-100' : 'text-blue-200 hover:bg-blue-300/10 hover:text-blue-100'"
                        :title="`Click to swap to ${gem.category === 'Order' ? 'Chaos' : 'Order'}`"
                        :aria-label="`Swap ${gem.category} gem to ${gem.category === 'Order' ? 'Chaos' : 'Order'}`"
                        @click="updateAstrogem(gem.id, { category: gem.category === 'Order' ? 'Chaos' : 'Order' })"
                      >
                        <UIcon name="i-lucide-arrow-left-right" class="size-3.5 opacity-85" />
                        {{ gem.category }}
                      </button>
                    </div>

                    <UButton color="error" variant="ghost" icon="i-lucide-trash-2" class="size-8 !p-0 rounded-full shrink-0 hover:bg-red-500/15" @click="removeAstrogem(gem.id)" />
                  </div>

                  <label class="flex items-center justify-between gap-3">
                    <span class="mk-mini-label text-zinc-500">Willpower</span>
                    <input
                      :value="gem.willpower"
                      type="number"
                      min="1"
                      max="10"
                      class="mk-native-amber-number w-24 rounded-lg border border-zinc-700/80 bg-zinc-800/80 px-2 py-1.5 text-sm text-right"
                      @input="updateAstrogem(gem.id, { willpower: Number(($event.target as HTMLInputElement).value) || 0 })"
                    >
                  </label>

                  <label class="flex items-center justify-between gap-3">
                    <span class="mk-mini-label text-zinc-500">Core Points</span>
                    <input
                      :value="gem.points"
                      type="number"
                      min="1"
                      max="5"
                      class="mk-native-amber-number w-24 rounded-lg border border-zinc-700/80 bg-zinc-800/80 px-2 py-1.5 text-sm text-right"
                      @input="updateAstrogem(gem.id, { points: Number(($event.target as HTMLInputElement).value) || 0 })"
                    >
                  </label>

                  <label class="flex items-center justify-between gap-3">
                    <span class="mk-mini-label text-zinc-500">Quantity</span>
                    <input
                      :value="gem.quantity"
                      type="number"
                      min="1"
                      max="99"
                      class="mk-native-amber-number w-24 rounded-lg border border-zinc-700/80 bg-zinc-800/80 px-2 py-1.5 text-sm text-right"
                      @input="updateAstrogem(gem.id, { quantity: Math.max(1, Number(($event.target as HTMLInputElement).value) || 1) })"
                    >
                  </label>
                </div>
              </div>

              <div
                v-for="gem in sortedAstrogems"
                :key="gem.id"
                class="hidden sm:grid grid-cols-[minmax(110px,1fr)_96px_110px_84px_36px] gap-2 px-4 py-2.5 border-b border-zinc-800/70 items-center odd:bg-zinc-900/60 even:bg-zinc-900/55"
              >
                <div class="flex items-center gap-2 min-w-0">
                  <UIcon
                    :name="gem.category === 'Order' ? 'i-lucide-gem' : 'i-lucide-sparkles'"
                    class="size-4 shrink-0"
                    :class="gem.category === 'Order' ? 'text-red-300' : 'text-blue-300'"
                  />
                  <button
                    type="button"
                    class="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-sm font-medium whitespace-nowrap transition-colors"
                    :class="gem.category === 'Order' ? 'text-red-200 hover:bg-red-300/10 hover:text-red-100' : 'text-blue-200 hover:bg-blue-300/10 hover:text-blue-100'"
                    :title="`Click to swap to ${gem.category === 'Order' ? 'Chaos' : 'Order'}`"
                    :aria-label="`Swap ${gem.category} gem to ${gem.category === 'Order' ? 'Chaos' : 'Order'}`"
                    @click="updateAstrogem(gem.id, { category: gem.category === 'Order' ? 'Chaos' : 'Order' })"
                  >
                    <UIcon name="i-lucide-arrow-left-right" class="size-3.5 opacity-85" />
                    {{ gem.category }}
                  </button>
                </div>

                <input
                  :value="gem.willpower"
                  type="number"
                  min="1"
                  max="10"
                  class="mk-native-amber-number rounded-lg border border-zinc-700/80 bg-zinc-800/80 px-2 py-1.5 text-sm"
                  @input="updateAstrogem(gem.id, { willpower: Number(($event.target as HTMLInputElement).value) || 0 })"
                >

                <input
                  :value="gem.points"
                  type="number"
                  min="1"
                  max="5"
                  class="mk-native-amber-number rounded-lg border border-zinc-700/80 bg-zinc-800/80 px-2 py-1.5 text-sm"
                  @input="updateAstrogem(gem.id, { points: Number(($event.target as HTMLInputElement).value) || 0 })"
                >

                <input
                  :value="gem.quantity"
                  type="number"
                  min="1"
                  max="99"
                  class="mk-native-amber-number rounded-lg border border-zinc-700/80 bg-zinc-800/80 px-2 py-1.5 text-sm"
                  @input="updateAstrogem(gem.id, { quantity: Math.max(1, Number(($event.target as HTMLInputElement).value) || 1) })"
                >

                <UButton color="error" variant="ghost" icon="i-lucide-trash-2" class="size-8 !p-0 rounded-full hover:bg-red-500/15 justify-self-center" @click="removeAstrogem(gem.id)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="showResults" id="solver-results" class="mk-card p-5 md:p-6 mt-5 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-xl font-semibold">Optimization Results</h2>
          <div class="rounded-full border border-amber-300 bg-amber-300 px-4 py-1.5 text-sm font-semibold text-zinc-900">
            Score: {{ totalScore.toFixed(1) }} / {{ maxPossibleScore.toFixed(1) }}
          </div>
        </div>

        <div class="space-y-2">
          <span class="mk-mini-label text-zinc-500 block">SELECT SOLUTION</span>
          <div class="flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              v-for="slot in MAX_SOLVER_SOLUTIONS"
              :key="`solution-slot-${slot}`"
              type="button"
              class="shrink-0 rounded-md border px-2.5 py-1 text-xs transition-colors"
              :class="[ (slot - 1) === selectedSolutionIndex ? 'border-amber-300 bg-amber-300 text-zinc-900 font-semibold' : 'border-zinc-700 text-zinc-400 hover:bg-zinc-800/60', (slot - 1) >= allSolutions.length ? 'cursor-not-allowed opacity-40 hover:bg-transparent' : '' ]"
              :disabled="(slot - 1) >= allSolutions.length"
              @click="selectSolution(slot - 1)"
            >
              {{ slot }}
            </button>
          </div>
        </div>

        <div class="grid sm:grid-cols-4 gap-3">
          <div class="rounded-lg border border-zinc-700/70 bg-zinc-800/75 p-3">
            <div class="text-sm text-zinc-400">17p Reached</div>
            <div class="text-2xl font-semibold mt-1">{{ summary.hit17 }}</div>
          </div>
          <div class="rounded-lg border border-zinc-700/70 bg-zinc-800/75 p-3">
            <div class="text-sm text-zinc-400">14p Reached</div>
            <div class="text-2xl font-semibold mt-1">{{ summary.hit14 }}</div>
          </div>
          <div class="rounded-lg border border-zinc-700/70 bg-zinc-800/75 p-3">
            <div class="text-sm text-zinc-400">10p Reached</div>
            <div class="text-2xl font-semibold mt-1">{{ summary.hit10 }}</div>
          </div>
          <div class="rounded-lg border border-zinc-700/70 bg-zinc-800/75 p-3">
            <div class="text-sm text-zinc-400">Gems Used</div>
            <div class="text-2xl font-semibold mt-1">{{ summary.gemsUsed }}</div>
          </div>
        </div>

        <div class="space-y-3">
          <p class="mk-eyebrow text-zinc-400">Assignment Details</p>
          <div
            v-for="core in cores"
            :key="`result-${core.id}`"
              class="rounded-xl border border-zinc-700/70 bg-zinc-900/70 p-4"
            >
              <div class="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div class="flex items-center gap-2">
                  <UIcon :name="getCoreIcon(core.type)" class="size-4" :class="getCoreAccentClass(core.type)" />
                  <span class="font-medium text-zinc-100">{{ core.type }}</span>
                </div>
              <div class="text-sm text-zinc-400 flex flex-col items-start sm:items-end gap-0.5">
                <span>✧ {{ getResultForCore(core.id)?.totalWillpower ?? 0 }} Willpower</span>
                <span>Ⓟ {{ getResultForCore(core.id)?.totalPoints ?? 0 }} Core Points</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 mb-3">
              <span
                v-for="bp in getCoreResultBreakpoints(core.id)"
                :key="`bp-${core.id}-${bp}`"
                class="rounded-md px-2.5 py-1 text-xs border border-amber-300 bg-amber-300 text-zinc-900 font-medium"
              >
                {{ bp }}p ✓
              </span>
              <span
                v-if="!getCoreResultBreakpoints(core.id).length"
                class="rounded-md px-2.5 py-1 text-xs border border-zinc-700 text-zinc-500"
              >
                No breakpoints reached
              </span>
            </div>

            <div class="flex flex-wrap gap-2">
              <div
                v-for="gem in getResultForCore(core.id)?.astrogems ?? []"
                :key="`assigned-${core.id}-${gem.id}`"
                class="rounded-md border px-2.5 py-1.5 text-xs min-w-27.5"
                :class="gem.category === 'Order' ? 'border-red-300/70 bg-zinc-800/70 text-zinc-200' : 'border-blue-300/70 bg-zinc-800/70 text-zinc-200'"
              >
                <div class="font-medium mb-0.5 flex items-center gap-1.5">
                  <UIcon
                    :name="gem.category === 'Order' ? 'i-lucide-gem' : 'i-lucide-sparkles'"
                    class="size-3.5 shrink-0"
                    :class="gem.category === 'Order' ? 'text-red-200' : 'text-blue-200'"
                  />
                  <span>{{ gem.category }}</span>
                </div>
                <div class="text-zinc-400">✧ {{ gem.willpower }} Willpower</div>
                <div class="text-zinc-400">Ⓟ {{ gem.points }} Core Points</div>
              </div>
              <span
                v-if="!(getResultForCore(core.id)?.astrogems?.length)"
                class="text-xs text-zinc-500 italic"
              >
                No astrogems assigned
              </span>
            </div>
          </div>
        </div>
      </section>
    </UContainer>
  </div>
</template>
