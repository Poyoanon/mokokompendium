<script setup lang="ts">
useHead({
  title: 'SSB Calc - Mokokompendium',
  meta: [{ name: 'description', content: 'Supersonic Breakthrough Evolution Damage calculator.' }]
})

const CAP = 140
const BASE = 100
const CAP_BP = 14000
const BASE_BP = 10000
const BT_SPEC_RATE = 0.26 / 699
const BT_BASE_BUFF = 20

type LevelKey = 1 | 2
type WineChoice = 'none' | 'atk' | 'move'
type ClassKey =
  | 'berserker-bt'
  | 'berserker-mayhem'
  | 'slayer'
  | 'wardancer'
  | 'machinist'
  | 'machinist-bladesuit'
  | 'sharpshooter'
  | 'aeromancer'
  | 'soulfist'
  | 'shadowhunter'
  | 'guardianknight'

const LEVELS: Record<LevelKey, { baseRate: number, excessRate: number, flatBonus: number, maxEvo: number }> = {
  1: { baseRate: 0.05, excessRate: 0.15, flatBonus: 4, maxEvo: 12 },
  2: { baseRate: 0.1, excessRate: 0.3, flatBonus: 8, maxEvo: 24 }
}

const CLASS_OPTIONS: Array<{ key: ClassKey, label: string }> = [
  { key: 'berserker-bt', label: "Berserker (Berserker's Technique)" },
  { key: 'berserker-mayhem', label: 'Berserker (Mayhem)' },
  { key: 'slayer', label: 'Slayer (Predator)' },
  { key: 'wardancer', label: 'Wardancer (First Intention)' },
  { key: 'machinist', label: 'Machinist (Evolutionary Legacy)' },
  { key: 'machinist-bladesuit', label: 'Machinist (Blade Suit)' },
  { key: 'sharpshooter', label: 'Sharpshooter (TA-09 Piercing Arrow)' },
  { key: 'aeromancer', label: 'Aeromancer (Wind Fury)' },
  { key: 'soulfist', label: 'Soulfist (Energy Overflow)' },
  { key: 'shadowhunter', label: 'Shadowhunter (Perfect Suppression)' },
  { key: 'guardianknight', label: 'Guardianknight (Dreadful Roar)' }
]

const CLASS_HINTS: Partial<Record<ClassKey, string>> = {
  'berserker-mayhem': 'Mayhem: permanent +15% AS/MS.',
  slayer: 'Predator: permanent +20% AS/MS.',
  wardancer: 'First Intention: permanent +20.8% AS / +16% MS.',
  machinist: 'Evolutionary Legacy: permanent +15% AS / +30% MS.',
  'machinist-bladesuit': 'Blade Suit: permanent +35% AS / +30% MS.',
  sharpshooter: 'TA-09 Piercing Arrow: permanent +10% AS / +10% MS.',
  aeromancer: 'Wind Fury: permanent +12% AS/MS.',
  soulfist: 'Energy Overflow: permanent +12% AS/MS.',
  shadowhunter: 'Perfect Suppression: permanent +30% MS.',
  guardianknight: 'Guardianknight: permanent +15% AS.'
}

const CLASS_BASE_BONUS: Record<ClassKey, { as: number, ms: number }> = {
  'berserker-bt': { as: 0, ms: 0 },
  'berserker-mayhem': { as: 15, ms: 15 },
  slayer: { as: 20, ms: 20 },
  wardancer: { as: 20.8, ms: 16 },
  machinist: { as: 15, ms: 30 },
  'machinist-bladesuit': { as: 35, ms: 30 },
  sharpshooter: { as: 10, ms: 10 },
  aeromancer: { as: 12, ms: 12 },
  soulfist: { as: 12, ms: 12 },
  shadowhunter: { as: 0, ms: 30 },
  guardianknight: { as: 15, ms: 0 }
}

const selectedClass = ref<ClassKey>('berserker-bt')
const spec = ref(0)
const sheetAs = ref(100)
const sheetMs = ref(100)
const feast = ref(0)
const support = ref(false)
const wine = ref<WineChoice>('none')
const level = ref<LevelKey>(2)

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
const floor2 = (value: number) => Math.floor(value * 100) / 100
const toBP = (value: number) => Math.floor(value * 100 + 1e-6)
const fmt = (value: number) => floor2(value).toFixed(2)
const fmtInt = (value: number) => Math.floor(value).toString()
const readNumber = (value: number) => Number.isFinite(value) ? Math.max(value, 0) : 0

