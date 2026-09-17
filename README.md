# Mokokompendium

Mokokompendium is an all-in-one guide site for all things Lost Ark.

## Tech Stack

- Nuxt v4
- Vue 3
- Tailwind CSS v4
- Nuxt UI
- Nuxt Content
- Cloudflare Pages + D1 (SQLite)
- pnpm

## Project Structure

- `app/` - Nuxt app source (pages, components, composables)
- `server/` - server routes and utilities
- `content/` - guide markdown/content
- `tests/` - unit and integration tests

Tooltip/gameplay data is stored in Cloudflare D1 SQLite.

## Contributors

- [poyo](https://github.com/Poyoanon)

## Development

- Clone repository: `git clone https://github.com/Poyoanon/mokokompendium.git` then `cd mokokompendium`
- Install dependencies: `pnpm install`
- Build: `pnpm build`
- Run dev server: `pnpm dev`
- Run type checks: `npx nuxi typecheck`
- Run tests: `pnpm test`

Default local address: `http://localhost:3000`

Contributions are welcome. Feel free to open an issue or submit a pull request.
If you'd like to contribute to the class guides themselves, [check this wiki](https://github.com/Poyoanon/mokokompendium/wiki/Contributing-to-Class-Guides)!

## Refreshing skill and tripod data

Extract the main `EFGame_Extra/ClientData/TableData/EFTable_*.db` tables from
`_data2.lpk` into `.data/aug31`. The importer deliberately excludes the separate
`jss` override tables. Include Skill, SkillFeature, SkillEffect, SkillEffectVariable,
SkillBuff, GameMsg, PC, CombatEffect, and AbilityFeature.

Export the live database before generating a repair:

```sh
pnpm exec wrangler d1 export mokokompendium-skills --remote --output .data/remote-before.sql
pnpm db:sync-skills:dry-run --baseline .data/remote-before.sql
python scripts/test_skill_sync.py
```

Alternatively invoke `python scripts/sync_raw_skill_compendium.py --source PATH
--baseline .data/remote-before.sql` directly. Review `.data/skill-sync/coverage.json`
and `repair.sql`, then apply the SQL with `wrangler d1 execute --remote --file`.
The script never writes remotely itself. It validates the repair against the
export, checks repeatability, and preserves unrelated tables and custom columns.
Descriptions use the existing 140,000 attack-power convention.

If guide requests stall after deployment, inspect `_content_info.ready`. Only
clear a stuck initialization flag after verifying every guide against the exact
published `/__nuxt_content/classGuides/sql_dump.txt` bundle; setting the flag on
an incomplete import would hide missing content.
