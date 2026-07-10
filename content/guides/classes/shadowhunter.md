---
title: Shadowhunter Guide
class: Assassin
subclass: Shadowhunter
class_id: 403
description: Complete guide to Shadowhunter including Demonic Impulse (transformation) and Perfect Suppression (human) builds with Ark Grid variants.
identity:
  name: Shadowburst Meter
  description: Fill your Shadowburst Meter by using most skills. The amount generated scales with Specialization and certain tripods. Once full, use Demonize to transform into a powerful Demon, unlocking a second set of skills.
synergy:
  name: Damage Amplification
  description: Increases the damage dealt to enemies by 6.0%.
  skills:
    - Demonic Slash
    - Howl
    - Slasher
    - Ruining Rush
    - Destruction
builds:
  - name: Demonic Impulse
    engraving: Demonic Impulse
    description: Consistent DPS with permanent Paralysis Immunity during transformation.
    playstyle: Gather Shadowburst energy to transform into a powerful Demon, unlocking new powerful Demon skills.
    difficulty: easy
    identity:
      name: Demonic Impulse - Demon Meter
      description: Become a Demon for an indefinite amount of time. Using Blood Vortex and Bloody Piercing grants you a Chaos Sliver stack each; at two stacks converts into Frenzied Chaos which allows you to use Blood Demonic Clone (consumes 50% Demon Meter on use but reduces Blood Vortex and Bloody Piercing remaining cooldown by 50%)
    preArkGrid:
      description: Pre Ark Grid setup plays around the normal identity mechanic. You rotate normally until you cast Blood Demonic Clone twice, which totally depletes the Demon Meter sending you back into Human form. You fill your Shadowburst Meter and transform again, and the cycle repeats.
      priorities:
        - Gather Shadowburst Meter to transform.
        - Apply and maintain your Synergy on the enemy by using Ruining Rush / Destruction / Demonic Slash / Howl as needed.
        - Rotate all your skills, prioritizing Blood Vortex and Bloody Piercing into Blood Demonic Clone.
      arkPassives:
        - name: Specialization
          points: 30
          category: evolution
          tier: 1
        - name: Swiftness
          points: 5
          category: evolution
          tier: 1
        - name: Crit
          points: 5
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
        - name: Demonic Impulse
          points: 1
          category: enlightenment
          tier: 1
        - name: Instinct Enhancement
          points: 3
          category: enlightenment
          tier: 2
        - name: Chaos Enhancement
          points: 3
          category: enlightenment
          tier: 3
        - name: Execution Ceremony
          points: 3
          category: enlightenment
          tier: 4
        - name: Corrosion
          points: 2
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
        - name: Demon's Ascension
          points: 3
          category: leap
          tier: 2
      engravings:
        - name: Grudge
          priority: required
        - name: Adrenaline
          priority: required
        - name: Keen Blunt Weapon
          priority: required
        - name: Raid Captain
          priority: recommended
        - name: Cursed Doll
          priority: recommended
        - name: Hit Master
          priority: optional
      skills:
        - name: Demonic Slash
          level: 10
          tripods:
            - Damage Amplification
            - Nimble Movement
            - Chain Charge
          notes: |-
            **Human Mobility and Synergy skill, Weak Point Destruction**
        - name: Spinning Dive
          level: 10
          tripods:
            - Swift Fingers
            - Tenacity
            - Spinning Master
          notes: |-
            **Human Mobility skill.**
            - <tripod>Tenacity</tripod> gives this skill Push Immunity.
        - name: Demonic Clone
          level: 10
          tripods:
            - Tenacity
            - Fist of Destruction
            - Enh. Release Shadowburst
          notes: |-
            **Primary Meter Generation Skill, High Stagger Skill, Weak Point Destruction**
            - <tripod>Tenacity</tripod> gives this skill Push Immunity.
        - name: Rising Claw
          level: 10
          tripods:
            - Brutal Honesty
            - Giant Hand
            - Grasp of Death
          notes: |-
            **Human Counter Skill, Weak Point Destruction**
            - <tripod>Brutal Honesty</tripod> gives this skill Paralysis Immunity.
        - name: Demon Vision
          level: 10
          tripods:
            - Quick Release
            - Encroaching Power
            - Instant Discharge
          rune: Wealth
          rune_rarity: legendary
          notes: |-
            **Primary Meter Generation Skill**
            - <tripod>Concentrated Release</tripod> can be taken for additional Shadowburst Meter generation, at the cost of greater casting time.
        - name: Demon's Grip
          level: 10
          tripods:
            - Swift Fingers
            - Encroaching Power
            - Stretching Hand
          notes: |-
            **Priamry Meter Generation Skill**
            - Lacks Paralysis Immunity, so be careful when using it to not get it interrupted by normal boss patterns.
        - name: Howl
          level: 10
          tripods:
            - Damage Amplification
            - Encroaching Power
            - Mighty Roar
          notes: |-
            **Party Synergy, Weak Point Destruction**
            - Lacks Paralysis Immunity, so be careful when using it to not get it interrupted by normal boss patterns.
        - name: Decimate
          level: 10
          tripods:
            - Swift Fingers
            - Weak Point Detection
            - Cruel Hand
          notes: |-
            **Secondary Meter Generation Skill**
            - Highest damage out of all the meter generation skills, but quite irrelevant in terms of final damage.
        - name: Ruining Rush
          level:
          rune: Quick Recharge
          rune_rarity: epic
          notes: |-
            **Demon Form Party Synergy Skill, Mobility**
            - This rune slot is flexible, can use any other utility rune like Purify, Rage
        - name: Death Claw
          level:
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Demon Form Counter**
            - This rune slot is flexible, can use any other utility rune like Purify, Rage
        - name: Destruction
          level:
          notes: |-
            **Demon Party Synergy Skill**
        - name: Gore Bleeding
          level:
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Secondary Damage Skill, Weak Point Destruction**
        - name: Leaping Blow
          level:
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Secondary Damage Skill, Weak Point Destruction, Mobility, Push Immunity**
        - name: Blood Massacre
          level:
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Secondary Damage Skill**
        - name: Blood Vortex
          level:
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Main Damage Skill**
            - Grants a Chaos Sliver stack on use.
            - Can be interrupted by walking or casting other skill during some frames so be careful.
        - name: Bloody Piercing
          level:
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Main Damage Skill**
            - Grants a Chaos Sliver stack on use.
        - name: Blood Demonic Clone
          level:
          notes: |-
            **Main Damage Skill, Push Immunity**
            - Consumes two Chaos Sliver (Frenzied Chaos) stacks and 50% of your Demon Energy.
        - name: Blood Marsh
          level_label: Hyper Awakening Technique
          notes: |-
            **Main Damage Skill**
            - Thanks to Demon's Ascension, it gains Push Immunity and can move through enemies ignoring collisions.
        - name: Fallen Ruin / Ray of Ruin
          icon: Fallen Ruin
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Main Damage Skill**
            - Can only be used in Demon Form.
      gems:
        - skill: Blood Demonic Clone
          type: damage
          priority: 1
        - skill: Blood Vortex
          type: damage
          priority: 2
        - skill: Bloody Piercing
          type: damage
          priority: 3
        - skill: Gore Bleeding
          type: damage
          priority: 4
        - skill: Blood Massacre
          type: damage
          priority: 5
        - skill: Leaping Blow
          type: damage
          priority: 6
        - skill: Blood Vortex
          type: cooldown
          priority: 1
        - skill: Bloody Piercing
          type: cooldown
          priority: 2
        - skill: Blood Massacre
          type: cooldown
          priority: 3
        - skill: Leaping Blow
          type: cooldown
          priority: 4
        - skill: Gore Bleeding
          type: cooldown
          priority: 5
      rotation:
        - Demon Vision, Demon's Grip, Demonic Clone, Howl, Decimate as needed to fill your Shadowburst Meter
        - Destruction (to apply Synergy in case it's down)
        - Blood Marsh
        - Blood Vortex
        - Bloody Piercing
        - Blood Demonic Clone
        - Blood Massacre
        - Leaping Blow
        - Gore Bleeding
        - Death Claw
        - Ruining Rush
    variants:
      - name: Ominous (332)
        difficulty: 1
        description: Becomes a more condensed, quick rotating playstyle. Leaping Blow gives a Frenzied Chaos stack, allowing you to use Blood Demonic Clone. It has increased Shadowburst Meter generation to allow for faster Human form cycles.
        arkgrid_cores: Ominous + Demonic Clone + Critical Claws
        arkgrid_prose: |-
          Relic Priority: Demonic Clone > Critical Claws > Ominous.
          Ancient Gamba: Critical Claws > Demonic Clone > Ominous
          The build is functional with all cores on Legendary, but you will be lacking damage.
        priorities:
          - Generate enough Shadowburst Meter with Demon Vision + Demon's Grip / Howl / Demonic Clone (2 skills should be enough unless missed). Use Piercing Thorn right before transforming to apply Bleed.
          - Apply and upkeep your Party Synergy both in Human and Demon form.
          - Use your filler skills while waiting for Blood Vortex and Bloody Piercing to come back.
        skills:
          - name: Demonic Slash
            level: 10
            tripods:
              - Damage Amplification
              - Nimble Movement
              - Chain Charge
            notes: |-
              **Human Mobility and Synergy skill, Weak Point Destruction**
          - name: Piercing Thorn
            level: 14
            tripods:
              - Bleed Effect
              - Encroachment Discharge
              - Advancing Thorns
            notes: |-
              **Human Filler Damage Skill.**
              - <tripod>Bleed Effect</tripod> applies bleed on the enemy, which is buffed by your transformation (Crit Rate).
              - Since you will have downtime on Blood Vortex and Bloody Piercing regardless of gems, this is a useful filler to contribute a bit of damage in the meantime. It does more damage than most of your filler Demon skills.
          - name: Demonic Clone
            level: 10
            tripods:
              - Tenacity
              - Fist of Destruction
              - Enh. Release Shadowburst
            notes: |-
              **Primary Meter Generation Skill, High Stagger Skill, Weak Point Destruction**
              - <tripod>Tenacity</tripod> gives this skill Push Immunity.
          - name: Rising Claw
            level: 10
            tripods:
              - Brutal Honesty
              - Giant Hand
              - Grasp of Death
            notes: |-
              **Human Counter Skill, Weak Point Destruction**
              - <tripod>Brutal Honesty</tripod> gives this skill Paralysis Immunity.
          - name: Demon Vision
            level: 10
            tripods:
              - Quick Release
              - Encroaching Power
              - Instant Discharge
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Primary Meter Generation Skill**
              - <tripod>Concentrated Release</tripod> can be taken for additional Shadowburst Meter generation, at the cost of greater casting time.
          - name: Demon's Grip
            level: 10
            tripods:
              - Swift Fingers
              - Encroaching Power
              - Stretching Hand
            notes: |-
              **Priamry Meter Generation Skill**
              - Lacks Paralysis Immunity, so be careful when using it to not get it interrupted by normal boss patterns.
          - name: Howl
            level: 10
            tripods:
              - Damage Amplification
              - Encroaching Power
              - Mighty Roar
            notes: |-
              **Party Synergy, Weak Point Destruction**
              - Lacks Paralysis Immunity, so be careful when using it to not get it interrupted by normal boss patterns.
          - name: Decimate
            level: 10
            tripods:
              - Swift Fingers
              - Weak Point Detection
              - Cruel Hand
            notes: |-
              **Secondary Meter Generation Skill**
              - Highest damage out of all the meter generation skills, but quite irrelevant in terms of final damage.
          - name: Ruining Rush
            level:
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Demon Form Party Synergy Skill, Mobility**
              - This rune slot is flexible, can use any other utility rune like Purify, Rage
          - name: Death Claw
            level:
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Demon Form Counter**
              - This rune slot is flexible, can use any other utility rune like Purify, Rage
          - name: Destruction
            level:
            notes: |-
              **Demon Party Synergy Skill**
          - name: Gore Bleeding
            level:
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Secondary Damage Skill, Weak Point Destruction**
          - name: Leaping Blow
            level:
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Secondary Damage Skill, Weak Point Destruction, Mobility, Push Immunity**
          - name: Blood Massacre
            level:
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Secondary Damage Skill**
          - name: Blood Vortex
            level:
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill**
              - Grants a Chaos Sliver stack on use.
              - Can be interrupted by walking or casting other skill during some frames so be careful.
          - name: Bloody Piercing
            level:
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill**
              - Grants a Chaos Sliver stack on use.
          - name: Blood Demonic Clone
            level:
            notes: |-
              **Main Damage Skill, Push Immunity**
              - Consumes two Chaos Sliver (Frenzied Chaos) stacks and 50% of your Demon Energy.
          - name: Blood Marsh
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill**
              - Thanks to Demon's Ascension, it gains Push Immunity and can move through enemies ignoring collisions.
          - name: Fallen Ruin / Ray of Ruin
            icon: Fallen Ruin
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Main Damage Skill**
              - Can only be used in Demon Form.
        gems:
          - skill: Blood Demonic Clone
            type: damage
            priority: 1
          - skill: Blood Vortex
            type: damage
            priority: 2
          - skill: Bloody Piercing
            type: damage
            priority: 3
          - skill: Blood Massacre
            type: damage
            priority: 4
          - skill: Leaping Blow
            type: damage
            priority: 5
          - skill: Piercing Thorn
            type: damage
            priority: 6
          - skill: Blood Vortex
            type: cooldown
            priority: 1
          - skill: Bloody Piercing
            type: cooldown
            priority: 2
          - skill: Leaping Blow
            type: cooldown
            priority: 3
          - skill: Blood Massacre
            type: cooldown
            priority: 4
          - skill: Demon Vision
            type: cooldown
            priority: 5
        arkPassives:
          - name: Specialization
            points: 30
            category: evolution
            tier: 1
          - name: Swiftness
            points: 5
            category: evolution
            tier: 1
          - name: Crit
            points: 5
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
          - name: Demonic Impulse
            points: 1
            category: enlightenment
            tier: 1
          - name: Instinct Enhancement
            points: 3
            category: enlightenment
            tier: 2
          - name: Chaos Enhancement
            points: 3
            category: enlightenment
            tier: 3
          - name: Execution Ceremony
            points: 3
            category: enlightenment
            tier: 4
          - name: Corrosion
            points: 2
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
          - name: Demon's Ascension
            points: 3
            category: leap
            tier: 2
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Raid Captain
            priority: recommended
          - name: Cursed Doll
            priority: recommended
          - name: Hit Master
            priority: optional
        arkPassiveTips:
          - Depending on your other Crit Rate sources (Party Synergy, Bracelet, Adrenaline book level, etc) you should adjust your Crit / Swiftness spread. Aim to have 90~98% Crit Rate, and put the rest of the points in Swiftness.
        dps_distribution:
          - name: Blood Demonic Clone
            dmg: 42
          - name: Blood Vortex
            dmg: 20.5
          - name: Bloody Piercing
            dmg: 11.5
          - name: Blood Marsh
            dmg: 7
          - name: Blood Massacre
            dmg: 3
          - name: Piercing Thorn
            dmg: 3
          - name: Gore Bleeding
            dmg: 2
          - name: Leaping Blow
            dmg: 2.5
          - name: Destruction
            dmg: 1.5
          - name: Death Claw
            dmg: 0.5
          - name: Ruining Rush
            dmg: 0.5
        rotation:
          - Demon Vision
          - Demon's Grip
          - Demonize
          - Destruction
          - Blood Vortex
          - Bloody Piercing
          - Blood Demonic Clone
          - Leaping Blow
          - Blood Demonic Clone
        rotation_sections:
          - Use the other skills as fillers during downtime after re-transforming, since Blood Vortex and Bloody Piercing will have some cooldown remaining.
      - name: Eternal Blood (222)
        difficulty: 1
        description: Evolves the Pre-Ark Grid gameplay into a permanent transformation. Slower than Ominous (332) but with bigger hits as there's no Demon Skill damage penalty. Gore Bleeding becomes a crucial part of this playstyle as it triggers Destiny, refilling your Demon Energy and buffing the damage of the next Blood Demonic Clone. You receive a huge Shadowburst Meter generation penalty that only really affects your first cycle.
        arkgrid_cores: Eternal Blood + Gore Bleeding + Critical Claws
        arkgrid_prose: |-
          Relic and Ancient Priority: Eternal Blood > Gore Bleeding > Critical Claws.
          The build is functional with all cores on Legendary, but you will be lacking damage.
        priorities:
          - Generate enough Shadowburst Meter with Demon Vision + Demon's Grip + Howl + Demonic Clone + Decimate to transform.
          - Apply and upkeep your Party Synergy.
          - Spam Gore Bleeding to upkeep your Demon Energy as well as gain damage stacks for Blood Demonic Clone.
        skills:
          - name: Demonic Slash
            level: 10
            tripods:
              - Damage Amplification
              - Nimble Movement
              - Chain Charge
            notes: |-
              **Human Mobility and Synergy skill, Weak Point Destruction**
          - name: Spinning Dive
            level: 10
            tripods:
              - Swift Fingers
              - Tenacity
              - Spinning Master
            notes: |-
              **Human Mobility skill.**
              - <tripod>Tenacity</tripod> gives this skill Push Immunity.
          - name: Demonic Clone
            level: 10
            tripods:
              - Tenacity
              - Fist of Destruction
              - Enh. Release Shadowburst
            notes: |-
              **Primary Meter Generation Skill, High Stagger Skill, Weak Point Destruction**
              - <tripod>Tenacity</tripod> gives this skill Push Immunity.
          - name: Rising Claw
            level: 10
            tripods:
              - Brutal Honesty
              - Giant Hand
              - Grasp of Death
            notes: |-
              **Human Counter Skill, Weak Point Destruction**
              - <tripod>Brutal Honesty</tripod> gives this skill Paralysis Immunity.
          - name: Demon Vision
            level: 10
            tripods:
              - Quick Release
              - Encroaching Power
              - Instant Discharge
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Primary Meter Generation Skill**
              - <tripod>Concentrated Release</tripod> can be taken for additional Shadowburst Meter generation, at the cost of greater casting time.
          - name: Demon's Grip
            level: 10
            tripods:
              - Swift Fingers
              - Encroaching Power
              - Stretching Hand
            notes: |-
              **Priamry Meter Generation Skill**
              - Lacks Paralysis Immunity, so be careful when using it to not get it interrupted by normal boss patterns.
          - name: Howl
            level: 10
            tripods:
              - Damage Amplification
              - Encroaching Power
              - Mighty Roar
            notes: |-
              **Party Synergy, Weak Point Destruction**
              - Lacks Paralysis Immunity, so be careful when using it to not get it interrupted by normal boss patterns.
          - name: Decimate
            level: 10
            tripods:
              - Swift Fingers
              - Weak Point Detection
              - Cruel Hand
            notes: |-
              **Secondary Meter Generation Skill**
              - Highest damage out of all the meter generation skills, but quite irrelevant in terms of final damage.
          - name: Ruining Rush
            level:
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Demon Form Party Synergy Skill, Mobility**
              - This rune slot is flexible, can use any other utility rune like Purify, Rage
          - name: Death Claw
            level:
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Demon Form Counter**
              - This rune slot is flexible, can use any other utility rune like Purify, Rage
          - name: Destruction
            level:
            notes: |-
              **Demon Party Synergy Skill**
          - name: Gore Bleeding
            level:
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Secondary Damage Skill, Weak Point Destruction**
          - name: Leaping Blow
            level:
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Secondary Damage Skill, Weak Point Destruction, Mobility, Push Immunity**
          - name: Blood Massacre
            level:
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Secondary Damage Skill**
          - name: Blood Vortex
            level:
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill**
              - Grants a Chaos Sliver stack on use.
              - Can be interrupted by walking or casting other skill during some frames so be careful.
          - name: Bloody Piercing
            level:
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill**
              - Grants a Chaos Sliver stack on use.
          - name: Blood Demonic Clone
            level:
            notes: |-
              **Main Damage Skill, Push Immunity**
              - Consumes two Chaos Sliver (Frenzied Chaos) stacks and 50% of your Demon Energy.
          - name: Blood Marsh
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill**
              - Thanks to Demon's Ascension, it gains Push Immunity and can move through enemies ignoring collisions.
          - name: Fallen Ruin / Ray of Ruin
            icon: Fallen Ruin
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Main Damage Skill**
              - Can only be used in Demon Form.
        arkPassives:
          - name: Specialization
            points: 30
            category: evolution
            tier: 1
          - name: Swiftness
            points: 5
            category: evolution
            tier: 1
          - name: Crit
            points: 5
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
          - name: Demonic Impulse
            points: 1
            category: enlightenment
            tier: 1
          - name: Instinct Enhancement
            points: 3
            category: enlightenment
            tier: 2
          - name: Chaos Enhancement
            points: 3
            category: enlightenment
            tier: 3
          - name: Execution Ceremony
            points: 3
            category: enlightenment
            tier: 4
          - name: Chaos Training
            points: 2
            category: enlightenment
            tier: 3
          - name: Unleashed Power
            points: 5
            category: leap
            tier: 1
          - name: Release Potential
            points: 5
            category: leap
            tier: 1
          - name: Demon's Ascension
            points: 3
            category: leap
            tier: 2
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Raid Captain
            priority: recommended
          - name: Cursed Doll
            priority: recommended
          - name: Hit Master
            priority: optional
        arkPassiveTips:
          - Depending on your other Crit Rate sources (Party Synergy, Bracelet, Adrenaline book level, etc) you should adjust your Crit / Swiftness spread. Aim to have 90~98% Crit Rate, and put the rest of the points in Swiftness.
        dps_distribution:
          - name: Blood Demonic Clone
            dmg: 26.5
          - name: Blood Vortex
            dmg: 19.5
          - name: Bloody Piercing
            dmg: 15.0
          - name: Blood Marsh
            dmg: 13
          - name: Gore Bleeding
            dmg: 6
          - name: Blood Massacre
            dmg: 5
          - name: Leaping Blow
            dmg: 4
          - name: Destruction
            dmg: 3
          - name: Death Claw
            dmg: 1.5
          - name: Ruining Rush
            dmg: 1
        rotation:
          - Demon Vision / Demon's Grip / Decimate / Demonic Clone / Howl
          - Demonize
          - Gore Bleeding
          - Destruction
          - Blood Vortex
          - Bloody Piercing
          - Blood Demonic Clone
          - Blood Massacre
          - Leaping Blow
        rotation_sections:
          - Use the other skills as fillers during downtime after re-transforming, since Blood Vortex and Bloody Piercing will have some cooldown remaining.
  - name: Perfect Suppression
    engraving: Perfect Suppression
    description: Empower Human skills by expending Shadowburst Meter.
    playstyle: Demonize is disabled. Instead, you generate and consume Shadowburst meter with Intrude and Human skills.
    difficulty: easy
    identity:
      name: Perfect Suppression - Shadowburst Meter
      description: Generate and Consume Shadowburst Meter.
    synergy:
      name: Damage Amplification
      description: Increases the damage dealt to enemies by 6.0%.
      skills:
        - Demonic Slash
        - Howl
        - Slasher
    preArkGrid:
      description: Pre Ark Grid setup plays around the "vanilla" skill setup and gameplay design. You generate Shadowburst Meter and consume it with skills with specific tripods (Encroachment Release) often referred as "Spenders".
      priorities:
        - Apply and maintain your Synergy on the enemy by using Demonic Slash / Slasher / Howl as needed.
        - Make sure to always use your spenders with at least 20% Shadowburst Meter.
        - Fill the gaps with secondary damage skills.
      skills:
        - name: Slasher
          level: 7
          tripods:
            - Damage Amplification
            - Nimble Movement
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Party Synergy, Counter, Weak Point Destruction**
            - No Paralysis Immunity
        - name: Demonic Slash
          level: 10
          tripods:
            - Damage Amplification
            - Nimble Movement
            - Chain Charge
          rune: Focus
          rune_rarity: legendary
          notes: |-
            **Party Synergy, Mobility, Weak Point Destruction**
            - No Paralysis Immunity
        - name: Spinning Weapon
          level: 14
          tripods:
            - Bleed Effect
            - Instant Disposal
            - Encroachment Release
          rune: Judgment
          rune_rarity: legendary
          notes: |-
            **Primary Damage Skill, Spender**
        - name: Cruel Cutter
          level: 14
          tripods:
            - Bleed Effect
            - Earth Attack
            - Encroachment Release
          rune: Conviction
          rune_rarity: legendary
          notes: |-
            **Primary Damage Skill, Spender**
        - name: Grind Chain
          level: 14
          tripods:
            - Critical Blow
            - Chain Attack
            - Encroachment Release
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Primary Damage Skill, Spender**
            - No Paralysis Immunity
        - name: Demonic Clone
          level: 10
          tripods:
            - Tenacity
            - Fist of Destruction
            - Enh. Release Shadowburst
          rune: Wealth
          rune_rarity: legendary
          notes: |-
            **Shadowburst Meter Generator, Weak Point Destruction**
        - name: Decimate
          level: 14
          tripods:
            - Quick Prep
            - Weak Point Detection
            - Cruel Hand
          rune: Wealth
          rune_rarity: epic
          notes: |-
            **Secondary Damage Skill, Shadowburst Meter Generator**
        - name: Thrust Impact
          level: 14
          tripods:
            - Swift Thrust
            - Deep Thrust
            - Spectral Explosion
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Secondary Damage Skill**
            - No Paralysis Immunity
        - name: Storm Grinding
          notes: |-
            **Main Damage Skill, Spender**
        - name: Wild Slash
          level_label: Hyper Awakening Technique
          notes: |-
            **Damage Skill**
            - Only T skill usable in Human Form
        - name: Gate of Eruption / Darkness Blast
          icon: Gate of Eruption
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Shadowburst Meter Generator**
            - Only Awakening usable in Human form
      gems:
        - skill: Cruel Cutter
          type: damage
          priority: 1
        - skill: Spinning Weapon
          type: damage
          priority: 2
        - skill: Grind Chain
          type: damage
          priority: 3
        - skill: Thrust Impact
          type: damage
          priority: 4
        - skill: Decimate
          type: damage
          priority: 5
        - skill: Cruel Cutter
          type: cooldown
          priority: 1
        - skill: Spinning Weapon
          type: cooldown
          priority: 2
        - skill: Grind Chain
          type: cooldown
          priority: 3
        - skill: Demonic Clone
          type: cooldown
          priority: 4
        - skill: Thrust Impact
          type: cooldown
          priority: 5
        - skill: Decimate
          type: cooldown
          priority: 6
      arkPassives:
        - name: Crit
          points: 16
          category: evolution
          tier: 1
        - name: Swiftness
          points: 24
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
        - name: Perfect Suppression
          points: 3
          category: enlightenment
          tier: 1
        - name: Shadowburst Control
          points: 3
          category: enlightenment
          tier: 2
        - name: Weapon Training
          points: 3
          category: enlightenment
          tier: 3
        - name: Shadowburst Absorption
          points: 1
          category: enlightenment
          tier: 3
        - name: Storm Grinding
          points: 3
          category: enlightenment
          tier: 4
        - name: Enh. Release Shadowburst
          points: 2
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
        - name: Hellish Infusion
          points: 3
          category: leap
          tier: 2
      arkPassiveTips:
        - You should adjust Crit and Swiftness such that the Crit Rate on your character stat sheet is 70%, including your Pet Effect (set to swiftness or crit)
        - If you're running the Devil Suppression Sun Core and no Mass Increase engraving, Supersonic Breakthrough will generally be better than Standing Striker. For Surging Storm Sun Core builds, Blunt Thorn and Supersonic Breakthrough are also viable, but require stat tradeoffs. Standing Striker is the most straightforward to use and generally considered to be the best for this build.
        - Malicious Authority is also viable instead of Hellish Infusion, trading off damage and meter gen for a much faster cast animation.
      engravings:
        - name: Grudge
          priority: required
        - name: Adrenaline
          priority: required
        - name: Keen Blunt Weapon
          priority: required
        - name: Raid Captain
          priority: required
        - name: Cursed Doll
          priority: recommended
        - name: Hit Master
          priority: optional
        - name: Mass Increase
          priority: optional
      rotation:
        - Slasher
        - Storm Grinding
        - Wild Slash
        - Thrust Impact
        - Cruel Cutter
        - Spinning Weapon
        - Grind Chain
        - Demonic Clone
        - Decimate
        - Sharpened Cut
    variants:
      - name: Devil Suppression (111)
        difficulty: 1
        description: Devil Suppression plays very similarly to the old Entropy 2-spender build from Tier 3, but with significant QoL changes. There's no longer a back attack requirement, and both Demolition and Sharpened Cut run tripods to make the abilities easier to land.
        arkgrid_cores: Devil Suppression + Trinity Core + Lethal Strike
        arkgrid_prose: |-
          The only strict core requirement is having a Lethal Strike Star Core at 14 points to make Demolition and Sharpened Cut do damage.
        priorities:
          - Generate Shadowburst Meter with Intrude skills and consume it with your Spender skills.
          - Apply and upkeep your Party Synergy at all times.
        skills:
          - name: Slasher
            level: 7
            tripods:
              - Damage Amplification
              - Nimble Movement
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Party Synergy, Counter, Weak Point Destruction**
              - No Paralysis Immunity
          - name: Thrust Impact
            level: 14
            tripods:
              - Swift Thrust
              - Deep Thrust
              - Encroachment Release
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill, Spender**
              - No Paralysis Immunity
          - name: Demolition
            level: 14
            tripods:
              - Weak Point Detection
              - Quick Attack
              - Encroachment Release
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill, Spender, Weak Point Destruction**
          - name: Spinning Weapon
            level: 14
            tripods:
              - Bleed Effect
              - Instant Disposal
              - Encroachment Release
            rune: Judgment
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill, Spender**
          - name: Cruel Cutter
            level: 14
            tripods:
              - Bleed Effect
              - Earth Attack
              - Encroachment Release
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill, Spender**
          - name: Sharpened Cut
            level: 14
            tripods:
              - Enhanced Slash
              - Infiltration Attack
              - Demon Cut
            rune: Conviction
            rune_rarity: legendary
            notes: |-
              **Secondary Damage Skill**
          - name: Demonic Clone
            level: 10
            tripods:
              - Tenacity
              - Fist of Destruction
              - Enh. Release Shadowburst
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Shadowburst Meter Generator, Weak Point Destruction**
          - name: Demon Vision
            level: 10
            tripods:
              - Concentrated Release
              - Encroaching Power
              - Instant Discharge
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Shadowburst Meter Generator**
          - name: Storm Grinding
            notes: |-
              **Main Damage Skill, Spender**
          - name: Wild Slash
            level_label: Hyper Awakening Technique
            notes: |-
              **Damage Skill**
              - Only T skill usable in Human Form
          - name: Gate of Eruption / Darkness Blast
            icon: Gate of Eruption
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Shadowburst Meter Generator**
              - Only Awakening usable in Human form
        gems:
          - skill: Thrust Impact
            type: damage
            priority: 1
          - skill: Demolition
            type: damage
            priority: 2
          - skill: Cruel Cutter
            type: damage
            priority: 3
          - skill: Spinning Weapon
            type: damage
            priority: 4
          - skill: Sharpened Cut
            type: damage
            priority: 5
          - skill: Thrust Impact
            type: cooldown
            priority: 1
          - skill: Demolition
            type: cooldown
            priority: 2
          - skill: Cruel Cutter
            type: cooldown
            priority: 3
          - skill: Spinning Weapon
            type: cooldown
            priority: 4
          - skill: Sharpened Cut
            type: cooldown
            priority: 5
          - skill: Demonic Clone
            type: cooldown
            priority: 6
        arkPassives:
          - name: Crit
            points: 16
            category: evolution
            tier: 1
          - name: Swiftness
            points: 24
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
          - name: Critical
            points: 1
            category: evolution
            tier: 4
          - name: Pulverize
            points: 1
            category: evolution
            tier: 4
          - name: Supersonic Breakthrough
            points: 2
            category: evolution
            tier: 5
          - name: Perfect Suppression
            points: 3
            category: enlightenment
            tier: 1
          - name: Shadowburst Control
            points: 3
            category: enlightenment
            tier: 2
          - name: Weapon Training
            points: 3
            category: enlightenment
            tier: 3
          - name: Shadowburst Absorption
            points: 1
            category: enlightenment
            tier: 3
          - name: Storm Grinding
            points: 3
            category: enlightenment
            tier: 4
          - name: Enh. Release Shadowburst
            points: 2
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
          - name: Hellish Infusion
            points: 3
            category: leap
            tier: 2
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Raid Captain
            priority: required
          - name: Cursed Doll
            priority: recommended
          - name: Hit Master
            priority: optional
          - name: Mass Increase
            priority: optional
        arkPassiveTips:
          - You should adjust Crit and Swiftness such that the Crit Rate on your character stat sheet is 70%, including your Pet Effect (set to swiftness or crit)
          - There's no reason not to run Supersonic Breakthrough with this build as long as you ensure the movement speed buff from Slasher is up before sending damage skills. Standing Striker and Blunt Thorn (adjust Ark Passive accordingly) are viable as well for a little less damage.
          - Malicious Authority is also viable instead of Hellish Infusion, trading off damage and meter gen for a much faster cast animation.
        rotation:
          - Slasher
          - Storm Grinding
          - Wild Slash
          - Thrust Impact
          - Demolition
          - Spinning Weapon
          - Cruel Cutter
          - Demonic Clone
          - Demon Vision
          - Sharpened Cut
      - name: Deadly Boomerang (212/112)
        difficulty: 1
        description: Deadly Boomerang builds play the most similarly to pre-Ark Grid T4 Perfect Suppression builds.
        arkgrid_cores: Surging Storm + Trinity Core + Deadly Boomerang
        arkgrid_prose: |-
          With Ark Grid, you can either run the Devil Suppression Sun Core, which massively increases Thrust Impact damage, or run the Surging Storm Sun Core, which is focused around having more Storm Grinding casts by refunding its cooldown every four spell casts with the help of Trinity Core.
          - The DPS of either Sun Core is similar, with Devil Suppression also enabling using Supersonic Breakthrough and having a burst damage advantage. These traits make the Devil Suppression Sun Core arguably superior, with similar ceiling DPS and greater burst damage.
          - Dual Core is also viable, which increases the floor and decreases the ceiling of the build.
        priorities:
          - Generate Shadowburst Meter with Intrude skills and consume it with your Spender skills.
          - Apply and upkeep your Party Synergy at all times.
        skills:
          - name: Slasher
            level: 7
            tripods:
              - Damage Amplification
              - Nimble Movement
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Party Synergy, Counter, Weak Point Destruction**
              - No Paralysis Immunity
          - name: Demonic Slash
            level: 10
            tripods:
              - Damage Amplification
              - Nimble Movement
              - Chain Charge
            rune: Focus
            rune_rarity: legendary
            notes: |-
              **Party Synergy, Mobility, Weak Point Destruction**
              - No Paralysis Immunity
          - name: Spinning Weapon
            level: 14
            tripods:
              - Bleed Effect
              - Instant Disposal
              - Encroachment Release
            rune: Judgment
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill, Spender**
          - name: Cruel Cutter
            level: 14
            tripods:
              - Bleed Effect
              - Earth Attack
              - Encroachment Release
            rune: Conviction
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill, Spender**
          - name: Grind Chain
            level: 14
            tripods:
              - Critical Blow
              - Chain Attack
              - Encroachment Release
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill, Spender**
              - No Paralysis Immunity
          - name: Demonic Clone
            level: 10
            tripods:
              - Tenacity
              - Fist of Destruction
              - Enh. Release Shadowburst
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Shadowburst Meter Generator, Weak Point Destruction**
          - name: Decimate
            level: 14
            tripods:
              - Quick Prep
              - Weak Point Detection
              - Cruel Hand
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Secondary Damage Skill, Shadowburst Meter Generator**
          - name: Thrust Impact
            level: 14
            tripods:
              - Swift Thrust
              - Deep Thrust
              - Spectral Explosion
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Secondary Damage Skill**
              - No Paralysis Immunity
          - name: Storm Grinding
            notes: |-
              **Main Damage Skill, Spender**
          - name: Wild Slash
            level_label: Hyper Awakening Technique
            notes: |-
              **Damage Skill**
              - Only T skill usable in Human Form
          - name: Gate of Eruption / Darkness Blast
            icon: Gate of Eruption
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Shadowburst Meter Generator**
              - Only Awakening usable in Human form
        gems:
          - skill: Cruel Cutter
            type: damage
            priority: 1
          - skill: Spinning Weapon
            type: damage
            priority: 2
          - skill: Grind Chain
            type: damage
            priority: 3
          - skill: Thrust Impact
            type: damage
            priority: 4
          - skill: Decimate
            type: damage
            priority: 5
          - skill: Cruel Cutter
            type: cooldown
            priority: 1
          - skill: Spinning Weapon
            type: cooldown
            priority: 2
          - skill: Grind Chain
            type: cooldown
            priority: 3
          - skill: Demonic Clone
            type: cooldown
            priority: 4
          - skill: Thrust Impact
            type: cooldown
            priority: 5
          - skill: Decimate
            type: cooldown
            priority: 6
        arkPassives:
          - name: Crit
            points: 16
            category: evolution
            tier: 1
          - name: Swiftness
            points: 24
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
          - name: Perfect Suppression
            points: 3
            category: enlightenment
            tier: 1
          - name: Shadowburst Control
            points: 3
            category: enlightenment
            tier: 2
          - name: Weapon Training
            points: 3
            category: enlightenment
            tier: 3
          - name: Shadowburst Absorption
            points: 1
            category: enlightenment
            tier: 3
          - name: Storm Grinding
            points: 3
            category: enlightenment
            tier: 4
          - name: Enh. Release Shadowburst
            points: 2
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
          - name: Hellish Infusion
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - You should adjust Crit and Swiftness such that the Crit Rate on your character stat sheet is 70%, including your Pet Effect (set to swiftness or crit)
          - If you're running the Devil Suppression Sun Core and no Mass Increase engraving, Supersonic Breakthrough will generally be better than Standing Striker. For Surging Storm Sun Core builds, Blunt Thorn and Supersonic Breakthrough are also viable, but require stat tradeoffs. Standing Striker is the most straightforward to use and generally considered to be the best for this build.
          - Malicious Authority is also viable instead of Hellish Infusion, trading off damage and meter gen for a much faster cast animation.
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Raid Captain
            priority: required
          - name: Cursed Doll
            priority: recommended
          - name: Hit Master
            priority: optional
          - name: Mass Increase
            priority: optional
        rotation:
          - Slasher
          - Storm Grinding
          - Wild Slash
          - Thrust Impact
          - Cruel Cutter
          - Spinning Weapon
          - Grind Chain
          - Demonic Clone
          - Decimate
          - Sharpened Cut
      - name: Mass Absorption (333)
        difficulty: 1
        description: Mass Absorption focuses on dealing damage with Shadowhunter's Intrude (purple) skills, with build mastery dependent on optimizing your rotation within the Destiny Mass Absorption buff.
        arkgrid_cores: Mass Absorption + Substorm + Destruction Beam
        arkgrid_prose: |-
          It's highly recommended to only try this build once you have Relic Sun and Moon cores, as that's the main source of Damage and MP Cost reduction. It is technically playable with Legendary cores though.
        priorities:
          - To be added xd.
          - Apply and upkeep your Party Synergy at all times.
        skills:
          - name: Demonic Slash
            level: 10
            tripods:
              - Damage Amplification
              - Nimble Movement
              - Chain Charge
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Party Synergy, Mobility, Weak Point Destruction**
              - No Paralysis Immunity
          - name: Demonic Clone
            level: 14
            tripods:
              - Vital Point Hit
              - Fist of Destruction
              - Encroachment Discharge
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill, Weak Point Destruction**
          - name: Rising Claw
            level: 11
            tripods:
              - Quick Prep
              - Critical Blow
              - Grasp of Death
            rune: Focus
            rune_rarity: epic
            notes: |-
              **Counter, Weak Point Destruction**
          - name: Demon Vision
            level: 14
            tripods:
              - Concentrated Release
              - Darkness Release
              - Instant Discharge
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill**
          - name: Demon's Grip
            level: 14
            tripods:
              - Vital Point Hit
              - Piercing Hand
              - Stretching Hand
            rune: Focus
            rune_rarity: epic
            notes: |-
              **Secondary Damage Skill**
              - No Paralysis Immunity
          - name: Piercing Thorn
            level: 14
            tripods:
              - Vital Point Hit
              - Encroachment Discharge
              - Advancing Thorns
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill**
              - No Paralysis Immunity
          - name: Howl
            level: 7
            tripods:
              - Damage Amplification
              - Concussion
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Party Synergy, Weak Point Destruction**
          - name: Decimate
            level: 14
            tripods:
              - Quick Prep
              - Encroachment Discharge
              - Cruel Hand
            rune: Focus
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill**
          - name: Storm Grinding
            notes: |-
              **Destiny Triggerer, Spender**
          - name: Wild Slash
            level_label: Hyper Awakening Technique
            notes: |-
              **Damage Skill**
              - Only T skill usable in Human Form
          - name: Gate of Eruption / Darkness Blast
            icon: Gate of Eruption
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Shadowburst Meter Generator**
              - Only Awakening usable in Human form
        gems:
          - skill: Demon Vision
            type: damage
            priority: 1
          - skill: Decimate
            type: damage
            priority: 2
          - skill: Piercing Thorn
            type: damage
            priority: 3
          - skill: Demonic Clone
            type: damage
            priority: 4
          - skill: Demon's Grip
            type: damage
            priority: 5
          - skill: Rising Claw
            type: damage
            priority: 6
          - skill: Demon Vision
            type: cooldown
            priority: 1
          - skill: Piercing Thorn
            type: cooldown
            priority: 2
          - skill: Decimate
            type: cooldown
            priority: 3
          - skill: Demon's Grip
            type: cooldown
            priority: 4
          - skill: Demonic Clone
            type: cooldown
            priority: 5
        arkPassives:
          - name: Crit
            points: 10
            category: evolution
            tier: 1
          - name: Swiftness
            points: 30
            category: evolution
            tier: 1
          - name: Illicit Spell
            points: 2
            category: evolution
            tier: 2
          - name: Optimized Training
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
          - name: Blunt Thorn
            points: 2
            category: evolution
            tier: 5
          - name: Perfect Suppression
            points: 3
            category: enlightenment
            tier: 1
          - name: Shadowburst Control
            points: 3
            category: enlightenment
            tier: 2
          - name: Weapon Training
            points: 3
            category: enlightenment
            tier: 3
          - name: Shadowburst Absorption
            points: 2
            category: enlightenment
            tier: 3
          - name: Storm Grinding
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
          - name: Malicious Authority
            points: 3
            category: leap
            tier: 2
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Raid Captain
            priority: required
          - name: Cursed Doll
            priority: recommended
          - name: Hit Master
            priority: optional
          - name: Mass Increase
            priority: optional
        arkPassiveTips:
          - Blunt Thorn and max Swiftness are used due to the excess of Crit Rate gained from Ark Grid and Tripods.
        rotation:
          - Storm Grinding
          - Demon Vision
          - Piercing Thorn
          - Decimate
          - Demonic Clone
          - Wild Slash
          - Demon's Grip
---
