import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import {
  ArrowRightIcon,
  LiveClockIcon,
  MapPinIcon,
  PlayIcon,
  ShopIcon,
  StarIcon,
  UsersIcon,
} from "@/components/ui/icons";
import {
  homeHero,
  homeHeroFeatures,
  homeTrustAvatars,
  homeTrustStats,
  type HomeHeroFeature,
  type HomeTrustStat,
} from "@/config/home";
import type { ReactNode } from "react";

const trustIcons: Record<HomeTrustStat["icon"], ReactNode> = {
  markets: <ShopIcon className="size-4" />,
  monkeys: <UsersIcon className="size-4" />,
  customers: <UsersIcon className="size-4" />,
  rating: <StarIcon className="size-4" />,
};

function CompareIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 7h10M7 12h6M7 17h8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M17 10.5v7M14.5 15.5 17 18l2.5-2.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TimeIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 8v4.25L14.75 14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const featureIcons: Record<HomeHeroFeature["icon"], ReactNode> = {
  markets: <MapPinIcon className="size-4" />,
  live: <LiveClockIcon className="size-4" />,
  compare: <CompareIcon className="size-4" />,
  time: <TimeIcon className="size-4" />,
};

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={homeHero.backgroundSrc}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-surface-inverse/80 via-surface-inverse/55 to-surface-inverse/25"
          aria-hidden="true"
        />
      </div>

      <Container className="relative flex min-h-[600px] flex-col justify-between gap-8 py-10 lg:min-h-[640px] lg:py-12">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 xl:gap-10">
          <div className="max-w-xl">
            <h1
              id="hero-heading"
              className="text-4xl font-extrabold tracking-tight text-ink-inverse sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]"
            >
              {homeHero.titleLine1}{" "}
              <span className="text-brand-primary">{homeHero.titleHighlight}</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-surface-inverse-muted sm:text-lg">
              {homeHero.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                href={homeHero.primaryCta.href}
                size="lg"
                rightIcon={<ArrowRightIcon className="size-4" />}
              >
                {homeHero.primaryCta.label}
              </Button>
              <Button
                href={homeHero.secondaryCta.href}
                variant="secondary"
                size="lg"
                leftIcon={<PlayIcon className="size-3.5 text-brand-primary" />}
                className="border-surface/40 bg-transparent text-ink-inverse hover:bg-surface/10"
              >
                {homeHero.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none lg:justify-end">

            <ul className="absolute top-1/2 right-0 z-20 flex w-[46%] max-w-[11.5rem] -translate-y-1/2 flex-col gap-2.5 sm:right-1 sm:max-w-[12.5rem] lg:right-0">
              {homeHeroFeatures.map((feature) => (
                <li
                  key={feature.title}
                  className="flex items-center gap-2.5 rounded-2xl border border-surface-border bg-surface px-3 py-2.5 shadow-sm"
                >
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                    {featureIcons[feature.icon]}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-ink sm:text-sm">
                      {feature.title}
                    </p>
                    <p className="truncate text-[0.6875rem] text-ink-muted">
                      {feature.subtitle}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        <div className="flex flex-col gap-5 rounded-2xl border border-surface-inverse-border/50 bg-surface-inverse/55 p-4 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {homeTrustStats.map((stat) => (
              <li key={stat.label} className="flex items-center gap-2.5">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-primary/20 text-brand-primary">
                  {trustIcons[stat.icon]}
                </span>
                <div>
                  <p className="text-base font-extrabold text-ink-inverse sm:text-lg">
                    {stat.value}
                  </p>
                  <p className="text-[0.6875rem] text-surface-inverse-muted sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-t border-surface-inverse-border/60 pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5">
            <div className="flex -space-x-2">
              {homeTrustAvatars.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={32}
                  height={32}
                  className="size-8 rounded-full border-2 border-surface-inverse object-cover"
                />
              ))}
            </div>
            <p className="text-xs font-medium text-surface-inverse-muted sm:text-sm">
              {homeHero.trustNote}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
