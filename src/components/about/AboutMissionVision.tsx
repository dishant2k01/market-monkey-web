import {
  EyeIcon,
  TargetIcon,
} from "@/components/about/aboutIcons";
import { Container } from "@/components/layout/Container";
import { aboutPillars, type AboutPillar } from "@/config/about";
import type { ReactNode } from "react";

const pillarIcons: Record<AboutPillar["icon"], ReactNode> = {
  mission: <TargetIcon className="size-8" />,
  vision: <EyeIcon className="size-8" />,
};

export function AboutMissionVision() {
  return (
    <section
      className="bg-surface pb-[var(--space-section-y-mobile)] lg:pb-[var(--space-section-y)]"
      aria-label="Our mission and vision"
    >
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-sm">
          <span
            className="pointer-events-none absolute top-1/2 left-1/2 hidden h-16 w-px -translate-x-1/2 -translate-y-1/2 bg-surface-border lg:block"
            aria-hidden="true"
          />
          <ul className="grid lg:grid-cols-2">
            {aboutPillars.map((item, index) => (
              <li
                key={item.title}
                className={`relative px-6 py-8 sm:px-8 sm:py-10 ${
                  index === 0
                    ? "after:absolute after:right-6 after:bottom-0 after:left-6 after:h-px after:bg-surface-border after:content-[''] lg:after:hidden sm:after:right-8 sm:after:left-8"
                    : ""
                }`}
              >
                <article className="flex items-center gap-5 sm:gap-6">
                  <span className="inline-flex size-[4.5rem] shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary sm:size-[5.25rem]">
                    {pillarIcons[item.icon]}
                  </span>
                  <div className="min-w-0 text-left">
                    <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
