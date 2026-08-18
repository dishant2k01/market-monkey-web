import {
  WhatYouCanDoCard,
  type CapabilityTone,
} from "@/components/home/WhatYouCanDoCard";
import {
  BagIcon,
  ChatIcon,
  EyeIcon,
  QualityShieldIcon,
  TagIcon,
} from "@/components/home/whatYouCanDoIcons";
import { Container } from "@/components/layout/Container";
import type { ReactNode } from "react";

const capabilities: Array<{
  title: string;
  description: string;
  tone: CapabilityTone;
  icon: ReactNode;
}> = [
  {
    title: "See It Live",
    description:
      "See the market, shops and products in real-time as if you were there.",
    tone: "violet",
    icon: <EyeIcon />,
  },
  {
    title: "Ask Anything",
    description: "Ask about prices, quality, availability, offers and more.",
    tone: "amber",
    icon: <ChatIcon />,
  },
  {
    title: "Compare Prices",
    description: "Check multiple shops and compare prices instantly.",
    tone: "rose",
    icon: <TagIcon />,
  },
  {
    title: "Inspect Quality",
    description: "Get a close look at product quality and originality.",
    tone: "green",
    icon: <QualityShieldIcon />,
  },
  {
    title: "Buy with Confidence",
    description: "Make better decisions before visiting or purchasing.",
    tone: "blue",
    icon: <BagIcon />,
  },
];

export function WhatYouCanDo() {
  return (
    <section
      id="what-you-can-do"
      className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="what-you-can-do-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-primary uppercase">
            What You Can Do
          </p>
          <h2
            id="what-you-can-do-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Everything You Can Do on a Live Call
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5 lg:gap-5">
          {capabilities.map((item) => (
            <WhatYouCanDoCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              tone={item.tone}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
