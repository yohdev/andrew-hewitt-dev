import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Html } from '@/components/ui/Html';
import { Cta } from '@/components/ui/Cta';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'finalCta' }>;

export function FinalCta({ id, eyebrow, headingHtml, body, cta }: Data) {
  return (
    <section
      id={id}
      className="py-[clamp(72px,10vw,124px)] text-center border-t border-line"
      style={{
        background:
          'radial-gradient(900px 420px at 50% -10%, rgba(242,169,59,.12), transparent 60%)',
      }}
    >
      <Container>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Html
          as="h2"
          html={headingHtml}
          className="heading-em text-[clamp(32px,5vw,56px)] font-semibold leading-[1.06] tracking-[-0.02em] max-w-[760px] mx-auto mt-3 mb-4"
        />
        <p className="text-muted text-[19px] max-w-[540px] mx-auto mb-8 leading-[1.6]">{body}</p>
        <Cta cta={{ ...cta, variant: cta.variant ?? 'primary' }} className="text-[16px] px-8 py-4">
          {cta.label} <span aria-hidden="true">→</span>
        </Cta>
      </Container>
    </section>
  );
}
