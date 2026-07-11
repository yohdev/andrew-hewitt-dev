import { z } from 'zod';

/**
 * Content schema — the "page model" as typed, validated data.
 *
 * Every page is an ordered list of section blocks. This is the contract the
 * `build-page` skill targets and the seam a CMS later implements: swap the
 * source in `lib/content.ts` for Sanity/etc. and these same schemas validate it.
 *
 * Href sentinels (resolved in components/ui/Cta at render time, see lib/links.ts):
 *   "@booking" -> NEXT_PUBLIC_BOOKING_URL   (the scheduler link)
 *   "@email"   -> mailto:NEXT_PUBLIC_CONTACT_EMAIL
 * Everything else is a literal: internal route ("/work"), anchor ("#tiers"),
 * or external URL ("https://…").
 */

export const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
  variant: z.enum(['primary', 'secondary']).default('secondary'),
});
export type Cta = z.infer<typeof ctaSchema>;

export const photoSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});
export type Photo = z.infer<typeof photoSchema>;

const base = { id: z.string().optional() };

/* ------------------------------------------------------------------ blocks */

export const heroBlock = z.object({
  ...base,
  type: z.literal('hero'),
  eyebrow: z.string().optional(),
  headingHtml: z.string(),
  sub: z.string().optional(),
  ctas: z.array(ctaSchema).default([]),
  trustHtml: z.string().optional(),
  photo: photoSchema.optional(),
  badge: z.object({ n: z.string(), l: z.string() }).optional(),
});

export const audienceCardsBlock = z.object({
  ...base,
  type: z.literal('audienceCards'),
  eyebrow: z.string().optional(),
  headingHtml: z.string().optional(),
  intro: z.string().optional(),
  cards: z.array(z.object({ title: z.string(), items: z.array(z.string()) })),
  note: z.string().optional(), // may contain inline HTML
});

export const stepsBlock = z.object({
  ...base,
  type: z.literal('steps'),
  eyebrow: z.string().optional(),
  headingHtml: z.string().optional(),
  intro: z.string().optional(),
  numbered: z.boolean().default(false),
  steps: z.array(
    z.object({
      title: z.string(),
      body: z.string(),
      icon: z.string().optional(),
      cols: z.array(z.object({ k: z.string(), v: z.string() })).optional(),
    }),
  ),
  moreLink: ctaSchema.partial({ variant: true }).optional(),
});

export const tiersBlock = z.object({
  ...base,
  type: z.literal('tiers'),
  eyebrow: z.string().optional(),
  headingHtml: z.string().optional(),
  intro: z.string().optional(),
  tiers: z.array(
    z.object({
      flag: z.string().optional(),
      name: z.string(),
      price: z.string().optional(),
      priceNote: z.string().optional(),
      desc: z.string(),
      features: z.array(z.string()).optional(),
      feature: z.boolean().optional(), // highlighted card
      cta: ctaSchema,
    }),
  ),
  note: z.string().optional(),
});

export const statsBlock = z.object({
  ...base,
  type: z.literal('stats'),
  eyebrow: z.string().optional(),
  headingHtml: z.string().optional(),
  center: z.boolean().optional(),
  stats: z.array(z.object({ big: z.string(), cap: z.string() })),
});

export const logosBlock = z.object({
  ...base,
  type: z.literal('logos'),
  label: z.string(),
  logos: z.array(z.string()),
});

export const talksBlock = z.object({
  ...base,
  type: z.literal('talks'),
  eyebrow: z.string().optional(),
  headingHtml: z.string().optional(),
  talks: z.array(
    z.object({
      href: z.string(),
      thumb: z.string(),
      title: z.string(),
      alt: z.string().optional(),
    }),
  ),
  moreLink: ctaSchema.partial({ variant: true }).optional(),
});

export const photoStripBlock = z.object({
  ...base,
  type: z.literal('photoStrip'),
  eyebrow: z.string().optional(),
  headingHtml: z.string().optional(),
  intro: z.string().optional(),
  placeholders: z.array(z.object({ label: z.string(), hint: z.string() })),
  sample: z.boolean().optional(),
  moreLink: ctaSchema.partial({ variant: true }).optional(),
});

