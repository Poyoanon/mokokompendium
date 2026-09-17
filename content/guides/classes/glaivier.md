---
title: Glaivier Guide
class: Martial Artist
subclass: Glaivier
class_id: 305
description: Complete guide to all Glaivier specs and Ark Grid variants
author: Dreaps
lastUpdated: '2026-9-15'
identity:
  name: Stance Swap & Dual Meter
  description: Glaivier swaps between two weapons with Z which allows the use of different skills. The Glaive for Flurry(Blue) skills and the Spear for Focus(Red) skills. The Dual meter has 3 bars and gets consumed to use certain skills and provide a buff when swapping stances. The Dual meter gets filled over time and when hitting enemies with skills. As it currently exists, the Dual meter fills much faster than it can be used and doesn't need to be managed in practical gameplay. 
synergy:
  name: Crit Hit Damage Increase
  description: All party member's crit hit damage increased by 8%
  skills:
    - Flash Kick
    - Shackling Blue Dragon
builds:
  - name: Control
    engraving: Control
    description: Control removes the stance swapping mechanic, focusing solely on the Glaive. It is a simple, high uptime and consistent damage class relying on back attacks. It is a high APM class with low cast times and access to good push immunity on her skills.
    playstyle: Move to the back of the boss and send all skills in order of highest damage to least. Control gains access to new skill Yeon-Style Technique (X) which is both high damage and provides key buff.
    difficulty: easy
    preArkGrid:
      description: Ark Grid does not fundamentally change Control. See 222-Apotheosis Ark Grid variant for recomended build. 232-Chain Hit build is also fine, but will have a higher uptime requirement.
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
          - name: Standing Striker
            points: 2
            category: evolution
            tier: 5
          - name: Control
            points: 3
            category: enlightenment
            tier: 1
          - name: Flurry Move
            points: 1
            category: enlightenment
            tier: 2
          - name: Flurry Enhancement
            points: 3
            category: enlightenment
            tier: 3
          - name: Lethal Slash
            points: 2
            category: enlightenment
            tier: 3
          - name: Yeon-Style Technique
            points: 3
            category: enlightenment
            tier: 4
          - name: Awakening Amplifier
            points: 1
            category: leap
            tier: 1
          - name: Unleashed power
            points: 5
            category: leap
            tier: 1
          - name: Release Potential
            points: 3
            category: leap
            tier: 1
          - name: Instant Spell
            points: 3
            category: leap
            tier: 1
          - name: Powerful Strike
            points: 3
            category: leap
            tier: 2  
    variants:
      - name: 232-Chain Hit
        difficulty: 1
        recommended: true
        description: The 17 point effect of Moon core Chain Hit gives 15% cast speed. This stacks on top of the maximum attack speed of 140%. This enables us to run Maximum swift for cooldown reduction to get more casts of our skills. The Sun core gives us additional cooldown reduction on our Yeon-Style Technique.
        arkgrid_cores: Yeon Style Slash + Chain Hit + Illusion
        arkgrid_prose: |-
          Priority is Yeon Style Slash > Illusion > Chain Hit
          Ark Grid does not fundamentally change Control Glaivier. As such there is no minimum core setup. 
        priorities:
          - Cast Yeon-Style Technique and Dragon's Rampage off cooldown.
          - Yeon-Style Technique will be off cooldown at different points in your rotation, interrupt the rotation at any time to cast it.
          - All skill casts reduce the cooldown of Yeon-Style Technique so it is worth it to cast regular skills during downtime.
          - The <tripod>Final Decision</tripod> tripod on Chain Slash and Half Moon Slash reduces the already short cooldown of your spacebar. This is a big source of Control's push immunity. You will be able to spacebar every pattern the boss uses, so maximize your uptime!
        skills:
          - name: Chain Slash
            level: 14
            tripods:
              - Illusory Chain Slash
              - Final Decision
              - Brilliant Spear
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Damage Skill, Weak Point**
              - <tripod>Weak Point Destruction</tripod> does 5% more damage in theory but would do less in practice due to much shorter range.
          - name: Stampeding Slash
            level: 14
            tripods:
              - Weak Point Destruction
              - Illusion Strike
              - Ripping Blades
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Damage Skill**
          - name: Soul Cutter
            level: 14
            tripods:
              - Quick Prep
              - Bond of Trust
              - Enhanced Concussion
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage Skill**
              -If you are not using Star Core Illusion <tripod>Quick Step</tripod> is recomended
          - name: Flash Kick
            level: 7
            tripods:
              - Target Weak Point
              - Quick Prep
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Synergy Application**
          - name: Thorn Jab
            level: 7
            tripods:
              - Excellent Mobility
              - Concussion
            rune: Overwhelm
            rune_rarity: legendary
            notes: |-
              **Counter/Stagger**
              - High variability in rune choice. Quick recharge, Vision, Purify are all viable depending on the raid.
              - Skill has a small amount of mobility which can be used to dodge on occasion.
          - name: Half Moon Slash
            level: 14
            tripods:
              - Weak Point Destruction
              - Final Decision
              - Blade of Tornado
            rune: Conviction
            rune_rarity: legendary
            notes: |-
              **Damage Skill, Weak Point lv.2**
          - name: Raging Dragon Slash
            level: 14
            tripods:
              - Quick Prep
              - Additional Slash
              - Awakening
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Damage Skill**
              -Legendary Galewind can be used if stagger is unimportant in a raid
          - name: Blue Dragon's Claw
            level: 14
            tripods:
              - Quick Prep
              - Illusory Double
              - Final Decision
            rune: Judgement
            rune_rarity: legendary
            notes: |-
              **Damage Skill**
          - name: Yeon-Style Technique
            notes: |-
              **Main Damage Skill, Self Crit Rate Buff, MP Restoration**
              -(X) Obtained from fourth line of enlightenment
          - name: Dragon's Rampage
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, Weak point lv. 2**
          - name: "Yeon-style Spear Technique: Spear Meteor / Yeon-style Spear Technique: Galaxy Flying Spear"
            icon: "Yeon-style Spear Technique: Spear Meteor"
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Damage Skill**
              -Awakening should mainly be used for extended push immunity
              -This Awakening skill has a long wind-up time before damage is actually applied, so it can be prematurely cast during downtime before the boss reappears.
        gems:
          - skill: Half Moon Slash
            type: damage
            priority: 1
          - skill: Half Moon Slash
            type: cooldown
            priority: 1
          - skill: Soul Cutter
            type: damage
            priority: 3
          - skill: Soul Cutter
            type: cooldown
            priority: 2
          - skill: Chain Slash
            type: damage
            priority: 3
          - skill: Chain Slash
            type: cooldown
            priority: 2
          - skill: Stampeding Slash
            type: damage
            priority: 3
          - skill: Stampeding Slash
            type: cooldown
            priority: 2
          - skill: Blue Dragon's Claw
            type: damage
            priority: 2
          - skill: Blue Dragon's Claw
            type: cooldown
            priority: 3
          - skill: Raging Dragon Slash
            type: damage
            priority: 4
        dps_distribution:
          - name: Yeon-Style Technique
            dmg: 24.0
          - name: Dragon's Rampage
            dmg: 14.5
          - name: Half Moon Slash
            dmg: 10.5
          - name: Soul Cutter
            dmg: 10.2
          - name: Chain Slash
            dmg: 8.9
          - name: Stampeding Slash
            dmg: 8.6
          - name: Raging Dragon Slash
            dmg: 7
          - name: Blue Dragon's Claw
            dmg: 10.7
        arkPassives:
          - name: Crit
            points: 10
            category: evolution
            tier: 1
          - name: Swiftness
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
          - name: Control
            points: 3
            category: enlightenment
            tier: 1
          - name: Flurry Move
            points: 1
            category: enlightenment
            tier: 2
          - name: Flurry Enhancement
            points: 3
            category: enlightenment
            tier: 3
          - name: Lethal Slash
            points: 2
            category: enlightenment
            tier: 3
          - name: Yeon-Style Technique
            points: 3
            category: enlightenment
            tier: 4
          - name: Awakening Amplifier
            points: 1
            category: leap
            tier: 1
          - name: Unleashed power
            points: 5
            category: leap
            tier: 1
          - name: Release Potential
            points: 3
            category: leap
            tier: 1
          - name: Instant Spell
            points: 3
            category: leap
            tier: 1
          - name: Powerful Strike
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Try to reach 97-100% crit rate. This setup assumes you have some amount of crit  on your Bracelet/Rings and relic Adrenaline, but no crit rate synergy.
          - You can allocate points into Master (preferred), Keen Sense, or move a couple of points from Swiftness into Crit to increase crit rate.
          - If you do have a crit rate synergy, you may need to swap to Blunt Thorn and increase your crit rate to 120% to take advantage of it.
          - Remember to account for your 20% self crit rate buff and 10% crit rate from back attacks when doing crit rate calculations.
        rotation_sections:
          - title: Control is a mostly rotationless class, refer above to damage distribution and use skills in order of highest to lowest damage
            steps:
              - Yeon Style Technique
              - Dragon's Rampage
              - Blue Dragon's Claw
              - Half Moon Slash
              - Soul Cutter
              - Chain Slash
              - Stampeding Slash
              - Raging Dragon Slash
          - title: General Rotation
            steps:
              - Flash Kick
              - Yeon-Style Technique
              - Dragon's Rampage
              - Blue Dragon's Claw
              - Half Moon Slash
              - Chain Slash
              - Stampeding Slash
              - Soul Cutter
              - Raging Dragon Slash
              - Yeon Style Technique
              - Blue Dragon's Claw
              - Chain Slash
              - Stampeding Slash
              - Soul Cutter
          - title: These 3 skills have a similar cooldown, treat them as a "Block" and use them together
            steps:
              - Chain Slash
              - Stampeding Slash
              - Soul Cutter
          - title: Remember, always use your X and T off cooldown, interrupt any skill to do so.
            steps:
              - Yeon-Style Technique
              - Dragon's Rampage
          - title: Thorn Jab does negligible damage. Hold it for counters or stagger, or use it if every other skill is on cooldown for cooldown reduction on your X.
            steps:
              - Thorn Jab
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Ambush Master
            priority: required
          - name: Raid Captain
            priority: required
          - name: Keen Blunt Weapon
            priority: recommended
          - name: Cursed Doll
            priority: optional
          - name: Standing Striker
            priority: optional
      - name: 222-Apotheosis
        difficulty: 1
        recommended: false
        description: Control's 2nd core set gives us additional cooldown reduction on our (X) Yeon-Style Technique and buffs its damage.
        arkgrid_cores: Yeon Style Slash + Apotheosis + Illusion
        arkgrid_prose: |-
          Ark Grid does not fundamentally change Control Glaivier. As such there is no minimum core setup. 
        priorities:
          - Cast Yeon-Style Technique and Dragon's Rampage off cooldown.
          - Yeon-Style Technique will be off cooldown at different points in your rotation, interrupt the rotation at any time to cast it.
          - All skill casts reduce the cooldown of Yeon-Style Technique so it is worth it to cast regular skills during downtime.
          - The <tripod>Final Decision</tripod> tripod on Chain Slash and Half Moon Slash reduces the already short cooldown of your spacebar. This is a big source of Control's push immunity. You will be able to spacebar every pattern the boss uses, so maximize your uptime!
        skills:
          - name: Chain Slash
            level: 14
            tripods:
              - Illusory Chain Slash
              - Final Decision
              - Brilliant Spear
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Damage Skill, Weak Point**
              - <tripod>Weak Point Destruction</tripod> does 5% more damage in theory but would do less in practice due to much shorter range.
          - name: Stampeding Slash
            level: 14
            tripods:
              - Weak Point Destruction
              - Illusion Strike
              - Ripping Blades
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Damage Skill**
          - name: Soul Cutter
            level: 14
            tripods:
              - Quick Prep
              - Bond of Trust
              - Enhanced Concussion
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage Skill**
              -If you are not using Star Core Illusion <tripod>Quick Step</tripod> is recomended
          - name: Flash Kick
            level: 7
            tripods:
              - Target Weak Point
              - Quick Prep
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Synergy Application**
          - name: Thorn Jab
            level: 7
            tripods:
              - Excellent Mobility
              - Concussion
            rune: Overwhelm
            rune_rarity: legendary
            notes: |-
              **Counter/Stagger**
              - High variability in rune choice. Quick recharge, Vision, Purify are all viable depending on the raid.
              - Skill has a small amount of mobility which can be used to dodge on occasion.
          - name: Half Moon Slash
            level: 14
            tripods:
              - Weak Point Destruction
              - Final Decision
              - Blade of Tornado
            rune: Conviction
            rune_rarity: legendary
            notes: |-
              **Damage Skill, Weak Point lv.2**
          - name: Raging Dragon Slash
            level: 14
            tripods:
              - Quick Prep
              - Additional Slash
              - Awakening
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Damage Skill**
              -Legendary Galewind can be used if stagger is unimportant in a raid
              -<tripod>Quick Slash</tripod> can be used for lower cast time in exchange for less damage, no step forward, and smaller range.
          - name: Blue Dragon's Claw
            level: 14
            tripods:
              - Quick Prep
              - Illusory Double
              - Final Decision
            rune: Judgement
            rune_rarity: legendary
            notes: |-
              **Damage Skill**
          - name: Yeon-Style Technique
            notes: |-
              **Main Damage Skill, Self Crit Rate Buff, MP Restoration**
              -(X) Obtained from fourth line of enlightenment
          - name: Dragon's Rampage
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill, Weak point lv. 2**
          - name: "Yeon-style Spear Technique: Spear Meteor / Yeon-style Spear Technique: Galaxy Flying Spear"
            icon: "Yeon-style Spear Technique: Spear Meteor"
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Damage Skill**
              -Awakening should mainly be used for extended push immunity
              -This Awakening skill has a long wind-up time before damage is actually applied, so it can be prematurely cast during downtime before the boss reappears.
        gems:
          - skill: Half Moon Slash
            type: damage
            priority: 1
          - skill: Half Moon Slash
            type: cooldown
            priority: 1
          - skill: Soul Cutter
            type: damage
            priority: 3
          - skill: Soul Cutter
            type: cooldown
            priority: 2
          - skill: Chain Slash
            type: damage
            priority: 3
          - skill: Chain Slash
            type: cooldown
            priority: 2
          - skill: Stampeding Slash
            type: damage
            priority: 3
          - skill: Stampeding Slash
            type: cooldown
            priority: 2
          - skill: Blue Dragon's Claw
            type: damage
            priority: 2
          - skill: Blue Dragon's Claw
            type: cooldown
            priority: 3
          - skill: Raging Dragon Slash
            type: damage
            priority: 4
        dps_distribution:
          - name: Yeon-Style Technique
            dmg: 30.0
          - name: Dragon's Rampage
            dmg: 13.7
          - name: Half Moon Slash
            dmg: 9.5
          - name: Soul Cutter
            dmg: 9.2
          - name: Chain Slash
            dmg: 8.2
          - name: Stampeding Slash
            dmg: 8.1
          - name: Raging Dragon Slash
            dmg: 6.7
          - name: Blue Dragon's Claw
            dmg: 9.6
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
          - name: Standing Striker
            points: 2
            category: evolution
            tier: 5
          - name: Control
            points: 3
            category: enlightenment
            tier: 1
          - name: Flurry Move
            points: 1
            category: enlightenment
            tier: 2
          - name: Flurry Enhancement
            points: 3
            category: enlightenment
            tier: 3
          - name: Lethal Slash
            points: 2
            category: enlightenment
            tier: 3
          - name: Yeon-Style Technique
            points: 3
            category: enlightenment
            tier: 4
          - name: Awakening Amplifier
            points: 1
            category: leap
            tier: 1
          - name: Unleashed power
            points: 5
            category: leap
            tier: 1
          - name: Release Potential
            points: 3
            category: leap
            tier: 1
          - name: Instant Spell
            points: 3
            category: leap
            tier: 1
          - name: Powerful Strike
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Allocate points into Swiftness until 123% Movespeed (Profile->Details->Activity) then put the rest into Crit. 126% Movespeed if using Mana food/Azena's blessing.
          - The provided setup assumes mana food so 126% + 5%(feast) + 9%(support) = 140% to cap raid captain. If you do not use mana food you can drink Peyto Wine for an additional 3% movespeed allowing more Crit allocation(19 Crit/21 Swiftness generally).
          - This should get you to around 90% crit rate without a crit rate synergy. If you have more due to accesories/bracelet then put more points into Swiftness.
          - Remember to account for your 20% self crit rate buff and 10% crit rate from back attacks when doing crit rate calculations.
        rotation_sections:
          - title: Control is a mostly rotationless class, refer above to damage distribution and use skills in order of highest to lowest damage
            steps:
              - Yeon Style Technique
              - Dragon's Rampage
              - Blue Dragon's Claw
              - Half Moon Slash
              - Soul Cutter
              - Chain Slash
              - Stampeding Slash
              - Raging Dragon Slash
          - title: General Rotation
            steps:
              - Flash Kick
              - Yeon-Style Technique
              - Dragon's Rampage
              - Blue Dragon's Claw
              - Half Moon Slash
              - Chain Slash
              - Stampeding Slash
              - Soul Cutter
              - Raging Dragon Slash
              - Yeon Style Technique
              - Blue Dragon's Claw
              - Chain Slash
              - Stampeding Slash
              - Soul Cutter
          - title: These 3 skills have a similar cooldown, treat them as a "Block" and use them together
            steps:
              - Chain Slash
              - Stampeding Slash
              - Soul Cutter
          - title: Remember, always use your X and T off cooldown, interrupt any skill to do so.
            steps:
              - Yeon-Style Technique
              - Dragon's Rampage
          - title: Thorn Jab does negligible damage. Hold it for counters or stagger, or use it if every other skill is on cooldown for cooldown reduction on your X.
            steps:
              - Thorn Jab
        engravings:
          - name: Grudge
            priority: required
          - name: Ambush Master
            priority: required
          - name: Raid Captain
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Cursed Doll
            priority: recommended
          - name: Standing Striker
            priority: optional
  - name: Pinnacle
---