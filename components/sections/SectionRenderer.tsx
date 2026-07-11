import type { Block, BlockType } from '@/content/schema';
import { Hero } from './Hero';
import { AudienceCards } from './AudienceCards';
import { Steps } from './Steps';
import { Tiers } from './Tiers';
import { Stats } from './Stats';
import { Logos } from './Logos';
import { Talks } from './Talks';
import { PhotoStrip } from './PhotoStrip';
import { Quote } from './Quote';
import { Testimonials } from './Testimonials';
import { TechStack } from './TechStack';
import { ExpectationCards } from './ExpectationCards';
import { FeatureSplit } from './FeatureSplit';
import { BookingEmbed } from './BookingEmbed';
import { Prose } from './Prose';
import { FinalCta } from './FinalCta';

/**
 * Block registry: content block `type` -> section component. Adding a new block
 * means adding a schema variant (content/schema.ts), a component, and one line
 * here. The `satisfies` clause guarantees every BlockType is covered.
 */
const registry = {
  hero: Hero,
  audienceCards: AudienceCards,
  steps: Steps,
  tiers: Tiers,
  stats: Stats,
  logos: Logos,
  talks: Talks,
  photoStrip: PhotoStrip,
  quote: Quote,
  testimonials: Testimonials,
  techStack: TechStack,
  expectationCards: ExpectationCards,
  featureSplit: FeatureSplit,
  bookingEmbed: BookingEmbed,
  prose: Prose,
  finalCta: FinalCta,
} satisfies Record<BlockType, React.ComponentType<never>>;

export function SectionRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        // Each concrete component accepts its own block variant; the registry is
        // keyed by the discriminant so this dispatch is type-safe at the callsite.
        const Component = registry[block.type] as React.ComponentType<Block>;
        return <Component key={block.id ?? `${block.type}-${i}`} {...block} />;
      })}
    </>
  );
}
