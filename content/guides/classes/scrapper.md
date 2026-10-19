---
title: Scrapper Guide
class: Female Martial Artist
subclass: Scrapper
class_id: 303
description: Complete guide to Scrapper including Shock and Taijutsu builds with Ark Grid variants.
author: StickDead (guide based on the Scrapper Ark Grid guide by Sly)
lastUpdated: '2026-10-15'
identity:
  name: Tenacity Release
  description: Scrapper has two resource bars, Stamina and Shock, and an identity gauge in the middle called Tenacity Release. Stamina skills use Stamina and generate Shock meter; they are quick and do decent damage. Shock skills use Shock and generate Stamina; they are slow and hard hitting. All skills fill the Tenacity Release meter when hitting an enemy. Once full, press Z to enter Tenacity Release for 10s, which applies a 6% damage synergy to nearby enemies, resets the Mobility skill cooldown (and halves it while active), refills and locks the Stamina and Shock bars, and grants 20% increased stagger. Shock gets 20% increased attack speed but only 5 seconds of duration, while Taijutsu gets paralysis immunity and Tenacious Power on Stamina skill casts.
synergy:
  name: Damage and Stagger Synergy
  description: Scrapper has three skills that apply a 6% damage synergy. These are Judgment with the Damage Amplification tripod (12 seconds, used by most builds), Crushing Smite (8 seconds, used by Shock 333) and Fierce Tiger Strike (8 seconds, used by Taijutsu 111). Tenacity Release also applies a 6% damage synergy to nearby enemies, which does not stack with the other synergy. Scrapper also has a stagger synergy with the Target Focus tripod of Critical Blow (20% stagger bonus for 6 seconds).
  skills:
    - Judgment
    - Crushing Smite
    - Fierce Tiger Strike
    - Critical Blow
    - Tenacity Release
