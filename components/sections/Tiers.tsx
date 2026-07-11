import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { Html } from '@/components/ui/Html';
import { Cta } from '@/components/ui/Cta';
import { IconCheck } from '@/components/icons';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'tiers' }>;

export function Tiers({ id, eyebrow, headingHtml, intro, tiers, note }: Data) {
  return (
    <Section id={id}>
      <SectionHead eyebrow={eyebrow} headingHtml={headingHtml} intro={intro} />
      <div className="grid gap-5 min-[901px]:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-lg p-[30px_28px] relative border ${
              tier.feature
                ? 'border-[rgba(242,169,59,0.4)] [background:linear-gradient(180deg,rgba(242,169,59,0.07),transparent_60%)]'
                : 'bg-surface border-line'
            }`}
          >
            {tier.flag ? (
              <span className="self-start font-display italic text-[15px] text-amber mb-2">
                {tier.flag}
              </span>
            ) : null}
            <span className="font-display text-[22px] font-semibold">{tier.name}</span>
            {tier.price ? (
              <div className="font-display font-bold text-[34px] text-ink mt-[10px] mb-1 tracking-[-0.02em]">
                {tier.price}
                {tier.priceNote ? (
                  <small className="text-[14px] text-muted-2 font-normal font-body">
                    {tier.priceNote}
                  </small>
                ) : null}
              </div>
            ) : null}
            <p className="text-[14.5px] text-muted-2 min-h-[44px] leading-[1.5]">{tier.desc}</p>
            {tier.features?.length ? (
              <ul className="list-none m-0 p-0 mt-4 flex flex-col gap-[10px]">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-[10px] text-[14.5px] text-muted leading-[1.5]">
                    <IconCheck className="w-[18px] h-[18px] text-amber shrink-0 mt-[2px]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <Cta cta={tier.cta} className="w-full justify-center mt-[18px]">
              {tier.cta.label}
            </Cta>
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
