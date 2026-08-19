import { WhatYouCanDoCard } from "@/components/home/WhatYouCanDoCard";
import {
  BagIcon,
  ChatIcon,
  EyeIcon,
  QualityShieldIcon,
  TagIcon,
} from "@/components/home/whatYouCanDoIcons";
import { Container } from "@/components/layout/Container";
import { homeCapabilities, type HomeCapability } from "@/config/home";
import type { ReactNode } from "react";

const capabilityIcons: Record<HomeCapability["icon"], ReactNode> = {
  eye: <EyeIcon />,
  chat: <ChatIcon />,
  tag: <TagIcon />,
  quality: <QualityShieldIcon />,
  bag: <BagIcon />,
};

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
          {homeCapabilities.map((item) => (
            <WhatYouCanDoCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={capabilityIcons[item.icon]}
              tone={item.tone}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
