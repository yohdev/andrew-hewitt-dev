import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'stats' }>;

export function Stats({ id, eyebrow, headingHtml, center, stats }: Data) {
  return (
    <Section id={id}>
      <SectionHead eyebrow={eyebrow} headingHtml={headingHtml} center={center} />
      <div className="grid gap-[22px] min-[721px]:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.cap}
            className="text-center bg-surface border border-line rounded-lg p-[36px_22px]"
          >
            <div className="font-display font-bold text-[clamp(32px,4.4vw,50px)] text-amber tracking-[-0.02em]">
              {stat.big}
            </div>
            <div className="text-[15px] text-muted mt-2 leading-[1.5]">{stat.cap}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
