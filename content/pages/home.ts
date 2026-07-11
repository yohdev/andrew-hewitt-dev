import type { Page } from '../schema';

/**
 * Home (/) — ported verbatim from demos/ayohdev/output/Homepage.html.
 * Copy is preserved exactly; no invented content.
 */
export const home: Page = {
  route: '/',
  meta: {
    title: 'Andrew Hewitt — Hire a senior builder, at a price that fits',
    description:
      'I help small businesses and founders turn messy ideas into clean, working software — working with me directly, in clear fixed-price tiers. Book a call with Andrew Hewitt.',
  },
  sections: [
    {
      type: 'hero',
      eyebrow: 'Builder, CEO & hands-on engineer',
      headingHtml: 'Hire a senior builder, <em>at a price that fits.</em>',
      sub: "I help small businesses and founders turn messy ideas into clean, working software — without the overhead of a full agency. You work with me directly, in clear fixed-price tiers, and pay only for the stage you're on.",
      ctas: [
        { label: 'Book a call', href: '/book', variant: 'primary' },
        { label: 'See how we can work together', href: '/work', variant: 'secondary' },
      ],
      trustHtml:
        "<b>10+ years</b> in business · enterprise development experience · a sales &amp; marketing background most engineers don't have.",
      photo: { src: '/assets/headshot.jpg', alt: 'Andrew Hewitt', width: 640, height: 800 },
      badge: { n: '70%', l: 'YoY top-line growth' },
    },
    {
      type: 'audienceCards',
      id: 'who',
      eyebrow: "Who it's for",
      headingHtml: 'For the people <em>priced out of agencies.</em>',
      intro:
        "If you need senior help but don't need — or can't yet justify — a full agency, this is built for you.",
      cards: [
        {
          title: 'Small-business owners',
          items: [
            'You need a site or software fixed, rebuilt, or grown',
            "You got quoted agency prices you can't justify",
            'You want it explained in plain English, no talking down',
            'You move fast once you trust the person',
          ],
        },
        {
          title: 'Early & solo founders',
          items: [
            "You've got an idea and a real but limited budget",
            'You need a first version and a plan you can grow into',
            'You want senior judgment, not a big roster',
            'You value strategy, not just someone who writes code',
          ],
        },
      ],
      note: '<strong>Something bigger?</strong> If you\'re a business or enterprise with a larger build, book a call — we\'ll find the right approach, which may mean bringing in my agency, <a href="https://yohdev.com">YohDev</a>, for full-team scale.',
    },
    {
      type: 'steps',
      id: 'process',
      eyebrow: 'How it works',
      headingHtml: 'A clear path, <em>no black boxes.</em>',
      intro: 'An AI-accelerated, phase-by-phase process you can see and sign off on at every step.',
      numbered: true,
      steps: [
        {
          title: 'We scope it',
          body: 'A short call and a plain-language intake pin down the one outcome that matters.',
        },
        {
          title: 'We build it',
          body: 'Strategy, brand, and your site — built in your system, reviewed on live previews.',
        },
        {
          title: 'You launch & grow',
          body: 'We ship it, then layer on SEO, AI visibility, and lead generation.',
        },
      ],
      moreLink: { label: 'See the full process →', href: '/how-it-works' },
    },
    {
      type: 'tiers',
      id: 'ways',
      eyebrow: 'Ways to work together',
      headingHtml: 'Pick your level of <em>hands-on.</em>',
      intro: 'Do it yourself, do it with me, or hand it off. Start wherever you are.',
      tiers: [
        {
          name: 'Do it yourself',
          desc: 'The Brand Playbook, DIY — self-paced modules you run on your own, at your pace.',
          cta: { label: "What's included", href: '/work', variant: 'secondary' },
        },
        {
          flag: 'Where most start',
          name: 'Done with you',
          desc: 'We build it together — setup, MVP or full website, and the launch strategy.',
          feature: true,
          cta: { label: 'See how we work →', href: '/work', variant: 'primary' },
        },
        {
          name: 'Done for you',
          desc: 'Hand it to me — I scope and build it end to end, tailored to your project.',
          cta: { label: 'Book an intro call', href: '/book', variant: 'secondary' },
        },
      ],
    },
    {
      type: 'stats',
      id: 'proof',
      eyebrow: 'Proof',
      headingHtml: 'Real work, <em>real numbers.</em>',
      center: true,
      stats: [
        { big: '70%', cap: 'Top-line revenue growth, year over year' },
        { big: '10+', cap: 'Years in business' },
        { big: "Who's Who", cap: "Marquis Who's Who honoree" },
      ],
    },
    {
      type: 'logos',
      label: 'Trusted by teams & studios including',
      logos: [
        'The Variable',
        'WizKid Creative',
        'Affix Studios',
        'PACE Communications',
        'Sway Creative',
        'Bonfire LA',
        'CRASH Creative',
      ],
    },
    {
      type: 'talks',
      id: 'talks',
      eyebrow: 'Talks & videos',
      headingHtml: 'Straight talk on <em>AI, the web, and shipping.</em>',
      talks: [
        {
          href: 'https://youtu.be/DdATpZTFWls',
          thumb: '/assets/talks/DdATpZTFWls.jpg',
          title: 'Why 95% of AI Projects Fail — and What AI Readiness Actually Means',
          alt: 'Andrew Hewitt talk: Why 95% of AI projects fail',
        },
        {
          href: 'https://youtu.be/no7isEEE1ps',
          thumb: '/assets/talks/no7isEEE1ps.jpg',
          title: 'Why Legacy Sites Lose in AI Search: AEO, AI Readiness & the Modern Stack',
          alt: 'Andrew Hewitt talk: Why legacy sites lose in AI search',
        },
        {
          href: 'https://youtu.be/ibwYq-iXZuI',
          thumb: '/assets/talks/ibwYq-iXZuI.jpg',
          title: 'Before You Deploy AI: 3 Questions Every CEO Must Answer',
          alt: 'Andrew Hewitt talk: Before you deploy AI',
        },
      ],
      moreLink: { label: 'More about Andrew & his talks →', href: '/about' },
    },
    {
      type: 'photoStrip',
      id: 'inroom',
      eyebrow: 'In the room',
      headingHtml: 'More than a <em>screen name.</em>',
      sample: true,
      placeholders: [
        { label: 'Speaking on stage', hint: 'Add photo' },
        { label: 'Networking at Dev Connect', hint: 'Add photo' },
        { label: 'Leading a workshop', hint: 'Add photo' },
      ],
      moreLink: { label: 'See more on About →', href: '/about' },
    },
    {
      type: 'quote',
      id: 'quote',
      stars: 5,
      quoteHtml:
        '"Andrew turned a vague idea into a working, on-brand site faster than any agency we\'d talked to — and we actually understood every step."',
      who: 'Creative Director, Lenny J Media · <a href="/about">read more →</a>',
    },
    {
      type: 'finalCta',
      id: 'book',
      eyebrow: "Let's talk",
      headingHtml: "Tell me the messy idea. <em>I'll help you ship it.</em>",
      body: "Book a quick call and we'll figure out which path fits — or whether you need something bigger. No pressure, no jargon.",
      cta: { label: 'Book a call', href: '/book' },
    },
  ],
};
