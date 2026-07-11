import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { Html } from '@/components/ui/Html';
import { ArrowLink } from '@/components/ui/ArrowLink';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'steps' }>;

export function Steps({ id, eyebrow, headingHtml, intro, numbered, steps, moreLink }: Data) {
  return (
    <Section id={id}>
      <SectionHead eyebrow={eyebrow} headingHtml={headingHtml} intro={intro} />
      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {steps.map((step, i) => (
          <div key={step.title} className="bg-surface border border-line rounded-lg p-[28px_26px]">
            {numbered ? (
              <div className="w-10 h-10 rounded-pill bg-amber-soft border border-[rgba(242,169,59,0.3)] flex items-center justify-center font-display font-bold text-amber mb-4">
                {i + 1}
              </div>
            ) : null}
            <h3 className="text-[19px] font-semibold mb-2">{step.title}</h3>
            <Html as="p" html={step.body} className="text-muted text-[15px] leading-[1.6]" />
            {step.cols?.length ? (
              <dl className="mt-4 grid gap-3 border-t border-line pt-4">
                {step.cols.map((col) => (
                  <div key={col.k} className="grid grid-cols-[90px_1fr] gap-3 items-start">
                    <dt className="font-display italic text-[13px] text-amber">{col.k}</dt>
                    <Html
                      as="dd"
                      html={col.v}
                      className="m-0 text-[14px] text-muted leading-[1.5]"
                    />
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        ))}
      </div>
      {moreLink ? (
        <div className="mt-[26px]">
          <ArrowLink href={moreLink.href}>{moreLink.label}</ArrowLink>
        </div>
      ) : null}
    </Section>
  );
}
