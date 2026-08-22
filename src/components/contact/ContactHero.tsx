import {
  ClockIcon,
  ContactHeroGraphic,
  HeadsetIcon,
} from "@/components/contact/contactIcons";
import { Container } from "@/components/layout/Container";
import {
  contactHeroHighlights,
  type ContactHeroHighlight,
} from "@/config/contact";
import type { ReactNode } from "react";

const highlightIcons: Record<ContactHeroHighlight["icon"], ReactNode> = {
  clock: <ClockIcon className="size-4" />,
  headset: <HeadsetIcon className="size-4" />,
};

export function ContactHero() {
  return (
    <section
      className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="contact-hero-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div className="max-w-xl">
            <h1
              id="contact-hero-heading"
              className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
            >
              We&apos;re here to help.
              <span className="mt-1 block text-brand-primary">
                Let&apos;s grow together.
              </span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Have questions about Market Monkey? Our team is ready to help you
              explore markets and unlock new opportunities.
            </p>

            <ul className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
              {contactHeroHighlights.map((item) => (
                <li
                  key={item.text}
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-ink-secondary"
                >
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                    {highlightIcons[item.icon]}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-surface-border bg-surface p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <ContactHeroGraphic />
              <p className="text-sm leading-relaxed text-ink-secondary sm:text-base">
                <span className="font-bold text-ink">
                  Have a question or need guidance?
                </span>{" "}
                Fill out the form and our team will get back to you shortly.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
