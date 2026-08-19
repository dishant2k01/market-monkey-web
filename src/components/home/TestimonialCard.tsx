import Image from "next/image";
import { QuoteIcon } from "@/components/ui/icons";
import type { HomeTestimonial } from "@/config/home";

export type Testimonial = HomeTestimonial;

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-surface-border bg-surface p-6 shadow-sm sm:p-7">
      <QuoteIcon className="size-7 text-brand-primary" />
      <blockquote className="mt-4 flex-1">
        <p className="text-base leading-relaxed text-ink-secondary">
          “{testimonial.quote}”
        </p>
      </blockquote>
      <footer className="mt-6 flex items-center gap-3">
        <Image
          src={testimonial.avatarSrc}
          alt=""
          width={44}
          height={44}
          className="size-11 rounded-full object-cover"
        />
        <div>
          <cite className="block text-sm font-bold not-italic text-ink">
            {testimonial.name}
          </cite>
          <p className="text-sm text-ink-muted">{testimonial.location}</p>
        </div>
      </footer>
    </article>
  );
}
