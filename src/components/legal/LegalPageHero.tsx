import { Container } from "@/components/layout/Container";

type LegalPageHeroProps = {
  title: string;
  titleAccent?: string;
  description: string;
  lastUpdated: string;
};

export function LegalPageHero({
  title,
  titleAccent,
  description,
  lastUpdated,
}: LegalPageHeroProps) {
  return (
    <section
      className="border-b border-surface-border bg-surface pt-[var(--space-page-hero-y)] pb-10 lg:pt-[var(--space-page-hero-y-lg)] lg:pb-12"
      aria-labelledby="legal-page-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1
            id="legal-page-heading"
            className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
          >
            {title}
            {titleAccent ? (
              <>
                {" "}
                <span className="text-brand-primary">{titleAccent}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {description}
          </p>
          <p className="mt-5 inline-flex rounded-full bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand-primary">
            Last updated: {lastUpdated}
          </p>
        </div>
      </Container>
    </section>
  );
}
