# Phase 02 — Tokens

## Purpose

Make the app's design system match the brand's, so every ported page has 1:1 visual parity.

## Inputs

- `01-intake.md`; the brand's `output/theme.json` and/or `output/03-system-tokens.md`.

## Process

1. Delegate to the **`extract-design-tokens`** skill:
   - Prefer `03-system-tokens.md`'s ready-to-use `:root` block; else derive it from `theme.json` (`settings.color.palette`, `typography.fontFamilies/fontSizes`, `spacing`, `styles.elements.button`).
   - Rewrite `styles/tokens.css` with the brand's values (keep the same variable **names** so components don't change).
   - Confirm `app/globals.css`'s `@theme inline` block still references every token used.
2. Update `content/brand.ts` (name, wordmark text/suffix, domain, location, blurb, copyright) from `demo.json` + README.
3. Set the fonts: update `next/font` families in `app/layout.tsx` to the brand's display/body faces; keep the `--font-*` variable wiring.

## Outputs

- Updated `styles/tokens.css`, `content/brand.ts`, and (if fonts changed) `app/layout.tsx`.

## Success Criteria

`npm run build` compiles the CSS; a spot check of colors/type on any page matches the artifact.

## Notes

This phase does **not** block — token parity is verified visually in Phase 04.
