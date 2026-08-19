import {
  BuildIcon,
  FlagIcon,
  GrowthIcon,
} from "@/components/about/aboutIcons";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { aboutMilestones, type AboutMilestone } from "@/config/about";
import type { ReactNode } from "react";

const milestoneIcons: Record<AboutMilestone["icon"], ReactNode> = {
  flag: <FlagIcon className="size-4" />,
  build: <BuildIcon className="size-4" />,
  growth: <GrowthIcon className="size-4" />,
};

export function AboutStory() {
  return (
    <section
      id="our-journey"
      className="bg-surface-muted py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="about-story-heading"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.16em] text-brand-primary uppercase">
              Our Story
            </p>
            <h2
              id="about-story-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
            >
              Built with a Vision to Simplify{" "}
              <span className="text-brand-primary">Market Intelligence.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Traditional market research is slow, expensive, and often outdated.
              We set out to change that by connecting businesses directly with
              verified locals through live video.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              From a small idea to a growing platform, our mission remains the
              same: help every business explore markets with clarity and
              confidence.
            </p>
            <div className="mt-8">
              <Button
                href="#our-journey"
                size="lg"
                rightIcon={<ArrowRightIcon className="size-4" />}
              >
                Our Journey
              </Button>
            </div>
          </div>

          <ol className="relative space-y-8 lg:pl-2">
            <span
              className="absolute top-3 bottom-3 left-[1.15rem] w-px bg-brand-soft-border"
              aria-hidden="true"
            />
            {aboutMilestones.map((item) => (
              <li key={item.title} className="relative flex gap-4">
                <span className="relative z-10 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-primary text-brand-primary-foreground shadow-xs">
                  {milestoneIcons[item.icon]}
                </span>
                <div className="pt-0.5">
                  <h3 className="text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
