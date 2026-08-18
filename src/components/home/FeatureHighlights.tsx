import { FeatureCard } from "@/components/home/FeatureCard";
import { Container } from "@/components/layout/Container";
import {
  LiveClockIcon,
  ShieldCheckIcon,
  ShopIcon,
  UsersIcon,
} from "@/components/ui/icons";

const features = [
  {
    title: "Verified Monkeys",
    description: "Background checked & trusted",
    icon: <ShopIcon className="size-5" />,
  },
  {
    title: "Real-Time Experience",
    description: "Live video from real markets",
    icon: <LiveClockIcon className="size-5" />,
  },
  {
    title: "Safe & Secure",
    description: "Your data and payments are protected",
    icon: <ShieldCheckIcon className="size-5" />,
  },
  {
    title: "Thousands of Happy Users",
    description: "Loved by customers across India",
    icon: <UsersIcon className="size-5" />,
  },
] as const;

export function FeatureHighlights() {
  return (
    <section
      className="bg-surface pb-10 sm:pb-12 lg:pb-14"
      aria-label="Platform highlights"
    >
      <Container>
        <div className="rounded-xl bg-surface-muted px-5 py-7 sm:px-8 sm:py-8 lg:px-10">
          <ul className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
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
