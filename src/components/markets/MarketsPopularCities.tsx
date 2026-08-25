import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  BangaloreMonumentIcon,
  ChandigarhMonumentIcon,
  DelhiMonumentIcon,
  JaipurMonumentIcon,
  KolkataMonumentIcon,
  MumbaiMonumentIcon,
} from "@/components/markets/marketIcons";
import { popularCities, type MarketCity } from "@/config/markets";
import type { ReactNode } from "react";

const cityIcons: Record<MarketCity["icon"], ReactNode> = {
  delhi: <DelhiMonumentIcon className="size-7 text-ink-muted group-hover:text-brand-primary transition-colors" />,
  mumbai: <MumbaiMonumentIcon className="size-7 text-ink-muted group-hover:text-brand-primary transition-colors" />,
  chandigarh: <ChandigarhMonumentIcon className="size-7 text-ink-muted group-hover:text-brand-primary transition-colors" />,
  bangalore: <BangaloreMonumentIcon className="size-7 text-ink-muted group-hover:text-brand-primary transition-colors" />,
  kolkata: <KolkataMonumentIcon className="size-7 text-ink-muted group-hover:text-brand-primary transition-colors" />,
  jaipur: <JaipurMonumentIcon className="size-7 text-ink-muted group-hover:text-brand-primary transition-colors" />,
};

export function MarketsPopularCities() {
  return (
    <section className="bg-surface py-12 lg:py-16" aria-labelledby="popular-cities-heading">
      <Container>
        {/* Section Header */}
        <div>
          <h2
            id="popular-cities-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink"
          >
            Popular Cities
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-ink-muted">
            Explore markets from some of India&apos;s most vibrant shopping destinations.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {popularCities.map((city) => (
            <div
              key={city.id}
              className="group flex items-center gap-3 rounded-2xl border border-surface-border/80 bg-surface p-3.5 sm:p-4 text-left shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-brand-soft-border"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-subtle">
                {cityIcons[city.icon]}
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs sm:text-sm font-bold text-ink">
                  {city.name}
                </p>
                <p className="truncate text-[11px] font-medium text-ink-muted">
                  {city.countLabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Link */}
        {/* <div className="mt-8 text-center">
          <a
            href="#get-the-app"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-primary transition-colors hover:text-brand-primary-hover hover:underline"
          >
            <span>Explore more markets in the app</span>
            <span aria-hidden="true">→</span>
          </a>
        </div> */}
      </Container>
    </section>
  );
}
