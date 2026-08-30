import { Container } from "@/components/layout/Container";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimateIn";
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
  delhi: <DelhiMonumentIcon className="size-7 text-ink-muted group-hover:text-brand-primary transition-colors duration-300" />,
  mumbai: <MumbaiMonumentIcon className="size-7 text-ink-muted group-hover:text-brand-primary transition-colors duration-300" />,
  chandigarh: <ChandigarhMonumentIcon className="size-7 text-ink-muted group-hover:text-brand-primary transition-colors duration-300" />,
  bangalore: <BangaloreMonumentIcon className="size-7 text-ink-muted group-hover:text-brand-primary transition-colors duration-300" />,
  kolkata: <KolkataMonumentIcon className="size-7 text-ink-muted group-hover:text-brand-primary transition-colors duration-300" />,
  jaipur: <JaipurMonumentIcon className="size-7 text-ink-muted group-hover:text-brand-primary transition-colors duration-300" />,
};

export function MarketsPopularCities() {
  return (
    <section className="bg-surface py-12 lg:py-16" aria-labelledby="popular-cities-heading">
      <Container>
        {/* Section Header */}
        <AnimateIn variant="fade-up" delay={50} duration={600}>
          <h2
            id="popular-cities-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink"
          >
            Popular Cities
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-ink-muted">
            Explore markets from some of India&apos;s most vibrant shopping destinations.
          </p>
        </AnimateIn>

        {/* Cities Grid */}
        <StaggerContainer
          baseDelay={120}
          staggerMs={70}
          className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4"
        >
          {popularCities.map((city, index) => (
            <StaggerItem
              key={city.id}
              index={index}
              className="group flex items-center gap-3 rounded-2xl border border-surface-border/80 bg-surface p-3.5 sm:p-4 text-left shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-soft-border"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-subtle transition-colors duration-300 group-hover:bg-brand-soft">
                {cityIcons[city.icon]}
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs sm:text-sm font-bold text-ink transition-colors duration-300 group-hover:text-brand-primary">
                  {city.name}
                </p>
                <p className="truncate text-[11px] font-medium text-ink-muted">
                  {city.countLabel}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
