# AGENTS.md — Iberia Landing Kickstart

You are building or remixing a **local-shop marketing landing page** in the SiteForge / Optimius visual language.

North-star live reference: [https://www.optimius.eu/es#results](https://www.optimius.eu/es#results) (same UI as the `#resultados` section Jose approved).

## Read order (mandatory)

1. This file (`AGENTS.md`)
2. `DESIGN.md` — tokens, anti-slop, section contracts
3. `src/lib/brand.ts` — brand strings to replace first
4. `src/app/globals.css` — CSS variables + atmosphere + motion
5. `src/components/LandingPage.tsx` — section composition
6. `messages/{pt,en,es}.json` — all user-facing copy

## Goal

Produce a dark, brand-first, Iberia-oriented landing that feels like Optimius: zinc shell, emerald/copper accents, Geist, vine motif, single-job sections, interactive demo panel, and a **Results** stats strip (`#results` / `#resultados`).

## Stack (do not swap without owner approval)

- Next.js App Router + TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"` + `@theme inline`)
- `next-intl` locales: `pt` (default), `en`, `es`
- Geist Sans + Geist Mono via `next/font/google`

## Remix checklist

When adapting for a new product:

1. Edit `src/lib/brand.ts` (`name`, `mark`, `email`, `demoHost`).
2. Rewrite `messages/*.json` — keep the same keys; change values.
3. Keep token names in `globals.css` (`--emerald`, `--copper`, `--panel`, …).
4. Keep section order unless the owner asks otherwise:
   Hero → How (`#how`) → Demo → Features (`#features`) → **Results (`#results`)** → CTA (`#cta`) → Footer.
5. Do **not** invent a purple SaaS theme, cream+terracotta plant theme, or newspaper broadsheet look.

## Hard UI rules (from DESIGN.md)

- First viewport: brand + one headline + one subtitle + CTA pair + optional atmosphere/motif. **No stats in the hero.**
- Stats live only in `#results` (the approved Resultados pattern).
- Cards only for interactive surfaces (demo panel). Feature grid = plain articles, no card chrome.
- Capsule (`rounded-full`) CTAs are allowed for this preset only.
- Motion: atmosphere vine drift + fade-up + one pulse/glow — do not add more.

## Out of scope for this skeleton

- Auth, Stripe, Supabase, shop generation pipeline
- Angular / SiteForge factory wiring (those live in `josecarlospm/siteforge`)
- Pixel-copy of Optimius copy/brand — this repo is a **template**, Optimius remains the product reference

## Verify before you stop

```bash
npm install
npm run build
npm run lint
```

Open `/`, `/en`, `/es` and jump to `#results`. Confirm emerald stats + border-y strip match the design language.
