# DESIGN.md — Iberia local-shop landing language

Skeleton extracted from the Optimius north-star UI (approved Resultados strip at `#results` / `#resultados`).

## Product frame

| Axis | Value |
|---|---|
| Category | AI / product landing for **local shops** (Portugal + Spain) |
| Mood | Dark forge + organic Iberia — zinc night, vine, mint success |
| Brand role | Product name is a **hero-level** signal; headline supports it |
| Reference | https://www.optimius.eu/ · Results: `/es#results` |

## Color tokens

Defined in `src/app/globals.css` `:root`:

| Token | Hex / value | Role |
|---|---|---|
| `--background` | `#07090b` | Page shell |
| `--foreground` | `#f4f6f5` | Primary text |
| `--muted` | `#9aa3a0` | Secondary text |
| `--panel` | `#0e1312` | Demo / glass panels |
| `--emerald` | `#00bb7f` | Primary accent, success, stats |
| `--emerald-soft` | `rgba(0, 187, 127, 0.14)` | Soft fills |
| `--copper` | `#c9854a` | Section eyebrows, secondary accent |
| `--forge` | `#e08a3a` | Warm highlight (sparingly) |
| `--vine` | `#1f6b52` | Motif / atmosphere |

Atmosphere = layered radial greens/coppers + soft noise overlay (`.atmosphere`). Never a flat single fill.

## Typography

- **Geist Sans** — UI and display
- **Geist Mono** — step numbers, hosts, micro labels
- Hero: large (`text-5xl` → `md:text-7xl`), tight tracking, split lines (muted lead / emerald emphasis / default tail)

## Layout contracts

1. **Header** — mark disc + brand wordmark · nav anchors · locale switcher · ghost + solid CTAs
2. **Hero** — eyebrow · 3-line title · subtitle · primary/secondary capsules · vine motif (no stats)
3. **How** — copper label · title · 3 border-top steps with mono `01/02/03`
4. **Demo** — interactive-feeling panel (`.demo-glow`); input + found state + lighthouse callout
5. **Features** — 2×3 plain articles (no cards)
6. **Results (`#results`)** — title + 2×2 / 4-col stats on `border-y border-white/10` · emerald values · muted labels ← **this is the approved UI standard**
7. **CTA** — large rounded panel, gradient emerald→copper wash, single capsule button
8. **Footer** — 3-col product/legal + AI disclosure note

## Motion (exactly these)

| Class | Purpose |
|---|---|
| `.vine-drift` | Ambient motif drift (~18s) |
| `.fade-up` (+ delays) | Hero entrance |
| `.pulse-dot` | “Found” live indicator |
| `.demo-glow` | Soft emerald drop-shadow breathe |

## Anti-slop (do not ship)

- Purple→indigo SaaS gradients or glow orbs
- Cream/oat canvas + serif + terracotta (PlantCare cluster)
- Broadsheet / newspaper defaults
- Stats, schedules, or promo chips in the **hero**
- Decorative card grids for non-interactive content
- Inter / Roboto / Arial as the brand voice
- Extra badge/pill clusters

## Capsule exception

This preset **allows** `rounded-full` primary/secondary buttons. Do not generalize that to other SiteForge presets unless their `Design.md` says so.

## Mapping to SiteForge factory

When folding into Angular SiteForge `Design.md`, register as a **local-shop / Iberia** preset (vine, dark zinc, Geist, emerald/copper). Payload enum work is a separate Backend task — this kickstart does not invent a new `designPreset` key by itself.
