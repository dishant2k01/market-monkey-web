import { Container } from "@/components/layout/Container";

type LegalPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
};

export function LegalPageHero({
  eyebrow,
  title,
  description,
  lastUpdated,
}: LegalPageHeroProps) {
  return (
    <section
      className="border-b border-surface-border bg-surface-muted py-[var(--space-section-y-mobile)] lg:py-16"
      aria-labelledby="legal-page-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-primary uppercase">
            {eyebrow}
          </p>
          <h1
            id="legal-page-heading"
            className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
          >
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            {description}
          </p>
          <p className="mt-5 text-sm font-medium text-ink-subtle">
            Last updated: {lastUpdated}
          </p>
        </div>
      </Container>
    </section>
  );
}
