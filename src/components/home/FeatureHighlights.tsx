import { FeatureCard } from "@/components/home/FeatureCard";
import { Container } from "@/components/layout/Container";
import {
  LiveClockIcon,
  ShieldCheckIcon,
  ShopIcon,
  UsersIcon,
} from "@/components/ui/icons";
import { homeFeatures, type HomeFeature } from "@/config/home";
import type { ReactNode } from "react";

const featureIcons: Record<HomeFeature["icon"], ReactNode> = {
  shop: <ShopIcon className="size-5" />,
  liveClock: <LiveClockIcon className="size-5" />,
  shield: <ShieldCheckIcon className="size-5" />,
  users: <UsersIcon className="size-5" />,
};

export function FeatureHighlights() {
  return (
    <section
      className="bg-surface pb-10 sm:pb-12 lg:pb-14"
      aria-label="Platform highlights"
    >
      <Container>
        <div className="rounded-xl bg-surface-muted px-5 py-7 sm:px-8 sm:py-8 lg:px-10">
          <ul className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {homeFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={featureIcons[feature.icon]}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
