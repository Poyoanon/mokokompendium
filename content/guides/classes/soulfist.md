---
title: Soulfist Guide
class: Martial Artist
subclass: Soulfist
class_id: 304
description: Comprehensive Guide to Robust Energy builds for Soulfist including pre-Ark Grid.
synergy:
  name: Attack Power
  description: 6.0% Attack Power granted to the party. This can be on cast or on hit depending on the skill.
  skills:
    - Flash Step
    - Bolting Crash
identity:
  name: Hype
  description: Hype meter refills overtime and as you press martial art skills, once full, Soulfist can enter "Hype" with the identity button (Z). In this mode you get additional damage, extra attack speed, extra cooldown as well as extra Energy Skills damage. Using Energy Skills or waiting out the timer will force you out of Hype, you can cancel Hype by pressing the secondary identity button (X).
builds:
  - name: Robust Energy
    engraving: Robust Energy
    build_description: 20 seconds of high damage followed by 10 seconds of downtime, excels at fights where it can abuse the downtime, also brings the strongest awakening in the game as added bonus.
    playstyle: Enter Hype, do 2 damage rotation while weaving in Martial Art skills to manage your Energy, leave Hype and recover Hype for the next cycle.
    difficulty: medium
    description: Pre-Ark Grid setup running the bomb build without the bomb core, good overall damage for melee and range with a lot of para immunity.
    engravings:
      - name: Grudge
        priority: required
      - name: Adrenaline
        priority: required
      - name: Keen Blunt Weapon
        priority: required
      - name: Mass Increase
        priority: required
      - name: Cursed Doll
        priority: recommended
      - name: Stabilized Status
        priority: optional
    priorities:
      - Make sure to spam Martial Arts Skills when Hype is recovering to shorten the window before you can enter it again.
      - Try to bomb off cooldown as much as possible unless you know that a big dps window is coming.
    skills:
      - name: Energy Blast
        level: 14
        tripods:
          - Tenacity
          - Ferocious Strike
          - Explosive Strength
        rune: Galewind
        rune_rarity: legendary
        notes: |-
          **Main Damage Skill. Your only Push Immunity in the kit**
      - name: Tempest Blast
        level: 14
        tripods:
          - Explosive Strength
          - Weak Point Detection
          - Terminator
        rune: Galewind
        rune_rarity: epic
        notes: |-
          **Main Damage Skill. Para immunity and Weakpoint lv 1.**
      - name: RasenganTM
        level: 14
        tripods:
          - ONE
          - ONE
          - TWO
        rune: Galewind
        rune_rarity: legendary
        notes: |-
          **Main Damage Skill**
          - not in game yet so give me a break.
          - KR uses it with galewind but it could be a good bleed skill as well.
      - name: Energy BladeTM
        level: 14
        tripods:
          - TWO
          - ONE
          - TWO
        rune: Galewind
        rune_rarity: epic
        notes: |-
          **Martial Art Skill**
          - not in game yet so give me a break.
          - use it to shorten hype recovery and also to replenish Energy (mana bar) while in Hype
          - Decent damage for a generator skill.
      - name: Force Orb
        level: 14
        tripods:
          - Enhanced Speed
          - Powerful Wave
          - Surging Wave
        rune: Vision
        rune_rarity: legendary
        notes: |-
          **Energy Damage, Stagger**
      - name: Yin Yang Palm
        level: 13
        tripods:
          - THREE
          - TWO
          - ONE
        rune: Vision
        rune_rarity: epic
        notes: |-
          **Martial Art Skill**
          - not in game yet so give me a break.
          - Recovers a lot of energy per use.
      - name: Flash Step
        level: 10
        tripods:
          - Excellent Mobility
          - Victory Shout
          - Tireless
        rune: Quick Recharge
        rune_rarity: legendary
        notes: |-
          **Utility Skill, Mobility, Synergy**
          - Synergy is on cast, not on hit.
      - name: Bolting Crash
        level: 4
        tripods:
          - Para
        rune: Quick Recharge
        rune_rarity: epic
        notes: |-
          **Utility, Counter, Synergy**
          - Synergy is on hit, not on cast.
          - Counter or generating energy will be the main use of this skill
      - name: Sky Slash
        level_label: Hyper Awakening Technique
        notes: |-
          **Main Damage Skill, Weak Point Destruction**
          - Weaker T skill but easier to manage its cooldown.
          - Enlightenment adds more damage and makes it faster to use.
      - name: World Decimation / Falling Sun
        icon: World Decimation
        level_label: Awakening / Hyper Awakening
        notes: |-
          **Bomba**
          - Strongest Awakening in the game.
          - Hyper Awakening can be used during Hype downtime, note that it will be a long cooldown if you do that so keep it for last bomb.
    gems:
      - skill: RasenganTM
        type: damage
        priority: 1
      - skill: Energy Blast
        type: damage
        priority: 2
      - skill: Tempest Blast
        type: damage
        priority: 3
      - skill: Energy BladeTM
        type: damage
        priority: 4
      - skill: Force Orb
        type: damage
        priority: 5
      - skill: Yin Yang Palm
        type: damage
        priority: 6
      - skill: RasenganTM
        type: cooldown
        priority: 1
      - skill: Energy Blast
        type: cooldown
        priority: 2
      - skill: Energy BladeTM
        type: cooldown
        priority: 3
      - skill: Force Orb
        type: cooldown
        priority: 4
      - skill: Yin Yang Palm
        type: cooldown
        priority: 5
    dps_distribution:
      - name: World Decimation
        dmg: 20.0
      - name: Rasengan
        dmg: 17.0
      - name: Sky Slash
        dmg: 17.0
      - name: Energy Blast
        dmg: 13
      - name: Tempest Blast
        dmg: 13.0
      - name: Force Orb
        dmg: 10.0
      - name: Energy BladeTM
        dmg: 10.0
    arkPassives:
      - name: Specialization
        points: 30
        category: evolution
        tier: 1
      - name: Crit
        points: 5
        category: evolution
        tier: 1
      - name: Swiftness
        points: 5
        category: evolution
        tier: 1
      - name: Keen Sense
        points: 2
        category: evolution
        tier: 2
      - name: Limit Break
        points: 1
        category: evolution
        tier: 2
      - name: Zealous Smite
        points: 2
        category: evolution
        tier: 3
      - name: Master
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
      - name: Robust Spirit
        points: 3
        category: enlightenment
        tier: 1
      - name: Energy Activation
        points: 1
        category: enlightenment
        tier: 2
      - name: Hype Enhancement
        points: 3
        category: enlightenment
        tier: 3
      - name: Keen Force
        points: 1
        category: enlightenment
        tier: 3
      - name: Limit Break
        points: 3
        category: enlightenment
        tier: 4
      - name: Recoil Control
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
      - name: Level Adaptation
        points: 3
        category: leap
        tier: 2
    arkPassiveTips:
      - Swift amount TBD once we have our hands on the build. Aim for 330 Swift with lv.8 Cooldown Gems for now.
      - Use Optimized Training 1 if needed to fit the rotation in.
    rotation:
      - Flash Step
      - Flash Step
      - Flash Step
      - Bolting Crash
      - Hype
      - Energy BladeTM
      - RasenganTM
      - Energy Blast
      - Force Orb
      - Tempest Blast
      - Flash Step
      - World Decimation
      - Sky Slash
      - Yin Yang
      - Flash Step
      - Flash Step
      - Flash Step
      - RasenganTM
      - Energy Blast
      - Energy BladeTM
      - Force Orb
      - Tempest Blast
    variants:
      - name: Energies
        difficulty: 1
        recommended: true
        description: RS Ark grid build focusing on powering up all the big Energy Skills
        stats: Specialization 30/30, Crit 6/30, Swiftness 4/30
        arkgrid_cores:
        arkgrid_prose: |-
          Core priority is Culminating Blast > Wavebreak Herald > Current Shot.
          Minimum: Sun 14 Moon 14 Star 14.
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Mass Increase
            priority: required
          - name: Cursed Doll
            priority: recommended
          - name: Stabilized Status
            priority: optional
        priorities:
          - Maximize damage by using Energy Blast, Tempest Blast and RasenganTM.
          - Knowning when to cancel and when to extend hype will be key to being able to recover against bad patterns.
          - The rotation is fairly flexible so make use of adequate Superarmor as you need it.
          - Make sure to spam Martial Arts Skills when Hype is recovering to shorten the window before you can enter it again.
          - Try to bomb off cooldown as much as possible unless you know that a big dps window is coming.
        skills:
          - name: Energy Blast
            level: 14
            tripods:
              - Tenacity
              - Barrage of Blows
              - Focus
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill. Your only Push Immunity in the kit**
              - <tripod>Barrage of Blows</tripod> Extends the beam duration for a lot of additional damage as it synergies with the Star Core, you can use the instant version instead if you prefer.
          - name: Tempest Blast
            level: 14
            tripods:
              - Explosive Strength
              - Weak Point Detection
              - Terminator
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Main Damage Skill. Para immunity and Weakpoint lv 1.**
          - name: RasenganTM
            level: 14
            tripods:
              - ONE
              - ONE
              - TWO
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill**
              - not in game yet so give me a break.
              - KR uses it with galewind but it could be a good bleed skill as well.
          - name: Energy BladeTM
            level: 14
            tripods:
              - TWO
              - ONE
              - TWO
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Martial Art Skill**
              - not in game yet so give me a break.
              - use it to shorten hype recovery and also to replenish Energy (mana bar) while in Hype
              - Decent damage for a generator skill.
          - name: Force Orb
            level: 14
            tripods:
              - Enhanced Speed
              - Powerful Wave
              - Surging Wave
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Energy Damage, Stagger**
          - name: Yin Yang Palm
            level: 13
            tripods:
              - THREE
              - TWO
              - ONE
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Martial Art Skill**
              - not in game yet so give me a break.
              - Recovers a lot of energy per use.
          - name: Flash Step
            level: 10
            tripods:
              - Excellent Mobility
              - Victory Shout
              - Tireless
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Utility Skill, Mobility, Synergy**
              - Synergy is on cast, not on hit.
              - don't actually know what the name of the 3rd tripod is, it helps us generate energy, might be Tireless.
          - name: Bolting Crash
            level: 4
            tripods:
              - Para
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Utility, Counter, Synergy**
              - Synergy is on hit, not on cast.
              - Counter or generating energy will be the main use of this skill
          - name: Rule the World
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, Weak Point Destruction**
              - Big hit with a long cooldown, used with certain cooldown reduce thresholds to use it once per hype or 3 times per 2 hypes.
              - Enlightenment adds more damage.
          - name: World Decimation / Falling Sun
            icon: World Decimation
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Bomba**
              - Strongest Awakening in the game.
              - Hyper Awakening can be used during Hype downtime, note that it will be a long cooldown if you do that so keep it for last bomb.
        gems:
          - skill: RasenganTM
            type: damage
            priority: 1
          - skill: Energy Blast
            type: damage
            priority: 2
          - skill: Tempest Blast
            type: damage
            priority: 3
          - skill: Energy BladeTM
            type: damage
            priority: 4
          - skill: Force Orb
            type: damage
            priority: 5
          - skill: Yin Yang Palm
            type: damage
            priority: 6
          - skill: RasenganTM
            type: cooldown
            priority: 1
          - skill: Energy Blast
            type: cooldown
            priority: 2
          - skill: Energy BladeTM
            type: cooldown
            priority: 3
          - skill: Force Orb
            type: cooldown
            priority: 4
          - skill: Yin Yang Palm
            type: cooldown
            priority: 5
        dps_distribution:
          - name: RasenganTM
            dmg: 30.0
          - name: Energy Blast
            dmg: 23.0
          - name: Tempest Blast
            dmg: 18.0
          - name: Sky Slash
            dmg: 14.0
          - name: Force Orb
            dmg: 7.0
          - name: World Decimation
            dmg: 5.0
          - name: Yin Yan Palm
            dmg: 1.5
          - name: Energy BladeTM
            dmg: 1.5
        arkPassives:
          - name: Specialization
            points: 30
            category: evolution
            tier: 1
          - name: Crit
            points: 5
            category: evolution
            tier: 1
          - name: Swiftness
            points: 5
            category: evolution
            tier: 1
          - name: Keen Sense
            points: 2
            category: evolution
            tier: 2
          - name: Limit Break
            points: 1
            category: evolution
            tier: 2
          - name: Zealous Smite
            points: 2
            category: evolution
            tier: 3
          - name: Master
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
          - name: Robust Spirit
            points: 3
            category: enlightenment
            tier: 1
          - name: Energy Activation
            points: 1
            category: enlightenment
            tier: 2
          - name: Hype Enhancement
            points: 3
            category: enlightenment
            tier: 3
          - name: Keen Force
            points: 1
            category: enlightenment
            tier: 3
          - name: Limit Break
            points: 3
            category: enlightenment
            tier: 4
          - name: Recoil Control
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
          - name: Unbreakable
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Swift amount TBD once we have our hands on the build. Aim for 170 Swift with Lv. 8 Gems.
        rotation_sections:
          - title: General Damage Rotation
            steps:
            - Flash Step
            - Flash Step
            - Flash Step
            - Bolting Crash
            - Hype
            - RasenganTM
            - Force Orb
            - Energy Blast
            - Sky Slash
            - Yin Yang Palm
            - Tempest Blast
            - Flash Step
            - Energy BladeTM
            - Bolting Crash
            - Flash Step
            - Flash Step
            - RasenganTM
            - Force Orb
            - Energy Blast
            - Tempest Blast
          - title: Bomb Rotation
            steps:
            - Flash Step
            - Flash Step
            - Flash Step
            - Bolting Crash
            - Hype
            - RasenganTM
            - Force Orb
            - Tempest Blast
            - Energy Blast
            - Flash Step
            - World Decimation
            - Sky Slash
            - Energy BladeTM
            - Yin Yang Palm
            - RasenganTM
            - Force Orb
            - Tempest Blast
            - Energy Blast
      - name: Bombies
        difficulty: 2
        description: RS Ark grid build focusing entirely on Awakening to get big burst of damage, this build is not particularily recommended but it was added for people that don't care about other variants of RS and prefers the pre-ark grid version.
        stats: Specialization 30/30, Crit 5/30, Swiftness 5/30
        arkgrid_cores: Bolstering Melody + Adamentine Body + Dance of Heavenly Flowers
        arkgrid_prose: |-
          Core priority is Bolstering Melody + Adamentine Body + Dance of Heavenly Flowers.
          Minimum: Sun 14 Moon 14 Star 14.
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Mass Increase
            priority: required
          - name: Cursed Doll
            priority: recommended
          - name: Stabilized Status
            priority: optional
        priorities:
          - This build should excel in homework content style phasing.
          - To do damage, you NEED to land bomb.
          - Make sure to spam Martial Arts Skills when Hype is recovering to shorten the window before you can enter it again.
          - Try to bomb off cooldown as much as possible unless you know that a big dps window is coming.
        skills:
          - name: Energy Blast
            level: 14
            tripods:
              - Tenacity
              - Ferocious Strike
              - Explosive Strength
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill. Your only Push Immunity in the kit**
          - name: Tempest Blast
            level: 14
            tripods:
              - Explosive Strength
              - Weak Point Detection
              - Terminator
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Main Damage Skill. Para immunity and Weakpoint lv 1.**
          - name: RasenganTM
            level: 14
            tripods:
              - ONE
              - ONE
              - TWO
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill**
              - not in game yet so give me a break.
              - KR uses it with galewind but it could be a good bleed skill as well.
          - name: Energy BladeTM
            level: 14
            tripods:
              - TWO
              - ONE
              - TWO
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Martial Art Skill**
              - not in game yet so give me a break.
              - use it to shorten hype recovery and also to replenish Energy (mana bar) while in Hype
              - Decent damage for a generator skill.
          - name: Force Orb
            level: 14
            tripods:
              - Enhanced Speed
              - Powerful Wave
              - Surging Wave
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Energy Damage, Stagger**
          - name: Yin Yang Palm
            level: 13
            tripods:
              - THREE
              - TWO
              - ONE
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Martial Art Skill**
              - not in game yet so give me a break.
              - Recovers a lot of energy per use.
          - name: Flash Step
            level: 10
            tripods:
              - Excellent Mobility
              - Victory Shout
              - Tireless
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Utility Skill, Mobility, Synergy**
              - Synergy is on cast, not on hit.
              - don't actually know what the name of the 3rd tripod is, it helps us generate energy, might be Tireless.
          - name: Bolting Crash
            level: 4
            tripods:
              - Para
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Utility, Counter, Synergy**
              - Synergy is on hit, not on cast.
              - Counter or generating energy will be the main use of this skill
          - name: Sky Slash
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, Weak Point Destruction**
              - Weaker T skill but easier to manage its cooldown.
              - Enlightenment adds more damage and makes it faster to use.
          - name: World Decimation / Falling Sun
            icon: World Decimation
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Bomba**
              - Strongest Awakening in the game.
              - Hyper Awakening can be used during Hype downtime, note that it will be a long cooldown if you do that so keep it for last bomb.
        gems:
          - skill: RasenganTM
            type: damage
            priority: 1
          - skill: Energy Blast
            type: damage
            priority: 2
          - skill: Tempest Blast
            type: damage
            priority: 3
          - skill: Force Orb
            type: damage
            priority: 4
          - skill: Energy BladeTM
            type: damage
            priority: 5
          - skill: Yin Yang Palm
            type: damage
            priority: 6
          - skill: RasenganTM
            type: cooldown
            priority: 1
          - skill: Energy Blast
            type: cooldown
            priority: 2
          - skill: Energy BladeTM
            type: cooldown
            priority: 3
          - skill: Force Orb
            type: cooldown
            priority: 4
          - skill: Yin Yang Palm
            type: cooldown
            priority: 5
        dps_distribution:
          - name: World Decimation
            dmg: 25.0
          - name: Rasengan
            dmg: 18.0
          - name: Sky Slash
            dmg: 17.0
          - name: Tempest Blast
            dmg: 13
          - name: Energy Blast
            dmg: 11
          - name: Force Orb
            dmg: 11
          - name: Yin Yang Palm
            dmg: 1.5
          - name: Energy BladeTM
            dmg: 1.5
        arkPassives:
          - name: Specialization
            points: 30
            category: evolution
            tier: 1
          - name: Crit
            points: 5
            category: evolution
            tier: 1
          - name: Swiftness
            points: 5
            category: evolution
            tier: 1
          - name: Keen Sense
            points: 2
            category: evolution
            tier: 2
          - name: Limit Break
            points: 1
            category: evolution
            tier: 2
          - name: Zealous Smite
            points: 2
            category: evolution
            tier: 3
          - name: Master
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
          - name: Robust Spirit
            points: 3
            category: enlightenment
            tier: 1
          - name: Energy Activation
            points: 1
            category: enlightenment
            tier: 2
          - name: Hype Enhancement
            points: 3
            category: enlightenment
            tier: 3
          - name: Keen Force
            points: 1
            category: enlightenment
            tier: 3
          - name: Limit Break
            points: 3
            category: enlightenment
            tier: 4
          - name: Recoil Control
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
          - name: Level Adaptation
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Swift amount TBD once we have our hands on the build. Aim for 330 Swift with lv.8 Cooldown Gems for now.
          - Use Optimized Training 1 if needed to fit the rotation in.
        rotation:
          - Flash Step
          - Flash Step
          - Flash Step
          - Bolting Crash
          - Hype
          - Energy BladeTM
          - RasenganTM
          - Energy Blast
          - Force Orb
          - Tempest Blast
          - Flash Step
          - World Decimation
          - Sky Slash
          - Yin Yang
          - Flash Step
          - Flash Step
          - Flash Step
          - RasenganTM
          - Energy Blast
          - Energy BladeTM
          - Force Orb
          - Tempest Blast
      - name: Forbies
        difficulty: 3
        description: RS Ark grid build focusing on Force Orb casts and spamming Energy Bullet to extend Hype to allow for more Energy Skills used. This build shoud technically do more damage but is also the sweatiest of the bunch with higher uptime required and lower downtime, with added jank interactions with Energy Bullet near the end of Hype to be wary of.
        stats: Specialization 30/30, Crit 5/30, Swiftness 5/30
        arkgrid_cores: Bolstering Melody + Adamentine Body + Dance of Heavenly Flowers
        arkgrid_prose: |-
          Core priority is Onslaught + Heavenshaker + Palm Burst Renewal.
          Minimum: Sun 17 Moon 17 Star 17.
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Mass Increase
            priority: required
          - name: Cursed Doll
            priority: recommended
          - name: Stabilized Status
            priority: optional
        priorities:
          - Make sure you proc one stack of Destiny before you enter Hype so that you get the refund on using your first Energy Skill in Hype.
          - Make sure to spam Martial Arts Skills when Hype is recovering to shorten the window before you can enter it again.
          - Try to bomb off cooldown as much as possible unless you know that a big dps window is coming.
        skills:
          - name: Energy Blast
            level: 14
            tripods:
              - Tenacity
              - Ferocious Strike
              - Explosive Strength
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill. Your only Push Immunity in the kit**
          - name: Tempest Blast
            level: 14
            tripods:
              - Explosive Strength
              - Weak Point Detection
              - Terminator
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Main Damage Skill. Para immunity and Weakpoint lv 1.**
          - name: RasenganTM
            level: 14
            tripods:
              - ONE
              - ONE
              - TWO
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill**
              - not in game yet so give me a break.
              - KR uses it with galewind but it could be a good bleed skill as well.
          - name: Energy Bullet
            level: 14
            tripods:
              - Enhanced Speed
              - Penetrating Palm
              - Trance
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Energy Skill but fairly low dps**
              - Main purpose is to extend hype by landing hits on the boss and to proc reduction to Energy Skills every 2 Destiny Skills.
          - name: Force Orb
            level: 14
            tripods:
              - Enhanced Speed
              - Powerful Wave
              - Surging Wave
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Energy Damage, Stagger**
          - name: Yin Yang Palm
            level: 13
            tripods:
              - THREE
              - TWO
              - ONE
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Martial Art Skill**
              - not in game yet so give me a break.
              - Recovers a lot of energy per use.
          - name: Flash Step
            level: 10
            tripods:
              - Excellent Mobility
              - Victory Shout
              - Tireless
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Utility Skill, Mobility, Synergy**
              - Synergy is on cast, not on hit.
              - don't actually know what the name of the 3rd tripod is, it helps us generate energy, might be Tireless.
          - name: Bolting Crash
            level: 4
            tripods:
              - Para
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Utility, Counter, Synergy**
              - Synergy is on hit, not on cast.
              - Counter or generating energy will be the main use of this skill
          - name: Sky Slash
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, Weak Point Destruction**
              - Weaker T skill but easier to manage its cooldown.
              - Enlightenment adds more damage and makes it faster to use.
          - name: World Decimation / Falling Sun
            icon: World Decimation
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Bomba**
              - Strongest Awakening in the game.
              - Hyper Awakening can be used during Hype downtime, note that it will be a long cooldown if you do that so keep it for last bomb.
        gems:
          - skill: Force Orb
            type: damage
            priority: 1
          - skill: RasenganTM
            type: damage
            priority: 2
          - skill: Energy Bullet
            type: damage
            priority: 3
          - skill: Tempest Blast
            type: damage
            priority: 4
          - skill: Energy Blast
            type: damage
            priority: 5
          - skill: Yin Yang Palm
            type: damage
            priority: 6
          - skill: Force Orb
            type: cooldown
            priority: 1
          - skill: RasenganTM
            type: cooldown
            priority: 2
          - skill: Energy Bullet
            type: cooldown
            priority: 3
          - skill: Energy Blast
            type: cooldown
            priority: 4
          - skill: Yin Yang Palm
            type: cooldown
            priority: 5
        dps_distribution:
          - name: Force Orb
            dmg: 25.0
          - name: RasenganTM
            dmg: 15.0
          - name: Tempest Blast
            dmg: 15.0
          - name: Sky Slash
            dmg: 15
          - name: Energy Bullet
            dmg: 12.0
          - name: Energy Blast
            dmg: 10.0
          - name: Worlds Decimation
            dmg: 5
          - name: Yin Yang Palm
            dmg: 3
        arkPassives:
          - name: Specialization
            points: 30
            category: evolution
            tier: 1
          - name: Crit
            points: 5
            category: evolution
            tier: 1
          - name: Swiftness
            points: 5
            category: evolution
            tier: 1
          - name: Keen Sense
            points: 2
            category: evolution
            tier: 2
          - name: Limit Break
            points: 1
            category: evolution
            tier: 2
          - name: Zealous Smite
            points: 2
            category: evolution
            tier: 3
          - name: Master
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
          - name: Robust Spirit
            points: 3
            category: enlightenment
            tier: 1
          - name: Energy Activation
            points: 1
            category: enlightenment
            tier: 2
          - name: Hype Enhancement
            points: 3
            category: enlightenment
            tier: 3
          - name: Keen Force
            points: 1
            category: enlightenment
            tier: 3
          - name: Limit Break
            points: 3
            category: enlightenment
            tier: 4
          - name: Recoil Control
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
          - name: Level Adaptation
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Swift amount TBD once we have our hands on the build. Aim for 230 Swift with lv.8 Cooldown Gems for now.
          - Use Optimized Training 1 if needed to fit the rotation in.
        rotation:
          - Energy Bullet
          - Flash Step
          - Flash Step
          - Flash Step
          - Hype
          - Force Orb
          - Energy Bullet
          - RasenganTM
          - Energy Bullet
          - Energy Blast
          - Tempest Blast
          - Force Orb
          - Energy Bullet
          - Flash Step
          - Sky Slash
          - Energy Bullet
          - Flash Step
          - Yin Yang Palm
          - Bolting Crash
          - Flash Step
          - Force Orb
          - Energy Bullet
          - RasenganTM
          - Tempest Blast
          - Energy Bullet
          - Energy Blast
          - Energy Bullet
          - Force Orb
---
