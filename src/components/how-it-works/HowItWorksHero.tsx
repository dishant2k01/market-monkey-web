"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF9] pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative subtle background gradient blob */}
      <div
        className="pointer-events-none absolute -top-24 right-0 size-[500px] rounded-full bg-brand-primary/5 blur-3xl"
        aria-hidden="true"
      />
      
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Hero Copy & Action Buttons */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary">
              How It Works
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Explore any market in{" "}
              <span className="text-brand-primary">4 simple steps.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Market Monkey connects you with verified local Monkeys who show
              you real markets live. Ask, view, compare and shop with total
              confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/#markets" size="lg" className="gap-2 font-semibold">
                Explore Markets
                <svg
                  className="size-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>

              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-full border border-surface-border bg-surface px-5 py-3 text-sm font-semibold text-ink shadow-xs transition-colors hover:bg-surface-subtle focus-visible:outline-2 focus-visible:outline-brand-primary"
                onClick={() => {
                  const stepsEl = document.getElementById("how-it-works-steps");
                  if (stepsEl) {
                    stepsEl.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                  <svg
                    className="size-3.5 fill-current ml-0.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch How It Works
              </button>
            </div>
          </div>

          {/* Right Column - Smartphone Mockups with Chat Overlays & Dashed Path */}
          <div className="relative flex justify-center lg:col-span-6 xl:col-span-6">
            {/* Background SVG decorative curved dashed lines & dots */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-60">
              <svg
                className="h-full w-full max-w-[500px]"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="200"
                  r="6"
                  fill="#FF800C"
                  fillOpacity="0.4"
                />
                <circle
                  cx="350"
                  cy="120"
                  r="4"
                  fill="#FF800C"
                  fillOpacity="0.4"
                />
                <path
                  d="M 40 220 Q 150 280 220 220 T 360 140"
                  stroke="#FF800C"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  strokeOpacity="0.4"
                  fill="none"
                />
              </svg>
            </div>

            <div className="relative w-full max-w-[460px] sm:max-w-[520px]">
              {/* Main Dual Phone Mockup Image */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/home/live-experience-phones.png"
                  alt="Market Monkey Live Shopping Video Call Mockups"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 520px"
                />
              </div>

              {/* Floating Overlay Badge 1 - Top Chat Bubble */}
              <div className="absolute top-[52%] -right-2 sm:-right-4 z-20 flex items-center gap-2.5 rounded-full border border-surface-border/60 bg-surface/95 px-3.5 py-2 shadow-lg backdrop-blur-md transition-transform hover:scale-105">
                <div className="flex size-7 items-center justify-center rounded-full bg-brand-soft text-[11px] font-bold text-brand-primary">
                  <span aria-hidden="true">🛍️</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-ink">
                    What is the price?
                  </span>
                </div>
                <span className="ml-1 text-[10px] text-ink-muted">10:30 AM</span>
              </div>

              {/* Floating Overlay Badge 2 - Bottom Price Bubble */}
              <div className="absolute bottom-[10%] right-2 sm:right-6 z-20 flex items-center gap-2.5 rounded-full border border-brand-primary/20 bg-surface/95 px-3.5 py-2 shadow-xl backdrop-blur-md transition-transform hover:scale-105">
                <div className="flex size-7 items-center justify-center rounded-full bg-brand-primary text-white">
                  <span className="text-[11px] font-bold">🐵</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-extrabold text-brand-primary">
                    ₹850 final price?
                  </span>
                </div>
                <span className="ml-1 text-[10px] text-ink-muted">10:31 AM</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
