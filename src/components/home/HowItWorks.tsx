import {
  HowItWorksCameraIcon,
  HowItWorksExploreIcon,
  HowItWorksMapPinIcon,
  HowItWorksMonkeyIcon,
} from "@/components/home/howItWorksIcons";
import { Container } from "@/components/layout/Container";
import {
  homeHowItWorksSteps,
  type HomeHowItWorksStep,
} from "@/config/home";
import type { ReactNode } from "react";

const stepIcons: Record<HomeHowItWorksStep["icon"], ReactNode> = {
  market: <HowItWorksMapPinIcon className="size-9" />,
  monkey: <HowItWorksMonkeyIcon className="size-9" />,
  live: <HowItWorksCameraIcon className="size-9" />,
  explore: <HowItWorksExploreIcon className="size-9" />,
};

function StepConnector() {
  return (
    <span
      className="pointer-events-none absolute top-[2.75rem] left-[calc(50%+3.25rem)] hidden w-[calc(100%-6.5rem)] items-center lg:flex"
      aria-hidden="true"
    >
      <span className="h-0 w-full border-t-2 border-dashed border-brand-primary" />
      <span className="ml-[-2px] size-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-brand-primary" />
    </span>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-surface-muted py-12 lg:py-16"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="how-it-works-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Explore Any Market in{" "}
            <span className="text-brand-primary">
              4 <span className="italic">Simple</span> Steps
            </span>
          </h2>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {homeHowItWorksSteps.map((item, index) => (
            <li key={item.step} className="relative">
              {index < homeHowItWorksSteps.length - 1 ? <StepConnector /> : null}

              <article className="relative mx-auto flex h-full max-w-xs flex-col items-center text-center lg:max-w-none">
                <span className="relative z-20 mb-[-0.875rem] inline-flex size-8 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-brand-primary-foreground shadow-xs">
                  {item.step}
                </span>

                <div className="relative z-10 flex w-full flex-1 flex-col items-center rounded-2xl border border-surface-border bg-surface px-5 pb-6 pt-7 shadow-sm">
                  <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-brand-soft">
                    {stepIcons[item.icon]}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
