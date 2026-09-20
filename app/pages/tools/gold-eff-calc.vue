<script setup lang="ts">
    useHead({
        title: 'Gold Efficiency Calc - Mokokompendium',
        meta: [{ name: 'description', content: 'Gold Efficiency Calculator Comparison.' }]
    })

    import {
        HONING_STEPS,
        getHoningDamageGain,
        type HoningGearType,
        type HoningStep,
        type HoningTier
    } from '~/utils/gold-efficiency/honing'

    import {
        type AccKey,
        type AccessoryType,
        type AccRoll,
        getAccessoryValue,
        getAccessoryTargets
    } from '~/utils/gold-efficiency/accessories'

    import {
        getAdvancedHoningStepCost,
        getAdvancedHoningTemperingShards,
        getAdvancedHoningStepDamageGain,
        type AdvancedHoningGearType,
        type AdvancedHoningCost
    } from '~/utils/gold-efficiency/advanced-honing'

    type AdvancedHoningRecommendation = {
        id: string
        slot: keyof typeof gear
        slotLabel: string
        gearType: AdvancedHoningGearType

        currentLevel: number
        targetLevel: number

        effectiveCost: number
        damageGainPercent: number
        goldPerOnePercent: number
    }

    type AccessoryRecommendation = {
        id: string
        accessoryKey: string
        accessoryLabel: string
        accessoryType: AccessoryType
        currentState: AccKey
        targetState: AccKey
        effectiveCost: number
        damageGainPercent: number
        goldPerOnePercent: number
    }

    type HoningPathRecommendation = {
        id: string
        slot: keyof typeof gear
        slotLabel: string
        startTier: HoningTier
        targetTier: HoningTier

        currentLevel: number
        targetLevel: number
        transferLevel: number | null
        targetAdvancedHoning: number

        steps: ProgressionPathStep[]

        effectiveCost: number
        damageGainPercent: number
        goldPerOnePercent: number
    }

    type HoningRecommendation = {
        id: string
        slot: keyof typeof gear
        slotLabel: string
        tier: HoningTier
        gearType: HoningGearType
        currentLevel: number
        targetLevel: number
        strategy: HoningStep['strategy']
        step: HoningStep
    }

    type RankedRecommendation =
        | {
            system: 'honing'
            id: string
            title: string
            effectiveCost: number
            damageGainPercent: number
            goldPerOnePercent: number
            detail: HoningPathRecommendation
        }
        | {
            system: 'accessory'
            id: string
            title: string
            effectiveCost: number
            damageGainPercent: number
            goldPerOnePercent: number
            detail: AccessoryRecommendation
        }
        | {
            id: string
            system: 'advanced-honing'
            title: string
            effectiveCost: number
            damageGainPercent: number
            goldPerOnePercent: number
            detail: AdvancedHoningRecommendation
        }

    type PricedHoningRecommendation = HoningRecommendation & {
        effectiveCost: number
        damageGainPercent: number | null
        goldPerOnePercent: number
    }

    type GroupedHoningRecommendation = {
        id: string
        slot: keyof typeof gear
        slotLabel: string
        tier: HoningTier
        currentLevel: number
        targetLevel: number
        variants: PricedHoningRecommendation[]
        bestVariant: PricedHoningRecommendation
    }

    type ProgressionPathStep =
        | {
            system: 'honing'
            detail: GroupedHoningRecommendation
        }
        | {
            system: 'advanced-honing'
            detail: AdvancedHoningRecommendation
        }

    function getProgressionPathStepId(
        step: ProgressionPathStep
    ): string {
        return step.detail.id
    }

    function getProgressionPathStepCost(
        step: ProgressionPathStep
    ): number {
        if (step.system === 'honing') {
            return step.detail.bestVariant.effectiveCost
        }

        return step.detail.effectiveCost
    }

    const rankedRecommendations =
        computed<RankedRecommendation[]>(() => {
            const honing =
                honingPathRecommendations.value.map(
                    recommendation => ({
                        id: recommendation.id,
                        system: 'honing' as const,
                        title:
                            recommendation.startTier !==
                                recommendation.targetTier
                                ? `${recommendation.slotLabel} +${recommendation.currentLevel} to ${recommendation.targetTier.toUpperCase()} +${recommendation.targetLevel}`
                                : `${recommendation.slotLabel} +${recommendation.currentLevel} to +${recommendation.targetLevel}`,
                        effectiveCost:
                            recommendation.effectiveCost,
                        damageGainPercent:
                            recommendation.damageGainPercent,
                        goldPerOnePercent:
                            recommendation.goldPerOnePercent,
                        detail: recommendation
                    })
                )

            const accessory =
                accessoryRecommendations.value.map(
                    recommendation => ({
                        id: recommendation.id,
                        system: 'accessory' as const,
                        title:
                            `${recommendation.accessoryLabel} ` +
                            `${recommendation.currentState} to ${recommendation.targetState}`,
                        effectiveCost:
                            recommendation.effectiveCost,
                        damageGainPercent:
                            recommendation.damageGainPercent,
                        goldPerOnePercent:
                            recommendation.goldPerOnePercent,
                        detail: recommendation
                    })
                )

            const advancedHoning =
                advancedHoningRecommendations.value.map(
                    recommendation => ({
                        id: recommendation.id,
                        system: 'advanced-honing' as const,

                        title:
                            `${recommendation.slotLabel} AH ` +
                            `${recommendation.currentLevel} to ${recommendation.targetLevel}`,

                        effectiveCost:
                            recommendation.effectiveCost,

                        damageGainPercent:
                            recommendation.damageGainPercent,

                        goldPerOnePercent:
                            recommendation.goldPerOnePercent,

                        detail: recommendation
                    })
                )

            return [
                ...honing,
                ...advancedHoning,
                ...accessory
            ].sort(
                (a, b) =>
                    a.goldPerOnePercent -
                    b.goldPerOnePercent
            )
        })

        const EFFICIENCY_EPSILON = 0.0001

        function filterRedundantAdvancedHoningPaths(
            recommendations: AdvancedHoningRecommendation[]
        ): AdvancedHoningRecommendation[] {
            return recommendations.filter(
                recommendation =>
                    !recommendations.some(
                        other =>
                            other.slot === recommendation.slot &&
                            other.currentLevel === recommendation.currentLevel &&
                            other.targetLevel > recommendation.targetLevel &&
                            other.goldPerOnePercent <=
                                recommendation.goldPerOnePercent +
                                EFFICIENCY_EPSILON
                    )
            )
        }

        function filterRedundantHoningPaths(
            recommendations: HoningPathRecommendation[]
        ): HoningPathRecommendation[] {
            return recommendations.filter(
                recommendation =>
                    !recommendations.some(
                        other => {
                            if (
                                other.slot !== recommendation.slot ||
                                other.startTier !== recommendation.startTier ||
                                other.currentLevel !== recommendation.currentLevel ||
                                other.targetAdvancedHoning !== recommendation.targetAdvancedHoning
                            ) {
                                return false
                            }

                            const givesAtLeastAsMuchDamage =
                                other.damageGainPercent >=
                                    recommendation.damageGainPercent -
                                    EFFICIENCY_EPSILON

                            const isAtLeastAsEfficient =
                                other.goldPerOnePercent <=
                                    recommendation.goldPerOnePercent +
                                    EFFICIENCY_EPSILON

                            const isActuallyBetter =
                                other.damageGainPercent >
                                    recommendation.damageGainPercent +
                                    EFFICIENCY_EPSILON ||
                                other.goldPerOnePercent <
                                    recommendation.goldPerOnePercent -
                                EFFICIENCY_EPSILON

                            const isRedundant =
                                givesAtLeastAsMuchDamage &&
                                isAtLeastAsEfficient &&
                                isActuallyBetter

                            return isRedundant
                        }
                    )
            )
        }

        function filterRedundantAccessoryRecommendations(
            recommendations: AccessoryRecommendation[]
        ): AccessoryRecommendation[] {
            return recommendations.filter(
                recommendation =>
                    !recommendations.some(
                        other => {
                            if (
                                other.accessoryKey !==
                                    recommendation.accessoryKey ||
                                other.currentState !==
                                    recommendation.currentState
                            ) {
                                return false
                            }

                            const givesAtLeastAsMuchDamage =
                                other.damageGainPercent >=
                                    recommendation.damageGainPercent -
                                    EFFICIENCY_EPSILON

                            const isAtLeastAsEfficient =
                                other.goldPerOnePercent <=
                                    recommendation.goldPerOnePercent +
                                    EFFICIENCY_EPSILON

                            const isActuallyBetter =
                                other.damageGainPercent >
                                    recommendation.damageGainPercent +
                                    EFFICIENCY_EPSILON ||
                                other.goldPerOnePercent <
                                    recommendation.goldPerOnePercent -
                                    EFFICIENCY_EPSILON

                            return (
                                givesAtLeastAsMuchDamage &&
                                isAtLeastAsEfficient &&
                                isActuallyBetter
                            )
                        }
                    )
            )
    }

    const firstAccessoryRecommendationId = computed(() => {
        return (
            topRecommendations.value.find(
                recommendation =>
                    recommendation.system === 'accessory'
            )?.id ?? null
        )
    })

    const advancedHoningRecommendations =
        computed<AdvancedHoningRecommendation[]>(() => {
            const recommendations:
                AdvancedHoningRecommendation[] = []

            for (const [slotName, piece] of Object.entries(gear)) {
                const slot =
                    slotName as keyof typeof gear

                // T4.5 pieces have already completed AH.
                if (piece.serca) {
                    continue
                }

                const gearType: AdvancedHoningGearType =
                    slot === 'weapon'
                        ? 'weapon'
                        : 'armor'

                const startLevel =
                    piece.advancedHoning

                let pathCost = 0
                let pathDamageGain = 0
                let currentLevel = startLevel

                for (
                    let targetLevel = startLevel + 1;
                    targetLevel <= 40;
                    targetLevel++
                ) {
                    const step =
                        getAdvancedHoningStepCost(
                            gearType,
                            targetLevel
                        )

                    if (step === null) {
                        break
                    }

                    const temperingShards =
                        getAdvancedHoningTemperingShards(
                            gearType,
                            currentLevel,
                            targetLevel
                        )

                    pathCost +=
                        calculateAdvancedHoningStepCost(
                            step,
                            gearType,
                            temperingShards,
                            targetLevel
                        )

                    pathDamageGain +=
                        getAdvancedHoningStepDamageGain(
                            gearType,
                            targetLevel
                        )

                    recommendations.push({
                        id: [
                            'advanced-honing',
                            slot,
                            startLevel,
                            targetLevel
                        ].join('-'),

                        slot,
                        slotLabel:
                            GEAR_SLOT_LABELS[slot],

                        gearType,

                        currentLevel:
                            startLevel,

                        targetLevel,

                        effectiveCost:
                            pathCost,

                        damageGainPercent:
                            pathDamageGain,

                        goldPerOnePercent:
                            calculateGoldPerOnePercent(
                                pathCost,
                                pathDamageGain
                            )
                    })

                    currentLevel =
                        targetLevel
                }
            }

            return filterRedundantAdvancedHoningPaths(
                recommendations
            ).sort(
                (a, b) =>
                    a.goldPerOnePercent -
                    b.goldPerOnePercent
            )
        })

