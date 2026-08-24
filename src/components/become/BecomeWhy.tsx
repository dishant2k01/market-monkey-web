import { Container } from "@/components/layout/Container";
import {
  ClockOutlineIcon,
  RupeeIcon,
  ChartTrendingIcon,
  UsersGroupIcon,
  BossCompassIcon,
  TrustedBadgeIcon,
} from "@/components/become/becomeIcons";
import { becomeReasons, type BecomeReason } from "@/config/become";
import type { ReactNode } from "react";

const reasonIcons: Record<BecomeReason["icon"], ReactNode> = {
  clock: <ClockOutlineIcon className="size-5 sm:size-6 lg:size-5 xl:size-6 text-brand-primary" />,
  rupee: <RupeeIcon className="size-5 sm:size-6 lg:size-5 xl:size-6 text-brand-primary" />,
  chart: <ChartTrendingIcon className="size-5 sm:size-6 lg:size-5 xl:size-6 text-brand-primary" />,
  users: <UsersGroupIcon className="size-5 sm:size-6 lg:size-5 xl:size-6 text-brand-primary" />,
  boss: <BossCompassIcon className="size-5 sm:size-6 lg:size-5 xl:size-6 text-brand-primary" />,
  badge: <TrustedBadgeIcon className="size-5 sm:size-6 lg:size-5 xl:size-6 text-brand-primary" />,
};

export function BecomeWhy() {
  return (
    <section
      className="bg-surface py-14 lg:py-20"
      aria-labelledby="become-why-heading"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="become-why-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Why Become a <span className="text-brand-primary">Monkey?</span>
          </h2>
        </div>

        {/* 6 Cards in a Row Grid */}
        <ul className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-3 xl:gap-4">
          {becomeReasons.map((item) => (
            <li key={item.title}>
              <article className="flex h-full flex-col items-center text-center rounded-2xl border border-surface-border/80 bg-surface p-4 sm:p-5 lg:px-3 lg:py-5 xl:px-4 xl:py-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-brand-soft-border">
                {/* Centered Icon Container */}
                <div className="flex size-11 sm:size-12 lg:size-10 xl:size-12 items-center justify-center rounded-full bg-brand-soft shrink-0">
                  {reasonIcons[item.icon]}
                </div>

                {/* Card Title */}
                <h3 className="mt-3.5 sm:mt-4 text-xs sm:text-base lg:text-sm xl:text-base font-bold text-ink leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs xl:text-sm leading-relaxed text-ink-muted">
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
