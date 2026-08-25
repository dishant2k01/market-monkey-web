"use client";

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

type MarketsPopularCitiesProps = {
  selectedCity?: string;
  onSelectCity?: (city: string) => void;
};

export function MarketsPopularCities({
  selectedCity = "All Cities",
  onSelectCity,
}: MarketsPopularCitiesProps) {
  return (
    <section className="bg-surface py-10 lg:py-12" aria-labelledby="popular-cities-heading">
      <Container>
        {/* Header Row */}
        <div className="flex items-center justify-between">
          <h2
            id="popular-cities-heading"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink"
          >
            Popular Cities
          </h2>

          <button
            type="button"
            onClick={() => onSelectCity?.("All Cities")}
            className="text-xs sm:text-sm font-bold text-brand-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            View All Cities
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Cities Grid / Scroll Row */}
        <div className="relative mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {popularCities.map((city) => {
              const isActive = selectedCity.toLowerCase() === city.name.toLowerCase();

              return (
                <button
                  key={city.id}
                  type="button"
                  onClick={() => onSelectCity?.(isActive ? "All Cities" : city.name)}
                  className={`group flex items-center gap-3 rounded-2xl border p-3.5 sm:p-4 text-left shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-pointer ${
                    isActive
                      ? "border-brand-primary bg-brand-soft/50 ring-1 ring-brand-primary"
                      : "border-surface-border/80 bg-surface hover:border-brand-soft-border"
                  }`}
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
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
