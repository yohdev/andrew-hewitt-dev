import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Html } from '@/components/ui/Html';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'prose' }>;

export function Prose({ id, eyebrow, headingHtml, bodyHtml, center }: Data) {
  return (
    <Section id={id}>
      <div className={`max-w-[var(--measure)] ${center ? 'mx-auto text-center' : ''}`}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        {headingHtml ? (
          <Html
            as="h2"
            html={headingHtml}
            className="heading-em text-[clamp(29px,4vw,44px)] font-semibold leading-[1.1] mt-2 mb-4"
          />
        ) : null}
        <Html as="div" html={bodyHtml} className="prose-editorial text-muted leading-[1.7]" />
      </div>
    </Section>
  );
}
