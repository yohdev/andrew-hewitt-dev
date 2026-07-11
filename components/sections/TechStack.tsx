import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'techStack' }>;

export function TechStack({ id, eyebrow, headingHtml, intro, groups }: Data) {
  return (
    <Section id={id}>
      <SectionHead eyebrow={eyebrow} headingHtml={headingHtml} intro={intro} />
      <div className="grid gap-[22px] min-[721px]:grid-cols-3">
        {groups.map((group) => (
          <div key={group.label} className="bg-surface border border-line rounded-lg p-[28px_26px]">
            <div className="font-display italic text-[15px] text-amber mb-4">{group.label}</div>
            <div className="flex flex-wrap gap-[10px]">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-body text-[14px] text-muted bg-surface-2 border border-line rounded-pill px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
