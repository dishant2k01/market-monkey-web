import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-surface"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--brand-soft),transparent_55%)]"
        aria-hidden="true"
      />

      <Container className="relative pt-[var(--space-section-y-mobile)] pb-10 lg:pt-[var(--space-section-y)] lg:pb-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-soft-border bg-brand-soft px-3 py-1 text-xs font-semibold text-ink-secondary">
              <span
                className="size-1.5 rounded-full bg-brand-primary"
                aria-hidden="true"
              />
              Smarter Insights, Better Decisions.
            </p>

            <h1
              id="hero-heading"
              className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
            >
              Explore. Analyze.{" "}
              <span className="text-brand-primary">Grow</span> with Confidence.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Discover high-potential markets, track trends in real time, and
              make clearer growth decisions with Market Monkey.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                href="/#markets"
                size="lg"
                rightIcon={<ArrowRightIcon className="size-4" />}
              >
                Explore Any Market
              </Button>
              <Button href="/#how-it-works" variant="ghost" size="lg">
                See How It Works
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative overflow-hidden rounded-xl border border-surface-border bg-surface shadow-md">
              <Image
                src="/images/hero-dashboard.svg"
                alt="Market Monkey dashboard showing market overview, trending markets, and top industries"
                width={960}
                height={720}
                priority
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
