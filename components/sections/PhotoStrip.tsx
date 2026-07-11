import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { IconCamera } from '@/components/icons';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'photoStrip' }>;

/**
 * Labeled photo placeholders — dashed slots marking where real photos go.
 * TODO(pre-launch): replace each placeholder with a real <Image> (see the
 * source README's "photo placeholders" note).
 */
export function PhotoStrip({ id, eyebrow, headingHtml, intro, placeholders, moreLink }: Data) {
  const single = placeholders.length === 1;
  return (
    <Section id={id}>
      <SectionHead eyebrow={eyebrow} headingHtml={headingHtml} intro={intro} center />
      <div
        className={
          single
            ? 'grid'
            : 'grid gap-4 min-[681px]:grid-cols-3 max-[680px]:max-w-[420px] max-[680px]:mx-auto'
        }
      >
        {placeholders.map((ph) => (
          <div
            key={ph.label}
            className={`flex flex-col items-center justify-center text-center gap-2 bg-surface border border-dashed border-[rgba(242,169,59,0.4)] rounded-lg text-muted-2 p-5 ${
              single ? 'aspect-[16/6]' : 'aspect-[4/3]'
            }`}
          >
            <IconCamera className="w-[30px] h-[30px] text-amber opacity-85" />
            <span className="font-display italic text-[14.5px] text-muted">{ph.label}</span>
            <span className="text-[11px] tracking-[0.08em] uppercase text-muted-2">{ph.hint}</span>
          </div>
        ))}
      </div>
      {moreLink ? (
        <div className="mt-[26px] text-center">
          <ArrowLink href={moreLink.href}>{moreLink.label}</ArrowLink>
        </div>
      ) : null}
    </Section>
  );
}
