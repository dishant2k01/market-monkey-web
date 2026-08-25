"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ShopIcon } from "@/components/ui/icons";
import { aboutHero } from "@/config/about";

export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFFDF9] pt-[var(--space-page-hero-y)] pb-16 lg:pt-[var(--space-page-hero-y-lg)] lg:pb-24"
      aria-labelledby="about-hero-heading"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 size-[500px] rounded-full bg-brand-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Hero Copy & Action Buttons */}
          <div className="lg:col-span-6 xl:col-span-6">
            <h1
              id="about-hero-heading"
              className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
            >
              {aboutHero.titleBefore}{" "}
              <span className="text-brand-primary">{aboutHero.titleAccent}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {aboutHero.description}
            </p>

            <div className="mt-8 flex flex-nowrap items-center gap-3 sm:gap-4">
              <Button
                href="/#markets"
                size="lg"
                leftIcon={<ShopIcon className="size-4" />}
                className="shrink-0 whitespace-nowrap font-semibold"
              >
                Explore Markets
              </Button>

              <button
                type="button"
                className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-surface-border bg-surface px-5 py-3 text-sm font-semibold text-ink shadow-xs transition-colors hover:bg-surface-subtle focus-visible:outline-2 focus-visible:outline-brand-primary"
                onClick={() => {
                  const storyEl = document.getElementById("our-story");
                  if (storyEl) {
                    storyEl.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Read Our Story
              </button>
            </div>
          </div>

          {/* Right Column - Hero Phone Mockups */}
          <div className="relative flex justify-center lg:col-span-6 xl:col-span-6">
            <div className="relative w-full max-w-[560px] sm:max-w-[640px]">
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-80 sm:size-96 rounded-full bg-brand-soft/70 -z-10 blur-xl"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={aboutHero.imageSrc}
                  alt={aboutHero.imageAlt}
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
