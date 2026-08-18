"use client";

import { useCallback, useEffect, useState } from "react";
import {
  TestimonialCard,
  type Testimonial,
} from "@/components/home/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/icons";

type TestimonialsSliderProps = {
  testimonials: Testimonial[];
};

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

export function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const perPage = usePerPage();
  const pageCount = Math.max(1, Math.ceil(testimonials.length / perPage));
  const [page, setPage] = useState(0);
  const activePage = Math.min(page, pageCount - 1);

  const goTo = useCallback(
    (next: number) => {
      setPage(((next % pageCount) + pageCount) % pageCount);
    },
    [pageCount],
  );

  const start = activePage * perPage;
  const visible = testimonials.slice(start, start + perPage);

  return (
    <div className="relative">
      <div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        aria-live="polite"
      >
        {visible.map((testimonial) => (
          <TestimonialCard
            key={`${testimonial.name}-${testimonial.location}`}
            testimonial={testimonial}
          />
        ))}
      </div>

      {pageCount > 1 ? (
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            type="button"
            variant="secondary"
            className="h-10 w-10 shrink-0 rounded-md px-0"
            aria-label="Previous testimonials"
            onClick={() => goTo(activePage - 1)}
          >
            <ArrowLeftIcon className="size-4" />
          </Button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial pages">
            {Array.from({ length: pageCount }, (_, index) => {
              const active = index === activePage;
              return (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Go to testimonials page ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    active
                      ? "w-6 bg-brand-primary"
                      : "w-2.5 bg-surface-border-strong hover:bg-ink-subtle"
                  }`}
                  onClick={() => goTo(index)}
                />
              );
            })}
          </div>

          <Button
            type="button"
            variant="secondary"
            className="h-10 w-10 shrink-0 rounded-md px-0"
            aria-label="Next testimonials"
            onClick={() => goTo(activePage + 1)}
          >
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>
      ) : null}
    </div>
  );
}
