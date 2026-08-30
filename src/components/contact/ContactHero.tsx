import Image from "next/image";
import {
  HeartIcon,
  HeadsetIcon,
} from "@/components/contact/contactIcons";
import { Container } from "@/components/layout/Container";
import {
  AnimateIn,
  FloatingElement,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimateIn";
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
      className="bg-surface pt-8 pb-8 lg:pt-10 lg:pb-10"
      aria-labelledby="contact-hero-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="max-w-xl">
            <AnimateIn variant="fade-up" delay={50} duration={600}>
              <h1
                id="contact-hero-heading"
                className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
              >
                {contactHero.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
                {contactHero.description}
              </p>
            </AnimateIn>

            <StaggerContainer
              baseDelay={200}
              staggerMs={90}
              as="ul"
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {contactHeroHighlights.map((item, index) => (
                <StaggerItem
                  as="li"
                  key={item.title}
                  index={index}
                  className="flex items-start gap-3 rounded-xl p-2 transition-transform duration-200 hover:translate-x-1"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary shadow-2xs">
                    {highlightIcons[item.icon]}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{item.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="mx-auto w-full max-w-lg lg:max-w-xl">
            <Image
              src="/images/about/right-image.png"
              alt="Market Monkey App — Contact & Support"
              width={1000}
              height={800}
              unoptimized
              className="h-auto w-full bg-transparent object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
