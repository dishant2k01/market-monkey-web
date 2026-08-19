import Image from "next/image";
import {
  FlexibleHoursIcon,
  RupeeIcon,
} from "@/components/become/becomeIcons";
import {
  ShieldCheckOutlineIcon,
  StarIcon,
  UsersOutlineIcon,
} from "@/components/about/aboutIcons";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";
import {
  becomeHeroHighlights,
  becomeHeroMedia,
  becomeHeroStats,
  type BecomeHeroHighlight,
  type BecomeHeroStat,
} from "@/config/become";
import type { ReactNode } from "react";

const highlightIcons: Record<BecomeHeroHighlight["icon"], ReactNode> = {
  flexible: <FlexibleHoursIcon className="size-4" />,
  rupee: <RupeeIcon className="size-4" />,
  shield: <ShieldCheckOutlineIcon className="size-4" />,
};

const statIcons: Record<BecomeHeroStat["icon"], ReactNode> = {
  users: <UsersOutlineIcon className="size-4" />,
  star: <StarIcon className="size-3.5" />,
  rupee: <RupeeIcon className="size-4" />,
};

export function BecomeHero() {
  return (
    <section
      className="bg-surface-muted pt-[var(--space-section-y-mobile)] pb-16 lg:pt-[var(--space-section-y)] lg:pb-20"
      aria-labelledby="become-hero-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-bold tracking-[0.08em] text-brand-primary uppercase">
              Join Our Community
            </p>
            <h1
              id="become-hero-heading"
              className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
            >
              Become a Monkey. Share your skills.{" "}
              <span className="text-brand-primary">Earn on your time.</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Market Monkey connects you with people who need your knowledge,
              guidance, and expertise. Set your price, choose your availability,
              and start earning.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {becomeHeroHighlights.map((item) => (
                <li key={item.title} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                    {highlightIcons[item.icon]}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-snug text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                href="#join"
                size="lg"
                rightIcon={<ArrowRightIcon className="size-4" />}
              >
                Join as a Monkey
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                How It Works
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-subtle shadow-md">
              <Image
                src={becomeHeroMedia.imageSrc}
                alt={becomeHeroMedia.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>

            <ul className="absolute top-4 right-4 flex w-[min(100%-2rem,13rem)] flex-col gap-2 sm:top-6 sm:right-6">
              {becomeHeroStats.map((stat) => (
                <li
                  key={stat.label}
                  className="flex items-center gap-2.5 rounded-xl border border-surface-border bg-surface px-3 py-2.5 shadow-sm"
                >
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                    {statIcons[stat.icon]}
                  </span>
                  <span className="text-xs font-semibold leading-snug text-ink">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
