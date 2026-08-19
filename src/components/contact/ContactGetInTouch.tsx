import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/layout/Container";

export function ContactGetInTouch() {
  return (
    <section
      className="bg-surface-muted py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-label="Contact details and message form"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
