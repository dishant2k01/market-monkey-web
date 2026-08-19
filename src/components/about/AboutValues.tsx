import {
  HeartIcon,
  LightbulbIcon,
  RocketIcon,
  ShieldCheckOutlineIcon,
} from "@/components/about/aboutIcons";
import { Container } from "@/components/layout/Container";
import { aboutValues, type AboutValue } from "@/config/about";
import type { ReactNode } from "react";

const valueIcons: Record<AboutValue["icon"], ReactNode> = {
  heart: <HeartIcon className="size-7" />,
  shield: <ShieldCheckOutlineIcon className="size-7" />,
  lightbulb: <LightbulbIcon className="size-7" />,
  rocket: <RocketIcon className="size-7" />,
};

export function AboutValues() {
  return (
    <section
      className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="about-values-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-primary uppercase">
            Our Values
          </p>
          <h2
            id="about-values-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            What Drives Us Every Day
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {aboutValues.map((value) => (
            <li key={value.title}>
              <article className="flex h-full flex-col items-center rounded-xl border border-surface-border bg-surface px-5 py-8 text-center shadow-sm transition-shadow duration-200 hover:shadow-md">
                <span className="inline-flex size-14 items-center justify-center rounded-xl bg-brand-soft text-brand-primary">
                  {valueIcons[value.icon]}
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {value.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
