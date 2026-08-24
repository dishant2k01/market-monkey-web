import { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import {
  FaqAccordionList,
  type FaqAccordionItem,
} from "@/components/ui/FaqAccordionList";

type CommonFaqSectionProps = {
  id?: string;
  title?: ReactNode;
  highlightText?: string;
  subtitle?: string;
  items: FaqAccordionItem[];
  className?: string;
  idPrefix?: string;
};

export function CommonFaqSection({
  id = "faq",
  title = "Frequently Asked Questions",
  highlightText = "Questions",
  subtitle,
  items,
  className = "bg-surface pt-[var(--space-section-y-mobile)] lg:pt-[var(--space-section-y)] pb-[var(--space-section-y-mobile)] lg:pb-[var(--space-section-y)]",
  idPrefix,
}: CommonFaqSectionProps) {
  return (
    <section
      id={id}
      className={className}
      aria-labelledby={`${id}-heading`}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id={`${id}-heading`}
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            {typeof title === "string" ? (
              <>
                {highlightText && title.includes(highlightText) ? (
                  <>
                    {title.split(highlightText)[0]}
                    <span className="text-brand-primary">{highlightText}</span>
                    {title.split(highlightText)[1]}
                  </>
                ) : (
                  title
                )}
              </>
            ) : (
              title
            )}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-ink-muted sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mx-auto mt-8 max-w-4xl lg:mt-10">
          <FaqAccordionList items={items} idPrefix={idPrefix} />
        </div>
      </Container>
    </section>
  );
}
