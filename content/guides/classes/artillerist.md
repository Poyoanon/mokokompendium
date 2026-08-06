---
title: Artillerist Guide
class: Gunner
subclass: Artillerist
class_id: 504
description: Complete Artillerist guide covering the Barrage and Firepower Enhancement (FPE) builds, including the Bombardier Tank and Jumper Piano setups.
author: ISWAR (Luterra, NA) Barrage, Oiskiton (Nineveh, NA) FPE
lastUpdated: '2026-07-18'
identity:
  name: Firepower & Barrage Meters
  description: Artillerist fills a Firepower Meter (left bar) and a Barrage Meter (right bar) by hitting enemies with any skill. Firepower Meter grants 10% damage per level up to 30% at level 3, and the Firepower Enhancement engraving provides an additional 42% normal skill damage from meter level 1. At level 3 you can activate Kindle for 25% normal skill damage and 35% MP recovery for 8 seconds, after which the meter resets. When the Barrage Meter is full you can enter Barrage mode, transforming your skills into their Barrage-exclusive forms — this is replaced by Barrage Attack when running Firepower Enhancement.
synergy:
  name: Defense Reduction
  description: Reduces the defense of enemies. Applied through Enhanced Shell or Summon Turret depending on the build.
  skills:
    - Enhanced Shell
    - Summon Turret
