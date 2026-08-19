import { HowItWorksStep } from "@/components/home/HowItWorksStep";
import {
  CartDecideIcon,
  MarketStallIcon,
  MonkeyFaceIcon,
  SearchExploreIcon,
} from "@/components/home/howItWorksIcons";
import { Container } from "@/components/layout/Container";
import { homeHowItWorksSteps, type HomeHowItWorksStep } from "@/config/home";
import type { ReactNode } from "react";

const stepIcons: Record<HomeHowItWorksStep["icon"], ReactNode> = {
  market: <MarketStallIcon />,
  monkey: <MonkeyFaceIcon />,
  search: <SearchExploreIcon />,
  cart: <CartDecideIcon />,
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-primary uppercase">
            How It Works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Explore Any Market in 4 Simple Steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Connect, explore and decide smarter — all from the comfort of your
            home.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-8">
          {homeHowItWorksSteps.map((item, index) => (
            <HowItWorksStep
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              icon={stepIcons[item.icon]}
              showConnector={index < homeHowItWorksSteps.length - 1}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}
