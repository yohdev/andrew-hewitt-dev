import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { iconMap, type IconName } from '@/components/icons';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'expectationCards' }>;

export function ExpectationCards({ id, eyebrow, headingHtml, intro, cards }: Data) {
  return (
    <Section id={id}>
      <SectionHead eyebrow={eyebrow} headingHtml={headingHtml} intro={intro} />
      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
        {cards.map((card) => {
          const Icon = card.icon ? iconMap[card.icon as IconName] : undefined;
          return (
            <div
              key={card.title}
              className="bg-surface border border-line rounded-lg p-[28px_26px]"
            >
              {Icon ? (
                <div className="w-11 h-11 rounded-md bg-amber-soft border border-[rgba(242,169,59,0.3)] flex items-center justify-center mb-4">
                  <Icon className="w-[22px] h-[22px] text-amber" />
                </div>
              ) : null}
              <h3 className="text-[19px] font-semibold mb-2">{card.title}</h3>
              <p className="text-muted text-[15px] leading-[1.6]">{card.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
