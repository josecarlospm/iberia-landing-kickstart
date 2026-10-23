# Iberia Landing Kickstart

AI-readable skeleton for **dark zinc / emerald / copper** local-shop landing pages — the same visual language as Optimius Resultados ([live reference](https://www.optimius.eu/es#results)).

Part of the [SiteForge](https://github.com/josecarlospm/siteforge) ecosystem. Use this repo when an agent or human needs a **runnable starting point** that already encodes the approved UI standard.

| Doc | Audience |
|---|---|
| [`AGENTS.md`](./AGENTS.md) | Coding agents — read first |
| [`DESIGN.md`](./DESIGN.md) | Tokens, sections, anti-slop |
| [`src/lib/brand.ts`](./src/lib/brand.ts) | Brand strings to swap |

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- `next-intl` — `pt` (default), `en`, `es`
- Geist Sans / Geist Mono

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000/es#results](http://localhost:3000/es#results) to see the Resultados stats strip.

## Remix in 5 minutes

1. Change `src/lib/brand.ts`
2. Edit `messages/pt.json`, `en.json`, `es.json` (same keys)
3. Keep `globals.css` tokens unless Design Architect changes the preset
4. `npm run build`

## What this is / is not

**Is:** a kickstart + design contract for Iberia-style marketing landings.

**Is not:** the Optimius product app, the SiteForge Angular factory, or a full auth/billing stack.

Product reference: [josecarlospm/optimius](https://github.com/josecarlospm/optimius) · Factory: [josecarlospm/siteforge](https://github.com/josecarlospm/siteforge)
