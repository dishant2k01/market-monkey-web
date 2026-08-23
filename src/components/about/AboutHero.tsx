import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { aboutHero } from "@/config/about";

export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-surface pt-8 pb-[var(--space-section-y-mobile)] lg:pt-10 lg:pb-[var(--space-section-y)]"
      aria-labelledby="about-hero-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
              {aboutHero.eyebrow}
            </p>
            <h1
              id="about-hero-heading"
              className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
            >
              {aboutHero.titleBefore} {aboutHero.titleAccent}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              {aboutHero.description}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="pointer-events-none absolute inset-0 -z-0"
              aria-hidden="true"
            >
              <span className="absolute top-6 right-4 size-40 rounded-full bg-brand-soft sm:size-52 lg:size-56" />
              <span className="absolute bottom-8 left-2 size-28 rounded-full bg-brand-soft/70 sm:size-36" />
            </div>
            <Image
              src={aboutHero.imageSrc}
              alt={aboutHero.imageAlt}
              width={640}
              height={640}
              className="relative z-10 h-auto w-full bg-transparent object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
