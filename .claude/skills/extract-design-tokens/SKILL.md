# Extract Design Tokens Skill

## Identity

- **Name:** `extract-design-tokens`
- **Display name:** Extract Design Tokens
- **Description:** Convert a playbook brand's tokens (`theme.json` and/or `03-system-tokens.md`, or a page's inline `:root` block) into this app's single source of truth — `styles/tokens.css` — keeping the Tailwind `@theme` mapping in `app/globals.css` intact. Deterministic; prefers the structured `theme.json`.
- **Version:** 1.0.0

## Activation Triggers

- Called by `playbook-import` (Phase 02), or directly when re-theming: "extract tokens", "update the design tokens from theme.json", `/extract-design-tokens`.

## How tokens flow in this repo

`styles/tokens.css` (`:root` custom properties) → `app/globals.css` `@theme inline` (maps to Tailwind utilities) → utilities (`bg-canvas`, `text-amber`, `rounded-pill`, `font-display`) **and** raw `var(--amber)`. Change values in one place; nothing else moves.

## Process

1. **Pick the source**, in order of preference:
   1. `output/03-system-tokens.md` — has a ready-to-use `:root` block. Copy it.
   2. `output/theme.json` — map WordPress presets:
      - `settings.color.palette[]` → `--<slug>` colors.
      - `settings.typography.fontFamilies[]` → `--display` / `--body` (strip the WP `--wp--preset--*` wrapping; keep the raw family stack; prepend the `next/font` var, e.g. `var(--font-poppins), …`).
      - `settings.typography.fontSizes[]` → a fluid type scale (used by components; keep clamp() values).
      - `settings.spacing.spacingSizes[]` → spacing scale.
      - `styles.elements.button.border.radius` → `--r-pill` (and derive `--r-sm/md/lg`).
   3. Fallback: extract the `:root {…}` block from a page's inline `<style>`.
2. **Rewrite** `styles/tokens.css` — keep the **variable names** stable (`--canvas`, `--ink`, `--amber`, `--display`, `--r-*`, `--container`, `--measure`); only values change.
3. **Reconcile** `app/globals.css` `@theme inline`: ensure every `--color-*`/`--font-*`/`--radius-*` still references a token that exists. Add a mapping if the brand introduces a new named color.
4. **Verify:** `npm run build` compiles the CSS with no unknown-utility errors.

## Key Rules

- One source of truth: never scatter raw hex values into components — add a token.
- Keep names stable so components stay untouched across brands.
- Fonts load via `next/font` (see `app/layout.tsx`) — never a CDN `<link>`.

## Failure Modes

- **`theme.json` only inside `Style-Guide.html`** → extract the embedded JSON block, then proceed.
- **New brand color with no matching utility** → add a `--color-<name>: var(--<name>)` line to `@theme inline`.
- **Contrast risk** (e.g. amber on light) → flag for `a11y-check`; the brand rule is saturated accent on dark, light ink on dark.
