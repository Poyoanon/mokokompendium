---
title: Breaker Guide
class: Fighter (Male)
subclass: Breaker
class_id: 313
description: A brief guide to Breaker covering moslty Asura Path, and soon will cover Brawl King Storm. 
author: Brachydius (Vairgrys, NA)
lastUpdated: '2026-07-31'
identity:
  name: Tenacious Power
  description: Base identity that scales with spec, used only on BK engraving and paradise
synergy:
  name: Damage Amplification
  description: On hit, damage to foes from all party members +6%
  skills:
    - Crater Strike
    - Haymaker
    - Hurricane Chain
    - Brawl King Stance (Z)
builds:
  - name: Asura's Path
    engraving: Asura's Path
    description: A high action build that focus your damage on a flurry of punches.
    playstyle: build your meter by alternating Shock and Stamina Skills and send your damage with a flurry of hits
    difficulty: medium
    identity:
      name: Asura Energy
      description: When casting a Stamina skill after shock skill, or a shock skill after a stamina skill, Asura Energy +4%. When Asura Energy is at 100%, Enter Asura State (Z) to gain Asura Destruction effect, change movement skill (space) and change Basic attack to Asura Destruction Basic attack.

    
    variants:
      - name: Shadow Fists Asura (322)
        description: The Ark Grid Sun core 'Shadow Fists' makes so our Asura Punches spawn shadow clones that deal extra damage and most importantly reduce the cooldown of ALL STAMINA SKILLS by 0,5 seconds. Since Heavenly King's War Dance is a Stamina Skill and our main gauge generator, we can do more Asura cycles and therefore more damage. This is the current best build for Asura.
        difficulty: 2
        arkgrid_cores: Shadow Fists + Asura War + Asura
        arkgrid_prose: |-
          This build strength only shows when you can activate your destiny from the Moon core AND at least 17 points on Sun Core.
          Achieving Ark Grid (17p/14p/0p) is the minimum setup because we only get the cooldown reduction effect from 17p Sun Core.
          The Star core is pure damage increase and won't really change our gameplay.
        recommended: true
        
        priorities:
          - Always be casting skills alternating between Shock and Stamina skills to build your Asura Energy. Even if not hitting the Boss, you can build gauge during the 'downtime'
          - Never wait too much for the 'perfect opportunity' to fully hit your Z in front. waiting more than 5~6 full gauge without using Z is mostly always a damage loss.
          - While most skills have frontal attack afix, you'll mostly care about landing in the front-> Asura Destruction Basic Attack, Eye of the Storm, Explosive Fist and Zaffre Nova (if using).
          - Always remember to maximize the use of Defensive Speculation (X) both as survivability and to not be interrupted while on the gauge building phase.
          - While is tempting to reposition our punches during Z, keep in mind each time you move we lose a bit of damage. 

        engravings:
        - name: Grudge
          priority: required
        - name: Master Brawler
          priority: required
        - name: Adrenaline
          priority: required
        - name: Raid Captain
          priority: required
        - name: Keen Blunt Weapon
          priority: recommended
        - name: Cursed Doll
          priority: optional
        - name: Stabilized Status
          priority: optional

        arkPassives:
        - name: Critical
          points: 30
          category: evolution
          tier: 1
        - name: Swiftness
          points: 10
          category: evolution
          tier: 1
        - name: Limit Break
          points: 2
          category: evolution
          tier: 2
        - name: Opt. Training
          points: 1
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
        - name: Asura's Path
          points: 1
          category: enlightenment
          tier: 1
        - name: Lethal Fist
          points: 3
          category: enlightenment
          tier: 2
        - name: Asura Iron Body
          points: 3
          category: enlightenment
          tier: 3
        - name: All-Out War
          points: 2
          category: enlightenment
          tier: 3
        - name: Trance
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
        - name: Heavenly King Wild Dance
          points: 3
          category: leap
          tier: 2
        arkPassiveTips:
          - You should have ~107% Crit Rate with this build, with good Crit stat and Legendary Adrenaline. This allows you to play with one Crit Synergy without wasting Crit Rate.
          - With Relic Adrenaline, you'll get a bit past 113% and a crit synergy starts being wasteful.
          - Since Master don't have the losing stacks gimmick, its preferable in most cases, freeing up T2 evolution for 1 point in Optimized Training allowing Lower Cooldowns and therefore more Asuras.
          - In Leap nodes, Max Release Potential is more important than its damage, we only care about the gauge gain from T2 node Heavenly King's Wild Dance. More casts of T = More Asuras.
        skills:
        - name: Eye of the Storm
          level: 14
          tripods:
            - Energy Circulation
            - Close Quarters
            - Divine Axis
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Main damage Shock Skill**
            - This skill uses a lot of shock gauge, make sure to have enought when it comes off cooldown.
        - name: Explosive Fist
          level: 14
          tripods:
            - Shock Efficiency
            - Weak Point Detection
            - Gravitational Blow
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Secondary Skill**
            - Good dmg, kinda high shock cost.
            - Always pair up with Falling star if you're using it.
        - name: Spiral Uppercut
          level: 14
          tripods:
            - Additional Strike
            - Spiral Shot
            - Galefist
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **Filler/Mobility Skill**
            - Stack up to 2 times, always have it on cooldown
        - name: Haymaker
          level: 7
          tripods:
            - Damage Amplification
            - Circunstantial Judgement
          rune: Quick Recharge
          rune_rarity: epic
          notes: |-
            **[Shock] Counter Skill**
            - short cooldown, always pair up with Crater Strike.
            - Be mindfull of its low reach.
        - name: Crater Strike
          level: 12
          tripods:
            - Damage Amplification
            - Furious Hit
            - Space Distortion
          rune: Quick Recharge
          rune_rarity: rare
          notes: |-
            **[Stamina] Counter Skill**
            - Always pair up with Haymaker.
            - Can also be a good mobility skill with <tripod>Space Distortion</tripod>.
            - If using Hurricane Chain, you can swap first tripod for <tripod>Swift Fingers</tripod>.
        - name: Brawl King's Advance
          level: 14
          tripods:
            - Swift Fingers
            - Shoulder Slam
            - Endurance Training
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **[Stamina] Best Filler Skill**
            - The skill Must hit (regardless of target is invincible or not) for the cooldown reduction of Endurance Training to take effect.
            - Excellent Mobility tripod can be used for more mobilty if you need it.
        - name: Falling Star
          level: 14
          tripods:
            - Focus
            - Tenacity
            - Beast Rush
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **CHOOSE 1 BETWEEN THIS AND Hurricane Chain**
            - Can have push immune via <tripod>Tenacity</tripod> tripod
            - Always pair up with Explosive Fist if you're using it. 
        - name: Hurricane Chain
          level: 10
          tripods:
            - Damage Amplification
            - Slugger
            - Driving Hit
          rune: Galewind
          rune_rarity: epic
          notes: |-
            **CHOOSE 1 BETWEEN THIS AND Falling Star**
            - Lower Stamina cost and cooldown, but lower damage than Falling Star.
            - Can pair up with Explosive Fist around a ratio of 2-1
        - name: Obliteration
          level: 10
          tripods:
            - Tenacity
            - Flame Strike
            - Giant Fist
          rune: Quick Recharge
          rune_rarity: rare
          notes: |-
            **CHOOSE 1 BETWEEN THIS AND Zaffre Nova**
            - Can have push immune via <tripod>Tenacity</tripod> tripod
            - Low shock cost and low damage, easier and flexible to use than Zaffre Nova
        - name: Zaffre Nova
          level: 14
          tripods:
            - Shock Efficiency
            - Force Spiral
            - Reverse Spin
          rune: Quick Recharge
          rune_rarity: rare
          notes: |-
            **CHOOSE 1 BETWEEN THIS AND Obliteration**
            - Higher Ceilling damage than Obliteration, but has a higher shock cost and is harder to use.
            - Can fit in a 6x DMG gem setup. If so, use <tripod>Centrifugal Force</tripod> tripod and make sure you hit this skill in the front.
            - Brawl King's Advance is downgraded to lvl 10 to max this skill lvl.
            
        gems:
        - skill: Asura Destruction Basic Attack
          type: damage
          priority: 1
        - skill: Eye of The Storm
          type: damage
          priority: 2
        - skill: Explosive Fist
          type: damage
          priority: 3
        - skill: Brawl King's Advance
          type: cooldown
          priority: 1
        - skill: Eye of The Storm
          type: cooldown
          priority: 2
        - skill: Explosive Fist
          type: cooldown
          priority: 3
        - skill: Spiral Uppercut
          type: cooldown
          priority: 4
        - skill: Obliteration
          type: cooldown
          priority: 5
        - skill: Crater Strike
          type: cooldown
          priority: 6
        - skill: Haymaker
          type: cooldown
          priority: 7
        - skill: Hurrican Chain
          type: cooldown
          priority: 8
        - name: Heavenly King's War Dance
          level_label: Hyper Awakening Technique
          notes: |-
            **[Stamina] Most Important Gauge Skill.**
            - Has a natural Frontal Attack Afix.
            - Leap Node Heavenly King's Wild Dance causes it to generate additional meter, allowing for more Asura cycles.
            - Don't use this skill if you're close to 100% Asura Energy, as it will waste the extra gauge gain.
        - name: Butterfly Sting / Celestial Fist
          level_label: Awakening / Hyper Awakening
          notes: |-
            **Fills 100% of your Asura Energy**
            - The last attack of this Awakening completely fills up your meter, allowing you to quickly enter Asura State.
            - It does not need to land on any target in order to fill up your meter, but if you get grabbed or any other kind of cancellation occurs before the last hit's animation finishes, you won't benefit from its effects.
        rotation_sections:
          - title: Standard gauge gain
            steps:
              - Crater Strike
              - Haymaker
              - Brawl king's Advance
              - Obliteration
              - Falling Star
              - Explosive Fist
              - Brawl king's Advance
              - Spiral Uppercut
              - Crater Strike 
              - Haymaker
              - Brawl king's Advance
              - Eye Of The Storm
              - Brawl king's Advance
              - Obliteration
              - Crater Strike
              - Haymaker
              - Brawl king's Advance
              - Spiral Uppercut
              - Falling Star
              - Explosive Fist
              - Brawl king's Advance
              - Spiral Uppercut
              - Crater Strike
              - Haymaker
              - Brawl king's Advance
              - Obliteration
          - title: Start Atro Burst
            steps:
            - Heavenly King's Wild Dance
            - Atropine
            - Asura Destruction Basic Attack
            - Butterfly Sting
            - Asura Destructrion Basic Attack
      
        dps_distribution:
        - name: Asura Destruction Basic Attack
          dmg: 65.8
        - name: Heavenly King's War Dance
          dmg: 13.5
        - name: Eye of the Storm
          dmg: 6.8
        - name: Explosive Fist
          dmg: 4.8
        - name: Spiral Uppercut
          dmg: 3.1
        - name: Brawl King's Advance
          dmg: 1.0

        
      
      
      
      - name: Full on Asura (222)
        arkgrid_cores: Eye of Asura + Asura War + Asura
        description: |- 
          This build focus all the cores on maximizing asura damage and also making you tankier during it.
          The reason it not as strong is that using more Asuras with Shadow Fists cdr is far greater than the damage increasse this core provides.
          Makes your Asuras more punishing when you miss or don't hit the front
        difficulty: 3
        recommended: false

      - name: Eye of the Storm (112)
        arkgrid_cores: Sky-Rending Aura + Awakened Eye of The Storm + Asura    
        description: |- 
          This build is focused on maximizing the damage of Eye of the Storm and gives you 20% of Asura energy as a bonus.
          The bonus Asura energy Sky-Rending Aura provides makes some Asura cycles be really fast, mainly paired with Heavenly King's War Dance
          Playstyle don't change.
          Since we're locked out of the Asura War Moon Core, we lose quite a bit damage potential on our Asura Destruction Basic Attack. 
        difficulty: 2
        recommended: false

  - name: Brawl King Storm(incomplete)
    engraving: Brawl King Storm
---
