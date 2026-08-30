"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { aboutHero } from "@/config/about";

export function AboutHero() {
  return (
    <section
      className="relative min-h-[580px] w-full overflow-hidden bg-stone-900 pt-28 pb-20 sm:pt-36 sm:pb-28 lg:min-h-[680px] lg:pt-44 lg:pb-36 flex items-center"
      aria-labelledby="about-hero-heading"
    >
      {/* Background Market Image */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/about/hero-market-bg.png"
          alt="Market Monkey background"
          fill
          priority
          unoptimized
          className="object-cover object-center sm:object-[75%_center] lg:object-center"
          sizes="100vw"
        />
        {/* Dark Scrim Overlays for AAA Contrast and Legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35 md:from-black/90 md:via-black/60 md:to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 md:hidden"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-20 w-full">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left Column: Typography */}
          <div className="max-w-2xl lg:col-span-8 xl:col-span-7">
            {/* Tagline / Category */}
            <div className="mb-3 sm:mb-4">
              <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#FF6500]">
                {aboutHero.kicker}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="about-hero-heading"
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.08]"
            >
              <span className="block text-white">{aboutHero.titleLine1}</span>
              <span className="block mt-1 sm:mt-2">
                <span className="text-[#FF6500]">{aboutHero.titleAccent}</span>{" "}
                <span className="text-white">{aboutHero.titleLine2}</span>
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="mt-6 max-w-xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-slate-200/95 drop-shadow-xs">
              {aboutHero.description}
            </p>
          </div>

          {/* Right Column: Space reserved for background hanging signboard */}
          <div className="hidden lg:col-span-4 lg:block" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}

