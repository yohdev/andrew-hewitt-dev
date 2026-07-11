# Playbook Import Skill

## Identity

- **Name:** `playbook-import`
- **Display name:** Playbook Import
- **Description:** Front door for turning a `yd-website-playbook` brand build (the static-HTML `demos/<brand>/output/` artifacts) into this Next.js app — extracts the design tokens, ports each page into typed content + reusable components, vendors real assets, and verifies the result builds and passes accessibility. One brand per run. Routes to the specialist skills (`extract-design-tokens`, `build-page`, `a11y-check`).
- **Version:** 1.0.0

## Activation Triggers

This skill activates when:

- User says "import a brand from the playbook", "bring `<brand>` into Next.js", or "port the playbook output".
- User points at a `demos/<brand>/` folder, a playbook branch, or pasted `output/*.html` + `theme.json`.
- User says "rebuild the site in Next.js from the playbook artifacts".
- Invoked directly: `/playbook-import`.

## What it consumes (the playbook artifact set)

A brand build under `demos/<brand>/` in `yohdev/yd-website-playbook`:

- `output/*.html` — self-contained static pages (tokens inline in `:root`, content in markup; some homepages use inline React).
- `output/theme.json` — WordPress v3 token export (the cleanest token source). Sometimes only embedded inside `Style-Guide.html`.
- `output/03-system-tokens.md` — a ready-to-use `:root` block + token spec (prefer this or `theme.json`).
- `output/assets/**` — real images (headshots, photos, logos, favicon).
- `demo.json`, `README.md` — brand metadata, sitemap, and documented pre-launch stubs.

## Process Overview

### Phase 01 — Locate & fetch

- Resolve the brand's artifacts (local path, or `git fetch` the playbook branch and `git archive` the `demos/<brand>/` subtree into a scratch dir).
- Read `demo.json` + `README.md` to learn the brand, the public sitemap (nav + routes), the one CTA, and every documented stub.
- Produce `.skill-output/<brand>/01-intake.md` — brand metadata, route map (source file → Next.js route), asset inventory, and the stub list.
- **Blocks** on confirming the route map before building.

### Phase 02 — Tokens

- Delegate to `extract-design-tokens`: `theme.json` / `03-system-tokens.md` → rewrite `styles/tokens.css` (the `:root` block) and confirm the Tailwind `@theme` mapping in `app/globals.css` still resolves.
- Update `content/brand.ts` (name, wordmark, domain, copyright) from `demo.json`.

### Phase 03 — Pages & components

- For each route, delegate to `build-page`: parse the source page into ordered section blocks, reuse existing components (see the block vocabulary), lift copy **verbatim** into `content/pages/<route>.ts` (+ MDX for long prose), and add any new block type (schema + component + registry entry) only when no existing block fits.
- Wire `content/site.ts` (nav, header CTA, footer) and `lib/content.ts` (route → page map).
- Vendor `output/assets/**` into `public/assets/**`; repoint `src` paths to `/assets/...`.
- Produce `.skill-output/<brand>/02-component-map.md` — route → ordered block list, and any new components created.

### Phase 04 — Assemble & verify

- `npm run typecheck && npm run lint && npm run build` must pass (zero TS errors; no CDN React/Babel).
- Delegate to `a11y-check`: `npm run test:a11y` must report zero WCAG AA violations on every new/changed route.
- Confirm each route visually matches its source artifact (tokens, layout, copy).
- Summarize: routes added, new components, unresolved stubs (carry them forward as `TODO`s, never silently drop).

## Key Rules

- **No invented copy** — content is lifted verbatim from the artifacts; preserve messaging hierarchy and inline `<em>` emphasis.
- **Reuse the design system verbatim** — tokens come from `theme.json`/`03-system-tokens.md`; new component variants use existing tokens only (no new colors/fonts/radii).
- **Real images, hosted locally** — vendor into `public/assets/`; a labeled placeholder is the only fallback, and it stays flagged as a `TODO`.
- **One brand per run** — for a second brand, run the skill again.
- **The content seam is the contract** — components read only from `lib/content.ts`; never hardcode copy in a component.
- **Preserve stubs** — booking URL via env, "sample" testimonials, placeholder photo slots stay marked, not hidden.

## Quality Checklist

- [ ] Route map confirmed with the user (Phase 01).
- [ ] `styles/tokens.css` matches the brand's `theme.json` / `03-system-tokens.md`.
- [ ] Every page ports to typed `content/pages/*.ts` and validates against `content/schema.ts`.
- [ ] Assets vendored to `public/assets/`; no hotlinks; no CDN fonts (use `next/font`).
- [ ] `npm run verify` (typecheck + lint + test) and `npm run build` pass.
- [ ] `npm run test:a11y` reports zero violations on new/changed routes.
- [ ] Provenance written to `.skill-output/<brand>/01-*.md` and `02-*.md`.
- [ ] Documented stubs carried forward as `TODO`s.

## Shared Block Vocabulary

`hero · audienceCards · steps (optional per-step cols) · tiers · stats · logos · talks · photoStrip · quote · testimonials · techStack · expectationCards · featureSplit · bookingEmbed · prose · finalCta`.
Each maps 1:1 to a component in `components/sections/` and a schema variant in `content/schema.ts`. Add a new type only when nothing fits (schema variant + component + one line in `components/sections/SectionRenderer.tsx`).

## Failure Modes

- **Token source missing** → extract the `:root` block from a page's inline `<style>` (fallback), and note it.
- **Inline-React homepage** → parse the JSX component tree + inline data arrays into blocks; do not port the CDN/Babel runtime.
- **Content doesn't fit a block** → prefer `prose` (rich HTML) over inventing a one-off; invent a block only for a genuinely reusable pattern.
- **Asset 404 / oversized image** → vendor what exists, flag the rest as `TODO`, and note images that need compression (serve via `next/image`).
- **A11y regression** → hand the failing route to `a11y-check` before finishing; never ship a route with violations.
