import { Container } from "@/components/layout/Container";

export function BlogHero() {
  return (
    <section
      className="bg-surface pt-[var(--space-section-y-mobile)] pb-8 lg:pt-[var(--space-section-y)] lg:pb-10"
      aria-labelledby="blog-hero-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <h1
            id="blog-hero-heading"
            className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
          >
            Insights that help you{" "}
            <span className="text-brand-primary">grow.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Tips, stories, and strategies to help you explore markets, analyze
            trends, and make smarter business decisions.
          </p>
        </div>
      </Container>
    </section>
  );
}
