export type AdvancedHoningGearType =
    | 'armor'
    | 'weapon'

export type AdvancedHoningBracket =
    | '1-10'
    | '11-20'
    | '21-30'
    | '31-40'

export type AdvancedHoningCost = {
    gold: number
    shards: number
    fusions: number
    stones: number
    leaps: number
    breaths: number
    scrolls: number
}

// PROVISIONAL MODEL:
//
// - Live/current 1-orb Grace rules.
// - Expected 10-level bracket totals.
// - Armor source values were totals for all 5 armor pieces
//   and are normalized here per individual piece.
// - Individual AH levels are provisionally treated as 1/10
//   of the bracket expectation.
// - Silver and non-tradable tempering materials are excluded
//   from gold-efficiency valuation.

export const ADVANCED_HONING_BRACKET_COSTS:
    Record<
        AdvancedHoningGearType,
        Record<AdvancedHoningBracket, AdvancedHoningCost>
    > = {

    armor: {
        '1-10': {
            gold: 20673.6,
            shards: 13057,
            fusions: 217.8,
            stones: 6528.6,
            leaps: 174.2,
            breaths: 28.8,
            scrolls: 7.2
        },

        '11-20': {
            gold: 39170.8,
            shards: 32114,
            fusions: 217.8,
            stones: 11751.4,
            leaps: 217.8,
            breaths: 43.2,
            scrolls: 7.2
        },

        '21-30': {
            gold: 82330,
            shards: 288154.6,
            fusions: 700,
            stones: 41165,
            leaps: 741,
            breaths: 148.4,
            scrolls: 7.6
        },

        '31-40': {
            gold: 98796,
            shards: 329319.4,
            fusions: 782.2,
            stones: 49398,
            leaps: 946.8,
            breaths: 178,
            scrolls: 7.6
        }
    },

    weapon: {
        '1-10': {
            gold: 24504,
            shards: 21762,
            fusions: 349,
            stones: 7835,
            leaps: 218,
            breaths: 29,
            scrolls: 8
        },

        '11-20': {
            gold: 54404,
            shards: 53524,
            fusions: 392,
            stones: 14363,
            leaps: 305,
            breaths: 44,
            scrolls: 8
        },

        '21-30': {
            gold: 123495,
            shards: 473397,
            fusions: 1153,
            stones: 49398,
            leaps: 1030,
            breaths: 149,
            scrolls: 8
        },

        '31-40': {
            gold: 164660,
            shards: 535144,
            fusions: 1235,
            stones: 57631,
            leaps: 1318,
            breaths: 178,
            scrolls: 8
        }
    }
}

export const ADVANCED_HONING_TEMPERING_SHARDS:
    Record<
        AdvancedHoningGearType,
        Record<AdvancedHoningBracket, number>
    > = {

    armor: {
        '1-10': 3000,
        '11-20': 6000,
        '21-30': 70000,
        '31-40': 140000
    },

    weapon: {
        '1-10': 5000,
        '11-20': 10000,
        '21-30': 115000,
        '31-40': 230000
    }
}

export function getAdvancedHoningBracket(
    targetLevel: number
): AdvancedHoningBracket | null {
    if (targetLevel >= 1 && targetLevel <= 10) {
        return '1-10'
    }

    if (targetLevel >= 11 && targetLevel <= 20) {
        return '11-20'
    }

    if (targetLevel >= 21 && targetLevel <= 30) {
        return '21-30'
    }

    if (targetLevel >= 31 && targetLevel <= 40) {
        return '31-40'
    }

    return null
}

export function getAdvancedHoningStepCost(
    gearType: AdvancedHoningGearType,
    targetLevel: number
): AdvancedHoningCost | null {
    const bracket =
        getAdvancedHoningBracket(targetLevel)

    if (bracket === null) {
        return null
    }

    const bracketCost =
        ADVANCED_HONING_BRACKET_COSTS[
            gearType
        ][bracket]

    return {
        gold: bracketCost.gold / 10,
        shards: bracketCost.shards / 10,
        fusions: bracketCost.fusions / 10,
        stones: bracketCost.stones / 10,
        leaps: bracketCost.leaps / 10,
        breaths: bracketCost.breaths / 10,
        scrolls: bracketCost.scrolls / 10
    }
}

export function getAdvancedHoningTemperingShards(
    gearType: AdvancedHoningGearType,
    currentLevel: number,
    targetLevel: number
): number {
    if (targetLevel !== currentLevel + 1) {
        return 0
    }

    if (
        targetLevel !== 1 &&
        targetLevel !== 11 &&
        targetLevel !== 21 &&
        targetLevel !== 31
    ) {
        return 0
    }

    const bracket =
        getAdvancedHoningBracket(targetLevel)

    if (bracket === null) {
        return 0
    }

    return ADVANCED_HONING_TEMPERING_SHARDS[
        gearType
    ][bracket]
}

export function getAdvancedHoningBasicEffectBonus(
    targetLevel: number
): number {
    if (targetLevel === 30) {
        return 2
    }

    if (targetLevel === 40) {
        return 3
    }

    return 0
}

export function getAdvancedHoningTotalBasicEffectBonus(
    level: number
): number {
    if (level >= 40) return 5
    if (level >= 30) return 2
    return 0
}

function getAdvancedHoningOrdinaryDamageGain(
    regularHoneDamageGain: number
): number {
    return regularHoneDamageGain / 5
}

// PROVISIONAL:
// Converts AH Basic Effect breakpoint bonuses into character damage
// using the current honing baseline.
// Weapon AH damage values are anchored to the existing 1.2%
// regular-hone damage estimate. Replace during full damage audit.

const PROVISIONAL_ARMOR_HONE_DAMAGE = 0.21
const PROVISIONAL_WEAPON_HONE_DAMAGE = 1.2

const PROVISIONAL_ARMOR_AH30_DAMAGE = 0.175
const PROVISIONAL_ARMOR_AH40_DAMAGE = 0.263

const PROVISIONAL_WEAPON_AH30_DAMAGE = 0.995
const PROVISIONAL_WEAPON_AH40_DAMAGE = 1.460

export function getAdvancedHoningBreakpointDamageGain(
    gearType: AdvancedHoningGearType,
    targetLevel: number
): number {
    if (targetLevel === 30) {
        return gearType === 'weapon'
            ? PROVISIONAL_WEAPON_AH30_DAMAGE
            : PROVISIONAL_ARMOR_AH30_DAMAGE
    }

    if (targetLevel === 40) {
        return gearType === 'weapon'
            ? PROVISIONAL_WEAPON_AH40_DAMAGE
            : PROVISIONAL_ARMOR_AH40_DAMAGE
    }

    return 0
}

export function getAdvancedHoningStepDamageGain(
    gearType: AdvancedHoningGearType,
    targetLevel: number
): number {
    const regularHoneDamageGain =
        gearType === 'weapon'
            ? PROVISIONAL_WEAPON_HONE_DAMAGE
            : PROVISIONAL_ARMOR_HONE_DAMAGE

    return (
        getAdvancedHoningOrdinaryDamageGain(
            regularHoneDamageGain
        ) +
        getAdvancedHoningBreakpointDamageGain(
            gearType,
            targetLevel
        )
    )
}