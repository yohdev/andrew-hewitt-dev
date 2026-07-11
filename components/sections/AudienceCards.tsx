import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { Html } from '@/components/ui/Html';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'audienceCards' }>;

export function AudienceCards({ id, eyebrow, headingHtml, intro, cards, note }: Data) {
  return (
    <Section id={id}>
      <SectionHead eyebrow={eyebrow} headingHtml={headingHtml} intro={intro} />
      <div className="grid gap-[22px] min-[721px]:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className="bg-surface border border-line rounded-lg p-[34px_32px]">
            <h3 className="text-[24px] font-semibold mb-4">{card.title}</h3>
            <ul className="m-0 p-0 list-none flex flex-col gap-3">
              {card.items.map((item) => (
                <li
                  key={item}
                  className="relative pl-[26px] text-[15.5px] text-muted leading-[1.55] before:content-[''] before:absolute before:left-[2px] before:top-[11px] before:w-[9px] before:h-[9px] before:rounded-pill before:bg-amber before:opacity-85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {note ? (
        <Html
          as="div"
          html={note}
          className="prose-editorial mt-6 bg-amber-soft border border-[rgba(242,169,59,0.22)] rounded-md p-[22px_26px] text-[16px] text-ink-2 leading-[1.6]"
        />
      ) : null}
    </Section>
  );
}
