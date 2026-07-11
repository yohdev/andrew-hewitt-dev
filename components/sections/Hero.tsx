import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Html } from '@/components/ui/Html';
import { Cta } from '@/components/ui/Cta';
import type { Block } from '@/content/schema';

type HeroData = Extract<Block, { type: 'hero' }>;

export function Hero(props: HeroData) {
  const { eyebrow, headingHtml, sub, ctas, trustHtml, photo, badge } = props;
  const hasPhoto = Boolean(photo);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'radial-gradient(1100px 520px at 78% -8%, rgba(242,169,59,.10), transparent 62%)',
      }}
    >
      <Container
        className={`grid gap-[clamp(32px,6vw,72px)] items-center pt-[clamp(56px,9vw,104px)] pb-[clamp(48px,7vw,88px)] ${
          hasPhoto ? 'min-[901px]:grid-cols-[1.15fr_0.85fr]' : ''
        }`}
      >
        <div className={hasPhoto ? 'order-2 min-[901px]:order-1' : 'max-w-[720px]'}>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <Html
            as="h1"
            html={headingHtml}
            className="heading-em text-[clamp(40px,6.4vw,74px)] font-semibold leading-[1.04] tracking-[-0.02em] mt-[18px] mb-6"
          />
          {sub ? (
            <p className="text-[clamp(17px,1.5vw,20px)] text-muted max-w-[520px] leading-[1.65]">
              {sub}
            </p>
          ) : null}
          {ctas.length ? (
            <div className="flex gap-[14px] flex-wrap mt-[34px]">
              {ctas.map((cta) => (
                <Cta key={cta.label} cta={cta}>
                  {cta.variant === 'primary' ? (
                    <>
                      {cta.label} <span aria-hidden="true">→</span>
                    </>
                  ) : (
                    cta.label
                  )}
                </Cta>
              ))}
            </div>
          ) : null}
          {trustHtml ? (
            <Html
              as="p"
              html={trustHtml}
              className="prose-editorial mt-7 text-[14.5px] text-muted-2 max-w-[460px]"
            />
          ) : null}
        </div>

        {photo ? (
          <div className="relative justify-self-center w-full max-w-[420px] order-1 min-[901px]:order-2">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width ?? 640}
              height={photo.height ?? 800}
              priority
              sizes="(max-width: 900px) 80vw, 420px"
              className="w-full aspect-[4/5] max-h-[560px] object-cover rounded-lg border border-line-2"
            />
            {badge ? (
              <div className="absolute -left-4 bottom-6 bg-surface border border-line-2 rounded-md px-[18px] py-[14px] shadow-[0_16px_36px_rgba(0,0,0,0.45)]">
                <div className="font-display font-bold text-[26px] text-amber leading-none">
                  {badge.n}
                </div>
                <div className="text-[12px] text-muted-2 mt-1">{badge.l}</div>
              </div>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
