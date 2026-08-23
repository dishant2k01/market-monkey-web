import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { aboutStory } from "@/config/about";

export function AboutStory() {
  return (
    <section
      id="our-story"
      className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="about-story-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <h2
              id="about-story-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
            >
              {aboutStory.title}
            </h2>
            <div className="mt-5 space-y-4">
              {aboutStory.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-ink-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <Button href={aboutStory.ctaHref} size="lg">
                {aboutStory.ctaLabel}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div
              className="pointer-events-none absolute -right-3 -bottom-3 top-8 w-2/5 rounded-2xl bg-[radial-gradient(circle,_var(--brand-soft)_1.5px,_transparent_1.6px)] [background-size:12px_12px] sm:-right-5 sm:top-10"
              aria-hidden="true"
            />
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-md">
              <Image
                src={aboutStory.imageSrc}
                alt={aboutStory.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
