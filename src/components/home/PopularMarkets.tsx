import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRightIcon, UsersIcon } from "@/components/ui/icons";
import { popularMarkets } from "@/config/home";

export function PopularMarkets() {
  return (
    <section
      id="markets"
      className="bg-surface py-12 lg:py-16"
      aria-labelledby="popular-markets-heading"
    >
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="popular-markets-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Popular <span className="text-brand-primary">Markets</span> to
            Explore
          </h2>
          <Link
            href="/#markets"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-hover"
          >
            View All Markets
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </div>
        <p className="mt-2 max-w-xl text-base text-ink-muted">
          Discover real markets, local products and trusted Monkeys.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularMarkets.map((market) => (
            <li key={market.name}>
              <Link
                href={market.href}
                className="group block overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-xs transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-subtle">
                  <Image
                    src={market.imageSrc}
                    alt={market.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 360px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-ink">{market.name}</h3>
                  <p className="mt-0.5 text-sm text-ink-muted">{market.city}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-ink-secondary">
                    <UsersIcon className="size-3.5 text-brand-primary" />
                    {market.monkeys} Monkeys
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
