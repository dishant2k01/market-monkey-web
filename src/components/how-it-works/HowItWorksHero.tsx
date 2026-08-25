"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ShopIcon } from "@/components/ui/icons";

const howItWorksHeroImage = {
  src: "/images/hero/how_it_works.png",
  alt: "Market Monkey how it works — find, explore, connect, and go live",
} as const;

export function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF9] pt-[var(--space-page-hero-y)] pb-16 lg:pt-[var(--space-page-hero-y-lg)] lg:pb-24">
      <div
        className="pointer-events-none absolute -top-24 right-0 size-[500px] rounded-full bg-brand-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Explore any market in{" "}
              <span className="text-brand-primary">4 simple steps.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Market Monkey connects you with verified local Monkeys who show
              you real markets live. Ask, view, compare and shop with total
              confidence.
            </p>

            <div className="mt-8 flex flex-nowrap items-center gap-3 sm:gap-4">
              <Button
                href="/#markets"
                size="lg"
                leftIcon={<ShopIcon className="size-4" />}
                className="shrink-0 whitespace-nowrap font-semibold"
              >
                Explore Markets
              </Button>

              <Link
                href="/become-a-monkey"
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-surface-border bg-surface px-6 py-3 text-xs font-bold text-ink shadow-2xs transition-all hover:border-ink/20 hover:bg-surface-subtle sm:text-sm"
              >
                <span>Become a Monkey</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-6 xl:col-span-6">
            <div className="relative w-full max-w-[600px] sm:max-w-[680px]">
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-soft/70 blur-xl sm:size-96"
                aria-hidden="true"
              />
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={howItWorksHeroImage.src}
                  alt={howItWorksHeroImage.alt}
                  fill
                  priority
                  unoptimized
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 680px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
