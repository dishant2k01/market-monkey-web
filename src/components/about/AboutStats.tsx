import {
  MapPinOutlineIcon,
  ShopOutlineIcon,
  StarOutlineIcon,
  UsersOutlineIcon,
} from "@/components/about/aboutIcons";
import { Container } from "@/components/layout/Container";
import { aboutStats, type AboutStat } from "@/config/about";
import type { ReactNode } from "react";

const statIcons: Record<AboutStat["icon"], ReactNode> = {
  shop: <ShopOutlineIcon className="size-7" />,
  users: <UsersOutlineIcon className="size-7" />,
  mapPin: <MapPinOutlineIcon className="size-7" />,
  star: <StarOutlineIcon className="size-7" />,
};

export function AboutStats() {
  return (
    <section
      className="bg-surface pb-[var(--space-section-y-mobile)] lg:pb-[var(--space-section-y)]"
      aria-label="Market Monkey statistics"
    >
      <Container>
        <ul className="flex flex-col rounded-2xl border border-surface-border bg-surface shadow-sm lg:flex-row">
          {aboutStats.map((stat, index) => (
            <li
              key={stat.label}
              className={`flex flex-1 items-center gap-4 px-5 py-7 sm:px-6 sm:py-8 ${
                index < aboutStats.length - 1
                  ? "border-b border-surface-border lg:border-r lg:border-b-0"
                  : ""
              }`}
            >
              <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary sm:size-[4.25rem]">
                {statIcons[stat.icon]}
              </span>
              <div className="min-w-0 text-left">
                <p className="text-2xl font-extrabold tracking-tight text-brand-primary sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-sm text-ink-muted">{stat.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