const btBonus = computed(() => (1 + BT_SPEC_RATE * readNumber(spec.value)) * BT_BASE_BUFF)

const classBonus = computed(() => {
  if (selectedClass.value === 'berserker-bt') {
    return { as: btBonus.value, ms: btBonus.value }
  }
  return CLASS_BASE_BONUS[selectedClass.value]
})

const classHint = computed(() => {
  if (selectedClass.value === 'berserker-bt') return null
  return CLASS_HINTS[selectedClass.value] ?? null
})

const sheetAsClamped = computed(() => clamp(readNumber(sheetAs.value), BASE, CAP))
const sheetMsClamped = computed(() => clamp(readNumber(sheetMs.value), BASE, CAP))
const feastClamped = computed(() => clamp(readNumber(feast.value), 0, 5))

const computedSpeeds = computed(() => {
  const sheetAsBonus = sheetAsClamped.value - BASE
  const sheetMsBonus = sheetMsClamped.value - BASE
  const supportBonus = support.value ? 9 : 0
  const wineAtk = wine.value === 'atk' ? 3 : 0
  const wineMove = wine.value === 'move' ? 3 : 0

  const atkBonus = floor2(classBonus.value.as + sheetAsBonus + feastClamped.value + supportBonus + wineAtk)
  const moveBonus = floor2(classBonus.value.ms + sheetMsBonus + feastClamped.value + supportBonus + wineMove)

  return {
    atk: floor2(BASE + atkBonus),
    move: floor2(BASE + moveBonus)
  }
})

function calculateEvo(atk: number, move: number, levelConfig: { baseRate: number, excessRate: number, flatBonus: number, maxEvo: number }) {
  const cappedAtk = floor2(Math.min(atk, CAP))
  const cappedMove = floor2(Math.min(move, CAP))
  const bonusAtk = floor2(Math.max(cappedAtk - BASE, 0))
  const bonusMove = floor2(Math.max(cappedMove - BASE, 0))
  const overAtk = floor2(Math.max(atk - CAP, 0))
  const overMove = floor2(Math.max(move - CAP, 0))
  const overTotal = floor2(overAtk + overMove)
  const bonusSum = floor2(bonusAtk + bonusMove)
  const baseEvo = floor2(bonusSum * levelConfig.baseRate)
  const flatEvo = atk >= CAP && move >= CAP ? levelConfig.flatBonus : 0
  const excessEvo = floor2(overTotal * levelConfig.excessRate)
  const totalRaw = floor2(baseEvo + flatEvo + excessEvo)
  const totalEvo = Math.min(totalRaw, levelConfig.maxEvo)

  return {
    bonusAtk,
    bonusMove,
    overAtk,
    overMove,
    overTotal,
    baseEvo,
    flatEvo,
    excessEvo,
    totalEvo
  }
}

const levelConfig = computed(() => LEVELS[level.value])
const evo = computed(() => calculateEvo(computedSpeeds.value.atk, computedSpeeds.value.move, levelConfig.value))

const baseAtCap = computed(() => (CAP - BASE) * 2 * levelConfig.value.baseRate)
const requiredExcess = computed(() => {
  const remaining = levelConfig.value.maxEvo - levelConfig.value.flatBonus - baseAtCap.value
  return remaining <= 0 ? 0 : remaining / levelConfig.value.excessRate
})

const remainingOvercap = computed(() => Math.max(0, requiredExcess.value - evo.value.overTotal))
const progress = computed(() => {
  if (levelConfig.value.maxEvo === 0) return 0
  return Math.min((evo.value.totalEvo / levelConfig.value.maxEvo) * 100, 100)
})

const callouts = computed(() => {
  const messages: string[] = []
  const { atk, move } = computedSpeeds.value

  if (atk < CAP || move < CAP) {
    messages.push(`Raise both speeds to ${CAP}% to unlock excess conversion.`)
  }

  if (evo.value.totalEvo >= levelConfig.value.maxEvo - 0.001) {
    messages.push('Breakpoint reached. This node is capped.')
  } else if (atk >= CAP && move >= CAP) {
    messages.push(`Short by ${fmt(remainingOvercap.value)}% combined overcap to max the node.`)
  } else {
    messages.push(`After reaching ${CAP}% on both, you need ${fmt(requiredExcess.value)}% combined overcap to max the node.`)
  }

  return messages
})

