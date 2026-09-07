---
title: Destroyer Guide
class: Warrior
subclass: Destroyer
class_id: 103
description: A complete guide to Destroyer, covering the Rage Hammer and Gravity Training builds with their Ark Grid variants and Pre-Ark Grid setups.
identity:
  name: Hypergravity Zone Mode / Gravity Release Mode
  description: Destroyer generates gravity cores with blue skills and spends blue cores by using purple skills to fill the identity gauge with purple skills. Pressing Z enters a mode determined by your class engraving, described under each build.
synergy:
  name: Armor Destruction & Target Focus
  description: Reduces the armor of enemies through 3 of normal (blue) skills. Running Crash <tripod>Target Focus</tripod> is increase the stagger damage from all sources while using the skill
  skills:
    - Heavy Crush
    - Power Strike
    - Dreadnaught
    - Running Crash
builds:
  - name: Rage Hammer
    engraving: Rage Hammer
    description: High burst damage focused build with enhanced purple skills by the Gravity Release Mode (Z). Excellent utility with weakpoint and stagger.
    identity:
      name: Gravity Release Mode
      description: Activated on pressing Z while the identity gauge is filled. In this mode (Z), the next purple skill you use deals increased damage.
    playstyle: Get 3 cores by using blue skills and use purple skills to fill the Gravity Release Mode (Z), use Z once one of your big skill is ready to be used for maximum damage (Perfect Swing/Supernova).
    difficulty: medium
    preArkGrid:
      description: Build 3 cores -> use purple skill to fill the identity -> repeat until meter is full -> use Z and one of your big damage skills.
      priorities:
        - Hit all purple skills from the front
        - Take <tripod>taunt</tripod> tripod if boss is tauntable
        - Use Z buff only for Supernova(T) or Perfect Swing
        - Use your push immune skills to stay at the front of the boss
        - Pair a 2 core skill with a 1 core skill to avoid overcapping on cores
        - Be Patient and wait for an opening before sending your long charging skills (Supernova, Perfect Swing, etc.) Be careful to not get interrupted by cutscenes or major mechanics or missing your attacks from the boss turning at the last moment.
      arkPassiveTips:
        - Try to get 80-82% crit rate on P (Character Details) and minimum 874 Spec on the <untag>Evolution</untag>
        - Focus on the main <untag>Enlightenment</untag> line before going for side nodes.
        - If you do not have enough points to max on the <untag>Leap</untag> you can follow these steps, if you have 10p invest to Circulation. If you have 20p or more invest to Accumulation.
        - Also if you already reach the crit and spec goal and still have points to invest, you can add excess points to swiftness as well.
      arkPassives:
        - name: Crit
          points: 24
          category: evolution
          tier: 1
        - name: Specialization
          points: 16
          category: evolution
          tier: 1
        - name: Illicit Spell
          points: 2
          category: evolution
          tier: 2
        - name: Limit Break
          points: 1
          category: evolution
          tier: 2
        - name: Strike
          points: 2
          category: evolution
          tier: 3
        - name: Critical
          points: 1
          category: evolution
          tier: 4
        - name: Pulverize
          points: 1
          category: evolution
          tier: 4
        - name: MP Furnace
          points: 2
          category: evolution
          tier: 5
        - name: Gravity Armor
          points: 3
          category: enlightenment
          tier: 1
        - name: Sharp Hammer
          points: 3
          category: enlightenment
          tier: 2
        - name: Rage Hammer
          points: 3
          category: enlightenment
          tier: 3
        - name: Inertia Enhancement
          points: 1
          category: enlightenment
          tier: 3
        - name: Gravity Release
          points: 3
          category: enlightenment
          tier: 4
        - name: Gravity Conversion
          points: 1
          category: enlightenment
          tier: 4
        - name: Release Potential
          points: 4
          category: leap
          tier: 1
        - name: Unleashed Power
          points: 5
          category: leap
          tier: 1
        - name: Instant Spell
          points: 2
          category: leap
          tier: 1
        - name: Gravity Accumulation
          points: 3
          category: leap
          tier: 2
      engravings:
        - name: Grudge
          priority: required
        - name: Barricade
          priority: required
        - name: Master Brawler
          priority: required
        - name: Super Charge
          priority: required
        - name: Cursed Doll
          priority: recommended
        - name: Stabilized Status
          priority: optional
        - name: MP Efficiency Increase
          priority: optional
      skills:
        - name: Perfect Swing
          level: 14
          tripods:
            - Weak Point Detection
            - Absolute Strength
            - Intemperance
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Main Charging Skill, Highest Damage**
            - Perfect Swing’s swinging motion is ~270 degrees.
            - Before Perfect Swing hits, you will walk forward a little bit. You can use this to cast Perfect Swing from the side of the boss.
        - name: Seismic Hammer
          level: 14
          tripods:
            - Enhanced Strike
            - Absolute Strength
            - Starving Strength
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **360 degree AOE**
            - It’s possible to animation cancel Seismic Hammer using spacebar after its first hit.
            - For experienced players, consider taking the <tripod>Quick Prep</tripod> in the first row to maximize gauge generation.
        - name: Earth Eater
          level: 14
          tripods:
            - Enhanced Strike
            - Tenacity
            - Earthen Rage
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Highest Stagger, Push Immunity**
            - Main stagger skill. Also used to ignore certain patterns due to having a <tripod>tenacity</tripod> tripod.
            - Earth Eater only needs to be charged to one bar for full stagger and two bars for full damage.
        - name: Full Swing
          level: 14
          tripods:
            - Quick Prep
            - Scary Hammer
            - Beast's Eye
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Lowest CD of 4 purple skills, Reposition tool**
            - Full Swing can be used to deal damage while repositioning to the enemy’s head if used diagonally from the enemy’s sides.
            - Full Swing should be prioritized in rotations to maximize gauge generation.
        - name: Endure Pain
          level: 10
          tripods:
            - Guaranteed Core
            - Anti-Gravity
            - Healthy Mentality
          rune: Quick Recharge
          rune_rarity: epic
          notes: |-
            **DR, Shield, and Super Armor on Demand**
            - EP is a key skill in setting up any Purple skill prioritizing PS, SH, FS, but not overlapping with EE due to it having Tenacity.
            - Switching to Taunt when fighting targets that are tauntable.
        - name: Heavy Crush
          level: 10
          tripods:
            - Quick Hit
            - Armor Destruction
            - Aftershock
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Best utility skill, Short CD, Applies Synergy**
            - HC is our primary skill to generate 1 core.
            - <tripod>Aftershock</tripod> tripod can reapply bleed or poison ticks also applies synergy
            - There is alternatives for rune to some situations. Purify (for cleanse), Conviction (for cd and mana regen), Bleed and Poison (for damage)
        - name: Power Shoulder
          level: 10
          tripods:
            - Toughened Body
            - Objective Complete
            - Express Fury
          rune: Protection
          rune_rarity: legendary
          notes: |-
            **Extra movement, can proc Runes twice**
            - Judgment Rune is added to utilize Conviction-Judgement if mana is needed.
            - Downgrade to level 7 for prevent mana issues
            - Other alternative runes are Rage and Quick Recharge
        - name: Dreadnaught
          level: 10
          tripods:
            - Tenacity
            - Toughened Body
            - Splendid Attack
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **All-in-1 Utility: DR, Super Armor, Stagger, Weak Point, Counter**
            - <tripod>Tenacity</tripod> is used to tank patterns while also generating cores. This skill can also apply armor destruction synergy, but you must give up the <tripod>Tenacity</tripod>.
            - <tripod>Splendid Attack</tripod> is similar to Heavy Crush’s <tripod>Aftershock</tripod>, the animation leaves an orb on the ground.
            - Downgrade to level 7 for prevent mana issues and also shorter animation
            - For an alternative to Dreadnaught, you can use Power Strike with the 3-1-2 tripods and same rune.
        - name: Supernova
          level_label: Hyper Awakening Technique
          notes: |-
            **Main Damage Skill**
            - Bigger and stronger version of Perfect Swing with longer cooldown and charge up time.
            - Hit front
        - name: Terra Nova / Galaxy Break
          icon: Terra Nova
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Meter Generation Skill**
            - Completely fills up Gravity Release Mode, allowing Back to Back Z usage.
            - If you don't want to use stimulants, use it at the begin of the fight for longer raids.
      gems:
        - skill: Perfect Swing
          type: damage
          priority: 1
        - skill: Full Swing
          type: damage
          priority: 2
        - skill: Seismic Hammer
          type: damage
          priority: 3
        - skill: Earth Eater
          type: damage
          priority: 4
        - skill: Full Swing
          type: cooldown
          priority: 1
        - skill: Seismic Hammer
          type: cooldown
          priority: 2
        - skill: Endure Pain
          type: cooldown
          priority: 3
        - skill: Perfect Swing
          type: cooldown
          priority: 4
        - skill: Power Shoulder
          type: cooldown
          priority: 5
        - skill: Dreadnaught
          type: cooldown
          priority: 6
        - skill: Heavy Crush
          type: cooldown
          priority: 7
      rotation:
        - Terra Nova
        - Seismic Hammer
        - Gravity Release Mode
        - Supernova
        - Endure Pain
        - Full Swing
        - Heavy Crush
        - Power Shoulder
        - Seismic Hammer
        - Heavy Crush
        - Dreadnaught
        - Earth Eater
        - Heavy Crush
        - Power Shoulder
        - Full Swing
        - Gravity Release Mode
        - Perfect Swing
    engravings:
      - name: Grudge
        priority: required
      - name: Super Charge
        priority: required
      - name: Master Brawler
        priority: required
      - name: Cursed Doll
        priority: recommended
      - name: Barricade
        priority: recommended
      - name: Stabilized Status
        priority: optional
      - name: MP Efficiency Increase
        priority: optional
    variants:
      - name: Singularity
        difficulty: 1
        recommended: true
        description: The same playstyle as the Pre-Ark Grid setup, with added quality of life. Perfect Swing always counts as a front attack and charges faster.
        stats: Critical 25/30, Specialization 15/30
        arkgrid_cores: Singularity + Absolute Control + Broken Chains
        arkgrid_prose: |-
          Core priority is Singularity > Absolute Control > Broken Chains.
          Minimum: Sun 14 Moon 14 Star 10.
          This setup is known as the 111 build. The alternatives, in order of preference, are 112, 122, and 121. Overall damage is similar across all of them, but Hyper Awakening Technique (T) damage increases as purple skill damage drops.
        priorities:
          - The same stat goals apply here; 80-82% Critical Rate and at least 874 Specialization. Put any leftover points into Swiftness.
          - Supernova should hit in front of the boss for maximum damage.
          - Z buff prioritize for Supernova and Perfect Swing.
          - Take <tripod>taunt</tripod> tripod if boss is tauntable.
        skills:
        - name: Perfect Swing
          level: 14
          tripods:
            - Weak Point Detection
            - Absolute Strength
            - Intemperance
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Main Charging Skill, Highest Damage**
            - Perfect Swing’s swinging motion is ~270 degrees.
            - Before Perfect Swing hits, you will walk forward a little bit. You can use this to cast Perfect Swing from the side of the boss.
        - name: Seismic Hammer
          level: 14
          tripods:
            - Enhanced Strike
            - Absolute Strength
            - Starving Strength
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **360 degree AOE**
            - It’s possible to animation cancel Seismic Hammer using spacebar after its first hit.
            - For experienced players, consider taking the <tripod>Quick Prep</tripod> in the first row to maximize gauge generation.
        - name: Earth Eater
          level: 14
          tripods:
            - Enhanced Strike
            - Tenacity
            - Earthen Rage
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Highest Stagger, Push Immunity**
            - Main stagger skill. Also used to ignore certain patterns due to having a <tripod>tenacity</tripod> tripod.
            - Earth Eater only needs to be charged to one bar for full stagger and two bars for full damage.
        - name: Full Swing
          level: 14
          tripods:
            - Quick Prep
            - Scary Hammer
            - Beast's Eye
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Lowest CD of 4 purple skills, Reposition tool**
            - Full Swing can be used to deal damage while repositioning to the enemy’s head if used diagonally from the enemy’s sides.
            - Full Swing should be prioritized in rotations to maximize gauge generation.
        - name: Endure Pain
          level: 10
          tripods:
            - Guaranteed Core
            - Anti-Gravity
            - Healthy Mentality
          rune: Focus
          rune_rarity: legendary
          notes: |-
            **DR, Shield, and Super Armor on Demand**
            - EP is a key skill in setting up any Purple skill prioritizing PS, SH, FS, but not overlapping with EE due to it having Tenacity.
            - Switching to <tripod>Taunt</tripod> when fighting targets that are tauntable.
        - name: Heavy Crush
          level: 10
          tripods:
            - Quick Hit
            - Armor Destruction
            - Aftershock
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Best utility skill, Short CD, Applies Synergy**
            - HC is our primary skill to generate 1 core.
            - <tripod>Aftershock</tripod> tripod can reapply bleed or poison ticks also applies synergy
            - There is alternatives for rune to some situations. Purify (for cleanse), Conviction (for cd and mana regen), Bleed and Poison (for damage)
        - name: Power Shoulder
          level: 10
          tripods:
            - Toughened Body
            - Objective Complete
            - Express Fury
          rune: Rage
          rune_rarity: legendary
          notes: |-
            **Extra movement, can proc Runes twice**
            - Judgment Rune is added to utilize Conviction-Judgement if mana is needed.
            - Downgrade to level 7 for prevent mana issues
        - name: Dreadnaught
          level: 10
          tripods:
            - Tenacity
            - Toughened Body
            - Violent Hammer
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **All-in-1 Utility: DR, Super Armor, Stagger, Weak Point, Counter**
            - <tripod>Tenacity</tripod> is used to tank patterns while also generating cores. This skill can also apply armor destruction synergy, but you must give up the <tripod>Tenacity</tripod>.
            - Downgrade to level 7 for prevent mana issues and also shorter animation
            - For an alternative to Dreadnaught, you can use Power Strike with the 3-1-2 tripods and same rune.
            - Protection rune is choosable to tank the patterns
        - name: Supernova
          level_label: Hyper Awakening Technique
          notes: |-
            **Main Damage Skill**
            - Bigger and stronger version of Perfect Swing with longer cooldown and charge up time.
            - Hit front
        - name: Terra Nova / Galaxy Break
          icon: Terra Nova
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Meter Generation Skill**
            - Completely fills up Gravity Release Mode, allowing Back to Back Z usage.
            - If you don't want to use stimulants, use it at the begin of the fight for longer raids.
        gems:
        - skill: Perfect Swing
          type: damage
          priority: 1
        - skill: Full Swing
          type: damage
          priority: 2
        - skill: Seismic Hammer
          type: damage
          priority: 3
        - skill: Earth Eater
          type: damage
          priority: 4
        - skill: Perfect Swing
          type: cooldown
          priority: 1
        - skill: Full Swing
          type: cooldown
          priority: 2
        - skill: Seismic Hammer
          type: cooldown
          priority: 3
        - skill: Endure Pain
          type: cooldown
          priority: 4
        - skill: Earth Eater
          type: cooldown
          priority: 5
        - skill: Dreadnaught
          type: cooldown
          priority: 6
        - skill: Power Shoulder
          type: cooldown
          priority: 7
        arkPassives:
          - name: Crit
            points: 25
            category: evolution
            tier: 1
          - name: Specialization
            points: 15
            category: evolution
            tier: 1
          - name: Illicit Spell
            points: 2
            category: evolution
            tier: 2
          - name: Limit Break
            points: 1
            category: evolution
            tier: 2
          - name: Strike
            points: 2
            category: evolution
            tier: 3
          - name: Critical
            points: 1
            category: evolution
            tier: 4
          - name: Pulverize
            points: 1
            category: evolution
            tier: 4
          - name: MP Furnace
            points: 2
            category: evolution
            tier: 5
          - name: Gravity Armor
            points: 3
            category: enlightenment
            tier: 1
          - name: Sharp Hammer
            points: 3
            category: enlightenment
            tier: 2
          - name: Rage Hammer
            points: 3
            category: enlightenment
            tier: 3
          - name: Gravity Release
            points: 3
            category: enlightenment
            tier: 4
          - name: Gravity Conversion
            points: 2
            category: enlightenment
            tier: 4
          - name: Release Potential
            points: 4
            category: leap
            tier: 1
          - name: Unleashed Power
            points: 5
            category: leap
            tier: 1
          - name: Instant Spell
            points: 2
            category: leap
            tier: 1
          - name: Gravity Accumulation
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Your Critical Rate and Specialization depend on your crit synergy, engravings, and bracelet. Aim for as close to 100% Critical Rate (Total of all sources) as you can while keeping at least 874 Specialization.
          - Swiftness is an option for any remaining points.
        rotation:
        - Terra Nova
        - Seismic Hammer
        - Gravity Release Mode
        - Supernova
        - Endure Pain
        - Full Swing
        - Heavy Crush
        - Power Shoulder
        - Seismic Hammer
        - Heavy Crush
        - Dreadnaught
        - Earth Eater
        - Heavy Crush
        - Power Shoulder
        - Full Swing
        - Gravity Release Mode
        - Perfect Swing
      - name: Dimensional Collapse
        difficulty: 3
        description: Each Gravity Release activation grants a stack. At two stacks your purple skills reset, and the next four purple skill hits each grant three cores. In short; run the normal rotation to fill the gauge, activate for the first stack, fill it again, activate for the second stack, cast four purple skills without using blue skills, then activate again and repeat. This build is not recommended.
        stats: Critical 26/30, Specialization 12/30, Swiftness 2/30
        arkgrid_cores: Dimensional Collapse + Gravity Enhancement + Turbulent Release
        arkgrid_prose: |-
          Core priority is Dimensional Collapse > Gravity Enhancement > Turbulent Release
          Minimum: Sun 17 Moon 14 Star 10.
        engravings:
          - name: Grudge
            priority: required
          - name: Barricade
            priority: required
          - name: Master Brawler
            priority: required
          - name: Super Charge
            priority: required
          - name: Cursed Doll
            priority: recommended
          - name: Stabilized Status
            priority: optional
          - name: MP Efficiency Increase
            priority: optional
        priorities:
          - Keep your Awakening as a backup for when the rotation breaks down.
          - You must land your purple skills once you have two Dimensional Collapse stacks.
          - Use push immunity carefully, since this build has fewer windows for it.
          - Use stimulants before start the raid
        skills:
        - name: Perfect Swing
          level: 14
          tripods:
            - Weak Point Detection
            - Absolute Strength
            - Intemperance
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Main Charging Skill, Highest Damage**
            - Perfect Swing’s swinging motion is ~270 degrees.
            - Before Perfect Swing hits, you will walk forward a little bit. You can use this to cast Perfect Swing from the side of the boss.
        - name: Seismic Hammer
          level: 14
          tripods:
            - Enhanced Strike
            - Absolute Strength
            - Starving Strength
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **360 degree AOE**
            - It’s possible to animation cancel Seismic Hammer using spacebar after its first hit.
            - For experienced players, consider taking the <tripod>Quick Prep</tripod> in the first row to maximize gauge generation.
        - name: Earth Eater
          level: 14
          tripods:
            - Enhanced Strike
            - Tenacity
            - Earthen Rage
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Highest Stagger, Push Immunity**
            - Main stagger skill. Also used to ignore certain patterns due to having a <tripod>tenacity</tripod> tripod.
            - Earth Eater only needs to be charged to one bar for full stagger and two bars for full damage.
        - name: Full Swing
          level: 14
          tripods:
            - Quick Prep
            - Scary Hammer
            - Beast's Eye
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Lowest CD of 4 purple skills, Reposition tool**
            - Full Swing can be used to deal damage while repositioning to the enemy’s head if used diagonally from the enemy’s sides.
            - Full Swing should be prioritized in rotations to maximize gauge generation.
        - name: Endure Pain
          level: 10
          tripods:
            - Guaranteed Core
            - Anti-Gravity
            - Healthy Mentality
          rune: Rage
          rune_rarity: legendary
          notes: |-
            **DR, Shield, and Super Armor on Demand**
            - EP is a key skill in setting up any Purple skill prioritizing PS, SH, FS, but not overlapping with EE due to it having Tenacity.
            - Switching to <tripod>Taunt</tripod> when fighting targets that are tauntable.
        - name: Heavy Crush
          level: 10
          tripods:
            - Quick Hit
            - Armor Destruction
            - Aftershock
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Best utility skill, Short CD, Applies Synergy**
            - HC is our primary skill to generate 1 core.
            - <tripod>Aftershock</tripod> tripod can reapply bleed or poison ticks also applies synergy
            - There is alternatives for rune to some situations. Purify (for cleanse), Conviction (for cd and mana regen), Bleed and Poison (for damage)
        - name: Power Shoulder
          level: 10
          tripods:
            - Toughened Body
            - Objective Complete
            - Express Fury
          rune: Quick Recharge
          rune_rarity: epic
          notes: |-
            **Extra movement, can proc Runes twice**
            - Judgment Rune is added to utilize Conviction-Judgement if mana is needed.
            - Downgrade to level 7 for prevent mana issues
        - name: Power Strike
          level: 11
          tripods:
            - Agile Movement
            - Armor Destruction
            - Elaborate Hit
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Applies our Synergy, Counter**
            - Downgrade to level 7 for prevent mana issues and also shorter animation
            - After the initial hit of Power Strike, it's possible to animation cancel the other hits. All hits can apply armor destruction synergy and also count as a counter.
        - name: Supernova
          level_label: Hyper Awakening Technique
          notes: |-
            **Main Damage Skill**
            - Bigger and stronger version of Perfect Swing with longer cooldown and charge up time.
            - Hit front
        - name: Terra Nova / Galaxy Break
          icon: Terra Nova
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Meter Generation Skill**
            - Completely fills up Gravity Release Mode, allowing Back to Back Z usage.
            - If you don't want to use stimulants, use it at the begin of the fight for longer raids.
        gems:
        - skill: Perfect Swing
          type: damage
          priority: 1
        - skill: Full Swing
          type: damage
          priority: 2
        - skill: Seismic Hammer
          type: damage
          priority: 3
        - skill: Earth Eater
          type: damage
          priority: 4
        - skill: Perfect Swing
          type: cooldown
          priority: 1
        - skill: Full Swing
          type: cooldown
          priority: 2
        - skill: Seismic Hammer
          type: cooldown
          priority: 3
        - skill: Endure Pain
          type: cooldown
          priority: 4
        - skill: Earth Eater
          type: cooldown
          priority: 5
        - skill: Power Strike
          type: cooldown
          priority: 6
        - skill: Power Shoulder
          type: cooldown
          priority: 7
        arkPassives:
          - name: Crit
            points: 26
            category: evolution
            tier: 1
          - name: Specialization
            points: 12
            category: evolution
            tier: 1
          - name: Swiftness
            points: 2
            category: evolution
            tier: 1
          - name: Illicit Spell
            points: 2
            category: evolution
            tier: 2
          - name: Keen Sense
            points: 1
            category: evolution
            tier: 2
          - name: Strike
            points: 2
            category: evolution
            tier: 3
          - name: Critical
            points: 1
            category: evolution
            tier: 4
          - name: Pulverize
            points: 1
            category: evolution
            tier: 4
          - name: MP Furnace
            points: 2
            category: evolution
            tier: 5
          - name: Gravity Armor
            points: 3
            category: enlightenment
            tier: 1
          - name: Sharp Hammer
            points: 3
            category: enlightenment
            tier: 2
          - name: Rage Hammer
            points: 3
            category: enlightenment
            tier: 3
          - name: Gravity Release
            points: 3
            category: enlightenment
            tier: 4
          - name: Gravity Conversion
            points: 2
            category: enlightenment
            tier: 4
          - name: Release Potential
            points: 4
            category: leap
            tier: 1
          - name: Unleashed Power
            points: 5
            category: leap
            tier: 1
          - name: Instant Spell
            points: 2
            category: leap
            tier: 1
          - name: Gravity Accumulation
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - You can put one point into Inertia Enhancement instead of Gravity Conversion.
          - The same goals apply; 80-82% Critical Rate (in character details) and at least 874 Specialization.
        rotation:
          - Power Shoulder
          - Heavy Crush
          - Seismic Hammer
          - Gravity Release Mode
          - Supernova
          - Terra Nova
          - Gravity Release Mode
          - Perfect Swing
          - Endure Pain
          - Perfect Swing
          - Heavy Crush
          - Full Swing
          - Earth Eater
          - Seismic Hammer
          - Gravity Release Mode
          - Perfect Swing
      - name: Earth Wave
        difficulty: 2
        description: This build replaces the charged skills with instant ones, making it the fastest Destroyer build at the moment.
        stats: Critical 27/30, Specialization 4/30, Swiftness 9/30
        arkgrid_cores: Earth Wave + Gravity Run + Reckless Blow
        arkgrid_prose: |-
          Core priority is Earth Wave > Gravity Run > Reckless Blow
          Minimum: Sun 17 Moon 14 Star 17.
        engravings:
          - name: Grudge
            priority: required
          - name: Cursed Doll
            priority: required
          - name: Master Brawler
            priority: required
          - name: Barricade
            priority: required
          - name: MP Efficiency Increase
            priority: required
          - name: Adrenaline
            priority: recommended
          - name: Stabilized Status
            priority: optional
        priorities:
          - Z Buff priority is Earth Wave > Perfect Swing > Seismic Hammer
          - Use your Hyper Awakening Technique while your blue skills are on cooldown.
          - When Seismic Hammer and Full Swing come off cooldown together, use Seismic Hammer first.
          - There are 2 breakpoints for spec. Try to get used to play with lower spec.
          - Do not fully charge Full Swing; tap it instead.
          - Adjust your pet effect which stat is deficient for you
        skills:
        - name: Perfect Swing
          level: 14
          tripods:
            - Weak Point Detection
            - Absolute Strength
            - Hour of Slaughter
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Highest Damage**
            - Perfect Swing’s swinging motion is ~270 degrees.
            - Before Perfect Swing hits, you will walk forward a little bit. You can use this to cast Perfect Swing from the side of the boss.
        - name: Seismic Hammer
          level: 14
          tripods:
            - Quick Prep
            - Absolute Strength
            - Starving Strength
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **360 degree AOE**
            - It’s possible to animation cancel Seismic Hammer using spacebar after its first hit.
        - name: Earth Wave
          level: 14
          tripods:
            - Weak Point Detection
            - Absolute Strength
            - Reckless Blow
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Highest Damage**
        - name: Full Swing
          level: 14
          tripods:
            - Quick Prep
            - Gravity Charge
            - Beast's Eye
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Lowest CD of 4 purple skills**
            - Do not full cast, just tap it
            - If your spec above the 874 change the <tripod>Gravity Charge</tripod> to <tripod>Tenacity</tripod>
        - name: Endure Pain
          level: 10
          tripods:
            - Guaranteed Core
            - Anti-Gravity
            - Healthy Mentality
          rune: Focus
          rune_rarity: legendary
          notes: |-
            **DR, Shield, and Super Armor on Demand**
            - Switching to <tripod>Taunt</tripod> when fighting targets that are tauntable.
        - name: Heavy Crush
          level: 10
          tripods:
            - Quick Hit
            - Armor Destruction
            - Aftershock
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Best utility skill, Short CD, Applies Synergy**
            - HC is our primary skill to generate 1 core.
            - <tripod>Aftershock</tripod> tripod can reapply bleed or poison ticks also applies synergy
            - There is alternatives for rune to some situations. Purify (for cleanse), Conviction (for cd and mana regen), Bleed and Poison (for damage)
        - name: Power Shoulder
          level: 10
          tripods:
            - Toughened Body
            - Objective Complete
            - Express Fury
          rune: Quick Recharge
          rune_rarity: epic
          notes: |-
            **Extra movement, can proc Runes twice**
            - Judgment Rune is added to utilize Conviction-Judgement if mana is needed.
            - Downgrade to level 7 for prevent mana issues
        - name: Power Strike
          level: 7
          tripods:
            - Agile Movement
            - Armor Destruction
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Counter**
            - If using at level 10 select <tripod>Elaborate Hit</tripod> in third row
        - name: Chain Strike
          level_label: Hyper Awakening Technique
          notes: |-
            **Extra blue skill and Decent Damage**
            - It is hit 3 times in row, try to at least hit the last attack in front
        - name: Terra Nova / Galaxy Break
          icon: Terra Nova
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Meter Generation Skill**
            - Completely fills up Gravity Release Mode, allowing Back to Back Z usage.
            - If you don't want to use stimulants, use it at the begin of the fight for longer raids.
        gems:
        - skill: Earth Wave
          type: damage
          priority: 1
        - skill: Perfect Swing
          type: damage
          priority: 2
        - skill: Seismic Hammer
          type: damage
          priority: 3
        - skill: Earth Wave
          type: cooldown
          priority: 1
        - skill: Perfect Swing
          type: cooldown
          priority: 2
        - skill: Endure Pain
          type: cooldown
          priority: 3
        - skill: Full Swing
          type: cooldown
          priority: 4
        - skill: Seismic Hammer
          type: cooldown
          priority: 5
        - skill: Power Shoulder
          type: cooldown
          priority: 6
        - skill: Power Strike
          type: cooldown
          priority: 7
        - skill: Heavy Crush
          type: cooldown
          priority: 8
        arkPassives:
          - name: Crit
            points: 27
            category: evolution
            tier: 1
          - name: Specialization
            points: 4
            category: evolution
            tier: 1
          - name: Swiftness
            points: 9
            category: evolution
            tier: 1
          - name: Limit Break
            points: 1
            category: evolution
            tier: 2
          - name: Illicit Spell
            points: 2
            category: evolution
            tier: 2
          - name: Strike
            points: 2
            category: evolution
            tier: 3
          - name: Critical
            points: 1
            category: evolution
            tier: 4
          - name: Pulverize
            points: 1
            category: evolution
            tier: 4
          - name: MP Furnace
            points: 2
            category: evolution
            tier: 5
          - name: Gravity Armor
            points: 3
            category: enlightenment
            tier: 1
          - name: Sharp Hammer
            points: 3
            category: enlightenment
            tier: 2
          - name: Rage Hammer
            points: 3
            category: enlightenment
            tier: 3
          - name: Inertia Enhancement
            points: 1
            category: enlightenment
            tier: 3
          - name: Gravity Release
            points: 3
            category: enlightenment
            tier: 4
          - name: Gravity Conversion
            points: 1
            category: enlightenment
            tier: 4
          - name: Release Potential
            points: 4
            category: leap
            tier: 1
          - name: Unleashed Power
            points: 5
            category: leap
            tier: 1
          - name: Instant Spell
            points: 2
            category: leap
            tier: 1
          - name: Gravity Preservation
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Your Ark Passive stats vary with your bracelet, Adrenaline usage, but there are a few main goals.
          - With Adrenaline, aim for 60-62% Critical Rate on the character stat page. Without it, aim for 80-82%.
          - For Specialization, aim just above either 874 or 551, and put the rest into Swiftness.
          - If your Specialization is just above 874, run Full Swing with <tripod>Tenacity</tripod>.
          - If a crit synergy (10% Crit Rate comes from) on your side decrease 5-6p crit and invest to Swiftness
          - If a 2 synergy (20% Crit Rate comes from) on your side decrease 10-11p crit and invest swiftness or spec which one suits your gameplay
          - Adjust your pet effect which stat is deficient for you
          - Example spreads, both with Adrenaline; Crit 985 Spec 594 Swift 1027 (FS not push immune) or Crit 985 Spec 894 Swift 727 (FS push immune) and without Adrenaline; Crit 1545 Spec 584 Swift 477 (FS not push immune)
        rotation:
          - Heavy Crush
          - Gravity Release Mode
          - Earth Wave
          - Terra Nova
          - Seismic Hammer
          - Gravity Release Mode
          - Perfect Swing
          - Heavy Crush
          - Power Shoulder
          - Full Swing
          - Chain Strike
          - Earth Wave
          - Endure Pain
          - Seismic Hammer
          - Heavy Crush
          - Power Strike
          - Full Swing
          - Gravity Release Mode
          - Perfect Swing
  - name: Gravity Training
    engraving: Gravity Training
    description: Gravity Training turns the Hypergravity Zone into your main damage window. Most builds spend it on basic attacks or Vortex Gravity, while Gravity Destruction keeps it purely defensive or use as sub-dps.
    identity:
      name: Hypergravity Zone
      description: Gravity Training focuses on Hypergravity zone and utilizing gravity release skills to fill up Gravity Meter. Gravity Release skills still make up a relevant portion of your damage, but the majority comes from the Hypergravity zone basic attacks.
    playstyle: The Pre-Ark Grid and Gravity Reversal setups deal damage with basic attacks inside the Hypergravity Zone (Z). Gravity Destruction relies on just two purple skills, and Gravity Core builds around Vortex Gravity in the Hypergravity Zone (Z).
    difficulty: easy
    preArkGrid:
      description: Fill the Hypergravity Zone gauge with your purple skills, then deal damage with basic attacks while the zone is active.
      priorities:
        - Once the Hypergravity Zone is active, stay in front of the boss for as long as possible and land every basic attack you can.
        - Fill the Hypergravity Zone gauge as quickly as you can.
        - Purple skills do not need to hit from the front.
        - Do not use Vortex Gravity, the skill available inside the Hypergravity Zone, unless you need a counter.
        - Watch out for grab patterns.
        - Do not chase the front of the boss when less than 20-30% of the gauge remains.
        - Aim for an Attack Speed between 134% and 140%.
      arkPassiveTips:
        - Focus on the main <untag>Enlightenment</untag> line before going for side nodes.
        - Specialization matters a great deal here. Look for a bracelet with as much of it as possible, and never reduce your Specialization in the <untag>Evolution</untag>.
        - Concentrated Attack is an alternative in the <untag>Leap</untag>.
        - As an alternative <untag>Enlightenment</untag>, drop New Core to level 2 and raise Gravity Conversion to level 5.
      arkPassives:
          - name: Crit
            points: 10
            category: evolution
            tier: 1
          - name: Specialization
            points: 30
            category: evolution
            tier: 1
          - name: Limit Break
            points: 1
            category: evolution
            tier: 2
          - name: Keen Sense
            points: 2
            category: evolution
            tier: 2
          - name: Strike
            points: 2
            category: evolution
            tier: 3
          - name: Critical
            points: 1
            category: evolution
            tier: 4
          - name: Pulverize
            points: 1
            category: evolution
            tier: 4
          - name: Standing Striker
            points: 2
            category: evolution
            tier: 5
          - name: Gravity Shock
            points: 1
            category: enlightenment
            tier: 1
          - name: Gravity Charge
            points: 3
            category: enlightenment
            tier: 2
          - name: Gravity Training
            points: 3
            category: enlightenment
            tier: 3
          - name: Inertia Enhancement
            points: 1
            category: enlightenment
            tier: 3
          - name: New Core
            points: 3
            category: enlightenment
            tier: 4
          - name: Gravity Conversion
            points: 1
            category: enlightenment
            tier: 4
          - name: Unleashed Power
            points: 5
            category: leap
            tier: 1
          - name: Release Potential
            points: 4
            category: leap
            tier: 1
          - name: Instant Spell
            points: 2
            category: leap
            tier: 1
          - name: Gravity Preservation
            points: 3
            category: leap
            tier: 2
      engravings:
        - name: Grudge
          priority: required
        - name: Master Brawler
          priority: required
        - name: Keen Blunt Weapon
          priority: required
        - name: Barricade
          priority: required
        - name: Cursed Doll
          priority: recommended
        - name: Stabilized Status
          priority: optional
        - name: Spirit Absorption
          priority: optional
      skills:
        - name: Perfect Swing
          level: 14
          tripods:
            - Weak Point Detection
            - Absolute Strength
            - Hour of Slaughter
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Third Highest Damage Skill**
            - Perfect Swing’s swinging motion is ~270 degrees.
            - Before Perfect Swing hits, you will walk forward a little bit. You can use this to cast Perfect Swing from the side of the boss.
            - <tripod>Concussion</tripod> can be used for more stagger
        - name: Seismic Hammer
          level: 14
          tripods:
            - Enhanced Strike
            - Absolute Strength
            - Starving Strength
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **360 degree AOE, Second Highest Damage Skill, Slight Delay in Damage**
            - It’s possible to animation cancel Seismic Hammer using spacebar after its first hit.
        - name: Earth Wave
          level: 14
          tripods:
            - Weak Point Detection
            - Quick Prep
            - Reckless Blow
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Decent Damage, Good Stagger From Range**
        - name: Earth Eater
          level: 14
          tripods:
            - Gravity Charge
            - Tenacity
            - Earthen Rage
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Insane Stagger, Push Immunity**
            - Earth Eater only needs to be charged to one bar for full stagger and two bars for full damage.
            - Main stagger skill. Also used to ignore certain patterns due to having a <tripod>Tenacity</tripod>.
        - name: Endure Pain
          level: 10
          tripods:
            - Guaranteed Core
            - Anti-Gravity
            - Healthy Mentality
          rune: Rage
          rune_rarity: legendary
          notes: |-
            **DR, Shield, and Super Armor on Demand**
            - Switching to <tripod>Taunt</tripod> when fighting targets that are tauntable.
        - name: Heavy Crush
          level: 10
          tripods:
            - Quick Hit
            - Armor Destruction
            - Aftershock
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Best utility skill, Short CD, Applies Synergy**
            - HC is our primary skill to generate 1 core.
            - <tripod>Aftershock</tripod> tripod can reapply bleed or poison ticks also applies synergy
            - There is alternatives for rune to some situations. Purify (for cleanse), Conviction (for cd and mana regen), Bleed and Poison (for damage)
        - name: Power Shoulder
          level: 10
          tripods:
            - Toughened Body
            - Objective Complete
            - Express Fury
          rune: Quick Recharge
          rune_rarity: epic
          notes: |-
            **Extra movement, can proc Runes twice**
            - Judgment Rune is added to utilize Conviction-Judgement if mana is needed.
            - Downgrade to level 7 for prevent mana issues
            - Running Crash with 1-3-1 tripod are alternative of it.
        - name: Power Strike
          level: 10
          tripods:
            - Agile Movement
            - Armor Destruction
            - Elaborate Hit
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Applies our Synergy, Counter**
            - After the initial hit of Power Strike, it's possible to animation cancel the other hits. All hits can apply armor destruction synergy and also count as a counter.
            - Dreadnaught with 1-1-2 tripod
        - name: Chain Strike
          level_label: Hyper Awakening Technique
          notes: |-
            **One of the Highest Damage Skill**
            - It is hit 3 times in row, try to at least hit the last attack in front
        - name: Terra Nova / Galaxy Break
          icon: Terra Nova
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Meter Generation Skill**
            - Completely fills up Hypergravity Zone, allowing Back to Back Z usage.
            - If you don't want to use stimulants, use it at the begin of the fight for longer raids.
      gems:
        - skill: Hypergravity Skill
          type: damage
          priority: 1
        - skill: Seismic Hammer
          type: damage
          priority: 2
        - skill: Perfect Swing
          type: damage
          priority: 3
        - skill: Seismic Hammer
          type: cooldown
          priority: 1
        - skill: Perfect Swing
          type: cooldown
          priority: 2
        - skill: Endure Pain
          type: cooldown
          priority: 3
        - skill: Heavy Crush
          type: cooldown
          priority: 4
        - skill: Earth Eater
          type: cooldown
          priority: 5
        - skill: Earth Wave
          type: cooldown
          priority: 6
        - skill: Power Strike
          type: cooldown
          priority: 7
        - skill: Power Shoulder
          type: cooldown
          priority: 8
      rotation_sections:
        - title: Rotation
          steps:
            - Power Shoulder
            - Heavy Crush
            - Earth Eater
            - Endure Pain
            - Perfect Swing
            - Chain Strike
            - Earth Wave
            - Heavy Crush
            - Power Strike
            - Seismic Hammer
            - Hypergravity Zone
            - Basic Attack
    engravings:
      - name: Grudge
        priority: required
      - name: Master Brawler
        priority: required
      - name: Keen Blunt Weapon
        priority: required
      - name: Barricade
        priority: required
      - name: Cursed Doll
        priority: recommended
      - name: Stabilized Status
        priority: optional
    variants:
      - name: Gravity Reversal
        difficulty: 1
        recommended: true
        description: Identical to the Pre-Ark Grid setup. The only gains from the Ark Grid are a longer Hypergravity Zone duration and more Attack Speed.
        stats: Crit 10/30, Specialization 30/30
        arkgrid_cores: Gravity Reversal + Event Horizon + Collapse
        arkgrid_prose: |-
          Core priority is Gravity Reversal > Event Horizon > Collapse.
          Minimum: Sun 14 Moon 14 Star 10.
        priorities:
        - After activate the Hypergravity Zone (Z) stay in front of the boss as long as you can and try to land all basic attacks
        - Build your Hypergravity Zone (Z) as soon as possible
        - Try to land purple skill in front of the boss but it is not a big deal if you can't
        - Do not use the Vortex skill (Z skill inside the Hypergravity Zone) unless need a counter
        - Care about grab pattern
        - Do not chase the front if remaining gauge less than 20-30%
        - Try to reach Attack Speed between 134-140%
        skills:
        - name: Perfect Swing
          level: 14
          tripods:
            - Weak Point Detection
            - Absolute Strength
            - Hour of Slaughter
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Third Highest Damage Skill**
            - Perfect Swing’s swinging motion is ~270 degrees.
            - Before Perfect Swing hits, you will walk forward a little bit. You can use this to cast Perfect Swing from the side of the boss.
            - <tripod>Concussion</tripod> can be used for more stagger
        - name: Seismic Hammer
          level: 14
          tripods:
            - Enhanced Strike
            - Absolute Strength
            - Starving Strength
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **360 degree AOE, Second Highest Damage Skill, Slight Delay in Damage**
            - It’s possible to animation cancel Seismic Hammer using spacebar after its first hit.
        - name: Earth Wave
          level: 14
          tripods:
            - Weak Point Detection
            - Quick Prep
            - Reckless Blow
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Decent Damage, Good Stagger From Range**
        - name: Earth Eater
          level: 14
          tripods:
            - Gravity Charge
            - Tenacity
            - Earthen Rage
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Insane Stagger, Push Immunity**
            - Earth Eater only needs to be charged to one bar for full stagger and two bars for full damage.
            - Main stagger skill. Also used to ignore certain patterns due to having a <tripod>Tenacity</tripod>.
        - name: Endure Pain
          level: 10
          tripods:
            - Guaranteed Core
            - Anti-Gravity
            - Healthy Mentality
          rune: Rage
          rune_rarity: legendary
          notes: |-
            **DR, Shield, and Super Armor on Demand**
            - Switching to <tripod>Taunt</tripod> when fighting targets that are tauntable.
        - name: Heavy Crush
          level: 10
          tripods:
            - Quick Hit
            - Armor Destruction
            - Aftershock
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Best utility skill, Short CD, Applies Synergy**
            - HC is our primary skill to generate 1 core.
            - <tripod>Aftershock</tripod> tripod can reapply bleed or poison ticks also applies synergy
            - There is alternatives for rune to some situations. Purify (for cleanse), Conviction (for cd and mana regen), Bleed and Poison (for damage)
        - name: Power Shoulder
          level: 10
          tripods:
            - Toughened Body
            - Objective Complete
            - Express Fury
          rune: Quick Recharge
          rune_rarity: epic
          notes: |-
            **Extra movement, can proc Runes twice**
            - Judgment Rune is added to utilize Conviction-Judgement if mana is needed.
            - Downgrade to level 7 for prevent mana issues
            - Running Crash with 1-3-1 tripod are alternative of it.
        - name: Power Strike
          level: 10
          tripods:
            - Agile Movement
            - Armor Destruction
            - Elaborate Hit
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Applies Armor Destruction Synergy, Counter**
            - After the initial hit of Power Strike, it's possible to animation cancel the other hits. All hits can apply armor destruction synergy and also count as a counter.
            - Dreadnaught with 1-1-2 tripod
        - name: Supernova
          level_label: Hyper Awakening Technique
          notes: |-
            **Fast Filler the Hypergravity Zone**
            - Do not full cast it, just tap it.
            - Other Hyper Awakening skill can usable but need to change leap tree for it
        - name: Terra Nova / Galaxy Break
          icon: Terra Nova
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Meter Generation Skill**
            - Completely fills up Hypergravity Zone, allowing Back to Back Z usage.
            - If you don't want to use stimulants, use it at the begin of the fight for longer raids.
        gems:
        - skill: Hypergravity Skill
          type: damage
          priority: 1
        - skill: Seismic Hammer
          type: damage
          priority: 2
        - skill: Perfect Swing
          type: damage
          priority: 3
        - skill: Seismic Hammer
          type: cooldown
          priority: 1
        - skill: Perfect Swing
          type: cooldown
          priority: 2
        - skill: Endure Pain
          type: cooldown
          priority: 3
        - skill: Heavy Crush
          type: cooldown
          priority: 4
        - skill: Earth Eater
          type: cooldown
          priority: 5
        - skill: Earth Wave
          type: cooldown
          priority: 6
        - skill: Power Strike
          type: cooldown
          priority: 7
        - skill: Power Shoulder
          type: cooldown
          priority: 8
        rotation_sections:
          - title: Rotation
            steps:
            - Endure Pain
            - Supernova
            - Heavy Crush
            - Power Shoulder
            - Earth Wave
            - Hypergravity Zone
            - Basic Attack
        arkPassives:
          - name: Crit
            points: 10
            category: evolution
            tier: 1
          - name: Specialization
            points: 30
            category: evolution
            tier: 1
          - name: Limit Break
            points: 1
            category: evolution
            tier: 2
          - name: Keen Sense
            points: 2
            category: evolution
            tier: 2
          - name: Strike
            points: 2
            category: evolution
            tier: 3
          - name: Critical
            points: 1
            category: evolution
            tier: 4
          - name: Pulverize
            points: 1
            category: evolution
            tier: 4
          - name: Standing Striker
            points: 2
            category: evolution
            tier: 5
          - name: Gravity Shock
            points: 1
            category: enlightenment
            tier: 1
          - name: Gravity Charge
            points: 3
            category: enlightenment
            tier: 2
          - name: Gravity Training
            points: 3
            category: enlightenment
            tier: 3
          - name: Inertia Enhancement
            points: 1
            category: enlightenment
            tier: 3
          - name: New Core
            points: 3
            category: enlightenment
            tier: 4
          - name: Gravity Conversion
            points: 1
            category: enlightenment
            tier: 4
          - name: Unleashed Power
            points: 5
            category: leap
            tier: 1
          - name: Release Potential
            points: 5
            category: leap
            tier: 1
          - name: Circulation
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - If you run Chain Strike as your Hyper Awakening Technique, put two points into Instant Spell, drop Release Potential to level 4, and take Concentrated Attack instead of Circulation.
          - For an alternative <untag>Enlightenment</untag> tree is downgrade the New Core Lv 2 and invest Gravity Conversion Lv 5
          - Do not reduce your Specialization.
          - If you have spare damage gems, put them on purple skills rather than on Power Strike and Power Shoulder cooldowns.
          - Aim for at least 134% Attack Speed.
      - name: Gravity Destruction
        difficulty: 3
        recommended: false
        description: This build changes everything. Basic attacks inside the Hypergravity Zone are no longer your main damage source; instead you rely on just two purple skills. This build is not recommended.
        stats: Crit 30/30, Specialization 10/30
        arkgrid_cores: Gravity Destruction + Gravitational Circulation + Rock Blade
        arkgrid_prose: |-
          Core priority is Gravity Destruction > Gravitational Circulation > Rock Blade.
          Minimum: Sun 17 Moon 14 Star 10.
        priorities:
        - Do not get knocked down while casting Seismic Hammer or Earth Wave, or they will not reset each other.
        - Do not cast Seismic Hammer or Earth Wave immediately before a cutscene, or they will not reset each other.
        - Try to hit in front of the boss
        - If the rotation fails, activate the Hypergravity Zone for immunity and continue deal damage.
        - Stay below 114% Attack Speed, or you will need mana food.
        - With a strong support and a Summoner in your party, you can drop MP Efficiency Increase, eat mana food and a feast, and run Cursed Doll or Stabilized Status instead.
        - Lower your skill levels to manage mana.
        - Do not use all skill points
        skills:
        - name: Gravitational Energy
          level: 10
          tripods:
            - Charge Enhancement
            - Agile Movement
            - Wavering Gravity
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Can combo 6 orb generation fast with Heavy Crush weaving**
            - <tripod>Wavering</tripod> Gravity tripod generates 2 cores in a chain within 3 seconds combined with HC generating 1 core. Allowing us to combo 3 core purple skills back to back to generate a large amount of Gravity Meter.
        - name: Seismic Hammer
          level: 14
          tripods:
            - Enhanced Strike
            - Absolute Strength
            - Starving Strength
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **360 degree AOE, Second Highest Damage Skill, Slight Delay in Damage**
            - It’s possible to animation cancel Seismic Hammer using spacebar after its first hit.
        - name: Earth Wave
          level: 14
          tripods:
            - Weak Point Detection
            - Absolute Strength
            - Reckless Blow
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Highest Damage Skill**
        - name: Earth Smasher
          level: 7
          tripods:
            - Fatal Strength
            - Tenacity
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Push Immunity, Gain 3 cores**
        - name: Endure Pain
          level: 10
          tripods:
            - Guaranteed Core
            - Anti-Gravity
            - Healthy Mentality
          rune: Rage
          rune_rarity: legendary
          notes: |-
            **DR, Shield, and Super Armor on Demand**
            - Switching to <tripod>Taunt</tripod> when fighting targets that are tauntable.
        - name: Heavy Crush
          level: 10
          tripods:
            - Quick Hit
            - Armor Destruction
            - Aftershock
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Best utility skill, Short CD, Applies Synergy**
            - HC is our primary skill to generate 1 core.
            - <tripod>Aftershock</tripod> tripod can reapply bleed or poison ticks also applies synergy
            - There is alternatives for rune to some situations. Purify (for cleanse), Conviction (for cd and mana regen), Bleed and Poison (for damage)
        - name: Power Shoulder
          level: 7
          tripods:
            - Toughened Body
            - Objective Complete
          rune: Quick Recharge
          rune_rarity: epic
          notes: |-
            **Extra movement, can proc Runes twice**
            - Judgment Rune is added to utilize Conviction-Judgement if mana is needed.
            - Downgrade to level 7 for prevent mana issues
        - name: Dreadnaught
          level: 7
          tripods:
            - Tenacity
            - Toughened Body
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **All-in-1 Utility, DR, Super Armor, Stagger, Weak Point**
            - <tripod>Tenacity</tripod> tripod is used to tank patterns while also generating cores. This skill can also apply armor destruction synergy, but you must give up the tenacity tripod. All hits count as a counter. All hits can apply the armor destruction synergy.
            - For an alternative is Power Strike with 3-1 tripod and use same rune
        - name: Chain Strike
          level_label: Hyper Awakening Technique
          notes: |-
            **Third Highest Damage Skill**
            - It is hit 3 times in row, try to at least hit the last attack in front
        - name: Terra Nova / Galaxy Break
          icon: Terra Nova
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Meter Generation Skill**
            - Completely fills up Hypergravity Zone
        gems:
        - skill: Seismic Hammer
          type: damage
          priority: 1
        - skill: Earth Wave
          type: damage
          priority: 2
        - skill: Hypergravity Skill
          type: damage
          priority: 3
        - skill: Heavy Crush
          type: cooldown
          priority: 1
        - skill: Endure Pain
          type: cooldown
          priority: 2
        - skill: Gravitational Energy
          type: cooldown
          priority: 3
        - skill: Earth Smasher
          type: cooldown
          priority: 4
        - skill: Earth Wave
          type: cooldown
          priority: 5
        - skill: Seismic Hammer
          type: cooldown
          priority: 6
        - skill: Power Shoulder
          type: cooldown
          priority: 7
        - skill: Dreadnaught
          type: cooldown
          priority: 8
        rotation_sections:
          - title: Rotation
            steps:
            - Heavy Crush
            - Gravitational Energy
            - Earth Wave
            - Gravitational Energy
            - Heavy Crush
            - Seismic Hammer
            - Endure Pain
            - Earth Wave
            - Heavy Crush
            - Power Shoulder
            - Seismic Hammer
            - Earth Smasher
            - Earth Wave
        arkPassives:
          - name: Crit
            points: 30
            category: evolution
            tier: 1
          - name: Specialization
            points: 10
            category: evolution
            tier: 1
          - name: Illicit Spell
            points: 2
            category: evolution
            tier: 2
          - name: Keen Sense
            points: 1
            category: evolution
            tier: 2
          - name: Strike
            points: 2
            category: evolution
            tier: 3
          - name: Critical
            points: 1
            category: evolution
            tier: 4
          - name: Master
            points: 1
            category: evolution
            tier: 4
          - name: Blunt Thorn
            points: 2
            category: evolution
            tier: 5
          - name: Gravity Shock
            points: 1
            category: enlightenment
            tier: 1
          - name: Gravity Charge
            points: 3
            category: enlightenment
            tier: 2
          - name: Gravity Training
            points: 3
            category: enlightenment
            tier: 3
          - name: Inertia Enhancement
            points: 1
            category: enlightenment
            tier: 3
          - name: Release Enhancement
            points: 5
            category: enlightenment
            tier: 3
          - name: New Core
            points: 1
            category: enlightenment
            tier: 4
          - name: Gravity Conversion
            points: 4
            category: enlightenment
            tier: 4
          - name: Unleashed Power
            points: 5
            category: leap
            tier: 1
          - name: Release Potential
            points: 3
            category: leap
            tier: 1
          - name: Awakening Amplifier
            points: 1
            category: leap
            tier: 1
          - name: Instant Spell
            points: 3
            category: leap
            tier: 1
          - name: Gravity Preservation
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Work out your own Critical Rate first, then put any spare points into Swiftness, staying below 114% unless you are willing to eat mana food, or into Specialization.
          - If you don't have Relic Adrenaline, use Standing Striker instead of Blunt Thorn and set other things for not overcap the crit rate
      - name: Gravity Core
        difficulty: 3
        recommended: false
        description: Every buff goes into Vortex Gravity, which you want to land in front of the boss at least ten times. The skill is only available inside the Hypergravity Zone, so fill the gauge, activate the zone, then cast Vortex Gravity.
        stats: Crit 10/30, Specialization 30/30
        arkgrid_cores: Gravity Core + Gravitational Rush + Shattered Earth
        arkgrid_prose: |-
          Core priority is Gravity Core > Gravitational Rush > Shattered Earth.
          Minimum: Sun 17 Moon 14 Star 14.
        priorities:
        - Build the Hypergravity Zone as soon as possible
        - Reach 120% crit rate for Blunt Thorn build or 100% crit rate for Standing Striker build.
        - Try to land all ten hits from the front of the boss.
        - Reach at least 130% Attack Speed.
        - Swift Attack, one of the blue cores, is an alternative source of Attack Speed.
        - Atk/Move Speed line is recommended on your bracelet
        - If you want to use Earth Eater with the <tripod>Gravity Charge</tripod> tripod than change the Earth Wave tripods in order to 2-3-2.
        - This build is sensitive to your frame rate and latency. Below 30 milliseconds it is comfortable to play; above that you will need either a macro or a lot of practice. Test it in Trixion before taking it into Guardian Raids.
        - Use stimulant before the raid.
        skills:
        - name: Perfect Swing
          level: 14
          tripods:
            - Weak Point Detection
            - Absolute Strength
            - Hour of Slaughter
          rune: Quick Recharge
          rune_rarity: rare
          notes: |-
            **Third Highest Damage Skill**
            - Perfect Swing’s swinging motion is ~270 degrees.
            - Before Perfect Swing hits, you will walk forward a little bit. You can use this to cast Perfect Swing from the side of the boss.
        - name: Seismic Hammer
          level: 14
          tripods:
            - Quick Prep
            - Absolute Strength
            - Starving Strength
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **360 degree AOE, Second Highest Damage Skill, Slight Delay in Damage**
            - It’s possible to animation cancel Seismic Hammer using spacebar after its first hit.
        - name: Earth Wave
          level: 14
          tripods:
            - Gravity Charge
            - Quick Prep
            - Reckless Blow
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Decent Damage, Good Stagger From Range**
        - name: Earth Eater
          level: 14
          tripods:
            - Enhanced Strike
            - Tenacity
            - Earthen Rage
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Insane Stagger, Push Immunity**
            - Main stagger skill. Also used to ignore certain patterns due to having a <tripod>tenacity</tripod>.
            - Earth Eater only needs to be charged to one bar for full stagger and two bars for full damage.
        - name: Endure Pain
          level: 10
          tripods:
            - Guaranteed Core
            - Anti-Gravity
            - Healthy Mentality
          rune: Quick Recharge
          rune_rarity: rare
          notes: |-
            **DR, Shield, and Super Armor on Demand**
            - Switching to <tripod>Taunt</tripod> when fighting targets that are tauntable.
        - name: Heavy Crush
          level: 10
          tripods:
            - Quick Hit
            - Armor Destruction
            - Aftershock
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Best utility skill, Short CD, Applies Synergy**
            - HC is our primary skill to generate 1 core.
            - <tripod>Aftershock</tripod> tripod can reapply bleed or poison ticks also applies synergy
            - There is alternatives for rune to some situations. Purify (for cleanse), Conviction (for cd and mana regen), Bleed and Poison (for damage)
        - name: Power Shoulder
          level: 10
          tripods:
            - Toughened Body
            - Objective Complete
            - Express Fury
          rune: Quick Recharge
          rune_rarity: epic
          notes: |-
            **Extra movement, can proc Runes twice**
            - Judgment Rune is added to utilize Conviction-Judgement if mana is needed.
            - Downgrade to level 7 for prevent mana issues
        - name: Power Strike
          level: 10
          tripods:
            - Agile Movement
            - Armor Destruction
            - Elaborate Hit
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Applies Armor Destruction Synergy, Counter**
            - After the initial hit of Power Strike, it's possible to animation cancel the other hits. All hits can apply armor destruction synergy and also count as a counter.
            - For another alternative is Dreadnaught with 1-1-1 tripod and same rune
        - name: Supernova
          level_label: Hyper Awakening Technique
          notes: |-
            **Fast Filler the Hypergravity Zone**
            - Do not full charge it, just tap it
        - name: Terra Nova / Galaxy Break
          icon: Terra Nova
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Meter Generation Skill**
            - Completely fills up Hypergravity Zone
        gems:
        - skill: Hypergravity Skill
          alt-icon: Vortex Gravity
          type: damage
          priority: 1
        - skill: Perfect Swing
          type: damage
          priority: 2
        - skill: Seismic Hammer
          type: damage
          priority: 3
        - skill: Power Strike
          type: cooldown
          priority: 1
        - skill: Seismic Hammer
          type: cooldown
          priority: 2
        - skill: Endure Pain
          type: cooldown
          priority: 3
        - skill: Perfect Swing
          type: cooldown
          priority: 4
        - skill: Earth Eater
          type: cooldown
          priority: 5
        - skill: Earth Wave
          type: cooldown
          priority: 6
        - skill: Power Shoulder
          type: cooldown
          priority: 7
        - skill: Heavy Crush
          type: cooldown
          priority: 8
        rotation_sections:
          - title: Rotation
            steps:
            - Hypergravity Zone
            - Vortex Gravity
            - Endure Pain
            - Earth Wave
            - Heavy Crush
            - Power Shoulder
            - Supernova
            - Hypergravity Zone
            - Vortex Gravity
            - Terra Nova
            - Hypergravity Zone
            - Vortex Gravity
        arkPassives:
          - name: Crit
            points: 10
            category: evolution
            tier: 1
          - name: Specialization
            points: 30
            category: evolution
            tier: 1
          - name: Limit Break
            points: 1
            category: evolution
            tier: 2
          - name: Keen Sense
            points: 2
            category: evolution
            tier: 2
          - name: Strike
            points: 2
            category: evolution
            tier: 3
          - name: Critical
            points: 1
            category: evolution
            tier: 4
          - name: Pulverize
            points: 1
            category: evolution
            tier: 4
          - name: Blunt Thorn
            points: 2
            category: evolution
            tier: 5
          - name: Gravity Shock
            points: 1
            category: enlightenment
            tier: 1
          - name: Gravity Charge
            points: 3
            category: enlightenment
            tier: 2
          - name: Gravity Training
            points: 3
            category: enlightenment
            tier: 3
          - name: Inertia Enhancement
            points: 1
            category: enlightenment
            tier: 3
          - name: Gravity Conversion
            points: 5
            category: enlightenment
            tier: 4
          - name: Gravity Acceleration
            points: 4
            category: enlightenment
            tier: 4
          - name: New Core
            points: 1
            category: enlightenment
            tier: 4
          - name: Unleashed Power
            points: 5
            category: leap
            tier: 1
          - name: Release Potential
            points: 5
            category: leap
            tier: 1
          - name: Circulation
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Aim for at least 130% Attack Speed. The sources are your base Attack Speed from the Character Details page + 8% from four points of Gravity Acceleration + 9% from a support + 5% from a feast + 3% from wine.
          - Cap Blunt Thorn if you can, otherwise use Standing Striker. The sources are your base Critical Rate from the Character Details page + 20% from relic Adrenaline + 38% from the Enlightenment tree + 7% from Master (if invested).
          - On side nodes Gravity Conversion has priority
          - Inertia Enhancement and Gravity Acceleration are interchangeable depending on what you need; Gravity Acceleration for Attack Speed, Inertia Enhancement for Critical Rate.
---
