import { Section } from '@/components/ui/Section';
import { Html } from '@/components/ui/Html';
import { Stars } from '@/components/ui/Stars';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'quote' }>;

export function Quote({ id, stars, quoteHtml, who }: Data) {
  return (
    <Section id={id}>
      <div className="max-w-[820px] mx-auto text-center">
        {stars ? <Stars count={stars} /> : null}
        <Html
          as="blockquote"
          html={quoteHtml}
          className="m-0 font-display text-[clamp(21px,2.6vw,30px)] leading-[1.35] text-ink font-medium"
        />
        <Html as="p" html={who} className="prose-editorial mt-[18px] text-[15px] text-muted-2" />
      </div>
    </Section>
  );
}
