export type AccessoryType =
    | 'necklace'
    | 'earring'
    | 'ring'

export type AccRoll = '0' | 'L' | 'M' | 'H'
export type AccKey = `${AccRoll}/${AccRoll}`

export type AccessoryValue = {
    state: AccKey
    damagePercent: number
    price: number
}

export function getAccessoryValue(
    type: AccessoryType,
    state: AccKey
): AccessoryValue | null {
    return ACCESSORY_VALUES[type].find(
        value => value.state === state
    ) ?? null
}

export function getAccessoryTargets(
    type: AccessoryType,
    currentState: AccKey
): AccessoryValue[] {
    const current =
        getAccessoryValue(type, currentState)

    if (current === null) {
        return []
    }

    return ACCESSORY_VALUES[type].filter(
        target =>
            target.damagePercent >
            current.damagePercent
    )
}

// PROVISIONAL:
// Accessory prices are market snapshots and damage values are currently
// treated as fixed additive percentages for calculator architecture testing.
// Replace/revalidate before public release.
export const ACCESSORY_VALUES:
    Record<AccessoryType, AccessoryValue[]> = {

    necklace: [
        { state: '0/0', damagePercent: 0.00, price: 0 },

        { state: 'L/0', damagePercent: 0.50, price: 1300 },
        { state: 'L/L', damagePercent: 1.05, price: 1300 },
        { state: 'L/M', damagePercent: 1.71, price: 4000 },
        { state: 'L/H', damagePercent: 2.51, price: 60000 },

        { state: 'M/0', damagePercent: 1.15, price: 2000 },
        { state: 'M/L', damagePercent: 1.71, price: 2000 },
        { state: 'M/M', damagePercent: 2.36, price: 28000 },
        { state: 'M/H', damagePercent: 3.17, price: 600000 },

        { state: 'H/0', damagePercent: 1.86, price: 2500 },
        { state: 'H/L', damagePercent: 2.42, price: 26500 },
        { state: 'H/M', damagePercent: 3.08, price: 470000 },
        { state: 'H/H', damagePercent: 3.90, price: 5220000 },

        { state: '0/L', damagePercent: 0.55, price: 500 },
        { state: '0/M', damagePercent: 1.20, price: 2000 },
        { state: '0/H', damagePercent: 2.00, price: 8600 }
    ],

    earring: [
        { state: '0/0', damagePercent: 0.00, price: 0 },

        { state: 'L/0', damagePercent: 0.36, price: 1500 },
        { state: 'L/L', damagePercent: 0.73, price: 3200 },
        { state: 'L/M', damagePercent: 1.20, price: 3200 },
        { state: 'L/H', damagePercent: 1.77, price: 36000 },

        { state: 'M/0', damagePercent: 0.85, price: 2000 },
        { state: 'M/L', damagePercent: 1.22, price: 7500 },
        { state: 'M/M', damagePercent: 1.70, price: 32000 },
        { state: 'M/H', damagePercent: 2.26, price: 350000 },

        { state: 'H/0', damagePercent: 1.39, price: 11000 },
        { state: 'H/L', damagePercent: 1.77, price: 50000 },
        { state: 'H/M', damagePercent: 2.24, price: 780000 },
        { state: 'H/H', damagePercent: 2.81, price: 4321000 },

        { state: '0/L', damagePercent: 0.37, price: 1000 },
        { state: '0/M', damagePercent: 0.84, price: 1000 },
        { state: '0/H', damagePercent: 1.40, price: 13000 }
    ],

    ring: [
        { state: '0/0', damagePercent: 0.00, price: 0 },

        { state: 'L/0', damagePercent: 0.29, price: 1000 },
        { state: 'L/L', damagePercent: 0.68, price: 3000 },
        { state: 'L/M', damagePercent: 1.14, price: 3000 },
        { state: 'L/H', damagePercent: 1.70, price: 80000 },

        { state: 'M/0', damagePercent: 0.68, price: 1000 },
        { state: 'M/L', damagePercent: 1.07, price: 3000 },
        { state: 'M/M', damagePercent: 1.54, price: 10000 },
        { state: 'M/H', damagePercent: 2.10, price: 725000 },

        { state: 'H/0', damagePercent: 1.11, price: 6600 },
        { state: 'H/L', damagePercent: 1.50, price: 40000 },
        { state: 'H/M', damagePercent: 1.97, price: 400000 },
        { state: 'H/H', damagePercent: 2.54, price: 4000000 },

        { state: '0/L', damagePercent: 0.39, price: 1000 },
        { state: '0/M', damagePercent: 0.85, price: 2000 },
        { state: '0/H', damagePercent: 1.41, price: 9000 }
    ]
}
