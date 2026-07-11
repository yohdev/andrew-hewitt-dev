# Build Page Skill

## Identity

- **Name:** `build-page`
- **Display name:** Build Page
- **Description:** Turn one playbook page (`output/<Page>.html`, static or inline-React) into a Next.js route: parse it into ordered section blocks, reuse existing components, lift copy **verbatim** into a typed `content/pages/<route>.ts`, vendor assets, and register the route. Emits `01-content` / `02-component-map` provenance.
- **Version:** 1.0.0

## Activation Triggers

- Called by `playbook-import` (Phase 03), or directly: "build the `<X>` page from the playbook", "port `About.html`", `/build-page`.

## Process

### Phase 01 — Content extraction

- Read the source page. Identify the `<head>` `<title>`/`meta description` and the ordered sections in `<body>`.
- Map each section to the shared block vocabulary (below). Capture copy **verbatim** — preserve `<em>` in headings (`headingHtml`), and `<strong>`/`<a>`/`<code>` inside `note`/`bodyHtml`/`quoteHtml`.
- Convert links: `Homepage.html→/`, `Work.html→/work`, `Process.html→/how-it-works`, `About.html→/about`, `Book.html→/book`; keep external URLs; use `@booking` / `@email` sentinels for scheduler/contact links.
- Write `.skill-output/<brand>/01-<route>-content.md` (the extraction).

### Phase 02 — Component map

- Decide the block sequence. Reuse an existing component wherever one fits. Only when a genuinely new, reusable pattern appears: add a schema variant (`content/schema.ts`), a component (`components/sections/`), and register it in `components/sections/SectionRenderer.tsx`.
- Write `.skill-output/<brand>/02-<route>-component-map.md` (ordered blocks + any new component).

### Phase 03 — Build & register

- Author `content/pages/<route>.ts` as a typed `Page` (import `type { Page }`). No invented copy.
- Vendor referenced assets into `public/assets/**`; repoint `src` to `/assets/...`.
- Add the page to `lib/content.ts`; create `app/<route>/page.tsx` from the existing route pattern (`getPage` + `SectionRenderer` + `generateMetadata`).
- `npm run typecheck` — the schema validation in `lib/content.ts` runs at import, so bad content fails fast.

## Shared Block Vocabulary

`hero · audienceCards · steps (per-step `cols` supported) · tiers · stats · logos · talks · photoStrip · quote · testimonials · techStack · expectationCards · featureSplit · bookingEmbed · prose · finalCta`.

## Key Rules

- **Verbatim copy** — never reword, summarize, or invent. Placeholders stay labeled and flagged `TODO`.
- **Prefer reuse** — reach for `prose` (trusted inline HTML) before inventing a one-off block.
- **Content, not components, holds copy** — components read only their typed block props.
- **Trusted HTML only** through `Html`/`dangerouslySetInnerHTML` (authored in-repo, never user input).

## Quality Checklist

- [ ] Title + description ported to the route's `generateMetadata`.
- [ ] Every section mapped to a block; new blocks registered in the renderer.
- [ ] Internal links → routes; scheduler/contact → sentinels; assets local via `next/image`.
- [ ] `content/pages/<route>.ts` validates; `npm run typecheck` clean.
- [ ] `01-*`/`02-*` provenance written.

## Failure Modes

- **Inline-React page** → read the JSX component tree + inline data arrays; port the data into blocks, not the CDN runtime.
- **No matching block** → use `prose`; invent a block only for a reusable pattern (and register it).
- **Ambiguous section** → prefer the closest existing block over a bespoke one; note the decision in `02-*`.
