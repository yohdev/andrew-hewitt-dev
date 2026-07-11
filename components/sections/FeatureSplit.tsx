import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Html } from '@/components/ui/Html';
import { Cta } from '@/components/ui/Cta';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'featureSplit' }>;

export function FeatureSplit({ id, eyebrow, headingHtml, image, bodyHtml, cta }: Data) {
  return (
    <Section id={id}>
      <div className="grid gap-[clamp(28px,5vw,56px)] items-center min-[721px]:grid-cols-2">
        <div className="max-[720px]:order-2">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          {headingHtml ? (
            <Html
              as="h2"
              html={headingHtml}
              className="heading-em text-[clamp(29px,4vw,44px)] font-semibold leading-[1.1] mt-2 mb-4"
            />
          ) : null}
          <Html as="div" html={bodyHtml} className="prose-editorial text-muted leading-[1.7]" />
          {cta ? (
            <div className="mt-6">
              <Cta cta={cta}>{cta.label}</Cta>
            </div>
          ) : null}
        </div>
        <div className="max-[720px]:order-1">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width ?? 1200}
            height={image.height ?? 800}
            loading="lazy"
            sizes="(max-width: 720px) 100vw, 540px"
            className="w-full aspect-[3/2] object-cover rounded-lg border border-line-2"
          />
        </div>
      </div>
    </Section>
  );
}
