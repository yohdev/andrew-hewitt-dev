# Add Integration Skill

## Identity

- **Name:** `add-integration`
- **Display name:** Add Integration
- **Description:** The "mature the site" front door. Recipes and guardrails for hooking the site up to real backends without rewrites — a CMS behind the content seam (Sanity et al.), a booking scheduler, analytics, or a contact form. Wires through the existing seams (`lib/content.ts`, `lib/env.ts`, the `@booking`/`@email` sentinels) so pages and components stay untouched.
- **Version:** 1.0.0

## Activation Triggers

- "hook up a CMS", "connect Sanity", "wire the booking link", "add analytics", "add a contact form", "make the content editable", `/add-integration`.

## The seams this repo ships (design for change)

- **Content:** every component reads through `lib/content.ts` (`getPage/getBrand/getSite`). It's the swap point for a CMS.
- **Config:** all env reads go through `lib/env.ts`. Add new keys there with fallbacks; document them in `.env.example`.
- **Links:** `@booking` / `@email` sentinels resolve in `lib/links.ts` — integration URLs live in env, not content.
- **Schema:** `content/schema.ts` (zod) is the shared contract a CMS must satisfy.

## Recipes

### A CMS (e.g. Sanity — connector available in the workspace)

1. Model the CMS schema to mirror `content/schema.ts` (pages = ordered blocks). Keep the block `type` discriminant.
2. Add a client + query in `lib/content.ts` behind the **same** `getPage/getAllRoutes/getBrand/getSite` signatures (already `async`). Parse CMS responses through the zod schemas so bad data still fails fast.
3. Choose a source with an env flag (`CONTENT_SOURCE=local|sanity`) so local content stays the default/fallback.
4. Add secrets to `lib/env.ts` + `.env.example` (`SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_TOKEN`). Add the CMS image host to `next.config.mjs` `images.remotePatterns`.
5. Use ISR/`revalidate` or on-demand revalidation for freshness. **No component changes required.**

### Booking scheduler

- Point `NEXT_PUBLIC_BOOKING_URL` at the real scheduler (Calendly/cal.com) — every `@booking` CTA updates. Or replace `components/sections/BookingEmbed.tsx`'s card body with the provider's embed.

### Analytics

- Read `NEXT_PUBLIC_ANALYTICS_ID` in a small `components/Analytics.tsx` (script via `next/script`, `afterInteractive`), mounted in `app/layout.tsx`; no-op when unset. Respect consent/reduced-tracking.

### Contact form

- Add a Server Action or Route Handler under `app/`; validate input with zod; send via the chosen provider (secret in `lib/env.ts`). Wire the "email" fallback to the form or keep the `@email` mailto.

## Key Rules

- **Never bypass the seam** — new data flows through `lib/content.ts`; new config through `lib/env.ts`.
- **Validate external data** with the existing zod schemas before it reaches a component.
- **Secrets are server-only** (no `NEXT_PUBLIC_` prefix). Public config is inlined at build.
- **Keep local content working** as the default so the repo runs with zero backend.

## Failure Modes

- **CMS shape drifts from schema** → adapt in `lib/content.ts` (map → `pageSchema.parse`), not by loosening the schema.
- **Remote images blocked** → add the host to `next.config.mjs` `images.remotePatterns`.
- **Secret leaks to client** → it's missing the server boundary; move the read into a server component/action.
