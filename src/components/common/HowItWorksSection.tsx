import type { ReactNode } from "react";
import {
  HowItWorksCameraIcon,
  HowItWorksExploreIcon,
  HowItWorksMapPinIcon,
  HowItWorksMonkeyIcon,
} from "@/components/home/howItWorksIcons";
import { Container } from "@/components/layout/Container";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimateIn";
import {
  homeHowItWorksSteps,
  type HomeHowItWorksStep,
} from "@/config/home";

const stepIcons: Record<HomeHowItWorksStep["icon"], ReactNode> = {
  market: <HowItWorksMapPinIcon className="size-10" />,
  monkey: <HowItWorksMonkeyIcon className="size-10" />,
  live: <HowItWorksCameraIcon className="size-10" />,
  explore: <HowItWorksExploreIcon className="size-10" />,
};

function StepConnector() {
  return (
    <span
      className="pointer-events-none absolute top-14 left-[calc(50%+3.5rem)] hidden w-[calc(100%-7rem)] items-center lg:flex"
      aria-hidden="true"
    >
      <span className="h-0 w-full border-t-2 border-dashed border-brand-primary" />
      <span className="ml-[-2px] size-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-brand-primary" />
    </span>
  );
}

type HowItWorksSectionProps = {
  id?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
};

export function HowItWorksSection({
  id = "how-it-works",
  title,
  subtitle,
  className = "bg-surface py-12 lg:py-20",
}: HowItWorksSectionProps) {
  return (
    <section
      id={id}
      className={className}
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <AnimateIn variant="fade-up" delay={50} duration={600} className="mx-auto max-w-3xl text-center">
          <h2
            id="how-it-works-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            {title || (
              <>
                Explore Any Market in{" "}
                <span className="text-brand-primary">
                  4 <span className="italic">Simple</span> Steps
                </span>
              </>
            )}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-ink-muted sm:text-lg">
              {subtitle}
            </p>
          )}
        </AnimateIn>

        <StaggerContainer
          baseDelay={150}
          staggerMs={100}
          as="ol"
          className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6"
        >
          {homeHowItWorksSteps.map((item, index) => (
            <StaggerItem
              as="li"
              key={item.step}
              index={index}
              className="relative"
            >
              {index < homeHowItWorksSteps.length - 1 ? <StepConnector /> : null}

              <article className="group relative mx-auto flex max-w-xs flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1.5 lg:max-w-none">
                <div className="relative">
                  <span className="inline-flex size-[7.25rem] items-center justify-center rounded-full border-2 border-brand-soft-border bg-surface shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-brand-primary group-hover:shadow-md">
                    <span className="inline-flex size-[5.5rem] items-center justify-center rounded-full bg-brand-soft text-brand-primary transition-transform duration-300 group-hover:scale-105">
                      {stepIcons[item.icon]}
                    </span>
                  </span>
                  <span className="absolute -top-1 -right-1 inline-flex size-8 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-brand-primary-foreground shadow-xs transition-transform duration-300 group-hover:scale-110">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-ink sm:text-lg transition-colors group-hover:text-brand-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