function calculateAdvancedHoningStepCost(
        step: AdvancedHoningCost,
        gearType: AdvancedHoningGearType,
        temperingShards: number,
        targetLevel: number
    ): number {
        let total = step.gold

        const scrollKey =
            getAdvancedHoningScrollKey(
                gearType,
                targetLevel
            )

        if (scrollKey !== null) {
            const scrollMaterial =
            getHoningMaterial(scrollKey)

            const scrollCost =
                getMaterialCost(
                    step.scrolls,
                    scrollMaterial
                )

            total += scrollCost
        }

        total += getShardPurchaseCost(
            step.shards + temperingShards
        )

        total += getMaterialCost(
            step.fusions,
            getHoningMaterial('fusion-t4')
        )

        total += getMaterialCost(
            step.leaps,
            getHoningMaterial('leapstone-t4')
        )

        if (gearType === 'weapon') {

            total += getMaterialCost(
                step.stones,
                getHoningMaterial(
                    'destruction-stone-t4'
                )
            )

            total += getMaterialCost(
                step.breaths,
                getHoningMaterial(
                    'lavas-breath'
                )
            )

        }
        else {

            total += getMaterialCost(
                step.stones,
                getHoningMaterial(
                    'guardian-stone-t4'
                )
            )

            total += getMaterialCost(
                step.breaths,
                getHoningMaterial(
                    'glaciers-breath'
                )
            )

        }

        return total
    }

    function getBookMaterialKey(
        tier: HoningTier,
        gearType: HoningGearType,
        targetLevel: number
    ): string | null {
        if (tier !== 't4') {
            return null
        }

        const prefix =
            gearType === 'weapon'
                ? 'metal'
                : 'tailor'

        if (targetLevel >= 11 && targetLevel <= 14) {
            return `${prefix}-11-14`
        }

        if (targetLevel >= 15 && targetLevel <= 18) {
            return `${prefix}-15-18`
        }

        if (targetLevel >= 19 && targetLevel <= 20) {
            return `${prefix}-19-20`
        }

        return null
    }

    function getEnhancedBookMaterialKey(
        gearType: HoningGearType,
        targetLevel: number
    ): string | null {
        if (targetLevel < 19 || targetLevel > 20) {
            return null
        }

        return gearType === 'weapon'
            ? 'metal-19-20-e'
            : 'tailor-19-20-e'
    }

    function getAdvancedHoningScrollKey(
        gearType: AdvancedHoningGearType,
        targetLevel: number
    ): string | null {
        const prefix =
            gearType === 'weapon'
                ? 'metal'
                : 'tailor'

        if (targetLevel >= 1 && targetLevel <= 10) {
            return `${prefix}-l1`
        }

        if (targetLevel >= 11 && targetLevel <= 20) {
            return `${prefix}-l2`
        }

        if (targetLevel >= 21 && targetLevel <= 30) {
            return `${prefix}-l3`
        }

        if (targetLevel >= 31 && targetLevel <= 40) {
            return `${prefix}-l4`
        }

        return null
    }

    const expandedRecommendationIds = ref<Set<string>>(new Set())

    function toggleRecommendation(id: string) {
        const updated = new Set(expandedRecommendationIds.value)

        if (updated.has(id)) {
            updated.delete(id)
        } else {
            updated.add(id)
        }

        expandedRecommendationIds.value = updated
    }

    function isRecommendationExpanded(id: string) {
        return expandedRecommendationIds.value.has(id)
    }

    const expandedPathIds = ref<Set<string>>(new Set())
    const expandedStepIds = ref<Set<string>>(new Set())

    function togglePath(id: string) {
        const updated = new Set(expandedPathIds.value)

        if (updated.has(id)) {
            updated.delete(id)
        } else {
            updated.add(id)
        }

        expandedPathIds.value = updated
    }

    function isPathExpanded(id: string) {
        return expandedPathIds.value.has(id)
    }

    function toggleStep(id: string) {
        const updated = new Set(expandedStepIds.value)

        if (updated.has(id)) {
            updated.delete(id)
        } else {
            updated.add(id)
        }

        expandedStepIds.value = updated
    }

    function isStepExpanded(id: string) {
        return expandedStepIds.value.has(id)
    }

    function isHoningPathExpandable(
        recommendation: HoningPathRecommendation
    ): boolean {
        if (recommendation.steps.length > 1) {
            return true
        }

        const firstStep = recommendation.steps[0]

        return (
            firstStep?.system === 'honing' &&
            firstStep.detail.variants.length > 1
        )
    }

    function range(start: number, end: number) {
        return Array.from(
            { length: end - start + 1 },
            (_, index) => start + index
        )
    }

    const expandedMaterialGroup =
        ref<string | null>(null)

    function toggleMaterialGroup(
        group: string
    ) {
        expandedMaterialGroup.value =
            expandedMaterialGroup.value === group
                ? null
                : group
    }

    const t4HoningLevels = range(10, 25)
    const t45HoningLevels = range(11, 25)
    const advancedHoningLevels = range(0, 40)

    function getValidHoningLevels(serca: boolean) {
        return serca
            ? t45HoningLevels
            : t4HoningLevels
    }

    function buildAdvancedHoningStep(
        slot: keyof typeof gear,
        gearType: AdvancedHoningGearType,
        currentLevel: number,
        targetLevel: number
    ): AdvancedHoningRecommendation | null {
        if (
            targetLevel <= currentLevel ||
            targetLevel > 40
        ) {
            return null
        }

        let pathCost = 0
        let pathDamageGain = 0
        let level = currentLevel

        for (
            let nextLevel = currentLevel + 1;
            nextLevel <= targetLevel;
            nextLevel++
        ) {
            const step =
                getAdvancedHoningStepCost(
                    gearType,
                    nextLevel
                )

            if (step === null) {
                return null
            }

            const temperingShards =
                getAdvancedHoningTemperingShards(
                    gearType,
                    level,
                    nextLevel
                )

            pathCost +=
                calculateAdvancedHoningStepCost(
                    step,
                    gearType,
                    temperingShards,
                    nextLevel
                )

            pathDamageGain +=
                getAdvancedHoningStepDamageGain(
                    gearType,
                    nextLevel
                )

            level = nextLevel
        }

        return {
            id: [
                'advanced-honing',
                slot,
                currentLevel,
                targetLevel
            ].join('-'),

            slot,
            slotLabel:
                GEAR_SLOT_LABELS[slot],

            gearType,

            currentLevel,
            targetLevel,

            effectiveCost:
                pathCost,

            damageGainPercent:
                pathDamageGain,

            goldPerOnePercent:
                calculateGoldPerOnePercent(
                    pathCost,
                    pathDamageGain
                )
        }
    }

    function buildGroupedHoningStep(
        slot: keyof typeof gear,
        tier: HoningTier,
        gearType: HoningGearType,
        currentLevel: number,
        targetLevel: number
    ): GroupedHoningRecommendation | null {
        const availableSteps = getHoningSteps(
            tier,
            gearType,
            targetLevel
        )

        if (availableSteps.length === 0) {
            return null
        }

        const variants: PricedHoningRecommendation[] =
            availableSteps.map(step => {
                const effectiveCost =
                    calculateHoningStepCost(step)

                const damageGainPercent =
                    getHoningDamageGain(
                        tier,
                        gearType,
                        targetLevel
                    )

                const goldPerOnePercent =
                    calculateGoldPerOnePercent(
                        effectiveCost,
                        damageGainPercent
                    )

                return {
                    id: [
                        'honing',
                        tier,
                        gearType,
                        slot,
                        targetLevel,
                        step.strategy
                    ].join('-'),

                    slot,
                    slotLabel: GEAR_SLOT_LABELS[slot],
                    tier,
                    gearType,
                    currentLevel,
                    targetLevel,
                    strategy: step.strategy,
                    step,

                    effectiveCost,
                    damageGainPercent,
                    goldPerOnePercent
                }
            })

        const sortedVariants = [...variants].sort(
            (a, b) =>
                a.goldPerOnePercent -
                b.goldPerOnePercent
        )
        //unless it doesn't return the type properly
        if (sortedVariants.length === 0) {
            return null
        }

        const bestVariant = sortedVariants[0]

        if (!bestVariant) {
            return null
        }

        return {
            id: [
                slot,
                tier,
                currentLevel,
                targetLevel
            ].join('-'),

            slot,
            slotLabel: GEAR_SLOT_LABELS[slot],
            tier,
            currentLevel,
            targetLevel,

            variants,
            bestVariant
        }
    }

    const GEAR_SLOT_LABELS: Record<keyof typeof gear, string> = {
        helmet: 'Helmet',
        shoulder: 'Shoulder',
        chest: 'Chest',
        legs: 'Legs',
        gloves: 'Gloves',
        weapon: 'Weapon'
    }

    const GEAR_SLOT_ORDER: Record<keyof typeof gear, number> = {
        helmet: 0,
        shoulder: 1,
        chest: 2,
        legs: 3,
        gloves: 4,
        weapon: 5
    }

    const STRATEGY_ORDER: Record<HoningStep['strategy'], number> = {
        'Full Juice': 0,
        'No Juice': 1
    }

    function getHoningMaterial(
        key: string
    ): MaterialCostInput {

        const material =
            honingMaterials.find(
                material => material.key === key
            )

        if (!material) {
            throw new Error(
                `Missing honing material: ${key}`
            )
        }

        return material
    }

    function getShardPurchaseCost(
        requiredShards: number
    ): number {
        const shards =
            getHoningMaterial('shards')

        if (shards.owned) {
            return 0
        }

        const bags = [
            getHoningMaterial('destiny-shard-small'),
            getHoningMaterial('destiny-shard-medium'),
            getHoningMaterial('destiny-shard-large')
        ]

        const cheapestGoldPerShard =
            Math.min(
                ...bags.map(
                    bag =>
                        bag.price /
                        bag.marketUnitSize
                )
            )

        return requiredShards * cheapestGoldPerShard

    }

    function getStoneMaterialKey(step: HoningStep) {
        if (step.gearType === 'weapon') {
            return step.tier === 't4'
                ? 'destruction-stone-t4'
                : 'destruction-stone-t45'
        }

        return step.tier === 't4'
            ? 'guardian-stone-t4'
            : 'guardian-stone-t45'
    }

    function getLeapMaterialKey(step: HoningStep) {
        return step.tier === 't4'
            ? 'leapstone-t4'
            : 'leapstone-t45'
    }

    function getFusionMaterialKey(step: HoningStep) {
        return step.tier === 't4'
            ? 'fusion-t4'
            : 'fusion-t45'
    }

    function getBreathMaterialKey(step: HoningStep) {
        return step.gearType === 'weapon'
            ? 'lavas-breath'
            : 'glaciers-breath'
    }

    function getHoningSteps(
        tier: HoningTier,
        gearType: HoningGearType,
        targetLevel: number
    ) {
        return HONING_STEPS.filter(
            step =>
                step.tier === tier &&
                step.gearType === gearType &&
                step.targetLevel === targetLevel
        )
    }

    function getAlternateVariants(
        recommendation: GroupedHoningRecommendation
    ) {
        return recommendation.variants.filter(
            variant => variant.id !== recommendation.bestVariant.id
        )
    }

    const T4_TO_T45_LEVEL: Record<number, number> = {
        20: 11,
        21: 12,
        22: 13,
        23: 14,
        24: 16,
        25: 18
    }

    function getT4PieceItemLevel(
        honingLevel: number,
        advancedHoning: number
    ): number {
        return (
            1640 +
            (honingLevel - 10) * 5 +
            advancedHoning
        )
    }

    function getT45PieceItemLevel(
        honingLevel: number
    ): number {
        return (
            1730 +
            (honingLevel - 11) * 5
        )
    }

    function getPieceActualItemLevel(
        serca: boolean,
        honingLevel: number,
        advancedHoning: number
    ): number {
        if (!serca) {
            return getT4PieceItemLevel(
                honingLevel,
                advancedHoning
            )
        }

        return getT45PieceItemLevel(honingLevel)
    }

    function getProjectedCharacterItemLevel(
        projectedSlot: GearSlot,
        projectedTier: HoningTier,
        projectedHoningLevel: number,
        projectedAdvancedHoning: number
    ): number {
        const slots = Object.keys(gear) as GearSlot[]

        const totalItemLevel = slots.reduce((total, slot) => {
            if (slot === projectedSlot) {
                return total + getPieceActualItemLevel(
                    projectedTier === 't4.5',
                    projectedHoningLevel,
                    projectedAdvancedHoning
                )
            }

            const piece = gear[slot]

            return total + getPieceActualItemLevel(
                piece.serca,
                piece.itemLevel,
                piece.advancedHoning
            )
        }, 0)

    return totalItemLevel / slots.length
}

    function getT45TransferLevel(t4Level: number): number | null {
        return T4_TO_T45_LEVEL[t4Level] ?? null
    }

    function getT4LevelFromT45(t45Level: number): number {
        if (t45Level >= 18) return 25
        if (t45Level >= 16) return 24
        if (t45Level >= 14) return 23
        if (t45Level >= 13) return 22
        if (t45Level >= 12) return 21
        return 20
    }

    function canTransferToSerca(slot: GearSlot) {
        const piece = gear[slot]

        return (
            piece.itemLevel >= 20 &&
            piece.advancedHoning === 40 &&
            getProjectedCharacterItemLevel(
                slot,
                't4',
                piece.itemLevel,
                piece.advancedHoning
            ) >= 1730
        )
    }

    function setAllSerca() {
        for (const slot of Object.keys(gear) as GearSlot[]) {
            gear[slot].advancedHoning = 40
            gear[slot].itemLevel = 11
            gear[slot].serca = true
        }
    }

    const groupedHoningRecommendations =
        computed<GroupedHoningRecommendation[]>(() => {
            const recommendations:
                GroupedHoningRecommendation[] = []

            for (const [slotName, piece] of Object.entries(gear)) {
                const slot =
                    slotName as keyof typeof gear

                const gearType: HoningGearType =
                    slot === 'weapon'
                        ? 'weapon'
                        : 'armor'

                const tier: HoningTier =
                    piece.serca
                        ? 't4.5'
                        : 't4'

                const currentLevel = piece.itemLevel
                const targetLevel = currentLevel + 1

                const recommendation =
                    buildGroupedHoningStep(
                        slot,
                        tier,
                        gearType,
                        currentLevel,
                        targetLevel
                    )

                if (recommendation !== null) {
                    recommendations.push(recommendation)
                }
            }

            return recommendations.sort(
                (a, b) =>
                    a.bestVariant.goldPerOnePercent -
                    b.bestVariant.goldPerOnePercent
            )
        })

    const accessoryRecommendations =
        computed<AccessoryRecommendation[]>(() => {
            const recommendations:
                AccessoryRecommendation[] = []

            for (const accessory of accessories) {
                const current =
                    getAccessoryValue(
                        accessory.type,
                        accessory.roll
                    )

                if (current === null) {
                    continue
                }

                const targets =
                    getAccessoryTargets(
                        accessory.type,
                        accessory.roll
                    )

                for (const target of targets) {
                    const damageGainPercent =
                        target.damagePercent -
                        current.damagePercent

                    recommendations.push({
                        id: [
                            'accessory',
                            accessory.key,
                            accessory.roll,
                            accessory.type,
                            target.state
                        ].join('-'),

                        accessoryKey:
                            accessory.key,

                        accessoryType:
                            accessory.type,

                        accessoryLabel:
                            accessory.label,

                        currentState:
                            accessory.roll,

                        targetState:
                            target.state,

                        effectiveCost:
                            target.price,

                        damageGainPercent,

                        goldPerOnePercent:
                            calculateGoldPerOnePercent(
                                target.price,
                                damageGainPercent
                            )
                    })
                }
            }

            return filterRedundantAccessoryRecommendations(
                recommendations
            ).sort(
                (a, b) =>
                    a.goldPerOnePercent -
                    b.goldPerOnePercent
            )
        })

    function getStraightHoningDamageGain(
        gearType: HoningGearType,
        tier: HoningTier,
        currentLevel: number,
        targetLevel: number
    ): number {
        let total = 0

        for (
            let level = currentLevel + 1;
            level <= targetLevel;
            level++
        ) {
            total +=
                getHoningDamageGain(
                    tier,
                    gearType,
                    level
                ) ?? 0
        }

        return total
    }

    function getHoningPathDamageGain(
        gearType: HoningGearType,
        originalTier: HoningTier,
        originalLevel: number,
        targetTier: HoningTier,
        targetLevel: number
    ): number | null {
        // Transferable T4 endpoints use their equivalent T4.5
        // endpoint for damage valuation.
        if (
            originalTier === 't4' &&
            targetTier === 't4' &&
            targetLevel >= 20
        ) {
            const transferredTargetLevel =
                getT45TransferLevel(targetLevel)

            if (transferredTargetLevel === null) {
                return null
            }

            return getHoningPathDamageGain(
                gearType,
                originalTier,
                originalLevel,
                't4.5',
                transferredTargetLevel
            )
        }

        // Ordinary same-tier path.
        if (originalTier === targetTier) {
            return getStraightHoningDamageGain(
                gearType,
                originalTier,
                originalLevel,
                targetLevel
            )
        }

        // Canonical damage route for T4 -> T4.5.
        // Actual route determines COST.
        // Start + endpoint determine DAMAGE.
        if (
            originalTier === 't4' &&
            targetTier === 't4.5'
        ) {
            const canonicalTransferLevel =
                Math.max(originalLevel, 20)

            const transferredLevel =
                getT45TransferLevel(
                    canonicalTransferLevel
                )

            if (
                transferredLevel === null ||
                targetLevel < transferredLevel
            ) {
                return null
            }

            const t4Damage =
                getStraightHoningDamageGain(
                    gearType,
                    't4',
                    originalLevel,
                    canonicalTransferLevel
                )

            const t45Damage =
                getStraightHoningDamageGain(
                    gearType,
                    't4.5',
                    transferredLevel,
                    targetLevel
                )

            return t4Damage + t45Damage
        }

        return null
    }

    function buildStraightHoningPaths(
        slot: keyof typeof gear,
        gearType: HoningGearType,
        startTier: HoningTier,
        startLevel: number,
        currentAdvancedHoning: number,
        prefixSteps: ProgressionPathStep[] = [],
        originalTier: HoningTier = startTier,
        originalLevel: number = startLevel,
        transferLevel: number | null = null
    ): HoningPathRecommendation[] {
        const recommendations: HoningPathRecommendation[] = []
        const pathSteps: ProgressionPathStep[] = [
            ...prefixSteps
        ]

        let currentLevel = startLevel
        let targetLevel = currentLevel + 1

        if (
            startTier === 't4' &&
            startLevel >= 20 &&
            currentAdvancedHoning === 40 &&
            getProjectedCharacterItemLevel(
                slot,
                't4',
                startLevel,
                currentAdvancedHoning
            ) >= 1730
        ) {

            const transferredLevel =
                getT45TransferLevel(startLevel)

            if (transferredLevel !== null) {
                recommendations.push(
                    ...buildStraightHoningPaths(
                        slot,
                        gearType,
                        't4.5',
                        transferredLevel,
                        currentAdvancedHoning,
                        prefixSteps,
                        originalTier,
                        originalLevel,
                        startLevel
                    )
                )
            }
        }

        if (
            startTier === 't4' &&
            startLevel >= 20 &&
            currentAdvancedHoning < 40
        ) {
            const ahToForty =
                buildAdvancedHoningStep(
                    slot,
                    gearType,
                    currentAdvancedHoning,
                    40
                )

            if (ahToForty !== null) {
                const ahPathSteps: ProgressionPathStep[] = [
                    ...prefixSteps,
                    {
                        system: 'advanced-honing',
                        detail: ahToForty
                    }
                ]

                recommendations.push(
                    ...buildStraightHoningPaths(
                        slot,
                        gearType,
                        startTier,
                        startLevel,
                        40,
                        ahPathSteps,
                        originalTier,
                        originalLevel,
                        transferLevel
                    )
                )
            }
        }

        while (true) {
            const groupedStep =
                buildGroupedHoningStep(
                    slot,
                    startTier,
                    gearType,
                    currentLevel,
                    targetLevel
                )

            if (groupedStep === null) {
                break
            }

            pathSteps.push({
                system: 'honing',
                detail: groupedStep
            })

            const honingDamageGain =
                getHoningPathDamageGain(
                    gearType,
                    originalTier,
                    originalLevel,
                    startTier,
                    targetLevel
                )

            if (honingDamageGain === null) {
                break
            }

            const pathDamageGain =
                honingDamageGain + getProgressionPathAdditionalDamage(pathSteps)

            const pathCost =
                pathSteps.reduce(
                    (total, step) =>
                        total +
                        getProgressionPathStepCost(step),
                    0
                )

            recommendations.push({
                id: [
                    'honing-path',
                    slot,
                    originalTier,
                    originalLevel,
                    ...pathSteps.map(
                        step => getProgressionPathStepId(step)
                    )
                ].join('-'),

                slot,
                slotLabel: GEAR_SLOT_LABELS[slot],

                startTier: originalTier,
                targetTier: startTier,

                currentLevel: originalLevel,
                targetLevel,
                transferLevel,
                targetAdvancedHoning: currentAdvancedHoning,

                steps: [...pathSteps],

                effectiveCost: pathCost,
                damageGainPercent: pathDamageGain,

                goldPerOnePercent:
                    calculateGoldPerOnePercent(
                        pathCost,
                        pathDamageGain
                    )
            })

            if (
                startTier === 't4' &&
                targetLevel >= 20 &&
                currentAdvancedHoning < 40
            ) {
                const ahToForty =
                    buildAdvancedHoningStep(
                        slot,
                        gearType,
                        currentAdvancedHoning,
                        40
                    )

                if (ahToForty !== null) {
                    const ahPathSteps: ProgressionPathStep[] = [
                        ...pathSteps,
                        {
                            system: 'advanced-honing',
                            detail: ahToForty
                        }
                    ]

                    // recurse from SAME honing level,
                    // but now with hypothetical AH40
                    recommendations.push(
                        ...buildStraightHoningPaths(
                            slot,
                            gearType,
                            startTier,
                            targetLevel,
                            40,
                            ahPathSteps,
                            originalTier,
                            originalLevel,
                            transferLevel
                        )
                    )
                }
            }

            if (
                startTier === 't4' &&
                targetLevel >= 20 &&
                currentAdvancedHoning === 40 &&
                getProjectedCharacterItemLevel(
                    slot,
                    't4',
                    targetLevel,
                    currentAdvancedHoning
                ) >= 1730
            ) {

                const transferredLevel =
                    getT45TransferLevel(targetLevel)

                if (transferredLevel !== null) {
                    recommendations.push(
                        ...buildStraightHoningPaths(
                            slot,
                            gearType,
                            't4.5',
                            transferredLevel,
                            currentAdvancedHoning,
                            pathSteps,
                            originalTier,
                            originalLevel,
                            targetLevel
                        )
                    )
                }
            }

            currentLevel = targetLevel
            targetLevel++
        }

        return recommendations
    }

    const honingPathRecommendations =
        computed<HoningPathRecommendation[]>(() => {
            const recommendations:
                HoningPathRecommendation[] = []

            for (const [slotName, piece] of Object.entries(gear)) {
                const slot =
                    slotName as keyof typeof gear

                const gearType: HoningGearType =
                    slot === 'weapon'
                        ? 'weapon'
                        : 'armor'

                const tier: HoningTier =
                    piece.serca
                        ? 't4.5'
                        : 't4'

                const straightPaths =
                    buildStraightHoningPaths(
                        slot,
                        gearType,
                        tier,
                        piece.itemLevel,
                        piece.advancedHoning
                    )

                recommendations.push(...straightPaths)
            }

            const bestPathsByEndpoint =
                new Map<string, HoningPathRecommendation>()

            for (const recommendation of recommendations) {
                const endpointKey = [
                    recommendation.slot,
                    recommendation.targetTier,
                    recommendation.targetLevel,
                    recommendation.targetAdvancedHoning
                ].join('-')

                const existing =
                    bestPathsByEndpoint.get(endpointKey)

                if (
                    !existing ||
                    recommendation.effectiveCost <
                    existing.effectiveCost
                ) {
                    bestPathsByEndpoint.set(
                        endpointKey,
                        recommendation
                    )
                }
            }

            return filterRedundantHoningPaths(
                [...bestPathsByEndpoint.values()]
            ).sort(
                (a, b) =>
                    a.goldPerOnePercent -
                    b.goldPerOnePercent
            )
        })

    function getProgressionPathAdditionalDamage(
        steps: ProgressionPathStep[]
    ): number {
        return steps.reduce(
            (total, step) => {
                if (step.system === 'advanced-honing') {
                    return total + step.detail.damageGainPercent
                }

                return total
            },
            0
        )
    }

    function calculateHoningStepCost(step: HoningStep) {
        const stones = getHoningMaterial(
            getStoneMaterialKey(step)
        )

        const leaps = getHoningMaterial(
            getLeapMaterialKey(step)
        )

        const fusions = getHoningMaterial(
            getFusionMaterialKey(step)
        )

        const breath = getHoningMaterial(
            getBreathMaterialKey(step)
        )

        const bookKey =
            getBookMaterialKey(
                step.tier,
                step.gearType,
                step.targetLevel
            )

        const bookCost =
            bookKey === null
                ? 0
                : getMaterialCost(
                    step.books,
                    getHoningMaterial(bookKey)
                )

        return (
            step.gold +
            getMaterialCost(step.stones, stones) +
            getMaterialCost(step.leaps, leaps) +
            getMaterialCost(step.fusions, fusions) +
            getMaterialCost(step.breaths, breath) +
            getShardPurchaseCost(step.shards) +
            bookCost
        )
    }

    function calculateGoldPerOnePercent(
        effectiveCost: number,
        damageGainPercent: number | null
    ) {
        if (
            damageGainPercent === null ||
            damageGainPercent <= 0
        ) {
            return Number.POSITIVE_INFINITY
        }

        return effectiveCost / damageGainPercent
    }

    const topRecommendations =
        computed(() =>
            rankedRecommendations.value.slice(0, 10)
        )

    const includeGems = ref(true)
    const includeAccessories = ref(true)
    const includeHoning = ref(false)
    const sercaHelm = ref(false)
    const sercaShoulder = ref(false)
    const sercaChest = ref(false)
    const sercaLegs = ref(false)
    const sercaGloves = ref(false)
    const enabled = ref(true)//test val
    const isTier45 = ref(false)
    const marketPrice = ref(0)

    const gstone = ref(false)
    const gstoneval = 1
    const gstoneserca = ref(false)
    const gstonesercaval = 5
    const dstone = ref(false)
    const dstoneval = 90
    const dstoneserca = ref(false)
    const dstonesercaval = 300
    const shards = ref(false)
    const shardsval = 290
    const shardssval = 500
    const shardsmval = 1000
    const shardslval = 1500
    const leaps = ref(false)
    const leapsval = 20
    const leapsserca = ref(false)
    const leapssercaval = 40
    const gbreath = ref(false)
    const gbreathval = 300
    const lbreath = ref(false)
    const lbreathval = 290
    const tbook = ref(false)
    const tbookval = 1500
    const mbook = ref(false)
    const mbookval = 1900
    const tscroll = ref(false)
    const tscrollval = 1500
    const mscroll = ref(false)
    const mscrollval = 2000
    const chaos = ref(false)
    const chaosval = 500

    type MaterialCostInput = {
        key: string
        label: string
        price: number
        owned: boolean
        marketUnitSize: number
    }

    const honingMaterials = reactive<MaterialCostInput[]>([
        {
            key: 'guardian-stone-t4',
            label: 'Guardian Stone',
            price: 46,
            owned: false,
            marketUnitSize: 100
        },
        {
            key: 'guardian-stone-t45',
            label: 'Guardian Stone 4.5',
            price: 294,
            owned: false,
            marketUnitSize: 100
        },
        {
            key: 'destruction-stone-t4',
            label: 'Destruction Stone',
            price: 599,
            owned: false,
            marketUnitSize: 100
        },
        {
            key: 'destruction-stone-t45',
            label: 'Destruction Stone 4.5',
            price: 3000,
            owned: false,
            marketUnitSize: 100
        },
        {
            key: 'fusion-t4',
            label: 'Abidos Fusion',
            price: 40,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'fusion-t45',
            label: 'Superior Abidos Fusion',
            price: 158,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'shards',
            label: 'Shards',
            price: 0,
            owned: true,
            marketUnitSize: 1
        },
        {
            key: 'destiny-shard-small',
            label: 'Shard Bag Small',
            price: 319,
            owned: false,
            marketUnitSize: 1000
        },
        {
            key: 'destiny-shard-medium',
            label: 'Shard Bag Medium',
            price: 700,
            owned: false,
            marketUnitSize: 2000
        },
        {
            key: 'destiny-shard-large',
            label: 'Shard Bag Large',
            price: 679,
            owned: false,
            marketUnitSize: 3000
        },
        {
            key: 'leapstone-t4',
            label: 'Leapstone',
            price: 12,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'leapstone-t45',
            label: 'Leapstone 4.5',
            price: 60,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'glaciers-breath',
            label: 'Glacier\'s Breath',
            price: 426,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'lavas-breath',
            label: 'Lava\'s Breath',
            price: 553,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'tailor-11-14',
            label: 'Tailoring Book 11-14',
            price: 554,
            owned: true,
            marketUnitSize: 1
        },
        {
            key: 'tailor-15-18',
            label: 'Tailoring Book 15-18',
            price: 23,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'tailor-19-20',
            label: 'Tailoring Book 19-20',
            price: 999,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'tailor-19-20-e',
            label: 'Enhanced Tailoring Book 19-20',
            price: 7000,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'metal-11-14',
            label: 'Metallurgy Book 11-14',
            price: 874,
            owned: true,
            marketUnitSize: 1
        },
        {
            key: 'metal-15-18',
            label: 'Metallurgy Book 15-18',
            price: 95,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'metal-19-20',
            label: 'Metallurgy Book 19-20',
            price: 1496,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'metal-19-20-e',
            label: 'Enhanced Metallurgy Book 19-20',
            price: 12000,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'tailor-l1',
            label: 'Tailoring Level 1',
            price: 210,
            owned: true,
            marketUnitSize: 1
        },
        {
            key: 'tailor-l2',
            label: 'Tailoring Level 2',
            price: 48,
            owned: true,
            marketUnitSize: 1
        },
        {
            key: 'tailor-l3',
            label: 'Tailoring Level 3',
            price: 1068,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'tailor-l4',
            label: 'Tailoring Level 4',
            price: 898,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'metal-l1',
            label: 'Metallurgy Level 1',
            price: 170,
            owned: true,
            marketUnitSize: 1
        },
        {
            key: 'metal-l2',
            label: 'Metallurgy Level 2',
            price: 78,
            owned: true,
            marketUnitSize: 1
        },
        {
            key: 'metal-l3',
            label: 'Metallurgy Level 3',
            price: 949,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'metal-l4',
            label: 'Metallurgy Level 4',
            price: 996,
            owned: false,
            marketUnitSize: 1
        },
        {
            key: 'chaosstone',
            label: 'Chaos Stones',
            price: 500,
            owned: true,
            marketUnitSize: 1
        }
    ])

    const materialGroups = [
        {
            key: 'guardian-stones',
            label: 'Guardian Stones',
            icon: '/images/materials/T4_Guardian.png',
            items: [
                {
                    key: 'guardian-stone-t4',
                    label: 'T4 Guardian Stone',
                    icon: '/images/materials/T4_Guardian.png'
                },
                {
                    key: 'guardian-stone-t45',
                    label: 'T4.5 Guardian Stone',
                    icon: '/images/materials/T45_Guardian.png'
                }
            ]
        },
        {
            key: 'destruction-stones',
            label: 'Destruction Stones',
            icon: '/images/materials/T4_Destruction.png',
            items: [
                {
                    key: 'destruction-stone-t4',
                    label: 'T4 Destruction Stone',
                    icon: '/images/materials/T4_Destruction.png'
                },
                {
                    key: 'destruction-stone-t45',
                    label: 'T4.5 Destruction Stone',
                    icon: '/images/materials/T45_Destruction.png'
                }
            ]
        },
        {
            key: 'fusion-materials',
            label: 'Fusion Materials',
            icon: '/images/materials/T4_Fusion.png',
            items: [
                {
                    key: 'fusion-t4',
                    label: 'T4 Fusion Materials',
                    icon: '/images/materials/T4_Fusion.png'
                },
                {
                    key: 'fusion-t45',
                    label: 'T4.5 Fusion Materials',
                    icon: '/images/materials/T45_Fusion.png'
                }
            ]
        },
        {
            key: 'shards',
            label: 'Destiny Shards',
            icon: '/images/materials/T4_Shard.png',
            items: [
                {
                    key: 'destiny-shard-small',
                    label: 'T4 Shards Small',
                    icon: '/images/materials/T4_ShardS.png'
                },
                {
                    key: 'destiny-shard-medium',
                    label: 'T4 Shards Medium',
                    icon: '/images/materials/T4_ShardM.png'
                },
                {
                    key: 'destiny-shard-large',
                    label: 'T4 Shards Large',
                    icon: '/images/materials/T4_ShardL.png'
                }
            ]
        },
        {
            key: 'leapstones',
            label: 'Leapstones',
            icon: '/images/materials/T4_Leapstone.png',
            items: [
                {
                    key: 'leapstone-t4',
                    label: 'T4 Leapstones',
                    icon: '/images/materials/T4_Leapstone.png'
                },
                {
                    key: 'leapstone-t45',
                    label: 'T4.5 Leapstones',
                    icon: '/images/materials/T45_Leapstone.png'
                }
            ]
        },
        {
            key: 'breath',
            label: 'Breaths/Juice',
            icon: '/images/materials/T4_Juice.png',
            items: [
                {
                    key: 'glaciers-breath',
                    label: 'Glacier\'s Breath',
                    icon: '/images/materials/GBreath.png'
                },
                {
                    key: 'lavas-breath',
                    label: 'Lava\'s Breath',
                    icon: '/images/materials/LBreath.png'
                }
            ]
        },
        {
            key: 'books',
            label: 'Books',
            icon: '/images/materials/T4_Metal.png',
            items: [
                {
                    key: 'metal-11-14',
                    label: 'Metallurgy Hellfire 11-14',
                    icon: '/images/materials/T4_Metal.png'
                },
                {
                    key: 'metal-15-18',
                    label: 'Metallurgy Hellfire 15-18',
                    icon: '/images/materials/T4_Metal.png'
                },
                {
                    key: 'metal-19-20',
                    label: 'Metallurgy Hellfire 19-20',
                    icon: '/images/materials/T4_Metal.png'
                },
                {
                    key: 'metal-19-20-e',
                    label: 'Enhanced Metallurgy Hellfire 19-20',
                    icon: '/images/materials/T4_Metal.png'
                },
                {
                    key: 'tailor-11-14',
                    label: 'Tailoring Hellfire 11-14',
                    icon: '/images/materials/T4_Tailor.png'
                },
                {
                    key: 'tailor-15-18',
                    label: 'Tailoring Hellfire 15-18',
                    icon: '/images/materials/T4_Tailor.png'
                },
                {
                    key: 'tailor-19-20',
                    label: 'Tailoring Hellfire 19-20',
                    icon: '/images/materials/T4_Tailor.png'
                },
                {
                    key: 'tailor-19-20-e',
                    label: 'Enhanced Tailoring Hellfire 19-20',
                    icon: '/images/materials/T4_Tailor.png'
                }
            ]
        },
        {
            key: 'scrolls',
            label: 'Scrolls',
            icon: '/images/materials/TailorL4.png',
            items: [
                {
                    key: 'metal-l1',
                    label: 'Metallurgy Level 1',
                    icon: '/images/materials/MetalL1.png'
                },
                {
                    key: 'metal-l2',
                    label: 'Metallurgy Level 2',
                    icon: '/images/materials/MetalL2.png'
                },
                {
                    key: 'metal-l3',
                    label: 'Metallurgy Level 3',
                    icon: '/images/materials/MetalL3.png'
                },
                {
                    key: 'metal-l4',
                    label: 'Metallurgy Level 4',
                    icon: '/images/materials/MetalL4.png'
                },
                {
                    key: 'tailor-l1',
                    label: 'Tailoring Level 1',
                    icon: '/images/materials/TailorL1.png'
                },
                {
                    key: 'tailor-l2',
                    label: 'Tailoring Level 2',
                    icon: '/images/materials/TailorL2.png'
                },
                {
                    key: 'tailor-l3',
                    label: 'Tailoring Level 3',
                    icon: '/images/materials/TailorL3.png'
                },
                {
                    key: 'tailor-l4',
                    label: 'Tailoring Level 4',
                    icon: '/images/materials/TailorL4.png'
                }
            ]
        },
        {
            key: 'chaos-stones',
            label: 'Chaos Stones',
            icon: '/images/materials/chaosstone.png',
            items: [
                {
                    key: 'chaosstone',
                    label: 'Chaos Stones',
                    icon: '/images/materials/chaosstone.png'
                }
            ]
        }
    ]

    const gear = reactive({
        helmet: {
            serca: false,
            itemLevel: 10,
            advancedHoning: 0
        },
        shoulder: {
            serca: false,
            itemLevel: 10,
            advancedHoning: 0
        },
        chest: {
            serca: false,
            itemLevel: 10,
            advancedHoning: 0
        },
        legs: {
            serca: false,
            itemLevel: 10,
            advancedHoning: 0
        },
        gloves: {
            serca: false,
            itemLevel: 10,
            advancedHoning: 0
        },
        weapon: {
            serca: false,
            itemLevel: 10,
            advancedHoning: 0,
            quality: 70
        }
    })
    const hasAnySerca = computed(() =>
        gear.helmet.serca ||
        gear.shoulder.serca ||
        gear.chest.serca ||
        gear.legs.serca ||
        gear.gloves.serca ||
        gear.weapon.serca
    )

    type Engraving = {
        key: string
        name: string
        icon: string
    }
    type EngravingSlot = {
        engraving: Engraving | null
        relicBooks: number
    }

    const engravingSlots = ref<EngravingSlot[]>([
        { engraving: null, relicBooks: 0 },
        { engraving: null, relicBooks: 0 },
        { engraving: null, relicBooks: 0 },
        { engraving: null, relicBooks: 0 },
        { engraving: null, relicBooks: 0 }
    ])
    const stoneEngravings = ref<[Engraving | null, Engraving | null]>([
        null,
        null
    ])
    const stoneLevels = ref<[number, number]>([0, 0])
    const selectedEngravingOptions = computed(() =>
        engravingSlots.value
            .map(slot => slot.engraving)
            .filter((engraving): engraving is Engraving => engraving !== null)
    )
    function clearStoneEngravings() {
        stoneEngravings.value[0] = null
        stoneEngravings.value[1] = null
        stoneLevels.value[0] = 0
        stoneLevels.value[1] = 0
    }
    const engravingPopoverOpen = ref<boolean[]>([
        false,
        false,
        false,
        false,
        false
    ])

    /*function selectEngraving(slotIndex: number, engraving: Engraving) {
        engravingSlots.value[slotIndex].engraving = engraving
        engravingPopoverOpen.value[slotIndex] = false
    }*/
    function selectEngraving(
        slotIndex: number,
        engraving: Engraving
    ) {
        const slot = engravingSlots.value[slotIndex]

        if (!slot) {
            return
        }

        slot.engraving = engraving
        engravingPopoverOpen.value[slotIndex] = false
    }


    const stonePopoverOpen = ref(false)

    const engravings: Engraving[] = [
        {
            key: 'adrenaline',
            name: 'Adrenaline',
            icon: '/images/engravings/adrenaline.png'
        },
        {
            key: 'all-out-attack',
            name: 'All Out Attack',
            icon: '/images/engravings/alloutattack.png'
        },
        {
            key: 'ambush-master',
            name: 'Ambush Master',
            icon: '/images/engravings/ambushmaster.png'
        },
        {
            key: 'awakening',
            name: 'Awakening',
            icon: '/images/engravings/awakening.png'
        },
        {
            key: 'barricade',
            name: 'Barricade',
            icon: '/images/engravings/barricade.png'
        },
        {
            key: 'broken-bone',
            name: 'Broken Bone',
            icon: '/images/engravings/brokenbone.png'
        },
        {
            key: 'contender',
            name: 'Contender',
            icon: '/images/engravings/contender.png'
        },
        {
            key: 'crisis-evasion',
            name: 'Crisis Evasion',
            icon: '/images/engravings/crisisevasion.png'
        },
        {
            key: 'crushing-fist',
            name: 'Crushing Fist',
            icon: '/images/engravings/crushingfist.png'
        },
        {
            key: 'cursed-doll',
            name: 'Cursed Doll',
            icon: '/images/engravings/curseddoll.png'
        },
        {
            key: 'disrespect',
            name: 'Disrespect',
            icon: '/images/engravings/disrespect.png'
        },
        {
            key: 'divine-protection',
            name: 'Divine Protection',
            icon: '/images/engravings/divineprotection.png'
        },
        {
            key: 'drops-of-ether',
            name: 'Drops of Ether',
            icon: '/images/engravings/dropsofether.png'
        },
        {
            key: 'emergency-rescue',
            name: 'Emergency Rescue',
            icon: '/images/engravings/emergencyrescue.png'
        },
        {
            key: 'enhanced-shield',
            name: 'Enhanced Shield',
            icon: '/images/engravings/enhancedshield.png'
        },
        {
            key: 'ether-predator',
            name: 'Ether Predator',
            icon: '/images/engravings/etherpredator.png'
        },
        {
            key: 'expert',
            name: 'Expert',
            icon: '/images/engravings/expert.png'
        },
        {
            key: 'explosive-expert',
            name: 'Explosive Expert',
            icon: '/images/engravings/explosiveexpert.png'
        },
        {
            key: 'fortitude',
            name: 'Fortitude',
            icon: '/images/engravings/fortitude.png'
        },
        {
            key: 'grudge',
            name: 'Grudge',
            icon: '/images/engravings/grudge.png'
        },
        {
            key: 'heavy-armor',
            name: 'Heavy Armor',
            icon: '/images/engravings/heavyarmor.png'
        },
        {
            key: 'hit-master',
            name: 'Hit Master',
            icon: '/images/engravings/hitmaster.png'
        },
        {
            key: 'keen-blunt-weapon',
            name: 'Keen Blunt Weapon',
            icon: '/images/engravings/keenbluntweapon.png'
        },
        {
            key: 'lightning-fury',
            name: 'Lightning Fury',
            icon: '/images/engravings/lightningfury.png'
        },
        {
            key: 'magick-stream',
            name: 'Magick Stream',
            icon: '/images/engravings/magickstream.png'
        },
        {
            key: 'mass-increase',
            name: 'Mass Increase',
            icon: '/images/engravings/massincrease.png'
        },
        {
            key: 'master-brawler',
            name: 'Master Brawler',
            icon: '/images/engravings/masterbrawler.png'
        },
        {
            key: 'master-of-escape',
            name: 'Master of Escape',
            icon: '/images/engravings/masterofescape.png'
        },
        {
            key: 'masters-tenacity',
            name: 'Master\'s Tenacity',
            icon: '/images/engravings/masterstenacity.png'
        },
        {
            key: 'max-mp-increase',
            name: 'Max MP Increase',
            icon: '/images/engravings/maxmpincrease.png'
        },
        {
            key: 'mp-efficiency-increase',
            name: 'MP Efficiency Increase',
            icon: '/images/engravings/mpefficiencyincrease.png'
        },
        {
            key: 'necromancy',
            name: 'Necromancy',
            icon: '/images/engravings/necromancy.png'
        },
        {
            key: 'precise-dagger',
            name: 'Precise Dagger',
            icon: '/images/engravings/precisedagger.png'
        },
        {
            key: 'preemptive-strike',
            name: 'Preemptive Strike',
            icon: '/images/engravings/preemptivestrike.png'
        },
        {
            key: 'propulsion',
            name: 'Propulsion',
            icon: '/images/engravings/propulsion.png'
        },
        {
            key: 'raid-captain',
            name: 'Raid Captain',
            icon: '/images/engravings/raidcaptain.png'
        },
        {
            key: 'shield-piercing',
            name: 'Shield Piercing',
            icon: '/images/engravings/shieldpiercing.png'
        },
        {
            key: 'sight-focus',
            name: 'Sight Focus',
            icon: '/images/engravings/sightfocus.png'
        },
        {
            key: 'spirit-absorption',
            name: 'Spirit Absorption',
            icon: '/images/engravings/spiritabsorption.png'
        },
        {
            key: 'stabilized-status',
            name: 'Stabilized Status',
            icon: '/images/engravings/stabilizedstatus.png'
        },
        {
            key: 'strong-will',
            name: 'Strong Will',
            icon: '/images/engravings/strongwill.png'
        },
        {
            key: 'super-charge',
            name: 'Super Charge',
            icon: '/images/engravings/supercharge.png'
        },
        {
            key: 'vital-point-hit',
            name: 'Vital Point Hit',
            icon: '/images/engravings/vitalpointhit.png'
        }
    ]

    const selectedEngraving = ref<Engraving | null>(null)

    type GearSlot = keyof typeof gear

    function setSerca(slot: GearSlot, enabled: boolean) {
        const piece = gear[slot]

        // T4 -> T4.5
        if (enabled) {
            if (piece.serca || !canTransferToSerca(slot)) {
                return
            }

            const transferredLevel =
                getT45TransferLevel(piece.itemLevel)

            if (transferredLevel === null) {
                return
            }

            piece.serca = true
            piece.itemLevel = transferredLevel
            return
        }

        // T4.5 -> T4
        // This is calculator convenience, not an in-game reverse transfer.
        if (piece.serca) {
            piece.itemLevel =
                getT4LevelFromT45(piece.itemLevel)

            piece.serca = false
        }
    }

    function getSercaTooltip(slot: GearSlot) {
        if (!gear[slot].serca && !canTransferToSerca(slot)) {
            return 'Requires +20 honing and 40 Advanced Honing, and minimum 1730 average item level'
        }

        return ''
    }

    const ACCESSORY_STAT_LABELS: Record<
        AccessoryType,
        [string, string]
    > = {
        necklace: [
            'Additional Damage',
            'Outgoing Damage'
        ],
        earring: [
            'Attack Power',
            'Weapon Power'
        ],
        ring: [
            'Crit Rate',
            'Crit Damage'
        ]
    }

    const ACCESSORY_ROLL_LABELS: Record<AccRoll, string> = {
        '0': '',
        L: 'Low',
        M: 'Mid',
        H: 'High'
    }

    function getAccessoryTargetLabel(
        recommendation: AccessoryRecommendation
    ): string {
        const [firstRoll, secondRoll] =
            recommendation.targetState.split('/') as [AccRoll, AccRoll]

        const [firstStat, secondStat] =
            ACCESSORY_STAT_LABELS[recommendation.accessoryType]

        const parts: string[] = []

        if (firstRoll !== '0') {
            parts.push(
                `${ACCESSORY_ROLL_LABELS[firstRoll]} ${firstStat}`
            )
        }

        if (secondRoll !== '0') {
            parts.push(
                `${ACCESSORY_ROLL_LABELS[secondRoll]} ${secondStat}`
            )
        }

        return parts.join(' / ')
    }

    const neckFirst = 'Additional Damage'
    const neckSecond = 'Outgoing Damage'
    const earringFirst = 'Attack Power'
    const earringSecond = 'Weapon Power'
    const ringFirst = 'Crit Rate'
    const ringSecond = 'Crit Damage'

    function getAccessoryStatTooltip(
        type: AccessoryType
    ): string {
        switch (type) {
            case 'necklace':
                return `First: ${neckFirst} / Second: ${neckSecond}`

            case 'earring':
                return `First: ${earringFirst} / Second: ${earringSecond}`

            case 'ring':
                return `First: ${ringFirst} / Second: ${ringSecond}`
        }
    }

    function isEngravingSelected(
        engraving: Engraving,
        currentSlotIndex: number
    ) {
        return engravingSlots.value.some(
            (slot, index) =>
                index !== currentSlotIndex &&
                slot.engraving?.key === engraving.key
        )
    }

    function clearEngravingSlots() {
        engravingSlots.value = [
            { engraving: null, relicBooks: 0 },
            { engraving: null, relicBooks: 0 },
            { engraving: null, relicBooks: 0 },
            { engraving: null, relicBooks: 0 },
            { engraving: null, relicBooks: 0 }
        ]

        clearStoneEngravings()
    }

    function clearEngravingSlot(slotIndex: number) {
        const slot = engravingSlots.value[slotIndex]
        if (!slot) {
            return
        }

        slot.engraving = null
        slot.relicBooks = 0
    }

    function selectStoneEngraving(
        stoneIndex: 0 | 1,
        engraving: Engraving
    ) {
        stoneEngravings.value[stoneIndex] = engraving

        if (stoneEngravings.value[0] && stoneEngravings.value[1]) {
            stonePopoverOpen.value = false
        }
    }

    const ACCESSORY_ROLLS: Array<{
        key: AccKey
        label: string
    }> = [
            { key: 'H/H', label: 'High / High' },
            { key: 'H/M', label: 'High / Mid' },
            { key: 'H/L', label: 'High / Low' },

            { key: 'M/H', label: 'Mid / High' },
            { key: 'M/M', label: 'Mid / Mid' },
            { key: 'M/L', label: 'Mid / Low' },

            { key: 'L/H', label: 'Low / High' },
            { key: 'L/M', label: 'Low / Mid' },
            { key: 'L/L', label: 'Low / Low' },

            { key: 'H/0', label: 'High / None' },
            { key: 'M/0', label: 'Mid / None' },
            { key: 'L/0', label: 'Low / None' },

            { key: '0/H', label: 'None / High' },
            { key: '0/M', label: 'None / Mid' },
            { key: '0/L', label: 'None / Low' },

            { key: '0/0', label: 'None / None' }
        ]

    const accessories = reactive([
        {
            key: 'necklace',
            label: 'Necklace',
            type: 'necklace' as AccessoryType,
            roll: '0/0' as AccKey
        },
        {
            key: 'earring1',
            label: 'Earring 1',
            type: 'earring' as AccessoryType,
            roll: '0/0' as AccKey
        },
        {
            key: 'earring2',
            label: 'Earring 2',
            type: 'earring' as AccessoryType,
            roll: '0/0' as AccKey
        },
        {
            key: 'ring1',
            label: 'Ring 1',
            type: 'ring' as AccessoryType,
            roll: '0/0' as AccKey
        },
        {
            key: 'ring2',
            label: 'Ring 2',
            type: 'ring' as AccessoryType,
            roll: '0/0' as AccKey
        }
    ])

    function getEngravingTooltip(slotIndex: number) {
        const engraving = engravingSlots.value[slotIndex]?.engraving
        const numbooks = engravingSlots.value[slotIndex]?.relicBooks

        if (!engraving) {
            return 'Select engraving'
        }
        return `${engraving.name} - ${numbooks} relic books`
    }

    function getMaterialCost(
        quantity: number,
        material: MaterialCostInput
    ) {
        if (material.owned) {
            return 0
        }

        return quantity / material.marketUnitSize * material.price
    }

    function getStoneTooltip() {
        const engraving1 = stoneEngravings.value[0]
        const engraving2 = stoneEngravings.value[1]
        const stoneLevel1 = stoneLevels.value[0]
        const stoneLevel2 = stoneLevels.value[1]

        if ((!engraving1) || (!engraving2)) {
            return 'Select engravings'
        }
        return `${stoneLevel1}/${stoneLevel2} stone - ${engraving1.name}/${engraving2.name}`
    }

    function clampRelicBooks(slotIndex: number) {
        const slot = engravingSlots.value[slotIndex]

        if (!slot) {
            return
        }

        const value = Number(slot.relicBooks)

        if (!Number.isFinite(value)) {
            slot.relicBooks = 0
            return
        }

        slot.relicBooks = Math.min(
            20,
            Math.max(0, Math.trunc(value))
        )
    }

    function clampStoneLevel(stoneSlot: number) {
        const value =
            Number(stoneLevels.value[stoneSlot])

        if (!Number.isFinite(value)) {
            stoneLevels.value[stoneSlot] = 0
            return
        }

        stoneLevels.value[stoneSlot] =
            Math.min(
                4,
                Math.max(0, Math.trunc(value))
            )
    }

    function shouldShowTransferMarker(
        recommendation: HoningPathRecommendation,
        index: number
    ): boolean {
        const step = recommendation.steps[index]

        if (
            !step ||
            recommendation.startTier !== 't4' ||
            step.system !== 'honing' ||
            step.detail.tier !== 't4.5'
        ) {
            return false
        }

        if (index === 0) {
            return true
        }

        const previousStep =
            recommendation.steps[index - 1]

        if (!previousStep) {
            return true
        }

        return (
            previousStep.system !== 'honing' ||
            previousStep.detail.tier !== 't4.5'
        )
    }

