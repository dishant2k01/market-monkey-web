import { HowItWorksStep } from "@/components/home/HowItWorksStep";
import {
  CartDecideIcon,
  MarketStallIcon,
  MonkeyFaceIcon,
  SearchExploreIcon,
} from "@/components/home/howItWorksIcons";
import { Container } from "@/components/layout/Container";

const steps = [
  {
    step: "01",
    title: "Choose Market",
    description: "Select the market or location you want to explore.",
    icon: <MarketStallIcon />,
  },
  {
    step: "02",
    title: "Connect with Monkey",
    description:
      "We connect you with a verified local Monkey via live video call.",
    icon: <MonkeyFaceIcon />,
  },
  {
    step: "03",
    title: "Explore & Ask",
    description:
      "Look around in real-time, ask questions, check products and prices.",
    icon: <SearchExploreIcon />,
  },
  {
    step: "04",
    title: "Compare & Decide",
    description:
      "Compare options, inspect quality and decide before you buy or visit.",
    icon: <CartDecideIcon />,
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-surface-muted py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
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

        <ol className="mt-12 grid grid-cols-1 gap-8 pt-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-8">
          {steps.map((item, index) => (
            <HowItWorksStep
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              icon={item.icon}
              showConnector={index < steps.length - 1}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}
