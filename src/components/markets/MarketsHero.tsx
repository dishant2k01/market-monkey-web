import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SmartphoneIcon } from "@/components/markets/marketIcons";

const marketsHeroImage = {
  src: "/images/hero/market.png",
  alt: "Market Monkey — explore local markets live with verified Monkeys",
} as const;

export function MarketsHero() {
  return (
    <section className="relative overflow-hidden bg-surface-muted pt-[var(--space-page-hero-y)] pb-12 lg:pt-[var(--space-page-hero-y-lg)] lg:pb-16">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <AnimateIn variant="fade-up" delay={50} duration={600}>
              <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] leading-[1.15]">
                Explore Real Markets <br />
                From <span className="text-brand-primary">Anywhere</span>
              </h1>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={150} duration={600}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
                Discover local markets across India with verified Market Monkeys.
                Compare products, prices, and local finds before you shop.
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={250} duration={600}>
              <div className="mt-7 flex flex-nowrap items-center gap-3 sm:gap-4">
                <a
                  href="#get-the-app"
                  className="inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-brand-primary px-6 py-3 text-xs font-bold text-white shadow-xs transition-all duration-200 hover:bg-brand-primary-hover hover:shadow-sm hover:-translate-y-0.5 sm:text-sm"
                >
                  <SmartphoneIcon className="size-4 shrink-0" />
                  <span>Get the App</span>
                </a>

                <Link
                  href="/become-a-monkey"
                  className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-surface-border bg-surface px-6 py-3 text-xs font-bold text-ink shadow-2xs transition-all duration-200 hover:border-ink/20 hover:bg-surface-subtle hover:-translate-y-0.5 sm:text-sm"
                >
                  <span>Become a Monkey</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateIn>
          </div>

          <div className="relative flex justify-center lg:col-span-6">
            <AnimateIn variant="zoom-in" delay={150} duration={750} className="relative w-full max-w-[560px] sm:max-w-[640px]">
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-soft/70 blur-xl sm:size-96"
                aria-hidden="true"
              />
              <div className="relative aspect-square w-full sm:aspect-[5/4]">
                <Image
                  src={marketsHeroImage.src}
                  alt={marketsHeroImage.alt}
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
