---
title: Bard Guide
class: Mage
subclass: Bard
class_id: 204
description: Complete guide to Bard including Desperate Salvation and True Courage builds with Ark Grid variants.
identity:
  name: Serenade Meter
  description: Bard's identity involves a 3-bar identity gauge that can be used to heal or buff the damage of your party. This gauge is often referred to as Bard's 'meter,' with the individual bars often referred to as 'bubbles.' Bard generates meter through normal skills.
synergy:
  name: Note Brand
  description: Applies a debuff, increasing damage received by all party members by 10%.
  skills:
    - Sonatina
    - Sound Shock
builds:
  - name: Desperate Salvation (support)
    engraving: Desperate Salvation
    description: Support build with utility (shielding, damaging mitigation, healing, counter, stagger, destruction) and the highest potential buff output.
    playstyle: Prevent damage taken by party members while simultaneously upkeeping buffs and debuffs.
    difficulty: medium
    identity:
      name: Serenade Gauge
      description: Desperate Salvation Bard generates Serenade Gauge with normal skills. Serenade of Courage (Z) is a 5/10/15% party damage buff for 8/12/16 seconds. Serenade of Salvation (X) places an AoE on the ground that heals any party member within the AoE by 4/6/8% max HP a total of 8/12/16 ticks, lasting up to 14/18/24 seconds. 1 tick is consumed for each party member standing in the AoE on every pulse. When all ticks are consumed or the duration ends, heal an additional 8/16/24% max HP.
    synergy:
        name: Attack Power Buff
        description: Atk. Power Bonus +10%.
        skills:
          - Heavenly Tune
          - Sonic Vibration
    preArkGrid:
      description: Pre and Post Ark Grid play identically, asides from quality of life on one skill depending on the desired star core.
      priorities:
        - Upkeep main damage buffs and debuffs, including Attack Power Buff (Heavenly Tune, Sonic Vibration), Brand (Sonatina/Sound Shock), Identity Buff (Serenade of Courage), and T-Skill buff (Aria).
        - Generate Serenade Gauge by cycling meter generation skills as often as possible (Wind of Music, Prelude of Storm, Rhythm Buckshot, Soundholic), as well as meter gained from buffs and debuffs (Sonatina, Aria).
        - Protect your party via Shields and Damage Reduction (Wind of Music, Rhapsody of Light, Guardian Tune).
      arkPassives:
        - name: Specialization
          points: 16
          category: evolution
          tier: 1
        - name: Swiftness
          points: 24
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
        - name: Perfect Harmony
          points: 3
          category: enlightenment
          tier: 1
        - name: Desperate Salvation
          points: 3
          category: enlightenment
          tier: 2
        - name: Serenade of Tolerance
          points: 1
          category: enlightenment
          tier: 3
        - name: Serenade of Amplification
          points: 3
          category: enlightenment
          tier: 3
        - name: Serenade of Branding
          points: 1
          category: enlightenment
          tier: 4
        - name: Serenade of Secrets
          points: 3
          category: enlightenment
          tier: 4
        - name: Transcendent Power
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
        - name: Rhapsody of Abundance
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
          priority: recommended
        - name: Heavy Armor
          priority: recommended
      skills:
        - name: Heavenly Tune
          level: 14
          tripods:
            - Quick Prep
            - Courageous Tune
            - Intense Tune
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Attack Power Buff, Attack Speed Buff, Party MP Regeneration, Paralysis Immunity**
            - <tripod>Courageous Tune</tripod> provides raidwide damage mitigation.
            - <tripod>Tough Tune</tripod> increases the attack speed buff from 8% to 16%, but you lose the raidwide damage mitigation.
            - MAIN PRIORITY skill to cycle alongside Sonic Vibration.
        - name: Sonic Vibration
          level: 14
          tripods:
            - Tenacity
            - Brilliant Wave
            - Wide-Angle Attack
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Attack Power Buff, Weak Point Lv.2, Stagger, Push Immunity**
            - Requires party members to stand within the circle AoE.
            - MAIN PRIORITY skill to cycle alongside Heavenly Tune.
        - name: Guardian Tune
          level: 14
          tripods:
            - Tenacity
            - Endless Protection
            - Wind of Protection
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Damage Reduction, Shielding, Debuff Block, Push Immunity**
            - Bard's best damage reduction and shielding skill over the course of a raid encounter, use off cooldown.
            - <tripod>Agile Cast</tripod> is an option if you prefer a reactive damage reduction tool, but you lose Push Immunity and Guardian Tune does NOT have Paralysis Immunity.
            - <tripod>Wind of Protection</tripod> can block debuffs, its usefulness varies depending on the specific encounter and CAN be held for specific attacks.
        - name: Wind of Music
          level: 10
          tripods:
            - Quick Prep
            - Melody Increase
            - Wind of Protection
          rune: Wealth
          rune_rarity: epic
          notes: |-
            **Shielding, Meter Generation, Paralysis Immunity**
            - Aim both the boss and allies to generate meter and shield, it is close range.
            - <tripod>Superspeed Cast</tripod> sacrifices the shield to significantly increase its meter generation.
        - name: Rhapsody of Light
          level: 10
          tripods:
            - Quick Prep
            - Stabilized Light
            - Shining Protection
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Damage Reduction, Shielding, Weak Point Lv. 1, Push Immunity**
            - <tripod>Shining Protection</tripod> grants yourself 50% Damage Reduction for the duration of the cast, and 75% Damage Reduction to allies for 3 seconds.
            - The shield, damage reduction, and duration is reapplied on every tick.
            - Protection and Quick Recharge are also viable rune options.
        - name: Rhythm Buckshot
          level: 10
          tripods:
            - Melody Increase
            - Tenacity
            - Agile Cast
          rune: Wealth
          rune_rarity: epic
          notes: |-
            **Meter Generation, Counter, Weak Point Lv. 1, Push Immunity, Mid Stagger**
            - Legendary Wealth goes on this skill unless you are running Wind of Music with <tripod>Superspeed Cast</tripod> (WomWom), or Soundholic.
        - name: Sonatina
          level: 10
          tripods:
            - Quick Prep
            - Note Brand
            - Increase Melody
          rune: Wealth
          rune_rarity: rare
          notes: |-
            **Brand, Meter Generation, Weak Point Lv. 1, Paralysis Immunity**
            - Has the longest brand duration out of the brand options, making it the lowest maintenance brand skill.
        - name: Soundholic
          level: 10
          tripods:
            - Magical Healing
            - Sustain Enhancement
            - Melody Increase
          rune: Wealth
          rune_rarity: legendary
          notes: |-
            **Meter Generation, Pary MP Regeneration, Paralysis Immunity**
            - <tripod>Magical Healing</tripod> regenerates mana at a rate of 0.5% max mp per tick for 15 ticks total. Aim to hit the boss and any party members with mana at the same time.
            - This skill can be cancelled early if a higher priority skill comes off cooldown, but aim to cast this for as long as possible.
        - name: Aria
          level_label: Hyper Awakening Technique
          notes: |-
            **Damage Buff, Meter Generation**
            - Grants +10% damage buff to party for 15 seconds, as well as Hyper Awakening Skill Damage +20% for 30 seconds.
            - With Rhapsody of Abundance leap node, grants 0.3 of a bubble.
            - Cycle this skill as often as possible for meter generation and the damage buff. It may be worth holding for long upcoming damage windows where the boss will be present for the entire duration.
        - name: Symphonia / Symphony Melody
          icon: Symphonia
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Meter Generation Skill, Party Shield Skill**
            - Grants a 100% Max HP shield to party, recovering one bubble as well. Enemies hit are inflicted with -30% attack power and -20% attack speed.
            - Typically, you should use this skill off cooldown for mter generation, but you can elect to save this skill for dangerous patterns, multiple damage patterns, or mechanics.
            - Hyper Awakening variant additionally grants a crisis evasion buff to the party for 30s.
      gems:
        - skill: Serenade of Courage
          type: damage
          priority: 1
        - skill: Heavenly Tune
          type: damage
          priority: 2
        - skill: Sonic Vibration
          type: damage
          priority: 3
        - skill: Heavenly Tune
          type: cooldown
          priority: 1
        - skill: Sonic Vibration
          type: cooldown
          priority: 2
        - skill: Sonatina
          type: cooldown
          priority: 3
        - skill: Guardian Tune
          type: cooldown
          priority: 4
        - skill: Wind of Music
          type: cooldown
          priority: 5
        - skill: Rhythm Buckshot
          type: cooldown
          priority: 6
        - skill: Soundholic
          type: cooldown
          priority: 7
        - skill: Rhapsody of Light
          type: cooldown
          priority: 8
      rotation_sections:
        - title: Buff Priorities
          steps:
          - Heavenly Tune/Sonic Vibration (AP Buffs)
          - Sonatina (brand)
          - Serenade of Courage (identity)
          - Aria (t skill)
        - title: Meter Generation Priorities
          steps:
          - Wind of Music <tripod>Superspeed Cast</tripod>
          - Soundholic
          - Rhythm Buckshot
          - Wind of Music <tripod>Wind of Protection</tripod>
          - Sonatina
        - title: Defensive Priorities
          steps:
          - Guardian Tune
          - Wind of Music <tripod>Wind of Protection</tripod>
          - Rhapsody of Light
    engravings:
      - name: Awakening
        priority: required
      - name: Magick Stream
        priority: required
      - name: Drops of Ether
        priority: required
      - name: Expert
        priority: recommended
      - name: Heavy Armor
        priority: recommended
    variants:
      - name: Buckshot Acceleration
        difficulty: 1
        recommended: true
        description: Standard support Bard build. Plays nearly identically to pre-ark grid build, but with an extra stack of Rhythm Buckshot that resets on counters. This build will scale the best when opting to increase spec levels.
        stats: Specialization 16/30, Swiftness 24/30
        arkgrid_cores: Seraphic Accent + Seraphic Pulse + Buckshot Acceleration
        arkgrid_prose: |-
          Prioritize Seraphic Pulse > Seraphic Accent > Buckshot Acceleration
          Minimum Sun 14 Moon 14 Star 10, but you really want Sun/Moon at 17 and Star at 14.
          Every combination of Sun/More core is viable, however Seraphic Pulse/Seraphic Accent (AP core) will have the most consistent performance. Brave Pulse/Brave Accent (identity core) is comparable, but it depends on your Serenade of Courage uptime. Any mix of Seraphic + Brave will suffice. Aria Accent/Aria Pulse (T core) is the weakest and will scale poorly with increased specialization, as you decrease your cooldown reduction, directly decreasing your Aria uptime.
          Seraphic and Brave ancients will always outperform the relic variants. Aria ancient will only outperform based on uptime.
        priorities:
          - Upkeep main damage buffs and debuffs, including Attack Power Buff (Heavenly Tune, Sonic Vibration), Brand (Sonatina/Sound Shock), Identity Buff (Serenade of Courage), and T-Skill buff (Aria).
          - Generate Serenade Gauge by cycling meter generation skills as often as possible (Wind of Music, Prelude of Storm, Rhythm Buckshot, Soundholic), as well as meter gained from buffs and debuffs (Sonatina, Aria).
          - Protect your party via Shields and Damage Reduction (Wind of Music, Rhapsody of Light, Guardian Tune).
          - Go for counters with Rhythm Buckshot as it will reset your counter cooldown and refund all stacks, further increasing your meter generation.
        skills:
          - name: Heavenly Tune
            level: 14
            tripods:
              - Quick Prep
              - Courageous Tune
              - Intense Tune
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Attack Power Buff, Attack Speed Buff, Party MP Regeneration, Paralysis Immunity**
              - <tripod>Courageous Tune</tripod> provides raidwide damage mitigation.
              - <tripod>Tough Tune</tripod> increases the attack speed buff from 8% to 16%, but you lose the raidwide damage mitigation.
              - MAIN PRIORITY skill to cycle alongside Sonic Vibration.
          - name: Sonic Vibration
            level: 14
            tripods:
              - Tenacity
              - Brilliant Wave
              - Wide-Angle Attack
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Attack Power Buff, Weak Point Lv.2, Stagger, Push Immunity**
              - Requires party members to stand within the circle AoE.
              - MAIN PRIORITY skill to cycle alongside Heavenly Tune.
          - name: Guardian Tune
            level: 14
            tripods:
              - Tenacity
              - Endless Protection
              - Wind of Protection
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage Reduction, Shielding, Debuff Block, Push Immunity**
              - Bard's best damage reduction and shielding skill over the course of a raid encounter, use off cooldown.
              - <tripod>Agile Cast</tripod> is an option if you prefer a reactive damage reduction tool, but you lose Push Immunity and Guardian Tune does NOT have Paralysis Immunity.
              - <tripod>Wind of Protection</tripod> can block debuffs, its usefulness varies depending on the specific encounter and CAN be held for specific attacks.
          - name: Wind of Music
            level: 10
            tripods:
              - Quick Prep
              - Melody Increase
              - Wind of Protection
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Shielding, Meter Generation, Paralysis Immunity**
              - Aim both the boss and allies to generate meter and shield, it is close range.
              - <tripod>Superspeed Cast</tripod> sacrifices the shield to significantly increase its meter generation. Use legendary wealth if you use this tripod.
          - name: Rhapsody of Light
            level: 10
            tripods:
              - Quick Prep
              - Stabilized Light
              - Shining Protection
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage Reduction, Shielding, Weak Point Lv. 1, Push Immunity**
              - <tripod>Shining Protection</tripod> grants yourself 50% Damage Reduction for the duration of the cast, and 75% Damage Reduction to allies for 3 seconds.
              - The shield, damage reduction, and duration is reapplied on every tick.
              - Protection and Quick Recharge are also viable rune options.
          - name: Rhythm Buckshot
            level: 10
            tripods:
              - Melody Increase
              - Tenacity
              - Agile Cast
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Meter Generation, Counter, Weak Point Lv. 1, Push Immunity, Mid Stagger*
              - Buckshot Acceleration star core grants you two stacks of Rhythm Buckshot, allowing you to hold onto one stack of Rhythm Buckshot. This improves your opportunities for hitting counters and allows you to keep other skills on cooldown easier.
          - name: Sonatina
            level: 10
            tripods:
              - Quick Prep
              - Note Brand
              - Increase Melody
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Brand, Meter Generation, Weak Point Lv. 1, Paralysis Immunity**
              - Has the longest brand duration out of the brand options, making it the lowest maintenance brand skill.
          - name: Soundholic
            level: 10
            tripods:
              - Magical Healing
              - Sustain Enhancement
              - Melody Increase
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Meter Generation, Pary MP Regeneration, Paralysis Immunity**
              - <tripod>Magical Healing</tripod> regenerates mana at a rate of 0.5% max mp per tick for 15 ticks total. Aim to hit the boss and any party members with mana at the same time.
              - This skill can be cancelled early if a higher priority skill comes off cooldown, but aim to cast this for as long as possible.
              - Legendary Wealth goes on this skill unless you are running Wind of Music with <tripod>Superspeed Cast</tripod> (WomWom).
          - name: Aria
            level_label: Hyper Awakening Technique
            notes: |-
              **Damage Buff, Meter Generation**
              - Grants +10% damage buff to party for 15 seconds, as well as Hyper Awakening Skill Damage +20% for 30 seconds.
              - With Rhapsody of Abundance leap node, grants 0.3 of a bubble.
              - Cycle this skill as often as possible for meter generation and the damage buff. It may be worth holding for long upcoming damage windows where the boss will be present for the entire duration.
          - name: Symphonia / Symphony Melody
            icon: Symphonia
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Meter Generation Skill, Party Shield Skill**
              - Grants a 100% Max HP shield to party, recovering one bubble as well. Enemies hit are inflicted with -30% attack power and -20% attack speed.
              - Typically, you should use this skill off cooldown for mter generation, but you can elect to save this skill for dangerous patterns, multiple damage patterns, or mechanics.
              - Hyper Awakening variant additionally grants a crisis evasion buff to the party for 30s.
        arkPassives:
          - name: Specialization
            points: 16
            category: evolution
            tier: 1
          - name: Swiftness
            points: 24
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
          - name: Perfect Harmony
            points: 3
            category: enlightenment
            tier: 1
          - name: Desperate Salvation
            points: 3
            category: enlightenment
            tier: 2
          - name: Serenade of Tolerance
            points: 1
            category: enlightenment
            tier: 3
          - name: Serenade of Amplification
            points: 3
            category: enlightenment
            tier: 3
          - name: Serenade of Branding
            points: 1
            category: enlightenment
            tier: 4
          - name: Serenade of Secrets
            points: 3
            category: enlightenment
            tier: 4
          - name: Transcendent Power
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
          - name: Rhapsody of Abundance
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - With higher level cooldown gems, you can opt for less swiftness and more specialization. The swiftness recommendation listed is enough to hit 140% attack speed with 5% speed feast from the stronghold (1514). From level 9 gems and higher, you are able to build 30 spec. This grants higher identity buffing power (both efficiency and uptime) at the cost of longer cooldowns on utility skills (shields, damage reduction, MP recovery), lower uptime on Aria, and a tigher AP Buff cycle. While is is theoretically the ideal way to play, it is only recommended if you have high level gems and are extremely efficient at upkeeping AP Buff and Brand already (near 100% uptime).
          - 30/30 Specialization will also require the engraving Spirit Absorption, which usually replaces Expert.
        rotation_sections:
        - title: Buff Priorities
          steps:
          - Heavenly Tune/Sonic Vibration (AP Buffs)
          - Sonatina (brand)
          - Serenade of Courage (identity)
          - Aria (t skill)
        - title: Meter Generation Priorities
          steps:
          - Wind of Music <tripod>Superspeed Cast</tripod>
          - Soundholic
          - Rhythm Buckshot
          - Wind of Music <tripod>Wind of Protection</tripod>
          - Sonatina
        - title: Defensive Priorities
          steps:
          - Guardian Tune
          - Wind of Music <tripod>Wind of Protection</tripod>
          - Rhapsody of Light
      - name: Sound Deluge
        difficulty: 1
        description: Standard support Bard build. Plays nearly identically to pre-ark grid build, but decreases the full channel time of Soundholic by 33%. This build performs better if you maintain higher swiftness amounts.
        stats: Specialization 16/30, Swiftness 24/30
        arkgrid_cores: Seraphic Accent + Seraphic Pulse + Sound Deluge
        arkgrid_prose: |-
          Prioritize Seraphic Pulse > Seraphic Accent > Sound Deluge
          In theory, minimum is 14 on each, but you really want to et to 17p on each.
          Every combination of Sun/More core is viable, however Seraphic Pulse/Seraphic Accent (AP core) will have the most consistent performance. Brave Pulse/Brave Accent (identity core) is comparable, but it depends on your Serenade of Courage uptime. Any mix of Seraphic + Brave will suffice. Aria Accent/Aria Pulse (T core) is the weakest and will scale poorly with increased specialization, as you decrease your cooldown reduction, directly decreasing your Aria uptime. However, this build maintains higher swiftness.
          Seraphic and Brave ancients will always outperform the relic variants. Aria ancient will only outperform based on uptime, but this build prefers higher swiftness.
        priorities:
          - Upkeep main damage buffs and debuffs, including Attack Power Buff (Heavenly Tune, Sonic Vibration), Brand (Sonatina/Sound Shock), Identity Buff (Serenade of Courage), and T-Skill buff (Aria).
          - Generate Serenade Gauge by cycling meter generation skills as often as possible (Wind of Music, Prelude of Storm, Rhythm Buckshot, Soundholic), as well as meter gained from buffs and debuffs (Sonatina, Aria).
          - Protect your party via Shields and Damage Reduction (Wind of Music, Rhapsody of Light, Guardian Tune).
        skills:
          - name: Heavenly Tune
            level: 14
            tripods:
              - Quick Prep
              - Courageous Tune
              - Intense Tune
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Attack Power Buff, Attack Speed Buff, Party MP Regeneration, Paralysis Immunity**
              - <tripod>Courageous Tune</tripod> provides raidwide damage mitigation.
              - <tripod>Tough Tune</tripod> increases the attack speed buff from 8% to 16%, but you lose the raidwide damage mitigation.
              - MAIN PRIORITY skill to cycle alongside Sonic Vibration.
          - name: Sonic Vibration
            level: 14
            tripods:
              - Tenacity
              - Brilliant Wave
              - Wide-Angle Attack
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Attack Power Buff, Weak Point Lv.2, Stagger, Push Immunity**
                - Requires party members to stand within the circle AoE.
                - MAIN PRIORITY skill to cycle alongside Heavenly Tune.
          - name: Guardian Tune
            level: 14
            tripods:
              - Tenacity
              - Endless Protection
              - Wind of Protection
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage Reduction, Shielding, Debuff Block, Push Immunity**
              - Bard's best damage reduction and shielding skill over the course of a raid encounter, use off cooldown.
              - <tripod>Agile Cast</tripod> is an option if you prefer a reactive damage reduction tool, but you lose Push Immunity and Guardian Tune does NOT have Paralysis Immunity.
              - <tripod>Wind of Protection</tripod> can block debuffs, its usefulness varies depending on the specific encounter and CAN be held for specific attacks.
          - name: Wind of Music
            level: 10
            tripods:
              - Quick Prep
              - Melody Increase
              - Wind of Protection
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Shielding, Meter Generation, Paralysis Immunity**
              - Aim both the boss and allies to generate meter and shield, it is close range.
              - <tripod>Superspeed Cast</tripod> sacrifices the shield to significantly increase its meter generation. Run legendary wealth if you are using this tripod.
          - name: Rhapsody of Light
            level: 10
            tripods:
              - Quick Prep
              - Stabilized Light
              - Shining Protection
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage Reduction, Shielding, Weak Point Lv. 1, Push Immunity**
              - <tripod>Shining Protection</tripod> grants yourself 50% Damage Reduction for the duration of the cast, and 75% Damage Reduction to allies for 3 seconds.
              - The shield, damage reduction, and duration is reapplied on every tick.
              - Protection and Quick Recharge are also viable rune options.
          - name: Rhythm Buckshot
            level: 10
            tripods:
              - Melody Increase
              - Tenacity
              - Agile Cast
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Meter Generation, Counter, Weak Point Lv. 1, Push Immunity, Mid Stagger**
          - name: Sonatina
            level: 10
            tripods:
              - Quick Prep
              - Note Brand
              - Increase Melody
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Brand, Meter Generation, Weak Point Lv. 1, Paralysis Immunity**
              - Has the longest brand duration out of the brand options, making it the lowest maintenance brand skill.
          - name: Soundholic
            level: 10
            tripods:
              - Magical Healing
              - Sound Barrier
              - Melody Increase
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Meter Generation, Pary MP Regeneration, Paralysis Immunity**
              - <tripod>Magical Healing</tripod> regenerates mana at a rate of 0.5% max mp per tick for 15 ticks total. Aim to hit the boss and any party members with mana at the same time.
              - <tripod>Sound Barrier</tripod> is required to take advantage of the Sound Deluge star core.
              - Sound Deluge reduces the cast time of Soundholic by 33%, reducing the ticks from 15 to 10.
              - This skill can be cancelled early if a higher priority skill comes off cooldown, but aim to cast this for as long as possible.
              - Legendary Wealth goes on this skill unless you are running Wind of Music with <tripod>Superspeed Cast</tripod> (WomWom).
          - name: Aria
            level_label: Hyper Awakening Technique
            notes: |-
              **Damage Buff, Meter Generation**
              - Grants +10% damage buff to party for 15 seconds, as well as Hyper Awakening Skill Damage +20% for 30 seconds.
              - With Rhapsody of Abundance leap node, grants 0.3 of a bubble.
              - Cycle this skill as often as possible for meter generation and the damage buff. It may be worth holding for long upcoming damage windows where the boss will be present for the entire duration.
          - name: Symphonia / Symphony Melody
            icon: Symphonia
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Meter Generation Skill, Party Shield Skill**
              - Grants a 100% Max HP shield to party, recovering one bubble as well. Enemies hit are inflicted with -30% attack power and -20% attack speed.
              - Typically, you should use this skill off cooldown for mter generation, but you can elect to save this skill for dangerous patterns, multiple damage patterns, or mechanics.
              - Hyper Awakening variant additionally grants a crisis evasion buff to the party for 30s.
        arkPassives:
          - name: Specialization
            points: 16
            category: evolution
            tier: 1
          - name: Swiftness
            points: 24
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
          - name: Perfect Harmony
            points: 3
            category: enlightenment
            tier: 1
          - name: Desperate Salvation
            points: 3
            category: enlightenment
            tier: 2
          - name: Serenade of Tolerance
            points: 1
            category: enlightenment
            tier: 3
          - name: Serenade of Amplification
            points: 3
            category: enlightenment
            tier: 3
          - name: Serenade of Branding
            points: 1
            category: enlightenment
            tier: 4
          - name: Serenade of Secrets
            points: 3
            category: enlightenment
            tier: 4
          - name: Transcendent Power
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
          - name: Rhapsody of Abundance
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - With higher level cooldown gems, you can opt for less swiftness and more specialization. The swiftness recommendation listed is enough to hit 140% attack speed with 5% speed feast from the stronghold (1514). From level 9 gems and higher, you are able to build 30 spec. This grants higher identity buffing power (both efficiency and uptime) at the cost of longer cooldowns on utility skills (shields, damage reduction, MP recovery), lower uptime on Aria, and a tigher AP Buff cycle. While is is theoretically the ideal way to play, it is only recommended if you have high level gems and are extremely efficient at upkeeping AP Buff and Brand already (near 100% uptime).
          - 30/30 Specialization will also require the engraving Spirit Absorption, which usually replaces Expert.
          - Sound Deluge scales okay with more specialization, but the main appeal of the this build is the action economy improvement that Sound Deluge grants. This is dramatically more impactful and noticeable with higher swiftness.
        rotation_sections:
        - title: Buff Priorities
          steps:
          - Heavenly Tune/Sonic Vibration (AP Buffs)
          - Sonatina (brand)
          - Serenade of Courage (identity)
          - Aria (t skill)
        - title: Meter Generation Priorities
          steps:
          - Wind of Music <tripod>Superspeed Cast</tripod>
          - Soundholic
          - Rhythm Buckshot
          - Wind of Music <tripod>Wind of Protection</tripod>
          - Sonatina
        - title: Defensive Priorities
          steps:
          - Guardian Tune
          - Wind of Music <tripod>Wind of Protection</tripod>
          - Rhapsody of Light
  - name: True Courage (DPS)
    engraving: True Courage
    description: Revolves around one singular high damaging skill, (Z) Tempest.
    playstyle: Build identity gauge through normal skills, then and buff yourself to unlock a large damaging skill. Non-directional, but melee damage dealer.
    difficulty: easy
    identity:
      name: Serenade of Courage / Tempest
      description: Upon Serenade of Courage use, grants yourself a 5/10/15% damage buff for 8/12/16 seconds based on the number of bubbles consumed. Unlocks the usage of Tempest, which will wind up and fire an extremely powerful skill. Tempest is the crux of the True Courage build.
    synergy:
        name: Defense Reduction
        description: Reduces defense of enemies by -12%.
        skills:
          - Sonatina
    preArkGrid:
      description: Pre-Ark Grid setup follows the same build as 112 Ark Grid. See Ark Passive Tips for Crit stat allocation.
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
      - name: Mass Increase
        priority: recommended
      - name: Stabilized Status
        priority: optional
    variants:
      - name: 11x
        difficulty: 1
        recommended: true
        description: Standard True Courage build, is simply the upgraded version of Pre-Ark Grid True Courage. Sound Blitz star core is recommended. Flexibile sending consistent 2-bubbles or saving up to 3-bubbles for burst windows.
        arkgrid_cores: Serenade of Fortitude + Pious Serenade + Sound Blitz (112 Soundholic) | Serenade of Fortitude + Pious Serenade + Sonic Enhancement (111 Sonic Vibration + Harp)
        priorities:
          - Upkeep your damage synergy, Sonatina and maintain Adrenaline stacks.
          - Damage skills must be cast within Heavenly Tune window (8 seconds).
          - Sync your Heavenly Tune with Sonic Vibration.
          - Cast Serenade of Courage and Tempest at 2 or 3 bars.
          - You have 5 seconds to send Tempest. DO NOT MISS.
          - Reposition Harp of Rhythm if necessary.
          - Cast meter generation skills during downtime.
        arkPassiveTips:
          - Adjust your crit rate as close to 100% without overcapping. It is fine to have 97-99%. Heavenly Tune provides +20% crit rate.
          - Swap to Keen Sense 1 if you need additional crit rate. Use Master + Critical if you need more.
          - 1115 Crit = 53% with High CritRate% rings (Recommended).
          - Raid Captain is efficient with 136% movement speed, or 1281 Swiftness plus a 5% Feast. Excess stats should be placed into Swiftness (Recommended) or Specialization.
          - Specialization only increases Serenade meter generation. This does not increase buff efficiency or skill damage for True Courage Bard.
          - Hymn of Combat turns Serenade of Courage into another damage ability, but requires sticking close to the boss on cast.
          - You may take 3/3 Stormfield and 2/5 Mad Dash for a slight DPS loss, if the boss is mobile, or if you don’t like the shackle.
        arkPassives:
          - name: Crit
            points: 0
            category: evolution
            tier: 1
          - name: Swiftness
            points: 21
            category: evolution
            tier: 1
          - name: Limit Break
            points: 3
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
          - name: Standing Striker
            points: 2
            category: evolution
            tier: 5
          - name: True Courage
            points: 1
            category: enlightenment
            tier: 1
          - name: "Hymn: Tempest"
            points: 3
            category: enlightenment
            tier: 2
          - name: Hymn of Combat
            points: 5
            category: enlightenment
            tier: 3
          - name: Maestro
            points: 3
            category: enlightenment
            tier: 3
          - name: Stormfield
            points: 2
            category: enlightenment
            tier: 4
          - name: Mad Dash
            points: 1
            category: enlightenment
            tier: 4
          - name: Transcendent Power
            points: 5
            category: leap
            tier: 1
          - name: Unleashed Power
            points: 4
            category: leap
            tier: 1
          - name: Instant Spell
            points: 2
            category: leap
            tier: 1
          - name: Ostinato
            points: 3
            category: leap
            tier: 2
        skills:
          - name: Heavenly Tune
            level: 10
            tripods:
              - Quick Prep
              - Tough Tune
              - Tune for Me
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Self Buff, Crit Rate Buff, Mana Regeneration, Paralysis Immune**
              - Increases your Attack Power by 25%.
              - <tripod>Courageous Tune</tripod> can be used over <tripod>Tough Tune</tripod> to provide raidwide damage mitigation on hit.
              - Tough Tune is mandatory if you are running Mass Increase engraving.
              - Heavenly Tune's mana regeneration does NOT stack with Support Bards in the same party. You still gain the support AP buff.
          - name: Sonatina
            level: 14
            tripods:
              - Quick Prep
              - Note Brand
              - Increase Melody
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Synergy, Weakpoint, Meter Generation, Paralysis Immune**
              - <tripod>Note Brand</tripod> applies -12% defense down synergy on enemies.
              - Keep this applied at all times.
              - Swap to Purify rune if the raid calls for self-cleanse.
          - name: Sonic Vibration
            level: 14
            tripods:
              - Tenacity
              - Chain Vibration
              - Spreading Vibration
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, High Weakpoint, Paralysis Immune, Optional Push Immunity**
              - Cast inside Heavenly Tune window.
              - Full damage if initial cast and lingering ball hits.
              - <tripod>Tenacity</tripod> can be replaced with <tripod>Agile Cast</tripod> (NOT Recommended).
          - name: Wind of Music
            level: 10
            tripods:
              - Quick Prep
              - Melody Increase
              - Superspeed Cast
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Highest Meter Generator, Stagger, Paralysis Immune**
              - Cast this skill off cooldown (close range).
              - Good burst stagger.
          - name: Soundholic
            level: 14
            tripods:
              - Sound Concentration
              - Sustain Enhancement
              - Melody Increase
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **High Meter Generator, Damage Skill, Stagger, Paralysis Immune**
              - <tripod>Focus Fire</tripod> and damage gem MANDATORY for Sound Blitz core (Recommended).
              - Back Attack with Sound Blitz core whenever possible. Do not delay your casts to chase Back.
              - Inputting another skill or movement will preemptively cancel Soundholic.
          - name: Harp of Rythmn
            level: 14
            tripods:
              - Summoning Will
              - Melody Increase
              - Giant Harp
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Meter Generator, Damage Skill, NO Immunity**
              - <tripod>Agile Rapid Fire</tripod> and damage gem MANDATORY for Sonic Enhancement core. Replace Soundholic damage gem.
              - Harp of Rhythm is entirely stationary. Recast harp if the boss moves out of range.
              - Press Shift on desired target to change the skill's target for raids with multiple minions. Active target has an orange ring around their feet.
              - Swap to <tripod>Note Brand</tripod> at a damage loss, if you are struggling with synergy upkeep.
          - name: Rhythm Buckshot
            level: 10
            tripods:
              - Melody Increase
              - Tenacity
              - Agile Cast
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Meter Generation, Counter, Weak Point, Stagger, Push Immune**
              - One of the two available counters (Melee, Cone)
              - Should be used off cooldown primarily for meter generation.
              - Yes, this skill is loaded.
          - name: Prelude of Storm
            level: 10
            tripods:
              - Quick Prep
              - Melody Increase
              - Powerful Prelude
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Meter Generation, Counter, NO Immunity**
              - One of the two available counters (Melee, AOE)
              - Inferior to Rhythm Buckshot as a counter, but similar meter gain with a small cooldown advantage.
              - Initial hit accounts for 50% of the meter generation, <tripod>Powerful Prelude</tripod> generates 16.7% per tick over 2 seconds.
          - name: Vivace
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, Stagger, Paralysis Immune**
              - Ostinato (Leap Tree) turns Vivace into a Normal cast.
              - Fits inside every 4th Heavenly Tune cast.
          - name: Symphonia / Symphony Melody
            icon: Symphonia
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Fixed Meter Generation Skill**
              - Provides 1 bar upon completion. Hitting the boss is optional.
              - Allows more Tempest casts over the course of the fight.
              - Casting Hyper Awakening will block the next lethal attack within 30 seconds (excluding wipe mechs).
        gems:
          - skill: Tempest
            type: damage
            priority: 1
          - skill: Sonic Vibration
            type: damage
            priority: 2
          - skill: Soundholic
            type: damage
            priority: 3
          - skill: Heavenly Tune
            type: cooldown
            priority: 1
          - skill: Sonic Vibration
            type: cooldown
            priority: 2
          - skill: Wind of Music
            type: cooldown
            priority: 3
          - skill: Soundholic
            type: cooldown
            priority: 4
          - skill: Rhythm Buckshot
            type: cooldown
            priority: 5
          - skill: Sonatina
            type: cooldown
            priority: 6
          - skill: Prelude of Storm
            type: cooldown
            priority: 7
          - skill: Harp of Rhythm
            type: cooldown
            priority: 8
        dps_distribution:
          - name: Tempest
            dmg: 51
          - name: Vivace
            dmg: 14
          - name: Sonic Vibration
            dmg: 9
          - name: Serenade of Courage
            dmg: 9
          - name: Soundholic
            dmg: 7
          - name: Harp of Rhythm
            dmg: 4
          - name: Sonatina
            dmg: 1
          - name: Heavenly Tune
            dmg: 0.5
          - name: Wind of Music
            dmg: 0.5
          - name: Prelude of Storm
            dmg: 0.4
          - name: Rhythm Buckshot
            dmg: 0.4
        rotation_sections:
          - title: Damage Rotation Priority
            steps:
              - Heavenly Tune
              - Serenade of Courage
              - Tempest
              - Vivace
              - Sonic Vibration
              - Soundholic
              - Harp of Rhythm
          - title: Meter Generation Priority
            steps:
              - Wind of Music
              - Soundholic
              - Prelude of Storm
              - Rhythm Buckshot
              - Harp of Rhythm
      - name: !!str 222
        difficulty: 1
        recommended: false
        description: Unable to cast 3-bar Tempest, but significantly increases 2-bar and normal skill damage. More downtime between Tempests due to Sun core. Similar playstyle to 11x (Recommended).
        arkgrid_cores: Tempest Refrain + Second Impact + Sound Blitz
        priorities:
          - Upkeep your damage synergy, Sonatina and maintain Adrenaline stacks.
          - Damage skills must be cast within Heavenly Tune window (8 seconds).
          - Sync your Heavenly Tune with Sonic Vibration.
          - Cast Serenade of Courage and Tempest at 2 bars.
          - You have 5 seconds to send Tempest. DO NOT MISS.
          - Reposition Harp of Rhythm if necessary.
          - Cast meter generation skills during downtime.
        arkPassiveTips:
          - Adjust your crit rate as close to 100% without overcapping. It is fine to have 97-99%. Heavenly Tune provides +20% crit rate.
          - Swap to Keen Sense 1 if you need additional crit rate. Use Master + Critical if you need more.
          - 1115 Crit = 53% with High CritRate% rings (Recommended).
          - Raid Captain is efficient with 136% movement speed, or 1281 Swiftness plus a 5% Feast. Excess stats should be placed into Swiftness (Recommended) or Specialization.
          - Specialization only increases Serenade meter generation. This does not increase buff efficiency or skill damage for True Courage Bard.
          - Tempest, Vivace, and Hymn of Combat are not buffed by 17p Sun core, therefore we use 3/3 Stormfield instead.
        arkPassives:
          - name: Crit
            points: 0
            category: evolution
            tier: 1
          - name: Swiftness
            points: 21
            category: evolution
            tier: 1
          - name: Limit Break
            points: 3
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
          - name: Standing Striker
            points: 2
            category: evolution
            tier: 5
          - name: True Courage
            points: 1
            category: enlightenment
            tier: 1
          - name: "Hymn: Tempest"
            points: 3
            category: enlightenment
            tier: 2
          - name: Maestro
            points: 3
            category: enlightenment
            tier: 3
          - name: Stormfield
            points: 3
            category: enlightenment
            tier: 4
          - name: Mad Dash
            points: 2
            category: enlightenment
            tier: 4
          - name: Transcendent Power
            points: 5
            category: leap
            tier: 1
          - name: Unleashed Power
            points: 4
            category: leap
            tier: 1
          - name: Instant Spell
            points: 2
            category: leap
            tier: 1
          - name: Ostinato
            points: 3
            category: leap
            tier: 2
        skills:
          - name: Heavenly Tune
            level: 10
            tripods:
              - Quick Prep
              - Tough Tune
              - Tune for Me
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Self Buff, Crit Rate Buff, Mana Regeneration, Paralysis Immune**
              - Increases your Attack Power by 25%.
              - <tripod>Courageous Tune</tripod> can be used over <tripod>Tough Tune</tripod> to provide raidwide damage mitigation on hit.
              - Tough Tune is mandatory if you are running Mass Increase engraving.
              - Heavenly Tune's mana regeneration does NOT stack with Support Bards in the same party. You still gain the support AP buff.
          - name: Sonatina
            level: 14
            tripods:
              - Quick Prep
              - Note Brand
              - Increase Melody
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Synergy, Weakpoint, Meter Generation, Paralysis Immune**
              - <tripod>Note Brand</tripod> applies -12% defense down synergy on enemies.
              - Keep this applied at all times.
              - Swap to Purify rune if the raid calls for self-cleanse.
          - name: Sonic Vibration
            level: 14
            tripods:
              - Tenacity
              - Chain Vibration
              - Spreading Vibration
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, High Weakpoint, Paralysis Immune, Optional Push Immunity**
              - Cast inside Heavenly Tune window.
              - Full damage if initial cast and lingering ball hits.
              - <tripod>Tenacity</tripod> can be replaced with <tripod>Agile Cast</tripod> (NOT Recommended).
          - name: Wind of Music
            level: 10
            tripods:
              - Quick Prep
              - Melody Increase
              - Superspeed Cast
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Highest Meter Generator, Stagger, Paralysis Immune**
              - Cast this skill off cooldown (close range).
              - Good burst stagger.
          - name: Soundholic
            level: 14
            tripods:
              - Sound Concentration
              - Sustain Enhancement
              - Melody Increase
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **High Meter Generator, Damage Skill, Stagger, Paralysis Immune**
              - <tripod>Focus Fire</tripod> and damage gem MANDATORY for Sound Blitz core (Recommended).
              - Back Attack with Sound Blitz core whenever possible. Do not delay your casts to chase Back.
              - Inputting another skill or movement will preemptively cancel Soundholic.
          - name: Harp of Rythmn
            level: 14
            tripods:
              - Summoning Will
              - Melody Increase
              - Giant Harp
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Meter Generator, Damage Skill, NO Immunity**
              - Harp of Rhythm is entirely stationary. Recast harp if the boss moves out of range.
              - Press Shift on desired target to change the skill's target for raids with multiple minions. Active target has an orange ring around their feet.
              - Swap to <tripod>Note Brand</tripod> at a damage loss, if you are struggling with synergy upkeep.
          - name: Rhythm Buckshot
            level: 10
            tripods:
              - Melody Increase
              - Tenacity
              - Agile Cast
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Meter Generation, Counter, Weak Point, Stagger, Push Immune**
              - One of the two available counters (Melee, Cone)
              - Should be used off cooldown primarily for meter generation.
              - Yes, this skill is loaded.
          - name: Prelude of Storm
            level: 10
            tripods:
              - Quick Prep
              - Melody Increase
              - Powerful Prelude
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Meter Generation, Counter, NO Immunity**
              - One of the two available counters (Melee, AOE)
              - Inferior to Rhythm Buckshot as a counter, but similar meter gain with a small cooldown advantage.
              - Initial hit accounts for 50% of the meter generation, <tripod>Powerful Prelude</tripod> generates 16.7% per tick over 2 seconds.
          - name: Vivace
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, Stagger, Paralysis Immune**
              - Ostinato (Leap Tree) turns Vivace into a Normal cast.
              - Fits inside every 4th Heavenly Tune cast.
          - name: Symphonia / Symphony Melody
            icon: Symphonia
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Fixed Meter Generation Skill**
              - Provides 1 bar upon completion. Hitting the boss is optional.
              - Allows more Tempest casts over the course of the fight.
              - Casting Hyper Awakening will block the next lethal attack within 30 seconds (excluding wipe mechs).
        gems:
          - skill: Tempest
            type: damage
            priority: 1
          - skill: Sonic Vibration
            type: damage
            priority: 2
          - skill: Soundholic
            type: damage
            priority: 3
          - skill: Heavenly Tune
            type: cooldown
            priority: 1
          - skill: Sonic Vibration
            type: cooldown
            priority: 2
          - skill: Wind of Music
            type: cooldown
            priority: 3
          - skill: Soundholic
            type: cooldown
            priority: 4
          - skill: Rhythm Buckshot
            type: cooldown
            priority: 5
          - skill: Sonatina
            type: cooldown
            priority: 6
          - skill: Prelude of Storm
            type: cooldown
            priority: 7
          - skill: Harp of Rhythm
            type: cooldown
            priority: 8
        rotation_sections:
          - title: Damage Rotation Priority
            steps:
              - Heavenly Tune
              - Serenade of Courage
              - Tempest
              - Vivace
              - Sonic Vibration
              - Soundholic
              - Harp of Rhythm
          - title: Meter Generation Priority
            steps:
              - Wind of Music
              - Soundholic
              - Prelude of Storm
              - Rhythm Buckshot
              - Harp of Rhythm
      - name: !!str 333
        difficulty: 1
        recommended: false
        description: Spreads damage amongst Normal Skills at the cost of limited meter generation. Sound Shock becomes your bread and butter skill. Not forced to play in melee range. "Note:" As of July 2026, this build lacks significant damage (upwards of 12% compared to 11x) and NOT recommended. Play this build only because you want to.
        arkgrid_cores: Shock Loop + Harmonious Confluence + Binary Shock
        priorities:
          - Upkeep your damage synergy, Sonatina and maintain Adrenaline stacks.
          - Damage skills must be cast within Heavenly Tune window (8 seconds).
          - Destiny buffs your next two Sound Shock casts via Heavenly Tune.
          - Cast Serenade of Courage and Tempest at 2 or 3 bars.
          - You have 5 seconds to send Tempest. DO NOT MISS.
          - Reposition Harp of Rhythm if necessary.
        arkPassiveTips:
          - Adjust your crit rate as close to 100% without overcapping. It is fine to have 97-99%. Heavenly Tune provides +20% crit rate.
          - Swap to Keen Sense 1 if you need additional crit rate. Use Master + Critical if you need more.
          - 1115 Crit = 53% with High CritRate% rings (Recommended).
          - Raid Captain is efficient with 136% movement speed, or 1281 Swiftness plus a 5% Feast. Excess stats should be placed into Swiftness (Recommended).
          - Sun Core reduces meter generation by 100%. This means Specialization has no use for this build.
          - More priority on Normal Skills for damage, therefore we take 3/3 Stormfield and 2/5 Mad Dash.
        arkPassives:
          - name: Crit
            points: 0
            category: evolution
            tier: 1
          - name: Swiftness
            points: 21
            category: evolution
            tier: 1
          - name: Limit Break
            points: 3
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
          - name: Standing Striker
            points: 2
            category: evolution
            tier: 5
          - name: True Courage
            points: 1
            category: enlightenment
            tier: 1
          - name: "Hymn: Tempest"
            points: 3
            category: enlightenment
            tier: 2
          - name: Maestro
            points: 3
            category: enlightenment
            tier: 3
          - name: Stormfield
            points: 3
            category: enlightenment
            tier: 4
          - name: Mad Dash
            points: 2
            category: enlightenment
            tier: 4
          - name: Transcendent Power
            points: 5
            category: leap
            tier: 1
          - name: Unleashed Power
            points: 4
            category: leap
            tier: 1
          - name: Instant Spell
            points: 2
            category: leap
            tier: 1
          - name: Ostinato
            points: 3
            category: leap
            tier: 2
        skills:
          - name: Heavenly Tune
            level: 10
            tripods:
              - Quick Prep
              - Tough Tune
              - Tune for Me
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Self Buff, Crit Rate Buff, Mana Regeneration, Paralysis Immune**
              - Increases your Attack Power by 25%.
              - <tripod>Courageous Tune</tripod> can be used over <tripod>Tough Tune</tripod> to provide raidwide damage mitigation on hit.
              - Tough Tune is mandatory if you are running Mass Increase engraving.
              - Heavenly Tune's mana regeneration does NOT stack with Support Bards in the same party. You still gain the support AP buff.
              - Optional Quick Recharge (epic)
          - name: Sonatina
            level: 11
            tripods:
              - Quick Prep
              - Note Brand
              - Recital
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Synergy, Weakpoint, Paralysis Immune**
              - <tripod>Note Brand</tripod> applies -12% defense down synergy on enemies.
              - Keep this applied at all times.
          - name: Sound Shock
            level: 14
            tripods:
              - Maintained Explosion
              - Shock Enhancement
              - Rapid Fire
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Highest Meter Generator, Damage, High Stagger, Paralysis Immune (Star Core)**
              - Main source of meter generation. This is a fixed amount of meter, about ~50% on crit.
              - MUST CRIT to generate any meter.
              - Activating Destiny buffs the next 2 casts of Sound Shock.
          - name: Sonic Vibration
            level: 14
            tripods:
              - Tenacity
              - Chain Vibration
              - Spreading Vibration
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, High Weakpoint, Paralysis Immune, Optional Push Immunity**
              - Cast inside Heavenly Tune window.
              - Full damage if initial cast and lingering ball hits.
              - <tripod>Tenacity</tripod> can be replaced with <tripod>Agile Cast</tripod> (NOT Recommended).
          - name: Stigma
            level: 14
            tripods:
              - Sustain Enhancement
              - Storm Stigma
              - Stigma of Pain
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage, Stagger, Paralysis Immune**
              - Long casting skill, ramping damage over time.
              - Homing skill will chase after the boss due to <tripod>Storm Stigma</tripod>
              - Can animation cancel into Sonic Vibration to reduce casting time.
              - Requires Skills Instant Cast to be turned off (Settings, Gameplay, Control Settings).
          - name: Soundholic
            level: 14
            tripods:
              - Sound Concentration
              - Sustain Enhancement
              - Focus Fire
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Damage, Stagger, Paralysis Immune**
              - Lowest priority damage skill.
              - Do not delay your casts to chase Back.
              - Inputting another skill or movement will preemptively cancel Soundholic.
          - name: Harp of Rythmn
            level: 14
            tripods:
              - Summoning Will
              - Melody Increase
              - Giant Harp
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Fixed Meter Generator, Damage, NO Immunity**
              - <tripod>Melody Increase</tripod> provides a fixed 1% meter/second, NOT reduced by Destiny.
              - Harp of Rhythm is entirely stationary. Recast harp if the boss moves out of range.
              - Press Shift on desired target to change the skill's target for raids with multiple minions. Active target has an orange ring around their feet.
              - Swap to <tripod>Note Brand</tripod> at a damage loss, if you are struggling with synergy upkeep.
          - name: Rhythm Buckshot
            level: 7
            tripods:
              - Mind Enhancement
              - Tenacity
            rune: Purify
            rune_rarity: legendary
            notes: |-
              **Counter, Weak Point, Stagger, Push Immune**
              - You can hold this skill as a counter or emergency push immunity.
          - name: Vivace
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, Stagger, Paralysis Immune**
              - Ostinato (Leap Tree) turns Vivace into a Normal cast.
              - Fits inside every 4th Heavenly Tune cast.
          - name: Symphonia / Symphony Melody
            icon: Symphonia
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Fixed Meter Generation Skill**
              - Provides 1 bar upon completion. Hitting the boss is optional.
              - Allows more Tempest casts over the course of the fight.
              - Casting Hyper Awakening will block the next lethal attack within 30 seconds (excluding wipe mechs).
        gems:
          - skill: Tempest
            type: damage
            priority: 1
          - skill: Sonic Vibration
            type: damage
            priority: 2
          - skill: Sound Shock
            type: damage
            priority: 3
          - skill: Stigma
            type: damage
            priority: 4
          - skill: Soundholic
            type: damage
            priority: 5
          - skill: Heavenly Tune
            type: cooldown
            priority: 1
          - skill: Sonic Vibration
            type: cooldown
            priority: 2
          - skill: Sound Shock
            type: cooldown
            priority: 3
          - skill: Stigma
            type: cooldown
            priority: 4
          - skill: Sonatina
            type: cooldown
            priority: 5
          - skill: Harp of Rhythm
            type: cooldown
            priority: 6
        dps_distribution:
          - name: Tempest
            dmg: 42
          - name: Vivace
            dmg: 17
          - name: Sonic Vibration
            dmg: 12
          - name: Sound Shock
            dmg: 8
          - name: Stigma
            dmg: 7
          - name: Soundholic
            dmg: 6
          - name: Harp of Rhythm
            dmg: 5
          - name: Sonatina
            dmg: 1.5
        rotation_sections:
          - title: General Damage Rotation
            steps:
              - Serenade of Courage
              - Heavenly Tune
              - Sound Shock
              - Tempest
              - Vivace
              - Stigma
              - Sonic Vibration
              - Sound Shock
              - Soundholic
          - title: Meter Generation Priority
            steps:
              - Sound Shock
              - Harp of Rhythm
---