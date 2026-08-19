import {
  ChartIcon,
  GlobeIcon,
  ShieldCheckOutlineIcon,
  UsersOutlineIcon,
} from "@/components/about/aboutIcons";
import { Container } from "@/components/layout/Container";
import { aboutStats, type AboutStat } from "@/config/about";
import type { ReactNode } from "react";

const statIcons: Record<AboutStat["icon"], ReactNode> = {
  users: <UsersOutlineIcon className="size-5" />,
  chart: <ChartIcon className="size-5" />,
  globe: <GlobeIcon className="size-5" />,
  shield: <ShieldCheckOutlineIcon className="size-5" />,
};

export function AboutStats() {
  return (
    <section
      className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-label="Market Monkey statistics"
    >
      <Container>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {aboutStats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-xl border border-surface-border bg-surface px-5 py-7 text-center shadow-sm"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                {statIcons[stat.icon]}
              </span>
              <p className="mt-4 text-3xl font-extrabold tracking-tight text-ink">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
