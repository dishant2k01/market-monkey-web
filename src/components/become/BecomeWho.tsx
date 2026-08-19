import {
  BuildIcon,
  ChartIcon,
  FlagIcon,
  LightbulbIcon,
  SparkIcon,
  UsersOutlineIcon,
} from "@/components/about/aboutIcons";
import { Container } from "@/components/layout/Container";
import { becomeAudiences, type BecomeAudience } from "@/config/become";
import type { ReactNode } from "react";

const audienceIcons: Record<BecomeAudience["icon"], ReactNode> = {
  spark: <SparkIcon className="size-4" />,
  users: <UsersOutlineIcon className="size-4" />,
  flag: <FlagIcon className="size-4" />,
  lightbulb: <LightbulbIcon className="size-4" />,
  build: <BuildIcon className="size-4" />,
  chart: <ChartIcon className="size-4" />,
};

export function BecomeWho() {
  return (
    <section
      className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="become-who-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="become-who-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Who can become a Monkey?
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            If you have skills and passion to help others, you can join.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {becomeAudiences.map((item) => (
            <li key={item.label}>
              <div className="flex items-center gap-3 rounded-full border border-surface-border bg-surface px-4 py-3 shadow-xs transition-colors hover:border-brand-soft-border hover:bg-brand-soft/40">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                  {audienceIcons[item.icon]}
                </span>
                <span className="text-sm font-semibold text-ink">
                  {item.label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
