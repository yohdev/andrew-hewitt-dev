import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Cta } from '@/components/ui/Cta';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Andrew Hewitt — Design System',
  description:
    'The Andrew Hewitt design system: color, type, spacing, and components — the tokens every page is built from.',
  path: '/style-guide',
});

const colors: { name: string; token: string; value: string; onDark?: boolean }[] = [
  { name: 'Canvas', token: '--canvas', value: '#0E0B08' },
  { name: 'Surface', token: '--surface', value: '#181310' },
  { name: 'Surface 2', token: '--surface-2', value: '#221A14' },
  { name: 'Ink', token: '--ink', value: '#F8F3EB' },
  { name: 'Ink 2', token: '--ink-2', value: '#E7DDCE' },
  { name: 'Muted', token: '--muted', value: 'rgba(248,243,235,.74)' },
  { name: 'Amber', token: '--amber', value: '#F2A93B' },
  { name: 'Amber Bright', token: '--amber-bright', value: '#FFC873' },
  { name: 'Amber Deep', token: '--amber-deep', value: '#C67C18' },
  { name: 'On Amber', token: '--on-amber', value: '#1A1206' },
];

const typeScale: { label: string; cls: string; sample: string }[] = [
  {
    label: 'Display',
    cls: 'font-display font-semibold text-[clamp(40px,6.4vw,74px)]',
    sample: 'Display',
  },
  {
    label: 'H1',
    cls: 'font-display font-semibold text-[clamp(32px,5vw,52px)]',
    sample: 'Heading 1',
  },
  {
    label: 'H2',
    cls: 'font-display font-semibold text-[clamp(30px,4vw,46px)]',
    sample: 'Heading 2',
  },
  { label: 'H3', cls: 'font-display font-semibold text-[24px]', sample: 'Heading 3' },
  { label: 'Body', cls: 'font-body text-[17px]', sample: 'Body copy — Inter at 17px / 1.7.' },
  {
    label: 'Eyebrow',
    cls: 'font-display italic text-[19px] text-amber',
    sample: 'Eyebrow / label',
  },
];

const radii = [
  { name: 'sm', token: '--r-sm', px: 12 },
  { name: 'md', token: '--r-md', px: 18 },
  { name: 'lg', token: '--r-lg', px: 26 },
  { name: 'pill', token: '--r-pill', px: 999 },
];

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-[clamp(48px,7vw,80px)] border-t border-line">
      <h2 className="font-display text-[28px] font-semibold mb-8">{title}</h2>
      {children}
    </section>
  );
}

export default function StyleGuidePage() {
  return (
    <Container className="py-[clamp(48px,8vw,88px)]">
      <Eyebrow>Design System</Eyebrow>
      <h1 className="heading-em text-[clamp(32px,5vw,52px)] font-semibold mt-3 mb-4">
        Tokens &amp; <em>components.</em>
      </h1>
      <p className="text-muted text-[18px] max-w-[var(--measure)]">
        The single source of truth for the brand. These values live in{' '}
        <code>styles/tokens.css</code> and map to Tailwind utilities in <code>app/globals.css</code>
        . Re-skinning is a token change, nothing else.
      </p>

      <Block title="Color">
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(160px,1fr))]">
          {colors.map((c) => (
            <div key={c.token} className="rounded-lg overflow-hidden border border-line bg-surface">
              <div className="h-20" style={{ background: c.value }} />
              <div className="p-4">
                <div className="font-display font-semibold text-[15px]">{c.name}</div>
                <div className="font-mono text-[12px] text-muted-2 mt-1">{c.token}</div>
                <div className="font-mono text-[12px] text-muted-2">{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Typography">
        <div className="flex flex-col gap-6">
          {typeScale.map((t) => (
            <div
              key={t.label}
              className="grid grid-cols-[120px_1fr] gap-6 items-baseline border-b border-line pb-6"
            >
              <div className="font-mono text-[12px] text-muted-2 uppercase tracking-[0.08em]">
                {t.label}
              </div>
              <div className={t.cls}>{t.sample}</div>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Radii">
        <div className="flex flex-wrap gap-6">
          {radii.map((r) => (
            <div key={r.name} className="text-center">
              <div
                className="w-24 h-24 bg-amber-soft border border-[rgba(242,169,59,0.4)]"
                style={{ borderRadius: `var(${r.token})` }}
              />
              <div className="font-mono text-[12px] text-muted-2 mt-2">
                {r.token} · {r.px}px
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Buttons">
        <div className="flex flex-wrap gap-4 items-center">
          <Cta cta={{ label: 'Primary', href: '#', variant: 'primary' }} />
          <Cta cta={{ label: 'Emphasis', href: '#', variant: 'emphasis' }} />
          <Cta cta={{ label: 'Secondary', href: '#', variant: 'secondary' }} />
        </div>
      </Block>
    </Container>
  );
}