function getRequiredOvercapBP(config: { baseRate: number, excessRate: number, flatBonus: number, maxEvo: number }) {
  const baseRatePercent = config.baseRate * 100
  const excessRatePercent = config.excessRate * 100
  const flatBP = config.flatBonus * 100
  const maxBP = config.maxEvo * 100
  const baseAtCapBP = Math.floor(((CAP_BP - BASE_BP) * 2 * baseRatePercent) / 100)
  const remainingBP = maxBP - flatBP - baseAtCapBP
  if (remainingBP <= 0) return 0
  return Math.floor((remainingBP * 100) / excessRatePercent)
}

function findSwiftRequired(baseAsBonusBP: number, baseMsBonusBP: number, requiredOvercapBP: number) {
  const maxSwift = 1850
  for (let swift = 0; swift <= maxSwift; swift += 1) {
    const swiftBonusBP = Math.ceil((swift * 1200) / 699)
    const atkBP = BASE_BP + baseAsBonusBP + swiftBonusBP
    const moveBP = BASE_BP + baseMsBonusBP + swiftBonusBP
    if (atkBP < CAP_BP || moveBP < CAP_BP) continue

    const overTotalBP = (atkBP - CAP_BP) + (moveBP - CAP_BP)
    if (overTotalBP >= requiredOvercapBP) return swift
  }

  return null
}

const breakpoints = computed(() => {
  if (selectedClass.value === 'berserker-bt') {
    return { full: 'N/A', feast: 'N/A', none: 'N/A' }
  }

  const requiredOvercapBP = getRequiredOvercapBP(levelConfig.value)
  const baseClass = CLASS_BASE_BONUS[selectedClass.value]

  const resolveScenario = (supportBonus: number, feastBonus: number, withBestWine: boolean) => {
    const baseAsBonusBP = toBP(baseClass.as + supportBonus + feastBonus)
    const baseMsBonusBP = toBP(baseClass.ms + supportBonus + feastBonus)

    if (!withBestWine) {
      return findSwiftRequired(baseAsBonusBP, baseMsBonusBP, requiredOvercapBP)
    }

    const withAsWine = findSwiftRequired(baseAsBonusBP + toBP(3), baseMsBonusBP, requiredOvercapBP)
    const withMsWine = findSwiftRequired(baseAsBonusBP, baseMsBonusBP + toBP(3), requiredOvercapBP)

    if (withAsWine === null) return withMsWine
    if (withMsWine === null) return withAsWine
    return Math.min(withAsWine, withMsWine)
  }

  const render = (value: number | null) => value === null ? 'Not reachable' : `${fmtInt(value)} Swift`

  return {
    full: render(resolveScenario(9, 5, true)),
    feast: render(resolveScenario(9, 5, false)),
    none: render(resolveScenario(9, 0, false))
  }
})
</script>

