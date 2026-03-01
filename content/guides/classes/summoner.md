---
title: Summoner Guide
class: Mage
subclass: Summoner
class_id: 203
description: Complete guide to Summoner including Master Summoner and Communication Overflow builds with Ark Grid variants.
identity:
  name: Ancient Energy & Ancient Spirit Summons
  description: Summoner generates Ancient Energy orbs through normal skills to power Ancient Spirit Summons (Z). Manage your orb generation and summon timing to maintain consistent DPS through your ancient spirits.
synergy:
  name: Defense Reduction
  description: Reduces the defense of enemies through normal and summon skills.
  skills:
    - Sticky Moss Swamp
    - Elcid
builds:
  - name: Master Summoner
    engraving: Master Summoner
    description: High burst damage focused build with enhanced Ancient Spirit Summons (Z). Excellent utility with weakpoint, stagger, and mana support capabilities.
    playstyle: Build Ancient Energy through normal skills, then unleash powerful Ancient Spirit Summons (Z) during damage windows. Non-directional damage dealer.
    difficulty: medium
    preArkGrid:
      description: Pre-Ark Grid setup centered on fast Ancient Energy generation and dumping it into Ancient Spirit Summons (Z) for damage and utility.
      priorities:
        - Keep Shurdi active for Crit Rate and mana sustain.
        - Use Electric Storm, Water Elemental, and Steed Charge to fill Ancient Energy quickly.
        - Pair Ancient Spear with Earth Collapse to cancel long casts.
        - Prioritize damage gems on core spenders, then cooldown gems on generators.
        - Maintain Shurdi and Sticky Moss Swamp uptime for buffs and synergy.
        - Avoid overcapping Ancient Energy to maximize Ancient Spirit Summon (Z) casts.
      arkPassiveTips:
        - Focus on the main <untag>Enlightenment</untag> line before going for side nodes.
        - Consider running Release Potential over Transcendent Power in a longer fight.
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
        - name: Master Summoner
          points: 1
          category: enlightenment
          tier: 1
        - name: Mind Concentration
          points: 3
          category: enlightenment
          tier: 2
        - name: Ancient Strength
          points: 3
          category: enlightenment
          tier: 3
        - name: Ancient Wind
          points: 1
          category: enlightenment
          tier: 3
        - name: Ancient Blessing
          points: 3
          category: enlightenment
          tier: 4
        - name: Ancient Whisper
          points: 1
          category: enlightenment
          tier: 4
        - name: Transcendent Power
          points: 5
          category: leap
          tier: 1
        - name: Unleashed Power
          points: 5
          category: leap
          tier: 1
        - name: Enlightenment
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
        - name: Cursed Doll
          priority: required
        - name: Hit Master
          priority: recommended
        - name: Stabilized Status
          priority: optional
      skills:
        - name: Shurdi
          level: 11
          tripods:
            - Shining Growth
            - Stable Shurdi
            - MP Recovery
          rune: Bleed
          rune_rarity: legendary
          notes: |-
            **Self-Crit Rate buff, Party Mana Regen buff**
            - <tripod>Shining Growth</tripod> provides +11.8% Crit Rate to self, so prioritize maintaining its uptime.
            - <tripod>MP Recovery</tripod> also provides a generous mana regeneration buff to your entire party, which is very much appreciated.
        - name: Sticky Moss Swamp
          level: 7
          tripods:
            - Quick Prep
            - Corrosion Diffusion
          rune: Poison
          rune_rarity: legendary
          notes: |-
            **Synergy Application**
            - <tripod>Corrosion Diffusion</tripod> applies a -12% defense down synergy on enemies.
        - name: Ancient Spear
          level: 14
          tripods:
            - Swift Cast
            - Explosive Spear
            - Ancient Strength
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Main Damage Skill, Meter Generation Skill, High Stagger Skill, Weak Point Destruction**
            - This is your strongest damaging skill that generates a lot of meter, second only to Electric Storm.
            - It has a decently long cast time, so try not to miss.
        - name: Electric Storm
          level: 14
          tripods:
            - Magick Control
            - Growth Attack
            - Guiding Storm
          rune: Wealth
          rune_rarity: legendary
          notes: |-
            **Meter Generation Skill**
            - This is the highest meter generation skill.
            - This skill auto-targets enemies with <tripod>Guiding Storm</tripod>.
            - Keep this skill on cooldown to keep your identity gauge topped off.
        - name: Earth Collapse
          level: 14
          tripods:
            - Flame Collapse
            - Shake
            - Earth Manipulator
          rune: Wealth
          rune_rarity: rare
          notes: |-
            **Main Damage Skill, Meter Generation Skill, Weak Point Destruction.**
            - Just a simple ground target skill.
        - name: Steed Charge
          level: 14
          tripods:
            - Burning Sprint
            - Weak Point Detection
            - Destruction Charger
          rune: Wealth
          rune_rarity: epic
          notes: |-
            **High Stagger Skill, Meter Generation Skill**
            - <tripod>Burning Sprint</tripod> can be used over <tripod>Stormlike Gallop</tripod> if you overcap on Crit Rate from using it.
        - name: Water Elemental
          level: 10
          tripods:
            - MP Recovery
            - Weak Point Detection
            - Water Cannon
          rune: Wealth
          rune_rarity: epic
          notes: |-
            **Meter Generation Skill, Weak Point Destruction, Counter**
            - <tripod>MP Recovery</tripod> provides MP to yourself. Keep this on cooldown at all times so you don't run out of mana.
            - This has the highest meter generation of all your skills.
        - name: Released Will
          level: 10
          tripods:
            - Energy Control
            - Sand Wind
            - Storm Stampede
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Utility Skill, Mobility, Counter**
            - The only movement skill available to Summoner.
            - <tripod>Quick Pace</tripod> provides a decent movement speed increase.
        - name: Mariposa
          level_label: Hyper Awakening Technique
          notes: |-
            **Main Damage Skill, Weak Point Destruction**
            - This skill does a good amount of damage and is part of your burst rotation.
            - With Enlightenment, this skill casts zero Ancient Orbs.
        - name: Bagron's Wrath / Bagron's Frenzy
          icon: Bagron's Wrath
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Meter Generation Skill**
            - Bagron's Wrath generates almost two full bars of meter from both hits of the skill.
            - Make sure you immediately use an Ancient Spirit Summon after casting this skill to capitalize on the amount of meter the skill generates.
      gems:
        - skill: Ancient Elemental Skill
          alt-icon: Akir
          type: damage
          priority: 1
        - skill: Ancient Spear
          type: damage
          priority: 2
        - skill: Earth Collapse
          type: damage
          priority: 3
        - skill: Steed Charge
          type: damage
          priority: 4
        - skill: Ancient Spear
          type: cooldown
          priority: 1
        - skill: Electric Storm
          type: cooldown
          priority: 2
        - skill: Earth Collapse
          type: cooldown
          priority: 3
        - skill: Water Elemental
          type: cooldown
          priority: 4
        - skill: Steed Charge
          type: cooldown
          priority: 5
        - skill: Released Will
          type: cooldown
          priority: 6
        - skill: Shurdi
          type: cooldown
          priority: 7
      rotation:
        - Shurdi
        - Sticky Moss Swamp
        - Electric Storm
        - Water Elemental
        - Steed Charge
        - Ancient Spear
        - Earth Collapse
        - Released Will
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
    variants:
      - name: Ancient Legacy
        difficulty: 1
        recommended: true
        description: Ancient Spear-focused build where Ancient Spear becomes the majority of your damage. Ancient Spirits are relegated to stagger and destruction checks. Completely different playstyle from standard Master Summoner with higher critical stat allocation.
        stats: Critical 21/30, Swiftness 19/30
        arkgrid_cores: Ancient Legacy + Osh's Support + Power of Creation
        arkgrid_prose: |-
          Core priority is Power of Creation > Ancient Legacy > Osh's Support.
          Minimum: Sun 14 Moon 14 Star 17.
        priorities:
          - Ancient Spear is your primary damage skill, so maximize its uptime.
          - Make sure to always pair Ancient Spear and Earth Collapse, as Earth Collapse activates Destiny and Ancient Spear consumes the Destiny buff. Both skills have similar cooldowns.
          - Use Earth Collapse in the workshop to activate Destiny before going into a boss so your first Ancient Spear will be buffed.
          - Keep Shurdi off cooldown at all times for the Crit Rate buff.
          - Ancient Spirit Summons (Z) are primarily for utility (stagger/destruction).
          - Keep high uptime on synergy skills for party benefit.
        skills:
          - name: Shurdi
            level: 11
            tripods:
              - Shining Growth
              - Stable Shurdi
              - MP Recovery
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Self-Crit Rate buff, Party Mana Regen buff**
              - <tripod>Shining Growth</tripod> provides +11.8% Crit Rate to self, so prioritize maintaining its uptime.
              - <tripod>MP Recovery</tripod> also provides a generous mana regeneration buff to your entire party, which is very much appreciated.
          - name: Sticky Moss Swamp
            level: 7
            tripods:
              - Quick Prep
              - Corrosion Diffusion
            rune: Conviction
            rune_rarity: legendary
            notes: |-
              **Synergy Application**
              - <tripod>Corrosion Diffusion</tripod> applies a -12% defense down synergy on enemies.
          - name: Ancient Spear
            level: 14
            tripods:
              - Swift Cast
              - Explosive Spear
              - Condensed Strength
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, Meter Generation Skill, High Stagger Skill, Weak Point Destruction**
              - This is your strongest damaging skill by far on Ancient Legacy.
              - It has a decently long cast time, so try not to miss.
              - <tripod>Condensed Strength</tripod> changes this to a single Spear, so really, try not to miss with this.
          - name: Electric Storm
            level: 14
            tripods:
              - Magick Control
              - Growth Attack
              - Red Storm
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill**
              - This is your second highest damaging skill.
              - Unlike Specialization-focused versions, <tripod>Red Storm</tripod> does not auto-target enemies and must be targeted properly.
          - name: Earth Collapse
            level: 14
            tripods:
              - Flame Collapse
              - Shake
              - Earth Manipulator
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, Weak Point Destruction, Destiny Activation**
              - This skill activates Destiny.
              - Use this skill before entering a boss fight, as the Destiny buff is permanent and will buff your next Ancient Spear.
              
          - name: Steed Charge
            level: 14
            tripods:
              - Burning Sprint
              - Weak Point Detection
              - Destruction Charger
            rune: Overwhelm
            rune_rarity: legendary
            notes: |-
              **High Stagger Skill, Meter Generation Skill**
              - <tripod>Burning Sprint</tripod> can be used over <tripod>Stormlike Gallop</tripod> if you overcap on Crit Rate from using it.
          - name: Fleeting Gale Bird
            level: 14
            tripods:
              - Nimble Movement
              - Free Flight
              - Mother Gale Bird
            rune: Judgment
            rune_rarity: legendary
            notes: |-
              **Self-Speed buff, Meter Generation Skill**
              - Grants a sizeable movement speed buff with <tripod>Nimble Movement</tripod>.
              - You can build passive gauge from <tripod>Accumulated Energy</tripod> even without hitting any enemies.
          - name: Released Will
            level: 10
            tripods:
              - Quick Pace
              - Sand Wind
              - Storm Stampede
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Utility Skill, Mobility, Counter**
              - The only movement skill available to Summoner.
              - <tripod>Quick Pace</tripod> provides a decent movement speed increase.
          - name: Mariposa
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, Weak Point Destruction**
              - This skill does decent damage, but not a significant amount.
              - With Enlightenment, this skill casts zero Ancient Orbs.
          - name: Bagron's Wrath / Bagron's Frenzy
            icon: Bagron's Wrath
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Meter Generation Skill**
              - Bagron's Wrath generates some amount of gauge.
              - This Awakening is a little less important due to the fact that this build does not really use that much meter.
              - Can be used as an emergency meter generation skill, or just used off cooldown for its damage.
        gems:
          - skill: Ancient Spear
            type: damage
            priority: 1
          - skill: Electric Storm
            type: damage
            priority: 2
          - skill: Earth Collapse
            type: damage
            priority: 3
          - skill: Steed Charge
            type: damage
            priority: 4
          - skill: Fleeting Gale Bird
            type: damage
            priority: 5
          - skill: Ancient Spear
            type: cooldown
            priority: 1
          - skill: Electric Storm
            type: cooldown
            priority: 2
          - skill: Earth Collapse
            type: cooldown
            priority: 3
          - skill: Fleeting Gale Bird
            type: cooldown
            priority: 4
          - skill: Steed Charge
            type: cooldown
            priority: 5
          - skill: Released Will
            type: cooldown
            priority: 6
        dps_distribution:
          - name: Ancient Spear
            dmg: 63.6
          - name: Earth Collapse
            dmg: 9.1
          - name: Electric Storm
            dmg: 9.1
          - name: Fleeting Gale Bird
            dmg: 4.7
          - name: Mariposa
            dmg: 3.8
          - name: Steed Charge
            dmg: 3.6
          - name: Bagron's Frenzy
            dmg: 2.7
        arkPassives:
          - name: Crit
            points: 21
            category: evolution
            tier: 1
          - name: Swiftness
            points: 19
            category: evolution
            tier: 1
          - name: Boundless MP
            points: 2
            category: evolution
            tier: 2
          - name: Optimized Training
            points: 1
            category: evolution
            tier: 2
          - name: Unlimited Magick
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
          - name: Master Summoner
            points: 1
            category: enlightenment
            tier: 1
          - name: Mind Concentration
            points: 3
            category: enlightenment
            tier: 2
          - name: Ancient Strength
            points: 3
            category: enlightenment
            tier: 3
          - name: Ancient Wind
            points: 2
            category: enlightenment
            tier: 3
          - name: Ancient Blessing
            points: 3
            category: enlightenment
            tier: 4
          - name: Transcendent Power
            points: 5
            category: leap
            tier: 1
          - name: Unleashed Power
            points: 5
            category: leap
            tier: 1
          - name: Enlightenment
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Consider running Release Potential over Transcendent Power in a longer fight.
          - Aim for 1300 Crit and 1100 Swiftness in total.
        rotation:
          - Shurdi
          - Sticky Moss Swamp
          - Fleeting Gale Bird
          - Steed Charge
          - Ancient Spear
          - Earth Collapse
          - Electric Storm
      - name: Inherited Power
        difficulty: 2
        description: Focus on ONE specific Ancient Spirit Summon (Phoenix, Akir, or Jahia & Ligheas). This variant emphasizes maximizing damage from your chosen Ancient Spirit. Swap points from Ancient Whisper to Ancient Wind if you are not using Phoenix.
        stats: Specialization 30/30, Critical 10/30
        arkgrid_cores: Inherited Power + Concentration of Power + Balance of Power (Phoenix) | Inherited Power + Elemental Ring + Balance of Power (Akir) | Inherited Power + Elemental Ring + Elemental Guide (Jahia & Ligheas)
        arkgrid_prose: |-
          Core priority is Concentration of Power / Elemental Ring > Inherited Power > Balance of Power / Elemental Guide.
          Minimum: Sun 14 Moon 14 Star 10.
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Cursed Doll
            priority: required
          - name: Hit Master
            priority: recommended
          - name: Stabilized Status
            priority: optional
        priorities:
          - Time your Ancient Spirit Summons (Z) with boss damage windows.
          - Use Water Elemental for mana support and counters.
          - Keep high uptime on synergy skills for party benefit.
        skills:
          - name: Shurdi
            level: 11
            tripods:
              - Shining Growth
              - Stable Shurdi
              - MP Recovery
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Self-Crit Rate buff, Party Mana Regen buff**
              - <tripod>Shining Growth</tripod> provides +11.8% Crit Rate to self, so prioritize maintaining its uptime.
              - <tripod>MP Recovery</tripod> also provides a generous mana regeneration buff to your entire party, which is very much appreciated.
          - name: Sticky Moss Swamp
            level: 7
            tripods:
              - Quick Prep
              - Corrosion Diffusion
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Synergy Application, Destiny Activation**
              - <tripod>Corrosion Diffusion</tripod> applies a -12% defense down synergy on enemies.
              - This skill activates Destiny if you're running Concentration of Power.
          - name: Ancient Spear
            level: 14
            tripods:
              - Swift Cast
              - Explosive Spear
              - Ancient Strength
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, Meter Generation Skill, High Stagger Skill, Weak Point Destruction**
              - This is your strongest damaging skill that generates a lot of meter, second only to Electric Storm.
              - It has a decently long cast time, so try not to miss.
          - name: Electric Storm
            level: 14
            tripods:
              - Magick Control
              - Growth Attack
              - Guiding Storm
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Meter Generation Skill**
              - This is the highest meter generation skill.
              - This skill auto-targets enemies with <tripod>Guiding Storm</tripod>.
              - Keep this skill on cooldown to keep your identity gauge topped off.
          - name: Earth Collapse
            level: 14
            tripods:
              - Flame Collapse
              - Shake
              - Earth Manipulator
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Main Damage Skill, Meter Generation Skill, Weak Point Destruction.**
              - Just a simple ground target skill.
          - name: Steed Charge
            level: 14
            tripods:
              - Burning Sprint
              - Weak Point Detection
              - Destruction Charger
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **High Stagger Skill, Meter Generation Skill**
              - <tripod>Burning Sprint</tripod> can be used over <tripod>Stormlike Gallop</tripod> if you overcap on Crit Rate from using it.
          - name: Water Elemental
            level: 10
            tripods:
              - MP Recovery
              - Weak Point Detection
              - Water Cannon
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Meter Generation Skill, Weak Point Destruction, Counter**
              - <tripod>MP Recovery</tripod> provides MP to yourself. Keep this on cooldown at all times so you don't run out of mana.
              - This has the highest meter generation of all your skills.
          - name: Released Will
            level: 10
            tripods:
              - Energy Control
              - Sand Wind
              - Storm Stampede
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Utility Skill, Mobility, Counter**
              - The only movement skill available to Summoner.
              - <tripod>Quick Pace</tripod> provides a decent movement speed increase.
          - name: Mariposa
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, Weak Point Destruction**
              - This skill does a good amount of damage and is part of your burst rotation.
              - With Enlightenment, this skill casts zero Ancient Orbs.
          - name: Bagron's Wrath / Bagron's Frenzy
            icon: Bagron's Wrath
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Meter Generation Skill**
              - Bagron's Wrath generates almost two full bars of meter from both hits of the skill.
              - Make sure you immediately use an Ancient Spirit Summon after casting this skill to capitalize on the amount of meter the skill generates.
        gems:
          - skill: Ancient Elemental Skill
            alt-icon: Akir
            type: damage
            priority: 1
          - skill: Ancient Spear
            type: damage
            priority: 2
          - skill: Earth Collapse
            type: damage
            priority: 3
          - skill: Steed Charge
            type: damage
            priority: 4
          - skill: Ancient Spear
            type: cooldown
            priority: 1
          - skill: Electric Storm
            type: cooldown
            priority: 2
          - skill: Earth Collapse
            type: cooldown
            priority: 3
          - skill: Water Elemental
            type: cooldown
            priority: 4
          - skill: Steed Charge
            type: cooldown
            priority: 5
          - skill: Released Will
            type: cooldown
            priority: 6
          - skill: Shurdi
            type: cooldown
            priority: 7
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
          - name: Master Summoner
            points: 1
            category: enlightenment
            tier: 1
          - name: Mind Concentration
            points: 3
            category: enlightenment
            tier: 2
          - name: Ancient Strength
            points: 3
            category: enlightenment
            tier: 3
          - name: Ancient Wind
            points: 1
            category: enlightenment
            tier: 3
          - name: Ancient Blessing
            points: 3
            category: enlightenment
            tier: 4
          - name: Ancient Whisper
            points: 1
            category: enlightenment
            tier: 4
          - name: Transcendent Power
            points: 5
            category: leap
            tier: 1
          - name: Unleashed Power
            points: 5
            category: leap
            tier: 1
          - name: Enlightenment
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Consider running Release Potential over Transcendent Power in a longer fight.
          - Swap Ancient Whisper to Ancient Wind when running Jahia & Ligheas.
        rotation:
          - Electric Storm
          - Water Elemental
          - Steed Charge
          - Ancient Spear
          - Earth Collapse
          - Maririn
          - Released Will
      - name: Power Circulation
        difficulty: 2
        description: Avatar-cycle build where using one Ancient Spirit Summon (Z) automatically cycles to the next and buffs it. Cycle order is Osh > Alimaji > Phoenix > Jahia & Ligheas > Akir, then loops back. You can swap Ancient Spirit Summons manually, but breaking the order loses the damage bonus.
        stats: Specialization 30/30, Critical 10/30
        arkgrid_cores: Power Circulation + Elemental Ring + Elemental Guide
        arkgrid_prose: |-
          Core priority is Elemental Ring > Power Circulation > Elemental Guide.
          Minimum: Sun 14 Moon 14 Star 10.
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Cursed Doll
            priority: required
          - name: Hit Master
            priority: recommended
          - name: Stabilized Status
            priority: optional
        priorities:
          - Follow the cycle order to maintain damage buffs.
          - Keep Shurdi off cooldown at all times for the Crit Rate buff.
          - Use Osh in the workshop to activate Destiny so Alimaji will be buffed next.
          - Can swap Ancient Spirit Summons (Z) anytime but breaks the damage bonus.
          - Core playstyle remains build gauge and spend gauge.
          - Keep high uptime on synergy skills for party benefit.
        skills:
          - name: Shurdi
            level: 11
            tripods:
              - Shining Growth
              - Stable Shurdi
              - MP Recovery
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Self-Crit Rate buff, Party Mana Regen buff**
              - <tripod>Shining Growth</tripod> provides +11.8% Crit Rate to self, so prioritize maintaining its uptime.
              - <tripod>MP Recovery</tripod> also provides a generous mana regeneration buff to your entire party, which is very much appreciated.
          - name: Sticky Moss Swamp
            level: 7
            tripods:
              - Quick Prep
              - Corrosion Diffusion
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Synergy Application**
              - <tripod>Corrosion Diffusion</tripod> applies a -12% defense down synergy on enemies.
          - name: Ancient Spear
            level: 14
            tripods:
              - Swift Cast
              - Explosive Spear
              - Ancient Strength
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, Meter Generation Skill, High Stagger Skill, Weak Point Destruction**
              - This is your strongest damaging skill that generates a lot of meter, second only to Electric Storm.
              - It has a decently long cast time, so try not to miss.
          - name: Electric Storm
            level: 14
            tripods:
              - Magick Control
              - Growth Attack
              - Guiding Storm
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Meter Generation Skill**
              - This is the highest meter generation skill.
              - This skill auto-targets enemies with <tripod>Guiding Storm</tripod>.
              - Keep this skill on cooldown to keep your identity gauge topped off.
          - name: Earth Collapse
            level: 14
            tripods:
              - Flame Collapse
              - Shake
              - Earth Manipulator
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Main Damage Skill, Meter Generation Skill, Weak Point Destruction.**
              - Just a simple ground target skill.
          - name: Steed Charge
            level: 14
            tripods:
              - Burning Sprint
              - Weak Point Detection
              - Destruction Charger
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **High Stagger Skill, Meter Generation Skill**
              - <tripod>Burning Sprint</tripod> can be used over <tripod>Stormlike Gallop</tripod> if you overcap on Crit Rate from using it.
          - name: Water Elemental
            level: 10
            tripods:
              - MP Recovery
              - Weak Point Detection
              - Water Cannon
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Meter Generation Skill, Weak Point Destruction, Counter**
              - <tripod>MP Recovery</tripod> provides MP to yourself. Keep this on cooldown at all times so you don't run out of mana.
              - This has the highest meter generation of all your skills.
          - name: Released Will
            level: 10
            tripods:
              - Energy Control
              - Sand Wind
              - Storm Stampede
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Utility Skill, Mobility, Counter**
              - The only movement skill available to Summoner.
              - <tripod>Quick Pace</tripod> provides a decent movement speed increase.
          - name: Mariposa
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, Weak Point Destruction**
              - This skill does a good amount of damage and is part of your burst rotation.
              - With Enlightenment, this skill casts zero Ancient Orbs.
          - name: Bagron's Wrath / Bagron's Frenzy
            icon: Bagron's Wrath
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Meter Generation Skill**
              - Bagron's Wrath generates almost two full bars of meter from both hits of the skill.
              - Make sure you immediately use an Ancient Spirit Summon after casting this skill to capitalize on the amount of meter the skill generates.
        gems:
          - skill: Ancient Elemental Skill
            alt-icon: Akir
            type: damage
            priority: 1
          - skill: Ancient Spear
            type: damage
            priority: 2
          - skill: Earth Collapse
            type: damage
            priority: 3
          - skill: Steed Charge
            type: damage
            priority: 4
          - skill: Ancient Spear
            type: cooldown
            priority: 1
          - skill: Electric Storm
            type: cooldown
            priority: 2
          - skill: Earth Collapse
            type: cooldown
            priority: 3
          - skill: Water Elemental
            type: cooldown
            priority: 4
          - skill: Steed Charge
            type: cooldown
            priority: 5
          - skill: Released Will
            type: cooldown
            priority: 6
          - skill: Shurdi
            type: cooldown
            priority: 7
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
          - name: Master Summoner
            points: 1
            category: enlightenment
            tier: 1
          - name: Mind Concentration
            points: 3
            category: enlightenment
            tier: 2
          - name: Ancient Strength
            points: 3
            category: enlightenment
            tier: 3
          - name: Ancient Wind
            points: 1
            category: enlightenment
            tier: 3
          - name: Ancient Blessing
            points: 3
            category: enlightenment
            tier: 4
          - name: Ancient Whisper
            points: 1
            category: enlightenment
            tier: 4
          - name: Transcendent Power
            points: 5
            category: leap
            tier: 1
          - name: Unleashed Power
            points: 5
            category: leap
            tier: 1
          - name: Enlightenment
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Consider running Release Potential over Transcendent Power in a longer fight.
        rotation:
          - Electric Storm
          - Water Elemental
          - Steed Charge
          - Osh
          - Alimaji
          - Phoenix
          - Jahia & Ligheas
          - Akir
  - name: Communication Overflow
    engraving: Communication Overflow
    description: Extremely high uptime build that transforms Akir into Akir Burst, a pet-buffing ability. Highest damage potential with flexible stat allocation.
    playstyle: Maintain constant uptime with your pet summons, and cast Akir Burst to buff them. Non-directional with flexible positioning.
    difficulty: hard
    preArkGrid:
      description: Pre-Ark Grid setup focused on keeping pets active and maximizing Akir Burst uptime before Ark Grid passives.
      priorities:
        - Make sure your pets are always active on the field.
        - Keep Shurdi off cooldown at all times for the Crit Rate buff.
        - Use pet Command Skills during other casts.
        - Reposition Winged Spirit and Elcid when the boss moves.
        - Keep high uptime on synergy skills for party benefit.
      arkPassiveTips:
        - Focus on the main <untag>Enlightenment</untag> line before going for side nodes.
        - Crit, Specialization and Swiftness can adjusted to your taste, but try to keep above 400 Crit, 400 Specialization and 1500 Swiftness, or less if you're not using Raid Captain, or using the Ancient Wind side node.
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
        - name: Hit Master
          priority: optional
      skills:
        - name: Pauru
          level: 14
          tripods:
            - Weak Point Detection
            - Atk. Power Enhancement
            - Blue Flame Pauru
          rune: Wealth
          rune_rarity: rare
          notes: |-
            **Main Damage Skill, Weak Point Destruction**
            - Use the active skill off cooldown.
        - name: Maririn
          level: 14
          tripods:
            - Atk. Power Enhancement
            - Stagger Command
            - Elemental Blessing
          rune: Poison
          rune_rarity: legendary
          notes: |-
            **Main Damage Skill**
            - Use the active skill off cooldown.
        - name: Shurdi
          level: 12
          tripods:
            - Shining Growth
            - Bulky Shurdi
            - Thrilling Light
          rune: Bleed
          rune_rarity: legendary
          notes: |-
            **Main Damage Skill, Self-Crit Rate buff**
            - <tripod>Shining Growth</tripod> provides +11.8% Crit Rate to self, so prioritize maintaining its uptime.
        - name: Elcid
          level: 13
          tripods:
            - Corrosive Explosion
            - Homing Seeds
            - Elite Summoning
          rune: Wealth
          rune_rarity: epic
          notes: |-
            **Main Damage Skill, Synergy Application**
            - <tripod>Corrosive Explosion</tripod> applies -12% defense down synergy on enemies.
            - Elcid is entirely stationary, so you may need to resummon her if the boss moves out of range.
            - <tripod>Deadly Poison Seed</tripod> has higher DPS, but is a lot less consistent on highly mobile bosses.
        - name: Winged Spirit
          level: 11
          tripods:
            - Magick Enhancement
            - Thunder Spirit
            - Turning Attack
          rune: Wealth
          rune_rarity: rare
          notes: |-
            **Minor Damage Skill**
            - Long-lasting stationary summon.
            - Be alert and reposition this skill as the boss moves.
        - name: Fleeting Gale Bird
          level: 11
          tripods:
            - Accumulated Energy
            - Free Flight
            - Mother Gale Bird
          rune: Wealth
          rune_rarity: rare
          notes: |-
            **Main Damage Skill, Meter Generation Skill**
            - You can build passive gauge from <tripod>Accumulated Energy</tripod> even without hitting any enemies.
        - name: Steed Charge
          level: 11
          tripods:
            - Stormlike Gallop
            - Weak Point Detection
            - Destruction Charger
          rune: Wealth
          rune_rarity: epic
          notes: |-
            **High Stagger Skill, Meter Generation Skill**
            - <tripod>Burning Sprint</tripod> can be used over <tripod>Stormlike Gallop</tripod> if you overcap on Crit Rate from using it.
        - name: Water Elemental
          level: 10
          tripods:
            - MP Recovery
            - Weak Point Detection
            - Water Cannon
          rune: Wealth
          rune_rarity: legendary
          notes: |-
            **Meter Generation Skill, Weak Point Destruction, Counter**
            - <tripod>MP Recovery</tripod> provides MP to yourself. Keep this on cooldown at all times so you don't run out of mana.
            - This has the highest meter generation of all your skills.
        - name: Igna
          level_label: Hyper Awakening Technique
          notes: |-
            **Main Damage Skill**
            - Make sure you have Akir Burst when Igna is up, as Igna gains a huge damage boost from Akir Burst.
        - name: Kelsion / Judge Kelsion
          icon: Kelsion
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Main Damage Skill**
            - Make sure you have Akir Burst when Kelsion is up, as Kelsion gains a huge damage boost from Akir Burst.
            - Use the Command Skill as soon as it comes up, as it does a lot of damage.
            - Kelsion lasts for 24s, so you should be only using this when you know the boss will not be leaving in that period of time.
      gems:
        - skill: Maririn
          type: damage
          priority: 1
        - skill: Pauru
          type: damage
          priority: 2
        - skill: Elcid
          type: damage
          priority: 3
        - skill: Shurdi
          type: damage
          priority: 4
        - skill: Steed Charge
          type: damage
          priority: 5
        - skill: Winged Spirit
          type: damage
          priority: 6
        - skill: Fleeting Gale Bird
          type: damage
          priority: 7
        - skill: Water Elemental
          type: cooldown
          priority: 1
        - skill: Steed Charge
          type: cooldown
          priority: 2
        - skill: Fleeting Gale Bird
          type: cooldown
          priority: 3
        - skill: Winged Spirit
          type: cooldown
          priority: 4
      rotation_sections:
        - title: Priority
          steps:
            - Shurdi
            - Igna
            - Maririn
            - Pauru
            - Elcid
            - Water Elemental
            - Winged Spirit
            - Steed Charge
            - Fleeting Gale Bird
        - title: Burst Rotation
          steps:
            - Shurdi
            - Maririn
            - Pauru
            - Elcid
            - Igna
            - Akir Burst
            - Kelsion
            - Igna - Breath
            - Kelsion - Thundercrack
            - Pauru - Flame Breath
            - Water Elemental
            - Winged Spirit
            - Steed Charge
            - Fleeting Gale Bird
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
      - name: Hit Master
        priority: optional
    variants:
      - name: !!str 113
        recommended: true
        description: Extremely high uptime build that transforms Akir into Akir Burst, a pet-buffing ability. Highest damage potential with flexible stat allocation. This Ark Grid setup has a general buff to all its skills, but Tactical Command itself nerfs the Command Skill damage of Maririn on <tripod>Stagger Command</tripod>. Maririn's Command Skill is only used for stagger checks.
        stats: Crit 10/30, Specialization 6/30, Swiftness 24/30
        arkgrid_cores: Elemental Entwinement + Amplified Entwinement + Tactical Command
        arkgrid_prose: |-
          Core priority is Amplified Entwinement > Elemental Entwinement > Tactical Command.
          Minimum: Sun 14 Moon 14 Star 10.
        priorities:
          - Keep your pet summons active at all times.
          - Only resummon your pets when their summon duration expires, as they have a wind-up time before they start attacking after being summoned.
          - Akir Burst pauses summon timers via Elemental Burst, so pets don't need to be resummoned strictly off cooldown.
          - Keep Shurdi active at all times, but not necessarily summon him off cooldown.
          - Refresh Akir Burst as soon as the buff ends.
          - Do not use Maririn's Command Skill, as it does no damage.
          - Reposition Winged Spirit and Elcid when the boss moves.
          - Keep high uptime on synergy skills for party benefit.
        skills:
          - name: Steed Charge
            level: 11
            tripods:
              - Stormlike Gallop
              - Weak Point Detection
              - Destruction Charger
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **High Stagger Skill, Meter Generation Skill**
              - <tripod>Burning Sprint</tripod> can be used over <tripod>Stormlike Gallop</tripod> if you overcap on Crit Rate from using it.
          - name: Fleeting Gale Bird
            level: 11
            tripods:
              - Accumulated Energy
              - Free Flight
              - Mother Gale Bird
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Main Damage Skill, Meter Generation Skill**
              - You can build passive gauge from <tripod>Accumulated Energy</tripod> even without hitting any enemies.
          - name: Elcid
            level: 13
            tripods:
              - Corrosive Explosion
              - Homing Seeds
              - Elite Summoning
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Main Damage Skill, Synergy Application**
              - <tripod>Corrosive Explosion</tripod> applies -12% defense down synergy on enemies.
              - Elcid is entirely stationary, so you may need to resummon her if the boss moves out of range.
              - <tripod>Deadly Poison Seed</tripod> has higher DPS, but is a lot less consistent on highly mobile bosses.
          - name: Pauru
            level: 14
            tripods:
              - Weak Point Detection
              - Atk. Power Enhancement
              - Blue Flame Pauru
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Main Damage Skill, Weak Point Destruction**
              - Use the active skill off cooldown.
          - name: Maririn
            level: 14
            tripods:
              - Atk. Power Enhancement
              - Stagger Command
              - Elemental Blessing
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, High Stagger Skill**
              - Do not use the active skill off cooldown and only use it on stagger checks, as it does no damage due to Tactical Command core.
          - name: Shurdi
            level: 12
            tripods:
              - Shining Growth
              - Bulky Shurdi
              - Thrilling Light
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, Self-Crit Rate buff, Destiny Activation**
              - <tripod>Shining Growth</tripod> provides +11.8% Crit Rate to self, so prioritize maintaining its uptime.
              - Shurdi applies the Destiny buff.
          - name: Winged Spirit
            level: 11
            tripods:
              - Magick Enhancement
              - Thunder Spirit
              - Turning Attack
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Minor Damage Skill**
              - Long-lasting stationary summon.
              - Be alert and reposition this skill as the boss moves.
          - name: Water Elemental
            level: 10
            tripods:
              - MP Recovery
              - Weak Point Detection
              - Water Cannon
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Meter Generation Skill, Weak Point Destruction, Counter**
              - <tripod>MP Recovery</tripod> provides MP to yourself. Keep this on cooldown at all times so you don't run out of mana.
              - This has the highest meter generation of all your skills.
          - name: Igna
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill**
              - Make sure you have Akir Burst when Igna is up, as Igna gains a huge damage boost from Akir Burst.
          - name: Kelsion / Judge Kelsion
            icon: Kelsion
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Main Damage Skill**
              - Make sure you have Akir Burst when Kelsion is up, as Kelsion gains a huge damage boost from Akir Burst.
              - Use the Command Skill as soon as it comes up, as it does a lot of damage.
              - Kelsion lasts for 24s, so you should be only using this when you know the boss will not be leaving in that period of time.
        gems:
          - skill: Maririn
            type: damage
            priority: 1
          - skill: Pauru
            type: damage
            priority: 2
          - skill: Elcid
            type: damage
            priority: 3
          - skill: Shurdi
            type: damage
            priority: 4
          - skill: Steed Charge
            type: damage
            priority: 5
          - skill: Winged Spirit
            type: damage
            priority: 6
          - skill: Fleeting Gale Bird
            type: damage
            priority: 7
          - skill: Water Elemental
            type: cooldown
            priority: 1
          - skill: Steed Charge
            type: cooldown
            priority: 2
          - skill: Fleeting Gale Bird
            type: cooldown
            priority: 3
          - skill: Winged Spirit
            type: cooldown
            priority: 4
        dps_distribution:
          - name: Maririn
            dmg: 18.4
          - name: Pauru
            dmg: 13.4
          - name: Elcid
            dmg: 11.4
          - name: Igna
            dmg: 11.1
          - name: Winged Spirit
            dmg: 10.7
          - name: Shurdi
            dmg: 9.7
          - name: Fleeting Gale Bird
            dmg: 7.8
          - name: Steed Charge
            dmg: 7.2
          - name: Judge Kelsion
            dmg: 2.4
        rotation_sections:
          - title: Priority
            steps:
              - Shurdi
              - Igna
              - Maririn
              - Pauru
              - Elcid
              - Water Elemental
              - Winged Spirit
              - Steed Charge
              - Fleeting Gale Bird
          - title: Burst Rotation
            steps:
              - Shurdi
              - Maririn
              - Pauru
              - Elcid
              - Igna
              - Akir Burst
              - Kelsion
              - Igna - Breath
              - Kelsion - Thundercrack
              - Pauru - Flame Breath
              - Water Elemental
              - Winged Spirit
              - Steed Charge
              - Fleeting Gale Bird
        arkPassives:
          - name: Crit
            points: 10
            category: evolution
            tier: 1
          - name: Specialization
            points: 6
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
          - name: Communication Overflow
            points: 3
            category: enlightenment
            tier: 1
          - name: Cleverness
            points: 3
            category: enlightenment
            tier: 2
          - name: Communication Enhancement
            points: 1
            category: enlightenment
            tier: 3
          - name: Elemental's Harmony
            points: 3
            category: enlightenment
            tier: 3
          - name: Ancient Wind
            points: 1
            category: enlightenment
            tier: 3
          - name: Elemental Burst
            points: 3
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
          - name: Igna's Breath
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Crit, Specialization and Swiftness can adjusted to your taste, but try to keep above 400 Crit, 400 Specialization and 1500 Swiftness, or less if you're not using Raid Captain, or using the Ancient Wind side node.
          - Consider running Release Potential over Transcendent Power in a longer fight.
---
