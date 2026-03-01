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
