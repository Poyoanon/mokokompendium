---
title: Valkyrie Guide
class: Warrior (Female)
subclass: Valkyrie
class_id: 113
description: Complete guide to Valkyrie including Liberator (Support) and Shining Knight (DPS) builds with Ark Grid variants.
identity:
  name: Piety Meter
  description: Liberator Valkyrie generates Piety Meter with Holy Blade and Protection skills. Release Light (Z) is a 10% party damage buff for 12 seconds, and Light of the Faithful (X) heals based on Release Light casts since the previous heal.
synergy:
  name: Target Weak Point
  description: Increases damage dealt to target on critical hit by 8.0%.
  skills:
    - Foresight Slash
    - Lunging Stab
    - Shining Knight
builds:
  - name: Liberator (support)
    engraving: Liberator
    description: Support build with great all-around buffing and utility (shielding, damage mitigation, healing, counter, stagger, destruction).
    playstyle: Prevent damage to party members while upkeeping major important damage buffs.
    difficulty: easy
    identity:
      name: Liberator - Piety Meter
      description: Liberator Valkyrie generates Piety Meter with Holy Blade and Protection skills. Release Light (Z) is a 10% party damage buff for 12 seconds. Light of the Faithful (X) heals for 10/20/30% max HP based on how many Release Light casts have occurred since the previous heal, stacking up to 3 times.
    synergy:
      name: Attack Power Buff
      description: Atk. Power Bonus +10%.
      skills:
        - Seraphic Oath
        - Seraphic Leap
    preArkGrid:
      description: Pre and Post Ark Grid setup play nearly identically, the only major difference is that Pre-Ark Grid build has only one stack on Requiem Ash, thus having less burst identity meter gain.
      priorities:
        - Properly cycle main damage buffs, including Attack Power Buff (Seraphic Oath/Seraphic Leap), Brand (Circle of Truth/Truth's Decree), Identity Buff (Release Light), and T-Skill buff (Divine Confirmation).
        - Generate Piety Meter by cycling major meter generation skills as often as possible (Requiem Ash, Requiem Rain), as well as gaining meter over time from party buff skills (Seraphic Oath, Divine Confirmation).
        - Protect your party from major damage with Shielding skills (Blessing of Salvation, Seraphic Oath) and Damage Reduction skills (Salvation Site).
      arkPassives:
        - name: Specialization
          points: 10
          category: evolution
          tier: 1
        - name: Swiftness
          points: 30
          category: evolution
          tier: 1
        - name: Goddess of Blessings
          points: 3
          category: evolution
          tier: 2
        - name: Passionate Dance
          points: 2
          category: evolution
          tier: 3
        - name: Luminary
          points: 1
          category: evolution
          tier: 4
        - name: Prayer
          points: 1
          category: evolution
          tier: 4
        - name: Standing Striker
          points: 2
          category: evolution
          tier: 5
        - name: Liberator
          points: 1
          category: enlightenment
          tier: 1
        - name: Vitality
          points: 3
          category: enlightenment
          tier: 2
        - name: Divine Plan
          points: 3
          category: enlightenment
          tier: 3
        - name: Brilliant Bladecraft
          points: 1
          category: enlightenment
          tier: 3
        - name: Wings of Freedom
          points: 3
          category: enlightenment
          tier: 4
        - name: Liberator's Sign
          points: 1
          category: enlightenment
          tier: 4
        - name: Charged Fury
          points: 2
          category: leap
          tier: 1
        - name: Awakening Amplifier
          points: 3
          category: leap
          tier: 1
        - name: Release Potential
          points: 5
          category: leap
          tier: 1
        - name: Instant Spell
          points: 3
          category: leap
          tier: 1
        - name: Miracle
          points: 3
          category: leap
          tier: 2
      engravings:
        - name: Awakening
          priority: required
        - name: Magick Stream
          priority: required
        - name: Drops of Ether
          priority: required
        - name: Expert
          priority: required
        - name: Vital Point Hit
          priority: optional
        - name: Max MP Increase
          priority: optional
        - name: Explosive Expert
          priority: optional
        - name: Heavy Armor
          priority: optional          
      skills:
        - name: Seraphic Oath
          level: 14
          tripods:
            - Light of Salvation
            - Boundless Blessings
            - Charge!
          rune: Quick Recharge
          rune_rarity: epic
          notes: |-
            **Attack Power Buff, Party Shield Skill, Secondary Meter Generation Skill**
            - <tripod>Light of Salvation</tripod> provides 15% Max HP shield to party for 5 seconds.
            - MAIN PRIORITY skill to cycle along with Seraphic Leap.
        - name: Seraphic Leap
          level: 14
          tripods:
            - Tenacity
            - Magick Blessing
            - Boundless Blessings
          rune: Quick Recharge
          rune_rarity: rare
          notes: |-
            **Attack Power Buff, Party Attack Speed/MP Recovery Buff, Party Damage Reduction Buff, Push Immunity, Weak Point Destruction, Mobility**
            - <tripod>Magick Blessing</tripod> grants Attack Speed +8% and MP Recovery +50% to party members for 8 seconds.  NEVER remove this unless playing with full attack speed capped + MP-less classes.
            - MAIN PRIORITY skill to cycle along with Seraphic Oath.
        - name: Requiem Ash
          level: 14
          tripods:
            - Swift Fingers
            - Summary Execution
            - Execution
          rune: Wealth
          rune_rarity: legendary
          notes: |-
            **Primary Meter Generation Skill, High Stagger Skill, Weak Point Destruction**
            - Grants the largest amount of Piety Meter on hit, so prioritize casting/hitting this skill.
            - <tripod>Magick Control</tripod> can be taken if you run into MP issues.
        - name: Requiem Rain
          level: 14
          tripods:
            - Swift Fingers
            - Light of Destiny
            - Advent Light
          rune: Wealth
          rune_rarity: epic
          notes: |-
            **Primary Meter Generation Skill, Mid-high Stagger Skill, Stacking Skill**
            - Grants the second largest amount of Piety Meter on hit, so prioritize casting/hitting this skill.
            - <tripod>Advent Light</tripod> grants an additional stack to this skill, increasing burst Piety Meter generation significantly.  Ensure that this skill never sits at 2/2 stacks unless Piety Meter is already full.
            - <tripod>Magick Control</tripod> can be taken if you run into MP issues.
        - name: Sword of Revelation
          level: 10
          tripods:
            - Concussion
            - Faith
            - Double Cross
          rune: Wealth
          rune_rarity: rare
          notes: |-
            **Secondary Meter Generation Skill, Counter**
            - <tripod>Double Cross</tripod> grants an additional stack to this skill.  Always keep one stack off cooldown in case you need to counter.
            - <tripod>Weak Point Enhancement</tripod> can be taken if extra Weak Point Destruction is necessary.
        - name: Salvation Site
          level: 10
          tripods:
            - Steady Stance
            - Light of Salvation
            - Guardian
          rune: Quick Recharge
          rune_rarity: rare
          notes: |-
            **Damage Reduction Skill, Party Shield Skill, Push Immunity, Mobility**
            - Strongest Damage Reduction skill, can be used to protect party members from a large amount of damage, especially if paired with other shielding skills.  Do not be afraid to dash into danger to save a teammate with this skill.
            - <tripod>Guardian</tripod> grants status immunity to yourself (not your party) until the first instance of damage taken.  Once you are hit, the duration of the skill resets but you are no longer status immune, only push immune.
            - <tripod>Excellent Mobility</tripod> can be taken for increased mobility if the longer duration is not necessary.
        - name: Blessing of Salvation
          level: 14
          tripods:
            - Swift Fingers
            - Purifying Shield
            - Grace of Protection
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Party Shield Skill, Purify Skill**
            - <tripod>Purifying Shield</tripod> removes one debuff from all party members, make sure to take this if there are important debuffs to cleanse.
            - <tripod>Sheltering Shield</tripod> can be taken for 20% damage reduction for gates that do not require a cleanse skill.
            - <tripod>Grace of Protection</tripod> increases the shield effectiveness by 50%, and duration by 2 seconds.  Preferable over <Grace of Recovery> as Valkyrie already has an on demand heal with Light of the Faithful as well as a small heal on Release Light.
        - name: Circle of Truth
          level: 10
          tripods:
            - Insight
            - Light's Vestige
            - Tracker Shield
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **PICK ONE BRAND**
            - Lower maintenance brand skill than Truth's Decree (lasts 16 seconds).  Slightly lower efficiency on Quick Recharge, as well as no paralysis immunity, but still recommended as it is just so much easier to upkeep.
            - <tripod>Tracker Shield</tripod> makes this skill auto track the boss.  Very helpful for bosses that move alot.  You can opt for <tripod>Giant Shield</tripod> for a significantly larger, but unmoving brand on less mobile bosses.
        - name: Truth's Decree
          level: 10
          tripods:
            - Swift Fingers
            - Light's Vestige
            - Resonance
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **PICK ONE BRAND**
            - Lower cooldown, lower duration brand skill than Circle of Truth.  Has paralysis immunity and has a slightly higher damage ceiling, but is higher maintenance.  Not recommended unless you are already consistently hitting near 100% brand uptime.
        - name: Divine Confirmation
          level_label: Hyper Awakening Technique
          notes: |-
            **Damage Buff Skill, Meter Generation Skill**
            - Grants +10% damage buff to party for 10 seconds, as well as Hyper Awakening Skill Damage +20% for 20 seconds.
            - With Miracle leap node, grants +12% Piety meter.
            - Try to cycle this skill as often as possible for meter generation and the damage buff, as long as the boss is DPSable.  Benefits greatly from Quick Recharge procs while on cooldown.
        - name: Brundia's Ritual / Brundia's Sanctuary
          icon: Brundia's Ritual
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Meter Generation Skill, Party Shield Skill**
            - Grants a 100% Max HP shield to party, as well as nearly fills Piety Meter to full.
            - Try to balance using this skill for party protection as well as for efficient meter generation (try not to overcap Piety Meter using this skill).
            - Hyper Awakening variant also grants crisis evasion buff to party for 30 seconds.
      gems:
        - skill: Piety Skill
          type: damage
          priority: 1
        - skill: Seraphic Oath
          type: damage
          priority: 2
        - skill: Seraphic Leap
          type: damage
          priority: 3
        - skill: Seraphic Leap
          type: cooldown
          priority: 1
        - skill: Requiem Ash
          type: cooldown
          priority: 2
        - skill: Requiem Rain
          type: cooldown
          priority: 3
        - skill: Blessing of Salvation
          type: cooldown
          priority: 4
        - skill: Sword of Revelation
          type: cooldown
          priority: 5
        - skill: Salvation Site
          type: cooldown
          priority: 6
        - skill: Circle of Truth
          type: cooldown
          priority: 7
        - skill: Seraphic Oath
          type: cooldown
          priority: 8
      rotation:
        - Seraphic Oath
        - Release Light
        - Divine Confirmation
        - Requiem Rain
        - Requiem Ash
        - Circle of Truth
        - Sword of Revelation
        - Requiem Rain
        - Seraphic Leap
    engravings:
      - name: Awakening
        priority: required
      - name: Magick Stream
        priority: required
      - name: Drops of Ether
        priority: required
      - name: Expert
        priority: required
      - name: Vital Point Hit
        priority: optional
      - name: Max MP Increase
        priority: optional
      - name: Explosive Expert
        priority: optional
      - name: Heavy Armor
        priority: optional 
    variants:
      - name: Ark Grid Standard Build
        difficulty: 1
        recommended: true
        description: Standard support Valkyrie build.  Plays nearly identically to pre-ark grid build, but with an extra stack of Requiem Ash and stronger buffing power.
        stats: Specialization 10/30, Swiftness 30/30
        arkgrid_cores: Light Carves Life + Break of Dawn + Holy Blade's Ashes
        arkgrid_prose: |-
          Prioritize Holy Blade's Ashes > Break of Dawn > Light Carves Life.
          In theory, minimum is 14p on each, but you really want to get to 17p each.
          Every combination of Sun/Moon core is viable, however Sacred Oath/Pledge of Salvation (identity core) will always generally be the weakest option.  Light's Grace/Epic of Light (AP core) and Light Carves Life/Break of Dawn (T core) are fairly comparable, the breakpoint for T core being stronger is around 45-50% uptime on T skill buff.  If you find yourself consistently below that benchmark, then opt for one or both of the AP cores.  
          Any Sun or Moon Ancient core will outperform all of the relic variants, even if it is the suboptimal core.
        priorities:
          - Properly cycle main damage buffs, including Attack Power Buff (Seraphic Oath/Seraphic Leap), Brand (Circle of Truth/Truth's Decree), Identity Buff (Release Light), and T-Skill buff (Divine Confirmation).
          - Generate Piety Meter by cycling major meter generation skills as often as possible (Requiem Ash, Requiem Rain), as well as gaining meter over time from party buff skills (Seraphic Oath, Divine Confirmation).
          - Protect your party from major damage with Shielding skills (Blessing of Salvation, Seraphic Oath) and Damage Reduction skills (Salvation Site).
        skills:
          - name: Seraphic Oath
            level: 14
            tripods:
              - Light of Salvation
              - Boundless Blessings
              - Charge!
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Attack Power Buff, Party Shield Skill, Secondary Meter Generation Skill**
              - <tripod>Light of Salvation</tripod> provides 15% Max HP shield to party for 5 seconds.
              - MAIN PRIORITY skill to cycle along with Seraphic Leap.
          - name: Seraphic Leap
            level: 14
            tripods:
              - Tenacity
              - Magick Blessing
              - Boundless Blessings
            rune: Quick Recharge
            rune_rarity: rare
            notes: |-
              **Attack Power Buff, Party Attack Speed/MP Recovery Buff, Party Damage Reduction Buff, Push Immunity, Weak Point Destruction, Mobility**
              - <tripod>Magick Blessing</tripod> grants Attack Speed +8% and MP Recovery +50% to party members for 8 seconds.  NEVER remove this unless playing with full attack speed capped + MP-less classes.
              - MAIN PRIORITY skill to cycle along with Seraphic Oath.
          - name: Requiem Ash
            level: 14
            tripods:
              - Swift Fingers
              - Summary Execution
              - Execution
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Primary Meter Generation Skill, Max Stagger Skill, Weak Point Destruction**
              - Grants the largest amount of Piety Meter on hit, so prioritize casting/hitting this skill.
              - Holy Blade's Ashes ark grid core grants increased Piety Meter gain and an additional stack to this skill.  Ensure that this skill never sits at 2/2 stacks unless Piety Meter is already full.
              - <tripod>Magick Control</tripod> can be taken if you run into MP issues.
          - name: Requiem Rain
            level: 14
            tripods:
              - Swift Fingers
              - Light of Destiny
              - Advent Light
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Primary Meter Generation Skill, Mid-high Stagger Skill, Stacking Skill**
              - Grants the second largest amount of Piety Meter on hit, so prioritize casting/hitting this skill.
              - <tripod>Advent Light</tripod> grants an additional stack to this skill, increasing burst Piety Meter generation significantly.  Ensure that this skill never sits at 2/2 stacks unless Piety Meter is already full.
              - <tripod>Magick Control</tripod> can be taken if you run into MP issues.
          - name: Sword of Revelation
            level: 10
            tripods:
              - Concussion
              - Faith
              - Double Cross
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Secondary Meter Generation Skill, Counter**
              - <tripod>Double Cross</tripod> grants an additional stack to this skill.  Always keep one stack off cooldown in case you need to counter.
              - <tripod>Weak Point Enhancement</tripod> can be taken if extra Weak Point Destruction is necessary.
          - name: Salvation Site
            level: 10
            tripods:
              - Steady Stance
              - Light of Salvation
              - Guardian
            rune: Quick Recharge
            rune_rarity: rare
            notes: |-
              **Damage Reduction Skill, Party Shield Skill, Push Immunity, Mobility**
              - Strongest Damage Reduction skill, can be used to protect party members from a large amount of damage, especially if paired with other shielding skills.  Do not be afraid to dash into danger to save a teammate with this skill.
              - <tripod>Guardian</tripod> grants status immunity to yourself (not your party) until the first instance of damage taken.  Once you are hit, the duration of the skill resets but you are no longer status immune, only push immune.
              - <tripod>Excellent Mobility</tripod> can be taken for increased mobility if the longer duration is not necessary.
          - name: Blessing of Salvation
            level: 14
            tripods:
              - Swift Fingers
              - Purifying Shield
              - Grace of Protection
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Party Shield Skill, Purify Skill**
              - <tripod>Purifying Shield</tripod> removes one debuff from all party members, make sure to take this if there are important debuffs to cleanse.
              - <tripod>Sheltering Shield</tripod> can be taken for 20% damage reduction for gates that do not require a cleanse skill.
              - <tripod>Grace of Protection</tripod> increases the shield effectiveness by 50%, and duration by 2 seconds.  Preferable over <Grace of Recovery> as Valkyrie already has an on demand heal with Light of the Faithful as well as a small heal on Release Light.
          - name: Circle of Truth
            level: 10
            tripods:
              - Insight
              - Light's Vestige
              - Tracker Shield
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **PICK ONE BRAND**
              - Lower maintenance brand skill than Truth's Decree (lasts 16 seconds).  Slightly lower efficiency on Quick Recharge, as well as no paralysis immunity, but still recommended as it is just so much easier to upkeep.
              - <tripod>Tracker Shield</tripod> makes this skill auto track the boss.  Very helpful for bosses that move alot.  You can opt for <tripod>Giant Shield</tripod> for a significantly larger, but unmoving brand on less mobile bosses.
          - name: Truth's Decree
            level: 10
            tripods:
              - Swift Fingers
              - Light's Vestige
              - Resonance
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **PICK ONE BRAND**
              - Lower cooldown, lower duration brand skill than Circle of Truth.  Has paralysis immunity and has a slightly higher damage ceiling, but is higher maintenance.  Not recommended unless you are already consistently hitting near 100% brand uptime.
          - name: Divine Confirmation
            level_label: Hyper Awakening Technique
            notes: |-
              **Damage Buff Skill, Meter Generation Skill**
              - Grants +10% damage buff to party for 10 seconds, as well as Hyper Awakening Skill Damage +20% for 20 seconds.
              - With Miracle leap node, grants +12% Piety meter.
              - Try to cycle this skill as often as possible for meter generation and the damage buff, as long as the boss is DPSable.  Benefits greatly from Quick Recharge procs while on cooldown.
          - name: Brundia's Ritual / Brundia's Sanctuary
            icon: Brundia's Ritual
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Meter Generation Skill, Party Shield Skill**
              - Grants a 100% Max HP shield to party, as well as nearly fills Piety Meter to full.
              - Try to balance using this skill for party protection as well as for efficient meter generation (try not to overcap Piety Meter using this skill).
              - Hyper Awakening variant also grants crisis evasion buff to party for 30 seconds.
        arkPassives:
          - name: Specialization
            points: 10
            category: evolution
            tier: 1
          - name: Swiftness
            points: 30
            category: evolution
            tier: 1
          - name: Goddess of Blessings
            points: 3
            category: evolution
            tier: 2
          - name: Passionate Dance
            points: 2
            category: evolution
            tier: 3
          - name: Luminary
            points: 1
            category: evolution
            tier: 4
          - name: Prayer
            points: 1
            category: evolution
            tier: 4
          - name: Standing Striker
            points: 2
            category: evolution
            tier: 5
          - name: Liberator
            points: 1
            category: enlightenment
            tier: 1
          - name: Vitality
            points: 3
            category: enlightenment
            tier: 2
          - name: Divine Plan
            points: 3
            category: enlightenment
            tier: 3
          - name: Brilliant Bladecraft
            points: 1
            category: enlightenment
            tier: 3
          - name: Wings of Freedom
            points: 3
            category: enlightenment
            tier: 4
          - name: Liberator's Sign
            points: 1
            category: enlightenment
            tier: 4
          - name: Charged Fury
            points: 2
            category: leap
            tier: 1
          - name: Awakening Amplifier
            points: 3
            category: leap
            tier: 1
          - name: Release Potential
            points: 5
            category: leap
            tier: 1
          - name: Instant Spell
            points: 3
            category: leap
            tier: 1
          - name: Miracle
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - With higher level cooldown gems, you can opt for less swiftness and more specialization (around 100 points per gem level, from a baseline of full 8 gems).  This grants slightly stronger identity buffing power (efficiency, not uptime) at the cost of longer cooldowns on utility skills (shields, damage reduction, stagger, counter), lower uptime on Divine Confirmation, and a slightly tighter AP Buff cycle.  Only reccommended if you have high level gems and are extremely efficient at upkeeping AP Buff and Brand already (near 100% uptime).
        rotation:
          - Seraphic Oath
          - Release Light
          - Divine Confirmation
          - Requiem Rain
          - Requiem Ash
          - Circle of Truth
          - Sword of Revelation
          - Requiem Rain
          - Requiem Ash
          - Seraphic Leap
---
