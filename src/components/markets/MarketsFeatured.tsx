import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MonkeyAvatarIcon } from "@/components/markets/marketIcons";
import { featuredMarketItems } from "@/config/markets";

export function MarketsFeatured() {
  return (
    <section className="bg-surface py-12 lg:py-16" aria-labelledby="featured-markets-heading">
      <Container>
        {/* Section Header */}
        <div>
          <h2
            id="featured-markets-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink"
          >
            Featured Markets
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-ink-muted">
            A glimpse of the markets you can explore with Market Monkey.
          </p>
        </div>

        {/* 8 Markets Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {featuredMarketItems.map((market) => (
            <article
              key={market.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border/80 bg-surface shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-brand-soft-border"
            >
              <div>
                {/* Market Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-subtle">
                  <Image
                    src={market.imageSrc}
                    alt={market.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Market Info */}
                <div className="p-4">
                  <h3 className="truncate text-sm sm:text-base font-bold text-ink" title={market.name}>
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
                        className="rounded-md bg-surface-subtle border border-surface-border/60 px-2 py-0.5 text-[11px] font-medium text-ink-secondary"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Monkeys Live Footer */}
              <div className="px-4 pb-4 pt-1">
                <div className="flex items-center gap-2 border-t border-surface-border/50 pt-3 text-xs font-bold text-ink-secondary">
                  <MonkeyAvatarIcon className="size-4.5 shrink-0 text-brand-primary" />
                  <span>{market.monkeysLive} Monkeys Live</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-10 text-center">
          <a
            href="#get-the-app"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-primary transition-colors hover:text-brand-primary-hover hover:underline"
          >
            <span>Explore all these markets in the app</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
