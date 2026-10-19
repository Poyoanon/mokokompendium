---
title: Paladin Guide
class: Warrior
subclass: Paladin
class_id: 105
description: Complete guide to Paladin including the Blessed Aura (support) build and the Judgment (DPS) build with 111, 222 and 333 Ark Grid variants.
author: PhaiLLuRRe (guide based on the Paladin guide on Lost Ark Nexus)
lastUpdated: '2026-10-18'
identity:
  name: Piety Meter
  description: Unlike other supports, Paladin has a single orb called the Piety Meter. Once full, you can activate one of the stances to enable its effects. Landing Holy skills generates the most Piety, and Punish skills (including auto attack) generate the least. Support Paladin uses the meter for Holy Aura (X) and Divine Wave (Z); DPS Paladin uses blue and yellow stacks and the Z and X identity skills instead.
synergy:
  name: Light's Vestige (Brand)
  description: Light's Vestige is Paladin's unique brand. It increases the damage the boss takes by a flat 10% and does not stack with other brands. With the Light's Vestige ark passive node it is applied automatically to nearby enemies when you activate Holy Aura.
  skills:
    - Holy Explosion
    - Sword of Justice
    - Light Shock
builds:
  - name: Blessed Aura
    engraving: Blessed Aura
    description: Guide put together by PhaiLLuRRe (Lost Ark Nexus Paladin guide, July 2026). Paladin is a Support with a more laid-back playstyle and requires less effort to achieve essentially the same results as other supports. A simple rotation, screen-wide range for most buffs and longer cooldowns make it a relaxed support, with almost permanent uptime on damage reduction and constant heals for the whole party.
    playstyle: Keep your attack buffs (Wrath of God and Heavenly Blessings) and brand up, cover raid mechanics with counters and defensive utility, and fill the Piety Meter to enter Holy Aura as often as possible.
    difficulty: easy
    identity:
      name: Piety Meter
      description: Holy Aura (X) is Paladin's most important identity skill. With the Blessed Aura class engraving it grants a damage buff, a heal over time (2% max HP every 1.5s) and 20% damage reduction to party members inside its 12 meter radius, with Push Immunity on activation. The damage buff scales with Specialization (45% skill efficiency per 500 Spec, 4.5% additional damage from the aura). Divine Wave (Z) was added with the support rework; it is an extra 20% HP party shield for 6s, restores 10% meter inside and outside of Holy Aura, and its cooldown is reduced by 0.25s per yellow skill used during Holy Aura.
    synergy:
      name: Attack Power Buff
      description: Wrath of God and Heavenly Blessings together work out to a 22% of base attack power damage buff on all three of your party members.
      skills:
        - Wrath of God
        - Heavenly Blessings
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
        priority: recommended
      - name: Max MP Increase
        priority: optional
      - name: Crisis Evasion
        priority: optional
      - name: Explosive Expert
        priority: optional
    preArkGrid:
      description: |-
        Best-in-slot stone is the Awakening / Drops of Ether combo. For really hard content that requires a balanced setup with additional survivability (TFM, potentially new hell mode, nightmare versions of new raids), consider fully dropping Drops of Ether to pick up both Vital Point Hit and Crisis Evasion.
    variants:
      - name: Sword's Prayer
        recommended: true
        difficulty: 1
        description: Standard Support Paladin setup with the Sword's Prayer star core (Holy Sword + Executioner's Sword). Good meter generation in and out of Holy Aura, an extra push immunity skill, and a free rune slot on Holy Sword.
        arkgrid_cores: True Justice + Heavenly Resolve + Sword's Prayer
        arkgrid_prose: |-
          Chaos cores: Faith + Echoing Brand + Weapon.
          If you have an Order Ancient core of any type of sun/moon, use it instead of what is being recommended. If you just want your 6 cores you are done; the notes below cover the nuances.

          Order Sun + Moon core: normally recommended to go with 1x T skill core (True Justice OR Divine Cause) and 1x Attack Buff core (Heavenly Resolve OR Heavenly Agent). For the Sun and Moon combo you are mostly picking based on what you already have, or on the 60s self buff: 7% healing and shielding (1st pair) vs 5% stagger (2nd pair). Bebok's calc can help you decide which combo best fits your uptime.

          Chaos Sun core: if you have bad gems consider Flowing to make it easier on your uptime, otherwise go with Faith.

          Star core: star cores are mostly all viable, but do not use Prayer of Light. Recommended order with current knowledge: Ancient Sword's Prayer >> Relic Sword's Prayer >= Prayer of Divine Surge >>> Prayer of Light.

          Prayer of Light (Light of Judgment core):
          - Pros: highest consistent meter option, fits any build. It does not get % meter, which means wealth scales its entire value.
          - Cons: does nothing inside Holy Aura and has little utility beyond some stagger.

          Sword's Prayer (Holy Sword + Executioner's Sword core):
          - Pros: solid all-rounder, good meter generation in and out of aura, frees up a rune on Holy Sword, extra push immunity skill you can hold for yourself. It affects both blue skills, but you do not have to feel forced to take Executioner's Sword. Relic core gives 6% and Ancient 9%, which heavily favors Ancient (meter gen per Holy Sword cast goes from 600 to 900). Extra brand and extra charge on Holy Sword solve all mana issues with the 10P line.
          - Cons: trades off either meter generation or Quick Recharge ability. Holy Sword brand uptime is too low to be a main brand, it is strictly a backup.

          Prayer of Divine Surge (Holy Explosion core):
          - Pros: versatile; the two stacks let the skill act as its own backup for meter generation and branding, and it can replace Holy Area, Light of Judgment, etc. Highest burst meter if you skip extending aura and keep 2 stacks for when aura ends.
          - Cons: needs 2 dedicated brand skills to feel fully flexible. The 10P bonus is lacking since the skill already got a base speed up. Needs max MP to not feel awful.
        tips:
          - |-
            Skill code (Sword's Prayer core, plus whatever mismatch of Sun/Moon order core): C950C2625D99244E85BB7B36626899F4980AD00237D5FE8F072284BB4662ADED279529200790B5BB27C27BCB17718915B218C744DDEC1CCB99AC3DF48A7F9EF4
          - |-
            Skill code (Sword's Prayer, the staggerer / shadow raid and prog build): 91924B5732BC1E93F7E10B5CB4D75C6A99FE3AE2276BE82AC4B165918C59D713B0B564F09FDE158D47347856A71CAB22EF5A38A6B84841FEAA09D4034368F890
          - |-
            Skill code (Holy Explosion core, plus whatever mismatch of Sun/Moon order core; no refunds): 66F58F939BEAEACC149921DD66B754B3C350DEA36698CE7A3C423C520BDC8D357AA642789012E83C267C85082B16EE4844109F2EF094F847206CB0F4D919D639
          - "Keep Wrath of God and Heavenly Blessings up and alternate them. Heavenly Blessings has the long cooldown and is the bottleneck for AP uptime; cast Wrath of God first when Magick Stream and Luminary are not stacked."
          - "Brand is your second priority after the buffs: Light's Vestige, from one brand skill plus a backup."
          - "Alternate Holy Protection and God's Decree to try and cover every attack coming your way."
          - "Bring both counters (Holy Sword and Executioner's Sword). Once you know a raid you can drop Executioner's Sword for Holy Area, but keep Holy Sword."
          - "Enter Holy Aura as soon as the meter is full, and use Light of Judgment off cooldown outside of aura."
          - "Divine Justice (T skill): use it off cooldown and sync it with your DPS; it also gives a lot of meter through Righteous Light."
          - "Wealth runes: Light of Judgment > Holy Explosion (Holy Explosion core) > Holy Area > Holy Sword > Wrath of God. Quick Recharge: Light Shock > Sword of Justice > Heavenly Blessings > Holy Area > Holy Protection."
          - "Gems: Heavenly Blessings wants your highest CD gem. The Holy Sword CD gem is mandatory on Sword's Prayer, optional on the other star cores."
          - "Chaos Dungeon: Charge, Flash Thrust, Executioner's Sword, Holy Sword and Execution of Justice with Galewind, plus Alithanes's Judgment."
        arkPassives:
          - name: Swiftness
            points: 30
            category: evolution
            tier: 1
          - name: Specialization
            points: 10
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
          - name: Holy Protection
            points: 1
            category: enlightenment
            tier: 1
          - name: Blessed Aura
            points: 3
            category: enlightenment
            tier: 2
          - name: Godly Grace
            points: 3
            category: enlightenment
            tier: 3
          - name: Bold Salvation
            points: 1
            category: enlightenment
            tier: 3
          - name: Divine Liberation
            points: 3
            category: enlightenment
            tier: 4
          - name: Light's Vestige
            points: 1
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
          - name: Righteous Light
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - "Depending on your setup, MP Furnace can be used if you never run out of mana, test it yourself. If you need to use focus runes it is not worth it, go Standing Striker."
          - "Charged Fury can be used as an alternate to Transcendent Power."
        skills:
          - name: Light of Judgment
            level: 10
            tripods:
              - Swift Fingers
              - Faith
              - Righteous Light
            rune: Wealth
            rune_rarity: legendary
            notes: |-
              **Meter Generation, Weak Point Lv.2, Stagger**
              - Biggest meter generator of your normal skills. Does not generate meter during Holy Aura.
          - name: God's Decree
            level: 10
            tripods:
              - Shield
              - Tenacity
              - Grace
            rune: Quick Recharge
            rune_rarity: rare
            notes: |-
              **Damage Reduction, Shielding**
              - Big DR skill, best tapped and cancelled into something else. Longest range and fastest cast of all supports. Stand inside the circle to get the DR yourself.
              - <tripod>Light Shield</tripod> (211) is an equal alternative: 2s shield refreshed every tick, 15% instead of 19%.
          - name: Holy Protection
            level: 14
            tripods:
              - Quick Pace
              - Lingering Power
              - Vow of Light
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Shielding, Healing, Movement Speed Buff**
              - <tripod>Lingering Power</tripod> extends the movement speed buff and <tripod>Vow of Light</tripod> heals when the shield expires. Cast off cooldown unless the raid needs you to hold the cleanse (<tripod>Purify</tripod>).
              - <tripod>Robust Protection</tripod> and <tripod>Thunderous Protection</tripod> are an option for harder fights (TFM, hell mode).
          - name: Wrath of God
            level: 14
            tripods:
              - Tenacity
              - Faith
              - Express Fury
            rune: Wealth
            rune_rarity: rare
            notes: |-
              **Attack Power Buff, Meter Generation**
              - Alternate with Heavenly Blessings. Cast it first when Magick Stream and Luminary are not stacked.
              - <tripod>Faith</tripod> meter gain (5%) also works during aura.
          - name: Heavenly Blessings
            level: 14
            tripods:
              - Faith
              - Valor
              - Absolute Blessing
            rune: Quick Recharge
            rune_rarity: rare
            notes: |-
              **Attack Power Buff, Attack Speed Buff, Party MP Regeneration, Damage Reduction**
              - Alternate with Wrath of God. Its long cooldown is the bottleneck for AP uptime, so it wants your highest CD gem.
              - <tripod>Faith</tripod> meter gain (5%) also works during aura.
          - name: Holy Explosion
            level: 10
            tripods:
              - Swift Fingers
              - Light's Vestige
              - Prepared Explosion
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Brand, Meter Generation, Stagger, Weak Point Lv.1**
              - Recommended brand: 15s duration, multi hit, para immunity, fast cast. Carry a backup brand (second Holy Explosion, Holy Sword, Sword of Justice or Light of Judgment).
          - name: Sword of Justice
            level: 10
            tripods:
              - Insight
              - Summon Holy Sword
              - Dazzling Light Sword
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Brand**
              - 10s duration (13s if the boss stays in the AoE), long range, lingering for 3s so it can be precast. No para armor and a slow cast.
          - name: Light Shock
            level: 7
            tripods:
              - Swift Fingers
              - Light's Vestige
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Brand, Paralysis Immunity**
              - Low duration and very low cooldown, fastest brand and best Quick Recharge farmer, but it cannot be precast. Run it at level 7 if you lack skill points.
          - name: Holy Sword
            level: 10
            tripods:
              - Swift Fingers
              - Outburst of Light
              - Release Light
            rune: Overwhelm
            rune_rarity: legendary
            notes: |-
              **Counter, Meter Generation, Stagger**
              - Recommended. Best counter for telegraphed attacks, huge range. Use Overwhelm for prog and Wealth afterwards to build aura faster.
              - The CD gem is mandatory on Sword's Prayer, optional on the Holy Explosion core.
          - name: Executioner's Sword
            level: 10
            tripods:
              - Excellent Mobility
              - Weak Point Enhancement
              - Triple Strike
            rune: Overwhelm
            rune_rarity: legendary
            notes: |-
              **Counter, Stagger, Weak Point Lv.2**
              - Recommended. Instant, reactive counter with decent range and top-3 stagger. <tripod>Excellent Mobility</tripod> extends its range.
              - <tripod>Broad Slash</tripod> is easier to aim but loses ~30% stagger and only the first hit counters.
          - name: Holy Explosion
            level: 10
            tripods:
              - Swift Fingers
              - Light's Vestige
              - Prepared Explosion
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Meter Generation, Stagger, Weak Point Lv.1**
              - Bring it as a meter skill if it is not your brand; very effective with the Holy Explosion star core.
          - name: Holy Area
            level: 10
            tripods:
              - Brutal Honesty
              - Grace
              - Endless Grace
            rune: Wealth
            rune_rarity: epic
            notes: |-
              **Meter Generation, Quick Recharge Farming, 30% Damage Reduction**
              - Close second to Light of Judgment for meter. <tripod>Divine Mark</tripod> gives +30% meter at the cost of the 30% DR.
          - name: Divine Justice
            level_label: Hyper Awakening Technique
            notes: |-
              **Damage Buff, Meter Generation**
              - Grants +10% damage for 10s and +20% Hyper Awakening damage for 20s. Use it off cooldown.
              - The Righteous Light node makes it a big meter source, also during aura.
          - name: Alithanes's Judgment / Devotion of Alithanes
            icon: Alithanes's Judgment
            level_label: Awakening / Hyper Awakening
            notes: |-
              **Party Shield, Meter Generation**
              - Alithanes's Judgment: shield equal to 100% max HP for 10s and +80% meter. Devotion of Alithanes adds a 30s death protection (3s invincibility).
              - Do not open the fight with it; buffs, brand and Yearning come first.
        gems:
          - skill: Heavenly Blessings
            type: damage
            priority: 1
          - skill: Wrath of God
            type: damage
            priority: 2
          - skill: Divine Wave
            type: damage
            priority: 3
          - skill: Holy Sword
            type: cooldown
            priority: 1
          - skill: Heavenly Blessings
            type: cooldown
            priority: 2
          - skill: Divine Wave
            type: cooldown
            priority: 3
          - skill: Holy Explosion
            type: cooldown
            priority: 4
          - skill: Holy Protection
            type: cooldown
            priority: 5
          - skill: God's Decree
            type: cooldown
            priority: 6
          - skill: Light of Judgment
            type: cooldown
            priority: 7
          - skill: Holy Area
            type: cooldown
            priority: 8
          - skill: Sword of Justice
            type: cooldown
            priority: 9
          - skill: Light Shock
            type: cooldown
            priority: 10
          - skill: Wrath of God
            type: cooldown
            priority: 11
        rotation_sections:
          - title: Attack Power buff priority
            steps:
              - Wrath of God
              - Heavenly Blessings
          - title: Brand (pick one)
            steps:
              - Holy Explosion
              - Sword of Justice
              - Light Shock
          - title: Meter generation priority (outside of aura)
            steps:
              - Light of Judgment
              - Holy Area
              - Holy Sword
              - Holy Explosion
          - title: Counters
            steps:
              - Holy Sword
              - Executioner's Sword
  - name: Judgment
    engraving: Judgment
    description: Guide put together by PhaiLLuRRe (Lost Ark Nexus Paladin guide, July 2026). Paladin is most known as a support class but, after many reworks, it is currently the best DPS support class, with numerous viable Ark Grid builds. 111 (Flash Slash), 222 (Holy Sword) and 333 (Judgment Blade) are all viable, so all three are listed.
    playstyle: DPS Paladin works around two sets of stacks. Blue stacks come from normal attack skills that hit (cap 30) and yellow stacks come from the X skill (cap 3). Being good means deciding when to press Z to maximize damage by consuming the accumulated stacks.
    difficulty: medium
    identity:
      name: Sacred Executioner / Judgment Blade
      description: Sacred Executioner (Z) turns "Lightsaber mode" on and off. While on it gives a 20% damage buff, and with the ark passive it grants a permanent 15% move speed buff while fighting. Turning it off removes all blue and yellow stacks to make swords fall from the sky with auto tracking at full screen range (24m), a very strong nuke with Push Immunity. Judgment Blade (X) is a quick, strong 180 degree sword slash that gives one yellow stack per use and has Push Immunity; the animation is faster if used right after a Punish skill. No matter the build, it is a good chunk of your damage. The damage gem scales both identity buttons at once.
    synergy:
      name: Crit Hit Damage Synergy
      description: DPS Paladin has no dedicated synergy skill. Whenever you use a Punish skill, the ark passive applies +8% Crit Hit Damage synergy (Glaivier / Valkyrie synergy) for 5 seconds, which should never fall off and is stronger than the average synergy.
      skills:
        - Punishment
    engravings:
      - name: Grudge
        priority: required
      - name: Raid Captain
        priority: required
      - name: Keen Blunt Weapon
        priority: required
      - name: Adrenaline
        priority: recommended
      - name: Cursed Doll
        priority: recommended
      - name: Hit Master
        priority: optional
      - name: Stabilized Status
        priority: optional
      - name: Ambush Master
        priority: optional
    preArkGrid:
      description: |-
        Base build without Ark Grid uses the same skill code as 333 (recommended). Entry level DPS builds until a dedicated guide is ready.
    variants:
      - name: 333-Judgment Blade
        recommended: true
        difficulty: 3
        description: Highest gem efficiency, one of the fastest "burst rotations" in the game, and the most value from long breaks in fights (mechanics, etc). The rotation can shift around, so it feels more "brainy" to keep track of your stacks.
        arkgrid_cores: Forewarned Judgment + Hour of Judgment + Piercer
        arkgrid_prose: |-
          Chaos cores: Flashy Attack + Smoldering Strike + Attack.
          Since Paladin is often played as a support and people trying DPS Paladin may just be dipping their toes in, without the core combo they would like to play, all 3 builds are listed (all viable).
        tips:
          - "Skill code (base no Ark Grid build AND 333 Ark Grid, recommended): 300555263E516B42784A4D14C51F6A68EE28D7201045AEFCA5D126FB29AD7CDEDC456FD06C9D59445D6A24856D49E65F404B383AC684409BB9BE12E5CE76AC94"
          - "Advanced tech: use X twice in the preparation circle before raids to get an atro opener with double X into Execution of Judgment. In general you want to offset your X stacks from your Destiny stacks, either by 1 or by 2."
          - "Yellow stacks pretty much always reach 2 on 111 and 222 (and Ark Grid less); only 333 manages to hit 3. Blue stacks are around 20 on every build."
          - "Gems: 333 uses the Spin Slash CD gem."
          - "Pick One engravings is in fact Pick Two. Adrenaline specific: if you do not want to play Blunt Thorn (80% capped crits), remove Adrenaline and move Blunt Thorn to Standing Striker. The expected DPS difference is -0.5%, but you do not have to manage Adrenaline stacks and you get fewer white numbers, which may be better for mental. No other changes."
          - "Not maxed Adrenaline will want Keen Sense 1 instead of Limit Break 1."
          - "Chaos Dungeon: Charge, Flash Thrust, Executioner's Sword, Holy Sword and Execution of Justice with Galewind, plus Alithanes's Judgment."
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
            points: 1
            category: evolution
            tier: 2
          - name: Optimized Training
            points: 2
            category: evolution
            tier: 2
          - name: Zealous Smite
            points: 3
            category: evolution
            tier: 3
          - name: Pulverize
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
          - name: Divine Knight
            points: 1
            category: enlightenment
            tier: 1
          - name: Piety Training
            points: 1
            category: enlightenment
            tier: 2
          - name: Prelude of Punishment
            points: 1
            category: enlightenment
            tier: 3
          - name: Judgment
            points: 3
            category: enlightenment
            tier: 3
          - name: Protective Judgement
            points: 1
            category: enlightenment
            tier: 4
          - name: Blessing of Judgment
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
          - name: Execution Sentence
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - "Valid for all Ark Grids. If you do not have max Adrenaline, use Keen Sense 1 instead of Limit Break 1."
        skills:
          - name: Judgment Blade
            level_label: Identity (X)
            notes: |-
              **Yellow Stack Builder, Push Immunity**
              - Quick, strong 180 degree slash that gives one yellow stack per use. Highest priority; a good chunk of your damage on every build. Faster if used right after a Punish skill.
          - name: Execution of Judgment
            level_label: Hyper Awakening Technique
            notes: |-
              **T Skill**
              - Second in the priority order. Use it right after X.
          - name: Flash Slash
            level: 13
            tripods:
              - Executioner
              - Strength Release
              - Swift Swordcraft
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Punish Skill, Blue Stack Builder**
              - Spammy, constant damage; the core of the 111 build.
          - name: Flash Thrust
            level: 12
            tripods:
              - Excellent Mobility
              - Chain Attack
              - Flash Focus
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Punish Skill, Blue Stack Builder**
              - Very high priority because it is fast and spammy.
          - name: Spin Slash
            level: 12
            tripods:
              - Gravitational Blow
              - Flexible Swordcraft
              - Sword Trace
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Punish Skill, Blue Stack Builder**
              - Very high priority because it is fast and spammy. Its CD gem is the one used on 333.
          - name: Holy Sword
            level: 14
            tripods:
              - Executioner
              - Strength Release
              - Condensed Energy
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage, Counter**
              - Part of the priority order on every build and the main skill of 222.
          - name: Execution of Justice
            level: 14
            tripods:
              - Executioner
              - Strength Release
              - Express Fury
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage**
              - Mid priority.
          - name: Executioner's Sword
            level: 14
            tripods:
              - Executioner
              - Strength Release
              - Broad Slash
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage, Counter**
              - Low priority.
          - name: Punishment
            level: 14
            tripods:
              - Swift Fingers
              - Strength Release
              - Leap Attack
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Punish Skill**
              - Low priority; Punish skills apply the +8% crit damage synergy.
          - name: Charge
            level: 4
            tripods:
              - Excellent Mobility
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Mobility**
        gems:
          - skill: Judgment Blade
            type: damage
            priority: 1
          - skill: Holy Sword
            type: damage
            priority: 2
          - skill: Execution of Justice
            type: damage
            priority: 3
          - skill: Judgment Blade
            type: cooldown
            priority: 1
          - skill: Holy Sword
            type: cooldown
            priority: 2
          - skill: Execution of Justice
            type: cooldown
            priority: 3
          - skill: Executioner's Sword
            type: cooldown
            priority: 4
          - skill: Flash Slash
            type: cooldown
            priority: 5
          - skill: Punishment
            type: cooldown
            priority: 6
          - skill: Flash Thrust
            type: cooldown
            priority: 7
          - skill: Spin Slash
            type: cooldown
            priority: 8
          - skill: Dash Slash
            type: cooldown
            priority: 9
        rotation_sections:
          - title: "Priority system (all builds): Dps Paladin does not run a specific rotation"
            steps:
              - Judgment Blade
              - Execution of Judgment
              - Flash Slash
              - Flash Thrust
              - Spin Slash
              - Dash Slash
              - Holy Sword
              - Execution of Justice
              - Executioner's Sword
              - Punishment
          - title: "333 advanced tech"
            steps:
              - Judgment Blade
              - Judgment Blade
              - Execution of Judgment
      - name: 222-Holy Sword
        recommended: false
        difficulty: 2
        description: Able to sync up with support T / identity the best of the 3 builds, with access to a lot of attack speed tripods so it feels smoother to play and more mobility than the other builds. Performance tends to vary more than other builds because of back attacking.
        arkgrid_cores: Sacred Strike + Heavenly Sword + Divine Sword
        arkgrid_prose: |-
          Chaos cores: Flashy Attack + Smoldering Strike + Attack.
        tips:
          - "Skill code (222 Ark Grid build, back attack): 7530101D57E227C4B6AA9B18F9F335DBCB5189AEB6323A20972FD61816BEC87D55F65CE7C6A2AE8384D65D655C432232B59A9B455262A600A8EA8B4C90F2C71E"
          - "Use Ambush Master as one of your two Pick One engravings."
          - "Ark passives: remove Zealous Smite to use Strike instead. With the excess Crit Chance you can remove up to 3 Crit points and put them into Swiftness (consider dropping Master if you have extra Crit Chance on the bracelet for Pulverize). Swap out Execution Sentence for Immediate Judgment too."
          - "Gems: 222 uses the Dash Slash CD gem."
          - "Yellow stacks pretty much always reach 2 on this build."
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
            points: 1
            category: evolution
            tier: 2
          - name: Optimized Training
            points: 2
            category: evolution
            tier: 2
          - name: Strike
            points: 3
            category: evolution
            tier: 3
          - name: Pulverize
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
          - name: Divine Knight
            points: 1
            category: enlightenment
            tier: 1
          - name: Piety Training
            points: 1
            category: enlightenment
            tier: 2
          - name: Prelude of Punishment
            points: 1
            category: enlightenment
            tier: 3
          - name: Judgment
            points: 3
            category: enlightenment
            tier: 3
          - name: Protective Judgement
            points: 1
            category: enlightenment
            tier: 4
          - name: Blessing of Judgment
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
          - name: Immediate Judgment
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - "Valid for all Ark Grids. If you do not have max Adrenaline, use Keen Sense 1 instead of Limit Break 1."
        skills:
          - name: Judgment Blade
            level_label: Identity (X)
            notes: |-
              **Yellow Stack Builder, Push Immunity**
              - Quick, strong 180 degree slash that gives one yellow stack per use. Highest priority; a good chunk of your damage on every build. Faster if used right after a Punish skill.
          - name: Execution of Judgment
            level_label: Hyper Awakening Technique
            notes: |-
              **T Skill**
              - Second in the priority order. Use it right after X.
          - name: Holy Sword
            level: 14
            tripods:
              - Swift Fingers
              - Strength Release
              - Condensed Energy
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage, Counter**
              - Part of the priority order on every build and the main skill of 222.
          - name: Flash Thrust
            level: 12
            tripods:
              - Excellent Mobility
              - Chain Attack
              - Flash Focus
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Punish Skill, Blue Stack Builder**
              - Very high priority because it is fast and spammy.
          - name: Dash Slash
            level: 12
            tripods:
              - Quick Prep
              - Strength Release
              - Finishing Strike
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Punish Skill, Blue Stack Builder**
              - Very high priority on 222. Its CD gem is the one used on 222.
          - name: Execution of Justice
            level: 14
            tripods:
              - Bulwark
              - Strength Release
              - Express Fury
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage**
              - Mid priority.
          - name: Executioner's Sword
            level: 14
            tripods:
              - Quick Pace
              - Strength Release
              - Triple Strike
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage, Counter**
              - Low priority.
          - name: Punishment
            level: 14
            tripods:
              - Swift Fingers
              - Strength Release
              - Leap Attack
            rune: Vision
            rune_rarity: legendary
            notes: |-
              **Punish Skill**
              - Low priority; Punish skills apply the +8% crit damage synergy.
          - name: Flash Slash
            level: 13
            tripods:
              - Nimble Movement
              - Strength Release
              - Swift Swordcraft
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Punish Skill, Blue Stack Builder**
              - Spammy, constant damage; the core of the 111 build.
          - name: Charge
            level: 4
            tripods:
              - Excellent Mobility
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Mobility**
        gems:
          - skill: Judgment Blade
            type: damage
            priority: 1
          - skill: Holy Sword
            type: damage
            priority: 2
          - skill: Execution of Justice
            type: damage
            priority: 3
          - skill: Judgment Blade
            type: cooldown
            priority: 1
          - skill: Holy Sword
            type: cooldown
            priority: 2
          - skill: Execution of Justice
            type: cooldown
            priority: 3
          - skill: Executioner's Sword
            type: cooldown
            priority: 4
          - skill: Flash Slash
            type: cooldown
            priority: 5
          - skill: Punishment
            type: cooldown
            priority: 6
          - skill: Flash Thrust
            type: cooldown
            priority: 7
          - skill: Dash Slash
            type: cooldown
            priority: 8
          - skill: Spin Slash
            type: cooldown
            priority: 9
        rotation_sections:
          - title: "Priority system: Dps Paladin does not run a specific rotation"
            steps:
              - Judgment Blade
              - Execution of Judgment
              - Holy Sword
              - Flash Thrust
              - Dash Slash
              - Execution of Justice
              - Executioner's Sword
              - Punishment
              - Flash Slash
      - name: 111-Flash Slash
        recommended: false
        difficulty: 1
        description: Straightforward constant damage with no stack management; you never leave Lightsaber mode. The uptime needed is extremely high compared to the other builds.
        arkgrid_cores: Divine Power + Hour of Punishment + Punishing Sword
        arkgrid_prose: |-
          Chaos cores: Flashy Attack + Smoldering Strike + Attack.
        tips:
          - "Skill code (111 Ark Grid build): 5C4A333AB7378729148B4267447C76B7F472DB53E502BD7FB136E66D8CA49DCFAD648A91BC0FD6A09533F745B88C62B07132618FE294F4A2B6E203AB753C1BED"
          - "Advanced tech: you can prep 7x Flash Slash in a row if you use X during downtime (the boss is away for a mechanic, etc). Once the boss is back, use 3x Flash Slash (not the 4th, because it puts the skill on cooldown), then use X, then use 4x Flash Slash."
          - "Yellow stacks pretty much always reach 2 on this build."
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
            points: 1
            category: evolution
            tier: 2
          - name: Optimized Training
            points: 2
            category: evolution
            tier: 2
          - name: Zealous Smite
            points: 3
            category: evolution
            tier: 3
          - name: Pulverize
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
          - name: Divine Knight
            points: 1
            category: enlightenment
            tier: 1
          - name: Piety Training
            points: 1
            category: enlightenment
            tier: 2
          - name: Prelude of Punishment
            points: 1
            category: enlightenment
            tier: 3
          - name: Judgment
            points: 3
            category: enlightenment
            tier: 3
          - name: Protective Judgement
            points: 1
            category: enlightenment
            tier: 4
          - name: Blessing of Judgment
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
          - name: Execution Sentence
            points: 3
            category: leap
            tier: 2
        arkPassiveTips:
          - "Valid for all Ark Grids. If you do not have max Adrenaline, use Keen Sense 1 instead of Limit Break 1."
        skills:
          - name: Judgment Blade
            level_label: Identity (X)
            notes: |-
              **Yellow Stack Builder, Push Immunity**
              - Quick, strong 180 degree slash that gives one yellow stack per use. Highest priority; a good chunk of your damage on every build. Faster if used right after a Punish skill.
          - name: Execution of Judgment
            level_label: Hyper Awakening Technique
            notes: |-
              **T Skill**
              - Second in the priority order. Use it right after X.
          - name: Flash Slash
            level: 14
            tripods:
              - Executioner
              - Strength Release
              - Swift Swordcraft
            rune: Quick Recharge
            rune_rarity: legendary
            notes: |-
              **Punish Skill, Blue Stack Builder**
              - Spammy, constant damage; the core of the 111 build.
          - name: Flash Thrust
            level: 14
            tripods:
              - Excellent Mobility
              - Chain Attack
              - Flash Focus
            rune: Bleed
            rune_rarity: legendary
            notes: |-
              **Punish Skill, Blue Stack Builder**
              - Very high priority because it is fast and spammy.
          - name: Spin Slash
            level: 14
            tripods:
              - Gravitational Blow
              - Strength Release
              - Sword Trace
            rune: Poison
            rune_rarity: legendary
            notes: |-
              **Punish Skill, Blue Stack Builder**
              - Very high priority because it is fast and spammy. Its CD gem is the one used on 333.
          - name: Holy Sword
            level: 14
            tripods:
              - Executioner
              - Strength Release
              - Condensed Energy
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage, Counter**
              - Part of the priority order on every build and the main skill of 222.
          - name: Execution of Justice
            level: 13
            tripods:
              - Executioner
              - Strength Release
              - Express Fury
            rune: Galewind
            rune_rarity: legendary
            notes: |-
              **Damage**
              - Mid priority.
          - name: Executioner's Sword
            level: 14
            tripods:
              - Executioner
              - Strength Release
              - Broad Slash
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Damage, Counter**
              - Low priority.
          - name: Punishment
            level: 10
            tripods:
              - Swift Fingers
              - Strength Release
              - Leap Attack
            rune: Galewind
            rune_rarity: epic
            notes: |-
              **Punish Skill**
              - Low priority; Punish skills apply the +8% crit damage synergy.
          - name: Charge
            level: 4
            tripods:
              - Excellent Mobility
            rune: Quick Recharge
            rune_rarity: epic
            notes: |-
              **Mobility**
        gems:
          - skill: Judgment Blade
            type: damage
            priority: 1
          - skill: Flash Slash
            type: damage
            priority: 2
          - skill: Holy Sword
            type: damage
            priority: 3
          - skill: Execution of Justice
            type: damage
            priority: 4
          - skill: Executioner's Sword
            type: damage
            priority: 5
          - skill: Punishment
            type: damage
            priority: 6
          - skill: Judgment Blade
            type: cooldown
            priority: 1
          - skill: Spin Slash
            type: cooldown
            priority: 2
          - skill: Flash Slash
            type: cooldown
            priority: 3
          - skill: Holy Sword
            type: cooldown
            priority: 4
          - skill: Flash Thrust
            type: cooldown
            priority: 5
        rotation_sections:
          - title: "Priority system: Dps Paladin does not run a specific rotation"
            steps:
              - Judgment Blade
              - Execution of Judgment
              - Flash Slash
              - Flash Thrust
              - Spin Slash
              - Holy Sword
              - Execution of Justice
              - Executioner's Sword
              - Punishment
---
