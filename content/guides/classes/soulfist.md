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
  description: Hype meter refills overtime and as you press martial art skills, once full, Soulfist can enter "Hype" with the identity button (Z). In this mode you get additional damage, extra attack speed, extra cooldown as well as extra Force Skills damage. Using Force Skills or waiting out the timer will force you out of Hype, you can cancel Hype by pressing the secondary identity button (X).
builds:
  - name: Robust Energy
    engraving: Robust Energy
    description: 20 seconds of high damage followed by 10 seconds of downtime, excels at fights where it can abuse the downtime, also brings the strongest awakening in the game as added bonus.
    playstyle: Enter Hype, do 2 damage rotation while weaving in Martial Art skills to manage your Energy bar, leave Hype and recover Hype for the next cycle.
    difficulty: medium
    preArkGrid:
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
        - Make sure to spam Flash Step and Bolting Crash when Hype is recovering to shorten the window before you can enter it again.
        - Try to bomb off cooldown as much as possible unless you know that a big dps window is coming.
        - Do not waste energy while in Hype.
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
            **Force Skill**
            - Push Immunity, only source of it in the kit.
            - Other tripods combo such as 331 and 322 are more damage but are 3x to 4x as long to cast, use at your own risk.
        - name: Tempest Blast
          level: 14
          tripods:
            - Explosive Strength
            - Weak Point Detection
            - Inner Lightning
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Force Skill*
            - Main Damage
            - Lv. 2 Weakpoint
            - Decent Stagger
        - name: Heavenly Spiral Palm
          level: 14
          tripods:
            - Efficient Striker
            - Harsh Training
            - Chain
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Force Skill**
            - Best stagger skill in your kit.
            - Hardest hitter in your kit.
            - Mid range.
            - Weakpoint Lv. 1
        - name: Skysplitting Fist
          level: 13
          tripods:
            - Firepower Control
            - Aircleave
            - Weak Point Detection
          rune: Vision
          rune_rarity: epic
          notes: |-
            **Martial Art Skill**
            - Recovers a lot of energy per use.
            - Decently strong for being a martial art skill.
            - Lightning Fast can be used as 3rd tripod instead, the cast time goes from 0.8s to 0.7s, with epic vision, for a small damage decrease. 
        - name: Force Orb
          level: 14
          tripods:
            - Efficient Striker
            - Powerful Wave
            - Scattering Wave
          rune: Bleed
          rune_rarity: legendary
          notes: |-
            **Force Skill**
            - Lowest priority as far as Force Skills go.
            - No para immunity on this skill, careful when you use it.
        - name: Yin Yang Palm
          level: 13
          tripods:
            - Swift Fingers
            - Reverse Polarities
            - Energy Training
          rune: Vision
          rune_rarity: epic
          notes: |-
            **Martial Art Skill**
            - Recovers a lot of energy per use.
        - name: Flash Step
          level: 10
          tripods:
            - Excellent Mobility
            - Fighting Spirit Enhancement
            - Tireless
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Utility Skill, Mobility, Synergy**
            - Synergy is on cast, not on hit.
            - Same cooldown no matter how many charges you use.
            - Can be used with Galewind rune instead.
            - The Energy regen is with Tireless is per cast, not per hit.
        - name: Bolting Crash
          level: 4
          tripods:
            - Brutal Honesty
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Utility, Counter**
            - You can drop Flash Step to level 7 if you prefer having more tripods on this skill.
            - Synergy is on hit, not on cast.
            - Counter or generating energy will be the main use of this skill.
            - can be used with Quick Recharge Rune instead.
        - name: Sky Slash
          level_label: Hyper Awakening Technique
          notes: |-
            **Force Skill**
            - Short cooldown, aim for 1 cast per hype
            - The Leap node Final Strike makes it refund the hype that it spends while adding damage.
        - name: World Decimation / Falling Sun
          icon: World Decimation
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Bomba**
            - Strongest Awakening in the game.
            - Hyper Awakening can be used during Hype downtime, note that it will be a long cooldown if you do that so keep it for last bomb.
      gems:
        - skill: Heavenly Spiral Palm
          type: damage
          priority: 1
        - skill: Energy Blast
          type: damage
          priority: 2
        - skill: Tempest Blast
          type: damage
          priority: 3
        - skill: Skysplitting Fist
          type: damage
          priority: 4
        - skill: Force Orb
          type: damage
          priority: 5
        - skill: Yin Yang Palm
          type: damage
          priority: 6
        - skill: Heavenly Spiral Palm
          type: cooldown
          priority: 1
        - skill: Energy Blast
          type: cooldown
          priority: 2
        - skill: Skysplitting Fist
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
        - name: Skysplitting Fist
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
        - name: Final Strike
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
        - Skysplitting Fist
        - Heavenly Spiral Palm
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
        - Flash Step
       - Heavenly Spiral Palm
        - Energy Blast
        - Skysplitting Fist
        - Force Orb
        - Tempest Blast
    variants:
      - name: Blasties WIP
        difficulty: 1
        recommended: true
        description: RS Ark grid build focusing on powering up all the big Force Skills
        stats: Specialization 30/30, Crit 6/30, Swiftness 4/30
        arkgrid_cores: Piercing Spiral + Heavenly Squall + Brilliant Rush
        arkgrid_prose: |-
          Core priority is Piercing Spiral > Heavenly Squall > Brilliant Rush
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
          - Maximize damage by using Energy Blast, Tempest Blast and Heavenly Spiral Palm.
          - Knowning when to cancel and when to extend hype will be key to being able to recover against bad patterns.
          - The rotation is fairly flexible so make use of adequate Superarmor as you need it.
          - Make sure to spam Martial Arts Skills when Hype is recovering to shorten the window before you can enter it again.
          - Try to bomb off cooldown as much as possible unless you know that a big dps window is coming.
        skills:
          - name: Energy Blast
            level: 14
            tripods:
              - Tenacity
              - Gravitational Blow
              - Focus
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Force Skill, Main Damage Skill.**
              - Gravitational Blow extends the beam duration for a lot of additional damage as it synergies with the Star Core.
              - Your only Push Immunity in the kit.
          - name: Tempest Blast
            level: 14
            tripods:
              - Explosive Strength
              - Weak Point Detection
              - Inner Lightning
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Force Skill*
              - Main Damage
              - Lv. 2 Weakpoint
              - Decent Stagger
          - name: Heavenly Spiral Palm
            level: 14
            tripods:
              - Efficient Striker
              - Harsh Training
              - Chain
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Force Skill**
              - Best stagger skill in your kit.
              - Hardest hitter in your kit.
              - Mid range.
              - Weakpoint Lv. 1
          - name: Skysplitting Fist
            level: 13
            tripods:
              - Firepower Control
              - Aircleave
              - Weak Point Detection
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Martial Art Skill**
              - Recovers a lot of energy per use.
              - Decently strong for being a martial art skill.
              - Lightning Fast can be used as 3rd tripod instead, the cast time goes from 0.8s to 0.7s, with epic vision, for a small damage decrease. 
          - name: Force Orb
            level: 14
            tripods:
              - Efficient Striker
              - Powerful Wave
              - Scattering Wave
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Force Skill**
              - Lowest priority as far as Force Skills go.
              - No para immunity on this skill, careful when you use it.
          - name: Yin Yang Palm
            level: 13
            tripods:
              - Swift Fingers
              - Reverse Polarities
              - Energy Training
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Martial Art Skill**
              - Recovers a lot of energy per use.
          - name: Flash Step
            level: 10
            tripods:
              - Excellent Mobility
              - Fighting Spirit Enhancement
              - Tireless
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Utility Skill, Mobility, Synergy**
              - Synergy is on cast, not on hit.
              - Same cooldown no matter how many charges you use.
              - Can be used with Galewind rune instead.
              - The Energy regen is with Tireless is per cast, not per hit.
          - name: Bolting Crash
            level: 4
            tripods:
              - Brutal Honesty
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Utility, Counter**
              - You can drop Flash Step to level 7 if you prefer having more tripods on this skill.
              - Synergy is on hit, not on cast.
              - Counter or generating energy will be the main use of this skill.
              - can be used with Quick Recharge Rune instead.
          - name: Sky Slash
            level_label: Hyper Awakening Technique
            notes: |-
              **Force Skill**
              - Short cooldown, aim for 1 cast per hype
              - The Leap node Final Strike makes it refund the hype that it spends while adding damage.
          - name: World Decimation / Falling Sun
            icon: World Decimation
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Bomba**
              - Strongest Awakening in the game.
              - Hyper Awakening can be used during Hype downtime, note that it will be a long cooldown if you do that so keep it for last bomb.
        gems:
          - skill: Heavenly Spiral Palm
            type: damage
            priority: 1
          - skill: Energy Blast
            type: damage
            priority: 2
          - skill: Tempest Blast
            type: damage
            priority: 3
          - skill: Skysplitting Fist
            type: damage
            priority: 4
          - skill: Force Orb
            type: damage
            priority: 5
          - skill: Yin Yang Palm
            type: damage
            priority: 6
          - skill: Heavenly Spiral Palm
            type: cooldown
            priority: 1
          - skill: Energy Blast
            type: cooldown
            priority: 2
          - skill: Skysplitting Fist
            type: cooldown
            priority: 3
          - skill: Force Orb
            type: cooldown
            priority: 4
          - skill: Yin Yang Palm
            type: cooldown
            priority: 5
        dps_distribution:
          - name: Heavenly Spiral Palm
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
          - name: Skysplitting Fist
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
          - name: Final Strike
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
            - Heavenly Spiral Palm
            - Force Orb
            - Energy Blast
            - Sky Slash
            - Yin Yang Palm
            - Tempest Blast
            - Flash Step
            - Skysplitting Fist
            - Bolting Crash
            - Flash Step
            - Flash Step
            - Heavenly Spiral Palm
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
            - Heavenly Spiral Palm
            - Force Orb
            - Tempest Blast
            - Energy Blast
            - Flash Step
            - World Decimation
            - Sky Slash
            - Skysplitting Fist
            - Yin Yang Palm
            - Heavenly Spiral Palm
            - Force Orb
            - Tempest Blast
            - Energy Blast
      - name: Bombies WIP
        difficulty: 2
        description: RS Ark grid build focusing entirely on Awakening to get big burst of damage, this build is not particularily recommended but it was added for people that don't care about other variants of RS and prefers the pre-ark grid version.
        stats: Specialization 30/30, Crit 5/30, Swiftness 5/30
        arkgrid_cores: Sky Shattering Strike + Adamentine Body + Dance of Heavenly Flowers
        arkgrid_prose: |-
          Core priority is Sky Shattering Strike > Adamentine Body > Dance of Heavenly Flowers.
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
              **Force Skill**
              - Push Immunity, only source of it in the kit.
              - Other tripods combo such as 331 and 322 are more damage but are 3x to 4x as long to cast, use at your own risk.
          - name: Tempest Blast
            level: 14
            tripods:
              - Explosive Strength
              - Weak Point Detection
              - Inner Lightning
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Force Skill*
              - Main Damage
              - Lv. 2 Weakpoint
              - Decent Stagger
          - name: Heavenly Spiral Palm
            level: 14
            tripods:
              - Efficient Striker
              - Harsh Training
              - Chain
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Force Skill**
              - Best stagger skill in your kit.
              - Hardest hitter in your kit.
              - Mid range.
              - Weakpoint Lv. 1
          - name: Skysplitting Fist
            level: 13
            tripods:
              - Firepower Control
              - Aircleave
              - Weak Point Detection
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Martial Art Skill**
              - Recovers a lot of energy per use.
              - Decently strong for being a martial art skill.
              - Lightning Fast can be used as 3rd tripod instead, the cast time goes from 0.8s to 0.7s, with epic vision, for a small damage decrease. 
          - name: Force Orb
            level: 14
            tripods:
              - Efficient Striker
              - Powerful Wave
              - Scattering Wave
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Force Skill**
              - Lowest priority as far as Force Skills go.
              - No para immunity on this skill, careful when you use it.
          - name: Yin Yang Palm
            level: 13
            tripods:
              - Swift Fingers
              - Reverse Polarities
              - Energy Training
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Martial Art Skill**
              - Recovers a lot of energy per use.
          - name: Flash Step
            level: 10
            tripods:
              - Excellent Mobility
              - Fighting Spirit Enhancement
              - Tireless
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Utility Skill, Mobility, Synergy**
              - Synergy is on cast, not on hit.
              - Same cooldown no matter how many charges you use.
              - Can be used with Galewind rune instead.
              - The Energy regen is with Tireless is per cast, not per hit.
          - name: Bolting Crash
            level: 4
            tripods:
              - Brutal Honesty
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Utility, Counter**
              - You can drop Flash Step to level 7 if you prefer having more tripods on this skill.
              - Synergy is on hit, not on cast.
              - Counter or generating energy will be the main use of this skill.
              - can be used with Quick Recharge Rune instead.
          - name: Sky Slash
            level_label: Hyper Awakening Technique
            notes: |-
              **Force Skill**
              - Short cooldown, aim for 1 cast per hype
              - The Leap node Final Strike makes it refund the hype that it spends while adding damage.
          - name: World Decimation / Falling Sun
            icon: World Decimation
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Bomba**
              - Strongest Awakening in the game.
              - Hyper Awakening can be used during Hype downtime, note that it will be a long cooldown if you do that so keep it for last bomb.
        gems:
          - skill: Heavenly Spiral Palm
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
          - skill: Skysplitting Fist
            type: damage
            priority: 5
          - skill: Yin Yang Palm
            type: damage
            priority: 6
          - skill: Heavenly Spiral Palm
            type: cooldown
            priority: 1
          - skill: Energy Blast
            type: cooldown
            priority: 2
          - skill: Skysplitting Fist
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
          - name: Skysplitting Fist
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
          - name: Final Strike
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
          - Skysplitting Fist
          - Heavenly Spiral Palm
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
          - Heavenly Spiral Palm
          - Energy Blast
          - Skysplitting Fist
          - Force Orb
          - Tempest Blast
      - name: Orbies
        difficulty: 3
        description: RS Ark grid build focusing on Force Orb casts and spamming Energy Bullet to extend Hype to allow for more Force Skills uses. This build shoud technically do more damage but is also the sweatiest of the bunch with higher uptime required and lower downtime, with added jank interactions with Energy Bullet near the end of Hype to be wary of.
        stats: Specialization 30/30, Crit 6/30, Swiftness 4/30
        arkgrid_cores: Hundred Chain Strike + Recovery Bullet + Energy Burst
        arkgrid_prose: |-
          Core priority is Hundred Chain Strike > Recovery Bullet > Energy Burst
          Minimum: Sun 17 Moon 17 Star 14.
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
          - Make sure you have one stack of Destiny before you enter Hype (can be leftover from last Hype) so that you get the refund on using your Force Orb Skill right away.
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
              **Force Skill**
              - Push Immunity, only source of it in the kit.
              - Other tripods combo such as 331 and 322 are more damage but are 3x to 4x as long to cast, use at your own risk.
          - name: Tempest Blast
            level: 14
            tripods:
              - Explosive Strength
              - Weak Point Detection
              - Inner Lightning
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Force Skill*
              - Main Damage
              - Lv. 2 Weakpoint
              - Decent Stagger
          - name: Heavenly Spiral Palm
            level: 14
            tripods:
              - Enhanced Speed
              - Harsh Training
              - Chain
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Force Skill**
              - Best stagger skill in your kit.
              - Hardest hitter in your kit.
              - Mid range.
              - Weakpoint Lv. 1
          - name: Energy Bullet
            level: 14
            tripods:
              - Enhanced Speed
              - Penetrating Pain
              - Trance
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Force Skill**
              - Main purpose is to extend hype by landing hits on the boss and to proc reduction to Energy Skills every 2 Destiny Skills.
              - Does decent damage for being so low cooldown
              - The Hype extension is per hit, do NOT miss this skill.
              - Oversupply is a very slight damage increase but Penetrating Pain has extra AOE that could make hits that were to miss end up hitting the boss.
          - name: Force Orb
            level: 14
            tripods:
              - Enhanced Speed
              - Powerful Wave
              - Scattering Wave
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Force Skill**
              - You want to cast this as often as possible for this build as it is your main damage skill.
              - While it is your main damage skill, it does NOT have Paralysis Immunity, be careful when you use it.
          - name: Skysplitting Fist
            level: 13
            tripods:
              - Sturdy Armor
              - Aircleave
              - Weak Point Detection
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Martial Art Skill**
              - Recovers a lot of energy per use.
              - Decently strong for being a martial art skill.
              - Lightning Fast can be used as 3rd tripod instead, the cast time goes from 0.8s to 0.7s, with epic vision, for a small damage decrease. 
              - First Tripod is flexible, pick what you prefer, the energy is usually wasted on this build.
          - name: Flash Step
            level: 10
            tripods:
              - Excellent Mobility
              - Fighting Spirit Enhancement
              - Tireless
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Utility Skill, Mobility, Synergy**
              - Synergy is on cast, not on hit.
              - Same cooldown no matter how many charges you use.
              - Can be used with Galewind rune instead.
              - The Energy regen is with Tireless is per cast, not per hit.
          - name: Bolting Crash
            level: 4
            tripods:
              - Brutal Honesty
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Utility, Counter**
              - You can drop Flash Step to level 7 if you prefer having more tripods on this skill.
              - Synergy is on hit, not on cast.
              - Counter will be the main use of this skill in this build as you do not need the extra energy from using it.
              - can be used with Quick Recharge Rune instead.
          - name: Sky Slash
            level_label: Hyper Awakening Technique
            notes: |-
              **Force Skill**
              - Short cooldown, aim for 1 cast per hype
              - The Leap node Final Strike makes it refund the hype that it spends while adding damage.
          - name: World Decimation / Falling Sun
            icon: World Decimation
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Bomba**
              - Strongest Awakening in the game.
              - Hyper Awakening can be used during Hype downtime, note that it will be a long cooldown if you do that so try to keep it for the last bomb you will throw in the fight.
        gems:
          - skill: Force Orb
            type: damage
            priority: 1
          - skill: Heavenly Spiral Palm
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
          - skill: Skysplitting Fist
            type: damage
            priority: 6
          - skill: Force Orb
            type: cooldown
            priority: 1
          - skill: Skysplitting Fist
            type: cooldown
            priority: 2
          - skill: Energy Bullet
            type: cooldown
            priority: 3
          - skill: Energy Blast
            type: cooldown
            priority: 4
          - skill: Heavenly Spiral Palm
            type: cooldown
            priority: 5
        dps_distribution:
          - name: Force Orb
            dmg: 25.0
          - name: Heavenly Spiral Palm
            dmg: 15.0
          - name: Energy Bullet
            dmg: 15.0
          - name: Sky Slash
            dmg: 11.0
          - name: Tempest Blast
            dmg: 11.0
          - name: Energy Blast
            dmg: 10.0
          - name: Worlds Decimation
            dmg: 6.0
          - name: Skysplitting Fist
            dmg: 6.0
          - name: Bleed
            dmg: 4.0
        arkPassives:
          - name: Specialization
            points: 30
            category: evolution
            tier: 1
          - name: Crit
            points: 6
            category: evolution
            tier: 1
          - name: Swiftness
            points: 4
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
          - name: Maximize Energy
            points: 3
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
          - name: Final Strike
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Aim for 270 Swift with lv.8 Cooldown Gems. Lower as you get more comfortable if you feel like it.
          - Technically able to play at base Swiftness but you will cycle slower.
          - Swiftness is a bit wasted as a stat since you get attacked speed capped from Recoil Control.
          - Use Optimized Training 1 instead of Keen Sense if needed to fit the rotation in.
          - Depending on Bracelet or Crit syn you can drop Master or Keen Sense.
          - Skillcode 699D791A0BE3BF03CF4346A7FC0B0DCBD3E67E898DABDF8846AE3592F5E521B7AE7CAC2C95A9A9B1BBFEDB94AD5F2E1FFCB734FA56CE97DA44EA9A752CE06C9F
        rotation:
          - title: Standard DPS rotation
            steps:
            - Energy Bullet
            - Flash Step
            - Flash Step
            - Flash Step
            - Hype
            - Force Orb
            - Energy Bullet
            - Skysplitting Fist
            - Heavenly Spiral Palm
            - Energy Bullet
            - Energy Blast
            - Tempest Blast
            - Energy Bullet
            - Force Orb
            - Flash Step
            - World Decimation
            - Sky Slash
            - Flash Step
            - Energy Bullet
            - Flash Step
            - Energy Bullet
            - Flash Step
            - Flash Step
            - Force Orb
            - Flash Step
            - Energy Bullet
            - Heavenly Spiral Palm
            - Energy Blast
            - Skysplitting Fist
            - Tempest Blast
            - Energy Bullet
            - Force Orb
          - title: Hype is back, 1 destiny stack but Force Orb still has 3s cooldown OR Hype is back, 0 destiny stack, Energy bullet is not two charges.
            steps:
            - Hype
            - Heavenly Spiral Palm
            - Force Orb
            - Energy Bullet
            - Skysplitting Fist
            - Tempest Blast
            - Energy Bullet
            - Energy Blast
            - Energy Bullet
            - Force Orb
            - Flash Step
            - Sky Slash
            - Flash Step
            - Energy Bullet
            - Flash Step
            - Energy Bullet
            - Flash Step
            - Flash Step
            - Force Orb
            - Flash Step
            - Energy Bullet
            - Heavenly Spiral Palm
            - Energy Blast
            - Skysplitting Fist
            - Tempest Blast
            - Energy Bullet
            - Force Orb
---
