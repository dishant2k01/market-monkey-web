import { MonkeyTestimonialsSlider } from "@/components/become/MonkeyTestimonialsSlider";
import { Container } from "@/components/layout/Container";
import { becomeTestimonials } from "@/config/become";

export function BecomeTestimonials() {
  return (
    <section
      className="bg-surface-muted py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="become-testimonials-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="become-testimonials-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            What Monkeys are saying
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            Real stories from our community
          </p>
        </div>

        <div className="mt-12 lg:mt-14">
          <MonkeyTestimonialsSlider testimonials={becomeTestimonials} />
        </div>
      </Container>
    </section>
  );
}