export const quoteBlock = z.object({
  ...base,
  type: z.literal('quote'),
  stars: z.number().optional(),
  quoteHtml: z.string(),
  who: z.string(), // may contain inline HTML
});

export const testimonialsBlock = z.object({
  ...base,
  type: z.literal('testimonials'),
  eyebrow: z.string().optional(),
  headingHtml: z.string().optional(),
  center: z.boolean().optional(),
  quotes: z.array(
    z.object({
      stars: z.number().optional(),
      quoteHtml: z.string(),
      name: z.string(),
      role: z.string(),
      sample: z.boolean().optional(),
    }),
  ),
  note: z.string().optional(),
});

export const techStackBlock = z.object({
  ...base,
  type: z.literal('techStack'),
  eyebrow: z.string().optional(),
  headingHtml: z.string().optional(),
  intro: z.string().optional(),
  groups: z.array(z.object({ label: z.string(), items: z.array(z.string()) })),
});

export const expectationCardsBlock = z.object({
  ...base,
  type: z.literal('expectationCards'),
  eyebrow: z.string().optional(),
  headingHtml: z.string().optional(),
  intro: z.string().optional(),
  cards: z.array(z.object({ icon: z.string().optional(), title: z.string(), body: z.string() })),
});

export const featureSplitBlock = z.object({
  ...base,
  type: z.literal('featureSplit'),
  eyebrow: z.string().optional(),
  headingHtml: z.string().optional(),
  image: photoSchema,
  bodyHtml: z.string(),
  cta: ctaSchema.optional(),
});

export const bookingEmbedBlock = z.object({
  ...base,
  type: z.literal('bookingEmbed'),
  eyebrow: z.string().optional(),
  headingHtml: z.string().optional(),
  intro: z.string().optional(),
  cta: ctaSchema,
  note: z.string().optional(), // may contain inline HTML (email fallback)
  photo: z
    .object({ placeholder: z.boolean().optional(), label: z.string(), hint: z.string() })
    .optional(),
});

export const proseBlock = z.object({
  ...base,
  type: z.literal('prose'),
  eyebrow: z.string().optional(),
  headingHtml: z.string().optional(),
  bodyHtml: z.string(),
  center: z.boolean().optional(),
});

export const finalCtaBlock = z.object({
  ...base,
  type: z.literal('finalCta'),
  eyebrow: z.string().optional(),
  headingHtml: z.string(),
  body: z.string(),
  cta: ctaSchema.partial({ variant: true }),
});

export const blockSchema = z.discriminatedUnion('type', [
  heroBlock,
  audienceCardsBlock,
  stepsBlock,
  tiersBlock,
  statsBlock,
  logosBlock,
  talksBlock,
  photoStripBlock,
  quoteBlock,
  testimonialsBlock,
  techStackBlock,
  expectationCardsBlock,
  featureSplitBlock,
  bookingEmbedBlock,
  proseBlock,
  finalCtaBlock,
]);
export type Block = z.infer<typeof blockSchema>;
export type BlockType = Block['type'];

export const pageSchema = z.object({
  route: z.string(),
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  sections: z.array(blockSchema),
});
export type Page = z.infer<typeof pageSchema>;

export const brandSchema = z.object({
  name: z.string(),
  wordmark: z.object({ text: z.string(), suffix: z.string() }),
  domain: z.string(),
  location: z.string(),
  blurb: z.string(),
  copyright: z.string(),
});
export type Brand = z.infer<typeof brandSchema>;

export const navItemSchema = z.object({ label: z.string(), href: z.string() });
export type NavItem = z.infer<typeof navItemSchema>;

export const siteSchema = z.object({
  nav: z.array(navItemSchema),
  headerCta: ctaSchema,
  footerNav: z.array(navItemSchema),
});
export type Site = z.infer<typeof siteSchema>;
