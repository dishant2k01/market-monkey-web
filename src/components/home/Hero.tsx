import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import {
  ArrowRightIcon,
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
  type HomeTrustStat,
} from "@/config/home";
import type { ReactNode } from "react";

const trustIcons: Record<HomeTrustStat["icon"], ReactNode> = {
  markets: <ShopIcon className="size-4" />,
  monkeys: <UsersIcon className="size-4" />,
  customers: <UsersIcon className="size-4" />,
  rating: <StarIcon className="size-4" />,
};

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
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
          className="absolute inset-0 bg-gradient-to-r from-surface-inverse/92 via-surface-inverse/78 to-surface-inverse/35"
          aria-hidden="true"
        />
      </div>

      <Container className="relative pt-10 pb-8 lg:pt-14 lg:pb-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8">
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
        </div>

        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-surface-inverse-border/50 bg-surface-inverse/55 p-4 backdrop-blur-md sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:p-5">
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
