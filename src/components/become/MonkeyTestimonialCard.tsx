import Image from "next/image";
import type { BecomeTestimonial } from "@/config/become";

export type MonkeyTestimonial = BecomeTestimonial;

type MonkeyTestimonialCardProps = {
  testimonial: MonkeyTestimonial;
};

export function MonkeyTestimonialCard({
  testimonial,
}: MonkeyTestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-surface-border bg-surface p-6 shadow-sm">
      <blockquote className="flex-1">
        <p className="text-base leading-relaxed text-ink-secondary italic">
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
          <p className="text-sm text-ink-muted">{testimonial.role}</p>
        </div>
      </footer>
    </article>
  );
}
