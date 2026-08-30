import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ArrowRightIcon } from "@/components/ui/icons";
import { popularMarkets } from "@/config/home";

export function PopularMarkets() {
  return (
    <section
      id="markets"
      className="bg-surface pt-[var(--space-section-y-featured-mobile)] pb-[var(--space-section-y-mobile)] lg:pt-[var(--space-section-y-featured)] lg:pb-[var(--space-section-y)]"
      aria-labelledby="popular-markets-heading"
    >
      <Container>
        <AnimateIn variant="fade-up" delay={50} duration={500} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2
            id="popular-markets-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Popular <span className="text-brand-primary">Markets</span> to
            Explore
          </h2>
          <Link
            href="/#markets"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition-colors hover:text-brand-primary-hover"
          >
            <span>View All Markets</span>
            <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </AnimateIn>

        <AnimateIn
          variant="fade-up"
          delay={120}
          duration={600}
          as="ul"
          className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-10 lg:grid-cols-4"
        >
          {popularMarkets.slice(0, 4).map((market) => (
            <li key={market.name}>
              <Link
                href={market.href}
                className="group block rounded-2xl outline-none transition-transform duration-300 ease-[var(--motion-ease)] hover:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-surface-subtle shadow-xs transition-[box-shadow] duration-300 ease-[var(--motion-ease)] group-hover:shadow-md">
                  <Image
                    src={market.imageSrc}
                    alt={market.imageAlt}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 ease-[var(--motion-ease)] group-hover:scale-110"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-surface-inverse/70 via-surface-inverse/10 to-transparent opacity-0 transition-opacity duration-300 ease-[var(--motion-ease)] group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <span className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between gap-2 px-3.5 py-3 text-sm font-semibold text-ink-inverse opacity-0 transition-all duration-300 ease-[var(--motion-ease)] group-hover:translate-y-0 group-hover:opacity-100">
                    Explore market
                    <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-primary text-brand-primary-foreground">
                      <ArrowRightIcon className="size-3.5" />
                    </span>
                  </span>
                </div>

                <div className="px-0.5 pt-3">
                  <h3 className="text-sm font-bold text-ink transition-colors duration-300 group-hover:text-brand-primary sm:text-base">
                    {market.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-ink-muted sm:text-sm">
                    {market.city}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </AnimateIn>
      </Container>
    </section>
  );
}
