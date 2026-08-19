import {
  ClockOutlineIcon,
  RupeeIcon,
} from "@/components/become/becomeIcons";
import {
  ChartIcon,
  UsersOutlineIcon,
} from "@/components/about/aboutIcons";
import { Container } from "@/components/layout/Container";
import { becomeReasons, type BecomeReason } from "@/config/become";
import type { ReactNode } from "react";

const reasonIcons: Record<BecomeReason["icon"], ReactNode> = {
  clock: <ClockOutlineIcon />,
  users: <UsersOutlineIcon className="size-6" />,
  rupee: <RupeeIcon className="size-6" />,
  chart: <ChartIcon className="size-6" />,
};

export function BecomeWhy() {
  return (
    <section
      className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="become-why-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="become-why-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Why become a Monkey?
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            Turn your knowledge and experience into income.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {becomeReasons.map((item) => (
            <li key={item.title}>
              <article className="flex h-full flex-col items-start rounded-xl border border-surface-border bg-surface p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-soft text-brand-primary">
                  {reasonIcons[item.icon]}
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
