import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { Container } from "@/components/layout/Container";
import { homeTestimonials } from "@/config/home";

export function WhatOurUsersSay() {
  return (
    <section
      id="testimonials"
      className="bg-surface-muted py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-primary uppercase">
            What Our Users Say
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Real people. Real experiences.
          </h2>
        </div>

        <div className="mt-12 lg:mt-14">
          <TestimonialsSlider testimonials={homeTestimonials} />
        </div>
      </Container>
    </section>
  );
}
