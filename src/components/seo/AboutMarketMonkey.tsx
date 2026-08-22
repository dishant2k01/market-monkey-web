import { Container } from "@/components/layout/Container";
import { aboutMarketMonkey } from "@/config/home";

export function AboutMarketMonkey() {
  return (
    <section
      id="about-market-monkey"
      className="border-t border-surface-border bg-surface-muted py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="about-mm-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="about-mm-heading"
            className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
          >
            {aboutMarketMonkey.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            {aboutMarketMonkey.description}
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {aboutMarketMonkey.highlights.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-surface-border bg-surface px-3 py-3 text-sm font-semibold text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
