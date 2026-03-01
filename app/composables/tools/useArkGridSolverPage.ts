import type { Astrogem, AstrogemCategory, Core, CoreType, CoreRarity, CoreTargetPoints, SolverResult, SolverProgress } from '~/types/arkgrid-solver'
import {
  CORE_TYPES,
  CORE_RARITIES,
  CORE_CONFIG,
  MAX_SOLVER_SOLUTIONS,
  SUN_MOON_DESTINY_BONUS,
  createEmptyAstrogem,
  createEmptyCore,
  getCoreTargetOptions,
  normalizeCoreTargetPoints,
  generateId,
  isOrderSunCore,
  isOrderMoonCore,
  BREAKPOINT_WEIGHTS,
  ANCIENT_17P_BONUS
} from '~/types/arkgrid-solver'
import { solveArkGridAsync } from '~/composables/useArkGridSolver'

export function useArkGridSolverPage() {
  const STORAGE_KEY_CHARACTERS = 'mk-ark-grid-characters-v1'
  const STORAGE_KEY_ACTIVE_CHARACTER = 'mk-ark-grid-active-character-v1'
  const LEGACY_STORAGE_KEY = 'mk-ark-grid-solver-v1'
  
  interface Character {
    id: string
    name: string
    cores: Core[]
    astrogems: Astrogem[]
  }
  
  const characters = ref<Character[]>([])
  const activeCharacterId = ref('')
  
  const activeCharacter = computed(() => {
    return characters.value.find(character => character.id === activeCharacterId.value)
  })
  
  const cores = computed({
    get: () => activeCharacter.value?.cores ?? [],
    set: (value: Core[]) => {
      if (!activeCharacter.value) return
      activeCharacter.value.cores = value
    }
  })
  
  const astrogems = computed({
    get: () => activeCharacter.value?.astrogems ?? [],
    set: (value: Astrogem[]) => {
      if (!activeCharacter.value) return
      activeCharacter.value.astrogems = value
    }
  })
  
  const results = ref<SolverResult[]>([])
  const allSolutions = ref<SolverResult[][]>([])
  const selectedSolutionIndex = ref(0)
  const showResults = ref(false)
  const solverErrorMessage = ref('')
  
  const isCalculating = ref(false)
  const solverProgress = ref<SolverProgress | null>(null)
  const elapsedSeconds = ref(0)
  let elapsedTimer: ReturnType<typeof setInterval> | null = null
  
  const astrogemFilter = ref<'all' | 'order' | 'chaos'>('all')
  const sortMode = ref<'none' | 'willpower' | 'points'>('none')
  const sortDirection = ref<'desc' | 'asc'>('desc')
  
  const showAddCharacter = ref(false)
  const newCharacterName = ref('')
  const isEditingCharacterName = ref(false)
  const editedCharacterName = ref('')
  const showDeleteCharacterConfirm = ref(false)
  
  function startTimer() {
    stopTimer()
    elapsedSeconds.value = 0
    elapsedTimer = setInterval(() => {
      elapsedSeconds.value += 1
    }, 1000)
  }
  
  function stopTimer() {
    if (elapsedTimer) {
      clearInterval(elapsedTimer)
      elapsedTimer = null
    }
  }
  
  function setProgress(progress: SolverProgress) {
    solverProgress.value = progress
  }
  
  function createDefaultCharacter(name = 'Character 1'): Character {
    return {
      id: generateId(),
      name,
      cores: [],
      astrogems: []
    }
  }
  
  function restoreState() {
    if (!import.meta.client) return
  
    const rawCharacters = localStorage.getItem(STORAGE_KEY_CHARACTERS)
    const rawActiveCharacter = localStorage.getItem(STORAGE_KEY_ACTIVE_CHARACTER)
    const rawLegacy = localStorage.getItem(LEGACY_STORAGE_KEY)
  
    if (rawCharacters) {
      try {
        const parsed = JSON.parse(rawCharacters) as Character[]
        characters.value = Array.isArray(parsed) && parsed.length > 0 ? parsed : [createDefaultCharacter()]
      } catch {
        characters.value = [createDefaultCharacter()]
      }
    } else if (rawLegacy) {
      try {
        const parsed = JSON.parse(rawLegacy) as { cores?: Core[]; astrogems?: Astrogem[] }
        characters.value = [{
          id: generateId(),
          name: 'Character 1',
          cores: Array.isArray(parsed.cores) ? parsed.cores : [],
          astrogems: Array.isArray(parsed.astrogems) ? parsed.astrogems : []
        }]
      } catch {
        characters.value = [createDefaultCharacter()]
      }
    } else {
      characters.value = [createDefaultCharacter()]
    }
  
    if (rawActiveCharacter && characters.value.some(character => character.id === rawActiveCharacter)) {
      activeCharacterId.value = rawActiveCharacter
    } else {
      activeCharacterId.value = characters.value[0]?.id ?? ''
    }
  }
  
  onMounted(() => {
    restoreState()
  })
  
  onBeforeUnmount(() => {
    stopTimer()
  })
  
  watch(characters, (value) => {
    if (!import.meta.client) return
    localStorage.setItem(STORAGE_KEY_CHARACTERS, JSON.stringify(value))
  }, { deep: true })
  
  watch(activeCharacterId, (value) => {
    if (!import.meta.client) return
    localStorage.setItem(STORAGE_KEY_ACTIVE_CHARACTER, value)
    showResults.value = false
    results.value = []
    allSolutions.value = []
    selectedSolutionIndex.value = 0
    solverErrorMessage.value = ''
    isEditingCharacterName.value = false
    showDeleteCharacterConfirm.value = false
  })
  
  watch([cores, astrogems], () => {
    solverErrorMessage.value = ''
  }, { deep: true })
  
  function selectSolution(index: number) {
    if (index < 0 || index >= allSolutions.value.length) {
      return
    }
  
    selectedSolutionIndex.value = index
    results.value = allSolutions.value[index] ?? []
  }
  
  function addCharacter() {
    const name = newCharacterName.value.trim() || `Character ${characters.value.length + 1}`
    const character = createDefaultCharacter(name)
    characters.value.push(character)
    activeCharacterId.value = character.id
    newCharacterName.value = ''
    showAddCharacter.value = false
  }
  
  function startEditingCharacterName() {
    editedCharacterName.value = activeCharacter.value?.name ?? ''
    isEditingCharacterName.value = true
  }
  
  function saveCharacterName() {
    if (!activeCharacter.value) return
    const trimmed = editedCharacterName.value.trim()
    if (trimmed) {
      activeCharacter.value.name = trimmed
    }
    isEditingCharacterName.value = false
  }
  
  function deleteActiveCharacter() {
    if (characters.value.length <= 1) return
  
    characters.value = characters.value.filter(character => character.id !== activeCharacterId.value)
    activeCharacterId.value = characters.value[0]?.id ?? ''
    showDeleteCharacterConfirm.value = false
  }
  
  function addCore() {
    if (!activeCharacter.value || cores.value.length >= 6) return
  
    const used = new Set(cores.value.map(core => core.type))
    const available = CORE_TYPES.find(type => !used.has(type))
    const fallback = CORE_TYPES[0]
    if (!fallback) return
  
    cores.value.push(createEmptyCore(available ?? fallback, 'Relic'))
    showResults.value = false
  }
  
  function removeCore(id: string) {
    if (!activeCharacter.value) return
    cores.value = cores.value.filter(core => core.id !== id)
    showResults.value = false
  }
  
  function updateCoreType(id: string, type: CoreType) {
    if (!activeCharacter.value) return
    cores.value = cores.value.map(core => {
      if (core.id !== id) return core
      return { ...core, type }
    })
    showResults.value = false
  }
  
  function updateCoreRarity(id: string, rarity: CoreRarity) {
    if (!activeCharacter.value) return
    cores.value = cores.value.map(core => {
      if (core.id !== id) return core
      return {
        ...core,
        rarity,
        targetPoints: normalizeCoreTargetPoints(rarity, core.targetPoints)
      }
    })
    showResults.value = false
  }
  
  function parseCoreTargetPoints(rarity: CoreRarity, value: string): CoreTargetPoints | null {
    if (!value) {
      return null
    }
  
    return normalizeCoreTargetPoints(rarity, Number(value))
  }
  
  function updateCoreTargetPoints(id: string, targetPoints: CoreTargetPoints | null) {
    if (!activeCharacter.value) return
    cores.value = cores.value.map(core => {
      if (core.id !== id) return core
      return {
        ...core,
        targetPoints: normalizeCoreTargetPoints(core.rarity, targetPoints)
      }
    })
    showResults.value = false
  }
  
  function addAstrogem(category: AstrogemCategory) {
    if (!activeCharacter.value) return
    astrogems.value.push(createEmptyAstrogem(category))
    showResults.value = false
  }
  
  function removeAstrogem(id: string) {
    if (!activeCharacter.value) return
    astrogems.value = astrogems.value.filter(gem => gem.id !== id)
    showResults.value = false
  }
  
  function updateAstrogem(id: string, patch: Partial<Astrogem>) {
    if (!activeCharacter.value) return
    astrogems.value = astrogems.value.map(gem => {
      if (gem.id !== id) return gem
      return { ...gem, ...patch }
    })
    showResults.value = false
  }
  
  function toggleSort(mode: 'willpower' | 'points') {
    if (sortMode.value === mode) {
      sortDirection.value = sortDirection.value === 'desc' ? 'asc' : 'desc'
      return
    }
    sortMode.value = mode
    sortDirection.value = 'desc'
  }
  
  const sortedAstrogems = computed(() => {
    const filtered = astrogems.value.filter((gem) => {
      if (astrogemFilter.value === 'all') return true
      if (astrogemFilter.value === 'order') return gem.category === 'Order'
      return gem.category === 'Chaos'
    })
  
    if (sortMode.value === 'none') {
      return filtered
    }
  
    const direction = sortDirection.value === 'desc' ? -1 : 1
    const accessor = sortMode.value === 'willpower'
      ? (gem: Astrogem) => gem.willpower
      : (gem: Astrogem) => gem.points
  
    return [...filtered].sort((a, b) => {
      const diff = accessor(a) - accessor(b)
      if (diff !== 0) return diff * direction
      return (a.quantity - b.quantity) * direction
    })
  })
  
  const orderAstrogems = computed(() => astrogems.value.filter(gem => gem.category === 'Order'))
  const chaosAstrogems = computed(() => astrogems.value.filter(gem => gem.category === 'Chaos'))
  
  function getResultForCore(coreId: string) {
    return results.value.find(result => result.coreId === coreId)
  }
  
  const CORE_ICONS: Record<CoreType, string> = {
    'Order of the Sun': 'i-lucide-sun',
    'Order of the Moon': 'i-lucide-moon',
    'Order of the Star': 'i-lucide-star',
    'Chaos of the Sun': 'i-lucide-sun',
    'Chaos of the Moon': 'i-lucide-moon',
    'Chaos of the Star': 'i-lucide-star'
  }
  
  function getCoreIcon(type: CoreType) {
    return CORE_ICONS[type] ?? 'i-lucide-star'
  }
  
  function getCoreAccentClass(type: CoreType) {
    return type.startsWith('Order') ? 'text-red-300' : 'text-blue-300'
  }
  
  function getCoreResultBreakpoints(coreId: string) {
    return getResultForCore(coreId)?.breakpointsHit ?? []
  }
  
  function getCoreScoreCap(core: Core) {
    return CORE_CONFIG[core.rarity].breakpoints.reduce((sum, breakpoint) => {
      let weight = BREAKPOINT_WEIGHTS[breakpoint] || 0
      if (breakpoint === 17 && core.rarity === 'Ancient') {
        weight += ANCIENT_17P_BONUS
      }
      return sum + weight
    }, 0)
  }
  
  const destinyBonus = computed(() => {
    const sunCore = cores.value.find(core => isOrderSunCore(core.type))
    const moonCore = cores.value.find(core => isOrderMoonCore(core.type))
    if (!sunCore || !moonCore) return 0
  
    const sunResult = getResultForCore(sunCore.id)
    const moonResult = getResultForCore(moonCore.id)
    if (!sunResult || !moonResult) return 0
  
    if (sunResult.totalPoints >= 14 && moonResult.totalPoints >= 14) {
      return SUN_MOON_DESTINY_BONUS
    }
  
    return 0
  })
  
  const totalScore = computed(() => {
    const base = results.value.reduce((sum, result) => sum + result.score, 0)
    return base + destinyBonus.value
  })
  
  const maxPossibleScore = computed(() => {
    const base = cores.value.reduce((sum, core) => sum + getCoreScoreCap(core), 0)
    const hasSun = cores.value.some(core => isOrderSunCore(core.type))
    const hasMoon = cores.value.some(core => isOrderMoonCore(core.type))
    return base + (hasSun && hasMoon ? SUN_MOON_DESTINY_BONUS : 0)
  })
  
  const canCalculate = computed(() => cores.value.length > 0 && astrogems.value.length > 0 && !isCalculating.value)
  
  const summary = computed(() => {
    const hit17 = results.value.filter(result => result.breakpointsHit.includes(17)).length
    const hit14 = results.value.filter(result => result.breakpointsHit.includes(14)).length
    const hit10 = results.value.filter(result => result.breakpointsHit.includes(10)).length
    const gemsUsed = results.value.reduce((sum, result) => sum + result.astrogems.length, 0)
  
    return { hit17, hit14, hit10, gemsUsed }
  })
  
  async function calculate() {
    if (!canCalculate.value) return
  
    isCalculating.value = true
    showResults.value = false
    solverErrorMessage.value = ''
    solverProgress.value = { phase: 'init', message: 'Starting solver...', percent: 0 }
    startTimer()
  
    try {
      const plainCores = JSON.parse(JSON.stringify(cores.value)) as Core[]
      const plainAstrogems = JSON.parse(JSON.stringify(astrogems.value)) as Astrogem[]
      const solved = await solveArkGridAsync(plainCores, plainAstrogems, setProgress)
  
      if (!solved.length) {
        allSolutions.value = []
        selectedSolutionIndex.value = 0
        results.value = []
        showResults.value = false
        solverErrorMessage.value = 'No valid assignment found for the selected settings.'
        solverProgress.value = { phase: 'done', message: 'No valid assignment found' }
        return
      }
  
      allSolutions.value = solved
      selectedSolutionIndex.value = 0
      results.value = solved[0] ?? []
      showResults.value = Boolean(solved[0])
      solverErrorMessage.value = ''
      solverProgress.value = { phase: 'done', message: 'Done', percent: 100 }
  
      await nextTick()
      document.getElementById('solver-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Solver failed'
      allSolutions.value = []
      selectedSolutionIndex.value = 0
      results.value = []
      showResults.value = false
      solverErrorMessage.value = message
      solverProgress.value = { phase: 'done', message }
    } finally {
      isCalculating.value = false
      stopTimer()
    }
  }
  
  function resetAll() {
    if (!activeCharacter.value) return
    cores.value = []
    astrogems.value = []
    results.value = []
    allSolutions.value = []
    selectedSolutionIndex.value = 0
    showResults.value = false
    solverErrorMessage.value = ''
    solverProgress.value = null
  }

  return {
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
  }
}
