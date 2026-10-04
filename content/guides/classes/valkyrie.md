---
title: Valkyrie Guide
class: Warrior (Female)
subclass: Valkyrie
class_id: 113
description: Complete guide to Valkyrie including Liberator (Support) and Shining Knight (DPS) builds with Ark Grid variants.
identity:
  name: Light Meter
  description:  Shining Knight Valkyrie replaces the Piety Meter with the Light Meter, which fills up upon 15 individual spell casts and allows Final Splendor (X) to be cast.  Final Splendor (X) is the main source of Shining Knight Valkyrie's damage.  Additionally, Shining Knight (Z) provides a 35% damage increase to the next 3 Holy Blade skill casts, and its cooldown is reset with every cast of Final Splendor.  Shining Knight (Z) also resets Valkyrie's spacebar dash cooldown.
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
      description: Liberator Valkyrie generates Piety Meter with Holy Blade (red) and Protection (yellow) skills. Release Light (Z) is a 10% party damage buff for 12 seconds that scales with the Specialization stat. Light of the Faithful (X) heals for 10/20/30% max HP based on how many Release Light casts have occurred since the previous heal, stacking up to 3 times.
    synergy:
      name: Attack Power Buff, Light's Vestige (brand)
      description: Party Attack Power Bonus +22%, Damage from Party Members +10%.
      skills:
        - Seraphic Oath
        - Seraphic Leap
        - Circle of Truth
        - Truth's Decree
    preArkGrid:
      description: Pre and Post-Ark Grid setup play nearly identically, the only major difference is that Pre-Ark Grid build has only one stack on Requiem Ash, thus having less burst identity meter gain.
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
          alt-icon: Release Light
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
        arkgrid_cores: Light Carves Life + Break of Dawn + Holy Blade's Ashes (T Skill, recommended) | Light's Grace + Epic of Light + Holy Blade's Ashes (AP Buff, recommended) | Sacred Oath + Pledge of Salvation + Holy Blade's Ashes (Identity, weakest)
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
        gems:
          - skill: Piety Skill
            alt-icon: Release Light
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
          - With higher level cooldown gems, you can opt for less swiftness and more specialization (around 100 points per gem level, from a baseline of full 8 gems).  This grants slightly stronger identity buffing power (efficiency, not uptime) at the cost of longer cooldowns on utility skills (shields, damage reduction, stagger, counter), lower uptime on Divine Confirmation, and a slightly tighter AP Buff cycle.  Only reccommended if you have high level gems and are extremely efficient at upkeeping AP Buff and Brand already (near 100% uptime).  Full Swiftness is completely viable and recommended as well, it is just up to your preference.
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
  - name: Shining Knight (DPS)
    engraving: Shining Knight
    description: DPS build with a very comfortable rotation, lots of push-immunity, and fairly strong burst.
    playstyle: Cycle between low cooldown Justice (white) skills and higher cooldown Holy Blade (red) skills to fill up Light Meter, then expend meter to cast Final Splendor (x) to deal massive amounts of damage.
    difficulty: easy
    preArkGrid:
      description: Pre and 111 Ark Grid setup play nearly identically, the only major difference is that Pre-Ark Grid build does not gain Light Meter by casting Shining Knight (z), as well as has lower damage on Final Splendor (x).
      priorities:
        - Cycle skills quickly and efficiently to fill up Light Meter as fast as possible, to maximize the cast-per-minute of Final Splendor.
        - Utilize Light Sword buff gained from Shining Knight to deal supplementary damage with Requiem Rain, Requiem Ash, and Cataclysm.
        - Upkeep important buffs such as Target Weak Point synergy and Nimble Movement (self move speed buff) while dealing damage.
      arkPassiveTips:
        - Aim for 100% Critical Hit Rate, as Shining Knight Valkyrie is heavily balanced around always critting.
        - Most if not all Crit tuning can be done through Ark Passive, the build shown is based on an assumed very low amount of base crit (lacking crit from rings, bracelet, relic Adrenaline, etc.)  Replace Keen Sense points with Limit Break points, Zealous Smite points with Unlimited Magick points, or replace Pulverize with Critical, to tune for 100% crit as needed.
      arkPassives:
        - name: Crit
          points: 30
          category: evolution
          tier: 1
        - name: Swiftness
          points: 10
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
        - name: Unlimited Magick
          points: 1
          category: evolution
          tier: 3
        - name: Zealous Smite
          points: 1
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
        - name: Shining Knight
          points: 1
          category: enlightenment
          tier: 1
        - name: Sword Training
          points: 3
          category: enlightenment
          tier: 2
        - name: Holy Sword Unleashed
          points: 3
          category: enlightenment
          tier: 3
        - name: Light's Bond
          points: 1
          category: enlightenment
          tier: 3
        - name: Trinity
          points: 3
          category: enlightenment
          tier: 4
        - name: Last Light
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
        - name: Sword of Faith
          points: 3
          category: leap
          tier: 2
      engravings:
        - name: Grudge
          priority: required
        - name: Raid Captain
          priority: required
        - name: Keen Blunt Weapon
          priority: required
        - name: Adrenaline
          priority: required
        - name: Cursed Doll
          priority: recommended
        - name: Hit Master
          priority: recommended
      skills:
        - name: Requiem Rain
          level: 14
          tripods:
            - Magick Control
            - Piercing Light
            - Archangel's Sword
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Main Damage Skill, Mid-high Stagger Skill**
            - <tripod>Swift Fingers</tripod> can be taken if you do not encounter MP issues.
            - High priority skill to cast, ensure that it is buffed with Light Sword buff from Shining Knight (z).
        - name: Requiem Ash
          level: 14
          tripods:
            - Magick Control
            - Summary Execution
            - Righteous Punishment
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Main Damage Skill, High Stagger Skill, Weak Point Destruction**
            - <tripod>Swift Fingers</tripod> can be taken if you do not encounter MP issues.
            - <tripod>Divine Concentration</tripod> can be taken as a slightly higher damage alternative, at the cost of the damage being heavily delayed/backloaded.
            - High priority skill to cast, ensure that it is buffed with Light Sword buff from Shining Knight (z).
        - name: Whisper of Judgment
          level: 14
          tripods:
            - Pilgrim
            - Absolute Sword Strike
            - Storm's Protection
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Secondary Damage Skill, Max Stagger Skill, Weak Point Destruction, Push Immunity**
            - Fast skill with decent damage  and stagger, also has push immunity from <tripod>Storm's Protection</tripod>.
            - <tripod>Precise Sword Strike</tripod> and <tripod>Echo of Revelation</tripod> can be taken as an alternative with slightly higher damage, but at the expense of a much longer cast animation and no longer having push immunity.   Can also be candidate for Conviction or Judgment Rune with this tripod setup, but not recommended as much as the alternatives.
        - name: Judgment Stigmata
          level: 14
          tripods:
            - Pilgrim
            - Bladecraft Enhancement
            - Stormblade
          rune: Focus
          rune_rarity: legendary
          notes: |-
            **Secondary Damage Skill, Mid-high Stagger Skill, Weak Point Destruction**
            - Very fast filler damage skill, though it has very low damage compared to the other damage skills and lacks paralysis immunity.
            - Candidate for Conviction Rune, if taken along with Judgment on Meteor Strike (recommended), or multihit Whisper of Judgment (less recommended).
        - name: Sword of Revelation
          level: 10
          tripods:
            - Nimble Movement
            - Steadfast
            - Double Cross
          rune: Bleed
          rune_rarity: legendary
          notes: |-
            **Self Movement Speed Buff, Counter, Stacking Skill**
            - <tripod>Steadfast</tripod> turns this skill into a Justice (white) skill, so it does not consume Light Sword stacks.
            - <tripod>Double Cross</tripod> grants an additional stack to this skill.  Always keep one stack off cooldown in case you need to counter or reapply self MS buff, unless it is the difference between casting a Final Splendor and not.
            - Does not need to hit the boss, feel free to spam even when the boss is not hittable to generate Light Meter.
        - name: Foresight Slash
          level: 7
          tripods:
            - Target Weak Point
            - Brutal Honesty
          rune: Poison
          rune_rarity: legendary
          notes: |-
            **Synergy Skill, Counter**
            - While this is one of your synergy applicators, feel free to spam even when the boss is not hittable to generate Light Meter.  Try to hit the boss when possible.
        - name: Lunging Stab
          level: 10
          tripods:
            - Target Weak Point
            - Nimble Movement
            - Focused Blow
          rune: Quick Recharge
          rune_rarity: epic
          notes: |-
            **Synergy Skill, Self Movement Speed Buff, Mobility**
            - Longest applicator of self MS buff and synergy, try to hit this skill on the boss when applicable.
        - name: Meteor Strike
          level: 10
          tripods:
            - Swift Fingers
            - Stalwart Movement
            - Double Stab
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Filler Meter Generation Skill, Stacking Skill**
            - This skill does no damage, just cast it off cooldown for Light Meter.
            - Can be given Judgment rune in conjunction with Conviction on Judgment Stigmata, by nature of it being a stacking skill with many hits it is a very efficient way to proc Judgment, as you can freely hold the skill at 1 stack with no opportunity cost.
        - name: Cataclysm
          level_label: Hyper Awakening Technique
          notes: |-
            **Main Damage Skill, High Stagger Skill, Weak Point Destruction**
            - Fast and strong burst damage skill, make sure it is always buffed with Light Sword buff from Shining Knight (z)
            - Celestial Blade can be taken to turn this skill into a Perfect Combo skill, increasing the damage slightly at the cost of a longer animation.  The choice between this and Sword of Faith is completely up to preference.
        - name: Brundia's Epiphany / Brundia's Incarnation
          icon: Brundia's Epiphany
          level_label: Awakening / Hyper Awakening
          notes: |-
            - Standard damage awakening skill, does not generate any Light Meter.
      gems:
        - skill: Final Splendor
          type: damage
          priority: 1
        - skill: Requiem Ash
          type: damage
          priority: 2
        - skill: Requiem Rain
          type: damage
          priority: 3
        - skill: Whisper of Judgment
          type: damage
          priority: 4
        - skill: Requiem Ash
          type: cooldown
          priority: 1
        - skill: Requiem Rain
          type: cooldown
          priority: 2
        - skill: Whisper of Judgment
          type: cooldown
          priority: 3
        - skill: Lunging Stab
          type: cooldown
          priority: 4
        - skill: Meteor Strike
          type: cooldown
          priority: 5
        - skill: Sword of Revelation
          type: cooldown
          priority: 6
        - skill: Judgment Stigmata
          type: cooldown
          priority: 7
      rotation:
        - Sword of Revelation
        - Foresight Slash
        - Meteor Strike
        - Lunging Stab
        - Shining Knight
        - Final Splendor
        - Cataclysm
        - Requiem Rain
        - Requiem Ash
        - Sword of Revelation
        - Foresight Slash
        - Judgment Stigmata
        - Whisper of Judgment
        - Lunging Stab
        - Meteor Strike
        - Meteor Strike
        - Sword of Revelation
        - Foresight Slash
        - Sword of Revelation
        - Lunging Stab
        - Foresight Slash
        - Shining Knight
        - Final Splendor
    engravings:
      - name: Grudge
        priority: required
      - name: Raid Captain
        priority: required
      - name: Keen Blunt Weapon
        priority: required
      - name: Adrenaline
        priority: required
      - name: Cursed Doll
        priority: recommended
      - name: Hit Master
        priority: recommended
    variants:
      - name: 111 Ark Grid (Final Splendor)
        difficulty: 1
        recommended: true
        description: Most standard Shining Knight Valkyrie build, plays identical to Pre-Ark Grid setup with 1 extra tick of Light Meter Generation coming from Shining Knight (z), and increased cast speed + damage on Final Splendor.
        stats: Crit 30/30, Swiftness 10/30
        arkgrid_cores: Final Words + Knight of Finality + True End
        arkgrid_prose: |-
          Core Priority is Knight of Finality > Final Words > True End
          There is no minimum to make the setup work, you will just gain more damage with every increase in points up to 17.
        priorities:
          - Cycle skills quickly and efficiently to fill up Light Meter as fast as possible, to maximize the cast-per-minute of Final Splendor.
          - Utilize Light Sword buff gained from Shining Knight to deal supplementary damage with Requiem Rain, Requiem Ash, and Cataclysm.
          - Upkeep important buffs such as Target Weak Point synergy and Nimble Movement (self move speed buff) while dealing damage.
        skills:
          - name: Requiem Rain
            level: 14
            tripods:
              - Magick Control
              - Piercing Light
              - Archangel's Sword
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, Mid-high Stagger Skill**
              - <tripod>Swift Fingers</tripod> can be taken if you do not encounter MP issues.
              - High priority skill to cast, ensure that it is buffed with Light Sword buff from Shining Knight (z).
          - name: Requiem Ash
            level: 14
            tripods:
              - Magick Control
              - Summary Execution
              - Righteous Punishment
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, High Stagger Skill, Weak Point Destruction**
              - <tripod>Swift Fingers</tripod> can be taken if you do not encounter MP issues.
              - <tripod>Divine Concentration</tripod> can be taken as a slightly higher damage alternative, at the cost of the damage being heavily delayed/backloaded.
              - High priority skill to cast, ensure that it is buffed with Light Sword buff from Shining Knight (z).
          - name: Whisper of Judgment
            level: 14
            tripods:
              - Pilgrim
              - Absolute Sword Strike
              - Storm's Protection
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Secondary Damage Skill, Max Stagger Skill, Weak Point Destruction, Push Immunity**
              - Fast skill with decent damage  and stagger, also has push immunity from <tripod>Storm's Protection</tripod>.
              - <tripod>Precise Sword Strike</tripod> and <tripod>Echo of Revelation</tripod> can be taken as an alternative with slightly higher damage, but at the expense of a much longer cast animation and no longer having push immunity.   Can also be candidate for Conviction or Judgment Rune with this tripod setup, but not recommended as much as the alternatives.
          - name: Judgment Stigmata
            level: 14
            tripods:
              - Pilgrim
              - Bladecraft Enhancement
              - Stormblade
            rune: Focus
            rune_rarity: legendary
            notes: |-
              **Secondary Damage Skill, Mid-high Stagger Skill, Weak Point Destruction**
              - Very fast filler damage skill, though it has very low damage compared to the other damage skills and lacks paralysis immunity.
              - Candidate for Conviction Rune, if taken along with Judgment on Meteor Strike (recommended), or multihit Whisper of Judgment (less recommended).
          - name: Sword of Revelation
            level: 10
            tripods:
              - Nimble Movement
              - Steadfast
              - Double Cross
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Self Movement Speed Buff, Counter, Stacking Skill**
              - <tripod>Steadfast</tripod> turns this skill into a Justice (white) skill, so it does not consume Light Sword stacks.
              - <tripod>Double Cross</tripod> grants an additional stack to this skill.  Always keep one stack off cooldown in case you need to counter or reapply self MS buff, unless it is the difference between casting a Final Splendor and not.
              - Does not need to hit the boss, feel free to spam even when the boss is not hittable to generate Light Meter.
          - name: Foresight Slash
            level: 7
            tripods:
              - Target Weak Point
              - Brutal Honesty
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Synergy Skill, Counter**
              - While this is one of your synergy applicators, feel free to spam even when the boss is not hittable to generate Light Meter.  Try to hit the boss when possible.
          - name: Lunging Stab
            level: 10
            tripods:
              - Target Weak Point
              - Nimble Movement
              - Focused Blow
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Synergy Skill, Self Movement Speed Buff, Mobility**
              - Longest applicator of self MS buff and synergy, try to hit this skill on the boss when applicable.
          - name: Meteor Strike
            level: 10
            tripods:
              - Swift Fingers
              - Stalwart Movement
              - Double Stab
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Filler Meter Generation Skill, Stacking Skill**
              - This skill does no damage, just cast it off cooldown for Light Meter.
              - Can be canceled with spacebar when safe.
              - Can be given Judgment rune in conjunction with Conviction on Judgment Stigmata, by nature of it being a stacking skill with many hits it is a very efficient way to proc Judgment, as you can freely hold the skill at 1 stack with no opportunity cost.
          - name: Cataclysm
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, High Stagger Skill, Weak Point Destruction**
              - Fast and strong burst damage skill, make sure it is always buffed with Light Sword buff from Shining Knight (z)
              - Celestial Blade can be taken to turn this skill into a Perfect Combo skill, increasing the damage slightly at the cost of a longer animation.  The choice between this and Sword of Faith is completely up to preference.
          - name: Brundia's Epiphany / Brundia's Incarnation
            icon: Brundia's Epiphany
            level_label: Awakening / Hyper Awakening
            notes: |-
              - Standard damage awakening skill, does not generate any Light Meter.
        gems:
          - skill: Final Splendor
            type: damage
            priority: 1
          - skill: Requiem Ash
            type: damage
            priority: 2
          - skill: Requiem Rain
            type: damage
            priority: 3
          - skill: Whisper of Judgment
            type: damage
            priority: 4
          - skill: Requiem Ash
            type: cooldown
            priority: 1
          - skill: Requiem Rain
            type: cooldown
            priority: 2
          - skill: Whisper of Judgment
            type: cooldown
            priority: 3
          - skill: Lunging Stab
            type: cooldown
            priority: 4
          - skill: Meteor Strike
            type: cooldown
            priority: 5
          - skill: Sword of Revelation
            type: cooldown
            priority: 6
          - skill: Judgment Stigmata
            type: cooldown
            priority: 7
        rotation:
          - Sword of Revelation
          - Foresight Slash
          - Meteor Strike
          - Lunging Stab
          - Shining Knight
          - Final Splendor
          - Cataclysm
          - Requiem Rain
          - Requiem Ash
          - Sword of Revelation
          - Foresight Slash
          - Judgment Stigmata
          - Whisper of Judgment
          - Lunging Stab
          - Meteor Strike
          - Meteor Strike
          - Sword of Revelation
          - Foresight Slash
          - Sword of Revelation
          - Lunging Stab
          - Shining Knight
          - Final Splendor
        arkPassiveTips:
          - Aim for 100% Critical Hit Rate, as Shining Knight Valkyrie is heavily balanced around always critting.
          - Most if not all Crit tuning can be done through Ark Passive, the build shown is based on a fairly well invested character (high Crit rings, Relic Adrenaline, etc.)  If you cannot reach 100% crit with the shown setup, feel free to add points of Keen Sense, Zealous Smite, or whatever else to get as close as possible to the 100% Crit threshold.
        arkPassives:
          - name: Crit
            points: 30
            category: evolution
            tier: 1
          - name: Swiftness
            points: 10
            category: evolution
            tier: 1
          - name: Keen Sense
            points: 1
            category: evolution
            tier: 2
          - name: Limit Break
            points: 2
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
          - name: Master
            points: 1
            category: evolution
            tier: 4
          - name: Standing Striker
            points: 2
            category: evolution
            tier: 5
          - name: Shining Knight
            points: 1
            category: enlightenment
            tier: 1
          - name: Sword Training
            points: 3
            category: enlightenment
            tier: 2
          - name: Holy Sword Unleashed
            points: 3
            category: enlightenment
            tier: 3
          - name: Light's Bond
            points: 1
            category: enlightenment
            tier: 3
          - name: Trinity
            points: 3
            category: enlightenment
            tier: 4
          - name: Last Light
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
          - name: Sword of Faith
            points: 3
            category: leap
            tier: 2
        dps_distribution:
          - name: Final Splendor
            dmg: 56.2
          - name: Cataclysm
            dmg: 13.5
          - name: Requiem Ash
            dmg: 7.6
          - name: Requiem Rain
            dmg: 7.6
          - name: Whisper of Judgment
            dmg: 4.8
          - name: Judgment Stigmata
            dmg: 2.6
          - name: Brundia's Epiphany
            dmg: 2.2
      - name: 222 Ark Grid (Holy Blade)
        difficulty: 1
        recommended: false
        description: Alternate playstyle to 111, in which you trade the extra damage/speed/meter generation on Final Splendor for increased damage on Holy Blade (red) skills as well as adding Execution of Revelation as a fourth main damage Holy Blade skill.  This build is extra work compared to 111 and less raid realistic, for not much extra damage.  Only worth playing if you either like the playstyle, have too many more ancients for this build compared to 111, or think you can play perfectly to reach complete ceiling.
        stats: Crit 30/30, Swiftness 10/30
        arkgrid_cores: Prayer + Light's Rest + Holy Blade's Execution
        arkgrid_prose: |-
          Core Priority is Light's Rest > Prayer > Holy Blade's Execution
          Minimum: Sun 14 Moon 14 Star 14, but will not perform well until everything is at 17.
        priorities:
          - Cycle skills quickly and efficiently to fill up Light Meter as fast as possible, to maximize the cast-per-minute of Final Splendor.
          - Utilize Light Sword buff gained from Shining Knight to deal damage with Cataclysm, Execution of Revelation, Requiem Ash, and Requiem Rain.  It is not possible to enhance every single skill, you will end up skipping enhancing Requiem Rain every other cycle.  Always ensure that you can enhance Cataclysm, as it makes up a noticable chunk of your damage distribution.
          - Upkeep important buffs such as Target Weak Point synergy and Nimble Movement (self move speed buff) while dealing damage.
        skills:
          - name: Requiem Rain
            level: 14
            tripods:
              - Swift Fingers
              - Piercing Light
              - Archangel's Sword
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Main Damage Skill, Mid-high Stagger Skill**
              - <tripod>Magick Control</tripod> can be taken if you need help with MP issues, however this is less recommended on this build as maximizing damage on it heavily relies on fitting all Holy Blade skills within the short Conviction + Judgment window.
              - This skill will be cast unenhanced every other cycle.
          - name: Requiem Ash
            level: 14
            tripods:
              - Swift Fingers
              - Divine Concentration
              - Righteous Punishment
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, High Stagger Skill, Weak Point Destruction**
              - <tripod>Magick Control</tripod> can be taken if you need help with MP issues, however this is less recommended on this build as maximizing damage on it heavily relies on fitting all Holy Blade skills within the short Conviction + Judgment window.
              - <tripod>Divine Concentration</tripod> can be taken as a slightly higher damage alternative, at the cost of the damage being heavily delayed/backloaded.
              - High priority skill to cast, ensure that it is buffed with Light Sword buff from Shining Knight (z).
          - name: Execution of Revelation
            level: 14
            tripods:
              - Pilgrim
              - Divine Concentration
              - Ascending Light
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill, Mid-high Stagger Skill, Push Immunity**
              - With the 222 Ark Grid cores, this becomes your highest damage normal Holy Blade Skill.  It also gains push immunity, so do not be afraid to abuse this (when applicable).
              - Should never be cast unenhanced, unless in very specific (bad) circumstances.
          - name: Judgment Stigmata
            level: 14
            tripods:
              - Pilgrim
              - Bladecraft Enhancement
              - Stormblade
            rune: Conviction
            rune_rarity: legendary
            notes: |-
              **Minor Damage Skill, Mid-high Stagger Skill, Weak Point Destruction**
              - Mainly used as a quick applicator of the Conviction rune before casting the main Holy Blade skills.  With 4 hits, it has an 87% chance to proc Conviction on cast.
              - Conviction can be replaced with Quick Recharge at a small loss, if you want a simpler / more flexible playstyle.
          - name: Meteor Strike
            level: 10
            tripods:
              - Swift Fingers
              - Stalwart Movement
              - Double Stab
            rune: Judgment
            rune_rarity: legendary
            notes: |-
              **Filler Meter Generation Skill, Stacking Skill**
              - Mainly used as a quick applicator of the Judgment rune, as there is no opportunity cost to having one stack be permanently available by nature of being a stacking skill, and it is a multihit that SHOULD never fail to proc Judgment.
              - Can be canceled with spacebar when safe, as long as you get the Judgment proc off first.
              - This skill does no damage, just cast it off cooldown for Light Meter.
              - Judgment can be replaced with Quick Recharge at a small loss, if you want a simpler / more flexible playstyle.
          - name: Sword of Revelation
            level: 10
            tripods:
              - Nimble Movement
              - Steadfast
              - Double Cross
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Self Movement Speed Buff, Counter, Stacking Skill**
              - <tripod>Steadfast</tripod> turns this skill into a Justice (white) skill, so it does not consume Light Sword stacks.
              - <tripod>Double Cross</tripod> grants an additional stack to this skill.  Always keep one stack off cooldown in case you need to counter or reapply self MS buff, unless it is the difference between casting a Final Splendor and not.
              - Does not need to hit the boss, feel free to spam even when the boss is not hittable to generate Light Meter.
          - name: Foresight Slash
            level: 7
            tripods:
              - Target Weak Point
              - Brutal Honesty
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Synergy Skill, Counter**
              - While this is one of your synergy applicators, feel free to spam even when the boss is not hittable to generate Light Meter.  Try to hit the boss when possible.
          - name: Lunging Stab
            level: 10
            tripods:
              - Target Weak Point
              - Nimble Movement
              - Focused Blow
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Synergy Skill, Self Movement Speed Buff, Mobility**
              - Longest applicator of self MS buff and synergy, try to hit this skill on the boss when applicable.
          - name: Cataclysm
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, High Stagger Skill, Weak Point Destruction**
              - Fast and strong burst damage skill, make sure it is always buffed with Light Sword buff from Shining Knight (z)
              - Although Celestial Blade increases the damage of this skill, the increased animation time is undesirable when trying to fit all Holy Blade skills into one Conviction + Judgment window.  Only take this node when playing the Quick Recharge variant.
          - name: Brundia's Epiphany / Brundia's Incarnation
            icon: Brundia's Epiphany
            level_label: Awakening / Hyper Awakening
            notes: |-
              - Standard damage awakening skill, does not generate any Light Meter.
        gems:
          - skill: Final Splendor
            type: damage
            priority: 1
          - skill: Execution of Revelation
            type: damage
            priority: 2
          - skill: Requiem Ash
            type: damage
            priority: 3
          - skill: Requiem Rain
            type: damage
            priority: 4
          - skill: Execution of Revelation
            type: cooldown
            priority: 1
          - skill: Requiem Ash
            type: cooldown
            priority: 2
          - skill: Requiem Rain
            type: cooldown
            priority: 3
          - skill: Lunging Stab
            type: cooldown
            priority: 4
          - skill: Judgment Stigmata
            type: cooldown
            priority: 5
          - skill: Meteor Strike
            type: cooldown
            priority: 6
          - skill: Sword of Revelation
            type: cooldown
            priority: 7
        rotation:
          - Sword of Revelation
          - Foresight Slash
          - Meteor Strike
          - Sword of Revelation
          - Shining Knight
          - Final Splendor
          - Lunging Stab
          - Judgment Stigmata
          - Meteor Strike
          - Cataclysm
          - Execution of Revelation
          - Requiem Ash
          - Requiem Rain
          - Foresight Slash
          - Sword of Revelation
          - Meteor Strike
          - Sword of Revelation
          - Lunging Stab
          - Meteor Strike
          - Shining Knight
          - Foresight Slash
          - Judgment Stigmata
          - Final Splendor
        arkPassiveTips:
          - Aim for 100% Critical Hit Rate, as Shining Knight Valkyrie is heavily balanced around always critting.
          - Most if not all Crit tuning can be done through Ark Passive, the build shown is based on a fairly well invested character (high Crit rings, Relic Adrenaline, etc.)  If you cannot reach 100% crit with the shown setup, feel free to add points of Keen Sense, Zealous Smite, or whatever else to get as close as possible to the 100% Crit threshold.
        arkPassives:
          - name: Crit
            points: 30
            category: evolution
            tier: 1
          - name: Swiftness
            points: 10
            category: evolution
            tier: 1
          - name: Keen Sense
            points: 1
            category: evolution
            tier: 2
          - name: Limit Break
            points: 2
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
          - name: Master
            points: 1
            category: evolution
            tier: 4
          - name: Standing Striker
            points: 2
            category: evolution
            tier: 5
          - name: Shining Knight
            points: 1
            category: enlightenment
            tier: 1
          - name: Sword Training
            points: 3
            category: enlightenment
            tier: 2
          - name: Holy Sword Unleashed
            points: 3
            category: enlightenment
            tier: 3
          - name: Light's Bond
            points: 1
            category: enlightenment
            tier: 3
          - name: Trinity
            points: 3
            category: enlightenment
            tier: 4
          - name: Last Light
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
          - name: Sword of Faith
            points: 3
            category: leap
            tier: 2
        dps_distribution:
          - name: Final Splendor
            dmg: 37.9
          - name: Cataclysm
            dmg: 18.5
          - name: Execution of Revelation
            dmg: 12.7
          - name: Requiem Ash
            dmg: 11.4
          - name: Requiem Rain
            dmg: 8.4
          - name: Judgment Stigmata
            dmg: 2.3
          - name: Brundia's Epiphany
            dmg: 2.2
      - name: 333 Ark Grid (Justice)
        difficulty: 1
        recommended: false
        description: Alternate playstyle in which the damage of Justice (white) skills, namely Whisper of Judgment, are increased by a significant amount.  This puts a greater emphasis on cycling normal damage skills, and takes away helpful QoL such as push immunity on Whisper of Judgment.  Also adds an extra mobility skill (optional) in Approach of Revelation.  Not really recommended unless you specifically like the playstyle, or have a disproportionate amount of Ancient cores for this spec.
        stats: Crit 30/30, Swiftness 10/30
        arkgrid_cores: Whispering Sword + Dazzling Justice + Greater Justice
        arkgrid_prose: |-
          Core Priority is Whispering Sword > Dazzling Justice > Greater Justice
          Minimum points is 14/14/10, though the build will be fairly weak until full 17.
        priorities:
          - Cycle skills quickly and efficiently to fill up Light Meter as fast as possible, to maximize the cast-per-minute of Final Splendor.
          - Ensure Destiny effect is active (from Judgment Stigmata) before casting Whisper of Judgment.
          - Utilize Light Sword buff gained from Shining Knight to deal supplementary damage with Requiem Rain, Requiem Ash, and Cataclysm.
          - Upkeep important buffs such as Target Weak Point synergy and Nimble Movement (self move speed buff) while dealing damage.
        skills:
          - name: Requiem Rain
            level: 14
            tripods:
              - Magick Control
              - Piercing Light
              - Archangel's Sword
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, Mid-high Stagger Skill**
              - <tripod>Swift Fingers</tripod> can be taken if you do not encounter MP issues.
              - Medium priority skill to cast, ensure that it is buffed with Light Sword buff from Shining Knight (z).
          - name: Requiem Ash
            level: 14
            tripods:
              - Magick Control
              - Summary Execution
              - Righteous Punishment
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, High Stagger Skill, Weak Point Destruction**
              - <tripod>Swift Fingers</tripod> can be taken if you do not encounter MP issues.
              - <tripod>Divine Concentration</tripod> can be taken as a slightly higher damage alternative, at the cost of the damage being heavily delayed/backloaded.
              - Medium priority skill to cast, ensure that it is buffed with Light Sword buff from Shining Knight (z).
          - name: Whisper of Judgment
            level: 14
            tripods:
              - Pilgrim
              - Precise Sword Strike
              - Echo of Revelation
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, Max Stagger Skill, Weak Point Destruction**
              - Tripods are mandatory, as this is now the highest damage skill other than Final Splendor.
              - Make sure to not get this skill cancelled, and prioritize it over every other normal skill (other than if you need to cast Judgment Stigmata first for Destiny activation).
          - name: Judgment Stigmata
            level: 14
            tripods:
              - Pilgrim
              - Bladecraft Enhancement
              - Stormblade
            rune: Focus
            rune_rarity: legendary
            notes: |-
              **Secondary Damage Skill, Mid-high Stagger Skill, Weak Point Destruction**
              - Medium to low damage skill, but required to cast before Whisper of Judgment as this is the Destiny activator that allows Whisper of Judgment to do increased damage.
              - Can and should be precast before the fight or during mechanics to "pre-charge" the Destiny effect, letting you prioritize casting Whisper of Judgment before this skill.  If you do this, reverse the order of the two skills in the listed rotation (WoJ then JS).
          - name: Sword of Revelation
            level: 10
            tripods:
              - Nimble Movement
              - Steadfast
              - Double Cross
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Self Movement Speed Buff, Counter, Stacking Skill**
              - <tripod>Steadfast</tripod> turns this skill into a Justice (white) skill, so it does not consume Light Sword stacks.
              - <tripod>Double Cross</tripod> grants an additional stack to this skill.  Always keep one stack off cooldown in case you need to counter or reapply self MS buff, unless it is the difference between casting a Final Splendor and not.
              - Does not need to hit the boss, feel free to spam even when the boss is not hittable to generate Light Meter.
          - name: Foresight Slash
            level: 7
            tripods:
              - Target Weak Point
              - Brutal Honesty
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Synergy Skill, Counter**
              - While this is one of your synergy applicators, feel free to spam even when the boss is not hittable to generate Light Meter.  Try to hit the boss when possible.
          - name: Lunging Stab
            level: 10
            tripods:
              - Target Weak Point
              - Nimble Movement
              - Focused Blow
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Synergy Skill, Self Movement Speed Buff, Mobility**
              - Longest applicator of self MS buff and synergy, try to hit this skill on the boss when applicable.
          - name: Approach of Revelation
            level: 14
            tripods:
              - Swift Fingers
              - Triple Chain Kill
              - Divine Concentration
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Filler Damage Skill, Mobility**
              - This skill does little damage, should be cast off cooldown for Light Meter but still try to hit the boss when possible.
          - name: Cataclysm
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, High Stagger Skill, Weak Point Destruction**
              - Fast and strong burst damage skill, make sure it is always buffed with Light Sword buff from Shining Knight (z)
              - Celestial Blade can be taken to turn this skill into a Perfect Combo skill, increasing the damage slightly at the cost of a longer animation.  The choice between this and Sword of Faith is completely up to preference.
          - name: Brundia's Epiphany / Brundia's Incarnation
            icon: Brundia's Epiphany
            level_label: Awakening / Hyper Awakening
            notes: |-
              - Standard damage awakening skill, does not generate any Light Meter.
        gems:
          - skill: Final Splendor
            type: damage
            priority: 1
          - skill: Whisper of Judgment
            type: damage
            priority: 2
          - skill: Requiem Rain
            type: damage
            priority: 3
          - skill: Requiem Ash
            type: damage
            priority: 4
          - skill: Judgment Stigmata
            type: damage
            priority: 5
          - skill: Whisper of Judgment
            type: cooldown
            priority: 1
          - skill: Requiem Rain
            type: cooldown
            priority: 2
          - skill: Requiem Ash
            type: cooldown
            priority: 3
          - skill: Judgment Stigmata
            type: cooldown
            priority: 4
          - skill: Lunging Stab
            type: cooldown
            priority: 5
          - skill: Sword of Revelation
            type: cooldown
            priority: 6
        rotation:
          - Approach of Revelation
          - Sword of Revelation
          - Foresight Slash
          - Lunging Stab
          - Shining Knight
          - Final Splendor
          - Judgment Stigmata
          - Whisper of Judgment
          - Cataclysm
          - Requiem Rain
          - Requiem Ash
          - Sword of Revelation
          - Foresight Slash
          - Lunging Stab
          - Approach of Revelation
          - Sword of Revelation
          - Foresight Slash
          - Judgment Stigmata
          - Whisper of Judgment
          - Sword of Revelation
          - Lunging Stab
          - Shining Knight
          - Final Splendor
        arkPassiveTips:
          - Aim for 100% Critical Hit Rate, as Shining Knight Valkyrie is heavily balanced around always critting.
          - Most if not all Crit tuning can be done through Ark Passive, the build shown is based on a fairly well invested character (high Crit rings, Relic Adrenaline, etc.)  If you cannot reach 100% crit with the shown setup, feel free to add points of Keen Sense, Zealous Smite, or whatever else to get as close as possible to the 100% Crit threshold.
        arkPassives:
          - name: Crit
            points: 30
            category: evolution
            tier: 1
          - name: Swiftness
            points: 10
            category: evolution
            tier: 1
          - name: Keen Sense
            points: 1
            category: evolution
            tier: 2
          - name: Limit Break
            points: 2
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
          - name: Master
            points: 1
            category: evolution
            tier: 4
          - name: Standing Striker
            points: 2
            category: evolution
            tier: 5
          - name: Shining Knight
            points: 1
            category: enlightenment
            tier: 1
          - name: Sword Training
            points: 3
            category: enlightenment
            tier: 2
          - name: Holy Sword Unleashed
            points: 3
            category: enlightenment
            tier: 3
          - name: Light's Bond
            points: 1
            category: enlightenment
            tier: 3
          - name: Trinity
            points: 3
            category: enlightenment
            tier: 4
          - name: Last Light
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
          - name: Sword of Faith
            points: 3
            category: leap
            tier: 2
        dps_distribution:
          - name: Final Splendor
            dmg: 38.3
          - name: Whisper of Judgment
            dmg: 21.9
          - name: Cataclysm
            dmg: 11.8
          - name: Requiem Ash
            dmg: 7.5
          - name: Requiem Rain
            dmg: 7.5
          - name: Judgment Stigmata
            dmg: 6.9
          - name: Approach of Revelation
            dmg: 2.1
          - name: Brundia's Epiphany
            dmg: 2.1
---