builds:
  - name: Shock
    engraving: Shock Training
    description: |-
      Shock Scrapper has three Ark Grid variants. 333 (Shock Suppression) and 222 (Shockwave / Chain Destruction Fist) are recommended; 111 plays like pre Ark Grid Shock and is the weakest of the three. Guide put together by StickDead from the Scrapper Ark Grid guide created by Sly (2026 September balance patch).
    playstyle: |-
      Cast skills to build gauge and burst inside identity. 222 is a relaxed, low-CPM build; 333 is the high-CPM ceiling build with CD resets on entering identity.
    difficulty: medium
    engravings:
      - name: Grudge
        priority: required
      - name: Ambush Master
        priority: required
      - name: Adrenaline
        priority: required
      - name: Mass Increase
        priority: required
      - name: Keen Blunt Weapon
        priority: required
      - name: Raid Captain
        priority: optional
      - name: Cursed Doll
        priority: required
      - name: Stabilized Status
        priority: required
    preArkGrid:
      description: |-
        This guide only covers the basics of every viable Scrapper Ark Grid build. For pre Ark Grid builds use the Nexus doc guide. Skill code: use Shock 111 for pre Ark Grid Shock (switch out Mass Increase for Cursed Doll / Stabilized Status).
    variants:
      - name: 333-Shock Suppression (3y5g)
        recommended: true
        difficulty: 3
        description: |-
          Every skill resets its CD (excluding T and awakening) when you enter identity. Gauge gain only by casting yellow skills (dragon awakening gives zero gauge). After 4 yellow skills you get 50% of full gauge, so you only need 8 yellow skills to go from zero to full gauge. Relic Sun core has a 10/15% AS / MS QoL change too.
        arkgrid_cores: Shock Suppression + Stamina Conservation + Counter Burst
        arkgrid_prose: |-
          Minimum requirement: Legendary Sun and Legendary Moon core.
          Ancient core priority: red sun core > Flashy, Smoldering and Attack blue cores > red moon core > red star core
        tips:
          - |-
            Raid Captain instead of Keen Blunt Weapon if you have additional movement speed resource (e.g. AS/MS liner from bracelet, ancient sun core). Feast and MS wine is a must.
          - Cursed Doll / Stabilized Status are viable options.
          - "PRF 131: changes to normal skill, less damage, more distance and a bit slower than 331."
          - |-
            Gems: build needs only 8 gems — damage gems on green skills, CDR gems on yellow skills, last 3 gems are optional.
          - |-
            4y4g: Instant Hit 111 or Dragon Advent 131 instead of SN or PRF. IH has almost zero casting time, DA has push immunity. 3y5g gives a better burst; with 4y4g it is easier to recover and has a bit faster gauge gain. In raids they do similar DPS.
          - |-
            Verdict: Ceiling build for Shock scrappers: high CPM with no downtime; needs extra attention to not cast a 4th yellow skill inside identity (set ark grid effect buff to "very high" in settings). One of the smoothest gameplays of all classes, with better stagger due to CD resets. Currently the best shadow boxer — with optimal play you need to cast only 5 yellow skills outside of identity to get back to full gauge.
          - |-
            Skill code: E882BAC57010841F95C62F2C165F4399A32E2BB40054C748C5CCF737AC052DF169054EB02E1E331F205DE86E053B5F7A74BF8A3D17E4924E604D931304A40836
        skills:
          - name: Charging Blow
            level: 10
            tripods:
              - Excellent Mobility
              - Destroyer
              - Death Band
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Yellow Skill, Gauge Builder, Mobility, Weak Point Lv.1**
              - Casting a yellow skill is the only way to build Tenacity Release gauge in this build.
              - Low skill cooldown allows permanent Adrenaline upkeep.
          - name: Crushing Smite
            level: 5
            tripods:
              - Damage Amplification
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Yellow Skill, Gauge Builder, Party Synergy**
              - Casting a yellow skill is the only way to build Tenacity Release gauge in this build.
              - Applies the 6% damage synergy for 8 seconds; it is the synergy skill of this build.
          - name: Death Rattle
            level: 14
            tripods:
              - True Sight
              - Weak Point Detection
              - Shock Explosion
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Green Skill, Damage, Mid-High Stagger, Weak Point Lv.2**
              - Does not build gauge.
              - Can be used outside of identity.
          - name: Supernova
            level: 14
            tripods:
              - Swift Fingers
              - Piercing Strike
              - Spinless Hit
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Green Skill, Damage, High Stagger**
              - Does not build gauge.
              - Can be used outside of identity.
          - name: Roundup Sweep
            level: 13
            tripods:
              - Efficient Strike
              - Additional Strike
              - Reinforced Hit
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Yellow Skill, Gauge Builder, Counter, Low Stagger**
              - Casting a yellow skill is the only way to build Tenacity Release gauge in this build.
              - Main stagger skill.
              - No Paralysis immunity.
          - name: Potent Rising Fist
            level: 14
            tripods:
              - Dragon's Grace
              - Dragon King Bombardment
              - Dragon's Fury
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Green Skill, Damage, Mid-High Stagger**
              - Does not build gauge in this build, because gauge only comes from yellow skills.
              - The 331 setup is the main option: it is a combo skill with a bit more damage and damage reduction.
          - name: Shredding Strike
            level: 14
            tripods:
              - Swift Fingers
              - Light Speed Strike
              - Enhanced Tenacity Release
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Green Skill, Damage, Mid-High Stagger, Weak Point Lv.2**
              - <tripod>Concussion</tripod> can be used to increase the stagger at the cost of cast speed.
              - <tripod>Unconventional</tripod> can be used for 12% more skill damage at the cost of a much longer cast time.
              - Does 20% more damage in identity.
          - name: Fist of the Wind God
            level: 14
            tripods:
              - Concussion
              - Fist of Patience
              - Enhanced Tenacity Release
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Green Skill, Damage, High Stagger**
              - Should only be used in identity, otherwise it has a large charge time.
              - Does 20% more damage in identity.
          - name: Heaven and Earth Strike
            level_label: Hyper Awakening Technique
            notes: |-
              **Shock T Skill**
              - Its damage varies with the amount of Shock Energy you have.
              - The other T skill, Blazing Bombardment, is a Stamina skill and is unusable on Shock.
          - name: "Mysterious Art: Blast of Ruination"
            level_label: Awakening
            notes: |-
              **Awakening, Damage**
              - A powerful thrusting punch that sends an energy wave 14 meters ahead and knocks foes back. It deals more damage than Undefeated Dragon King.
              - Undefeated Dragon King gives zero gauge in this build, so there is no gauge reason to take it.
        engravings:
          - name: Grudge
            priority: required
          - name: Ambush Master
            priority: required
          - name: Adrenaline
            priority: required
          - name: Mass Increase
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Raid Captain
            priority: optional
          - name: Cursed Doll
            priority: optional
          - name: Stabilized Status
            priority: optional
        gems:
          - skill: Shredding Strike
            type: damage
            priority: 1
          - skill: Death Rattle
            type: damage
            priority: 2
          - skill: Fist of the Wind God
            type: damage
            priority: 3
          - skill: Supernova
            type: damage
            priority: 4
          - skill: Potent Rising Fist
            type: damage
            priority: 5
          - skill: Roundup Sweep
            type: cooldown
            priority: 6
          - skill: Crushing Smite
            type: cooldown
            priority: 7
          - skill: Charging Blow
            type: cooldown
            priority: 8
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
          - name: Strike
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
          - name: Enhanced Speed
            points: 1
            category: enlightenment
            tier: 1
          - name: Shock Recovery
            points: 1
            category: enlightenment
            tier: 2
          - name: Shock Training
            points: 3
            category: enlightenment
            tier: 3
          - name: Duck II
            points: 1
            category: enlightenment
            tier: 3
          - name: Shock Release
            points: 3
            category: enlightenment
            tier: 4
          - name: One-Sided Strike
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
          - name: Shock Explosion
            points: 3
            category: leap
            tier: 2
        rotation_sections:
          - title: "2g cycle: Tenacity Release > 2 green skills > 3 yellow skills > 2 green skills"
            steps:
              - Tenacity Release
              - Heaven and Earth Strike
              - Shredding Strike
              - Crushing Smite
              - Roundup Sweep
              - Charging Blow
              - Fist of the Wind God
              - Death Rattle
          - title: "3g cycle: Tenacity Release > 3 green skills > 3 yellow skills > 1 green skill"
          - title: |-
              Rotation with 0 Adrenaline stacks: any skill (excluding T) > Tenacity Release > 3 yellow skills > 4 green skills
      - name: 222-Shockwave (CDF)
        recommended: true
        difficulty: 1
        description: |-
          Chain Destruction Fist (CDF) becomes 50% of total DPS, making it a 1-gem build. Death Rattle gets removed, therefore no pushback skill remains in this build. Secondary stat is swift instead of crit, while using Blunt Thorn instead of Standing Strike. Crit rate has only half value, so the Adrenaline engraving is dropped. Outside of CDF average crit rate is ~35%, so expect a lot of white numbers; due to BT, CDF can also be white numbers.
        arkgrid_cores: Shockwave + Earth Combo + Ground Smasher
        arkgrid_prose: |-
          Minimum requirement: Relic Sun and Relic Moon core.
          Ancient core priority: Flashy, Smoldering and Attack blue cores > red star core > red sun core > red moon core
        tips:
          - |-
            Raid Captain instead of Stabilized Status if you have additional movement speed resource (e.g. AS/MS liner from bracelet). Feast and MS wine is a must.
          - "Judgment 331: shorter CD for higher synergy uptime."
          - |-
            Gems: RS and Judgment (321) CD gems instead of PRF and SN CD gems for smoother gauge gain against mobile bosses.
          - |-
            Supernova with Quick Prep has one of the lowest CD gains among the green skills, so its CD gem goes at the bottom, under Potent Rising Fist. If you run full level 10 gems plus a single level 7 gem used as the CD gem on Supernova, it can still come before Potent Rising Fist.
          - |-
            If you hit every skill you should still have a few seconds before Chain Destruction Fist is up again, so you can miss 1-2 skills (Roundup Sweep is the biggest gauge gain and has a very low cooldown). Against bosses that move a lot, CD gems on Roundup Sweep and Judgment help with gauge gain.
          - |-
            Verdict: Overall a chill, low-CPM build which does more than respectable damage. Recommended to those who want a not-sweaty, decent-damage build.
          - |-
            Skill code: 66674417686458EE6756AF2B0B24236104B6A4E49B3E95474569EFE6C61E7D8AED20966409B2E63DCAD8C871C3D377A9C3665D5DE1F078F6C00D7DEE25102CCF
        skills:
          - name: Charging Blow
            level: 5
            tripods:
              - Excellent Mobility
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Quick Shock Builder, Mobility, Weak Point Lv.1**
              - Runs <tripod>Excellent Mobility</tripod> for extra mobility.
              - Low skill cooldown allows permanent Adrenaline upkeep.
          - name: Judgment
            level: 13
            tripods:
              - Damage Amplification
              - Ignorant Hit
              - True Judgment
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Party Synergy, Gauge Builder, Low Damage, Weak Point Lv.1**
              - <tripod>Damage Amplification</tripod> applies the 6% damage synergy on hit for 12 seconds.
              - Runs <tripod>Ignorant Hit</tripod> (321): the cooldown is 16 seconds without a CD gem, so you have to rely on your identity to get high synergy uptime.
              - Judgment 331 (<tripod>Immediate Destruction</tripod>) has a shorter cooldown for higher synergy uptime.
              - Can replace the Wealth rune with Bleed if the extra gauge is not necessary.
          - name: Chain Destruction Fist
            level: 14
            tripods:
              - Endless Fury
              - Tenacity
              - Shaking Ground
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, Push Immunity**
              - In the 222 build it becomes 50% of total DPS, making it a 1-gem build.
              - Has push immunity and an omni attack buff, which makes it easy to land.
          - name: Supernova
            level: 14
            tripods:
              - Quick Prep
              - Piercing Strike
              - Spinless Hit
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage, High Stagger**
              - Can be used outside of identity.
          - name: Roundup Sweep
            level: 10
            tripods:
              - Efficient Strike
              - Additional Strike
              - Reinforced Hit
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Counter, Gauge Builder, Shock Builder, Low Stagger**
              - Best gauge and Shock energy builder.
              - Main stagger skill.
              - Could swap the Wealth rune for Overwhelm or Quick Recharge if you can build gauge fast enough without Wealth.
              - No Paralysis immunity.
          - name: Potent Rising Fist
            level: 14
            tripods:
              - Focused Fighting Spirit
              - Dragon King Bombardment
              - Bursting Fist
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Damage, Mid-High Stagger, Gauge Builder**
              - Generally used outside of identity to build gauge.
              - If you are confident you can fill gauge before Shredding Strike / Fist of the Wind God come back up, you can use this skill in identity.
          - name: Shredding Strike
            level: 14
            tripods:
              - Swift Fingers
              - Light Speed Strike
              - Enhanced Tenacity Release
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Damage, Mid-High Stagger, Weak Point Lv.2**
              - <tripod>Concussion</tripod> can be used to increase the stagger at the cost of cast speed.
              - <tripod>Unconventional</tripod> can be used for 12% more skill damage at the cost of a much longer cast time.
              - Does 20% more damage in identity.
              - Uses a legendary Quick Recharge rune because it is always cast after Fist of the Wind God and Chain Destruction Fist, which makes it very efficient at reducing the cooldown of those two skills.
          - name: Fist of the Wind God
            level: 14
            tripods:
              - Concussion
              - Fist of Patience
              - Enhanced Tenacity Release
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage, High Stagger**
              - Should only be used in identity, otherwise it has a large charge time.
              - Does 20% more damage in identity.
              - Uses a legendary Galewind rune nowadays to make the Fist of the Wind God to Chain Destruction Fist combo faster.
          - name: Heaven and Earth Strike
            level_label: Hyper Awakening Technique
            notes: |-
              **Shock T Skill**
              - Generates a lot of gauge and is generally used whenever it is up.
              - The other T skill is unusable on Shock because it is a Stamina skill.
          - name: Undefeated Dragon King
            level_label: Awakening
            notes: |-
              **Awakening, Gauge Refill (Recommended)**
              - Recovers all Tenacious Power on hit, completely refilling the Tenacity Release gauge.
              - The crit rate on the awakening is around 25%, so the damage difference between the two awakenings is small. Total crit rate in this build is low (about 35%: 20% on strike, roughly 5% from rings and the base stat, +10% from back attacks), and only Chain Destruction Fist goes up to 125% crit.
              - There are moments when Chain Destruction Fist is off cooldown but you have no gauge because the boss was untargetable. Getting the full gauge back from the awakening is a huge damage gain over the other awakening: burst, wait for the boss to come back, then press the awakening and Chain Destruction Fist again.
              - Alternative for damage: Mysterious Art: Blast of Ruination, a thrusting punch that sends an energy wave 14 meters ahead and knocks foes back, and deals more damage than Undefeated Dragon King.
        engravings:
          - name: Grudge
            priority: required
          - name: Ambush Master
            priority: required
          - name: Cursed Doll
            priority: required
          - name: Mass Increase
            priority: required
          - name: Stabilized Status
            priority: required
          - name: Raid Captain
            priority: optional
        gems:
          - skill: Chain Destruction Fist
            type: damage
            priority: 1
          - skill: Chain Destruction Fist
            type: cooldown
            priority: 2
          - skill: Fist of the Wind God
            type: cooldown
            priority: 2
          - skill: Shredding Strike
            type: cooldown
            priority: 3
          - skill: Shredding Strike
            type: damage
            priority: 4
          - skill: Fist of the Wind God
            type: damage
            priority: 5
          - skill: Supernova
            type: damage
            priority: 6
          - skill: Potent Rising Fist
            type: damage
            priority: 7
          - skill: Judgment
            type: damage
            priority: 8
          - skill: Potent Rising Fist
            type: cooldown
            priority: 9
          - skill: Supernova
            type: cooldown
            priority: 10
        arkPassives:
          - name: Specialization
            points: 30
            category: evolution
            tier: 1
          - name: Swiftness
            points: 10
            category: evolution
            tier: 1
          - name: Limit Break
            points: 3
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
          - name: Enhanced Speed
            points: 1
            category: enlightenment
            tier: 1
          - name: Shock Recovery
            points: 1
            category: enlightenment
            tier: 2
          - name: Shock Training
            points: 3
            category: enlightenment
            tier: 3
          - name: Duck II
            points: 1
            category: enlightenment
            tier: 3
          - name: Shock Release
            points: 3
            category: enlightenment
            tier: 4
          - name: One-Sided Strike
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
          - name: Shock Explosion
            points: 3
            category: leap
            tier: 2
        rotation_sections:
          - title: Burst (T can be used after Chain Destruction Fist but before Shredding Strike)
            steps:
              - Tenacity Release
              - Heaven and Earth Strike
              - Fist of the Wind God
              - Chain Destruction Fist
              - Shredding Strike
      - name: 111-Shock Burst
        recommended: false
        difficulty: 1
        description: None, only QoL changes with 10% AS / MS and 5% crit rate.
        arkgrid_cores: Shock Burst + Shock Enhancement + Orb Explosion
        arkgrid_prose: |-
          Minimum requirement: None, no gameplay changes compared to pre Ark Grid Shock. The QoL changes need Relic Sun and Legendary Moon core.
          Ancient core priority: Flashy, Smoldering and Attack blue cores > red moon core > red sun core > red star core
        tips:
          - Cursed Doll / Stabilized Status are viable options.
          - "Gem priority: same as pre Ark Grid Shock."
          - |-
            Verdict: Viable, but the weakest build of the 3 Shock builds. Unless you love pre Ark Grid gameplay I can't recommend it.
          - |-
            Skill code: 5FCC5A2F07D1091042189359C5C6186224A2C283A76ACAF18787058D78C142DA8C726AAA5FDFDAB7CADF7BDBA0A98386DD01885F360B4CEC62B60E32D1405638
        skills:
          - name: Charging Blow
            level: 5
            tripods:
              - Excellent Mobility
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Quick Shock Builder, Mobility, Weak Point Lv.1**
              - Runs <tripod>Excellent Mobility</tripod> for extra mobility.
              - Low skill cooldown allows permanent Adrenaline upkeep.
          - name: Judgment
            level: 13
            tripods:
              - Damage Amplification
              - Immediate Destruction
              - True Judgment
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Party Synergy, Gauge Builder, Low Damage, Weak Point Lv.1**
              - <tripod>Damage Amplification</tripod> applies the 6% damage synergy on hit for 12 seconds.
              - Can run <tripod>Ignorant Hit</tripod> for higher burst but lower synergy uptime.
              - Can replace the Wealth rune with Bleed if the extra gauge is not necessary.
          - name: Death Rattle
            level: 14
            tripods:
              - Quick Prep
              - Weak Point Detection
              - Shock Explosion
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage, Mid-High Stagger, Weak Point Lv.2**
              - Use this skill with 76% or more Shock meter for the maximum damage.
              - Could be used with less if you will not be able to generate meter before a boss goes untargetable.
              - Can be used outside of identity.
          - name: Supernova
            level: 14
            tripods:
              - Quick Prep
              - Piercing Strike
              - Spinless Hit
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage, High Stagger**
              - Can be used outside of identity.
          - name: Roundup Sweep
            level: 10
            tripods:
              - Efficient Strike
              - Additional Strike
              - Reinforced Hit
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Counter, Gauge Builder, Shock Builder, Low Stagger**
              - Best gauge and Shock energy builder.
              - Main stagger skill.
              - Could swap the Wealth rune for Overwhelm or Quick Recharge if you can build gauge fast enough without Wealth.
              - No Paralysis immunity.
          - name: Potent Rising Fist
            level: 14
            tripods:
              - Focused Fighting Spirit
              - Dragon King Bombardment
              - Dragon's Fury
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Damage, Mid-High Stagger, Gauge Builder**
              - Generally used outside of identity to build gauge.
              - If you are confident you can fill gauge before Shredding Strike / Fist of the Wind God come back up, you can use this skill in identity.
          - name: Shredding Strike
            level: 14
            tripods:
              - Swift Fingers
              - Light Speed Strike
              - Enhanced Tenacity Release
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage, Mid-High Stagger, Weak Point Lv.2**
              - <tripod>Concussion</tripod> can be used to increase the stagger at the cost of cast speed.
              - <tripod>Unconventional</tripod> can be used for 12% more skill damage at the cost of a much longer cast time.
              - Does 20% more damage in identity.
          - name: Fist of the Wind God
            level: 14
            tripods:
              - Concussion
              - Fist of Patience
              - Enhanced Tenacity Release
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Damage, High Stagger**
              - Should only be used in identity, otherwise it has a large charge time.
              - Does 20% more damage in identity.
              - Can replace Quick Recharge with other utility runes.
          - name: Heaven and Earth Strike
            level_label: Hyper Awakening Technique
            notes: |-
              **Shock T Skill**
              - Generates a lot of gauge and is generally used whenever it is up.
              - The other T skill is unusable on Shock because it is a Stamina skill.
          - name: "Mysterious Art: Blast of Ruination"
            level_label: Awakening
            notes: |-
              **Awakening, Damage**
              - A powerful thrusting punch that sends an energy wave 14 meters ahead and knocks foes back. It deals more damage than Undefeated Dragon King.
              - Alternative: Undefeated Dragon King recovers all Tenacious Power (the full Tenacity Release gauge) on hit, so it can be taken instead if you prefer the gauge refill over damage.
        engravings:
          - name: Grudge
            priority: required
          - name: Ambush Master
            priority: required
          - name: Adrenaline
            priority: required
          - name: Mass Increase
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Cursed Doll
            priority: optional
          - name: Stabilized Status
            priority: optional
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
          - name: Strike
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
          - name: Enhanced Speed
            points: 1
            category: enlightenment
            tier: 1
          - name: Shock Recovery
            points: 1
            category: enlightenment
            tier: 2
          - name: Shock Training
            points: 3
            category: enlightenment
            tier: 3
          - name: Duck II
            points: 1
            category: enlightenment
            tier: 3
          - name: Shock Release
            points: 3
            category: enlightenment
            tier: 4
          - name: One-Sided Strike
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
          - name: Shock Explosion
            points: 3
            category: leap
            tier: 2
  - name: Taijutsu
    engraving: "Ultimate Skill: Taijutsu"
    description: |-
      Taijutsu Scrapper has three Ark Grid variants. 111 (Earth Collapse) is considered the highest-DPS build; 232 and 331 keep most of the pre Ark Grid gameplay. Guide put together by StickDead from the Scrapper Ark Grid guide created by Sly (2026 September balance patch).
    playstyle: |-
      Build gauge, then burst with Z and T. 111 has a long, backloaded burst with no double Z; 232 and 331 keep the pre Ark Grid rhythm.
    difficulty: medium
    engravings:
      - name: Grudge
        priority: required
      - name: Ambush Master
        priority: required
      - name: Adrenaline
        priority: required
      - name: Raid Captain
        priority: required
      - name: Keen Blunt Weapon
        priority: required
      - name: Cursed Doll
        priority: optional
      - name: Stabilized Status
        priority: optional
    preArkGrid:
      description: |-
        This guide only covers the basics of every viable Scrapper Ark Grid build. For pre Ark Grid builds use the Nexus doc guide. Skill code: use Tai 331 for pre Ark Grid Taijutsu.
    variants:
      - name: 111-Earth Collapse (8y)
        recommended: true
        difficulty: 2
        description: |-
          No more double Z; you have a long, backloaded burst. With T your ER has no omni attack buff, so more repositioning is needed. The 8-yellow-skills build is the most popular, maximising gauge building at the cost of stagger, destruction and paralysis immunity of previously used green skills. No pushback skills, no more RS RNG, and full paralysis immunity in bursts.
        arkgrid_cores: Earth Collapse + Fighting Spirit Enhancement + Ground-Breaker
        arkgrid_prose: |-
          Minimum requirement: Relic Sun and Legendary Moon core.
          Ancient core priority: Flashy, Smoldering and Attack blue cores > red moon core > red star core > red sun core
        tips:
          - |-
            Adjust your crit stat depending on how many crit rate sources you have: with BT you want 120% crit rate, with SS you want 100%.
          - Relic Raid Captain needs at least 35.42% MS to pick it over relic Cursed Doll / Stabilized Status.
          - |-
            Standing Strike build: replace Master with Pulverize and adjust your crit/swift stats — more consistent damage, but lower absolute ceiling than the BT build.
          - "7y1g: Judgment 331 instead of FTS or IH, DA 331 instead of DA 231."
          - "EF 111 vs 121: 111 does more damage per cast but has a longer casting animation."
          - "DA 221: more damage, better stagger, but loses push immunity."
          - "Last CDR gem: on CB you can cast a 2nd one when outside of identity; on IH you still can't cast a 2nd one."
          - |-
            Taijutsu gauge gain chart (by Sly), see the FAQ of the Scrapper Ark Grid Guide: https://docs.google.com/document/d/1_JGT7IsO8AOxSJqit3AWZzuCKjS8yTCsMjELqJ70Dnw/edit?tab=t.0
          - |-
            Verdict: Currently considered the highest-DPS build. Unfortunately long, backloaded bursts can be annoying in homework raids, where you go mech to mech leaving only a few seconds to deal damage. The 8y build has lower stagger / destruction than other builds.
          - |-
            Skill code: 7C8B2E9CA324B13405D336EB83F9CCDF25B5BE2D4B8E22C775C22930CA2AF4B4353095B2CFA1821A1ED125AD2CDBABDB628BA2E38C0D88E6C1CB4F1BCB409265
        skills:
          - name: Charging Blow
            level: 11
            tripods:
              - Excellent Mobility
              - Destroyer
              - Death Band
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Mobility, Weak Point Lv.1**
              - Low skill cooldown allows permanent Adrenaline upkeep.
              - Can swap to Purify instead of Quick Recharge if necessary.
              - Recommended option for most players over Continuous Push.
          - name: Dragon Advent
            level: 14
            tripods:
              - Stamina Control
              - Tenacity
              - Weak Point Detection
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Damage, Mid-High Stagger, Mobility**
              - <tripod>Conflagration Attack</tripod> allows 100% bleed uptime.
              - <tripod>Tenacity</tripod> can be run instead for push immunity, but you would lose around 20% damage on this skill.
          - name: Instant Hit
            level: 10
            tripods:
              - Stamina Control
              - Dangerous Contract
              - Tracking Instinct
            rune: Wealth
            rune_rarity: epic
          - name: Roundup Sweep
            level: 14
            tripods:
              - Efficient Strike
              - Additional Strike
              - Reinforced Hit
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Damage, Low Stagger, Gauge Builder**
              - Main stagger skill.
              - 79% chance to reset if both parts hit.
              - You can spam this when all other damage skills are on cooldown.
              - Wealth due to being the main meter gain, but Quick Recharge is also viable.
          - name: Fierce Tiger Strike
            level: 7
            tripods:
              - Damage Amplification
              - Pounce
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Party Synergy**
              - Applies the 6% damage synergy for 8 seconds; it is the synergy skill of this build.
          - name: Battering Fists
            level: 14
            tripods:
              - Enhanced Tenacity Release
              - Red Explosion
              - Berserk
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage, Mid-High Stagger, Weak Point Lv.1**
              - Does 20% more damage in identity.
              - Second highest damage normal skill.
          - name: Iron Cannon Blow
            level: 14
            tripods:
              - Overflowing Power
              - Enhanced Tenacity Release
              - Advance Enhancement
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage, Mid Stagger, Weak Point Lv.1**
              - Highest damage normal skill.
              - Does 20% more damage in identity.
              - No paralysis immunity.
          - name: Explosive Fist
            level: 14
            tripods:
              - Swift Fingers
              - Super Punch
              - Enhanced Tenacity Release
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage, Mid Stagger**
              - Does 50% more damage to staggered foes.
              - Can run <tripod>Rampage</tripod> for a longer range and 6% more skill damage, but at the cost of a ~50% longer animation and losing the stagger damage bonus.
              - Does 20% more damage in identity.
              - No paralysis immunity.
          - name: Blazing Bombardment
            level_label: Hyper Awakening Technique
            notes: |-
              **Stamina T Skill**
              - Used inside Tenacity Release, right after entering identity (Tenacity Release > Blazing Bombardment).
              - In Taijutsu 111 it is not used for meter gen.
              - The other T skill is unusable on Taijutsu because it is not a Stamina skill.
          - name: Undefeated Dragon King
            level_label: Awakening
            notes: |-
              **Awakening, Gauge Refill**
              - Recovers all Tenacious Power on hit, completely refilling the Tenacity Release gauge. Two black dragons fly alongside you while you dash up to 13 meters.
              - The other awakening, Mysterious Art: Blast of Ruination, is a powerful thrusting punch that sends out an energy wave and does more damage.
        engravings:
          - name: Grudge
            priority: required
          - name: Ambush Master
            priority: required
          - name: Adrenaline
            priority: required
          - name: Raid Captain
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Cursed Doll
            priority: optional
          - name: Stabilized Status
            priority: optional
        gems:
          - skill: Iron Cannon Blow
            type: damage
            priority: 1
          - skill: Battering Fists
            type: damage
            priority: 1
          - skill: Explosive Fist
            type: damage
            priority: 2
          - skill: Roundup Sweep
            type: cooldown
            priority: 3
          - skill: Charging Blow
            type: cooldown
            priority: 4
          - skill: Iron Cannon Blow
            type: cooldown
            priority: 5
          - skill: Battering Fists
            type: cooldown
            priority: 5
          - skill: Explosive Fist
            type: cooldown
            priority: 5
          - skill: Dragon Advent
            type: cooldown
            priority: 6
          - skill: Roundup Sweep
            type: damage
            priority: 7
          - skill: Dragon Advent
            type: damage
            priority: 8
        arkPassives:
          - name: Crit
            points: 25
            category: evolution
            tier: 1
          - name: Swiftness
            points: 15
            category: evolution
            tier: 1
          - name: Limit Break
            points: 3
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
          - name: Stamina Recovery
            points: 3
            category: enlightenment
            tier: 1
          - name: Tenacity Recovery
            points: 3
            category: enlightenment
            tier: 2
          - name: "Ultimate Skill: Taijutsu"
            points: 3
            category: enlightenment
            tier: 3
          - name: Duck II
            points: 1
            category: enlightenment
            tier: 3
          - name: Earth Rend
            points: 3
            category: enlightenment
            tier: 4
          - name: One-Sided Strike
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
          - name: Rage Fist
            points: 3
            category: leap
            tier: 2
        rotation_sections:
          - title: |-
              Opening: pre-stack Adrenaline, apply the synergy with Fierce Tiger Strike, enter identity, then use the T skill, Earth Rend and the awakening before continuing with the normal rotation (Burst below)
            steps:
              - Adrenaline stacks
              - Fierce Tiger Strike
              - Tenacity Release
              - Blazing Bombardment
              - Earth Rend
              - Undefeated Dragon King
          - title: Burst
            steps:
              - Tenacity Release
              - Blazing Bombardment
              - Iron Cannon Blow
              - Battering Fists
              - Explosive Fist
              - Earth Rend
      - name: 232-Repeated Leap (DA)
        recommended: false
        difficulty: 2
        description: |-
          Similar to pre Ark Grid gameplay with double Z; Dragon Advent becomes your highest-priority skill. Due to CD reduction from the sun core it is a higher-CPM build than other Tai builds.
        arkgrid_cores: Repeated Leap + Continuous Enhancement + Black Dragon's Leap
        arkgrid_prose: |-
          Minimum requirement: Legendary Sun and Legendary Moon core.
          Ancient core priority: Flashy, Smoldering and Attack blue cores > red moon core > red sun core > red star core
        tips:
          - |-
            Adjust your crit stat depending on how many crit rate sources you have: with BT you want 120% crit rate, with SS you want 100%.
          - Relic Raid Captain needs at least 35.42% MS to pick it over relic Cursed Doll / Stabilized Status.
          - |-
            Standing Strike build: replace Master with Pulverize and adjust your crit/swift stats — more consistent damage, but lower absolute ceiling than the BT build.
          - "EF 112 vs 122: 112 does more damage per cast but has a longer casting animation."
          - "Last gem: you can use a CDR gem on Judgment instead of the PRF DMG gem."
          - |-
            232 vs 222: they have similar DPS, but 232 can use BT and has a slightly better atropine window. KBW is less effective with 222 as Fatal Leap moon core crit damage is additive with other crit damage sources. Destiny activation is better with 232.
          - "Gem priority after Dragon Advent: same as pre Ark Grid Taijutsu."
          - |-
            Taijutsu gauge gain chart (by Sly), see the FAQ of the Scrapper Ark Grid Guide: https://docs.google.com/document/d/1_JGT7IsO8AOxSJqit3AWZzuCKjS8yTCsMjELqJ70Dnw/edit?tab=t.0
          - |-
            Verdict: Respectable damage while keeping most of the pre Ark Grid gameplay. If you don't like Tai 111 gameplay and you don't want to switch to Shock, this is the only reasonable choice left.
          - |-
            Skill code: 5ACDEB1C6E0453F9E796CFDA20B9464D8125FB3205A0CB1313019E19891B18E0020DA8006EFA432BFE3FFA9B9A039388C186FCE76190F5234B69B746388E5470
        skills:
          - name: Charging Blow
            level: 5
            tripods:
              - Excellent Mobility
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Mobility, Weak Point Lv.1**
              - Low skill cooldown allows permanent Adrenaline upkeep.
              - Can swap to Purify instead of Quick Recharge if necessary.
              - Recommended option for most players over Continuous Push.
          - name: Dragon Advent
            level: 14
            tripods:
              - Excellent Mobility
              - Wide Hit
              - Advent of the Black Dragon
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage, Mid-High Stagger, Mobility**
              - <tripod>Conflagration Attack</tripod> allows 100% bleed uptime.
              - <tripod>Tenacity</tripod> can be run instead for push immunity, but you would lose around 20% damage on this skill.
          - name: Judgment
            level: 10
            tripods:
              - Damage Amplification
              - Immediate Destruction
              - True Judgment
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Party Synergy, Gauge Builder, Low Damage, Weak Point Lv.1**
              - <tripod>Damage Amplification</tripod> applies the 6% damage synergy on hit for 12 seconds.
              - Wealth used for more meter gain.
          - name: Roundup Sweep
            level: 14
            tripods:
              - Efficient Strike
              - Additional Strike
              - Reinforced Hit
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Damage, Low Stagger, Gauge Builder**
              - Main stagger skill.
              - 79% chance to reset if both parts hit.
              - You can spam this when all other damage skills are on cooldown.
              - Wealth due to being the main meter gain, but Quick Recharge is also viable.
          - name: Battering Fists
            level: 14
            tripods:
              - Enhanced Tenacity Release
              - Red Explosion
              - Berserk
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage, Mid-High Stagger, Weak Point Lv.1**
              - Does 20% more damage in identity.
              - Second highest damage normal skill.
          - name: Iron Cannon Blow
            level: 14
            tripods:
              - Overflowing Power
              - Enhanced Tenacity Release
              - Advance Enhancement
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage, Mid Stagger, Weak Point Lv.1**
              - Highest damage normal skill.
              - Does 20% more damage in identity.
              - No paralysis immunity.
          - name: Potent Rising Fist
            level: 13
            tripods:
              - Focused Fighting Spirit
              - Furious Hit
              - Dragon's Fury
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Meter, Mid-High Stagger**
              - Used in the meter gain build.
              - Lower priority than anything else.
              - Should be used when Stamina is needed, or to reposition instead of walking.
          - name: Explosive Fist
            level: 14
            tripods:
              - Swift Fingers
              - Super Punch
              - Weak Point Detection
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage, Mid Stagger**
              - Does 50% more damage to staggered foes.
              - Can run <tripod>Rampage</tripod> for a longer range and 6% more skill damage, but at the cost of a ~50% longer animation and losing the stagger damage bonus.
              - Does 20% more damage in identity.
              - No paralysis immunity.
          - name: Blazing Bombardment
            level_label: Hyper Awakening Technique
            notes: |-
              **Stamina T Skill**
              - Generates a lot of gauge and is generally used outside of identity whenever it is up.
              - The other T skill is unusable on Taijutsu because it is not a Stamina skill.
          - name: Undefeated Dragon King
            level_label: Awakening
            notes: |-
              **Awakening, Gauge Refill**
              - Recovers all Tenacious Power on hit, completely refilling the Tenacity Release gauge. Two black dragons fly alongside you while you dash up to 13 meters.
              - The other awakening, Mysterious Art: Blast of Ruination, is a powerful thrusting punch that sends out an energy wave and does more damage.
        engravings:
          - name: Grudge
            priority: required
          - name: Ambush Master
            priority: required
          - name: Adrenaline
            priority: required
          - name: Raid Captain
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Cursed Doll
            priority: optional
          - name: Stabilized Status
            priority: optional
        gems:
          - skill: Dragon Advent
            type: damage
            priority: 1
          - skill: Dragon Advent
            type: cooldown
            priority: 2
        arkPassives:
          - name: Crit
            points: 25
            category: evolution
            tier: 1
          - name: Swiftness
            points: 15
            category: evolution
            tier: 1
          - name: Limit Break
            points: 3
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
          - name: Stamina Recovery
            points: 3
            category: enlightenment
            tier: 1
          - name: Tenacity Recovery
            points: 3
            category: enlightenment
            tier: 2
          - name: "Ultimate Skill: Taijutsu"
            points: 3
            category: enlightenment
            tier: 3
          - name: Duck II
            points: 1
            category: enlightenment
            tier: 3
          - name: Earth Rend
            points: 3
            category: enlightenment
            tier: 4
          - name: One-Sided Strike
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
          - name: Final Explosion
            points: 3
            category: leap
            tier: 2
      - name: 331-Tenacity Suppression
        recommended: false
        difficulty: 1
        description: None, only a QoL change that gives "infinite" stamina energy.
        arkgrid_cores: Tenacity Suppression + Continuous Enhancement + Ground-Breaker
        arkgrid_prose: |-
          Minimum requirement: None, no gameplay changes compared to pre Ark Grid Taijutsu. The QoL changes need Legendary Sun and Legendary Moon core.
          Ancient core priority: Flashy, Smoldering and Attack blue cores > red moon core > red star core > red sun core
        tips:
          - |-
            Adjust your crit stat depending on how many crit rate sources you have: with BT you want 120% crit rate, with SS you want 100%.
          - Relic Raid Captain needs at least 35.42% MS to pick it over relic Cursed Doll / Stabilized Status.
          - |-
            Standing Strike build: replace Master with Pulverize and adjust your crit/swift stats — more consistent damage, but lower absolute ceiling than the BT build.
          - "EF 112 vs 122: 112 does more damage per cast but has a longer casting animation."
          - "DA 321: more damage, better stagger, but loses push immunity."
          - "Last gem: you can use a CDR gem on Judgment instead of the PRF DMG gem."
          - 8y and 7y1g are viable as you have infinite stamina.
          - "Gem priority: same as pre Ark Grid Taijutsu."
          - |-
            Taijutsu gauge gain chart (by Sly), see the FAQ of the Scrapper Ark Grid Guide: https://docs.google.com/document/d/1_JGT7IsO8AOxSJqit3AWZzuCKjS8yTCsMjELqJ70Dnw/edit?tab=t.0
          - |-
            Verdict: The weakest build of the 3 Tai builds. I can't recommend it over the 232 build, which has similar gameplay.
          - |-
            Skill code: B7514BECE402E1CAE16894FCD821D3B00D0B8B5F915696CC2B45E50DAD827AF036D78754C725ED2CF4FBDB35F65644B6EA34FBE4CCACAA50843717357CCFFD96
        skills:
          - name: Charging Blow
            level: 5
            tripods:
              - Excellent Mobility
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Mobility, Weak Point Lv.1**
              - Low skill cooldown allows permanent Adrenaline upkeep.
              - Can swap to Purify instead of Quick Recharge if necessary.
              - Recommended option for most players over Continuous Push.
          - name: Dragon Advent
            level: 14
            tripods:
              - Moment of Truth
              - Tenacity
              - Weak Point Detection
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Damage, Mid-High Stagger, Mobility**
              - <tripod>Conflagration Attack</tripod> allows 100% bleed uptime.
              - <tripod>Tenacity</tripod> can be run instead for push immunity, but you would lose around 20% damage on this skill.
          - name: Judgment
            level: 10
            tripods:
              - Damage Amplification
              - Immediate Destruction
              - True Judgment
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Party Synergy, Gauge Builder, Low Damage, Weak Point Lv.1**
              - <tripod>Damage Amplification</tripod> applies the 6% damage synergy on hit for 12 seconds.
              - Wealth used for more meter gain.
          - name: Roundup Sweep
            level: 14
            tripods:
              - Efficient Strike
              - Additional Strike
              - Reinforced Hit
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Damage, Low Stagger, Gauge Builder**
              - Main stagger skill.
              - 79% chance to reset if both parts hit.
              - You can spam this when all other damage skills are on cooldown.
              - Wealth due to being the main meter gain, but Quick Recharge is also viable.
          - name: Battering Fists
            level: 14
            tripods:
              - Enhanced Tenacity Release
              - Red Explosion
              - Berserk
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage, Mid-High Stagger, Weak Point Lv.1**
              - Does 20% more damage in identity.
              - Second highest damage normal skill.
          - name: Iron Cannon Blow
            level: 14
            tripods:
              - Overflowing Power
              - Enhanced Tenacity Release
              - Advance Enhancement
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage, Mid Stagger, Weak Point Lv.1**
              - Highest damage normal skill.
              - Does 20% more damage in identity.
              - No paralysis immunity.
          - name: Potent Rising Fist
            level: 13
            tripods:
              - Focused Fighting Spirit
              - Furious Hit
              - Dragon's Fury
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Meter, Mid-High Stagger**
              - Used in the meter gain build.
              - Lower priority than anything else.
              - Should be used when Stamina is needed, or to reposition instead of walking.
          - name: Explosive Fist
            level: 14
            tripods:
              - Swift Fingers
              - Super Punch
              - Weak Point Detection
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage, Mid Stagger**
              - Does 50% more damage to staggered foes.
              - Can run <tripod>Rampage</tripod> for a longer range and 6% more skill damage, but at the cost of a ~50% longer animation and losing the stagger damage bonus.
              - Does 20% more damage in identity.
              - No paralysis immunity.
          - name: Blazing Bombardment
            level_label: Hyper Awakening Technique
            notes: |-
              **Stamina T Skill**
              - Generates a lot of gauge and is generally used outside of identity whenever it is up.
              - The other T skill is unusable on Taijutsu because it is not a Stamina skill.
          - name: Undefeated Dragon King
            level_label: Awakening
            notes: |-
              **Awakening, Gauge Refill**
              - Recovers all Tenacious Power on hit, completely refilling the Tenacity Release gauge. Two black dragons fly alongside you while you dash up to 13 meters.
              - The other awakening, Mysterious Art: Blast of Ruination, is a powerful thrusting punch that sends out an energy wave and does more damage.
        engravings:
          - name: Grudge
            priority: required
          - name: Ambush Master
            priority: required
          - name: Adrenaline
            priority: required
          - name: Raid Captain
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Cursed Doll
            priority: optional
          - name: Stabilized Status
            priority: optional
        arkPassives:
          - name: Crit
            points: 25
            category: evolution
            tier: 1
          - name: Swiftness
            points: 15
            category: evolution
            tier: 1
          - name: Limit Break
            points: 3
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
          - name: Stamina Recovery
            points: 3
            category: enlightenment
            tier: 1
          - name: Tenacity Recovery
            points: 3
            category: enlightenment
            tier: 2
          - name: "Ultimate Skill: Taijutsu"
            points: 3
            category: enlightenment
            tier: 3
          - name: Duck II
            points: 1
            category: enlightenment
            tier: 3
          - name: Earth Rend
            points: 3
            category: enlightenment
            tier: 4
          - name: One-Sided Strike
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
          - name: Final Explosion
            points: 3
            category: leap
            tier: 2
---
