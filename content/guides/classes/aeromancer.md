---
title: Aeromancer Guide
class: Specialist
subclass: Aeromancer
class_id: 603
description: Complete guide to Aeromancer including Wind Fury (Umbrella) and Drizzle (Weather) builds with Ark Grid variants.
author: Noxshroom
lastUpdated: 2026-07-18
identity:
  name: Sun Shower
  description: Fill up the Sun Shower meter by using skills. Once full, press Z to activate Sun Shower. The activation has Push Immunity and gives you a Current Occurrence shield. Sun Shower also gives +12% Attack and Move Speed to self for 30s after use; allies get the Attack and Move Speed bonus only for the duration of Sun Shower. While Sun Shower is active, nearby enemies take a small amount of damage. Additionally, your space bar changes into a floaty dash that can be cancelled by pressing space bar again. Sun Shower does 0 units of stagger.
synergy:
  name: Crit Resistance Reduction
  description: Reduces foes' Crit Resistance by 10%.
  skills:
    - Tornado
    - Thick Fog
    - Spread
    - Storm's Approach
builds:
  - name: Wind Fury
    engraving: Wind Fury
    difficulty: easy
    description: Swiftness-based Umbrella skill build. Generates a Current Occurrence shield with builder skills and spends it with Reversal tripods for bonus damage. Ark Grid cores change the Builder => Spender loop significantly.
    playstyle: Keep the Crit Resistance synergy up with Tornado, then cycle Space Cleave, Thunderwind and the four Umbrella spenders off cooldown, using a builder before each spender when the core requires it.
    variants:
      - name: Wind Wielder (111)
        description: |-
          Wind Wielder makes your Spenders generate a Current Shield and then instantly consume it. This effectively means you will rarely, if ever, have a shield to soak damage. Playstyle changes from Builder => Spender to spamming highest damage skills non-stop. Just like Current Control, this build performs better in homework raids due to more condensed rotation. Main downside of build is increased Mana costs and especially Zealous Smite 2 builds may run into Mana issues.
        difficulty: 1
        arkgrid_cores: Wind Wielder + Umbrella Dance + Driving Hit
        arkgrid_prose: |-
          Wind Wielder > Umbrella Dance > Driving Hit
          - Wind Wielder needs 17p
          - Umbrella Dance needs 14p
          - Driving Hit 10p nice to have but not mandatory for playstyle
        priorities:
          - Maintain synergy and farm Conviction + Judgement proc with Tornado => Wiping Wind.
          - Unga bunga.
        engravings:
          - name: Raid Captain
            priority: required
          - name: Adrenaline
            priority: required
          - name: Grudge
            priority: required
          - name: Mass Increase
            priority: required
          - name: Cursed Doll
            priority: recommended
          - name: Hit Master
            priority: optional
        skills:
          - name: Piercing Wind
            level: 14
            tripods:
              - Giant Squall
              - Reversal
              - Lightning
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Builder, Spender, Weak Point 2, Paralysis Immunity
              - All of the row 1 tripods have the same damage increase; which one to use is a matter of personal preference.
              - <tripod>Stormblade</tripod> - The skill now dashes through enemies.
              - <tripod>Giant Squall</tripod> - The skill is now ranged.
              - <tripod>Exquisite Movement</tripod> - The skill is now a 360 slash around you.
              - **Stagger:** 150 units
          - name: Wind Gimlet
            level: 14
            tripods:
              - Reversal
              - Large Strong Wind
              - Concentrated Attack
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Builder, Spender, Paralysis Immunity
              - **Stagger:** 266 units
          - name: Rage
            level: 14
            tripods:
              - Reversal
              - Thunder
              - Space Slash
            rune: Vision
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Builder, Spender, Paralysis Immunity
              - 30% of damage comes from the first slash.
              - 70% of damage comes from the Footwork followup.
              - Tripods which specify "Footwork damage" only apply to the second hit, which is why generic "Outgoing damage" and "Crit damage" tripods are taken.
              - Moves you back very slightly when used, sometimes causing you to get hit. Cast it while looking to the side of the boss if needed.
              - **Stagger:** 172 units
          - name: Tornado Dance
            level: 14
            tripods:
              - Wide Hit
              - Reversal
              - Superspeed Spin
            rune: Focus
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Builder, Spender, Paralysis Immunity
              - <tripod>Keen Strike</tripod> - Should NOT be used because <tripod>Reversal</tripod> is always activated.
              - <tripod>Wide Hit</tripod> - Is used to make it easier to land all of the hits. <tripod>Swift Fingers</tripod> can also be used but it's mostly redundant due to increased cast speed from Driving Hit core.
              - For optimal damage, this skill should be cast point-blank when possible for all of the ticks to land.
              - **Stagger:** 143 units
          - name: Spread
            level: 10
            tripods:
              - Current Occurrence
              - Quick Pace
              - Piercing Shroud
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, (Synergy), Counter, Paralysis Immunity, Back Attack
              - Rune is flex, pick 1: Quick Recharge / Poison / Bleed
              - <tripod>Weakness Exposure</tripod> - Can be optionally used to cover for mistakes with Tornado. Downside is losing protection from Current Occurrence while countering.
              - **Stagger:** 77 units
          - name: Tornado
            level: 10
            tripods:
              - Weakness Exposure
              - Enhanced Spinning
              - Boomerang Umbrella
            rune: Conviction
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Synergy, NO IMMUNITY
              - Reduces foes' Crit Resistance by 10% for 12.0s.
              - Practically, the synergy lasts longer due to <tripod>Boomerang Umbrella</tripod> tripod; synergy is reapplied as the umbrella returns to us.
              - Cast in sync with Wiping Wind to keep Conviction + Judgement lined up.
              - **Stagger:** 80 units
          - name: Wiping Wind
            level: 10
            tripods:
              - Quick Prep
              - Destruction
              - Steam Control
            rune: Judgement
            rune_rarity: legendary
            notes: |-
              Weather Skill, Weak Point 1, Paralysis Immunity
              - Cast in sync with Tornado.
              - **Stagger:** 408 units
          - name: Face to Face
            level_label: 10 - Flex, pick 1
            tripods:
              - Quick Prep
              - Enhanced Face to Face
              - Undying Will
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Push Immunity, Status Immunity
              - Rune is flex, pick 1: Quick Recharge / Poison / Bleed
              - <tripod>Harmonious Will</tripod> can be taken for Status Immunity.
              - <tripod>Undying Will</tripod> can be taken for disgusting -75% damage taken at the cost of losing Status Immunity. This makes you disgustingly tanky: (140% max HP shield + 100% normal HP), multiplied by 4 (because of -75% damage taken) gives you 960% effective HP before accounting for support shields. Note: Getting grabbed and thrown off arena is still lethal.
              - **Stagger:** 107 units
          - name: Scorching Sun
            level_label: 10 - Flex, pick 1
            tripods:
              - Quick Prep
              - Steam Control
              - Call of Light
            rune: Focus
            rune_rarity: legendary
            notes: |-
              Weather Skill, Paralysis Immunity
              - Generic extra damage. Only cast when everything else is down.
              - **Stagger:** 280 units
          - name: Whirlpool
            level_label: 10 - Flex, pick 1
            tripods:
              - Magick Control
              - Wind Pillar
              - Steam Control
            rune: Overwhelm
            rune_rarity: legendary
            notes: |-
              Weather Skill, Weak Point 2, NO IMMUNITY
              - **Stagger:** 268 units
          - name: Spring Breeze
            level_label: 10 - Flex, pick 1
            tripods:
              - Quick Prep
              - Wide-Angle Attack
              - Northeasterly Wind
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              Weather Skill, Push Immunity
              - Rune is flex, pick 1: Quick Recharge / Poison / Bleed
              - Utility skill at the cost of personal damage.
              - Creates a lingering puddle on the floor that gives (and refreshes) team wide shields for 25% of your max HP. The shield lasts for 3 seconds, the puddle lasts for 5 seconds => maximum of 8 seconds of shields per cast.
              - Helps with survival because self shields from Current Occurrence are gone with Wind Wielder core.
              - **Stagger:** 67 units
          - name: Space Cleave
            level_label: Ark grid skill
            notes: |-
              Umbrella Skill, Main damage skill, Push Immunity
              - **Stagger:** 175 units
          - name: Thunderwind
            level_label: Hyper Awakening Technique
            notes: |-
              Converted to a Normal Skill when Trained Cleave is taken.
              Before taking Trained Cleave, holding it for only 0.25 seconds will deal full damage. Holding longer will not increase the damage.
              - **Stagger:** TODO units
          - name: Storm's Approach / Akasha's Wave
            level_label: Awakening / Hyper Awakening
            notes: |-
              This awakening deals a marginal amount of damage but has relatively little animation lock with back-loaded damage. It will apply and refresh the Crit Resistance synergy for the entire duration.
              - **Stagger:** TODO units
        gems:
          - skill: Piercing Wind
            type: damage
            priority: 2
          - skill: Wind Gimlet
            type: damage
            priority: 3
          - skill: Rage
            type: damage
            priority: 4
          - skill: Tornado Dance
            type: damage
            priority: 1
          - skill: Wiping Wind
            type: damage
            priority: 5
          - skill: Scorching Sun
            type: damage
            priority: 6
          - skill: Whirlpool
            type: damage
            priority: 6
          - skill: Face to Face
            type: damage
            priority: 6
          - skill: Spring Breeze
            type: damage
            priority: 6
          - skill: Piercing Wind
            type: cooldown
            priority: 2
          - skill: Wind Gimlet
            type: cooldown
            priority: 3
          - skill: Rage
            type: cooldown
            priority: 4
          - skill: Tornado Dance
            type: cooldown
            priority: 1
          - skill: Scorching Sun
            type: cooldown
            priority: 5
          - skill: Whirlpool
            type: cooldown
            priority: 5
          - skill: Face to Face
            type: cooldown
            priority: 5
          - skill: Spring Breeze
            type: cooldown
            priority: 5
        arkPassiveTips:
          - Cookie cutter setup. Assumes maxed Adrenaline books. Swap to Limit Break 2 and Keen Sense 1 if you don't have books.
          - Can and should be customized depending on whether you have Crit Rate% on bracelet or other source of Crit Rate. Goal is to reach ~95% Crit Rate with as much Evolution damage and Cooldown Reduction as possible.
          - Unlimited Magick can be taken to alleviate mana issues. Get extra Crit Rate from Keen Sense and Master nodes instead.
        arkPassives:
          - name: Critical
            points: 12
            category: evolution
            tier: 1
          - name: Swiftness
            points: 28
            category: evolution
            tier: 1
          - name: Limit Break
            points: 3
            category: evolution
            tier: 2
          - name: Zealous Smite
            points: 2
            category: evolution
            tier: 3
          - name: Supersonic Breakthrough
            points: 2
            category: evolution
            tier: 5
          - name: Wind Fury
            points: 1
            category: enlightenment
            tier: 1
          - name: Ventilation
            points: 3
            category: enlightenment
            tier: 2
          - name: Swiftness
            points: 3
            category: enlightenment
            tier: 3
          - name: Space Cleave
            points: 3
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
          - name: Path of the Wind
            points: 2
            category: enlightenment
            tier: 4
          - name: Trained Cleave
            points: 3
            category: leap
            tier: 2
          - name: Critical
            points: 1
            category: evolution
            tier: 4
          - name: Pulverize
            points: 1
            category: evolution
            tier: 4
        dps_distribution:
          - name: Space Cleave
            dmg: 18
          - name: Tornado Dance
            dmg: 16
          - name: Rage
            dmg: 16
          - name: Thunderwind
            dmg: 12
          - name: Piercing Wind
            dmg: 12
          - name: Wind Gimlet
            dmg: 12
          - name: Sun Shower
            dmg: 3
          - name: Face to Face
            dmg: 3
          - name: Wiping Wind
            dmg: 3
        rotation_sections:
          - title: Synergy upkeep
            steps:
              - Tornado
              - Wiping Wind
          - title: Do damage
            steps:
              - Space Cleave
              - Thunderwind
              - Tornado Dance
              - Rage
              - Wind Gimlet
              - Piercing Wind
              - Fillers
              - ???
              - Profit
      - name: Current Control (221)
        description: |-
          Current Control cores are focused on boosting your damage while you have a shield. Activating Destiny effect increases your Mana regeneration. Reversal tripods are swapped to generic damage because Reversal tripod spends the shield before damage boost would apply.
          Downside of the core is needing to maintain your shield which reduces the opportunities to push immune certain patterns without support care.
        difficulty: 1
        arkgrid_cores: Current Control + Upward Current + Driving Hit
        arkgrid_prose: |-
          Current Control > Upward Current > Driving Hit
          - Current Control needs 14p
          - Upward Current needs 14p
          - Driving Hit 10p nice to have but not mandatory for playstyle
        priorities:
          - Maintain destiny buff by using Sun Shower
          - Maintain synergy and farm Conviction + Judgement proc with Tornado => Wiping Wind.
          - Refresh self shield with Spread if needed.
          - Use Thunderwind and Space Cleave off cooldown.
          - Use rest of skills off cooldown.
        engravings:
          - name: Raid Captain
            priority: required
          - name: Adrenaline
            priority: required
          - name: Grudge
            priority: required
          - name: Mass Increase
            priority: required
          - name: Cursed Doll
            priority: recommended
          - name: Barricade
            priority: optional
          - name: Hit Master
            priority: optional
        skills:
          - name: Piercing Wind
            level: 14
            tripods:
              - Giant Squall
              - Cutting
              - Lightning
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Main damage skill, Weak Point 2, Paralysis Immunity
              - <tripod>Reversal</tripod> tripod is replaced with <tripod>Cutting</tripod> at no damage loss thanks to Current Control core.
              - All of the row 1 tripods have the same damage increase; which one to use is a matter of personal preference.
              - <tripod>Stormblade</tripod> - The skill now dashes through enemies.
              - <tripod>Giant Squall</tripod> - The skill is now ranged.
              - <tripod>Exquisite Movement</tripod> - The skill is now a 360 slash around you.
              - **Stagger:** 150 units
          - name: Wind Gimlet
            level: 14
            tripods:
              - Piercing
              - Large Strong Wind
              - Concentrated Attack
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Main damage skill, Paralysis Immunity
              - <tripod>Reversal</tripod> tripod is replaced with <tripod>Piercing</tripod> which is a few percentage damage loss even with Current Control core. This damage loss is covered by the damage gain on Thunderwind and Space Cleave.
              - **Stagger:** 266 units
          - name: Rage
            level: 14
            tripods:
              - Swift Fingers
              - Thunder
              - Space Slash
            rune: Vision
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Main/Secondary damage skill, Paralysis Immunity
              - 30% of damage comes from the first slash.
              - 70% of damage comes from the Footwork followup.
              - Tripods which specify "Footwork damage" only apply to the second hit, which is why generic "Outgoing damage" and "Crit damage" tripods are taken.
              - Moves you back very slightly when used, sometimes causing you to get hit. Cast it while looking to the side of the boss if needed.
              - **Stagger:** 172 units
          - name: Tornado Dance
            level: 14
            tripods:
              - Wide Hit
              - Keen Strike
              - Superspeed Spin
            rune: Poison
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Main/Secondary damage skill, Paralysis Immunity
              - <tripod>Reversal</tripod> is replaced with <tripod>Keen Strike</tripod> which is a damage gain with Current Control core.
              - <tripod>Wide Hit</tripod> - Is used to make it easier to land all of the hits. <tripod>Swift Fingers</tripod> can also be used but it's mostly redundant due to increased cast speed from Driving Hit core.
              - For optimal damage, this skill should be cast point-blank when possible for all of the ticks to land.
              - **Stagger:** 143 units
          - name: Tornado
            level: 10
            tripods:
              - Weakness Exposure
              - Enhanced Spinning
              - Boomerang Umbrella
            rune: Conviction
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Synergy, NO IMMUNITY
              - Reduces foes' Crit Resistance by 10% for 12.0s.
              - Practically, the synergy lasts longer due to <tripod>Boomerang Umbrella</tripod> tripod; synergy is reapplied as the umbrella returns to us.
              - Cast in sync with your chosen Weather skill to keep Conviction + Judgement lined up.
              - **Stagger:** 80 units
          - name: Wiping Wind
            level: 10
            tripods:
              - Quick Prep
              - Destruction
              - Steam Control
            rune: Judgement
            rune_rarity: legendary
            notes: |-
              Weather Skill, Weak Point 1, Paralysis Immunity
              - Lines up with Synergy expiration extremely well when cast in sync with Tornado; the Synergy will be close to expiring when Wiping Wind comes back up.
              - **Stagger:** 408 units
          - name: Spread
            level: 10
            tripods:
              - Current Occurrence
              - Quick Pace
              - Piercing Shroud
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Counter, Builder, Paralysis Immunity, Back Attack
              - Main builder for Current Control. Use to refresh the shield if lost or every 8 seconds before the shield expires.
              - **Stagger:** 77 units
          - name: Scorching Sun
            level_label: 10 - Flex, pick 1
            tripods:
              - Quick Prep
              - Steam Control
              - Call of Light
            rune: Vision
            rune_rarity: epic
            notes: |-
              Weather Skill, Paralysis Immunity
              - Relatively smooth to use and stylish with decent stagger.
              - Damage is back loaded and uses a lot of mana.
              - **Stagger:** 280 units
          - name: Face to Face
            level_label: 10 - Flex, pick 1
            tripods:
              - Quick Prep
              - Enhanced Face to Face
              - Undying Will
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Push Immunity
              - <tripod>Harmonious Will</tripod> can be taken for Status Immunity.
              - <tripod>Undying Will</tripod> can be taken for disgusting -75% damage taken at the cost of losing Status Immunity. This makes you disgustingly tanky: (140% max HP shield + 100% normal HP), multiplied by 4 (because of -75% damage taken) gives you 960% effective HP before accounting for support shields. Note: Getting grabbed and thrown off arena is still lethal.
              - **Stagger:** 107 units
          - name: Spring Breeze
            level_label: 10 - Flex, pick 1
            tripods:
              - Quick Prep
              - Wide-Angle Attack
              - Northeasterly Wind
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              Weather Skill
              - Utility skill at the cost of personal damage.
              - Creates a lingering puddle on the floor that gives (and refreshes) team wide shields for 25% of your max HP. The shield lasts for 3 seconds, the puddle lasts for 5 seconds => maximum of 8 seconds of shields per cast.
              - Helps in maintaining your own Current Occurrence shield when taking multiple small hits or damage over time.
              - <tripod>Tenacity</tripod> can be optionally taken for push immunity.
              - **Stagger:** 67 units
          - name: Whirlpool
            level_label: 10 - Flex, pick 1
            tripods:
              - Magick Control
              - Wind Pillar
              - Steam Control
            rune: Overwhelm
            rune_rarity: legendary
            notes: |-
              Weather Skill, Weak Point 2, NO IMMUNITY
              - Extra stagger option.
              - <tripod>Concussion</tripod> - Can be optionally taken for extra stagger at the cost of higher mana cost.
              - **Stagger:** 268 units (before tripod)
          - name: Space Cleave
            level_label: Ark grid skill
            notes: |-
              Umbrella Skill, Main damage skill, Push Immunity
              - **Stagger:** 175 units
          - name: Thunderwind
            level_label: Hyper Awakening Technique
            notes: |-
              Converted to a Normal Skill when Trained Cleave is taken.
              Before taking Trained Cleave, holding it for only 0.25 seconds will deal full damage. Holding longer will not increase the damage.
              - **Stagger:** TODO units
          - name: Storm's Approach / Akasha's Wave
            level_label: Awakening / Hyper Awakening
            notes: |-
              This awakening deals a marginal amount of damage but has relatively little animation lock with back-loaded damage. It will apply and refresh the Crit Resistance synergy for the entire duration.
              - **Stagger:** TODO units
        gems:
          - skill: Piercing Wind
            type: damage
            priority: 2
          - skill: Wind Gimlet
            type: damage
            priority: 3
          - skill: Rage
            type: damage
            priority: 4
          - skill: Tornado Dance
            type: damage
            priority: 1
          - skill: Wiping Wind
            type: damage
            priority: 5
          - skill: Scorching Sun
            type: damage
            priority: 6
          - skill: Whirlpool
            type: damage
            priority: 6
          - skill: Face to Face
            type: damage
            priority: 6
          - skill: Spring Breeze
            type: damage
            priority: 6
          - skill: Piercing Wind
            type: cooldown
            priority: 2
          - skill: Wind Gimlet
            type: cooldown
            priority: 3
          - skill: Rage
            type: cooldown
            priority: 4
          - skill: Tornado Dance
            type: cooldown
            priority: 1
          - skill: Scorching Sun
            type: cooldown
            priority: 5
          - skill: Whirlpool
            type: cooldown
            priority: 5
          - skill: Face to Face
            type: cooldown
            priority: 5
          - skill: Spring Breeze
            type: cooldown
            priority: 5
        arkPassiveTips:
          - Cookie cutter setup. Assumes maxed Adrenaline books. Swap to Limit Break 2 and Keen Sense 1 if you don't have books.
          - Can and should be customized depending on whether you have Crit Rate% on bracelet or other source of Crit Rate. Goal is to reach ~95% Crit Rate with as much Evolution damage and Cooldown Reduction as possible.
          - Unlimited Magick can be taken to alleviate mana issues. Get extra Crit Rate from Keen Sense and Master nodes instead.
        arkPassives:
          - name: Critical
            points: 12
            category: evolution
            tier: 1
          - name: Swiftness
            points: 28
            category: evolution
            tier: 1
          - name: Limit Break
            points: 3
            category: evolution
            tier: 2
          - name: Zealous Smite
            points: 2
            category: evolution
            tier: 3
          - name: Supersonic Breakthrough
            points: 2
            category: evolution
            tier: 5
          - name: Wind Fury
            points: 1
            category: enlightenment
            tier: 1
          - name: Ventilation
            points: 3
            category: enlightenment
            tier: 2
          - name: Swiftness
            points: 3
            category: enlightenment
            tier: 3
          - name: Space Cleave
            points: 3
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
          - name: Path of the Wind
            points: 2
            category: enlightenment
            tier: 4
          - name: Trained Cleave
            points: 3
            category: leap
            tier: 2
          - name: Critical
            points: 1
            category: evolution
            tier: 4
          - name: Pulverize
            points: 1
            category: evolution
            tier: 4
        dps_distribution:
          - name: Space Cleave
            dmg: 19
          - name: Thunderwind
            dmg: 12
          - name: Tornado Dance
            dmg: 12
          - name: Rage
            dmg: 12
          - name: Piercing Wind
            dmg: 12
          - name: Wind Gimlet
            dmg: 12
          - name: Face to Face
            dmg: 4
          - name: Sun Shower
            dmg: 3
          - name: Wiping Wind
            dmg: 3
        rotation_sections:
          - title: Prio 1 - Maintain destiny buff
            steps:
              - Sun Shower
          - title: Prio 2 - Maintain synergy
            steps:
              - Tornado
              - Wiping Wind
          - title: Prio 3 - Off cooldown skills
            steps:
              - Space Cleave
              - Thunderwind
          - title: Prio 4 - Rest of skills
            steps:
              - Tornado Dance
              - Rage
              - Wind Gimlet
              - Piercing Wind
              - Filler skill of choice
      - name: Wind Blade (333)
        description: |-
          Makes Piercing wind the main source of damage while also making it push immune. Every umbrella skill used reduces Piercing Wind cooldown. The build utilizes CDR gems and Quick Recharge runes on Spread + Downward Strike to spam Piercing Wind as much as possible.
          Main difference to other ark grid cores is needing to setup builder before being able to do damage.
          In homework context this leads to poorer performance compared to other cores.
        difficulty: 1
        arkgrid_cores: Wind Blade + Swift + Gale Slash
        arkgrid_prose: |-
          Wind Blade > Swift > Gale Slash
          - Wind Blade needs 14p
          - Swift needs 14p
          - Gale Slash increases damage but optional for playstyle
        priorities:
          - Maintain synergy and farm Conviction + Judgement proc with Tornado => Wiping Wind.
          - Use Thunderwind and Space Cleave off cooldown.
          - Builder => Spender until everything on cooldown.
          - Farm cooldown reduction from Swift core by spamming Spread and Downward Strike.
        engravings:
          - name: Raid Captain
            priority: required
          - name: Adrenaline
            priority: required
          - name: Grudge
            priority: required
          - name: Mass Increase
            priority: required
          - name: Cursed Doll
            priority: recommended
          - name: Hit Master
            priority: optional
        skills:
          - name: Piercing Wind
            level: 14
            tripods:
              - Giant Squall
              - Reversal
              - Lightning
            rune: Galewind
            rune_rarity: epic
            notes: |-
              Umbrella Skill, Main damage skill, Spender, Weak Point 2, Paralysis Immunity (Push with Wind Blade)
              - One of the two most important Spender skills.
              - All of the row 1 tripods have the same damage increase; which one to use is a matter of personal preference.
              - <tripod>Stormblade</tripod> - The skill now dashes through enemies.
              - <tripod>Giant Squall</tripod> - The skill is now ranged.
              - <tripod>Exquisite Movement</tripod> - The skill is now a 360 slash around you.
              - **Stagger:** 150 units
          - name: Wind Gimlet
            level: 14
            tripods:
              - Reversal
              - Large Strong Wind
              - Concentrated Attack
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Main damage skill, Spender, Paralysis Immunity
              - One of the two most important Spender skills.
              - **Stagger:** 266 units
          - name: Rage
            level: 14
            tripods:
              - Reversal
              - Thunder
              - Space Slash
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Secondary damage skill, Spender, NO IMMUNITY
              - Next most important Spender skill after Piercing Wind and Wind Gimlet.
              - 30% of damage comes from the first slash.
              - 70% of damage comes from the Footwork followup.
              - Tripods which specify "Footwork damage" only apply to the second hit, which is why generic "Outgoing damage" and "Crit damage" tripods are taken.
              - Moves you back very slightly when used, sometimes causing you to get hit. Cast it while looking to the side of the boss if needed.
              - **Stagger:** 172 units
          - name: Tornado Dance
            level: 14
            tripods:
              - Wide Hit
              - Reversal
              - Superspeed Spin
            rune: Focus
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Secondary damage skill, Spender, Paralysis Immunity
              - Least important Spender skill.
              - <tripod>Swift Fingers</tripod> - Can be optionally used to make skill marginally faster but easier to miss.
              - <tripod>Keen Strike</tripod> - Can be optionally used to make this non-spender at the cost of <1% damage.
              - For optimal damage, this skill should be cast point-blank when possible for all of the ticks to land.
              - **Stagger:** 143 units
          - name: Tornado
            level: 10
            tripods:
              - Weakness Exposure
              - Enhanced Spinning
              - Boomerang Umbrella
            rune: Conviction
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Synergy, NO IMMUNITY
              - Reduces foes' Crit Resistance by 10% for 12.0s.
              - Practically, the synergy lasts longer due to <tripod>Boomerang Umbrella</tripod> tripod; synergy is reapplied as the umbrella returns to us.
              - Cast in sync with your chosen Weather skill to keep Conviction + Judgement lined up.
              - **Stagger:** 80 units
          - name: Spread
            level: 10
            tripods:
              - Current Occurrence
              - Quick Pace
              - Piercing Shroud
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              Umbrella Skill, Counter, Builder, Paralysis Immunity, Back Attack
              - One of the three builders for Wind Fury.
              - Rune is flex, pick 1: Quick Recharge / Poison / Bleed
              - **Stagger:** 77 units
          - name: Downward Strike
            level: 7
            tripods:
              - Current Occurrence
              - Thundercrack
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              Umbrella Skill, Builder, Weak Point 1, Paralysis Immunity, Back Attack
              - One of the three builders for Wind Fury.
              - <tripod>Sturdy Umbrella</tripod> - Can be optionally taken for faster animation at loss of mobility. Makes the skill Combo skill, first part gives Current Occurrence shield while second part does destruction. Only cast the first part for faster animation.
              - Rune is flex, pick 1: Quick Recharge / Poison / Bleed
              - **Stagger:** 64 units
              - **Sturdy Umbrella**: First hit 54. Both hits 64.
          - name: Wiping Wind
            level_label: 14 - Flex, pick 1
            tripods:
              - Quick Prep
              - Destruction
              - Steam Control
            rune: Judgement
            rune_rarity: legendary
            notes: |-
              Weather Skill, Weak Point 1, Paralysis Immunity
              - Recommended Weather skill.
              - Marginally more damage than Whirlpool.
              - Lines up with Synergy expiration extremely well when cast in sync with Tornado; the Synergy will be close to expiring when Wiping Wind comes back up.
              - **Stagger:** 408 units
          - name: Whirlpool
            level_label: 14 - Flex, pick 1
            tripods:
              - Magick Control
              - Wind Pillar
              - Steam Control
            rune: Judgement
            rune_rarity: legendary
            notes: |-
              Weather Skill, Weak Point 2, NO IMMUNITY
              - Uses the least amount of mana from Weather Skills.
              - <tripod>Concussion</tripod> - Can be optionally taken for extra stagger at the cost of higher mana cost.
              - **Stagger:** 268 units
          - name: Scorching Sun
            level_label: 14 - Flex, pick 1
            tripods:
              - Quick Prep
              - Steam Control
              - Call of Light
            rune: Judgement
            rune_rarity: legendary
            notes: |-
              Weather Skill, Paralysis Immunity
              - Chosen mostly for style points, not for the damage or mana used.
              - The skill is back loaded, making it the most unreliable option for Weather Skill.
              - **Stagger:** 280 units
          - name: Space Cleave
            level_label: Ark grid skill
            notes: |-
              Umbrella Skill, Main damage skill, Push Immunity
              - **Stagger:** 175 units
          - name: Thunderwind
            level_label: Hyper Awakening Technique
            notes: |-
              You do not need to use a builder skill before T Skill, as it does not have a Reversal tripod.
              Converted to a Normal Skill when Trained Cleave is taken.
              Before taking Trained Cleave, holding it for only 0.25 seconds will deal full damage. Holding longer will not increase the damage.
              - **Stagger:** TODO units
          - name: Storm's Approach / Akasha's Wave
            level_label: Awakening / Hyper Awakening
            notes: |-
              This awakening deals a marginal amount of damage but has relatively little animation lock with back-loaded damage. It will apply and refresh the Crit Resistance synergy for the entire duration.
              - **Stagger:** TODO units
        gems:
          - skill: Piercing Wind
            type: damage
            priority: 1
          - skill: Wind Gimlet
            type: damage
            priority: 2
          - skill: Rage
            type: damage
            priority: 3
          - skill: Tornado Dance
            type: damage
            priority: 4
          - skill: Wiping Wind
            type: damage
            priority: 5
          - skill: Piercing Wind
            type: cooldown
            priority: 1
          - skill: Wind Gimlet
            type: cooldown
            priority: 2
          - skill: Rage
            type: cooldown
            priority: 3
          - skill: Tornado Dance
            type: cooldown
            priority: 4
          - skill: Spread
            type: cooldown
            priority: 5
          - skill: Downward Strike
            type: cooldown
            priority: 6
        arkPassiveTips:
          - Cookie cutter setup. Assumes maxed Adrenaline books. Swap to Limit Break 2 and Keen Sense 1 if you don't have books.
          - Can and should be customized depending on whether you have Crit Rate% on bracelet or other source of Crit Rate. Goal is to reach ~95% Crit Rate with as much Evolution damage and Cooldown Reduction as possible.
          - Unlimited Magick can be taken to alleviate mana issues. Get extra Crit Rate from Keen Sense and Master nodes instead.
        arkPassives:
          - name: Critical
            points: 12
            category: evolution
            tier: 1
          - name: Swiftness
            points: 28
            category: evolution
            tier: 1
          - name: Limit Break
            points: 3
            category: evolution
            tier: 2
          - name: Zealous Smite
            points: 2
            category: evolution
            tier: 3
          - name: Supersonic Breakthrough
            points: 2
            category: evolution
            tier: 5
          - name: Wind Fury
            points: 1
            category: enlightenment
            tier: 1
          - name: Ventilation
            points: 3
            category: enlightenment
            tier: 2
          - name: Swiftness
            points: 3
            category: enlightenment
            tier: 3
          - name: Space Cleave
            points: 3
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
          - name: Path of the Wind
            points: 2
            category: enlightenment
            tier: 4
          - name: Trained Cleave
            points: 3
            category: leap
            tier: 2
          - name: Critical
            points: 1
            category: evolution
            tier: 4
          - name: Pulverize
            points: 1
            category: evolution
            tier: 4
        dps_distribution:
          - name: Piercing Wind
            dmg: 33
          - name: Space Cleave
            dmg: 16
          - name: Thunderwind
            dmg: 11
          - name: Wind Gimlet
            dmg: 11
          - name: Rage
            dmg: 10
          - name: Tornado Dance
            dmg: 6
          - name: Sun Shower
            dmg: 3
          - name: Wiping Wind
            dmg: 3
        rotation_sections:
          - title: Prio 1 - Synergy upkeep and Conviction + Judgement fishing
            steps:
              - Tornado
              - Wiping Wind
          - title: Prio 2 - Off cooldown skills
            steps:
              - Space Cleave
              - Thunderwind
          - title: Prio 3 - One shield generator before spender
            steps:
              - Spread
              - Downward Strike
              - Sun Shower
          - title: Prio 4 - One spender, generate shield before each
            steps:
              - Piercing Wind
              - Wind Gimlet
              - Rage
              - Tornado Dance
          - title: Filler - Reduce Piercing Wind cooldown and fish Quick Recharge
            steps:
              - Spread
              - Downward Strike
---