<template>
  <div class="py-8 md:py-10 mk-tools-tone">
    <UContainer class="max-w-6xl">
      <header class="mb-6 md:mb-8">
        <p class="mk-eyebrow mb-2">Tools</p>
        <h1 class="text-3xl md:text-4xl font-bold mb-3">Supersonic Breakthrough Calculator</h1>
        <p class="text-zinc-400 max-w-3xl">
          Enter your attack and movement speed to estimate Evolution Damage from Supersonic Breakthrough.
          Base conversion uses capped values and excess conversion only counts overcap.
        </p>
      </header>

      <section class="grid gap-5 lg:grid-cols-2">
        <div class="mk-card p-5 md:p-6 space-y-5">
          <h2 class="text-xl font-semibold">Inputs</h2>

          <div class="space-y-2">
            <label class="mk-eyebrow block">Class</label>
            <select v-model="selectedClass" class="mk-native-amber-select w-full rounded-xl border border-zinc-700/80 bg-zinc-800/80 px-3 py-2.5 text-sm text-zinc-100">
              <option v-for="option in CLASS_OPTIONS" :key="option.key" :value="option.key">
                {{ option.label }}
              </option>
            </select>
            <p v-if="classHint" class="text-sm text-zinc-400">{{ classHint }}</p>
          </div>

          <div v-if="selectedClass === 'berserker-bt'" class="space-y-2 rounded-xl border border-zinc-700/70 bg-zinc-800/65 p-3.5">
            <label class="mk-eyebrow block" for="spec">Specialization (Berserker's Technique only)</label>
            <input id="spec" v-model.number="spec" type="number" min="0" step="1" class="mk-native-amber-number w-full rounded-xl border border-zinc-700/80 bg-zinc-800/80 px-3 py-2.5 text-sm text-zinc-100" >
            <p class="text-xs text-zinc-500">Formula: <code>(1 + 0.26 / 699 * Spec) * 20%</code></p>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="mk-eyebrow block">Sheet AS %</label>
               <input v-model.number="sheetAs" type="number" min="100" max="140" step="0.01" class="mk-native-amber-number w-full rounded-xl border border-zinc-700/80 bg-zinc-800/80 px-3 py-2.5 text-sm text-zinc-100" >
              <p class="text-xs text-zinc-500">In town, no buffs. Base 100%.</p>
            </div>
            <div class="space-y-2">
              <label class="mk-eyebrow block">Sheet MS %</label>
               <input v-model.number="sheetMs" type="number" min="100" max="140" step="0.01" class="mk-native-amber-number w-full rounded-xl border border-zinc-700/80 bg-zinc-800/80 px-3 py-2.5 text-sm text-zinc-100" >
              <p class="text-xs text-zinc-500">In town, no buffs. Base 100%.</p>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="mk-eyebrow block">Feast Bonus %</label>
               <input v-model.number="feast" type="number" min="0" max="5" step="0.1" class="mk-native-amber-number w-full rounded-xl border border-zinc-700/80 bg-zinc-800/80 px-3 py-2.5 text-sm text-zinc-100" >
            </div>
            <div class="space-y-2">
              <label class="mk-eyebrow block">Support Buff</label>
               <label class="inline-flex items-center gap-2 rounded-xl border border-zinc-700/80 bg-zinc-800/80 px-3 py-2.5 text-sm text-zinc-200 cursor-pointer">
                <input v-model="support" type="checkbox" class="mk-native-amber-checkbox" >
                9% AS / MS
              </label>
            </div>
          </div>

          <div class="space-y-2">
            <label class="mk-eyebrow block">Wine Bonus (3%)</label>
            <div class="grid grid-cols-3 gap-2 rounded-xl border border-zinc-700/80 bg-zinc-800/65 p-1">
              <button
                v-for="choice in [
                  { key: 'none', label: 'None' },
                  { key: 'atk', label: 'AS' },
                  { key: 'move', label: 'MS' }
                ]"
                :key="choice.key"
                type="button"
                class="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                :class="wine === choice.key ? 'bg-amber-300 text-zinc-900' : 'text-zinc-300 hover:bg-zinc-800/70'"
                @click="wine = choice.key as WineChoice"
              >
                {{ choice.label }}
              </button>
            </div>
          </div>

          <div class="space-y-2">
            <label class="mk-eyebrow block">Node Level</label>
            <div class="grid grid-cols-2 gap-2 rounded-xl border border-zinc-700/80 bg-zinc-800/65 p-1">
              <button
                v-for="lv in [1, 2]"
                :key="lv"
                type="button"
                class="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                :class="level === lv ? 'bg-amber-300 text-zinc-900' : 'text-zinc-300 hover:bg-zinc-800/70'"
                @click="level = lv as LevelKey"
              >
                Level {{ lv }}
              </button>
            </div>
          </div>
        </div>

        <div class="mk-card p-5 md:p-6 space-y-5">
          <h2 class="text-xl font-semibold">Results</h2>

          <div class="grid sm:grid-cols-2 gap-3">
            <div class="rounded-xl border border-zinc-700/70 bg-zinc-800/75 p-4">
              <div class="text-sm text-zinc-400">SSB Evolution Damage</div>
              <div class="mk-number-value text-3xl font-bold mt-1">
                {{ fmt(evo.totalEvo) }}<span class="mk-percent-symbol">%</span>
              </div>
              <div class="text-xs text-zinc-500 mt-1">Max {{ levelConfig.maxEvo }}%</div>
            </div>
            <div class="rounded-xl border border-zinc-700/70 bg-zinc-800/75 p-4">
              <div class="text-sm text-zinc-400">Excess Conversion</div>
              <div class="mk-number-value text-3xl font-bold mt-1">
                {{ fmt(evo.excessEvo) }}<span class="mk-percent-symbol">%</span>
              </div>
              <div class="text-xs text-zinc-500 mt-1">Overcap only</div>
            </div>
          </div>

          <div>
            <div class="h-3 rounded-full bg-zinc-800/80 overflow-hidden">
              <div class="h-full rounded-full bg-gradient-to-r from-amber-400 to-cyan-400 transition-all" :style="{ width: `${progress}%` }" />
            </div>
            <p class="text-sm text-zinc-400 mt-2">{{ fmt(evo.totalEvo) }}% of {{ levelConfig.maxEvo }}% cap</p>
          </div>

          <div class="grid sm:grid-cols-3 gap-3">
            <div class="rounded-xl border border-zinc-700/70 bg-zinc-800/75 p-3 sm:col-span-3">
              <div class="text-sm text-zinc-400">Total Speeds</div>
              <div class="mk-number-value text-xl font-semibold mt-1">AS {{ fmt(computedSpeeds.atk) }} / MS {{ fmt(computedSpeeds.move) }}</div>
              <div class="text-xs text-zinc-500 mt-1">Uncapped totals</div>
            </div>
            <div class="rounded-xl border border-zinc-700/70 bg-zinc-800/75 p-3">
              <div class="text-sm text-zinc-400">Overcap Total</div>
              <div class="mk-number-value text-xl font-semibold mt-1">
                {{ fmt(evo.overTotal) }}<span class="mk-percent-symbol">%</span>
              </div>
              <div class="text-xs text-zinc-500 mt-1">AS {{ fmt(evo.overAtk) }} / MS {{ fmt(evo.overMove) }}</div>
            </div>
            <div class="rounded-xl border border-zinc-700/70 bg-zinc-800/75 p-3 sm:col-span-2">
              <div class="text-sm text-zinc-400">Overcap Needed</div>
              <div class="mk-number-value text-xl font-semibold mt-1">
                {{ fmt(requiredExcess) }}<span class="mk-percent-symbol">%</span>
              </div>
              <div class="text-xs text-zinc-500 mt-1">Combined above 140%</div>
            </div>
          </div>

          <div class="rounded-xl border border-zinc-700/70 bg-zinc-900/80 p-4 space-y-3">
            <p class="mk-eyebrow">Swiftness Breakpoints</p>
            <div class="grid sm:grid-cols-3 gap-2">
               <div class="rounded-lg border border-zinc-700/70 bg-zinc-800/70 p-3">
                <div class="text-xs text-zinc-500 min-h-[2.25rem]">Support + Feast + Wine</div>
                <div class="mk-number-value text-base font-semibold mt-1">{{ breakpoints.full }}</div>
              </div>
               <div class="rounded-lg border border-zinc-700/70 bg-zinc-800/70 p-3">
                <div class="text-xs text-zinc-500 min-h-[2.25rem]">Support + Feast</div>
                <div class="mk-number-value text-base font-semibold mt-1">{{ breakpoints.feast }}</div>
              </div>
               <div class="rounded-lg border border-zinc-700/70 bg-zinc-800/70 p-3">
                <div class="text-xs text-zinc-500 min-h-[2.25rem]">Support Only</div>
                <div class="mk-number-value text-base font-semibold mt-1">{{ breakpoints.none }}</div>
              </div>
            </div>
          </div>

          <div class="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 space-y-2">
            <p
              v-for="message in callouts"
              :key="message"
              class="text-sm text-amber-200"
            >
              {{ message }}
            </p>
          </div>
        </div>
      </section>

      <section class="mk-card p-5 md:p-6 mt-5 space-y-3">
        <h2 class="text-xl font-semibold">How it is calculated</h2>
        <div class="rounded-xl border border-zinc-700/70 bg-zinc-900/70 p-4 space-y-2 text-sm text-zinc-300">
          <code class="block">Bonus (capped): max(min(speed, 140) - 100, 0)</code>
          <code class="block">Excess: max(speed - 140, 0)</code>
          <code class="block">Total speed: 100 + sum of bonuses</code>
          <code class="block">BT AS/MS: (1 + 0.26 / 699 * Spec) * 20%</code>
          <code class="block">Base: (bonusAS + bonusMS) * baseRate</code>
          <code class="block">Excess: (overAS + overMS) * excessRate</code>
          <code class="block">Total: min(base + flat + excess, maxEvo)</code>
        </div>
        <div class="text-sm text-zinc-400 space-y-1">
          <p><strong class="text-zinc-200">Level 1:</strong> base 5%, excess 15%, flat 4%, max 12%</p>
          <p><strong class="text-zinc-200">Level 2:</strong> base 10%, excess 30%, flat 8%, max 24%</p>
        </div>
      </section>
    </UContainer>
  </div>
</template>
