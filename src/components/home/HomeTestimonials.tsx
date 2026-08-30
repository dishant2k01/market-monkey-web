"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimateIn";
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

function usePerPage() {
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setPerPage(3);
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setPerPage(2);
      } else {
        setPerPage(1);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perPage;
}

function TestimonialCard({ testimonial }: { testimonial: HomeTestimonial }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7">
      <span className="text-brand-primary">
        <QuoteIcon className="size-8" />
      </span>
      <p className="mt-4 flex-1 text-base leading-relaxed text-ink-secondary">
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
  const perPage = usePerPage();
  const pageCount = Math.max(1, Math.ceil(homeTestimonials.length / perPage));
  const [page, setPage] = useState(0);
  const activePage = Math.min(page, pageCount - 1);

  const goTo = useCallback(
    (next: number) => {
      setPage(((next % pageCount) + pageCount) % pageCount);
    },
    [pageCount],
  );

  useEffect(() => {
    setPage(0);
  }, [perPage]);

  const start = activePage * perPage;
  const visible = homeTestimonials.slice(start, start + perPage);

  return (
    <section
      id="reviews"
      className="bg-brand-soft pt-[var(--space-section-y-featured-mobile)] lg:pt-[var(--space-section-y-featured)]"
      aria-labelledby="home-reviews-heading"
    >
      <Container>
        <AnimateIn variant="fade-up" delay={50} duration={600} className="mx-auto max-w-2xl text-center">
          <h2
            id="home-reviews-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            What <span className="text-brand-primary">People</span> Say
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            Real experiences from real users.
          </p>
        </AnimateIn>

        <StaggerContainer
          key={activePage}
          baseDelay={100}
          staggerMs={80}
          className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {visible.map((testimonial, index) => (
            <StaggerItem
              key={`${testimonial.name}-${testimonial.city}`}
              index={index}
              variant="fade-up"
            >
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {pageCount > 1 ? (
          <div
            className="mt-8 flex items-center justify-center gap-2 pb-[var(--space-section-y-mobile)] lg:pb-[var(--space-section-y)]"
            role="tablist"
            aria-label="Review pages"
          >
            {Array.from({ length: pageCount }, (_, index) => {
              const active = index === activePage;
              return (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Go to reviews page ${index + 1}`}
                  className={`size-2.5 rounded-full transition-all duration-300 ${
                    active
                      ? "w-6 bg-brand-primary"
                      : "bg-brand-soft-border hover:bg-brand-muted"
                  }`}
                  onClick={() => goTo(index)}
                />
              );
            })}
          </div>
        ) : (
          <div className="pb-[var(--space-section-y-mobile)] lg:pb-[var(--space-section-y)]" />
        )}
      </Container>
    </section>
  );
}
