"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { aboutHero } from "@/config/about";

export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFFDF9] border-b border-[#FFE8D6] pt-10 pb-16 lg:pt-16 lg:pb-24"
      aria-labelledby="about-hero-heading"
    >
      {/* Decorative ambient background blur & dotted trail */}
      <div
        className="pointer-events-none absolute -top-24 right-0 size-[500px] rounded-full bg-brand-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute -top-12 left-1/4 w-[900px] h-[500px]"
          viewBox="0 0 900 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 50 350 C 200 480 350 420 500 300 C 650 180 800 220 950 320"
            stroke="#FFC857"
            strokeWidth="2.5"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />
          <path
            d="M -50 150 C 150 50 350 120 550 80 C 750 40 850 160 980 120"
            stroke="#FF800C"
            strokeWidth="1.75"
            strokeDasharray="4 6"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Hero Copy & Action Buttons */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary">
              {aboutHero.eyebrow}
            </div>

            <h1
              id="about-hero-heading"
              className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
            >
              {aboutHero.titleBefore}{" "}
              <span className="text-brand-primary">{aboutHero.titleAccent}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {aboutHero.description}
            </p>

            {/* Quick Stats / Feature Badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2.5 rounded-xl border border-surface-border/80 bg-surface px-3.5 py-2 shadow-xs">
                <span className="flex size-6 items-center justify-center rounded-full bg-brand-soft text-xs">
                  🛍️
                </span>
                <span className="text-xs font-bold text-ink">500+ Markets</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-surface-border/80 bg-surface px-3.5 py-2 shadow-xs">
                <span className="flex size-6 items-center justify-center rounded-full bg-brand-soft text-xs">
                  🐵
                </span>
                <span className="text-xs font-bold text-ink">10K+ Verified Monkeys</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-surface-border/80 bg-surface px-3.5 py-2 shadow-xs">
                <span className="flex size-6 items-center justify-center rounded-full bg-brand-soft text-xs">
                  ⭐
                </span>
                <span className="text-xs font-bold text-ink">4.8 Rating</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/#markets" size="lg" className="gap-2 font-semibold">
                Explore Markets
                <ArrowRightIcon className="size-4" />
              </Button>

              <button
                type="button"
                className="inline-flex items-center gap-2.5 rounded-full border border-surface-border bg-surface px-5 py-3 text-sm font-semibold text-ink shadow-xs transition-colors hover:bg-surface-subtle focus-visible:outline-2 focus-visible:outline-brand-primary"
                onClick={() => {
                  const storyEl = document.getElementById("our-story");
                  if (storyEl) {
                    storyEl.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-brand-soft text-brand-primary text-xs font-bold">
                  📖
                </span>
                Read Our Story
              </button>
            </div>
          </div>

          {/* Right Column - Hero Phone Mockups Visual with Floating Overlays */}
          <div className="relative flex justify-center lg:col-span-6 xl:col-span-5">
            <div className="relative w-full max-w-[460px] sm:max-w-[500px]">
              {/* Soft decorative background circle */}
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 sm:size-88 rounded-full bg-brand-soft/70 -z-10 blur-xl"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={aboutHero.imageSrc}
                  alt={aboutHero.imageAlt}
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Floating Overlay Badge 1 - Top Right */}
              <div className="absolute top-[20%] -right-2 sm:-right-4 z-20 flex items-center gap-2.5 rounded-2xl border border-surface-border/80 bg-surface/95 px-3.5 py-2 shadow-lg backdrop-blur-md transition-transform hover:scale-105">
                <div className="flex size-7 items-center justify-center rounded-full bg-brand-primary text-white text-xs font-bold">
                  ✓
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-extrabold text-ink">
                    100% Verified
                  </span>
                  <span className="text-[10px] text-ink-muted">
                    Local Guides
                  </span>
                </div>
              </div>

              {/* Floating Overlay Badge 2 - Bottom Left */}
              <div className="absolute bottom-[12%] -left-2 sm:-left-4 z-20 flex items-center gap-2.5 rounded-2xl border border-brand-primary/20 bg-surface/95 px-3.5 py-2 shadow-xl backdrop-blur-md transition-transform hover:scale-105">
                <div className="flex size-7 items-center justify-center rounded-full bg-brand-soft text-brand-primary text-xs font-bold">
                  🎥
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-extrabold text-brand-primary">
                    Live Exploration
                  </span>
                  <span className="text-[10px] text-ink-muted">
                    Real-time video
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
