import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { SectionHead } from '@/components/ui/SectionHead';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { IconPlay } from '@/components/icons';
import type { Block } from '@/content/schema';

type Data = Extract<Block, { type: 'talks' }>;

export function Talks({ id, eyebrow, headingHtml, talks, moreLink }: Data) {
  return (
    <Section id={id}>
      <SectionHead eyebrow={eyebrow} headingHtml={headingHtml} center />
      <div className="grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(270px,1fr))]">
        {talks.map((talk) => (
          <a
            key={talk.href}
            href={talk.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-surface border border-line rounded-lg overflow-hidden text-inherit transition-transform duration-200 hover:-translate-y-[3px] hover:border-amber"
          >
            <div className="relative aspect-[16/9] bg-surface-2">
              <Image
                src={talk.thumb}
                alt={talk.alt ?? talk.title}
                width={480}
                height={270}
                loading="lazy"
                sizes="(max-width: 700px) 100vw, 360px"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-[58px] h-[58px] rounded-pill bg-[rgba(14,11,8,0.55)] border border-[rgba(248,243,235,0.35)] flex items-center justify-center backdrop-blur-[2px] transition-all duration-200 group-hover:bg-amber group-hover:border-amber">
                  <IconPlay className="w-[22px] h-[22px] text-ink ml-[3px] group-hover:text-on-amber" />
                </span>
              </div>
            </div>
            <div className="p-[22px_24px] flex flex-col gap-3 flex-1">
              <div className="font-display font-semibold text-[17px] leading-[1.3] text-ink">
                {talk.title}
              </div>
              <span className="text-[13.5px] text-amber-bright font-semibold mt-auto">
                Watch on YouTube →
              </span>
            </div>
          </a>
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
