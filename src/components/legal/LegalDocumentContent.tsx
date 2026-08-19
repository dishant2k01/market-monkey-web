import type { LegalSection } from "@/config/legal";
import { LegalTableOfContents } from "@/components/legal/LegalTableOfContents";
import { Container } from "@/components/layout/Container";

type LegalDocumentContentProps = {
  sections: LegalSection[];
};

export function LegalDocumentContent({ sections }: LegalDocumentContentProps) {
  return (
    <section className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]">
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
                        key={paragraph.slice(0, 48)}
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

            <div className="mt-12 rounded-xl border border-brand-soft-border bg-brand-soft px-5 py-4">
              <p className="text-sm leading-relaxed text-ink-secondary">
                This page contains placeholder legal content for design and
                development purposes. Replace it with counsel-approved copy
                before production launch.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