</script>

<template>
    <div class="py-8 md:py-10 mk-tools-tone">
        <UContainer class="max-w-6xl">
            <header class="mb-6 md:mb-8">
                <p class="mk-eyebrow mb-2">Tools</p>
                <h1 class="text-3xl md:text-4xl font-bold mb-3">Gold Efficiency Calculator</h1>
                <p class="text-zinc-400 max-w-3xl">
                    Enter your current progress and gear to see suggestions of the next upgrades you should pursue.
                </p>
            </header>

            <section class="grid gap-5 lg:grid-cols-3">
                <div class="mk-card p-5 md:p-6 lg:col-span-2">
                    <h2 class="text-xl font-semibold">Inputs</h2>
                    <div class="mt-2 grid gap-4 xl:grid-cols-9">
                        <!--equipment-->
                        <section class="rounded-xl border border-zinc-700/70 p-3.5 bg-zinc-800/65 xl:col-span-4">
                            <h3 class="mk-eyebrow mb-3">Equipment</h3>
                            <div class="grid grid-cols-[3.25rem_8ch_4rem_4rem] items-center gap-3 text-xs text-zinc-400">
                                <span class="w-fit rounded-md border px-2 py-1 font-medium transition-colors"
                                      :class="hasAnySerca
                          ? 'border-blue-700/80 text-blue-300 opacity-100'
                          : 'border-zinc-700/40 text-zinc-500 opacity-40'">
                                    T4.5
                                </span>
                                <span>Slot</span>
                                <span>Level</span>
                                <span>Adv.</span>
                            </div>
                            <div class="mt-1 space-y-3">
                                <div class="grid grid-cols-[3rem_5ch_4rem_4rem] items-center gap-3">
                                    <UTooltip :text="getSercaTooltip('helmet')">
                                        <USwitch :model-value="gear.helmet.serca"
                                                 :disabled="!gear.helmet.serca && !canTransferToSerca('helmet')"
                                                 @update:model-value="setSerca('helmet', $event)" />
                                    </UTooltip>
                                    <span class="text-xs w-[8ch] block truncate">Helmet</span>
                                    <select v-model.number="gear.helmet.itemLevel"
                                            class="h-10 w-16 rounded-xl border border-zinc-700 bg-zinc-800/80 px-2 text-center text-sm text-zinc-100">
                                        <option v-for="level in getValidHoningLevels(gear.helmet.serca)"
                                                :key="level"
                                                :value="level">
                                            +{{ level }}
                                        </option>
                                    </select>
                                    <select v-model.number="gear.helmet.advancedHoning"
                                            :disabled="gear.helmet.serca"
                                            class="h-10 w-16 rounded-xl border border-zinc-700 bg-zinc-800/80 px-2 text-center text-sm text-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed">
                                        <option v-for="level in advancedHoningLevels"
                                                :key="level"
                                                :value="level">
                                            {{ level }}
                                        </option>
                                    </select>
                                </div>
                                <div class="grid grid-cols-[3rem_5ch_4rem_4rem] items-center gap-3">
                                    <UTooltip :text="getSercaTooltip('shoulder')">
                                        <USwitch :model-value="gear.shoulder.serca"
                                                 :disabled="!gear.shoulder.serca && !canTransferToSerca('shoulder')"
                                                 @update:model-value="setSerca('shoulder', $event)" />
                                    </UTooltip>
                                    <span class="text-xs w-[8ch] block truncate">Shoulders</span>
                                    <select v-model.number="gear.shoulder.itemLevel"
                                            class="h-10 w-16 rounded-xl border border-zinc-700 bg-zinc-800/80 px-2 text-center text-sm text-zinc-100">
                                        <option v-for="level in getValidHoningLevels(gear.shoulder.serca)"
                                                :key="level"
                                                :value="level">
                                            +{{ level }}
                                        </option>
                                    </select>
                                    <select v-model.number="gear.shoulder.advancedHoning"
                                            :disabled="gear.shoulder.serca"
                                            class="h-10 w-16 rounded-xl border border-zinc-700 bg-zinc-800/80 px-2 text-center text-sm text-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed">
                                        <option v-for="level in advancedHoningLevels"
                                                :key="level"
                                                :value="level">
                                            {{ level }}
                                        </option>
                                    </select>
                                </div>
                                <div class="grid grid-cols-[3rem_5ch_4rem_4rem] items-center gap-3">
                                    <UTooltip :text="getSercaTooltip('chest')">
                                        <USwitch :model-value="gear.chest.serca"
                                                 :disabled="!gear.chest.serca && !canTransferToSerca('chest')"
                                                 @update:model-value="setSerca('chest', $event)" />
                                    </UTooltip>
                                    <span class="text-xs w-[8ch] block truncate">Chest</span>
                                    <select v-model.number="gear.chest.itemLevel"
                                            class="h-10 w-16 rounded-xl border border-zinc-700 bg-zinc-800/80 px-2 text-center text-sm text-zinc-100">
                                        <option v-for="level in getValidHoningLevels(gear.chest.serca)"
                                                :key="level"
                                                :value="level">
                                            +{{ level }}
                                        </option>
                                    </select>
                                    <select v-model.number="gear.chest.advancedHoning"
                                            :disabled="gear.chest.serca"
                                            class="h-10 w-16 rounded-xl border border-zinc-700 bg-zinc-800/80 px-2 text-center text-sm text-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed">
                                        <option v-for="level in advancedHoningLevels"
                                                :key="level"
                                                :value="level">
                                            {{ level }}
                                        </option>
                                    </select>
                                </div>
                                <div class="grid grid-cols-[3rem_5ch_4rem_4rem] items-center gap-3">
                                    <UTooltip :text="getSercaTooltip('legs')">
                                        <USwitch :model-value="gear.legs.serca"
                                                 :disabled="!gear.legs.serca && !canTransferToSerca('legs')"
                                                 @update:model-value="setSerca('legs', $event)" />
                                    </UTooltip>
                                    <span class="text-xs w-[8ch] block truncate">Legs</span>
                                    <select v-model.number="gear.legs.itemLevel"
                                            class="h-10 w-16 rounded-xl border border-zinc-700 bg-zinc-800/80 px-2 text-center text-sm text-zinc-100">
                                        <option v-for="level in getValidHoningLevels(gear.legs.serca)"
                                                :key="level"
                                                :value="level">
                                            +{{ level }}
                                        </option>
                                    </select>
                                    <select v-model.number="gear.legs.advancedHoning"
                                            :disabled="gear.legs.serca"
                                            class="h-10 w-16 rounded-xl border border-zinc-700 bg-zinc-800/80 px-2 text-center text-sm text-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed">
                                        <option v-for="level in advancedHoningLevels"
                                                :key="level"
                                                :value="level">
                                            {{ level }}
                                        </option>
                                    </select>
                                </div>
                                <div class="grid grid-cols-[3rem_5ch_4rem_4rem] items-center gap-3">
                                    <UTooltip :text="getSercaTooltip('gloves')">
                                        <USwitch :model-value="gear.gloves.serca"
                                                 :disabled="!gear.gloves.serca && !canTransferToSerca('gloves')"
                                                 @update:model-value="setSerca('gloves', $event)" />
                                    </UTooltip>
                                    <span class="text-xs w-[8ch] block truncate">Gloves</span>
                                    <select v-model.number="gear.gloves.itemLevel"
                                            class="h-10 w-16 rounded-xl border border-zinc-700 bg-zinc-800/80 px-2 text-center text-sm text-zinc-100">
                                        <option v-for="level in getValidHoningLevels(gear.gloves.serca)"
                                                :key="level"
                                                :value="level">
                                            +{{ level }}
                                        </option>
                                    </select>
                                    <select v-model.number="gear.gloves.advancedHoning"
                                            :disabled="gear.gloves.serca"
                                            class="h-10 w-16 rounded-xl border border-zinc-700 bg-zinc-800/80 px-2 text-center text-sm text-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed">
                                        <option v-for="level in advancedHoningLevels"
                                                :key="level"
                                                :value="level">
                                            {{ level }}
                                        </option>
                                    </select>
                                </div>
                                <div class="grid grid-cols-[3rem_5ch_4rem_4rem] items-center gap-3">
                                    <UTooltip :text="getSercaTooltip('weapon')">
                                        <USwitch :model-value="gear.weapon.serca"
                                                 :disabled="!gear.weapon.serca && !canTransferToSerca('weapon')"
                                                 @update:model-value="setSerca('weapon', $event)" />
                                    </UTooltip>
                                    <span class="text-xs w-[8ch] block truncate">Weapon</span>
                                    <select v-model.number="gear.weapon.itemLevel"
                                            class="h-10 w-16 rounded-xl border border-zinc-700 bg-zinc-800/80 px-2 text-center text-sm text-zinc-100">
                                        <option v-for="level in getValidHoningLevels(gear.weapon.serca)"
                                                :key="level"
                                                :value="level">
                                            +{{ level }}
                                        </option>
                                    </select>
                                    <select v-model.number="gear.weapon.advancedHoning"
                                            :disabled="gear.weapon.serca"
                                            class="h-10 w-16 rounded-xl border border-zinc-700 bg-zinc-800/80 px-2 text-center text-sm text-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed">
                                        <option v-for="level in advancedHoningLevels"
                                                :key="level"
                                                :value="level">
                                            {{ level }}
                                        </option>
                                    </select>
                                </div>
                                <!--temporary WIP tooltip-->
                                <UTooltip text="NYI - input currently has no effect on recommendations."
                                          :delay-duration="150">
                                    <div class="grid grid-cols-[3rem_5ch_5.5rem_5rem] items-center gap-3">
                                        <div class="col-span-2 text-right text-xs">
                                            Weapon Quality
                                            <UIcon name="i-lucide-triangle-alert" class="size-3 text-rose-500" />
                                        </div>
                                        <input v-model.number="gear.weapon.quality" type="number" min="0" max="100" step="1" class="mk-native-amber-number w-20 rounded-xl border border-zinc-700/80 bg-zinc-800/80 px-3 py-2.5 text-sm text-zinc-100 transition-colors">
                                    </div>
                                </UTooltip>
                                <!--temporary WIP tooltip-->
                              </div>
                        </section>
                        <!--otherprog-->
                        <section class="rounded-xl border border-zinc-700/70 bg-zinc-800/65 p-3.5 xl:col-span-5">
                            <!--temporary WIP tooltip-->
                            <UTooltip text="NYI - input currently has no effect on recommendations."
                                      :delay-duration="150">
                                <div class="mk-eyebrow mb-3">
                                    Engravings
                                    <UIcon name="i-lucide-triangle-alert" class="size-3 text-rose-500" />
                                </div>
                            </UTooltip>
                            <!--temporary WIP tooltip-->

                            <button type="button"
                                    class="mb-3 w-full rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-300 hover:border-amber-300 hover:text-zinc-100"
                                    @click="clearEngravingSlots()">
                                Clear slots
                            </button>
                            <div class="grid grid-cols-3 justify-items-center gap-3 mb-7 pb-1">
                                <UPopover v-for="(slot, slotIndex) in engravingSlots"
                                          :key="slotIndex"
                                          v-model:open="engravingPopoverOpen[slotIndex]"
                                          :content="{onOpenAutoFocus: (event) => event.preventDefault()}">
                                    <UTooltip :text="getEngravingTooltip(slotIndex)">
                                        <div class="relative h-14 w-14">

                                            <button type="button"
                                                    class="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800 hover:border-amber-300"
                                                    @contextmenu.prevent="clearEngravingSlot(slotIndex)">
                                                <img v-if="slot.engraving"
                                                     :src="slot.engraving?.icon"
                                                     :alt="slot.engraving?.name"
                                                     class="h-full w-full object-cover">
                                                <span v-else
                                                      class="text-xl text-zinc-500">
                                                    +
                                                </span>
                                            </button>

                                            <input v-if="slot.engraving"
                                                   v-model.number="slot.relicBooks"
                                                   type="number"
                                                   min="0"
                                                   max="20"
                                                   step="1"
                                                   aria-label="Relic engraving books"
                                                   class="engraving-book-input absolute bottom-0 left-0 z-10 h-6 w-full border-t border-zinc-600 bg-zinc-950/90 px-1 text-center text-xs text-zinc-100"
                                                   @click.stop
                                                   @mousedown.stop
                                                   @change="clampRelicBooks(slotIndex)"
                                                   @blur="clampRelicBooks(slotIndex)">
                                        </div>
                                    </UTooltip>
                                    <template #content>
                                        <div class="grid grid-cols-8 gap-2 p-3">
                                            <UTooltip v-for="engraving in engravings"
                                                      :key="engraving.key"
                                                      :text="engraving.name"
                                                      :delay-duration="150">
                                                <button type="button"
                                                        :disabled="isEngravingSelected(engraving, slotIndex)"
                                                        class="h-10 w-10 overflow-hidden rounded-md border border-zinc-700 hover:border-amber-300 disabled:cursor-not-allowed disabled:opacity-30"
                                                        @click="selectEngraving(slotIndex, engraving)">
                                                    <img :src="engraving.icon"
                                                         :alt="engraving.name"
                                                         class="h-full w-full object-cover">
                                                </button>
                                            </UTooltip>
                                        </div>
                                    </template>

                                </UPopover>

                                <UPopover v-model:open="stonePopoverOpen">
                                    <div class="relative h-14 w-14">
                                        <UTooltip :text="getStoneTooltip()">
                                            <button type="button"
                                                    class="grid aspect-square w-14 grid-cols-2 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800 hover:border-amber-300"
                                                    @contextmenu.prevent="clearStoneEngravings">
                                                <div class="flex items-center justify-center border-r border-zinc-700">
                                                    <img v-if="stoneEngravings[0]"
                                                         :src="stoneEngravings[0]!.icon"
                                                         :alt="stoneEngravings[0]!.name"
                                                         class="h-full w-full object-cover">
                                                    <span v-else class="text-xl text-zinc-500">+</span>
                                                </div>

                                                <div class="flex items-center justify-center">
                                                    <img v-if="stoneEngravings[1]"
                                                         :src="stoneEngravings[1]!.icon"
                                                         :alt="stoneEngravings[1]!.name"
                                                         class="h-full w-full object-cover">
                                                    <span v-else class="text-xl text-zinc-500">+</span>
                                                </div>
                                            </button>
                                            <input v-if="stoneEngravings[0]"
                                                   v-model.number="stoneLevels[0]"
                                                   type="number"
                                                   min="0"
                                                   max="4"
                                                   step="1"
                                                   aria-label="First ability stone engraving level"
                                                   class="engraving-book-input absolute bottom-0 left-0 z-10 h-6 w-1/2 border-t border-r border-zinc-600 bg-zinc-950/90 px-1 text-center text-xs text-zinc-100"
                                                   @click.stop
                                                   @mousedown.stop
                                                   @change="clampStoneLevel(0)"
                                                   @blur="clampStoneLevel(0)">

                                            <input v-if="stoneEngravings[1]"
                                                   v-model.number="stoneLevels[1]"
                                                   type="number"
                                                   min="0"
                                                   max="4"
                                                   step="1"
                                                   aria-label="Second ability stone engraving level"
                                                   class="engraving-book-input absolute bottom-0 right-0 z-10 h-6 w-1/2 border-t border-zinc-600 bg-zinc-950/90 px-1 text-center text-xs text-zinc-100"
                                                   @click.stop
                                                   @mousedown.stop
                                                   @change="clampStoneLevel(1)"
                                                   @blur="clampStoneLevel(1)">
                                        </UTooltip>
                                        <span class="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-zinc-400">
                                            Stone
                                        </span>
                                    </div>
                                    <template #content>
                                        <div class="space-y-3 p-3">
                                            <div>
                                                <div class="mb-2 text-xs text-zinc-400">First stone engraving</div>

                                                <div class="grid grid-cols-5 gap-2">
                                                    <button v-for="engraving in selectedEngravingOptions"
                                                            :key="`stone-first-${engraving.key}`"
                                                            type="button"
                                                            :disabled="stoneEngravings[1]?.key === engraving.key"
                                                            class="h-10 w-10 overflow-hidden rounded-md border border-zinc-700 hover:border-amber-300 disabled:cursor-not-allowed disabled:opacity-30"
                                                            @click="selectStoneEngraving(0, engraving)">
                                                        <img :src="engraving.icon"
                                                             :alt="engraving.name"
                                                             class="h-full w-full object-cover">
                                                    </button>
                                                </div>
                                            </div>

                                            <div>
                                                <div class="mb-2 text-xs text-zinc-400">Second stone engraving</div>

                                                <div class="grid grid-cols-5 gap-2">
                                                    <button v-for="engraving in selectedEngravingOptions"
                                                            :key="`stone-second-${engraving.key}`"
                                                            type="button"
                                                            :disabled="stoneEngravings[0]?.key === engraving.key"
                                                            class="h-10 w-10 overflow-hidden rounded-md border border-zinc-700 hover:border-amber-300 disabled:cursor-not-allowed disabled:opacity-30"
                                                            @click="selectStoneEngraving(1, engraving)">
                                                        <img :src="engraving.icon"
                                                             :alt="engraving.name"
                                                             class="h-full w-full object-cover">
                                                    </button>
                                                </div>
                                            </div>

                                            <button type="button"
                                                    class="w-full rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-300 hover:border-amber-300"
                                                    @click="clearStoneEngravings">
                                                Clear stone
                                            </button>
                                        </div>
                                    </template>
                                </UPopover>
                            </div>
                            <div class="mk-eyebrow mb-3">Accessories</div>
                            <div class="grid grid-cols-6 gap-x-3 gap-y-3">
                                <div v-for="(accessory, index) in accessories"
                                     :key="accessory.key"
                                     class="col-span-2 space-y-1.5"
                                     :class="{ 'col-start-2': index === 3 }">
                                    <UTooltip :text="getAccessoryStatTooltip(accessory.type)"
                                              :delay-duration="150">
                                        <label class="block text-center text-xs font-medium text-zinc-400 cursor-help">
                                            {{ accessory.label }}
                                            <UIcon name="i-lucide-info" class="size-3 text-zinc-500" />
                                        </label>
                                    </UTooltip>
                                    <select v-model="accessory.roll"
                                            class="mk-native-amber-select w-full rounded-xl border border-zinc-700/80 bg-zinc-800/80 px-1.75 py-2.5 text-sm text-zinc-100">
                                        <option v-for="roll in ACCESSORY_ROLLS"
                                                :key="roll.key"
                                                :value="roll.key">
                                            {{ roll.label }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </section>
                    </div>
                    <!--lower section-->
                    <section class="relative overflow-hidden mt-4 rounded-xl border border-zinc-700/70 bg-zinc-800/65 p-3.5">
                        <!--meme placeholder-->
                        <img src="/images/placeholderConstruction.png"
                             alt=""
                             class="pointer-events-none absolute right-0 top-1/2 w-2/3 -translate-y-1/2 object-contain opacity-30">
                        <!--/meme placeholder-->
                        <h3 class="mk-eyebrow mb-3">
                            Materials and Details
                        </h3>
                        <UPopover v-for="group in materialGroups"
                                  :key="group.key"
                                  :ui="{content: 'mk-tools-tone'}">
                            <button type="button"
                                    class="flex w-64 items-center gap-2 rounded-md px-3 py-2 space-y-1
                                           text-base font-semibold text-zinc-200 cursor-pointer transition-colors
                                           hover:bg-yellow-800/60
                                           focus:outline-none focus:ring-1 focus:ring-zinc-600">
                                <img :src="group.icon"
                                     :alt="group.label"
                                     class="h-6 w-6 shrink-0" />

                                <span>{{ group.label }}</span>

                                <span class="ml-auto text-zinc-500">
                                    ›
                                </span>
                            </button>

                            <template #content>
                                <div class="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
                                    <div class="grid items-center grid-cols-[1.5rem_16rem_4rem_11rem] gap-x-4 gap-y-3">
                                        <!-- One logical shard ownership toggle -->
                                        <template v-if="group.key === 'shards'">
                                            <div></div>

                                            <div class="text-sm text-zinc-200 translate-x-102">
                                                Bound Shards
                                            </div>

                                            <div></div>

                                            <div class="flex justify-center translate-x-18">
                                                <UCheckbox v-model="getHoningMaterial('shards').owned" />
                                            </div>
                                        </template>
                                        <div></div>
                                        <div class="text-zinc-400 text-xs">Material</div>
                                        <div class="text-zinc-400 text-xs text-center">Bound</div>
                                        <div class="text-zinc-400 text-xs">Price </div>



                                        <template v-for="item in group.items"
                                                  :key="item.key">
                                            <div>
                                                <img :src="item.icon"
                                                     :alt="item.label"
                                                     class="h-5 w-5" />
                                            </div>

                                            <div class="text-base text-zinc-200">
                                                {{ item.label }}
                                            </div>

                                            <div v-if="group.key !== 'shards'"
                                                 class="flex justify-center">
                                                <UCheckbox v-model="getHoningMaterial(item.key).owned" />
                                            </div>
                                            <div v-else></div>

                                            <div>
                                                <input v-model.number="getHoningMaterial(item.key).price"
                                                       type="number"
                                                       class="w-28 mk-native-amber-number rounded-xl border border-zinc-700/80 bg-zinc-800/80 px-3 py-2.5 text-sm text-zinc-100 transition-colors" />
                                                /{{ getHoningMaterial(item.key).marketUnitSize }}
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </template>
                        </UPopover>
                    </section>

                </div>

                <div class="mk-card p-5 md:p-6 space-y-5">
                    <h2 class="text-xl font-semibold">Recommendations</h2>
                    <div v-for="(recommendation, index) in topRecommendations"
                         :key="recommendation.id"
                         :class="['rounded-lg border p-4', index === 0 ? 'border-yellow-400 bg-yellow-700/30' : (index > 0 && index < 3) ? 'border-blue-700 bg-blue-900/25' : 'border-zinc-700 bg-zinc-900/25']">


                        <div v-if="recommendation.system === 'accessory'"
                             class="flex items-center gap-1.5 font-semibold">

                            <span>
                                {{ recommendation.detail.accessoryLabel }}:
                                {{ getAccessoryTargetLabel(recommendation.detail) }}
                            </span>

                            <UTooltip v-if="recommendation.id === firstAccessoryRecommendationId"
                                      text="Gold-efficiency only. Accessories (from the auction house) also cost Pheons, so buying multiple incremental upgrades may be less efficient than buying a stronger roll directly."
                                      :delay-duration="150">
                                <UIcon name="i-lucide-triangle-alert"
                                       class="size-4 shrink-0 text-amber-400" />
                            </UTooltip>
                        </div>

                        <div v-else class="font-semibold">
                            {{ recommendation.title }}
                        </div>

                        <div class="mt-2 flex w-full justify-between">
                            <div>
                                <span class="font-semibold">Damage:</span>
                                {{ recommendation.damageGainPercent.toFixed(2) }}%
                            </div>

                            <div class="text-right">
                                <span class="font-semibold">Cost:</span>
                                {{ recommendation.effectiveCost.toFixed(0) }}g
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="mk-card p-5 md:p-6 mt-5 space-y-3">
                <h2 class="text-xl font-semibold">Full list</h2>
                <div v-for="recommendation in rankedRecommendations"
                     :key="recommendation.id">
                    <template v-if="recommendation.system === 'honing'">
                        <!--top level-->
                        <button type="button"
                                class="grid items-center w-full text-left gap-4 rounded-xl border border-l-4 border-zinc-700/70 border-l-blue-500/70 bg-zinc-900/70 px-4 py-3 grid-cols-3 max-[700px]:grid-cols-2 min-[1100px]:grid-cols-[minmax(13rem,1fr)_minmax(6rem,1fr)_minmax(8rem,1fr)_minmax(10rem,1fr)_minmax(10rem,1fr)_1rem]"
                                @click="togglePath(recommendation.id)">
                            <div class="font-semibold text-zinc-100">
                                {{ recommendation.title }}
                            </div>

                            <span class="min-[701px]:max-[1099px]:text-right min-[701px]:max-[1099px]:row-start-2 min-[701px]:max-[1099px]:col-start-3 min-[1100px]:text-center">
                                [{{ recommendation.detail.steps.length }} Step{{recommendation.detail.steps.length === 1 ? '' : 's'}}]
                            </span>

                            <div class="items-center min-[1100px]:text-center text-sm text-zinc-600 col-start-1 row-start-2 min-[1100px]:col-auto min-[1100px]:row-auto">
                                Damage:
                                {{ recommendation.damageGainPercent === null ? 'Unavailable' : recommendation.damageGainPercent.toFixed(2) }}%
                            </div>

                            <div class="items-center  text-right text-xs text-zinc-600 col-start-2 max-[700px]:row-start-2 min-[701px]:max-[1099px]:row-start-1 min-[1100px]:col-auto min-[1100px]:row-auto">
                                Total Cost:
                                {{ recommendation.effectiveCost.toLocaleString() }}
                            </div>

                            <div class="items-center text-xs  text-right text-zinc-600 col-start-2 max-[700px]:row-start-3 min-[1100px]:col-auto min-[1100px]:row-auto">
                                Gold Efficiency:
                                {{recommendation.goldPerOnePercent === null ? 'Unavailable' : `${recommendation.goldPerOnePercent.toFixed(2)}`}}
                            </div>

                            <div v-if="isHoningPathExpandable(recommendation.detail)"
                                  class="ml-2 text-xs text-zinc-500 max-[700px]:col-start-2 min-[701px]:max-[1099px]:col-start-3 row-start-1 justify-self-end min-[1100px]:col-auto min-[1100px]:row-auto">
                                {{ isPathExpanded(recommendation.id) ? '-' : '+' }}
                            </div>
                        </button>
                        <div v-if="isPathExpanded(recommendation.id)">
                            <!-- STEP EXPANSION -->
                                <div v-for="(step, index) in recommendation.detail.steps"
                                     :key="step.detail.id">
                                    <div v-if="shouldShowTransferMarker(recommendation.detail,index)"
                                         class="ml-3 font-semibold text-sm text-zinc-500">
                                        — Transfer Piece to T4.5 +{{ step.detail.currentLevel }} —
                                    </div>
                                    <template v-if="step.system === 'honing'">
                                        <button type="button"
                                                class="ml-3 border-l border-zinc-600/70 w-full pl-4 grid items-center gap-4 py-2 text-left grid-cols-3 max-[700px]:grid-cols-2 min-[1100px]:grid-cols-[minmax(12rem,1fr)_minmax(6rem,1fr)_minmax(8rem,1fr)_minmax(10rem,1fr)_minmax(10rem,1fr)_1rem]"
                                                @click.stop="toggleStep(`${recommendation.id}-${step.detail.id}`)">
                                            <div class="text-sm font-medium text-zinc-300 col-start-1 row-start-1 lg:col-auto lg:row-auto">
                                                +{{ step.detail.currentLevel }}
                                                to
                                                +{{ step.detail.targetLevel }}
                                            </div>

                                            <div class="text-xs text-zinc-500 min-[701px]:max-[1099px]:-translate-x-7 min-[1100px]:text-center min-[701px]:max-[1099px]:text-right max-[700px]:col-start-1 max-[700px]:row-start-3 min-[701px]:max-[1099px]:col-start-3 min-[701px]:max-[1099px]:row-start-2 min-[1100px]:col-auto min-[1100px]:row-auto">
                                                {{ step.detail.bestVariant.strategy }}
                                            </div>

                                            <div class="items-center min-[1100px]:text-center -translate-x-2 text-sm text-zinc-600 col-start-1 row-start-2  min-[1100px]:col-auto min-[1100px]:row-auto">
                                                Damage:
                                                {{step.detail.bestVariant.damageGainPercent === null ? 'Unavailable' : `${step.detail.bestVariant.damageGainPercent.toFixed(2)}`}}%
                                            </div>

                                            <div class="text-right -translate-x-5 min-w-0 text-xs text-zinc-600 col-start-2 max-[700px]:row-start-2 min-[701px]:max-[1099px]:row-start-1 max-lg:-translate-x-6 min-[1100px]:col-auto min-[1100px]:row-auto">
                                                Total Cost:
                                                {{ step.detail.bestVariant.effectiveCost.toLocaleString() }}
                                            </div>

                                            <div class="text-right -translate-x-7 min-w-0 text-xs text-zinc-600 col-start-2 max-[700px]:row-start-3 max-lg:-translate-x-6 min-[1100px]:col-auto min-[1100px]:row-auto">
                                                Gold Efficiency:
                                                {{step.detail.bestVariant.goldPerOnePercent === null ? 'Unavailable' : `${step.detail.bestVariant.goldPerOnePercent.toFixed(2)}`}}
                                            </div>

                                            <div v-if="step.detail.variants.length > 1"
                                                 class="-translate-x-7 text-center max-[700px]:col-start-2 min-[701px]:max-[1099px]:col-start-3 row-start-1 justify-self-end min-[1100px]:col-auto min-[1100px]:row-auto">
                                                {{ isStepExpanded(step.detail.id) ? '-' : '+' }}
                                            </div>
                                        </button>

                                        <!-- ALTERNATES FOR THIS STEP -->
                                        <div v-if="isStepExpanded(`${recommendation.id}-${step.detail.id}`) && step.detail.variants.length > 1">
                                            <div v-for="variant in getAlternateVariants(step.detail)"
                                                 :key="variant.id"
                                                 class="ml-8 border-l border-zinc-700/70 pl-4 grid min-[1100px]:grid-cols-[minmax(11rem,1fr)_minmax(6rem,1fr)_minmax(8rem,1fr)_minmax(10rem,1fr)_minmax(10rem,1fr)_1rem] gap-4 py-1 text-xs text-zinc-600">
                                                <div>
                                                    Alternate Strategy
                                                </div>

                                                <div class="min-[1100px]:text-center col-start-1 row-start-2  min-[1100px]:col-auto min-[1100px]:row-auto">
                                                    {{ variant.strategy }}
                                                </div>

                                                <div class="hidden min-[1100px]:block min-[1100px]:text-center ">
                                                    ---
                                                </div>

                                                <div class="text-right -translate-x-3 text-zinc-500/99 col-start-2 row-start-1 max-lg:-translate-x-6 min-[1100px]:col-auto min-[1100px]:row-auto">
                                                    Total Cost:
                                                    {{ variant.effectiveCost.toLocaleString() }}
                                                </div>

                                                <div class="text-right -translate-x-4 text-xs text-zinc-500/99 col-start-2 row-start-2 max-lg:-translate-x-6 min-[1100px]:col-auto min-[1100px]:row-auto">
                                                    Gold Efficiency:
                                                    {{variant.goldPerOnePercent === null ? 'Unavailable' : `${variant.goldPerOnePercent.toFixed(2)}`}}
                                                </div>

                                                <div></div>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-else-if="step.system === 'advanced-honing'">
                                        <div class="ml-3 border-l border-zinc-600/70 w-full pl-4 grid items-center gap-4 py-2 text-left grid-cols-3 max-[700px]:grid-cols-2 min-[1100px]:grid-cols-[minmax(12rem,1fr)_minmax(6rem,1fr)_minmax(8rem,1fr)_minmax(10rem,1fr)_minmax(10rem,1fr)_1rem]">
                                            <div class="text-sm font-medium text-zinc-300 col-start-1 row-start-1 lg:col-auto lg:row-auto">
                                                AH{{ step.detail.currentLevel }} to {{ step.detail.targetLevel }}
                                            </div>

                                            <span class="text-xs text-zinc-500 min-[701px]:max-[1099px]:-translate-x-7 min-[1100px]:text-center min-[701px]:max-[1099px]:text-right max-[700px]:col-start-1 max-[700px]:row-start-3 min-[701px]:max-[1099px]:col-start-3 min-[701px]:max-[1099px]:row-start-2 min-[1100px]:col-auto min-[1100px]:row-auto">
                                                Adv. Honing
                                            </span>

                                            <div class="items-center min-[1100px]:text-center -translate-x-2 text-sm text-zinc-600 col-start-1 row-start-2  min-[1100px]:col-auto min-[1100px]:row-auto">
                                                Damage:
                                                {{ step.detail.damageGainPercent.toFixed(2) }}%
                                            </div>

                                            <div class="text-right -translate-x-5 min-w-0 text-xs text-zinc-600 col-start-2 max-[700px]:row-start-2 min-[701px]:max-[1099px]:row-start-1 max-lg:-translate-x-6 min-[1100px]:col-auto min-[1100px]:row-auto">
                                                Total Cost:
                                                {{ step.detail.effectiveCost.toLocaleString() }}
                                            </div>

                                            <div class="text-right -translate-x-7 min-w-0 text-xs text-zinc-600 col-start-2 max-[700px]:row-start-3 max-lg:-translate-x-6 min-[1100px]:col-auto min-[1100px]:row-auto">
                                                Gold Efficiency:
                                                {{ step.detail.goldPerOnePercent.toFixed(2) }}
                                            </div>
                                            <div></div>
                                        </div>
                                    </template>
                                </div>

                        </div>
                    </template>
                    <template v-else-if="recommendation.system === 'accessory'">
                        <div class="grid items-center w-full text-left gap-4 rounded-xl border border-l-4 border-zinc-700/70 border-l-purple-500/70 bg-zinc-900/70 px-4 py-3 grid-cols-3 max-[700px]:grid-cols-2 min-[1100px]:grid-cols-[minmax(13rem,1fr)_minmax(6rem,1fr)_minmax(8rem,1fr)_minmax(10rem,1fr)_minmax(10rem,1fr)_1rem]">
                            <div class="font-semibold text-zinc-100">
                                {{ recommendation.title }}
                            </div>

                            <span class="items-center max-[700px]:col-start-1 max-[700px]:row-start-3 min-[701px]:max-[1099px]:text-right min-[701px]:max-[1099px]:row-start-2 min-[701px]:max-[1099px]:col-start-3 min-[1100px]:text-center">
                                Accessory
                            </span>

                            <div class="items-center min-[1100px]:text-center text-sm text-zinc-600 col-start-1 row-start-2 min-[1100px]:col-auto min-[1100px]:row-auto">
                                Damage:
                                {{ recommendation.damageGainPercent === null ? 'Unavailable' : recommendation.damageGainPercent.toFixed(2) }}%
                            </div>

                            <div class="items-center  text-right text-xs text-zinc-600 col-start-2 max-[700px]:row-start-2 min-[701px]:max-[1099px]:row-start-1 min-[1100px]:col-auto min-[1100px]:row-auto">
                                Total Cost:
                                {{ recommendation.effectiveCost.toLocaleString() }}
                            </div>

                            <div class="items-center text-xs  text-right text-zinc-600 col-start-2 max-[700px]:row-start-3 min-[1100px]:col-auto min-[1100px]:row-auto">
                                Gold Efficiency:
                                {{recommendation.goldPerOnePercent === null ? 'Unavailable' : `${recommendation.goldPerOnePercent.toFixed(2)}`}}
                            </div>

                            <div></div>
                        </div>
                    </template>
                    <template v-else-if="recommendation.system === 'advanced-honing'">
                        <div class="grid items-center w-full text-left gap-4 rounded-xl border border-l-4 border-zinc-700/70 border-l-green-500/70 bg-zinc-900/70 px-4 py-3 grid-cols-3 max-[700px]:grid-cols-2 min-[1100px]:grid-cols-[minmax(13rem,1fr)_minmax(6rem,1fr)_minmax(8rem,1fr)_minmax(10rem,1fr)_minmax(10rem,1fr)_1rem]">
                            <div class="font-semibold text-zinc-100">
                                {{ recommendation.title }}
                            </div>

                            <span class="items-center max-[700px]:col-start-1 max-[700px]:row-start-3 min-[701px]:max-[1099px]:text-right min-[701px]:max-[1099px]:row-start-2 min-[701px]:max-[1099px]:col-start-3 min-[1100px]:text-center">
                                Adv. Honing
                            </span>

                            <div class="items-center min-[1100px]:text-center text-sm text-zinc-600 col-start-1 row-start-2 min-[1100px]:col-auto min-[1100px]:row-auto">
                                Damage:
                                {{ recommendation.damageGainPercent.toFixed(2) }}%
                            </div>

                            <div class="items-center  text-right text-xs text-zinc-600 col-start-2 max-[700px]:row-start-2 min-[701px]:max-[1099px]:row-start-1 min-[1100px]:col-auto min-[1100px]:row-auto">
                                Total Cost:
                                {{ recommendation.effectiveCost.toLocaleString() }}
                            </div>

                            <div class="items-center text-xs  text-right text-zinc-600 col-start-2 max-[700px]:row-start-3 min-[1100px]:col-auto min-[1100px]:row-auto">
                                Gold Efficiency:
                                {{ recommendation.goldPerOnePercent.toFixed(2) }}
                            </div>

                            <div></div>
                        </div>
                    </template>
                </div>
        <p v-if="groupedHoningRecommendations.length === 0"
           class="text-sm text-zinc-500">
            No regular-honing data is available for the current next steps.
        </p>
          </section>
      </UContainer>
  </div>
</template>
<style scoped>
    .engraving-book-input::-webkit-inner-spin-button,
    .engraving-book-input::-webkit-outer-spin-button {
        margin: 0;
        appearance: none;
    }

    .engraving-book-input {
        appearance: textfield;
        -moz-appearance: textfield;
    }
</style>