import { Container } from "@/components/layout/Container";
import { FaqAccordionList } from "@/components/ui/FaqAccordionList";
import { contactFaqItems } from "@/config/contact";

export function ContactFaq() {
  return (
    <section
      id="faq"
      className="bg-surface-muted pt-[var(--space-section-y-mobile)] lg:pt-[var(--space-section-y)]"
      aria-labelledby="contact-faq-heading"
    >
      <Container>
        <h2
          id="contact-faq-heading"
          className="text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
        >
          Frequently Asked{" "}
          <span className="text-brand-primary">Questions</span>
        </h2>

        <div className="mx-auto mt-6 max-w-4xl lg:mt-8">
          <FaqAccordionList items={contactFaqItems} />
        </div>
      </Container>
    </section>
  );
}
