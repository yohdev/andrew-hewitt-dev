import { Section } from '@/components/ui/Section';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'logos' }>;

export function Logos({ id, label, logos }: Data) {
  return (
    <Section id={id} leading={false} className="!pt-0">
      <p className="text-center font-display italic text-[17px] text-muted mb-6">{label}</p>
      <div className="flex flex-wrap justify-center gap-[14px]">
        {logos.map((logo) => (
          <span
            key={logo}
            className="font-display font-medium text-[16px] text-muted bg-surface border border-line rounded-pill px-6 py-3"
          >
            {logo}
          </span>
        ))}
      </div>
    </Section>
  );
}
