import {
  CalendarIcon,
  ProfileCardIcon,
  RupeeIcon,
  SignUpIcon,
} from "@/components/become/becomeIcons";
import { Container } from "@/components/layout/Container";
import {
  becomeHowItWorksSteps,
  type BecomeHowItWorksStep,
} from "@/config/become";
import type { ReactNode } from "react";

const stepIcons: Record<BecomeHowItWorksStep["icon"], ReactNode> = {
  signUp: <SignUpIcon />,
  profile: <ProfileCardIcon />,
  calendar: <CalendarIcon />,
  rupee: <RupeeIcon className="size-6" />,
};

export function BecomeHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-surface-muted py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="become-how-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="become-how-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            How It Works
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            Start earning in 4 simple steps
          </p>
        </div>

        <ol className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          <span
            className="pointer-events-none absolute top-10 right-[12.5%] left-[12.5%] hidden border-t border-dashed border-surface-border-strong lg:block"
            aria-hidden="true"
          />
          {becomeHowItWorksSteps.map((item) => (
            <li key={item.step} className="relative text-center">
              <span className="relative z-10 mx-auto inline-flex size-16 items-center justify-center rounded-full border border-surface-border bg-surface text-brand-primary shadow-sm">
                {stepIcons[item.icon]}
              </span>
              <p className="mt-4 text-xs font-bold tracking-[0.12em] text-brand-primary">
                {item.step}
              </p>
              <h3 className="mt-1 text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
