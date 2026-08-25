import { Container } from "@/components/layout/Container";
import {
  LiveVideoStepIllustration,
  MonkeyHeadsetIllustration,
  PickMarketIllustration,
  ShopConfidenceIllustration,
} from "@/components/markets/marketIcons";
import {
  marketExplorationSteps,
  type MarketExplorationStep,
} from "@/config/markets";
import type { ReactNode } from "react";

const stepIllustrations: Record<MarketExplorationStep["icon"], ReactNode> = {
  market: <PickMarketIllustration className="size-16" />,
  monkey: <MonkeyHeadsetIllustration className="size-16" />,
  video: <LiveVideoStepIllustration className="size-16" />,
  shop: <ShopConfidenceIllustration className="size-16" />,
};

export function MarketsHowItWorks() {
  return (
    <section
      className="bg-surface py-12 lg:py-16"
      aria-labelledby="how-exploration-works-heading"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-exploration-works-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink"
          >
            How Market Exploration Works
          </h2>
        </div>

        {/* 4 Step Cards with Connecting Arrows */}
        <div className="relative mt-10 sm:mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {marketExplorationSteps.map((stepItem, index) => (
              <div key={stepItem.step} className="relative flex">
                {/* Dashed Arrow Connector (Desktop only) */}
                {index < marketExplorationSteps.length - 1 && (
                  <div
                    className="pointer-events-none absolute top-1/2 -right-4 z-20 hidden -translate-y-1/2 translate-x-1/2 items-center lg:flex"
                    aria-hidden="true"
                  >
                    <div className="h-[2px] w-6 border-t-2 border-dashed border-ink/20" />
                    <span className="text-ink/40 -ml-1 text-[10px]">▶</span>
                  </div>
                )}

                {/* Step Card */}
                <div className="relative flex w-full flex-col items-center rounded-2xl border border-surface-border/80 bg-surface p-6 pt-10 text-center shadow-xs transition-all duration-200 hover:shadow-sm hover:border-brand-soft-border">
                  {/* Step Number Badge */}
                  <span className="absolute top-4 left-4 flex items-center justify-center rounded-md bg-[#FF800C] px-2 py-0.5 text-[11px] font-extrabold text-white shadow-2xs">
                    {stepItem.step}
                  </span>

                  {/* Illustration */}
                  <div className="mt-1 mb-3 flex size-20 items-center justify-center">
                    {stepIllustrations[stepItem.icon]}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-ink">
                    {stepItem.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-muted">
                    {stepItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
