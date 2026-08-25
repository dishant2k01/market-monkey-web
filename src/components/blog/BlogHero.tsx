import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { aboutHero } from "@/config/about";

export function BlogHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFF9F4] pt-[var(--space-page-hero-y)] pb-12 sm:pb-16 lg:pt-[var(--space-page-hero-y-lg)] lg:pb-20"
      aria-labelledby="blog-hero-heading"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="relative z-10 lg:col-span-6">
            <h1
              id="blog-hero-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl lg:leading-[1.15]"
            >
              Market Insights,{" "}
              <span className="text-brand-primary">Tips & More</span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
              Stay updated with the best market guides, shopping tips, Monkey
              stories and everything you need to explore smarter.
            </p>
          </div>

          <div className="relative flex justify-center lg:col-span-6">
            <div className="relative w-full max-w-[560px] sm:max-w-[640px]">
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-soft/70 blur-xl sm:size-96"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={aboutHero.imageSrc}
                  alt={aboutHero.imageAlt}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 640px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
