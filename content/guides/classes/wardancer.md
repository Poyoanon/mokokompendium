---
title: Wardancer Guide
class: Female Martial Artist
subclass: Wardancer
class_id: 302
description: Complete guide to Wardancer including First Intention and Esoteric Skill Enhancement builds with Ark Grid variants.
builds:
  - name: First Intention
    engraving: First Intention
    description: Focuses on Normal Skills since Esoteric Skills are disabled.
    playstyle: Do a set rotation, rinse and repeat.
    difficulty: hard
    identity:
      name: Esoteric Origin - First Intention
      description: For First Intention, the Esoteric Meter is temporarily disabled until you have Esoteric Origin unlocked. Once unlocked, it will be enabled again, and you gain 20% of an Esoteric Bubble for every Normal Skill cast, regardless if you hit an enemy or not. Once you reach 3 full Esoteric Orbs (15 skills total), you can get a stack of Esoteric Origin by pressing Z and enhances the damage of your next Deadly Dive, Sweeping Kick, Leaping Dragon and Moon Flash Kick. Esoteric Skills are disabled and cannot use the Esoteric Bubble obtained through Esoteric Origin.
    synergy:
      name: Weakness Exposure
      description: Applies a debuff on the enemy, decreasing their crit hit resistance by 10%.
      skills:
        - Roar of Courage
        - Sky Shattering Blow
        - Lightning Kick
    preArkGrid:
      description: Pre and Post Ark Grid setup play nearly identically, the only major difference is that Pre-Ark Grid build have Roar of Courage and Wind's Whisper give 20% of an Esoteric Bubble instead of one full Esoteric Bubble, thus having less burst identity meter gain.
      priorities:
        - Be proactive on getting Esoteric Origin buff everytime you get 3 Esoteric Bubbles.
        - Prioritize reaching 90% Crit before Back Attacks. Adjust stats if needed. 
        - Strike 2 can also be run as an alternative, and you drop Adrenaline for another raw damage engraving.
      arkPassives:
        - name: Crit
          points: 15
          category: evolution
          tier: 1
        - name: Swiftness
          points: 25
          category: evolution
          tier: 1
        - name: Illicit Spell
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
        - name: Strike
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
        - name: Supersonic Breakthrough
          points: 2
          category: evolution
          tier: 5
        - name: Powerful Taijutsu
          points: 3
          category: enlightenment
          tier: 1
        - name: Energy Recovery
          points: 3
          category: enlightenment
          tier: 2
        - name: First Intention
          points: 3
          category: enlightenment
          tier: 3
        - name: Lethal Taijutsu
          points: 2
          category: enlightenment
          tier: 3
        - name: Esoteric Origin
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
        - name: Thrust Kick
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
        - name: Mass Increase
          priority: required
        - name: Adrenaline
          priority: recommended
        - name: MP Efficiency Increase
          priority: optional
        - name: Cursed Doll
          priority: optional
        - name: Ambush Master
          priority: optional     
      skills:
        - name: Sweeping Kick
          level: 14
          tripods:
            - Weak Point Detection
            - Intense Shock
            - Pure Excellence
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Highest Damage Skill**
            - Highest priority to consume Esoteric Origin buff outside of Deadly Dive.
            - Legendary Galewind is acceptable if you do not have any Vision runes.
        - name: Leaping Dragon
          level: 14
          tripods:
            - Wide Hit
            - Dragon Style
            - Red Dragon
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Second/Third Highest Damage Skill**
            - The first row is a flexible choice, pick ,<tripod>Concussion</tripod> if you need Stagger, or <tripod>Weak Point Enhancement</tripod> if you need Weak Point.
            - This skill can also consume Esoteric Origin buff, however this should be prioritized last.
        - name: Energy Combustion
          level: 14
          tripods:
            - Combustible Armor
            - Intense Battle
            - Last Whisper
          rune: Poison
          rune_rarity: legendary
          notes: |-
            **Second/Third Highest Damage Skill, Passive Damage Reduction**
            - You can recast the skill early on, instantly proccing <tripod>Last Whisper</tripod>.
            - Each tick has an interval of 0.5 second, and gives you a stack of <tripod>Intense Battle</tripod> every time. You need 10 ticks (5 seconds) in order to fully stack <tripod>Intense Battle</tripod>.
            - <tripod>Intense Battle</tripod> lasts for 2 seconds, and all accumulated stacks will expire at the same time.
            - There is no visual indicator for <tripod>Intense Battle</tripod> stacks, so you need to mentally note this if you want to optimize it properly.
            - Recasting Energy Combustion will give you a stack of Adrenaline and Master, but it will not give you Esoteric Meter for Esoteric Origin.
        - name: Wind's Whisper
          level: 10
          tripods:
            - Blessing of the Wind
            - Quick Prep
            - Ready Attack
          rune: Focus
          rune_rarity: epic
          notes: |-
            **Primary Attack Power Buff**
            - If you can cap Supersonic Breakthrough without <tripod>Blessing of the Wind</tripod>, you can opt into using <tripod>Oath of the Wind</tripod> to alleviate some mana issues.
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: Roar of Courage
          level: 10
          tripods:
            - Weakness Exposure
            - Quick Prep
            - Supreme Ruler Afterimage
          rune: Focus
          rune_rarity: legendary
          notes: |-
            **Main Crit Rate Self Buff, Primary Crit Synergy Skill**
            - Using this skill will give you 20% Crit Rate Self buff regardless if you hit an enemy or not.
            - You need to hit the boss with this skill to apply the <tripod>Weakness Exposure</tripod>.
            - With <tripod>Supreme Ruler Afterimage</tripod>, the total duration of the Crit Rate Self Buff will be 12 seconds.
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: Flash Heat Fang
          level: 14
          tripods:
            - Magick Control
            - Master Hit
            - Final Strike
          rune: Vision
          rune_rarity: epic
          notes: |-
            **Fourth Highest Damage Skill**
            - <tripod>Taijutsu's Ultimate Skill</tripod> can be also be used if you want a much more frontloaded version.
        - name: Lightning Kick
          level: 14
          tripods:
            - Weakness Exposure
            - Thunder Kick
            - Flash Lightning
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Minor Damage Skill, Mobility Skill, Alternative Crit Synergy Skill**
            - <tripod>Quick Prep</tripod> can be used if you prefer the lower cooldown.
        - name: Sky Shattering Blow
          level: 7
          tripods:
            - Excellent Mobility
            - Ready Attack
          rune: Bleed
          rune_rarity: legendary
          notes: |-
            **Alternative Attack Power Buff, Counter, Pseudo-mobility Skill**
            - Both hits can counter.
            - <tripod>Excellent Mobility</tripod> paired with Spacebar can cover a lot of distance, making it a pseudo-movement skill if you do not need it for counter.
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: Deadly Dive
          level_label: Hyper Awakening Technique
          notes: |-
            **Main Damage Skill**
            - This is the only Normal Skill that First Intention can use for Hyper Awakening Technique.
            - This is the highest priority skill to consume Esoteric Origin.
            - You can redirect yourself midair with this skill.
        - name: "Ultimate Skill: Fist of Dominance / Ultimate Skill: Eight Trigrams Chaotic Strike"
          icon: "Ultimate Skill: Fist of Dominance"
          level_label: Awakening / Hyper Awakening
          notes: |-
            - You can also choose Flash Rage Blow if you prefer that.
            - This skill gives you 80% Damage Reduction while casting.
      gems:
        - skill: Sweeping Kick
          type: damage
          priority: 1
        - skill: Leaping Dragon
          type: damage
          priority: 2
        - skill: Energy Combustion
          type: damage
          priority: 3
        - skill: Flash Heat Fang
          type: damage
          priority: 4
        - skill: Lightning Kick
          type: damage
          priority: 5
        - skill: Sweeping Kick
          type: cooldown
          priority: 1
        - skill: Leaping Dragon
          type: cooldown
          priority: 2
        - skill: Energy Combustion
          type: cooldown
          priority: 3
        - skill: Flash Heat Fang
          type: cooldown
          priority: 4
        - skill: Wind's Whisper
          type: cooldown
          priority: 5
        - skill: Lightning Kick
          type: cooldown
          priority: 6
      rotation:        
          - Sky Shattering Blow
          - Lightning Kick
          - Energy Combustion
          - Roar of Courage
          - Wind's Whisper
          - Deadly Dive
          - Sweeping Kick
          - Leaping Dragon
          - Flash Heat Fang
          - Energy Combustion (recast)
          - Lightning Kick
    variants:
      - name: Enlightened Origin (23X)
        recommended: true
        difficulty: 1
        description: Standard First Intention playstyle that heavily focuses on buffing your Sweeping Kick, which becomes your overall highest damage skill.
        arkgrid_cores: Enlightened Origin + Hypercirculation + Heaven Splitter
        arkgrid_prose: |-
          Prioritize Hypercirculation > Enlightened Origin > Heaven Splitter for Relic Core choices.
          Highest priority will be getting Hypercirculation on 17p ALWAYS. Do not spread them!
          Dragon Style Enhancement can be used as an alternative for Heaven Splitter.
        priorities:
          - Prioritize reaching 90% Crit fully buffed before Back Attacks. Adjust stats if needed.
          - Strike 2 can also be run as an alternative, and you drop Adrenaline for another raw damage engraving.
        arkPassives:
        - name: Crit
          points: 15
          category: evolution
          tier: 1
        - name: Swiftness
          points: 25
          category: evolution
          tier: 1
        - name: Illicit Spell
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
        - name: Strike
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
        - name: Supersonic Breakthrough
          points: 2
          category: evolution
          tier: 5
        - name: Powerful Taijutsu
          points: 3
          category: enlightenment
          tier: 1
        - name: Energy Recovery
          points: 3
          category: enlightenment
          tier: 2
        - name: First Intention
          points: 3
          category: enlightenment
          tier: 3
        - name: Lethal Taijutsu
          points: 2
          category: enlightenment
          tier: 3
        - name: Esoteric Origin
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
        - name: Thrust Kick
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
          - name: Mass Increase
            priority: required
          - name: Adrenaline
            priority: recommended
          - name: MP Efficiency Increase
            priority: optional
          - name: Cursed Doll
            priority: optional
          - name: Ambush Master
            priority: optional
        skills:
        - name: Sweeping Kick
          level: 14
          tripods:
            - Weak Point Detection
            - Intense Shock
            - Pure Excellence
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Highest Damage Skill**
            - Highest priority to consume Esoteric Origin buff outside of Deadly Dive.
            - Legendary Galewind is acceptable if you do not have any Vision runes.
            - If you are running Dragon Style Enhancement Star Core, you need swap to <tripod>Light of Justice</tripod>
        - name: Leaping Dragon
          level: 14
          tripods:
            - Wide Hit
            - Dragon Style
            - Red Dragon
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Second/Third Highest Damage Skill**
            - The first row is a flexible choice, pick ,<tripod>Concussion</tripod> if you need Stagger, or <tripod>Weak Point Enhancement</tripod> if you need Weak Point.
            - This skill can also consume Esoteric Origin buff, however this should be prioritized last.
        - name: Energy Combustion
          level: 14
          tripods:
            - Combustible Armor
            - Intense Battle
            - Last Whisper
          rune: Poison
          rune_rarity: legendary
          notes: |-
            **Second/Third Highest Damage Skill, Passive Damage Reduction**
            - You can recast the skill early on, instantly proccing <tripod>Last Whisper</tripod>.
            - Each tick has an interval of 0.5 second, and gives you a stack of <tripod>Intense Battle</tripod> every time. You need 10 ticks (5 seconds) in order to fully stack <tripod>Intense Battle</tripod>.
            - <tripod>Intense Battle</tripod> lasts for 2 seconds, and all accumulated stacks will expire at the same time.
            - There is no visual indicator for <tripod>Intense Battle</tripod> stacks, so you need to mentally note this if you want to optimize it properly.
            - Recasting Energy Combustion will give you a stack of Adrenaline and Master, but it will not give you Esoteric Meter for Esoteric Origin.
        - name: Wind's Whisper
          level: 10
          tripods:
            - Blessing of the Wind
            - Quick Prep
            - Ready Attack
          rune: Focus
          rune_rarity: epic
          notes: |-
            **Primary Attack Power Buff**
            - If you can cap Supersonic Breakthrough without <tripod>Blessing of the Wind</tripod>, you can opt into using <tripod>Oath of the Wind</tripod> to alleviate some mana issues.
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: Roar of Courage
          level: 10
          tripods:
            - Weakness Exposure
            - Quick Prep
            - Supreme Ruler Afterimage
          rune: Focus
          rune_rarity: legendary
          notes: |-
            **Main Crit Rate Self Buff, Primary Crit Synergy Skill**
            - Using this skill will give you 20% Crit Rate Self buff regardless if you hit an enemy or not.
            - You need to hit the boss with this skill to apply the <tripod>Weakness Exposure</tripod>.
            - With <tripod>Supreme Ruler Afterimage</tripod>, the total duration of the Crit Rate Self Buff will be 12 seconds.
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: Flash Heat Fang
          level: 14
          tripods:
            - Magick Control
            - Master Hit
            - Final Strike
          rune: Vision
          rune_rarity: epic
          notes: |-
            **Fourth Highest Damage Skill**
            - <tripod>Taijutsu's Ultimate Skill</tripod> can be also be used if you want a much more frontloaded version.
        - name: Lightning Kick
          level: 14
          tripods:
            - Weakness Exposure
            - Thunder Kick
            - Flash Lightning
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Minor Damage Skill, Mobility Skill, Alternative Crit Synergy Skill**
            - <tripod>Quick Prep</tripod> can be used if you prefer the lower cooldown.
        - name: Sky Shattering Blow
          level: 7
          tripods:
            - Excellent Mobility
            - Ready Attack
          rune: Bleed
          rune_rarity: legendary
          notes: |-
            **Alternative Attack Power Buff, Counter, Pseudo-mobility Skill**
            - Both hits can counter.
            - <tripod>Excellent Mobility</tripod> paired with Spacebar can cover a lot of distance, making it a pseudo-movement skill if you do not need it for counter.
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: Deadly Dive
          level_label: Hyper Awakening Technique
          notes: |-
            **Main Damage Skill**
            - This is the only Normal Skill that First Intention can use for Hyper Awakening Technique.
            - This is the highest priority skill to consume Esoteric Origin.
            - You can redirect yourself midair with this skill.
        - name: "Ultimate Skill: Fist of Dominance / Ultimate Skill: Eight Trigrams Chaotic Strike"
          icon: "Ultimate Skill: Fist of Dominance"
          level_label: Awakening / Hyper Awakening
          notes: |-
            - You can also choose Flash Rage Blow if you prefer that.
            - This skill gives you 80% Damage Reduction while casting.
        rotation_sections:
        - title: Out-of-rotation Esoteric Origin pre-stacking
          steps:
          - Sky Shattering Blow
          - Lightning Kick
          - Energy Combustion
          - Repeat until you get 4/5 orb or 1 full orb
        - title: Standard Rotation
          steps: 
          - Out-of-rotation Esoteric Origin pre-stacking
          - Roar of Courage
          - Wind's Whisper
          - Esoteric Origin
          - Deadly Dive
          - Sweeping Kick
          - Leaping Dragon
          - Flash Heat Fang
          - Energy Combustion (recast)
          - Lightning Kick
        - title: Double Z rotation
          steps: 
          - Esoteric Origin
          - Sky Shattering Blow
          - Lightning Kick
          - Energy Combustion
          - Roar of Courage
          - Wind's Whisper
          - Sweeping Kick
          - Leaping Dragon
          - Esoteric Origin
          - Deadly Dive
          - Flash Heat Fang
          - Energy Combustion (recast)
          - Lightning Kick
        gems:
          - skill: Sweeping Kick
            type: damage
            priority: 1
          - skill: Leaping Dragon
            type: damage
            priority: 2
          - skill: Energy Combustion
            type: damage
            priority: 3
          - skill: Flash Heat Fang
            type: damage
            priority: 4
          - skill: Lightning Kick
            type: damage
            priority: 5
          - skill: Sweeping Kick
            type: cooldown
            priority: 1
          - skill: Leaping Dragon
            type: cooldown
            priority: 2
          - skill: Energy Combustion
            type: cooldown
            priority: 3
          - skill: Wind's Whisper
            type: cooldown
            priority: 4      
          - skill: Flash Heat Fang
            type: cooldown
            priority: 5
          - skill: Lightning Kick
            type: cooldown
            priority: 6
      - name: Opening Three Gates (333)
        difficulty: 2
        description: A fairly different First Intention playstyle that relies on continuous Esoteric Origin usage, where you always do Double Z cycles every 3rd rotation.
        arkgrid_cores: Opening Three Gates + Hypercirculation + Dragon Style Enhancement
        arkgrid_prose: |-
          Prioritize Hypercirculation > Opening Three Gates > Dragon Style Enhancement for Relic Core choices.
          Highest priority will be getting Hypercirculation on 17p ALWAYS. Do not spread them!
        priorities:
          - Prioritize reaching 90% Crit fully buffed before Back Attacks. Adjust stats if needed.
          - Strike 2 can also be run as an alternative, and you drop Adrenaline for another raw damage engraving.
        arkPassives:
        - name: Crit
          points: 15
          category: evolution
          tier: 1
        - name: Swiftness
          points: 25
          category: evolution
          tier: 1
        - name: Illicit Spell
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
        - name: Strike
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
        - name: Supersonic Breakthrough
          points: 2
          category: evolution
          tier: 5
        - name: Powerful Taijutsu
          points: 3
          category: enlightenment
          tier: 1
        - name: Energy Recovery
          points: 3
          category: enlightenment
          tier: 2
        - name: First Intention
          points: 3
          category: enlightenment
          tier: 3
        - name: Lethal Taijutsu
          points: 2
          category: enlightenment
          tier: 3
        - name: Esoteric Origin
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
        - name: Thrust Kick
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
          - name: Mass Increase
            priority: required
          - name: Adrenaline
            priority: recommended
          - name: MP Efficiency Increase
            priority: optional
          - name: Cursed Doll
            priority: optional
          - name: Ambush Master
            priority: optional
        engravings:
          - name: Grudge
            priority: required
          - name: Raid Captain
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Mass Increase
            priority: required
          - name: Adrenaline
            priority: recommended
          - name: MP Efficiency Increase
            priority: optional
          - name: Cursed Doll
            priority: optional
          - name: Ambush Master
            priority: optional
        skills:
        - name: Sweeping Kick
          level: 14
          tripods:
            - Weak Point Detection
            - Light of Justice
            - Pure Excellence
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Highest Damage Skill**
            - Highest priority to consume Esoteric Origin buff outside of Deadly Dive.
            - Legendary Galewind is acceptable if you do not have any Vision runes.
        - name: Leaping Dragon
          level: 14
          tripods:
            - Wide Hit
            - Dragon Style
            - Red Dragon
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Second/Third Highest Damage Skill**
            - The first row is a flexible choice, pick ,<tripod>Concussion</tripod> if you need Stagger, or <tripod>Weak Point Enhancement</tripod> if you need Weak Point.
            - This skill can also consume Esoteric Origin buff, however this should be prioritized last.
        - name: Energy Combustion
          level: 14
          tripods:
            - Combustible Armor
            - Intense Battle
            - Last Whisper
          rune: Poison
          rune_rarity: legendary
          notes: |-
            **Second/Third Highest Damage Skill, Passive Damage Reduction**
            - You can recast the skill early on, instantly proccing <tripod>Last Whisper</tripod>.
            - Each tick has an interval of 0.5 second, and gives you a stack of <tripod>Intense Battle</tripod> every time. You need 10 ticks (5 seconds) in order to fully stack <tripod>Intense Battle</tripod>.
            - <tripod>Intense Battle</tripod> lasts for 2 seconds, and all accumulated stacks will expire at the same time.
            - There is no visual indicator for <tripod>Intense Battle</tripod> stacks, so you need to mentally note this if you want to optimize it properly.
            - Recasting Energy Combustion will give you a stack of Adrenaline and Master, but it will not give you Esoteric Meter for Esoteric Origin.
        - name: Wind's Whisper
          level: 10
          tripods:
            - Blessing of the Wind
            - Quick Prep
            - Ready Attack
          rune: Focus
          rune_rarity: epic
          notes: |-
            **Primary Attack Power Buff**
            - If you can cap Supersonic Breakthrough without <tripod>Blessing of the Wind</tripod>, you can opt into using <tripod>Oath of the Wind</tripod> to alleviate some mana issues.
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: Roar of Courage
          level: 10
          tripods:
            - Weakness Exposure
            - Quick Prep
            - Supreme Ruler Afterimage
          rune: Focus
          rune_rarity: legendary
          notes: |-
            **Main Crit Rate Self Buff, Primary Crit Synergy Skill**
            - Using this skill will give you 20% Crit Rate Self buff regardless if you hit an enemy or not.
            - You need to hit the boss with this skill to apply the <tripod>Weakness Exposure</tripod>.
            - With <tripod>Supreme Ruler Afterimage</tripod>, the total duration of the Crit Rate Self Buff will be 12 seconds.
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: Flash Heat Fang
          level: 14
          tripods:
            - Magick Control
            - Master Hit
            - Final Strike
          rune: Vision
          rune_rarity: epic
          notes: |-
            **Fourth Highest Damage Skill**
            - <tripod>Taijutsu's Ultimate Skill</tripod> can be also be used if you want a much more frontloaded version.
        - name: Lightning Kick
          level: 14
          tripods:
            - Weakness Exposure
            - Thunder Kick
            - Flash Lightning
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Minor Damage Skill, Mobility Skill, Alternative Crit Synergy Skill**
            - <tripod>Quick Prep</tripod> can be used if you prefer the lower cooldown.
        - name: Sky Shattering Blow
          level: 7
          tripods:
            - Excellent Mobility
            - Ready Attack
          rune: Bleed
          rune_rarity: legendary
          notes: |-
            **Alternative Attack Power Buff, Counter, Pseudo-mobility Skill**
            - Both hits can counter.
            - <tripod>Excellent Mobility</tripod> paired with Spacebar can cover a lot of distance, making it a pseudo-movement skill if you do not need it for counter.
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: Deadly Dive
          level_label: Hyper Awakening Technique
          notes: |-
            **Main Damage Skill**
            - This is the only Normal Skill that First Intention can use for Hyper Awakening Technique.
            - This is the highest priority skill to consume Esoteric Origin.
            - You can redirect yourself midair with this skill.
        - name: "Ultimate Skill: Fist of Dominance / Ultimate Skill: Eight Trigrams Chaotic Strike"
          icon: "Ultimate Skill: Fist of Dominance"
          level_label: Awakening / Hyper Awakening
          notes: |-
            - You can also choose Flash Rage Blow if you prefer that.
            - This skill gives you 80% Damage Reduction while casting.
        rotation_sections:
        - title: Out-of-rotation Esoteric Origin pre-stacking
          steps:
          - Sky Shattering Blow
          - Lightning Kick
          - Energy Combustion
          - Repeat until you get 4/5 orb or 1 full orb
        - title: Standard Rotation
          steps: 
          - Out-of-rotation Esoteric Origin pre-stacking
          - Roar of Courage
          - Wind's Whisper
          - Esoteric Origin
          - Deadly Dive
          - Sweeping Kick
          - Leaping Dragon
          - Flash Heat Fang
          - Energy Combustion (recast)
          - Lightning Kick
        - title: Double Z rotation
          steps: 
          - Esoteric Origin
          - Sky Shattering Blow
          - Lightning Kick
          - Energy Combustion
          - Roar of Courage
          - Wind's Whisper
          - Sweeping Kick
          - Leaping Dragon
          - Esoteric Origin
          - Deadly Dive
          - Flash Heat Fang
          - Energy Combustion (recast)
          - Lightning Kick
        gems:
          - skill: Sweeping Kick
            type: damage
            priority: 1
          - skill: Leaping Dragon
            type: damage
            priority: 2
          - skill: Energy Combustion
            type: damage
            priority: 3
          - skill: Flash Heat Fang
            type: damage
            priority: 4
          - skill: Lightning Kick
            type: damage
            priority: 5
          - skill: Sweeping Kick
            type: cooldown
            priority: 1
          - skill: Leaping Dragon
            type: cooldown
            priority: 2
          - skill: Energy Combustion
            type: cooldown
            priority: 3
          - skill: Wind's Whisper
            type: cooldown
            priority: 4      
          - skill: Flash Heat Fang
            type: cooldown
            priority: 5
          - skill: Lightning Kick
            type: cooldown
            priority: 6
        rotation_sections:        
        - title: Out-of-rotation Esoteric Origin pre-stacking
          steps: 
          - Sky Shattering Blow
          - Lightning Kick
          - Energy Combustion
          - Repeat until you get 4/5 orb or 1 full orb
        - title: Standard Rotation
          steps: 
          - Energy Combustion
          - Roar of Courage
          - Wind's Whisper
          - Esoteric Origin
          - Deadly Dive
          - Sweeping Kick
          - Leaping Dragon
          - Flash Heat Fang
          - Energy Combustion (recast)
          - Lightning Kick
          - Out-of-rotation Esoteric Origin pre-stacking
        - title: Standard Double Z rotation (2 stacks of Opening Three Gates)
          steps:
          - Energy Combustion
          - Roar of Courage
          - Wind's Whisper
          - Esoteric Origin
          - Sweeping Kick
          - Esoteric Origin
          - Leaping Dragon
          - Flash Heat Fang
          - Energy Combustion (recast)
          - Lightning Kick
          - Out-of-rotation Esoteric Origin pre-stacking
        - title: Standard Double Z rotation with Deadly Dive (2 stacks of Opening Three Gates)
          steps:
          - Energy Combustion
          - Roar of Courage
          - Wind's Whisper
          - Esoteric Origin
          - Deadly Dive
          - Esoteric Origin
          - Sweeping Kick
          - Leaping Dragon
          - Flash Heat Fang
          - Energy Combustion (recast)
          - Lightning Kick
          - Out-of-rotation Esoteric Origin pre-stacking     
        - title: Triple Z rotation        
          steps: 
          - Get 2 stacks of Opening Three Gates
          - Sky Shattering Blow
          - Lightning Kick
          - Energy Combustion
          - Roar of Courage
          - Wind's Whisper
          - Sweeping Kick
          - Esoteric Origin
          - Leaping Dragon
          - Esoteric Origin
          - Deadly Dive
          - Flash Heat Fang
          - Energy Combustion (recast)
          - Lightning Kick
        gems:
          - skill: Sweeping Kick
            type: damage
            priority: 1
          - skill: Leaping Dragon
            type: damage
            priority: 2
          - skill: Energy Combustion
            type: damage
            priority: 3
          - skill: Flash Heat Fang
            type: damage
            priority: 4
          - skill: Lightning Kick
            type: damage
            priority: 5
          - skill: Sweeping Kick
            type: cooldown
            priority: 1
          - skill: Leaping Dragon
            type: cooldown
            priority: 2
          - skill: Energy Combustion
            type: cooldown
            priority: 3
          - skill: Wind's Whisper
            type: cooldown
            priority: 4      
          - skill: Flash Heat Fang
            type: cooldown
            priority: 5
          - skill: Lightning Kick
            type: cooldown
            priority: 6
      - name: Blunt Thorn (233)
        difficulty: 1
        description: Standard First Intention playstyle that heavily focuses on buffing your Sweeping Kick, which becomes your overall highest damage skill. This variant has a much more cooldown reduction compared to Supersonic Breakthrough version, in exchange of consistency due to Blunt Thorn's 80% Crit hardcap.
        arkgrid_cores: Enlightened Origin + Hypercirculation + Dragon Style Enhancement
        arkgrid_prose: |-
          Prioritize Hypercirculation > Enlightened Origin > Dragon Style Enhancement for Relic Core choices.
          Highest priority will be getting Hypercirculation on 17p ALWAYS. Do not spread them!
        priorities:
          - Prioritize reaching 110% Crit fully buffed before Back Attack.
        arkPassives:
        - name: Crit
          points: 15
          category: evolution
          tier: 1
        - name: Swiftness
          points: 25
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
        - name: Blunt Thorn
          points: 2
          category: evolution
          tier: 5
        - name: Powerful Taijutsu
          points: 3
          category: enlightenment
          tier: 1
        - name: Energy Recovery
          points: 3
          category: enlightenment
          tier: 2
        - name: First Intention
          points: 3
          category: enlightenment
          tier: 3
        - name: Lethal Taijutsu
          points: 2
          category: enlightenment
          tier: 3
        - name: Esoteric Origin
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
        - name: Thrust Kick
          points: 3
          category: leap
          tier: 2
        engravings:
          - name: Grudge
            priority: required
          - name: Raid Captain
            priority: required
          - name: Mass Increase
            priority: required
          - name: Adrenaline
            priority: required
          - name: Ambush Master
            priority: recommended
          - name: Cursed Doll
            priority: optional
          - name: MP Efficiency Increase
            priority: optional
        skills:
        - name: Sweeping Kick
          level: 14
          tripods:
            - Weak Point Detection
            - Light of Justice
            - Pure Excellence
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Highest Damage Skill**
            - Highest priority to consume Esoteric Origin buff outside of Deadly Dive.
            - Legendary Galewind is acceptable if you do not have any Vision runes.
        - name: Leaping Dragon
          level: 14
          tripods:
            - Wide Hit
            - Dragon Style
            - Red Dragon
          rune: Galewind
          rune_rarity: legendary
          notes: |-
            **Second/Third Highest Damage Skill**
            - The first row is a flexible choice, pick ,<tripod>Concussion</tripod> if you need Stagger, or <tripod>Weak Point Enhancement</tripod> if you need Weak Point.
            - This skill can also consume Esoteric Origin buff, however this should be prioritized last.
        - name: Energy Combustion
          level: 14
          tripods:
            - Combustible Armor
            - Intense Battle
            - Last Whisper
          rune: Poison
          rune_rarity: legendary
          notes: |-
            **Second/Third Highest Damage Skill, Passive Damage Reduction**
            - You can recast the skill early on, instantly proccing <tripod>Last Whisper</tripod>.
            - Each tick has an interval of 0.5 second, and gives you a stack of <tripod>Intense Battle</tripod> every time. You need 10 ticks (5 seconds) in order to fully stack <tripod>Intense Battle</tripod>.
            - <tripod>Intense Battle</tripod> lasts for 2 seconds, and all accumulated stacks will expire at the same time.
            - There is no visual indicator for <tripod>Intense Battle</tripod> stacks, so you need to mentally note this if you want to optimize it properly.
            - Recasting Energy Combustion will give you a stack of Adrenaline and Master, but it will not give you Esoteric Meter for Esoteric Origin.
        - name: Wind's Whisper
          level: 10
          tripods:
            - Oath of the Wind
            - Quick Prep
            - Ready Attack
          rune: Focus
          rune_rarity: epic
          notes: |-
            **Primary Attack Power Buff**
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: Roar of Courage
          level: 10
          tripods:
            - Weakness Exposure
            - Quick Prep
            - Supreme Ruler Afterimage
          rune: Focus
          rune_rarity: legendary
          notes: |-
            **Main Crit Rate Self Buff, Primary Crit Synergy Skill**
            - Using this skill will give you 20% Crit Rate Self buff regardless if you hit an enemy or not.
            - You need to hit the boss with this skill to apply the <tripod>Weakness Exposure</tripod>.
            - With <tripod>Supreme Ruler Afterimage</tripod>, the total duration of the Crit Rate Self Buff will be 12 seconds.
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: Flash Heat Fang
          level: 14
          tripods:
            - Magick Control
            - Master Hit
            - Final Strike
          rune: Vision
          rune_rarity: epic
          notes: |-
            **Fourth Highest Damage Skill**
            - <tripod>Taijutsu's Ultimate Skill</tripod> can be also be used if you want a much more frontloaded version.
        - name: Lightning Kick
          level: 14
          tripods:
            - Weakness Exposure
            - Thunder Kick
            - Flash Lightning
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Minor Damage Skill, Mobility Skill, Alternative Crit Synergy Skill**
            - <tripod>Quick Prep</tripod> can be used if you prefer the lower cooldown.
        - name: Sky Shattering Blow
          level: 7
          tripods:
            - Excellent Mobility
            - Ready Attack
          rune: Bleed
          rune_rarity: legendary
          notes: |-
            **Alternative Attack Power Buff, Counter, Pseudo-mobility Skill**
            - Both hits can counter.
            - <tripod>Excellent Mobility</tripod> paired with Spacebar can cover a lot of distance, making it a pseudo-movement skill if you do not need it for counter.
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: Deadly Dive
          level_label: Hyper Awakening Technique
          notes: |-
            **Main Damage Skill**
            - This is the only Normal Skill that First Intention can use for Hyper Awakening Technique.
            - This is the highest priority skill to consume Esoteric Origin.
            - You can redirect yourself midair with this skill.
        - name: "Ultimate Skill: Fist of Dominance / Ultimate Skill: Eight Trigrams Chaotic Strike"
          icon: "Ultimate Skill: Fist of Dominance"
          level_label: Awakening / Hyper Awakening
          notes: |-
            - You can also choose Flash Rage Blow if you prefer that.
            - This skill gives you 80% Damage Reduction while casting.
        rotation_sections:
        - title: Out-of-rotation Esoteric Origin pre-stacking
          steps:
          - Sky Shattering Blow
          - Lightning Kick
          - Energy Combustion
          - Repeat until you get 4/5 orb or 1 full orb
        - title: Standard Rotation
          steps: 
          - Out-of-rotation Esoteric Origin pre-stacking
          - Roar of Courage
          - Wind's Whisper
          - Esoteric Origin
          - Deadly Dive
          - Sweeping Kick
          - Leaping Dragon
          - Flash Heat Fang
          - Energy Combustion (recast)
          - Lightning Kick
        - title: Double Z rotation
          steps: 
          - Esoteric Origin
          - Sky Shattering Blow
          - Lightning Kick
          - Energy Combustion
          - Roar of Courage
          - Wind's Whisper
          - Sweeping Kick
          - Leaping Dragon
          - Esoteric Origin
          - Deadly Dive
          - Flash Heat Fang
          - Energy Combustion (recast)
          - Lightning Kick
        gems:
          - skill: Sweeping Kick
            type: damage
            priority: 1
          - skill: Leaping Dragon
            type: damage
            priority: 2
          - skill: Energy Combustion
            type: damage
            priority: 3
          - skill: Flash Heat Fang
            type: damage
            priority: 4
          - skill: Lightning Kick
            type: damage
            priority: 5
          - skill: Sweeping Kick
            type: cooldown
            priority: 1
          - skill: Leaping Dragon
            type: cooldown
            priority: 2
          - skill: Energy Combustion
            type: cooldown
            priority: 3
          - skill: Wind's Whisper
            type: cooldown
            priority: 4      
          - skill: Flash Heat Fang
            type: cooldown
            priority: 5
          - skill: Lightning Kick
            type: cooldown
            priority: 6
  - name: Esoteric Skill Enhancement
    identity:
      name: Esoteric Bubbles
      description: Her identity consists of 3 Esoteric Bubbles (up to 4). Hitting enemies with certain skills (normal skills) fill a portion of these orbs, allowing her to use another set of skills called Esoteric Skills, which consume a number of orbs on cast instead of mana. For that reason, Esoteric Skills are commonly known as Spenders.
    synergy:
      name: Weakness Exposure
      description: Applies a debuff on the enemy, decreasing their crit hit resistance by 10%.
      skills:
        - Roar of Courage
        - Sky Shattering Blow
    preArkGrid:
      description: Pre and Post Ark Grid setup play nearly identically, the only major difference is that Pre-Ark Grid build do not need to cast Spiral Impact after Azure Dragon Supreme Fist, and just less damage overall.
      priorities:
        - Prioritize reaching 1736 Specialization.
        - Reach 90% Crit before Back Attacks. Adjust stats if needed.
        - Once you reach the above breakpoints, you can invest into Swift if you want.
      arkPassives:
        - name: Specialization
          points: 29
          category: evolution
          tier: 1
        - name: Crit
          points: 11
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
        - name: Powerful Esoteric Skill
          points: 3
          category: enlightenment
          tier: 1
        - name: Orb Bonus
          points: 1
          category: enlightenment
          tier: 2
        - name: Esoteric Skill Enhancement
          points: 3
          category: enlightenment
          tier: 3
        - name: Esoteric Combustion
          points: 2
          category: enlightenment
          tier: 3
        - name: Circulate
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
        - name: Simplify
          points: 3
          category: leap
          tier: 2
      engravings:
        - name: Grudge
          priority: required
        - name: Keen Blunt Weapon
          priority: required
        - name: Adrenaline
          priority: required
        - name: Cursed Doll
          priority: optional
        - name: Mass Increase
          priority: optional
        - name: Raid Captain
          priority: optional 
      skills:
        - name: "Esoteric Skill: Azure Dragon Supreme Fist"
          level: 14
          tripods:
            - Posture of Gumga
            - Fire Dragon Fist
            - Dragon's Fury
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Highest Damage Skill, Push Immune**
            - <tripod>Dragon Flight</tripod> can be used if you are suffering on high ping.
            - Legendary Galewind can be used if you do not have any Vision runes.
        - name: "Esoteric Skill: Call of the Wind God"
          level: 14
          tripods:
            - Lightning Storm
            - Over Revolution
            - Summon Storm
          rune: Poison
          rune_rarity: legendary
          notes: |-
            **Second/Third Highest Damage Skill, Instacast**
            - Damage can be RNG due to <tripod>Lightning Storm</tripod>.
            - You can use <tripod>Weak Point Detection</tripod> if you want guaranteed damage.
        - name: "Esoteric Skill: Rising Fire Dragon"
          level: 14
          tripods:
            - Tenacity
            - Focus Hit
            - Final Blow
          rune: Vision
          rune_rarity: legendary
          notes: |-
            **Second/Third Highest Damage Skill, Push Immune**
            - The overall range is quite small, better be melee range to secure all hits connect.
            - Be mindful when doing Just Guards, as you cannot do it once you are in the middle of animation.
        - name: Wind's Whisper
          level: 10
          tripods:
            - Blessing of the Wind
            - Quick Prep
            - Ready Attack
          rune: Focus
          rune_rarity: epic
          notes: |-
            **Primary Attack Power Buff**
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: Roar of Courage
          level: 10
          tripods:
            - Weakness Exposure
            - Quick Prep
            - Abundant Resources
          rune: Wealth
          rune_rarity: epic
          notes: |-
            **Main Crit Rate Self Buff, Primary Crit Synergy Skill, Major Esoteric Meter Generator**
            - Using this skill will give you 20% Crit Rate Self buff regardless if you hit an enemy or not.
            - You need to hit the boss with this skill to apply the <tripod>Weakness Exposure</tripod> and get Esoteric Meter.
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: "Esoteric Skill: Spiral Impact"
          level: 14
          tripods:
            - Absorption Hit
            - Swift Fingers
            - Weak Point Detection
          rune: Quick Recharge
          rune_rarity: legendary
          notes: |-
            **Fourth Highest Damage Skill, Paralysis Immunity, Counter**
            - Rune choice for this skill is flexible.
        - name: Lightning Kick
          level: 10
          tripods:
            - Esoteric Extortion
            - Quick Prep
            - Flash Lightning
          rune: Wealth
          rune_rarity: epic
          notes: |-
            **Major Esoteric Meter Generator, Niche Mobility Skill**
            - Treat this as an actual meter generator skill and not just for mobility.
        - name: Sky Shattering Blow
          level: 10
          tripods:
            - Weakness Exposure
            - Ready Attack
            - Abundant Resources
          rune: Wealth
          rune_rarity: legendary
          notes: |-
            **Alternative Attack Power Buff, Counter, Major Esoteric Meter Generator**
            - Both hits can counter.
            - This does not have any super armor, so be aware when you need to cast the skill.
        - name: "Esoteric Skill: Thunderclap Kick"
          level_label: Hyper Awakening Technique
          notes: |-
            **Main Damage Skill**
            - This has a base cost of 2 Esoteric Bubbles.
            - You need to hold this skill since this is a Combo skill, until you unlock the Simplify Leap node.
        - name: "Ultimate Skill: Fist of Dominance / Ultimate Skill: Eight Trigrams Chaotic Strike"
          icon: "Ultimate Skill: Fist of Dominance"
          level_label: Awakening / Hyper Awakening
          notes: |-
            - You can also choose Flash Rage Blow if you prefer that.
            - This skill gives you 80% Damage Reduction while casting.
      gems:
        - skill: "Esoteric Skill: Azure Dragon Supreme Fist"
          type: damage
          priority: 1
        - skill: "Esoteric Skill: Call of the Wind God"
          type: damage
          priority: 2
        - skill: "Esoteric Skill: Rising Fire Dragon"
          type: damage
          priority: 3
        - skill: "Esoteric Skill: Spiral Impact"
          type: damage
          priority: 4
        - skill: "Esoteric Skill: Azure Dragon Supreme Fist"
          type: cooldown
          priority: 1
        - skill: Wind's Whisper
          type: cooldown
          priority: 2
        - skill: "Esoteric Skill: Call of the Wind God"
          type: cooldown
          priority: 3
        - skill: "Esoteric Skill: Rising Fire Dragon"
          type: cooldown
          priority: 4
        - skill: "Esoteric Skill: Spiral Impact"
          type: cooldown
          priority: 5
        - skill: Sky Shattering Blow
          type: cooldown
          priority: 6
        - skill: Lightning Kick
          type: cooldown
          priority: 7
      rotation:
        - Roar of Courage
        - Wind's Whisper
        - "Esoteric Skill: Azure Dragon Supreme Fist"
        - "Esoteric Skill: Spiral Impact"
        - Lightning Kick
        - "Esoteric Skill: Thunderclap Kick"
        - "Esoteric Skill: Call of the Wind God"
        - Sky Shattering Blow
        - "Esoteric Skill: Rising Fire Dragon"
        - Lightning Kick
        - Sky Shattering Blow
        - "Esoteric Skill: Spiral Impact"  
      # rotation_sections:
      #   title: Simplify Rotation
      #   steps:
      #   - Roar of Courage
      #   - Wind's Whisper
      #   - "Esoteric Skill: Azure Dragon Supreme Fist
      #   - Lightning Kick
      #   - "Esoteric Skill: Thunderclap Kick"
      #   - "Esoteric Skill: Call of the Wind God"
      #   - Sky Shattering Blow
      #   - "Esoteric Skill: Rising Fire Dragon"
      #   - "Esoteric Skill: Spiral Impact"
      #   - Lightning Kick
      #   - Sky Shattering Blow
      #   - "Esoteric Skill: Spiral Impact"
      #   title: Focus Kick Rotation
      #   steps:
      #   - Roar of Courage
      #   - Wind's Whisper
      #   - "Esoteric Skill: Azure Dragon Supreme Fist"
      #   - Lightning Kick
      #   - "Esoteric Skill: Thunderclap Kick"
      #   - Sky Shattering Blow
      #   - "Esoteric Skill: Call of the Wind God"
      #   - Lightning Kick
      #   - "Esoteric Skill: Rising Fire Dragon"
      #   - "Esoteric Skill: Spiral Impact"
      #   - Sky Shattering Blow
      #   - "Esoteric Skill: Spiral Impact"
    variants:
      - name: Quintuple Resilience (33X)
        recommended: true
        difficulty: 1
        description: Standard Esoteric playstyle that is pretty much improved Pre-Ark Grid. 
        arkgrid_cores: Quintuple Resilience + Third Eye + Supreme Fist
        arkgrid_prose: |-
          Prioritize Third Eye > Quintuple Resilience > Supreme Fist for Relic Core choices.
          Ultimate Azure Gale can be used as an alternative if you want to play the Holdnado variant.
        priorities:
          - Prioritize reaching 1736 Specialization.
          - Reach 90% Crit before Back Attacks. Adjust stats if needed.
          - Once you reach the above breakpoints, you can invest into Swift if you want.
          - Focus Kick can be used on this setup for higher burst damage, in exchange of the QoL that Simplify provides.
        arkPassives:
          - name: Specialization
            points: 29
            category: evolution
            tier: 1
          - name: Crit
            points: 11
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
          - name: Powerful Esoteric Skill
            points: 3
            category: enlightenment
            tier: 1
          - name: Orb Bonus
            points: 1
            category: enlightenment
            tier: 2
          - name: Esoteric Skill Enhancement
            points: 3
            category: enlightenment
            tier: 3
          - name: Esoteric Combustion
            points: 2
            category: enlightenment
            tier: 3
          - name: Circulate
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
          - name: Simplify
            points: 3
            category: leap
            tier: 2
        engravings:
          - name: Grudge
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Adrenaline
            priority: required
          - name: Cursed Doll
            priority: optional
          - name: Mass Increase
            priority: optional
          - name: Raid Captain
            priority: optional 
        skills:
          - name: "Esoteric Skill: Call of the Wind God"
            level: 14
            tripods:
              - Lightning Storm
              - Over Revolution
              - Summon Storm
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Second/Third Highest Damage Skill, Instacast**
              - It is recommended to use this variant if you are using Supreme Fist.              
              - Damage can be RNG due to <tripod>Lightning Storm</tripod>.
              - You can use <tripod>Weak Point Detection</tripod> if you want guaranteed damage.
          - name: "Esoteric Skill: Call of the Wind God"
            level: 14
            tripods:
              - Earth Storm
              - Weak Point Detection
              - Raging Storm
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Second Highest Damage Skill, Holding Skill**
              - It is recommended to use this variant if you are using Ultimate Azure Gale.
              - Majority of the damage will come from the explosion at the end of the skill.
              - Be mindful of getting interrupted before the explosion, as you will not get the explosion damage if you get knocked down while channeling.
              - You can partially hold and end the skill early to get the explosion damage immediately, but otherwise it is recommended to fully hold it.
          - name: "Esoteric Skill: Azure Dragon Supreme Fist"
            level: 14
            tripods:
              - Posture of Gumga
              - Fire Dragon Fist
              - Dragon's Fury
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Highest Damage Skill, Push Immune**
              - <tripod>Dragon Flight</tripod> can be used if you are suffering on high ping.
              - Legendary Galewind can be used if you do not have any Vision runes.
          - name: "Esoteric Skill: Rising Fire Dragon"
            level: 14
            tripods:
              - Tenacity
              - Focus Hit
              - Final Blow
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Second/Third Highest Damage Skill, Push Immune**
              - The overall range is quite small, better be melee range to secure all hits connect.
              - Be mindful when doing Just Guards, as you cannot do it once you are in the middle of animation.
          - name: Wind's Whisper
            level: 10
            tripods:
              - Blessing of the Wind
              - Quick Prep
              - Ready Attack
            rune: Focus
            rune_rarity: epic
            notes: |-
              **Primary Attack Power Buff**
              - This does not have any super armor, so be aware when you need to cast the skill.
          - name: Roar of Courage
            level: 10
            tripods:
              - Weakness Exposure
              - Quick Prep
              - Abundant Resources
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Main Crit Rate Self Buff, Primary Crit Synergy Skill, Major Esoteric Meter Generator**
              - Using this skill will give you 20% Crit Rate Self buff regardless if you hit an enemy or not.
              - You need to hit the boss with this skill to apply the <tripod>Weakness Exposure</tripod> and get Esoteric Meter.
              - This does not have any super armor, so be aware when you need to cast the skill.
          - name: "Esoteric Skill: Spiral Impact"
            level: 14
            tripods:
              - Absorption Hit
              - Swift Fingers
              - Weak Point Detection
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Fourth Highest Damage Skill, Paralysis Immunity, Counter**
              - Rune choice for this skill is flexible.
          - name: Lightning Kick
            level: 10
            tripods:
              - Esoteric Extortion
              - Quick Prep
              - Flash Lightning
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Major Esoteric Meter Generator, Niche Mobility Skill**
              - Treat this as an actual meter generator skill and not just for mobility.
          - name: Sky Shattering Blow
            level: 10
            tripods:
              - Weakness Exposure
              - Ready Attack
              - Abundant Resources
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Alternative Attack Power Buff, Counter, Major Esoteric Meter Generator**
              - Both hits can counter.
              - This does not have any super armor, so be aware when you need to cast the skill.
          - name: "Esoteric Skill: Thunderclap Kick"
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill**
              - This has a base cost of 2 Esoteric Bubbles.
              - You need to hold this skill since this is a Combo skill, until you unlock the Simplify Leap node.
          - name: "Ultimate Skill: Fist of Dominance / Ultimate Skill: Eight Trigrams Chaotic Strike"
            icon: "Ultimate Skill: Fist of Dominance"
            level_label: Awakening / Hyper Awakening
            notes: |-
              - You can also choose Flash Rage Blow if you prefer that.
              - This skill gives you 80% Damage Reduction while casting.
        gems:
          - skill: "Esoteric Skill: Azure Dragon Supreme Fist"
            type: damage
            priority: 1
          - skill: "Esoteric Skill: Call of the Wind God"
            type: damage
            priority: 2
          - skill: "Esoteric Skill: Rising Fire Dragon"
            type: damage
            priority: 3
          - skill: "Esoteric Skill: Spiral Impact"
            type: damage
            priority: 4
          - skill: "Esoteric Skill: Azure Dragon Supreme Fist"
            type: cooldown
            priority: 1
          - skill: Wind's Whisper
            type: cooldown
            priority: 2
          - skill: "Esoteric Skill: Call of the Wind God"
            type: cooldown
            priority: 3
          - skill: "Esoteric Skill: Rising Fire Dragon"
            type: cooldown
            priority: 4
          - skill: "Esoteric Skill: Spiral Impact"
            type: cooldown
            priority: 5
          - skill: Sky Shattering Blow
            type: cooldown
            priority: 6
          - skill: Lightning Kick
            type: cooldown
            priority: 7
        rotation:
          - Roar of Courage
          - Wind's Whisper
          - "Esoteric Skill: Azure Dragon Supreme Fist"
          - "Esoteric Skill: Spiral Impact"
          - Lightning Kick
          - "Esoteric Skill: Thunderclap Kick"
          - "Esoteric Skill: Call of the Wind God"
          - Sky Shattering Blow
          - "Esoteric Skill: Rising Fire Dragon"
          - Lightning Kick
          - Sky Shattering Blow
          - "Esoteric Skill: Spiral Impact"       
      - name: Undying Fire Dragon (222)
        difficulty: 2
        description: A fairly different Esoteric Wardancer playstyle that merges the Crit Rate Buff from Roar of Courage to Wind's Whisper. Due to this, we are swapping out Roar of Courage to Energy Combustion solely for utility.
        arkgrid_cores: Undying Fire Dragon + Fire Dragon Skyshaker + Rising Fire Dragon
        arkgrid_prose: |-
          Prioritize getting both Undying Fire Dragon and Fire Dragon Skyshaker to 17p at the same time, as you need both 17p effects to properly play the setup.
        priorities:
          - Prioritize reaching 1736 Specialization.
          - Reach 90% Crit before Back Attacks. Adjust stats if needed.
          - Once you reach the above breakpoints, you can invest into Swift if you want.
        arkPassives:
          - name: Specialization
            points: 29
            category: evolution
            tier: 1
          - name: Crit
            points: 11
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
          - name: Powerful Esoteric Skill
            points: 3
            category: enlightenment
            tier: 1
          - name: Orb Bonus
            points: 1
            category: enlightenment
            tier: 2
          - name: Esoteric Skill Enhancement
            points: 3
            category: enlightenment
            tier: 3
          - name: Esoteric Combustion
            points: 2
            category: enlightenment
            tier: 3
          - name: Circulate
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
          - name: Simplify
            points: 3
            category: leap
            tier: 2
        engravings:
          - name: Grudge
            priority: required
          - name: Keen Blunt Weapon
            priority: required
          - name: Adrenaline
            priority: required
          - name: Cursed Doll
            priority: optional
          - name: Mass Increase
            priority: optional
          - name: Raid Captain
            priority: optional 
        skills:
          - name: "Esoteric Skill: Call of the Wind God"
            level: 14
            tripods:
              - Lightning Storm
              - Over Revolution
              - Summon Storm
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Third Highest Damage Skill, Instacast**        
              - Damage can be RNG due to <tripod>Lightning Storm</tripod>.
              - You can use <tripod>Weak Point Detection</tripod> if you want guaranteed damage.
          - name: "Esoteric Skill: Rising Fire Dragon"
            level: 14
            tripods:
              - Tenacity
              - Focus Hit
              - Final Blow
            rune: Vision
            rune_rarity: epic
            notes: |-
              **Highest Damage Skill, Push Immune, Primary Crit Synergy Skill**
              - The 17p of Undying Fire Dragon makes this skill apply <tripod>Weakness Exposure</tripod> to enemies hit.
              - The overall range is quite small, better be melee range to secure all hits connect.
              - Be mindful when doing Just Guards, as you cannot do it once you are in the middle of animation.
              - This skill refunds 2 Esoteric Orbs per cast, so you should always cast another Esoteric Skill afterwards.
          - name: "Esoteric Skill: Azure Dragon Supreme Fist"
            level: 14
            tripods:
              - Posture of Gumga
              - Fire Dragon Fist
              - Dragon's Fury
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Second Highest Damage Skill, Push Immune**
              - <tripod>Dragon Flight</tripod> can be used if you are suffering on high ping.
              - Legendary Galewind can be used if you do not have any Vision runes.
          - name: Wind's Whisper
            level: 10
            tripods:
              - Blessing of the Wind
              - Quick Prep
              - Ready Attack
            rune: Focus
            rune_rarity: epic
            notes: |-
              **Primary Attack Power Buff**
              - This does not have any super armor, so be aware when you need to cast the skill.
          - name: Energy Combustion
            level: 10
            tripods:
              - Combustible Armor
              - Skill Reduction
              - Last Whisper
            rune: Bleed
            rune_rarity: epic
            notes: |-
              **Utility Skill, Passive Damage Reduction**
              - This skill will replace Roar of Courage due to 14p effect of Undying Fire Dragon.
              - If you are running Raid Captain, you can use <tripod>Quick Pace</tripod> to increase your efficiency.
          - name: "Esoteric Skill: Spiral Impact"
            level: 14
            tripods:
              - Absorption Hit
              - Swift Fingers
              - Weak Point Detection
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Fourth Highest Damage Skill, Paralysis Immunity, Counter**
              - Rune choice for this skill is flexible.
          - name: Lightning Kick
            level: 10
            tripods:
              - Esoteric Extortion
              - Quick Prep
              - Flash Lightning
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Major Esoteric Meter Generator, Niche Mobility Skill**
              - Treat this as an actual meter generator skill and not just for mobility.
          - name: Sky Shattering Blow
            level: 10
            tripods:
              - Weakness Exposure
              - Ready Attack
              - Abundant Resources
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Alternative Attack Power Buff, Counter, Major Esoteric Meter Generator**
              - Both hits can counter.
              - This does not have any super armor, so be aware when you need to cast the skill.
          - name: "Esoteric Skill: Thunderclap Kick"
            level_label: Hyper Awakening Technique
            notes: |-
              **Main Damage Skill**
              - This has a base cost of 2 Esoteric Bubbles.
              - You need to hold this skill since this is a Combo skill, until you unlock the Simplify Leap node.
          - name: "Ultimate Skill: Fist of Dominance / Ultimate Skill: Eight Trigrams Chaotic Strike"
            icon: "Ultimate Skill: Fist of Dominance"
            level_label: Awakening / Hyper Awakening
            notes: |-
              - You can also choose Flash Rage Blow if you prefer that.
              - This skill gives you 80% Damage Reduction while casting.
        gems:
          - skill: "Esoteric Skill: Rising Fire Dragon"
            type: damage
            priority: 1
          - skill: "Esoteric Skill: Azure Dragon Supreme Fist"
            type: damage
            priority: 2
          - skill: "Esoteric Skill: Call of the Wind God"
            type: damage
            priority: 3
          - skill: "Esoteric Skill: Spiral Impact"
            type: damage
            priority: 4
          - skill: "Esoteric Skill: Azure Dragon Supreme Fist"
            type: cooldown
            priority: 1
          - skill: Wind's Whisper
            type: cooldown
            priority: 2
          - skill: "Esoteric Skill: Rising Fire Dragon"
            type: cooldown
            priority: 3
          - skill: Sky Shattering Blow
            type: cooldown
            priority: 4
          - skill: "Esoteric Skill: Call of the Wind God"
            type: cooldown
            priority: 5
          - skill: "Esoteric Skill: Spiral Impact"
            type: cooldown
            priority: 6
          - skill: Lightning Kick
            type: cooldown
            priority: 7
        rotation:
          - Energy Combustion
          - Wind's Whisper
          - "Esoteric Skill: Rising Fire Dragon"          
          - "Esoteric Skill: Azure Dragon Supreme Fist"
          - Lightning Kick
          - "Esoteric Skill: Thunderclap Kick"
          - "Esoteric Skill: Call of the Wind God"
          - Sky Shattering Blow
          - "Esoteric Skill: Rising Fire Dragon"
          - "Esoteric Skill: Spiral Impact"
          - Lightning Kick
          - Sky Shattering Blow
          - "Esoteric Skill: Rising Fire Dragon"
          - "Esoteric Skill: Spiral Impact"
          - Lightning Kick
          - Energy Combustion
          - Wind's Whisper   
          - "Esoteric Skill: Azure Dragon Supreme Fist"
          - Sky Shattering Blow
          - "Esoteric Skill: Rising Fire Dragon"
          - "Esoteric Skill: Call of the Wind God"
          - Lightning Kick
          - "Esoteric Skill: Spiral Impact"
          - Sky Shattering Blow
          - "Esoteric Skill: Rising Fire Dragon"
          - "Esoteric Skill: Spiral Impact"
---