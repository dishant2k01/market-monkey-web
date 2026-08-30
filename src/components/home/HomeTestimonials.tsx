"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { homeTestimonials, type HomeTestimonial } from "@/config/home";

function QuoteIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8.5 18.5c0-4.2 2.4-7.4 6.2-8.6l-.8 3.1c-1.7.7-2.7 2.1-2.7 3.8h3.3V24H8.5v-5.5Zm11.2 0c0-4.2 2.4-7.4 6.2-8.6l-.8 3.1c-1.7.7-2.7 2.1-2.7 3.8h3.3V24h-6V18.5Z" />
    </svg>
  );
}

function StarIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.8 12.4 7l5.6.5-4.3 3.7 1.3 5.4L10 14.4 4.9 16.6l1.3-5.4L2 7.5 7.6 7 10 1.8Z" />
    </svg>
  );
}

function ArrowLeftIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 19l-7-7 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: HomeTestimonial }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-surface p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-7">
      <span className="text-brand-primary">
        <QuoteIcon className="size-8" />
      </span>
      <p className="mt-4 flex-1 text-sm sm:text-base leading-relaxed text-ink-secondary">
        “{testimonial.quote}”
      </p>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-surface-border pt-5">
        <div className="flex min-w-0 items-center gap-3">
          <span className="relative size-11 shrink-0 overflow-hidden rounded-full bg-surface-subtle">
            <Image
              src={testimonial.avatarSrc}
              alt={testimonial.avatarAlt}
              fill
              className="object-cover"
              sizes="44px"
            />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-ink">
              {testimonial.name}
            </p>
            <p className="truncate text-xs text-ink-muted">{testimonial.city}</p>
          </div>
        </div>
        <div
          className="flex shrink-0 items-center gap-0.5 text-brand-primary"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: testimonial.rating }, (_, index) => (
            <StarIcon key={index} className="size-3.5" />
          ))}
        </div>
      </div>
    </article>
  );
}

export function HomeTestimonials() {
  const [itemsPerView, setItemsPerView] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalItems = homeTestimonials.length;

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setItemsPerView(3);
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-scroll slider every 3.5 seconds
  useEffect(() => {
    if (maxIndex === 0 || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [maxIndex, isPaused, nextSlide]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  // Slide track translation
  const slideWidthPercent = 100 / itemsPerView;
  const trackTransform = `translateX(-${currentIndex * slideWidthPercent}%)`;

  const totalDots = maxIndex + 1;

  return (
    <section
      id="reviews"
      className="bg-brand-soft pt-[var(--space-section-y-featured-mobile)] pb-[var(--space-section-y-mobile)] lg:pt-[var(--space-section-y-featured)] lg:pb-[var(--space-section-y)]"
      aria-labelledby="home-reviews-heading"
    >
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
          <AnimateIn variant="fade-up" delay={50} duration={600} className="text-center sm:text-left">
            <h2
              id="home-reviews-heading"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
            >
              What <span className="text-brand-primary">People</span> Say
            </h2>
            <p className="mt-2 text-base text-ink-muted sm:text-lg">
              Real experiences from real users.
            </p>
          </AnimateIn>

          {/* Navigation Arrow Buttons */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="inline-flex size-10 items-center justify-center rounded-full border border-brand-soft-border bg-surface text-ink shadow-xs transition-all duration-200 hover:border-brand-primary hover:bg-brand-soft hover:text-brand-primary active:scale-95"
            >
              <ArrowLeftIcon className="size-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="inline-flex size-10 items-center justify-center rounded-full border border-brand-soft-border bg-surface text-ink shadow-xs transition-all duration-200 hover:border-brand-primary hover:bg-brand-soft hover:text-brand-primary active:scale-95"
            >
              <ArrowRightIcon className="size-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slider Track */}
        <div
          className="relative mt-8 sm:mt-10 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: trackTransform }}
          >
            {homeTestimonials.map((testimonial, idx) => (
              <div
                key={`${testimonial.name}-${testimonial.city}-${idx}`}
                className="w-full shrink-0 px-2.5 sm:w-1/2 sm:px-3 lg:w-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Pagination */}
        {totalDots > 1 ? (
          <div
            className="mt-8 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {Array.from({ length: totalDots }, (_, index) => {
              const active = index === currentIndex;
              return (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`size-2.5 rounded-full transition-all duration-300 ${
                    active
                      ? "w-6 bg-brand-primary"
                      : "bg-brand-soft-border hover:bg-brand-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              );
            })}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
