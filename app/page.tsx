'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

/* ─── Timeline Data ─── */

const timeline = [
  {
    year: 'Pre-2016',
    tag: 'Sales Leadership',
    title: 'District Sales Manager — 130% YoY Growth',
    description:
      'Led sales at a fast-growing cement company, hitting 130% year-over-year growth. Learned how to move fast, build relationships, and deliver results — skills that carried into everything that came next.',
    images: [
      { src: '/images/sales-1.jpg', alt: 'Sales team era' },
      { src: '/images/sales-2.jpg', alt: 'On the road' },
    ],
  },
  {
    year: '2016',
    tag: 'Career Pivot',
    title: 'Freelancer & Nonprofit Marketing',
    description:
      'Left corporate sales to go independent. Picked up freelance development and marketing work for organizations like the Center for Creative Economy, learning the craft from the ground up.',
    images: [
      { src: '/images/freelance-1.jpg', alt: 'Freelance days' },
      { src: '/images/freelance-2.jpg', alt: 'Nonprofit work' },
    ],
  },
  {
    year: '2017–2018',
    tag: 'Entrepreneurship',
    title: 'Startup Lessons & Finding My Niche',
    description:
      'The years of hard-won lessons. Failed partnerships, dead-end startup ideas, and the slow realization that my edge was in execution — not chasing trends. Every failure sharpened the focus.',
    images: [
      { src: '/images/startup-1.jpg', alt: 'Early startup days' },
    ],
  },
  {
    year: '2019',
    tag: 'Founder',
    title: 'Founded YohDev',
    description:
      'Started YohDev with a clear focus: technology and web development for agencies and growing businesses. No more side quests — just shipping real software for real clients.',
    images: [
      { src: '/images/yohdev-founded-1.jpg', alt: 'YohDev launch' },
      { src: '/images/yohdev-founded-2.jpg', alt: 'First client work' },
    ],
  },
  {
    year: '2019–2023',
    tag: 'Engineering',
    title: 'Lead Software Engineer',
    description:
      'Contracted through TEKsystems as lead engineer, delivering production systems for StateFarm, PACE Communications, and more — while building YohDev in parallel.',
    images: [
      { src: '/images/engineering-1.jpg', alt: 'Engineering work' },
      { src: '/images/engineering-2.jpg', alt: 'Team collaboration' },
    ],
  },
  {
    year: '2025',
    tag: 'Recognition',
    title: "Marquis Who's Who",
    description:
      "Selected by Marquis Who's Who for professional achievement and contribution to the tech community. A milestone that validated the unconventional path.",
    images: [
      { src: '/images/marquis-1.jpg', alt: "Marquis Who's Who recognition" },
    ],
  },
  {
    year: 'Now',
    tag: 'Growth',
    title: 'Scaling YohDev',
    description:
      'Building a leadership team, deepening agency partnerships, and focusing on business development. Moving from doing the work to building the machine that does the work.',
    images: [
      { src: '/images/scaling-1.jpg', alt: 'YohDev team' },
      { src: '/images/scaling-2.jpg', alt: 'Partnership meeting' },
      { src: '/images/scaling-3.jpg', alt: 'YohDev growth' },
    ],
  },
];

type TimelineEntry = (typeof timeline)[0];
type ModalState = { images: TimelineEntry['images']; index: number } | null;

/* ─── Image Modal ─── */

