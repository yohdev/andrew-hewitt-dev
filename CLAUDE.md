# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this repo is

A **Next.js base repo** that turns [`yd-website-playbook`](https://github.com/yohdev/yd-website-playbook)
brand builds (self-contained static-HTML `demos/<brand>/output/` artifacts) into a real, maintainable,
production site — App Router + TypeScript + Tailwind v4, a typed content layer, and clean seams for
maturing the site (CMS, integrations, deploy).

It ships with **Claude skills** that automate the import, and a full working reference brand
(**Andrew Hewitt** / andrewhewitt.dev) ported from the playbook.

## Architecture (read this first)

```
app/                    # App Router routes; each page.tsx = getPage() + <SectionRenderer/>
content/                # THE CONTENT — typed, verbatim, no logic
  schema.ts             # zod schemas → the "page model" (block union). The contract.
  brand.ts  site.ts     # brand identity + global nav/footer
  pages/*.ts            # each page as an ordered list of section blocks
lib/
  content.ts            # THE SEAM: getPage/getBrand/getSite — swap for a CMS here
  env.ts links.ts seo.ts
components/
  ui/                   # primitives (Cta, Container, Section, SectionHead, Html, …)
  layout/               # SiteHeader (mobile drawer), SiteFooter, Brand
  sections/             # one component per block type + SectionRenderer (registry)
  icons.tsx
styles/tokens.css       # design tokens (:root) — SINGLE SOURCE OF TRUTH
app/globals.css         # maps tokens → Tailwind v4 @theme utilities
tests/                  # content.test.ts (vitest) + a11y.spec.ts (Playwright + axe)
.claude/skills/         # playbook-import, extract-design-tokens, build-page, a11y-check, add-integration
```

**Data flow:** `content/pages/*.ts` (typed blocks) → `lib/content.ts` (validates via zod) →
`app/<route>/page.tsx` → `SectionRenderer` (block `type` → component) → `components/sections/*`.
Content is validated at import; bad content fails the build/tests, never renders.

**Design tokens:** edit values in `styles/tokens.css` only. `app/globals.css` maps them to Tailwind
(`bg-canvas`, `text-amber`, `rounded-pill`, `font-display`) and they're also usable as raw
`var(--amber)`. Re-theming a brand = rewriting token values; components don't change.

## Conventions

- **No invented copy.** Page content is lifted verbatim from playbook artifacts into `content/pages/*.ts`.
- **Reuse the design system.** New component variants use existing tokens only — no new colors/fonts/radii.
- **Components hold no copy.** They read their typed block props; all text lives in `content/`.
- **Server Components by default.** `"use client"` only where needed (the mobile nav drawer).
- **Real images, local.** Assets in `public/assets/`, served through `next/image`. No hotlinks; no CDN fonts (`next/font`).
- **Trusted HTML only** through `components/ui/Html.tsx` (`dangerouslySetInnerHTML`) — content is authored in-repo, never user input.
- **Accessibility is a gate**, not a nicety — every route must pass `npm run test:a11y` (WCAG 2.1 AA).
- **Link sentinels:** `@booking` → `NEXT_PUBLIC_BOOKING_URL`, `@email` → `mailto:NEXT_PUBLIC_CONTACT_EMAIL` (resolved in `lib/links.ts`). Keeps integration URLs out of content.

## Commands

```bash
npm install
npm run dev            # http://localhost:3000
npm run verify         # typecheck + lint + unit tests
npm run build          # production build (all routes prerender static)
npm run test:a11y      # axe WCAG 2.1 AA on every route (build first)
npm run a11y:install-hook   # install the pre-commit gate (format + types + lint)
```

## The skills (how work gets done here)

Invoke with `/skill-name`. They mirror the playbook's SKILL.md + phases conventions and emit
`.skill-output/<brand>/01-…` / `02-…` provenance.

| Skill                   | Use                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------- |
| `playbook-import`       | Front door: import a whole brand from the playbook into this app (one brand per run). |
| `extract-design-tokens` | `theme.json` / `03-system-tokens.md` → `styles/tokens.css`.                           |
| `build-page`            | One playbook page → a typed route + reused components.                                |
| `a11y-check`            | Run/fix the WCAG 2.1 AA gate (the ada-scan analog).                                   |
| `add-integration`       | Mature the site: CMS behind the seam, booking, analytics, forms.                      |

## Maturing the site (designed for change)

- **CMS:** reimplement `lib/content.ts`'s `getPage/getBrand/getSite` against a CMS (e.g. Sanity —
  connector available). Model its schema to mirror `content/schema.ts` and `pageSchema.parse()` the
  response so validation still holds. No component changes. See the `add-integration` skill.
- **Integrations:** booking (`NEXT_PUBLIC_BOOKING_URL`), analytics (`NEXT_PUBLIC_ANALYTICS_ID`), and
  forms all wire through `lib/env.ts` + the sentinels. Add server-only secrets to `lib/env.ts` +
  `.env.example`.
- **Deploy:** Vercel (per-PR previews, prod on `main`). `output: 'export'` also works for static hosting.

## Reference brand — open stubs (from the source README)

Carried forward as `TODO`s, not hidden: the **booking URL** is a placeholder (set
`NEXT_PUBLIC_BOOKING_URL`); **testimonials** are marked sample (replace before launch); several
**photo slots** are labeled placeholders (`PhotoStrip`, `BookingEmbed`); the large
`devconnect-event.jpg` should be compressed at source (served optimized via `next/image` for now).
