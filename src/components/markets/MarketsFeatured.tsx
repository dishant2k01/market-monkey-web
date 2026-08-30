import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { MonkeyAvatarIcon } from "@/components/markets/marketIcons";
import { featuredMarketItems } from "@/config/markets";

export function MarketsFeatured() {
  return (
    <section className="bg-surface py-12 lg:py-16" aria-labelledby="featured-markets-heading">
      <Container>
        {/* Section Header */}
        <AnimateIn variant="fade-up" delay={50} duration={500}>
          <h2
            id="featured-markets-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink"
          >
            Featured Markets
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-ink-muted">
            A glimpse of the markets you can explore with Market Monkey.
          </p>
        </AnimateIn>

        {/* 8 Markets Grid - Unified clean reveal */}
        <AnimateIn
          variant="fade-up"
          delay={120}
          duration={600}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {featuredMarketItems.map((market) => (
            <article
              key={market.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border/80 bg-surface shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-brand-primary/30"
            >
              <div>
                {/* Market Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-subtle">
                  <Image
                    src={market.imageSrc}
                    alt={market.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Market Info */}
                <div className="p-4">
                  <h3 className="truncate text-sm sm:text-base font-bold text-ink transition-colors duration-200 group-hover:text-brand-primary" title={market.name}>
                    {market.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-ink-muted">
                    {market.city}
                  </p>

                  {/* Categories */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {market.categories.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-md bg-surface-subtle border border-surface-border/60 px-2 py-0.5 text-[11px] font-medium text-ink-secondary transition-colors duration-200 group-hover:border-brand-soft-border group-hover:bg-brand-soft/40"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Monkeys Live Footer with Live Pulse */}
              <div className="px-4 pb-4 pt-1">
                <div className="flex items-center gap-2 border-t border-surface-border/60 pt-3 text-xs font-bold text-ink-secondary">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <MonkeyAvatarIcon className="size-4 shrink-0 text-brand-primary transition-transform duration-200 group-hover:scale-110" />
                  <span>{market.monkeysLive} Monkeys Live</span>
                </div>
              </div>
            </article>
          ))}
        </AnimateIn>

        {/* Bottom CTA Link */}
        <AnimateIn variant="fade-up" delay={200} duration={500} className="mt-10 text-center">
          <a
            href="#get-the-app"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-primary transition-colors hover:text-brand-primary-hover hover:underline"
          >
            <span>Explore all these markets in the app</span>
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </AnimateIn>
      </Container>
    </section>
  );
}
