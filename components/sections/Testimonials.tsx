import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { Html } from '@/components/ui/Html';
import { Stars } from '@/components/ui/Stars';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'testimonials' }>;

export function Testimonials({ id, eyebrow, headingHtml, center, quotes, note }: Data) {
  return (
    <Section id={id}>
      <SectionHead eyebrow={eyebrow} headingHtml={headingHtml} center={center} />
      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {quotes.map((q) => (
          <figure
            key={`${q.name}-${q.role}`}
            className="m-0 flex flex-col bg-surface border border-line rounded-lg p-[30px_28px]"
          >
            {q.stars ? <Stars count={q.stars} /> : null}
            <Html
              as="blockquote"
              html={q.quoteHtml}
              className="m-0 text-[16px] text-ink-2 leading-[1.55]"
            />
            <figcaption className="mt-4 text-[14px] text-muted-2">
              <span className="text-ink font-semibold">{q.name}</span> · {q.role}
            </figcaption>
          </figure>
        ))}
      </div>
      {note ? (
        <p className="mt-6 text-center font-display italic text-[14px] text-muted-2">{note}</p>
      ) : null}
    </Section>
  );
}
