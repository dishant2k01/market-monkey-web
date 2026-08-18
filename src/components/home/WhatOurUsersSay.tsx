import type { Testimonial } from "@/components/home/TestimonialCard";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { Container } from "@/components/layout/Container";

const testimonials: Testimonial[] = [
  {
    quote:
      "I found the exact same I wanted at half the price! The Monkey showed me so many options in real-time.",
    name: "Priya S.",
    location: "Mumbai",
    avatarSrc: "/images/testimonials/priya.jpg",
  },
  {
    quote:
      "Amazing experience! I could compare prices from different shops without even stepping out.",
    name: "Rahul Mehta",
    location: "Bangalore",
    avatarSrc: "/images/testimonials/rahul.jpg",
  },
  {
    quote:
      "Super helpful Monkeys and a great way to shop smart. Highly recommended!",
    name: "Neha Kapoor",
    location: "Delhi",
    avatarSrc: "/images/testimonials/neha.jpg",
  },
  {
    quote:
      "Booked a live walkthrough of the spice market before my trip. Saved time and money on day one.",
    name: "Arjun Patel",
    location: "Pune",
    avatarSrc: "/images/testimonials/arjun.jpg",
  },
  {
    quote:
      "I checked fabric quality over video and negotiated confidently. Felt like I was shopping in person.",
    name: "Meera Iyer",
    location: "Chennai",
    avatarSrc: "/images/testimonials/meera.jpg",
  },
  {
    quote:
      "The live call helped me avoid a bad deal on electronics. Clear, fast, and trustworthy.",
    name: "Vikram Shah",
    location: "Ahmedabad",
    avatarSrc: "/images/testimonials/vikram.jpg",
  },
];

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
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </Container>
    </section>
  );
}
