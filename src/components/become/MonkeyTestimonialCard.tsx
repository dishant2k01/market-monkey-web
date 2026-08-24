import Image from "next/image";
import { QuoteIcon, SolidStarIcon } from "@/components/become/becomeIcons";
import type { BecomeTestimonial } from "@/config/become";

export type MonkeyTestimonial = BecomeTestimonial;

type MonkeyTestimonialCardProps = {
  testimonial: MonkeyTestimonial;
};

export function MonkeyTestimonialCard({
  testimonial,
}: MonkeyTestimonialCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-surface-border/80 bg-surface p-6 sm:p-7 shadow-xs transition-shadow duration-200 hover:shadow-md">
      <div>
        {/* Orange Quote Icon */}
        <div className="text-brand-primary">
          <QuoteIcon className="size-6 text-brand-primary" />
        </div>

        {/* Quote text */}
        <blockquote className="mt-3.5">
          <p className="text-xs sm:text-sm leading-relaxed text-ink-secondary">
            {testimonial.quote}
          </p>
        </blockquote>
      </div>

      {/* Author Details and Star Rating */}
      <footer className="mt-6 flex items-center justify-between gap-3 border-t border-surface-border/50 pt-4">
        <div className="flex items-center gap-3">
          <div className="relative size-10 shrink-0 overflow-hidden rounded-full ring-1 ring-surface-border">
            <Image
              src={testimonial.avatarSrc}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div>
            <cite className="block text-xs sm:text-sm font-bold not-italic text-ink">
              {testimonial.name}
            </cite>
            <p className="text-[11px] font-medium text-ink-muted">
              {testimonial.location}
            </p>
          </div>
        </div>

        {/* 5-Star Rating */}
        <div className="flex items-center gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <SolidStarIcon key={i} className="size-3 sm:size-3.5 text-brand-primary" />
          ))}
        </div>
      </footer>
    </article>
  );
}
