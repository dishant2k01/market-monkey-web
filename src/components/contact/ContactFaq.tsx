import { ContactFaqAccordion } from "@/components/contact/ContactFaqAccordion";
import { Container } from "@/components/layout/Container";
import { contactFaqItems } from "@/config/contact";

export function ContactFaq() {
  return (
    <section
      id="faq"
      className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="contact-faq-heading"
    >
      <Container>
        <div className="rounded-2xl bg-surface-muted px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="contact-faq-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl lg:mt-12">
            <ContactFaqAccordion items={contactFaqItems} />
          </div>
        </div>
      </Container>
    </section>
  );
}
