import type { Page } from '../schema';

/** Work with me (/work) — ported verbatim from demos/ayohdev/output/Work.html. */
export const work: Page = {
  route: '/work',
  meta: {
    title: 'Andrew Hewitt — Work with me',
    description:
      'Three clear ways to work with Andrew Hewitt: do it yourself, done with you, or done for you. Pick how hands-on you want me to be — and start where you are.',
  },
  sections: [
    {
      type: 'hero',
      eyebrow: 'Work with me',
      headingHtml: 'Three ways to work together, <em>one clear path.</em>',
      sub: 'You pick how hands-on I am. Run the playbook yourself, build it together with me, or hand the whole thing off — the work is the same senior standard either way, and you only pay for the level you need.',
      ctas: [
        { label: 'Book a call', href: '/book', variant: 'primary' },
        { label: 'How it works', href: '/how-it-works', variant: 'secondary' },
      ],
    },
    {
      type: 'tiers',
      id: 'paths',
      eyebrow: 'Ways to work together',
      headingHtml: 'Pick your level of <em>hands-on.</em>',
      intro:
        'Every path runs the same playbook. The only difference is how much of it I do with you — or for you.',
      tiers: [
        {
          name: 'Do it yourself',
          price: '$500',
          priceNote: ' · Brand Playbook DIY',
          desc: 'Run the whole playbook yourself, at your pace.',
          features: [
            'Step-by-step build modules',
            'Set up your own Claude',
            'Connect it to the repo',
            'Your brand + site, built by you',
            'Best for hands-on founders on a tight budget',
          ],
          cta: { label: 'Book a call', href: '/book', variant: 'secondary' },
        },
        {
          flag: 'Where most start',
          name: 'Done with you',
          price: 'From $1,200',
          desc: 'We build it together, guided by me.',
          feature: true,
          features: [
            'Everything in DIY, guided live',
            'Setup + dev workflow done right',
            'MVP or full website implementation',
            'Launch + lead-gen strategy',
            'Three tiers below to fit your budget',
          ],
          cta: { label: 'See the tiers', href: '#tiers', variant: 'primary' },
        },
        {
          name: 'Done for you',
          price: "Let's talk",
          desc: 'Hand it off — I run it end to end.',
          features: [
            'Full implementation & strategy',
            'Tailored to your goals + timeline',
            'I scope, build, and launch it',
            'Scales up to YohDev when needed',
            'Starts with an intro call',
          ],
          cta: { label: 'Book an intro call', href: '/book', variant: 'secondary' },
        },
      ],
    },
    {
      type: 'tiers',
      id: 'tiers',
      eyebrow: 'Done-with-you tiers',
      headingHtml: 'Three stages — <em>start where you are.</em>',
      intro: 'Each tier includes everything before it.',
      tiers: [
        {
          name: 'Foundations',
          price: '$1,200',
          desc: 'Get clear on brand, message, and design before you build.',
          features: [
            'Brand + marketing strategy playbook',
            'Mock web design',
            'A clear next-step roadmap',
          ],
          cta: { label: 'Book a call', href: '/book', variant: 'secondary' },
        },
        {
          flag: 'Most popular',
          name: 'Launch',
          price: '$3,600',
          desc: 'Everything you need to go live and start bringing in leads.',
          feature: true,
          features: [
            'Everything in Foundations',
            'Dev workflow set up',
            'Live website, up to 10 pages',
            'Lead generation built in',
          ],
          cta: { label: 'Book a call', href: '/book', variant: 'primary' },
        },
        {
          name: 'Growth',
          price: '$5,000',
          priceNote: ' – $8,000',
          desc: 'Get found, get seen, and elevate the experience.',
          features: [
            'Everything in Launch',
            'SEO + AI visibility',
            'Content strategy & workflows',
            'Video & animation',
            'Advanced UX phase, tailored',
          ],
          cta: { label: 'Book a call', href: '/book', variant: 'secondary' },
        },
      ],
      note: '<strong>Bigger than Growth?</strong> That\'s a done-for-you build — book an intro call and we\'ll shape the right approach and cost, bringing in <a href="https://yohdev.com">YohDev</a> for full-agency scale.',
    },
    {
      type: 'finalCta',
      id: 'book',
      eyebrow: "Let's talk",
      headingHtml: "Not sure which fits? <em>Let's figure it out.</em>",
      body: "Book a quick call and we'll match your goals and budget to the right path — no pressure, no jargon.",
      cta: { label: 'Book a call', href: '/book' },
    },
  ],
};
