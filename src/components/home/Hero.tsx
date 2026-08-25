import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  homeHero,
  homeTrustStats,
  type HomeTrustStat,
} from "@/config/home";
import type { ReactNode } from "react";

function VerifiedShieldIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 3L4 6.5v6c0 5.25 3.5 9.5 8 10.5 4.5-1 8-5.25 8-10.5v-6L12 3z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.5l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LiveVideoCallIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="13"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <polygon
        points="16,10 21,7 21,17 16,14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

function DirectPricingIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SecurePlatformIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="11"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M8 11V7a4 4 0 018 0v4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

const trustStatIcons: Record<string, ReactNode> = {
  monkeys: <VerifiedShieldIcon className="size-5.5 text-brand-primary" />,
  live: <LiveVideoCallIcon className="size-5.5 text-brand-primary" />,
  markets: <DirectPricingIcon className="size-5.5 text-brand-primary" />,
  rating: <SecurePlatformIcon className="size-5.5 text-brand-primary" />,
};

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#0A0A0B] text-white"
      aria-labelledby="hero-heading"
    >
      {/* Background Market Panorama Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={homeHero.backgroundSrc}
          alt={homeHero.backgroundAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Softer, balanced gradient overlays to let the warm market lights and sunset shine through */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/15"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Content Container */}
      <Container className="relative z-10 py-10 sm:py-12 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Left Column: Heading, Description, CTA Buttons & Launch Trust Badges */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
            >
              {homeHero.titleLine1} <br />
              <span className="text-brand-primary">{homeHero.titleHighlight}</span>
            </h1>

            {/* Subtitle Description */}
            <p className="mt-4 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/90 drop-shadow-sm">
              {homeHero.description}
            </p>

            {/* Action Buttons Row */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href={homeHero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-brand-primary/25 transition-all hover:bg-brand-primary-hover hover:shadow-brand-primary/40 active:scale-[0.98]"
              >
                <span>{homeHero.primaryCta.label}</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href={homeHero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-black/40 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md backdrop-blur-md transition-all hover:bg-black/60 hover:border-white/40 active:scale-[0.98]"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-white text-black text-[10px] pl-0.5">
                  ▶
                </span>
                <span>{homeHero.secondaryCta.label}</span>
              </Link>
            </div>

            {/* Bottom Trust Badges (Honest Launch Promises) */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 border-t border-white/20 pt-6 sm:grid-cols-4">
              {homeTrustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/30 p-2.5 sm:p-3 backdrop-blur-sm shadow-xs"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-primary/15 text-brand-primary">
                    {trustStatIcons[stat.icon]}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-[10px] sm:text-[11px] font-medium text-white/75 truncate">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Single Standalone Phone Mockup (Transparent PNG, No Artificial Outer Frame) */}
          <div className="flex items-center justify-center lg:col-span-5 xl:col-span-5">
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[360px] transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative aspect-[626/1024] w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]">
                <Image
                  src={homeHero.phoneSrc}
                  alt={homeHero.phoneAlt}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 360px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
