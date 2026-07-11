# yd-playbook-next-js

A **Next.js base repo** that turns [`yd-website-playbook`](https://github.com/yohdev/yd-website-playbook)
brand builds into a real, engineering-grade, maintainable website — and ships **Claude skills** that
automate the import so new brands (and new pages) can be stood up on demand.

The playbook produces beautiful, self-contained **static HTML** (design tokens inline, content hard-coded
in markup). This repo is the productionization target: componentized, typed, bundled, accessible, and
built to grow into a CMS and integrations without a rewrite.

> **Reference build included:** the **Andrew Hewitt** site (andrewhewitt.dev) — Home, Work, How it works,
> About, Book, plus a Design System page — ported end-to-end from the playbook as the living example.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run verify       # typecheck + lint + unit tests
npm run build        # production build (every route prerenders static)
npm run test:a11y    # axe WCAG 2.1 AA on every route (run a build first)
```

## Stack & principles

- **Next.js 15 (App Router) · React 19 · TypeScript (strict)** — Server Components by default.
- **Tailwind CSS v4**, themed from CSS-variable **design tokens** (`styles/tokens.css`) — the single
  source of truth. Re-skinning a brand is a token change.
- **Typed content layer** — every page is an ordered list of validated section blocks
  (`content/pages/*.ts`, schema in `content/schema.ts`). No copy lives in components.
- **One content seam** (`lib/content.ts`) — swap local content for a CMS with zero component changes.
- **Accessibility as a gate** — axe WCAG 2.1 AA runs in CI and blocks merge (the playbook's ADA-scan analog).
- **`next/font`, `next/image`, per-route metadata, sitemap & robots** out of the box.

## How it maps from the playbook

| Playbook artifact                           | Becomes                                                       |
| ------------------------------------------- | ------------------------------------------------------------- |
| `output/theme.json` · `03-system-tokens.md` | `styles/tokens.css` → Tailwind `@theme` utilities             |
| `output/*.html` (sections + copy)           | `content/pages/*.ts` (typed blocks) + `components/sections/*` |
| `output/assets/**`                          | `public/assets/**` via `next/image`                           |
| `demo.json` · README                        | `content/brand.ts` · `content/site.ts` · route map            |

## Project layout

```
app/            routes (+ sitemap, robots, not-found)
content/        schema.ts · brand.ts · site.ts · pages/*.ts   ← the content
lib/            content.ts (the CMS seam) · env.ts · links.ts · seo.ts
components/     ui/ · layout/ · sections/ (one per block + SectionRenderer)
styles/         tokens.css (design tokens)
tests/          content.test.ts (vitest) · a11y.spec.ts (Playwright + axe)
.claude/skills/ playbook-import · extract-design-tokens · build-page · a11y-check · add-integration
```

## Claude skills

Ask Claude Code to run one, or invoke directly with `/skill-name`:

- **`/playbook-import`** — import a whole brand from the playbook (front door; one brand per run).
- **`/extract-design-tokens`** — tokens → `styles/tokens.css`.
- **`/build-page`** — one playbook page → a typed route.
- **`/a11y-check`** — run/fix the WCAG 2.1 AA gate.
- **`/add-integration`** — hook up a CMS, booking, analytics, or forms through the existing seams.

See `.claude/skills/<name>/SKILL.md` and [CLAUDE.md](CLAUDE.md) for the full architecture.

## Deploy

- **Vercel** (recommended): connect the repo — every PR gets a preview, `main` deploys to production.
- **Static hosting:** add `output: 'export'` to `next.config.mjs` and serve `out/`.

## Before go-live (reference brand)

Set `NEXT_PUBLIC_BOOKING_URL` to a real scheduler, replace the **sample** testimonials and labeled
**photo placeholders**, and compress the source Dev Connect photo. All are flagged `TODO` in code.
