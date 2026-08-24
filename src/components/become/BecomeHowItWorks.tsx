import { Container } from "@/components/layout/Container";
import {
  ApplyEditIcon,
  ShieldCheckmarkIcon,
  VideoCameraPlayIcon,
  WalletCashIcon,
} from "@/components/become/becomeIcons";
import {
  becomeHowItWorksSteps,
  type BecomeHowItWorksStep,
} from "@/config/become";
import type { ReactNode } from "react";

const stepIcons: Record<BecomeHowItWorksStep["icon"], ReactNode> = {
  apply: <ApplyEditIcon className="size-6 text-brand-primary" />,
  verification: <ShieldCheckmarkIcon className="size-6 text-brand-primary" />,
  live: <VideoCameraPlayIcon className="size-6 text-brand-primary" />,
  earn: <WalletCashIcon className="size-6 text-brand-primary" />,
};

export function BecomeHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-surface py-14 lg:py-20"
      aria-labelledby="become-how-heading"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="become-how-heading"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            How It Works
          </h2>
          <p className="mt-2.5 text-base text-ink-muted sm:text-lg">
            Start earning in 4 simple steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="relative mt-12 sm:mt-16">
          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {becomeHowItWorksSteps.map((item, index) => (
              <li key={item.step} className="relative flex flex-col items-center text-center">
                {/* Horizontal Dashed Arrow Connector (Desktop only) */}
                {index < becomeHowItWorksSteps.length - 1 && (
                  <div
                    className="pointer-events-none absolute top-9 left-[calc(50%+2.75rem)] hidden w-[calc(100%-5.5rem)] items-center lg:flex"
                    aria-hidden="true"
                  >
                    <div className="h-[2px] w-full border-t-2 border-dashed border-[#FFB366]/70" />
                    <span className="text-[#FF800C] -ml-1 text-xs">▶</span>
                  </div>
                )}

                {/* Step Circle with Number Badge */}
                <div className="relative">
                  <div className="flex size-[4.75rem] items-center justify-center rounded-full border-2 border-[#FFD6B3] bg-[#FFF8F3] shadow-xs transition-transform duration-200 hover:scale-105">
                    {stepIcons[item.icon]}
                  </div>

                  {/* Orange Number Badge */}
                  <span className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-brand-primary text-[11px] font-extrabold text-white shadow-xs">
                    {item.step}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-5 text-base sm:text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-muted max-w-[240px]">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
