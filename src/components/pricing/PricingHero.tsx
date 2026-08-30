import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimateIn, FloatingElement } from "@/components/ui/AnimateIn";
import { CheckIcon } from "@/components/ui/icons";
import { pricingHero } from "@/config/pricingPage";

const pricingHeroImage = {
  src: "/images/hero/pricing.png",
  alt: "Market Monkey pricing — simple plans with more value",
} as const;

export function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF9] pt-[var(--space-page-hero-y)] pb-12 lg:pt-[var(--space-page-hero-y-lg)] lg:pb-16">
      <div
        className="pointer-events-none absolute -top-24 right-0 size-[500px] rounded-full bg-brand-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-6">
            <AnimateIn variant="fade-up" delay={50} duration={600}>
              <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
                {pricingHero.titleBefore}{" "}
                <br />
                <span className="text-brand-primary">{pricingHero.titleAccent}</span>
              </h1>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={150} duration={600}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {pricingHero.description}
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={250} duration={600}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {pricingHero.trustBadges.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 rounded-full border border-[#FFE8D6] bg-white px-3.5 py-2 shadow-xs transition-all duration-200 hover:shadow-sm hover:border-brand-primary/40 hover:-translate-y-0.5"
                  >
                    <span className="flex size-4 items-center justify-center rounded-full border border-brand-primary/40 bg-brand-soft text-brand-primary">
                      <CheckIcon className="size-2.5" />
                    </span>
                    <span className="text-xs font-semibold text-ink sm:text-sm">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          <div className="relative flex justify-center lg:col-span-6 xl:col-span-6">
            <AnimateIn variant="zoom-in" delay={150} duration={750} className="relative w-full max-w-[560px] sm:max-w-[640px]">
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-soft/70 blur-xl sm:size-96"
                aria-hidden="true"
              />
              <FloatingElement animation="float">
                <div className="relative aspect-square w-full sm:aspect-[5/4]">
                  <Image
                    src={pricingHeroImage.src}
                    alt={pricingHeroImage.alt}
                    fill
                    priority
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 640px"
                  />
                </div>
              </FloatingElement>
            </AnimateIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
