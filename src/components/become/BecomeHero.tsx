import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  BriefcaseScheduleIcon,
  GrowthEarnIcon,
  HeartUsersIcon,
  ShieldCheckmarkIcon,
  PlayCircleOutlineIcon,
} from "@/components/become/becomeIcons";
import { ArrowRightIcon } from "@/components/ui/icons";
import {
  becomeHeroHighlights,
  becomeHeroLiveDetails,
  type BecomeHeroHighlight,
} from "@/config/become";
import type { ReactNode } from "react";

const highlightIcons: Record<BecomeHeroHighlight["icon"], ReactNode> = {
  terms: <BriefcaseScheduleIcon className="size-4" />,
  earn: <GrowthEarnIcon className="size-4" />,
  customers: <HeartUsersIcon className="size-4" />,
  trusted: <ShieldCheckmarkIcon className="size-4" />,
};

export function BecomeHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFFDF9] pt-8 pb-14 lg:pt-14 lg:pb-20"
      aria-labelledby="become-hero-heading"
    >
      {/* Decorative Warm Yellow/Orange Dotted Trail in the background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-45 overflow-hidden"
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
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Copy, 4 Badges, CTAs */}
          <div className="lg:col-span-6 xl:col-span-7">
            <h1
              id="become-hero-heading"
              className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
            >
              Become a <br />
              <span className="text-brand-primary">Market Monkey</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Turn your knowledge of local markets into real earnings. Help
              people explore, compare and shop with confidence.
            </p>

            {/* 4 Feature Badges in 2x2 or 4-item grid */}
            <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 max-w-lg">
              {becomeHeroHighlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl border border-surface-border/80 bg-surface px-3.5 py-2.5 shadow-xs transition-shadow duration-200 hover:shadow-sm"
                >
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                    {highlightIcons[item.icon]}
                  </span>
                  <span className="text-xs font-bold text-ink">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-brand-primary-hover hover:shadow-md active:bg-brand-primary-active focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                Apply Now
                <ArrowRightIcon className="size-4" />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-surface-border bg-surface px-5 py-3.5 text-sm font-bold text-ink shadow-xs transition-all duration-200 hover:bg-surface-subtle hover:border-surface-border-strong active:bg-surface-input focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                <PlayCircleOutlineIcon className="size-5 text-brand-primary" />
                Watch How It Works
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual with Live & Earnings Badges */}
          <div className="relative mx-auto w-full max-w-lg lg:col-span-6 lg:max-w-none xl:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[14/11] w-full overflow-hidden rounded-3xl bg-surface-subtle shadow-2xl ring-1 ring-black/5">
              <Image
                src={becomeHeroLiveDetails.imageSrc}
                alt={becomeHeroLiveDetails.imageAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Overlaid Badge 1: Today's Earnings (Top Right) */}
            <div className="absolute top-4 right-4 sm:-top-3 sm:-right-3 z-20 rounded-2xl border border-surface-border bg-surface/95 px-4 py-3 shadow-xl backdrop-blur-md transition-transform hover:scale-105 duration-200">
              <p className="text-[11px] font-medium tracking-wide text-ink-muted">
                {becomeHeroLiveDetails.earningsLabel}
              </p>
              <p className="mt-0.5 text-xl sm:text-2xl font-black tracking-tight text-ink">
                {becomeHeroLiveDetails.earnings}
              </p>
            </div>

            {/* Overlaid Badge 2: Live Session status with avatar stack (Bottom Right / Middle) */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 w-[180px] sm:w-[210px] rounded-2xl border border-surface-border bg-surface/95 p-3.5 shadow-xl backdrop-blur-md transition-transform hover:scale-105 duration-200">
              <div className="flex items-center gap-1.5">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-red-500" />
                </span>
                <p className="text-xs font-extrabold text-ink">
                  {becomeHeroLiveDetails.liveLabel}
                </p>
              </div>

              <p className="mt-0.5 text-[11px] font-medium text-ink-muted">
                {becomeHeroLiveDetails.liveLocation}
              </p>

              <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-surface-border/60">
                <div className="flex -space-x-2 overflow-hidden">
                  {becomeHeroLiveDetails.avatars.map((src, index) => (
                    <div
                      key={src + index}
                      className="relative inline-block size-6 overflow-hidden rounded-full ring-2 ring-surface"
                    >
                      <Image
                        src={src}
                        alt="Participant"
                        fill
                        className="object-cover"
                        sizes="24px"
                      />
                    </div>
                  ))}
                </div>
                <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-extrabold text-brand-primary">
                  {becomeHeroLiveDetails.viewerCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