builds:
  - name: Barrage
    engraving: Barrage Enhancement
    description: Utilizes normal skills to generate Barrage Meter. Enter Barrage to become stationary and gain push immunity while getting access to three damage skills, a teleport, and a shield. Once those skills are used, exit Barrage mode and use normal skills to rebuild the meter. Low gem investment, but highly punishing if you miss major meter-generation skills.
    playstyle: Build Barrage Meter with normal skills, then enter Barrage mode to unload your burst before exiting to rebuild. Rewards precise meter generation and skill sequencing.
    difficulty: medium
    engravings:
      - name: Grudge
        priority: required
      - name: Adrenaline
        priority: required
      - name: Keen Blunt Weapon
        priority: required
      - name: All-Out Attack
        priority: required
      - name: Cursed Doll
        priority: recommended
      - name: Hit Master
        priority: optional
    variants:
      - name: Standing Striker
        difficulty: 2
        description: Standard Bombardier Tank build using the Standing Striker evolution node. Damage funnels into the turret's W skill, with Q resetting its cooldown. This is the recommended default ark passive tree.
        stats: Specialization 30/30, Critical 10/30
        arkgrid_cores: Bombardier Tank + Safehouse + Vanquish
        arkgrid_prose: |-
          Cores are Bombardier Tank (Sun), Safehouse (Moon), and Vanquish (Star).
          Damage is all into turret W, with Q providing a cooldown reset for W. Extended chair time, so make good use of the turret teleport to maintain W uptime if the boss repositions.
          Chaos cores: Flashy Attack | Swift Attack (Sun), Smoldering Strike (Moon), Attack (Star).
        priorities:
          - "Use Barrage: Focus Fire always before Barrage: Howitzer."
          - Don't let Flamethrower and Gravity Explosion get canceled.
          - Build Barrage Meter with your normal skills, then dump it in Barrage mode.
          - "Use Barrage: Location Transmission to reposition during Barrage Mode, such as entering support buffs."
          - Always try to pair Flamethrower + Gravity Explosion and Homing Barrage + Air Raid together.
          - Your rotation will de-sync no matter what — spam Forward Barrage during downtime.
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: All-Out Attack
            priority: required
          - name: Cursed Doll
            priority: recommended
          - name: Hit Master
            priority: optional
        skills:
          - name: Homing Barrage
            level: 14
            tripods:
              - Guiding Enhancement
              - Vital Point Bombardment
              - Power Bomb
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Destruction**
              - Hardest hitting skill outside of Barrage.
          - name: Air Raid
            level: 14
            tripods:
              - Quickfire
              - Flame Barrage
              - The Big One
            rune: Wealth
            rune_rarity: rare
            notes: |-
              - Pair with Homing Barrage.
          - name: Gravity Explosion
            level: 14
            tripods:
              - Vital Point Barrage
              - Sweeping Gravity
              - Planetary Gravity
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Destruction**
              - Can hold slightly longer in the perfect zone for a couple extra ticks of meter.
          - name: Flamethrower
            level: 14
            tripods:
              - Load
              - Ranged Flame
              - Azure Flame
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Highest meter generation skill**
              - If running shieldless, drop this to level 10.
          - name: Forward Barrage
            level: 10
            tripods:
              - Load
              - Quick Prep
              - Dancing Explosion
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Counter, Meter Generation**
              - Spam often.
          - name: Napalm Shot
            level: 10
            tripods:
              - Target Focus
              - Vital Point Barrage
              - Chain Explosion
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Counter, Stagger, Destruction, Meter Generation**
              - Applies the stagger synergy.
          - name: Summon Turret
            level: 10
            tripods:
              - Armor Destruction
              - Quicker Dispatch
              - Big Pack
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Synergy Skill**
              - Replace Bleed with Purify if a cleanse is required.
              - Quick Recharge is also a good rune option.
          - name: Energy Field
            level: 10
            tripods:
              - Mind Concentration
              - Energy Increase
              - Solid Shield
            notes: |-
              **Pick one: Energy Field or Pressurized Heatbomb**
              - Use to ensure your Flamethrower and Gravity Explosion don't get canceled.
              - Push immunity for 10 seconds.
              - Safe pick option.
          - name: Pressurized Heatbomb
            level: 14
            tripods:
              - Mobile Barrage
              - Serial Barrage
              - Additional Firepower
            notes: |-
              **Pick one: Energy Field or Pressurized Heatbomb**
              - Movement ability, Destruction, Meter Generation.
              - If running PHB, drop the cooldown gem for Forward Barrage.
          - name: "Barrage: Steel Rain"
            level_label: Hyper Awakening Technique
            notes: |-
              - Can only be used in Barrage; delayed impact upon use.
          - name: Missile Barrage / A.C.O.M. Bombardment Support
            icon: Missile Barrage
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Meter Generation**
              - Fills your Barrage Meter from zero to 100%.
              - Missiles take a few seconds to land, so place them accordingly.
        gems:
          - skill: Barrage Skill
            type: damage
            priority: 1
          - skill: Homing Barrage
            type: damage
            priority: 2
          - skill: Air Raid
            type: damage
            priority: 3
          - skill: Gravity Explosion
            type: damage
            priority: 4
          - skill: Pressurized Heatbomb
            type: damage
            priority: 5
          - skill: Energy Field
            type: cooldown
            priority: 1
          - skill: Gravity Explosion
            type: cooldown
            priority: 2
          - skill: Flamethrower
            type: cooldown
            priority: 3
          - skill: Homing Barrage
            type: cooldown
            priority: 4
          - skill: Air Raid
            type: cooldown
            priority: 5
          - skill: Napalm Shot
            type: cooldown
            priority: 6
          - skill: Forward Barrage
            type: cooldown
            priority: 7
          - skill: Pressurized Heatbomb
            type: cooldown
            priority: 8
        rotation_sections:
          - title: Meter Gen
            steps:
              - Summon Turret
              - Summon Turret
              - Flamethrower
              - Gravity Explosion
              - Forward Barrage
              - Homing Barrage
              - Air Raid
              - Napalm Shot
              - Barrage Mode
          - title: Burst
            steps:
              - Barrage Mode
              - Energy Field
              - "Barrage: Steel Rain"
              - "Barrage: Focus Fire"
              - "Barrage: Howitzer"
              - "Barrage: Focus Fire"
              - "Barrage: Energy Cannon"
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
          - name: Destruction Charger
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
          - name: Barrage Enhancement
            points: 1
            category: enlightenment
            tier: 1
          - name: Barrage Charge
            points: 3
            category: enlightenment
            tier: 2
          - name: Swiftness Barrage
            points: 2
            category: enlightenment
            tier: 3
          - name: Barrage Output Enhancement
            points: 3
            category: enlightenment
            tier: 3
          - name: Summon A.C.T
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
          - name: Improved Payload
            points: 3
            category: leap
            tier: 2
      - name: Blunt Thorn
        difficulty: 2
        description: Alternative Bombardier Tank tree using the Blunt Thorn evolution node. Skills, gems, and ark grid are otherwise identical to the Standing Striker variant.
        stats: Specialization 30/30, Critical 10/30
        arkgrid_cores: Bombardier Tank + Safehouse + Vanquish
        arkgrid_prose: |-
          Cores are Bombardier Tank (Sun), Safehouse (Moon), and Vanquish (Star).
          Damage is all into turret W, with Q providing a cooldown reset for W. Extended chair time, so make good use of the turret teleport to maintain W uptime if the boss repositions.
          Chaos cores: Flashy Attack | Swift Attack (Sun), Smoldering Strike (Moon), Attack (Star).
        priorities:
          - "Use Barrage: Focus Fire always before Barrage: Howitzer."
          - Don't let Flamethrower and Gravity Explosion get canceled.
          - Build Barrage Meter with your normal skills, then dump it in Barrage mode.
          - "Use Barrage: Location Transmission to reposition during Barrage Mode, such as entering support buffs."
          - Always try to pair Flamethrower + Gravity Explosion and Homing Barrage + Air Raid together.
          - Your rotation will de-sync no matter what — spam Forward Barrage during downtime.
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: All-Out Attack
            priority: required
          - name: Cursed Doll
            priority: recommended
          - name: Hit Master
            priority: optional
        skills:
          - name: Homing Barrage
            level: 14
            tripods:
              - Guiding Enhancement
              - Vital Point Bombardment
              - Power Bomb
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Destruction**
              - Hardest hitting skill outside of Barrage.
          - name: Air Raid
            level: 14
            tripods:
              - Quickfire
              - Flame Barrage
              - The Big One
            rune: Wealth
            rune_rarity: rare
            notes: |-
              - Pair with Homing Barrage.
          - name: Gravity Explosion
            level: 14
            tripods:
              - Vital Point Barrage
              - Sweeping Gravity
              - Planetary Gravity
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Destruction**
              - Can hold slightly longer in the perfect zone for a couple extra ticks of meter.
          - name: Flamethrower
            level: 14
            tripods:
              - Load
              - Ranged Flame
              - Azure Flame
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Highest meter generation skill**
              - If running shieldless, drop this to level 10.
          - name: Forward Barrage
            level: 10
            tripods:
              - Load
              - Quick Prep
              - Dancing Explosion
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Counter, Meter Generation**
              - Spam often.
          - name: Napalm Shot
            level: 10
            tripods:
              - Target Focus
              - Vital Point Barrage
              - Chain Explosion
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Counter, Stagger, Destruction, Meter Generation**
              - Applies the stagger synergy.
          - name: Summon Turret
            level: 10
            tripods:
              - Armor Destruction
              - Quicker Dispatch
              - Big Pack
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Synergy Skill**
              - Replace Bleed with Purify if a cleanse is required.
              - Quick Recharge is also a good rune option.
          - name: Energy Field
            level: 10
            tripods:
              - Mind Concentration
              - Energy Increase
              - Solid Shield
            notes: |-
              **Pick one: Energy Field or Pressurized Heatbomb**
              - Use to ensure your Flamethrower and Gravity Explosion don't get canceled.
              - Push immunity for 10 seconds.
              - Safe pick option.
          - name: Pressurized Heatbomb
            level: 14
            tripods:
              - Mobile Barrage
              - Serial Barrage
              - Additional Firepower
            notes: |-
              **Pick one: Energy Field or Pressurized Heatbomb**
              - Movement ability, Destruction, Meter Generation.
              - If running PHB, drop the cooldown gem for Forward Barrage.
          - name: "Barrage: Steel Rain"
            level_label: Hyper Awakening Technique
            notes: |-
              - Can only be used in Barrage; delayed impact upon use.
          - name: Missile Barrage / A.C.O.M. Bombardment Support
            icon: Missile Barrage
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Meter Generation**
              - Fills your Barrage Meter from zero to 100%.
              - Missiles take a few seconds to land, so place them accordingly.
        gems:
          - skill: Barrage Skill
            type: damage
            priority: 1
          - skill: Homing Barrage
            type: damage
            priority: 2
          - skill: Air Raid
            type: damage
            priority: 3
          - skill: Gravity Explosion
            type: damage
            priority: 4
          - skill: Pressurized Heatbomb
            type: damage
            priority: 5
          - skill: Energy Field
            type: cooldown
            priority: 1
          - skill: Gravity Explosion
            type: cooldown
            priority: 2
          - skill: Flamethrower
            type: cooldown
            priority: 3
          - skill: Homing Barrage
            type: cooldown
            priority: 4
          - skill: Air Raid
            type: cooldown
            priority: 5
          - skill: Napalm Shot
            type: cooldown
            priority: 6
          - skill: Forward Barrage
            type: cooldown
            priority: 7
          - skill: Pressurized Heatbomb
            type: cooldown
            priority: 8
        rotation_sections:
          - title: Meter Gen
            steps:
              - Summon Turret
              - Summon Turret
              - Flamethrower
              - Gravity Explosion
              - Forward Barrage
              - Homing Barrage
              - Air Raid
              - Napalm Shot
              - Barrage Mode
          - title: Burst
            steps:
              - Barrage Mode
              - Energy Field
              - "Barrage: Steel Rain"
              - "Barrage: Focus Fire"
              - "Barrage: Howitzer"
              - "Barrage: Focus Fire"
              - "Barrage: Energy Cannon"
        arkPassives:
          - name: Crit
            points: 10
            category: evolution
            tier: 1
          - name: Specialization
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
          - name: Master
            points: 1
            category: evolution
            tier: 4
          - name: Blunt Thorn
            points: 2
            category: evolution
            tier: 5
          - name: Barrage Enhancement
            points: 1
            category: enlightenment
            tier: 1
          - name: Barrage Charge
            points: 3
            category: enlightenment
            tier: 2
          - name: Swiftness Barrage
            points: 2
            category: enlightenment
            tier: 3
          - name: Barrage Output Enhancement
            points: 3
            category: enlightenment
            tier: 3
          - name: Summon A.C.T
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
          - name: Improved Payload
            points: 3
            category: leap
            tier: 2
  - name: Firepower Enhancement
    engraving: Firepower Enhancement
    description: Deals damage in human form using normal skills. Ranged Hit Master, tanky, and provides great push and paralysis immunity with high stagger, at the cost of higher investment.
    playstyle: Kindle burst cycles when Missile Launcher (T) and Barrage Attack (Z) are up, with fast, spammy, mobile normal-skill gameplay outside the burst.
    difficulty: hard
    engravings:
      - name: Grudge
        priority: required
      - name: Adrenaline
        priority: required
      - name: Raid Captain
        priority: required
      - name: Keen Blunt Weapon
        priority: required
      - name: Cursed Doll
        priority: required
      - name: Hit Master
        priority: recommended
    variants:
      - name: Jumper Kindle
        difficulty: 1
        description: Focuses on the Kindle burst cycle when Missile Launcher (T) and Barrage Attack (Z) are up every 50 seconds. Spammy, speedy gameplay with mobility and near-permanent push immunity, utilizing normal skills outside the Kindle burst. Max attack speed and movement speed with the support Goddess of Blessing ark passive.
        stats: Critical 30/30, Swiftness 10/30
        arkgrid_cores: Jumper + Momentous Leap + Auto Lock-On
        arkgrid_prose: |-
          Cores are Jumper (Sun), Momentous Leap (Moon), and Auto Lock-On (Star).
          Minimum 17 points in all three cores to play the build.
          Jump Barrage on cast provides push immunity for 4 seconds, a 20% movement speed bonus, a 20% max HP shield, and reduces the cooldown of Multi-Rocket Launcher and Pressurized Heatbomb by 20%. Destiny activation buffs the damage of Multi-Rocket Launcher and Pressurized Heatbomb.
          Very little animation lock thanks to Auto Lock-On (Star core) combined with the Swiftness Barrage tripod on Pressurized Heatbomb and Multi-Rocket Launcher's cast speed increase.
          Chaos cores: Flashy (Sun), Smoldering Strike (Moon), Attack (Star).
        priorities:
          - Pressurized Heatbomb is your primary damage skill — prioritize casting it over Multi-Rocket Launcher during Destiny activation.
          - Missile Launcher is your highest single cast skill, 2nd in the damage spread.
          - Barrage Attack is the 3rd highest single cast inside the Kindle window.
          - Utilize Multi-Rocket Launcher, Homing Barrage, and Air Raid for rebuilding FPE meter after Kindle ends.
          - The burst rotation is used when T and Z are up — you generally cast it all back to back to maximize damage.
          - If opting to play Jumper Piano (no Kindle), cast skills as they come up, prioritizing Pressurized Heatbomb.
          - Pressurized Heatbomb, Multi-Rocket Launcher, and Jump Barrage need to be on the same cooldown gem level to prevent desync.
          - Homing Barrage and Air Raid need to be on the same cooldown gem level to prevent desync.
          - Raid Captain is used because movement speed is capped with the support Goddess of Blessing buff.
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Raid Captain
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Cursed Doll
            priority: required
          - name: Hit Master
            priority: recommended
        skills:
          - name: Jump Barrage
            level: 10
            tripods:
              - Quick Jump
              - Weak Point Detection
              - Rocket Jump
            rune: Focus
            rune_rarity: legendary
            notes: |-
              **Destiny Activation**
              - 4 second push immunity and mobility skill.
          - name: Summon Turret
            level: 14
            tripods:
              - Sub Battery
              - Enhanced Turret
              - Laser Turret
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Secondary Damage Skill**
              - Three turrets can be on the field at the same time.
          - name: Multi-Rocket Launcher
            level: 14
            tripods:
              - Flame Rocket
              - Quick Barrage
              - Access Denied
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, High Stagger Skill**
              - Highest single cast stagger skill you have.
          - name: Homing Barrage
            level: 14
            tripods:
              - Guiding Enhancement
              - Weak Point Detection
              - Power Bomb
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, Weak Point Destruction**
              - Delayed landing; pair with Air Raid.
          - name: Air Raid
            level: 14
            tripods:
              - Prepare to Fire
              - Flame Barrage
              - The Big One
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill**
              - Delayed landing; pair with Homing Barrage.
          - name: Enhanced Shell
            level: 14
            tripods:
              - Armor Destruction
              - Bullet Enhancement
              - Internal Ignition
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Filler Damage Skill, Synergy Application, High Stagger Skill**
              - 13 second duration increased from Internal Ignition reapplication.
              - Second highest stagger contributor in the fight.
          - name: Forward Barrage
            level: 3
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Counter**
              - Low cooldown.
              - Filler skill to spam to reduce the cooldown of Jump Barrage.
          - name: Pressurized Heatbomb
            level: 14
            tripods:
              - Swiftness Barrage
              - Serial Barrage
              - Additional Firepower
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Main Damage Skill, High Stagger Skill, Weak Point Destruction**
              - Strongest damaging skill.
          - name: Missile Launcher
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill**
              - You can re-aim each missile shot on your mouse cursor.
          - name: Heavy Turret / A.C.O.M Attack
            icon: Heavy Turret
            level_label: Awakening / Hyper Awakening
        gems:
          - skill: Pressurized Heatbomb
            type: damage
            priority: 1
          - skill: Multi-Rocket Launcher
            type: damage
            priority: 2
          - skill: Homing Barrage
            type: damage
            priority: 3
          - skill: Air Raid
            type: damage
            priority: 4
          - skill: Summon Turret
            type: damage
            priority: 5
          - skill: Pressurized Heatbomb
            type: cooldown
            priority: 1
          - skill: Multi-Rocket Launcher
            type: cooldown
            priority: 2
          - skill: Jump Barrage
            type: cooldown
            priority: 3
          - skill: Homing Barrage
            type: cooldown
            priority: 4
          - skill: Air Raid
            type: cooldown
            priority: 5
          - skill: Summon Turret
            type: cooldown
            priority: 6
        rotation_sections:
          - title: Kindle Burst
            steps:
              - Summon Turret
              - Jump Barrage
              - Homing Barrage
              - Air Raid
              - Enhanced Shell
              - Kindle
              - Pressurized Heatbomb
              - Barrage Attack
              - Jump Barrage
              - Missile Launcher
              - Multi-Rocket Launcher
        arkPassives:
          - name: Crit
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
          - name: Unlimited Magick
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
            points: 1
            category: evolution
            tier: 5
          - name: Firepower Enhancement
            points: 1
            category: enlightenment
            tier: 1
          - name: Sustained Firepower
            points: 3
            category: enlightenment
            tier: 2
          - name: Overheat
            points: 3
            category: enlightenment
            tier: 3
          - name: Maintain Firepower
            points: 1
            category: enlightenment
            tier: 3
          - name: Barrage Attack
            points: 3
            category: enlightenment
            tier: 4
          - name: Kindle
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
          - name: Launcher Acceleration
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - If your crit rate is above 88.67% before Master, go Critical instead.
          - Azena's Blessing or food is a requirement — this is a mana-intensive build.
          - Swap Limit Break points into Illicit Spell if still having mana issues.
          - If choosing to play Jumper Piano (not Kindling), drop Kindle and take Maintain Firepower 2/5 instead.
