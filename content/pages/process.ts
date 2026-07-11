import type { Page } from '../schema';

/** How it works (/how-it-works) — ported verbatim from demos/ayohdev/output/Process.html. */
export const process: Page = {
  route: '/how-it-works',
  meta: {
    title: 'Andrew Hewitt — How we work together',
    description:
      'The exact process for working with Andrew Hewitt: an AI-accelerated, repo-based playbook that turns your goals into a live, on-brand site — phase by phase, with you in the loop. Book an intro call.',
  },
  sections: [
    {
      type: 'hero',
      eyebrow: 'How we work together',
      headingHtml: 'A clear path from <em>messy idea to live site.</em>',
      sub: "No black boxes. I use an AI-accelerated, repo-based playbook that turns your goals into a real, on-brand website — in phases you can see, review, and sign off on. Here's exactly what that looks like.",
      ctas: [
        { label: 'Book an intro call', href: '/book', variant: 'primary' },
        { label: 'See the process', href: '#steps', variant: 'secondary' },
      ],
    },
    {
      type: 'photoStrip',
      sample: true,
      placeholders: [{ label: 'A working session together', hint: 'Add photo' }],
    },
    {
      type: 'steps',
      id: 'steps',
      eyebrow: 'The journey',
      headingHtml: 'Six phases, <em>you in the loop the whole way.</em>',
      intro:
        'Every phase ends with something you can look at and approve before we move on. You always know where things stand.',
      numbered: true,
      steps: [
        {
          title: 'Scope & intake',
          body: "A short call and a focused intake: your goals, your audience, what's locked and what's open. We agree on the one outcome that matters.",
          cols: [
            { k: 'You do', v: 'Answer a few plain-language questions on a quick call.' },
            { k: 'You get', v: 'A written intake summary and a clear plan — no jargon.' },
          ],
        },
        {
          title: 'Strategy & brand playbook',
          body: 'I turn the intake into positioning, your ideal customer, voice & tone, and a messaging framework — the backbone every page is written from.',
          cols: [
            { k: 'I do', v: 'Research, positioning, personas, and messaging pillars.' },
            { k: 'You get', v: 'A Brand Playbook you can reuse across everything.' },
          ],
        },
        {
          title: 'Design system',
          body: 'A locked set of colors, type, and components — accessible by default (WCAG AA), so every page looks consistent and on-brand.',
          cols: [
            { k: 'You do', v: 'Approve the look from a live visual preview.' },
            { k: 'You get', v: 'A design system + drop-in <code>theme.json</code>.' },
          ],
        },
        {
          title: 'Your site, built in the open',
          body: 'Pages are built in your system and shared as live preview links — you review real pages on real devices, not static mockups. Nothing goes live until you say so.',
          cols: [
            { k: 'You do', v: 'Click a preview link, leave comments, approve.' },
            { k: 'You get', v: 'A responsive, accessibility-checked website.' },
          ],
        },
        {
          title: 'Brand books & handoff',
          body: 'Everything gets packaged: a plain-language one-pager, the full playbook, the design system, and the deployable site. You own all of it.',
          cols: [
            { k: 'I do', v: 'Assemble the package and deployment notes.' },
            { k: 'You get', v: 'A complete, portable brand kit — no lock-in.' },
          ],
        },
        {
          title: 'Launch & grow',
          body: 'We ship it, then layer on what moves the needle — SEO, AI search visibility, content, and lead generation — as far as your tier goes.',
          cols: [
            { k: 'You do', v: 'Give the final go — and start getting found.' },
            { k: 'You get', v: 'A live site built to be seen and to convert.' },
          ],
        },
      ],
    },
    {
      type: 'expectationCards',
      id: 'expect',
      eyebrow: "What it's like to work with me",
      headingHtml: 'Senior, fast, <em>and refreshingly clear.</em>',
      cards: [
        {
          icon: 'bolt',
          title: 'AI-accelerated, not AI-sloppy',
          body: 'I pair senior judgment with an AI harness (Claude connected to your repo) — so you get agency-quality work in hours and days, not weeks.',
        },
        {
          icon: 'check',
          title: 'Phased, with real sign-offs',
          body: 'Each phase ends in something you review and approve. No surprises, no "big reveal" at the end that misses the mark.',
        },
        {
          icon: 'clock',
          title: 'Transparent pricing',
          body: 'Fixed prices you can see up front. Do it yourself, do it with me, or hand it off — you always know the cost before we start.',
        },
        {
          icon: 'shield',
          title: 'Accessible & you own it',
          body: 'Every page clears WCAG AA, and you leave with the full brand kit and code — portable, no lock-in.',
        },
      ],
    },
    {
      type: 'tiers',
      id: 'paths',
      eyebrow: 'Pick your level of hands-on',
      headingHtml: 'Three ways to <em>walk this path.</em>',
      intro: 'Same process — you choose how much of it you drive.',
      tiers: [
        {
          flag: 'Do it yourself',
          name: 'Brand Playbook DIY',
          price: '$500',
          desc: 'Self-paced modules: set up your own Claude, connect the repo, and run the phases yourself.',
          cta: { label: "See what's included", href: '/work', variant: 'secondary' },
        },
        {
          flag: 'Done with you',
          name: 'Build it together',
          price: 'From $1,200',
          desc: 'We run the phases side by side — setup, MVP or full site, and launch strategy. Tiered to your budget.',
          feature: true,
          cta: { label: 'See the tiers', href: '/work', variant: 'primary' },
        },
        {
          flag: 'Done for you',
          name: 'Hand it to me',
          price: "Let's talk",
          desc: 'I run the whole process end to end, tailored to your project — and scale up to YohDev when needed.',
          cta: { label: 'Book an intro call', href: '/book', variant: 'secondary' },
        },
      ],
    },
    {
      type: 'techStack',
      id: 'stack',
      eyebrow: 'The stack behind the work',
      headingHtml: 'Modern tools, <em>used with intent.</em>',
      intro:
        'The platforms I build on and around — chosen so your site is fast, findable, and ready for how people actually search now.',
      groups: [
        {
          label: 'AI & automation',
          items: ['Claude', 'Gemini', 'ChatGPT', 'AI models & harnesses'],
        },
        {
          label: 'Build & hosting',
          items: ['GitHub', 'Next.js', 'Vercel', 'Google Cloud', 'Google Workspace'],
        },
        {
          label: 'Growth, data & ops',
          items: [
            'SEO & AI Search Strategy',
            'Data & Analytics',
            'HubSpot',
            'Mailchimp',
            'ClickUp',
          ],
        },
      ],
    },
    {
      type: 'testimonials',
      id: 'testimonials',
      eyebrow: 'What people say',
      headingHtml: 'Trusted by teams <em>who ship.</em>',
      center: true,
      quotes: [
        {
          stars: 5,
          quoteHtml:
            '"Andrew turned a vague idea into a working, on-brand site faster than any agency we\'d talked to — and we actually understood every step."',
          name: 'Creative Director',
          role: 'Lenny J Media',
          sample: true,
        },
        {
          stars: 5,
          quoteHtml:
            '"Our go-to when we need senior overflow. Clear scope, no hand-holding, and the work just lands. It\'s rare."',
          name: 'Studio Lead',
          role: 'Affix Studios',
          sample: true,
        },
        {
          stars: 5,
          quoteHtml:
            '"He took a genuinely complex problem and gave us clean, working technology — plus a plan the whole team could follow."',
          name: 'Operations Director',
          role: 'Canter Power Systems',
          sample: true,
        },
      ],
      note: 'Sample quotes shown for layout — to be replaced with real, approved client testimonials before launch.',
    },
    {
      type: 'finalCta',
      id: 'book',
      eyebrow: "Let's talk",
      headingHtml: 'Ready to see this <em>run for your project?</em>',
      body: "Book a quick intro call. We'll talk through what you're building, which path fits, and the fastest way to a site that works.",
      cta: { label: 'Book an intro call', href: '/book' },
    },
  ],
};
