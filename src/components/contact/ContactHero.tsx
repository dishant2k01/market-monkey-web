import Image from "next/image";
import {
  HeartIcon,
  HeadsetIcon,
} from "@/components/contact/contactIcons";
import { Container } from "@/components/layout/Container";
import {
  contactHero,
  contactHeroHighlights,
  type ContactHeroHighlight,
} from "@/config/contact";
import type { ReactNode } from "react";

const highlightIcons: Record<ContactHeroHighlight["icon"], ReactNode> = {
  headset: <HeadsetIcon className="size-5" />,
  heart: <HeartIcon className="size-5" />,
};

export function ContactHero() {
  return (
    <section
      className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="contact-hero-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
              {contactHero.eyebrow}
            </p>
            <h1
              id="contact-hero-heading"
              className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
            >
              {contactHero.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              {contactHero.description}
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactHeroHighlights.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                    {highlightIcons[item.icon]}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{item.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <Image
              src="/images/contact/right-image.jpeg"
              alt="Market Monkey app shown on two phones"
              width={640}
              height={640}
              className="h-auto w-full bg-transparent object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
