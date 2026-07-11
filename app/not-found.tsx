import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Cta } from '@/components/ui/Cta';

export default function NotFound() {
  return (
    <section className="py-[clamp(72px,12vw,140px)] text-center">
      <Container>
        <Eyebrow>404</Eyebrow>
        <h1 className="heading-em text-[clamp(32px,5vw,56px)] font-semibold mt-3 mb-4">
          This page went <em>off-script.</em>
        </h1>
        <p className="text-muted text-[18px] max-w-[480px] mx-auto mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get you back on track.
        </p>
        <Cta cta={{ label: 'Back home', href: '/', variant: 'primary' }} />
      </Container>
    </section>
  );
}