function ImageModal({
  modal,
  onClose,
  onPrev,
  onNext,
}: {
  modal: NonNullable<ModalState>;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = modal.images[modal.index];
  const total = modal.images.length;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
        aria-label="Close"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {total > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      <div className="relative max-w-5xl max-h-[85vh] mx-4 sm:mx-16" onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg p-4">
          <p className="text-white text-sm">{img.alt}</p>
          {total > 1 && <p className="text-gray-400 text-xs mt-1">{modal.index + 1} of {total}</p>}
        </div>
      </div>
      {total > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

/* ─── Scroll-Jacking Timeline ─── */

/* ─── Story Section ─── */

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function AnimatedCounter({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl sm:text-5xl font-bold text-accent tabular-nums">
        {count}{suffix}
      </p>
      <p className="text-gray-500 text-sm mt-1">{label}</p>
    </div>
  );
}

const partners = [
  { name: 'The Variable', logo: '/images/logos/the-variable.png' },
  { name: 'WizKid Creative', logo: '/images/logos/wizkid-creative.png' },
  { name: 'Affix Studios', logo: '/images/logos/affix-studios.png' },
  { name: 'PACE Communications', logo: '/images/logos/pace-communications.png' },
  { name: 'Sway Creative', logo: '/images/logos/sway-creative.png' },
  { name: 'Bonfire LA', logo: '/images/logos/bonfire-la.png' },
  { name: 'CRASH Creative', logo: '/images/logos/crash-creative.png' },
];

function LogoMarquee() {
  // Duplicate the list for seamless infinite scroll
  const logos = [...partners, ...partners];
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (partnerName: string) => {
    setFailedImages(prev => new Set(prev).add(partnerName));
  };

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none" />

      <div className="flex animate-marquee">
        {logos.map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className="flex-shrink-0 mx-8 sm:mx-12 flex items-center justify-center h-12"
          >
            {failedImages.has(`${partner.name}-${i}`) ? (
              <span className="text-gray-500 hover:text-gray-300 transition-colors text-sm sm:text-base font-semibold whitespace-nowrap tracking-wide">
                {partner.name}
              </span>
            ) : (
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 sm:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
                loading="lazy"
                onError={() => handleImageError(`${partner.name}-${i}`)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, 0.1);

  return (
    <section id="story" ref={sectionRef} className="relative scroll-mt-20 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/60 to-gray-950 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32">
        {/* Top label */}
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-8">
            The Story
          </span>
        </div>

        {/* Pull quote */}
        <div className={`mb-16 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            I didn&rsquo;t follow the traditional path.{' '}
            <span className="text-accent">I built my own.</span>
          </blockquote>
        </div>

        {/* Two column narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div className={`space-y-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-300 text-lg leading-relaxed">
              I started in corporate sales&mdash;district manager at a fast-growing
              cement company, driving{' '}
              <span className="text-white font-semibold">130% year-over-year growth</span>.
              But I wanted to build things, not just sell them.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              So I made the leap. Picked up freelance development, did marketing
              for nonprofits like the{' '}
              <span className="text-white font-medium">Center for Creative Economy</span>,
              and learned the craft from the ground up. The early years were full of
              lessons: failed partnerships, dead-end startup ideas, and the slow
              realization of where I could make the biggest impact.
            </p>
          </div>
          <div className={`space-y-6 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-400 text-lg leading-relaxed">
              In 2019 I founded{' '}
              <span className="text-white font-medium">YohDev</span> and focused on
              what I do best&mdash;turning complex problems into clean, working
              technology. Along the way I served as a contracted lead software engineer
              for companies like{' '}
              <span className="text-white font-medium">StateFarm</span> and{' '}
              <span className="text-white font-medium">PACE Communications</span> through
              TEKsystems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Today I&rsquo;m scaling YohDev&mdash;building a leadership team, growing
              agency partnerships, and helping businesses ship software that{' '}
              <span className="text-accent font-semibold">actually matters</span>.
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className={`transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="border-t border-b border-gray-800 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <AnimatedCounter target={130} suffix="%" label="YoY Sales Growth" />
              <AnimatedCounter target={2019} suffix="" label="Founded YohDev" />
              <AnimatedCounter target={10} suffix="+" label="Years in business" />
              <AnimatedCounter target={2025} suffix="" label="Marquis Who's Who" />
            </div>
          </div>
        </div>

        {/* Partner logo marquee */}
        <div className={`mt-16 transition-all duration-700 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-600 text-xs uppercase tracking-widest text-center mb-8">
            Trusted by agencies &amp; brands
          </p>
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
}

/* ─── Scroll-Jacking Timeline ─── */

function ScrollTimeline({ onImageClick }: { onImageClick: (images: TimelineEntry['images'], index: number) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Temporarily hide images
  const showImages = false;

  // Track which milestone is active based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const sectionTop = -sectionRect.top;
      const panelHeight = section.scrollHeight / timeline.length;

      if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) return;

      const rawIndex = sectionTop / panelHeight;
      const clampedIndex = Math.max(0, Math.min(timeline.length - 1, Math.floor(rawIndex)));
      const panelProgress = Math.max(0, Math.min(1, rawIndex - clampedIndex));

      setActiveIndex(clampedIndex);
      setProgress(panelProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const active = timeline[activeIndex];

  return (
    <section id="accomplishments" ref={sectionRef} className="relative scroll-mt-20" style={{ height: `${timeline.length * 100}vh` }}>
      {/* Sticky viewport panel */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Background — subtle gradient shift per milestone */}
        <div
          className="absolute inset-0 transition-colors duration-700"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, rgba(34,197,94,${0.03 + activeIndex * 0.005}) 0%, transparent 60%), linear-gradient(to bottom, #0a0a0a, #111111)`,
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col justify-center">
            {/* Mini timeline nav */}
            <div className="flex items-center gap-2 mb-8">
              {timeline.map((item, i) => (
                <button
                  key={i}
                  className={`relative transition-all duration-500 rounded-full ${
                    i === activeIndex
                      ? 'w-8 h-2 bg-accent shadow-[0_0_10px_rgba(34,197,94,0.4)]'
                      : i < activeIndex
                      ? 'w-2 h-2 bg-accent/40'
                      : 'w-2 h-2 bg-gray-700'
                  }`}
                  onClick={() => {
                    const section = sectionRef.current;
                    if (!section) return;
                    const panelHeight = section.scrollHeight / timeline.length;
                    const targetScroll = section.offsetTop + panelHeight * i;
                    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                  }}
                  aria-label={`Go to ${item.title}`}
                />
              ))}
            </div>

            {/* Year + Tag */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span
                key={`year-${activeIndex}`}
                className="text-accent font-mono text-sm sm:text-base font-bold tracking-wide animate-fadeSlideUp"
              >
                {active.year}
              </span>
              <span
                key={`tag-${activeIndex}`}
                className="text-xs font-medium text-accent/70 bg-accent/10 px-3 py-1 rounded-full animate-fadeSlideUp"
                style={{ animationDelay: '50ms' }}
              >
                {active.tag}
              </span>
            </div>

            {/* Title */}
            <h3
              key={`title-${activeIndex}`}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 animate-fadeSlideUp"
              style={{ animationDelay: '100ms' }}
            >
              {active.title}
            </h3>

            {/* Description */}
            <p
              key={`desc-${activeIndex}`}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg animate-fadeSlideUp"
              style={{ animationDelay: '200ms' }}
            >
              {active.description}
            </p>

            {/* Counter */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-gray-600 text-sm font-mono">
                {String(activeIndex + 1).padStart(2, '0')} / {String(timeline.length).padStart(2, '0')}
              </span>
              <div className="flex-1 max-w-[120px] h-0.5 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent/60 rounded-full transition-all duration-300"
                  style={{ width: `${((activeIndex + progress) / timeline.length) * 100}%` }}
                />
              </div>
              <span className="text-gray-700 text-xs">Scroll to explore</span>
            </div>
          </div>

          {/* Right: Images */}
          {showImages && (
            <div className="hidden lg:flex flex-col items-center justify-center">
              <div
                key={`images-${activeIndex}`}
                className="animate-fadeScaleIn"
              >
                {active.images.length > 0 && (
                  <div className={`grid gap-3 ${active.images.length === 1 ? 'grid-cols-1' : active.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2'}`}>
                    {active.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => onImageClick(active.images, i)}
                        className={`relative overflow-hidden rounded-xl ring-1 ring-gray-800 hover:ring-accent/40 transition-all duration-300 group ${
                          active.images.length === 3 && i === 0 ? 'col-span-2' : ''
                        }`}
                        style={{ animationDelay: `${i * 100 + 150}ms` }}
                      >
                        <div className={`${active.images.length === 1 ? 'h-80' : active.images.length === 3 && i === 0 ? 'h-52' : 'h-52'} w-full`}>
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.classList.add('bg-gray-800', 'flex', 'items-center', 'justify-center');
                                parent.innerHTML = `
                                  <div class="flex flex-col items-center text-gray-600 p-4">
                                    <svg class="w-10 h-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                                    </svg>
                                    <span class="text-xs">${img.alt}</span>
                                  </div>`;
                              }
                            }}
                          />
                        </div>
                        {/* Hover overlay with zoom icon */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                          </svg>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                          <p className="text-white text-xs">{img.alt}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mobile: Image strip (below text) */}
          {showImages && (
            <div
              key={`mobile-images-${activeIndex}`}
              className="lg:hidden animate-fadeSlideUp"
              style={{ animationDelay: '300ms' }}
            >
              {active.images.length > 0 && (
                <div
                  className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {active.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => onImageClick(active.images, i)}
                      className="relative flex-shrink-0 w-56 h-40 rounded-xl overflow-hidden snap-start ring-1 ring-gray-800 hover:ring-accent/40 transition-all group"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.classList.add('bg-gray-800');
                          target.parentElement!.innerHTML = `
                            <div class="flex flex-col items-center justify-center h-full text-gray-600">
                              <svg class="w-8 h-8 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                              </svg>
                              <span class="text-xs">${img.alt}</span>
                            </div>`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Scroll indicator at bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */

export default function Home() {
  const [modal, setModal] = useState<ModalState>(null);

  const openModal = useCallback(
    (images: TimelineEntry['images'], index: number) => setModal({ images, index }),
    []
  );
  const closeModal = useCallback(() => setModal(null), []);
  const prevImage = useCallback(() => {
    setModal((prev) => {
      if (!prev) return prev;
      return { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length };
    });
  }, []);
  const nextImage = useCallback(() => {
    setModal((prev) => {
      if (!prev) return prev;
      return { ...prev, index: (prev.index + 1) % prev.images.length };
    });
  }, []);

  return (
    <>
      {modal && (
        <ImageModal modal={modal} onClose={closeModal} onPrev={prevImage} onNext={nextImage} />
      )}

      {/* ===== HERO ===== */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-8 rounded-full ring-2 ring-accent/30 ring-offset-4 ring-offset-gray-950 overflow-hidden">
            <img
              src="/images/headshot.jpg"
              alt="Andrew Hewitt"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.classList.add('bg-gradient-to-br', 'from-accent/20', 'to-accent/5', 'flex', 'items-center', 'justify-center');
                target.parentElement!.innerHTML = '<span class="text-2xl font-bold text-accent">AH</span>';
              }}
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Andrew Hewitt
          </h1>
          <p className="text-xl sm:text-2xl text-accent font-medium mb-6">
            Builder, CEO, and hands-on engineer.
          </p>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            I help teams turn messy ideas into clean, working software&mdash;fast. From freelance
            work to leading teams as CEO, I&rsquo;m obsessed with practical execution and real outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://yohdev.com/intro-call" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-accent text-gray-950 font-semibold rounded-lg hover:bg-accent-light transition-colors text-base">
              Request an appointment
            </a>
            <a href="https://yohdev.com/triad-dev-connect" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-colors text-base">
              See Dev Connect &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <StorySection />

      {/* ===== PROOF OF WORK — SCROLL-JACKING TIMELINE ===== */}
      <ScrollTimeline onImageClick={openModal} />

      {/* ===== DEV CONNECT ===== */}
      <section id="devconnect" className="py-24 px-6 scroll-mt-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span className="inline-block text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-6">
                Community
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Triad Dev Connect
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Dev Connect is where builders, engineers, and agency leaders in the
                Triad come together to share practical insights, explore real
                opportunities, and grow their networks.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Whether you&rsquo;re shipping side projects, leading dev teams, or
                looking for your next collaboration &mdash; this is where the
                conversations happen. Real talk, real people, real outcomes.
              </p>

              {/* Quick stats / highlights */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div>
                  <p className="text-accent text-2xl font-bold">Local</p>
                  <p className="text-gray-500 text-sm">Winston-Salem &amp; Triad</p>
                </div>
                <div className="w-px bg-gray-800" />
                <div>
                  <p className="text-accent text-2xl font-bold">Builders</p>
                  <p className="text-gray-500 text-sm">Devs, founders &amp; agencies</p>
                </div>
                <div className="w-px bg-gray-800" />
                <div>
                  <p className="text-accent text-2xl font-bold">Monthly</p>
                  <p className="text-gray-500 text-sm">Events &amp; meetups</p>
                </div>
              </div>

              <a
                href="https://yohdev.com/triad-dev-connect"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-accent text-gray-950 font-semibold rounded-lg hover:bg-accent-light transition-colors text-base"
              >
                Join Dev Connect &rarr;
              </a>
            </div>

            {/* Right: Event Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-gray-800 shadow-2xl shadow-accent/5">
                <img
                  src="/images/devconnect-event.jpg"
                  alt="Triad Dev Connect community event"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('bg-gray-800', 'aspect-[4/3]', 'flex', 'items-center', 'justify-center');
                      parent.innerHTML = `
                        <div class="flex flex-col items-center text-gray-600 p-8">
                          <svg class="w-16 h-16 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                          </svg>
                          <span class="text-sm">Add Dev Connect event photo</span>
                          <span class="text-xs mt-1">public/images/devconnect-event.jpg</span>
                        </div>`;
                    }
                  }}
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-accent/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA / CONTACT ===== */}
      <section id="contact" className="py-24 px-6 bg-gray-900/40 scroll-mt-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want to collaborate or explore a project?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Drop your info below and I&rsquo;ll be in touch.
          </p>
          <a href="https://yohdev.com/intro-call" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-accent text-gray-950 font-semibold rounded-lg hover:bg-accent-light transition-colors text-base">
            Request an appointment
          </a>
        </div>
      </section>
    </>
  );
}