#      - name: Single Cycle Kindle (3-1-3)
#        difficulty: 3
#        description: High-burst builder-and-spender playstyle with excellent skill expression. Kindle every rotation — Napalm Shot and Flamethrower (builders) enable Kindle activation, and your main damage skills are used inside the 8-second Kindle buff window. Missile Launcher (T) and Barrage Attack (Z) are used within the buff whenever available.
#        stats: Critical 30/30, Swiftness 10/30
#        arkgrid_cores: Jumper + Galewind Artillerist + Auto Lock-On
#        arkgrid_prose: |-
#          Cores are Jumper (Sun), Galewind Artillerist (Moon), and Auto Lock-On (Star).
#          Kindle every rotation provides 25% normal skill damage and 35% MP recovery for 8 seconds. Max attack speed with the support Goddess of Blessing ark passive, plus an additional 10% cast speed from the Moon core (Galewind Artillerist). Simple, set rotation gameplay with excellent burst.
#          Chaos cores: Flashy (Sun), Smoldering Strike (Moon), Attack (Star).
#        priorities:
#          - Opening rotation is with full Firepower Meter to cast Kindle. Use Stimulant before raid start, cast your Ultimate for quick meter, or use the builders (Flamethrower and Napalm Shot).
#          - Cast Energy Field before the burst rotation to prevent interruptions; it can be cast every other Kindle rotation.
#          - Missile Launcher (T) and Barrage Attack (Z) come off cooldown after the 4th Kindle Burst and line up well with Energy Field.
#          - Cast Flamethrower before Napalm Shot to prevent builder desync in future rotations.
#          - Both builders must hit for full meter. If you miss one, use two main skills plus Enhanced Shell to reach full meter rather than holding.
#          - Kindle can be activated without interrupting a skill cast — generally activate it after Homing Barrage and Air Raid, whose delayed landings still benefit from the buff.
#          - Familiarize yourself with how the Moon core (Galewind Artillerist) works; see the guide FAQ.
#          - Stabilized Status is your budget option for a relic engraving piece.
#        engravings:
#          - name: Grudge
#            priority: required
#          - name: Adrenaline
#            priority: required
#          - name: Keen Blunt Weapon
#            priority: required
#          - name: Cursed Doll
#            priority: required
#          - name: Hit Master
#            priority: recommended
#          - name: Stabilized Status
#            priority: optional
#        skills:
#          - name: Homing Barrage
#            level: 14
#            tripods:
#              - TODO tier 1 opt 2
#              - TODO tier 2 opt 3
#              - TODO tier 3 opt 2
#            rune: Bleed
#            rune_rarity: legendary
#            notes: |-
#              **Weak Point Lv. 1**
#              - Delayed landing; lands at the same time as Air Raid if paired together.
#          - name: Air Raid
#            level: 14
#            tripods:
#              - TODO tier 1 opt 2
#              - TODO tier 2 opt 1
#              - TODO tier 3 opt 2
#            rune: Galewind
#            rune_rarity: legendary
#            notes: |-
#              **Paralysis Immunity**
#              - Delayed landing.
#          - name: Pressurized Heatbomb
#            level: 14
#            tripods:
#              - TODO tier 1 opt 2
#              - TODO tier 2 opt 2
#              - TODO tier 3 opt 2
#            rune: Quick Recharge
#            rune_rarity: legendary
#            notes: |-
#              **Paralysis Immunity, Weak Point Lv. 1, Mid-High Stagger**
#              - Highest damage skill.
#          - name: Multi-Rocket Launcher
#            level: 14
#            tripods:
#              - TODO tier 1 opt 1
#              - TODO tier 2 opt 3
#              - TODO tier 3 opt 2
#            rune: Galewind
#            rune_rarity: legendary
#            notes: |-
#              **Paralysis Immunity, High Stagger**
#              - Vision can be taken if you need more stagger.
#          - name: Enhanced Shell
#            level: 10
#            tripods:
#              - TODO tier 1 opt 1
#              - TODO tier 2 opt 1
#              - TODO tier 3 opt 2
#            rune: Poison
#            rune_rarity: legendary
#            notes: |-
#              **Synergy, Low Stagger**
#              - The Internal Ignition tripod line resets synergy application.
#          - name: Flamethrower
#            level: 10
#            tripods:
#              - TODO tier 1 opt 2
#              - TODO tier 2 opt 2
#              - TODO tier 3 opt 1
#            rune: Wealth
#            rune_rarity: legendary
#            notes: |-
#              **Paralysis Immunity, Mid-High Stagger** (Builder)
#              - Holding skill.
#              - Cast before Napalm Shot during rebuilding to prevent desync in future rotations.
#          - name: Napalm Shot
#            level: 10
#            tripods:
#              - TODO tier 1 opt 3
#              - TODO tier 2 opt 2
#              - TODO tier 3 opt 1
#            rune: Wealth
#            rune_rarity: epic
#            notes: |-
#              **Synergy, Paralysis Immunity, Counter, Weak Point Lv. 1, High Stagger** (Builder)
#              - Provides +20% stagger for 4 seconds.
#              - Slow counter.
#          - name: Energy Field
#            level: 10
#            tripods:
#              - TODO tier 1 opt 3
#              - TODO tier 2 opt 2
#              - TODO tier 3 opt 1
#            rune: Quick Recharge
#            rune_rarity: epic
#            notes: |-
#              **Push Immunity — Recommended** (Choose one: Energy Field or Jump Barrage)
#              - 10 seconds of push immunity with a 40% max HP shield.
#              - Prevents interruptions during the Kindle Burst cycle; can be cast every other Kindle rotation.
#          - name: Jump Barrage
#            level: 10
#            tripods:
#              - TODO tier 1 opt 1
#              - TODO tier 2 opt 3
#              - TODO tier 3 opt 2
#            rune: Quick Recharge
#            rune_rarity: epic
#            notes: |-
#              **Low Stagger** (Choose one: Energy Field or Jump Barrage)
#              - Mobility skill.
#              - Cooldown reduction for Pressurized Heatbomb and Multi-Rocket Launcher on cast.
#          - name: Missile Launcher
#            level_label: Hyper Awakening Technique
#            notes: |-
#              **Paralysis Immunity, High Stagger**
#              - Each missile launch has a delay; you can re-aim each shot.
#          - name: Missile Barrage / A.C.O.M. Bombardment Support
#            icon: Missile Barrage
#            level_label: Awakening / Hyper Awakening
#            notes: |-
#              **Meter Generation**
#              - Brings the Firepower Meter up to full from zero (10/20 missiles need to hit minimum).
#              - The Hyper Awakening (A.C.O.M. Bombardment Support) has a significant delay before hitting.
#        gems:
#          - skill: Pressurized Heatbomb
#            type: damage
#            priority: 1
#          - skill: Multi-Rocket Launcher
#            type: damage
#            priority: 2
#          - skill: Homing Barrage
#            type: damage
#            priority: 3
#          - skill: Air Raid
#            type: damage
#            priority: 4
#          - skill: Enhanced Shell
#            type: damage
#            priority: 5
#          - skill: Flamethrower
#            type: damage
#            priority: 6
#          - skill: Pressurized Heatbomb
#            type: cooldown
#            priority: 1
#          - skill: Multi-Rocket Launcher
#            type: cooldown
#            priority: 2
#          - skill: Homing Barrage
#            type: cooldown
#            priority: 3
#          - skill: Air Raid
#            type: cooldown
#            priority: 4
#          - skill: Energy Field
#            type: cooldown
#            priority: 5
#        arkPassives:
#          - name: Crit
#            points: 30
#            category: evolution
#            tier: 1
#          - name: Swiftness
#            points: 10
#            category: evolution
#            tier: 1
#          - name: Limit Break
#            points: 3
#            category: evolution
#            tier: 2
#          - name: Unlimited Magick
#            points: 2
#            category: evolution
#            tier: 3
#          - name: Master
#            points: 1
#            category: evolution
#            tier: 4
#          - name: Pulverize
#            points: 1
#            category: evolution
#            tier: 4
#          - name: Standing Striker
#            points: 2
#            category: evolution
#            tier: 5
#          - name: Firepower Enhancement
#            points: 1
#            category: enlightenment
#            tier: 1
#          - name: Sustained Firepower
#            points: 3
#            category: enlightenment
#            tier: 2
#          - name: Overheat
#            points: 3
#            category: enlightenment
#            tier: 3
#          - name: Barrage Attack
#            points: 3
#            category: enlightenment
#            tier: 4
#          - name: Kindle
#            points: 2
#            category: enlightenment
#            tier: 4
#          - name: Transcendent Power
#            points: 5
#            category: leap
#            tier: 1
#          - name: Unleashed Power
#            points: 5
#            category: leap
#            tier: 1
#          - name: Launcher Acceleration
#            points: 3
#            category: leap
#            tier: 2
#        arkPassiveTips:
#          - Unlimited Magick 2/2 syncs the cooldowns of Missile Launcher (T) and Barrage Attack (Z).
#          - If your crit rate is above 88.67% before Master, take Critical instead.
---