import Image from "next/image";
import {
  ChartIcon,
  GrowthIcon,
  ShieldCheckOutlineIcon,
  StarIcon,
} from "@/components/about/aboutIcons";
import { Container } from "@/components/layout/Container";
import {
  aboutHeroAvatars,
  aboutHeroHighlights,
  aboutHeroSocialProof,
  type AboutHighlight,
} from "@/config/about";
import type { ReactNode } from "react";

const highlightIcons: Record<AboutHighlight["icon"], ReactNode> = {
  shield: <ShieldCheckOutlineIcon className="size-4" />,
  chart: <ChartIcon className="size-4" />,
  growth: <GrowthIcon className="size-4" />,
};

export function AboutHero() {
  return (
    <section
      className="bg-surface pt-[var(--space-section-y-mobile)] pb-16 lg:pt-[var(--space-section-y)] lg:pb-20"
      aria-labelledby="about-hero-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-bold tracking-[0.08em] text-brand-primary uppercase">
              About Market Monkey
            </p>
            <h1
              id="about-hero-heading"
              className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
            >
              Our Mission is to Empower{" "}
              <span className="text-brand-primary">Smarter Business Decisions.</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              We help businesses explore real markets, uncover opportunities, and
              make confident decisions with live insights from people on the
              ground.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {aboutHeroHighlights.map((item) => (
                <li key={item.title} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                    {highlightIcons[item.icon]}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{item.title}</p>
                    <p className="mt-0.5 text-xs text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-subtle shadow-md">
              <Image
                src={aboutHeroSocialProof.imageSrc}
                alt={aboutHeroSocialProof.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>

            <aside className="absolute -bottom-5 left-4 right-4 rounded-xl border border-surface-border bg-surface p-4 shadow-md sm:left-6 sm:right-auto sm:max-w-xs">
              <p className="text-sm font-semibold text-ink">
                {aboutHeroSocialProof.caption}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {aboutHeroAvatars.map((src) => (
                    <Image
                      key={src}
                      src={src}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 rounded-full border-2 border-surface object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary">
                    <StarIcon className="size-3.5" />
                    {aboutHeroSocialProof.rating}
                  </p>
                  <p className="text-xs text-ink-muted">
                    {aboutHeroSocialProof.reviewLabel}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
