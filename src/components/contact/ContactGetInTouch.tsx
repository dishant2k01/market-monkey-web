import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/layout/Container";

export function ContactGetInTouch() {
  return (
    <section
      className="bg-surface pb-[var(--space-section-y-mobile)] lg:pb-[var(--space-section-y)]"
      aria-label="Contact details and message form"
    >
      <Container>
        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex h-full flex-col rounded-3xl border border-surface-border bg-surface p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
          <div className="flex h-full flex-col rounded-3xl border border-surface-border bg-surface p-6 shadow-sm sm:p-8">
            <ContactDetails />
          </div>
        </div>
      </Container>
    </section>
  );
}
