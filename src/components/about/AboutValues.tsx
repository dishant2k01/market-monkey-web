import {
  HeartIcon,
  RocketIcon,
  ShieldCheckOutlineIcon,
  UsersOutlineIcon,
} from "@/components/about/aboutIcons";
import { Container } from "@/components/layout/Container";
import { aboutValues, type AboutValue } from "@/config/about";
import type { ReactNode } from "react";

const valueIcons: Record<AboutValue["icon"], ReactNode> = {
  users: <UsersOutlineIcon className="size-7" />,
  shield: <ShieldCheckOutlineIcon className="size-7" />,
  heart: <HeartIcon className="size-7" />,
  rocket: <RocketIcon className="size-7" />,
};

export function AboutValues() {
  return (
    <section
      className="bg-surface-muted py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="about-values-heading"
    >
      <Container>
        <h2
          id="about-values-heading"
          className="text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
        >
          Our Values
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {aboutValues.map((value) => (
            <li key={value.title}>
              <article className="flex h-full flex-col items-center rounded-2xl border border-surface-border bg-surface px-5 py-8 text-center shadow-sm transition-shadow duration-200 hover:shadow-md">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
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
