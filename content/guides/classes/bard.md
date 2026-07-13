---
title: Bard Guide
class: Mage
subclass: Bard
class_id: 204
description: Working guide for Bard including Desperate Salvation (Support) and True Courage (DPS) builds with Ark Grid variants.
identity:
  name: Serenade of Courage / Serenade of Salvation
  description: Bard has an identity gauge that can be used to cast a party heal or party damage buff (Self-only for DPS build). This identity gauge is filled by hitting an enemy with your skills. Certain skills fill your identity gauge much faster than other skills. This identity gauge is often referred to as Bard's 'meter', with the individual bars often referred to as 'bubbles.'
synergy:
  name: Note Brand / Defense Reduction
  description: On hit, increases damage received by all party members (Desperate Salvation). Reduces defense of enemies (True Courage).
  skills:
    - Sonatina
    - Sound Shock
builds:
  - name: True Courage
    engraving: True Courage
    description: Class Description Here whatever Techno writes.
    playstyle: Build identity gauge and buff yourself to unlock a large damaging skill. Non-directional with melee positioning.
    difficulty: easy
    preArkGrid:
      description: Pre Ark Grid setup follows the same build as 112 Ark Grid Build.
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
        priority: optional
    variants:
      - name: 11x and Pre-Ark Grid
        difficulty: easy
        recommended: true
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
          - 1115 Crit = 53% with High Crit% rings (recommended).
          - Raid Captain is efficient with 136% movement speed, or 1281 Swiftness plus a 5% Feast. Excess stats should be placed into Swiftness (Recommended) or Specialization.
          - Specialization only increases Serenade meter generation. This does not increase buff efficiency or skill damage for True Courage Bard.
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
          - name: Hymn Tempest
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
              - <tripod>Courageous Tune</tripod> can be used over <tripod>Tough Tune</tripod> to provide raidwide damage mitigation on-hit.
              - Tough Tune is mandatory if you are running Mass Increase engraving.
              - Heavenly Tune's mana regeneration does NOT stack with Support Bards in the same party. You still gain the AP buff.
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
              - Must hit the circle AND at least one ball from the X pattern for full damage.
              - Additional balls do not increase skill damage.
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
          - skill: Shurdi
            type: Harp of Rhythm
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

---
