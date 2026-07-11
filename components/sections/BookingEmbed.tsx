import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Html } from '@/components/ui/Html';
import { Cta } from '@/components/ui/Cta';
import { IconCamera } from '@/components/icons';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'bookingEmbed' }>;

/**
 * Booking step. In this scaffold the source has no real scheduler embed — it's a
 * CTA to the external booking URL (NEXT_PUBLIC_BOOKING_URL, via the @booking
 * sentinel). To go live, either keep the CTA pointed at a scheduler or drop a
 * real embed (Calendly/cal.com) in place of the card body.
 */
export function BookingEmbed({ id, eyebrow, headingHtml, intro, cta, note, photo }: Data) {
  return (
    <Section id={id}>
      <div className="max-w-[720px] mx-auto grid gap-6 min-[721px]:grid-cols-2 items-center bg-surface border border-line rounded-lg p-[clamp(24px,4vw,40px)]">
        <div>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          {headingHtml ? (
            <Html
              as="h2"
              html={headingHtml}
              className="heading-em text-[24px] font-semibold mb-3"
            />
          ) : null}
          {intro ? <p className="text-muted leading-[1.6] mb-5">{intro}</p> : null}
          <Cta cta={cta}>
            {cta.label} <span aria-hidden="true">→</span>
          </Cta>
          {note ? (
            <Html as="p" html={note} className="prose-editorial mt-4 text-[14.5px] text-muted-2" />
          ) : null}
        </div>
        {photo ? (
          <div className="flex flex-col items-center justify-center text-center gap-2 aspect-[16/9] bg-surface-2 border border-dashed border-[rgba(242,169,59,0.4)] rounded-md text-muted-2 p-5">
            {/* TODO(pre-launch): replace with a real <Image> — see source README. */}
            <IconCamera className="w-[30px] h-[30px] text-amber opacity-85" />
            <span className="font-display italic text-[14.5px] text-muted">{photo.label}</span>
            <span className="text-[11px] tracking-[0.08em] uppercase text-muted-2">
              {photo.hint}
            </span>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
