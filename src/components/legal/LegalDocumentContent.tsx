import Link from "next/link";
import type { LegalSection } from "@/config/legal";
import { LegalTableOfContents } from "@/components/legal/LegalTableOfContents";
import { Container } from "@/components/layout/Container";

type LegalDocumentContentProps = {
  sections: LegalSection[];
  relatedHref: string;
  relatedLabel: string;
};

export function LegalDocumentContent({
  sections,
  relatedHref,
  relatedLabel,
}: LegalDocumentContentProps) {
  return (
    <section className="bg-surface-muted pt-[var(--space-section-y-mobile)] pb-[var(--space-section-y-mobile)] lg:pt-[var(--space-section-y)] lg:pb-[var(--space-section-y)]">
      <Container>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
          <LegalTableOfContents sections={sections} />

          <div className="rounded-2xl border border-surface-border bg-surface p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="space-y-10">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <h2 className="text-xl font-extrabold tracking-tight text-ink">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 64)}
                        className="text-sm leading-relaxed text-ink-muted sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets ? (
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted sm:text-base">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-3 rounded-xl border border-brand-soft-border bg-brand-soft px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-ink-secondary">
                Looking for related legal information?
              </p>
              <Link
                href={relatedHref}
                className="inline-flex text-sm font-semibold text-brand-primary hover:text-brand-primary-hover"
              >
                {relatedLabel} →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
