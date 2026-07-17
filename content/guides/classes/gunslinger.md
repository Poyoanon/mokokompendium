---
title: Gunslinger Guide
class: Gunner
subclass: Gunslinger
class_id: 512
description: Complete Gunslinger guide covering the Peacemaker build, including the Eye of the Tigress and Echoes of the Banquet setups.
author: ISWAR (Luterra, NA)
lastUpdated: '2026-07-11'
identity:
  name: Weapon Wheel
  description: The Weapon Wheel allows you to switch between the three stances, each stance having its own defining trait that changes your playstyle. Handgun skills are mostly utility and mobility, while Shotgun and Rifle skills are mostly damage skills for mid and long range. On the wheel, the tiny grayed-out squares represent abilities that are not available, while the colored ones indicate an ability that is ready to cast.
synergy:
  name: Crit Rate Increase
  description: Increases crit rate by 10%. Applied through first-row tripods on Spiral Tracker, Dexterous Shot, and AT02 Grenade — run at least two of the three as synergy skills, or AT02 Grenade at level 10 as a solo synergy.
  skills:
    - Spiral Tracker
    - Dexterous Shot
    - AT02 Grenade
builds:
  - name: Peacemaker
    engraving: Peacemaker
    description: Focuses on stance swapping to utilize both Shotgun and Rifle skills. High skill expression with mobile, consistent, ranged DPS — but extremely squishy, expensive due to gems, and prone to very long animation locks.
    playstyle: Swap between Handgun, Shotgun, and Rifle stances — weave Handgun utility skills between your Shotgun and Rifle damage skills to keep synergy and bleed uptime while landing your primary damage skills.
    difficulty: hard
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
      - name: MP Efficiency Increase
        priority: optional
    variants:
      - name: Eye of the Tigress
        difficulty: 3
        description: Standard Peacemaker but better — the Eye of the Tigress core is a general damage increase across all skills and plays the same as base Peacemaker.
        stats: Critical 20/30, Specialization 20/30
        arkgrid_cores: Eye of the Tigress + Jack-of-All-Trades + All-Rounder
        arkgrid_prose: |-
          Cores are Eye of the Tigress (Sun), Jack-of-All-Trades (Moon), and All-Rounder (Star).
          Standard Peacemaker but better! General damage increase across all skills, plays the same.
          Chaos cores: Flashy Attack (Sun), Smoldering Strike (Moon), Attack (Star).
        priorities:
          - This is NOT a strict rotation — Gunslinger works on a skill priority system, weaving Synergy -> Damage -> Synergy.
          - Prioritize your T skill, Focused Shot, Sharpshooter, Dual Buckshot, and Target Down as the situation allows.
          - Weave pistol skills in between DPS skills to maintain synergy, bleed, and Life Absorption uptime.
          - Run at least two of Spiral Tracker, Dexterous Shot, and AT02 Grenade as synergy skills, or AT02 Grenade at level 10 as a solo synergy.
          - Pre-stack Adrenaline before entering the raid with filler pistol skills.
          - Always enter the raid having cast 2 pistol skills to activate Destiny.
          - Make sure to swap weapons and back to maintain the Peacemaker buff if dodging — all damage should be done under the Peacemaker buff.
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
          - name: MP Efficiency Increase
            priority: optional
        skills:
          - name: Spiral Tracker
            level: 4
            tripods:
              - Weakness Exposure
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Synergy Skill**
              - Lasts on the ground for around ~1.5s to reapply synergy/bleed, with a 6 second duration and 8 second cooldown.
          - name: Quick Step
            level: 4
            tripods:
              - Life Absorption
            notes: |-
              - Can be left at level 1 — run at 4 for the <tripod>Life Absorption</tripod> self buff.
          - name: Somersault Shot
            level: 4
            tripods:
              - Agile Movement
            notes: |-
              **Mobility Skill**
              - Can be left at level 1.
              - <tripod>Agile Movement</tripod> can be taken for faster movement.
          - name: Death Fire
            level: 4
            tripods:
              - Tenacity
            notes: |-
              - Can be left at level 1.
              - <tripod>Tenacity</tripod> can be taken for on-demand push immunity.
          - name: AT02 Grenade
            level: 4
            tripods:
              - Weakness Exposure
            rune: Quick Recharge
            notes: |-
              **Synergy Skill**
              - At level 10 the <tripod>Ignition</tripod> tripod reapplies the synergy and bleed/poison effects, letting it act as a solo synergy on an effective ~12 second duration (take Enhanced Grenade and Internal Ignition).
              - The <tripod>Firework</tripod> tripod can be taken for extra stagger.
          - name: Dexterous Shot
            level: 4
            tripods:
              - Weakness Exposure
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Mobility Skill, Synergy Skill**
              - Can be left at level 1.
              - Requires you to glide near the boss to ensure the skill hits.
          - name: Peacekeeper
            level: 4
            tripods:
              - Excellent Mobility
            notes: |-
              **Mobility Skill, Counter**
          - name: Bullet Rain
            level: 14
            tripods:
              - In a Tight Spot
              - Ranged Shot
              - Flame Shot
            rune: Galewind
            rune_rarity: epic
            notes: |-
              - Filler damage skill.
              - Level 10+ — add more points if available.
          - name: Dual Buckshot
            level: 14
            tripods:
              - In a Tight Spot
              - Enhanced Fire
              - Final Strike
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Primary Damage Skill**
              - Lvl. 1 weak point.
          - name: Sharpshooter
            level: 14
            tripods:
              - In a Tight Spot
              - Special Bullet
              - Guardian's Breath
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill**
              - Can be canceled by weapon swapping.
          - name: Last Request
            level: 1
            notes: |-
              **Counter**
              - Filler skill.
              - Lvl. 1 weak point.
              - High stagger.
          - name: Hour of Judgement
            level: 1
            notes: |-
              - Filler skill.
          - name: Focused Shot
            level: 14
            tripods:
              - Quick Aim
              - Last Bullet
              - Final Strike
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill**
              - Lvl. 1 weak point.
          - name: Target Down
            level: 14
            tripods:
              - Quick Aim
              - Semi-automatic Rifle
              - Steady Aim
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Primary Damage Skill**
          - name: Catastrophe
            level: 13
            tripods:
              - Tenacity
              - Cutthroat
              - Eternal Calamity
            notes: |-
              - Filler damage skill.
              - Push immunity.
              - Lvl. 1 weak point.
              - High stagger.
          - name: Spiral Flame
            level: 10
            tripods:
              - Quick Aim
              - Quick Prep
              - Reinforced Gunbarrel
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              - Filler damage skill.
              - Stagger.
          - name: Seven Shotguns
            level_label: Hyper Awakening Technique
            notes: |-
              - Personal preference between Bullseye and Seven Shotguns; Seven Shotguns is slightly stronger.
          - name: Bullseye
            level_label: Hyper Awakening Technique
            notes: |-
              - Personal preference between Bullseye and Seven Shotguns.
          - name: Eye of Twilight / Dead End
            icon: Eye of Twilight
            level_label: Awakening / Hyper Awakening
            notes: |-
              - Standard damage awakening.
        gems:
          - skill: Sharpshooter
            type: damage
            priority: 1
          - skill: Focused Shot
            type: damage
            priority: 2
          - skill: Dual Buckshot
            type: damage
            priority: 3
          - skill: Target Down
            type: damage
            priority: 4
          - skill: Bullet Rain
            type: damage
            priority: 5
          - skill: Catastrophe
            type: damage
            priority: 6
          - skill: Spiral Flame
            type: damage
            priority: 7
          - skill: Target Down
            type: cooldown
            priority: 1
          - skill: Sharpshooter
            type: cooldown
            priority: 2
          - skill: Dual Buckshot
            type: cooldown
            priority: 3
          - skill: Focused Shot
            type: cooldown
            priority: 4
        rotation_sections:
          - title: General DPS Rotation
            steps:
              - Dexterous Shot
              - Focused Shot
              - Seven Shotguns
              - Sharpshooter
              - Dual Buckshot
              - AT02 Grenade
              - Target Down
              - Catastrophe
              - Spiral Flame
              - Bullet Rain
              - Spiral Tracker
        arkPassives:
          - name: Crit
            points: 20
            category: evolution
            tier: 1
          - name: Specialization
            points: 20
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
          - name: MP Furnace
            points: 2
            category: evolution
            tier: 5
          - name: "Peacemaker: Handgun"
            points: 3
            category: enlightenment
            tier: 1
          - name: "Peacemaker: Shotgun"
            points: 3
            category: enlightenment
            tier: 2
          - name: Secret Bullet
            points: 2
            category: enlightenment
            tier: 3
          - name: "Peacemaker: Rifle"
            points: 3
            category: enlightenment
            tier: 3
          - name: Pacifist
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
          - name: Aerial Stunt
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Your crit and spec stats are subject to change depending on gearing — aim to have 95%+ crit after synergy (10), Pacifist (15), and Adrenaline (14-20). Adjust crit stat as necessary, then put the remainder into spec.
          - If you find yourself having lower uptime on DPS, go Unlimited Magick 1 and Zealous Smite 1.
      - name: Echoes of the Banquet
        difficulty: 3
        description: Shotgun-focused Ark Grid setup revolving around Last Request buffing other shotgun skills, and shotgun skills resetting Last Request. Drops Hour of Judgement for Shotgun Rapid Fire. Incredibly high stagger and weak point with competitive performance to Eye of the Tigress.
        stats: Critical 20/30, Specialization 20/30
        arkgrid_cores: Echoes of the Banquet + Weapon Switch + Blowback
        arkgrid_prose: |-
          Cores are Echoes of the Banquet (Sun), Weapon Switch (Moon), and Blowback (Star).
          Shotgun focused core revolving around Last Request buffing other shotgun skills, and other shotgun skills resetting Last Request. Gameplay revolves around Last Request -> Shotgun Skill -> Last Request -> Shotgun Skill, followed by your other damage skills once you run out of shotgun skills.
          This playstyle has incredibly high stagger and weakpoint and has competitive performance to Eye of the Tigress.
          Chaos cores: Flashy Attack (Sun), Smoldering Strike (Moon), Attack (Star).
        priorities:
          - Gameplay revolves around Last Request into a shotgun skill, then Last Request again — shotgun skills reset Last Request, and Last Request buffs the following shotgun skill.
          - Once you run out of shotgun skills, use your other damage skills.
          - Weave pistol skills in between DPS skills to maintain synergy, bleed, and Life Absorption uptime.
          - Run at least two of Spiral Tracker, Dexterous Shot, and AT02 Grenade as synergy skills, or AT02 Grenade at level 10 as a solo synergy.
          - Always enter the raid having cast 2 pistol skills to activate Destiny.
          - Make sure to swap weapons and back to maintain the Peacemaker buff if dodging — all damage should be done under the Peacemaker buff.
        engravings:
          - name: Grudge
            priority: required
          - name: Adrenaline
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Cursed Doll
            priority: required
          - name: Mass Increase
            priority: recommended
          - name: Hit Master
            priority: optional
        skills:
          - name: Spiral Tracker
            level: 4
            tripods:
              - Weakness Exposure
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Synergy Skill**
              - Lasts on the ground for around ~1.5s to reapply synergy/bleed, with a 6 second duration and 8 second cooldown.
          - name: Quick Step
            level: 4
            tripods:
              - Life Absorption
            notes: |-
              - Can be left at level 1 — run at 4 for the <tripod>Life Absorption</tripod> self buff.
          - name: Somersault Shot
            level: 4
            tripods:
              - Agile Movement
            notes: |-
              **Mobility Skill**
              - Can be left at level 1.
              - <tripod>Agile Movement</tripod> can be taken for faster movement.
          - name: Death Fire
            level: 4
            tripods:
              - Tenacity
            notes: |-
              - Can be left at level 1.
              - <tripod>Tenacity</tripod> can be taken for on-demand push immunity.
          - name: AT02 Grenade
            level: 4
            tripods:
              - Weakness Exposure
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Synergy Skill**
          - name: Dexterous Shot
            level: 4
            tripods:
              - Weakness Exposure
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Mobility Skill, Synergy Skill**
              - Can be left at level 1.
              - Requires you to glide near the boss to ensure the skill hits.
              - If running another syn, go <tripod>Agile Movement</tripod>
          - name: Peacekeeper
            level: 4
            tripods:
              - Excellent Mobility
            notes: |-
              **Mobility Skill, Counter**
          - name: Bullet Rain
            level: 14
            tripods:
              - In a Tight Spot
              - Ranged Shot
              - Flame Shot
            rune: Galewind
            rune_rarity: epic
            notes: |-
              - Filler damage skill.
              - Dropped to level 10 in this variant.
          - name: Dual Buckshot
            level: 14
            tripods:
              - In a Tight Spot
              - Enhanced Fire
              - Recoil Evasion
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill**
              - <tripod>Recoil Evasion</tripod> taken due to the Ark Grid core.
          - name: Sharpshooter
            level: 14
            tripods:
              - In a Tight Spot
              - Special Bullet
              - Guardian's Breath
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill**
              - Can be canceled by weapon swapping.
          - name: Last Request
            level: 7
            tripods:
              - Incendiary Bomb
              - Execution
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Mobility Skill, Synergy Skill, Counter**
              - Can be left at 7 — go level 10 for high stagger with <tripod>Double Shot</tripod>
              - Cast this before every shotgun skill to buff the following shotgun skill.
              - Drop skill points from pistol utility / Bullet Rain / Target Down for this.
              - Overwhelm (Legendary) is an alternative rune option if level 10.
          - name: Shotgun Rapid Fire
            level: 14
            tripods:
              - In a Tight Spot
              - Enhanced Shot
              - Special Bullet
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Primary Damage Skill**
          - name: Focused Shot
            level: 14
            tripods:
              - Quick Aim
              - Last Bullet
              - Final Strike
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Primary Damage Skill**
              - Lvl. 1 weak point.
          - name: Target Down
            level: 14
            tripods:
              - Quick Aim
              - Semi-automatic Rifle
              - Steady Aim
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Primary Damage Skill**
          - name: Catastrophe
            level: 4
            tripods:
              - Tenacity
            notes: |-
              - Filler damage skill.
              - Push immunity.
              - High stagger.
              - Dropped to 0 or 4 in this variant.
          - name: Spiral Flame
            level: 4
            tripods:
              - Ferocious Flame
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              - Filler damage skill.
              - Stagger.
              - Dropped to 0 or 4 in this variant, 4 if running Bleed/Poison.
          - name: Seven Shotguns
            level_label: Hyper Awakening Technique
            notes: |-
              - Pick this when running Echoes of the Banquet.
          - name: Eye of Twilight / Dead End
            icon: Eye of Twilight
            level_label: Awakening / Hyper Awakening
            notes: |-
              - Standard damage awakening.
        gems:
          - skill: Sharpshooter
            type: damage
            priority: 1
          - skill: Dual Buckshot
            type: damage
            priority: 2
          - skill: Shotgun Rapid Fire
            type: damage
            priority: 3
          - skill: Focused Shot
            type: damage
            priority: 4
          - skill: Target Down
            type: damage
            priority: 5
          - skill: Bullet Rain
            type: damage
            priority: 6
          - skill: Sharpshooter
            type: cooldown
            priority: 1
          - skill: Dual Buckshot
            type: cooldown
            priority: 2
          - skill: Shotgun Rapid Fire
            type: cooldown
            priority: 3
          - skill: Focused Shot
            type: cooldown
            priority: 4
          - skill: Target Down
            type: cooldown
            priority: 5
        rotation_sections:
          - title: General DPS Rotation
            steps:
              - Spiral Tracker
              - Last Request
              - Seven Shotguns
              - Last Request
              - Sharpshooter
              - Last Request
              - Dual Buckshot
              - Last Request
              - Shotgun Rapid Fire
              - Last Request
              - Focused Shot
              - Target Down
              - Dexterous Shot
              - Bullet Rain
              - Quick Step
              - Spiral Tracker
              - Spiral Flame
              - Sharpshooter
        arkPassives:
          - name: Crit
            points: 20
            category: evolution
            tier: 1
          - name: Specialization
            points: 20
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
          - name: MP Furnace
            points: 2
            category: evolution
            tier: 5
          - name: "Peacemaker: Handgun"
            points: 3
            category: enlightenment
            tier: 1
          - name: "Peacemaker: Shotgun"
            points: 3
            category: enlightenment
            tier: 2
          - name: Secret Bullet
            points: 2
            category: enlightenment
            tier: 3
          - name: "Peacemaker: Rifle"
            points: 3
            category: enlightenment
            tier: 3
          - name: Pacifist
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
          - name: Aerial Stunt
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - Your crit and spec stats are subject to change depending on gearing — aim to have 95%+ crit after synergy (10), Pacifist (15), and Adrenaline (14-20). Adjust crit stat as necessary, then put the remainder into spec.
          - If you find yourself having lower uptime on DPS, go Unlimited Magick 1 and Zealous Smite 1.
---
