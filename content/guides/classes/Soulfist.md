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
identity:
  name: Hype
  description: Hype meter refills overtime and as you press martial art skills, once full, Soulfist can enter "Hype" with the identity button (Z). In this mode you get additional damage, extra attack speed, extra cooldown as well as extra Force Skills damage. Using Force Skills or waiting out the timer will force you out of Hype, you can cancel Hype by pressing the secondary identity button (X).
builds:
  - name: Robust Energy
    engraving: Robust Energy
    description: Roughly 20 seconds of high damage followed by around 10 seconds of downtime, excels at fights where it can abuse the downtime, also brings the strongest awakening in the game as added bonus.
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
        - Make sure to spam Flash Step and Lightning Palm when Hype is recovering to shorten the window before you can enter it again.
        - Try to bomb off cooldown as much as possible unless you know that a big DPS window is coming.
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
          level: 14
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
          rune: Galewind
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
            - The Energy regenaration from Tireless is per cast, not per hit.
        - name: Lightning Palm
          level: 3
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Utility, Counter**
            - You can drop Flash Step to level 7 if you prefer having more tripods on this skill, it can do around 3% of damage distribution at level 10.
            - Counter or generating energy will be the main use of this skill.
            - can be used with Quick Recharge Rune instead.
        - name: Sky Slash
          level_label: Hyper Awakening Technique
          notes: |-
            **Force Skill**
            - Short cooldown, aim for 1 cast per Hype
            - The Leap node Final Strike makes it refund the Hype that it spends while adding damage.
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
        - Aim for 330 Swift with lv.8 Cooldown Gems for now.
      rotation:
        - Flash Step
        - Flash Step
        - Flash Step
        - Lightning Palm
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
    variants:
      - name: Blasties
        difficulty: 1
        recommended: true
        description: RS Ark grid build focusing on powering up all the big Force Skills
        stats: Specialization 30/30, Crit 7/30, Swiftness 3/30
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
          - Knowning when to cancel and when to extend Hype will be key to being able to recover against bad patterns.
          - The rotation is fairly flexible so make use of adequate Superarmor as you need it.
          - Make sure to spam Martial Arts Skills when Hype is recovering to shorten the window before you can enter it again.
          - Try to bomb off cooldown as much as possible unless you know that a big DPS window is coming.
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
              - The Energy regenaration from Tireless is per cast, not per hit.
          - name: Lightning Palm
            level: 3
            rune: Bleed
            rune_rarity: epic
            notes: |-
              **Utility, Counter**
              - You can drop Flash Step to level 7 if you prefer having more tripods on this skill, it can do around 3% of damage distribution at level 10.
              - Counter or generating energy will be the main use of this skill.
              - can be used with Quick Recharge Rune instead.
          - name: Sky Slash
            level_label: Hyper Awakening Technique
            notes: |-
              **Force Skill**
              - Short cooldown, aim for 1 cast per Hype
              - The Leap node Final Strike makes it refund the Hype that it spends while adding damage.
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
          - skill: Tempest Blast
            type: cooldown
            priority: 4
          - skill: Flash Step
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
            dmg: 6.0
          - name: Skysplitting Fist
            dmg: 9.0
        arkPassives:
          - name: Specialization
            points: 30
            category: evolution
            tier: 1
          - name: Crit
            points: 7
            category: evolution
            tier: 1
          - name: Swiftness
            points: 3
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
          - Aim for 230 Swift with Lv. 8 Gems.
          - Depending on Bracelet or Crit syn you can drop Master or Keen Sense.
          - Skillcode 781D20D86A3680F98FA9F462AF0B247C51F30BB3DAB31FD3A011E8AF44B36BA20DFDCD21BC7CEBC312BFBFEBB23E911EF9F69CDD7926B8FED3B1A60D5C5F0D41
        rotation_sections:
          - title: General Damage Rotation
            steps:
            - Flash Step
            - Flash Step
            - Flash Step
            - Lightning Palm
            - Hype
            - Skysplitting Fist
            - Heavenly Spiral Palm
            - Energy Blast
            - Tempest Blast
            - Force Orb
            - Yin Yang Palm
            - Sky Slash
            - Lightning Palm
            - Flash Step
            - Flash Step
            - Flash Step
            - Skysplitting Fist
            - Yin Yang Palm
            - Heavenly Spiral Palm
            - Energy Blast
            - Skysplitting Fist
            - Tempest Blast
            - Force Orb
          - title: Bomb Rotation
            steps:
            - Flash Step
            - Flash Step
            - Flash Step
            - Lightning Palm
            - Hype
            - Skysplitting Fist
            - Heavenly Spiral Palm
            - Energy Blast
            - Tempest Blast
            - Force Orb
            - Yin Yang Palm
            - Flash Step
            - World Decimation
            - Sky Slash
            - Heavenly Spiral Palm
            - Energy Blast
            - Tempest Blast
            - Force Orb
      - name: Bombies WIP
        difficulty: 2
        description: RS Ark grid build focusing entirely on Awakening to get big burst of damage, this build is not particularily recommended but it was added for people that don't care about other variants of RS and prefers the pre-ark grid version.
        stats: Specialization 30/30, Crit 5/30, Swiftness 5/30
        arkgrid_cores: Sky Shattering Strike + Chain Annihilation + Blinding Obliteration
        arkgrid_prose: |-
          Core priority is Sky Shattering Strike > Chain Annihilation > Blinding Obliteration.
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
          - Make sure to spam Flash Step and Lightning Palm when Hype is recovering to shorten the window before you can enter it again.
          - Try to bomb off cooldown as much as possible unless you know that a big DPS window is coming.
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
            level: 14
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
              - The Energy regenaration from Tireless is per cast, not per hit.
          - name: Lightning Palm
            level: 3
            rune: Bleed
            rune_rarity: epic
            notes: |-
              **Utility, Counter**
              - You can drop Flash Step to level 7 if you prefer having more tripods on this skill, it can end up with roughly 3% damage distribution.
              - Counter or generating energy will be the main use of this skill.
              - can be used with Quick Recharge Rune instead.
          - name: Sky Slash
            level_label: Hyper Awakening Technique
            notes: |-
              **Force Skill**
              - Short cooldown, aim for 1 cast per Hype
              - The Leap node Final Strike makes it refund the Hype that it spends while adding damage.
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
          - Aim for 330 Swift with lv.8 Cooldown Gems.
        rotation:
          - Flash Step
          - Flash Step
          - Flash Step
          - Lightning Palm
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
          - Try to bomb off cooldown as much as possible unless you know that a big DPS window is coming.
          - Make sure to let your Energy Bullet go back up to 2 stacks while Hype is off, otherwise you get bugged cooldown.
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
              - Main purpose is to extend Hype by landing hits on the boss and to proc reduction to Energy Skills every 2 Destiny Skills.
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
              - The Energy regenaration from Tireless is per cast, not per hit.
          - name: Lightning Palm
            level: 3
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Utility, Counter**
              - You can drop Flash Step to level 7 if you prefer having more tripods on this skill, it can deal around 3% of damage distrubtion at level 10.
              - Counter will be the main use of this skill in this build as you do not need the extra energy from using it.
              - can be used with Quick Recharge Rune instead.
          - name: Sky Slash
            level_label: Hyper Awakening Technique
            notes: |-
              **Force Skill**
              - Short cooldown, aim for 1 cast per Hype
              - The Leap node Final Strike makes it refund the Hype that it spends while adding damage.
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
          - Depending on Bracelet or Crit syn you can drop Master or Keen Sense.
          - Skillcode 87457B2C234BC3DDFAA74585D2311E2250ADB44AAF5DD95B8C4CFD509290025AFB6AB071118D718902B1CBCB48676FA5CEE32DD01F0C4F930324CB77EAF31444
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
  - name: Supreme Art
    engraving: Supreme Art
    difficulty: medium
    identity:
      name: Supreme Art
      description: Supreme Art Soulfist generates meter based on the inner force cost of Martial Arts Skills. Activating the identity (Z) will send out Supreme Technique, Supreme Palm, or Supreme Godfist depending on the identity stage.
    variants:
      - name: Yin Yang
        difficulty: 2
        description: SA Ark grid build focusing on the alternating usage of Supreme Art and Yin Yang Palm.
        stats: Swift 30/30, Crit 10/30
        arkgrid_cores: Force Cycle + Protective Cycle + Yin Yang Technique
        arkgrid_prose: |-
          Minimum: Sun 14 Moon 14 for playstyle activation. Will likely be weaker than pre-arkgrid.
          Recommended: Sun 17 Moon 17 Star 14 to obtain damage and QoL for our main damage skills.
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Raid Captain
            priority: required
          - name: Mass Increase
            priority: recommended
          - name: Cursed Doll
            priority: optional
          - name: Stabilized Status
            priority: optional
        priorities:
          - After the opener, this build variant does not have a strict rotation; it operates according to the following guidelines for each of the stages in the identity (Z1, Z2, Z3).
          - Z1 - Use every skill once to generate meter. The priority is putting Skysplitting Fist + Merciless Pummel on cooldown. Use Rule the World if available.
          - Z2 - Try to use every skill once to generate meter as they come off of cooldown. If Skysplitting Fist and Merciless Pummel are 4+ seconds of cooldown left when meter is filled, move to Z3. Use Rule the World if available.
          - Z3 - Lead with Skysplitting Fist and Merciless Pummel if not used in Z2. Ideally use Flash Step x3 + Shadowbreaker + Celestial Palm + Yin Yang Palm to finish the gauge.
          - Do not use Skysplitting Fist and Merciless Pummel in Z3 if they are not the first two skills as this will put your meter generation in the next rotation in a deficit. If you are missing any meter from previous forms, you may need to use Illusion Strike + Bolting Crash to fill.
          - Prioritize Rule the World in Z1/Z2; do not use it in Z3 unless the boss is leaving and you need to fill the gauge now to send Z3.
        skills:
          - name: Yin Yang Palm
            level: 14
            tripods:
              - Swift Fingers
              - Weak Point Detection
              - Energy Training
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill.**
              - Using Supreme Technique or Supreme Palm will empower the next Yin Yang Palm use
              - Using Yin Yang Palm will increase the damage of Supreme Art skills for 12 seconds
              - **Meter Generation**: 2060
          - name: Illusion Strike
            level: 14
            tripods:
              - Enhanced Strike
              - Apex
              - Seething Fighting Spirit
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Meter Generation Skill**
              - **Meter Generation**: 1540
          - name: Celestial Palm
            level: 14
            tripods:
              - Enhanced Strike
              - Harsh Training
              - Wide Hit
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Meter Generation Skill**
              - The only non-paralysis immune skill in the kit.
              - **Meter Generation**: 1224
          - name: Shadowbreaker
            level: 11
            tripods:
              - Brutal Honesty
              - Weak Point Detection
              - Sixth Sense
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Meter Generation Skill**
              - Can be substituted with Quick Recharge
              - **Meter Generation**: 1152
          - name: Bolting Crash
            level: 10
            tripods:
              - Brutal Honesty
              - Fighting Spirit Enh.
              - Tough Shoulder
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Utility, Counter**
              - Synergy is on hit, not on cast.
              - **Meter Generation**: 826
          - name: Merciless Pummel
            level: 14
            tripods:
              - In a Tight Spot
              - Clear Hit
              - Double Up
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Secondary Damage Skill**
              - **Meter Generation**: 1346
          - name: Flash Step
            level: 7
            tripods:
              - Excellent Mobility
              - Fighting Spirit Enhancement
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Utility Skill, Mobility, Synergy**
              - Synergy is on cast, not on hit.
              - Same cooldown no matter how many charges you use.
              - **Meter Generation**: 346 per cast
          - name: Skysplitting Fist
            level: 14
            tripods:
              - Sturdy Armor
              - Aircleave
              - Weak Point Detection
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Secondary Damage Skill**
              - **Meter Generation**: 2203
          - name: Rule the World
            level_label: Hyper Awakening Technique
            notes: |-
              **Meter Generation Skill, Secondary Damage Skill**
              - Aim to use Rule the World once every rotation of Supreme Art Forms.
              - The Leap node Sky Walk takes advantage of the multiple form changes to have reduced cooldown.
              - Sky Walk also allows for traversal through the boss.
              - **Meter Generation**: 3386
          - name: Decimation Ray / Supernova Purgation Ray
            icon: Decimation Ray
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Meter Generation Skill**
              - Does basically no damage.
              - Used mainly in the opener or to help reset meter state.
              - **Meter Generation**: 15000
        gems:
          - skill: Supreme Art
            type: damage
            priority: 1
          - skill: Yin Yang Palm
            type: damage
            priority: 2
          - skill: Skysplitting Fist
            type: damage
            priority: 3
          - skill: Merciless Pummel
            type: damage
            priority: 4
          - skill: Illusion Strike
            type: damage
            priority: 5
          - skill: Celestial Palm
            type: damage
            priority: 6
          - skill: Yin Yang Palm
            type: cooldown
            priority: 1
          - skill: Skysplitting Fist
            type: cooldown
            priority: 2
          - skill: Merciless Pummel
            type: cooldown
            priority: 3
          - skill: Illusion Strike
            type: cooldown
            priority: 4
          - skill: Celestial Palm
            type: cooldown
            priority: 5
        dps_distribution:
          - name: Supreme Art
            dmg: 33.0
          - name: Yin Yang Palm
            dmg: 27.0
          - name: Skysplitting Fist
            dmg: 10
          - name: Rule the World
            dmg: 8
          - name: Merciless Pummel
            dmg: 8
          - name: Celestial Palm
            dmg: 4.5
          - name: Illusion Strike
            dmg: 4
          - name: Shadowbreaker
            dmg: 2
        arkPassives:
          - name: Crit
            points: 10
            category: evolution
            tier: 1
          - name: Swiftness
            points: 30
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
          - name: Supreme Art
            points: 3
            category: enlightenment
            tier: 1
          - name: Supreme Esoterica
            points: 1
            category: enlightenment
            tier: 2
          - name: Blooming Convergence
            points: 3
            category: enlightenment
            tier: 3
          - name: Primodial Energy
            points: 2
            category: enlightenment
            tier: 3
          - name: Quintuple Equilibrium
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
          - name: Sky Walk
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Try to get at least 90% crit rate. Critical swapped into Master if below Crit Rate. Keen Sense swapped into Limit Break if above Crit Rate.
          - If you are overcapped on crit rate because of multiple additional crit sources, consider using Blunt Thorn to utilize the overcap.
        rotation_sections:
          - title: Opener Rotation
            steps:
            - Flash Step
            - Flash Step
            - Flash Step
            - Illusion Strike
            - Celestial Palm
            - Skysplitting Fist
            - Merciless Pummel
            - Rule the World
            - Supreme Technique
            - Yin Yang Palm
            - Supreme Palm
            - Supreme Godfist
            - Illusion Strike
            - Celestial Palm
            - Shadowbreaker
            - Bolting Crash
            - Yin Yang Palm
            - Skysplitting Fist
            - Merciless Pummel
            - Supreme Technique
            - Decimation Ray
            - Illusion Strike
            - Celestial Palm
            - Yin Yang Palm
            - Supreme Palm
            - Supreme Godfist
          - title: Sample Standard Rotation (from 0 meter and all skills up)
            steps:
            - Illusion Strike
            - Celestial Palm
            - Shadowbreaker
            - Bolting Crash
            - Yin Yang Palm
            - Skysplitting Fist
            - Merciless Pummel
            - Rule the World
            - Flash Step
            - Flash Step
            - Flash Step
            - Supreme Technique
            - Illusion Strike
            - Celestial Palm
            - Shadowbreaker
            - Bolting Crash
            - Yin Yang Palm
            - Flash Step
            - Flash Step
            - Flash Step
            - Supreme Palm
            - Skysplitting Fist
            - Merciless Pummel
            - Celestial Palm
            - Shadowbreaker
            - Yin Yang Palm
            - Supreme Godfist
---
