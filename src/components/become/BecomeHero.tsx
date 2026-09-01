import Image from "next/image";
import { Container } from "@/components/layout/Container";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimateIn";
import {
  BriefcaseScheduleIcon,
  GrowthEarnIcon,
  HeartUsersIcon,
  ShieldCheckmarkIcon,
} from "@/components/become/becomeIcons";
import {
  becomeHeroHighlights,
  type BecomeHeroHighlight,
} from "@/config/become";
import type { ReactNode } from "react";

const becomeHeroImage = {
  src: "/images/hero/become_monkey.png",
  alt: "Become a Market Monkey — join the community, get verified, go live, and earn",
} as const;

const highlightIcons: Record<BecomeHeroHighlight["icon"], ReactNode> = {
  terms: <BriefcaseScheduleIcon className="size-4" />,
  earn: <GrowthEarnIcon className="size-4" />,
  customers: <HeartUsersIcon className="size-4" />,
  trusted: <ShieldCheckmarkIcon className="size-4" />,
};

export function BecomeHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFFDF9] pt-[var(--space-page-hero-y)] pb-14 lg:pt-[var(--space-page-hero-y-lg)] lg:pb-20"
      aria-labelledby="become-hero-heading"
    >
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 xl:col-span-6">
            <AnimateIn variant="fade-up" delay={50} duration={600}>
              <h1
                id="become-hero-heading"
                className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]"
              >
                Become a{" "}
                <span className="block mt-1 text-brand-primary">
                  Market Monkey
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={150} duration={600}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                Turn your knowledge of local markets into real earnings. Help
                people explore, compare and shop with confidence.
              </p>
            </AnimateIn>

            <StaggerContainer
              baseDelay={220}
              staggerMs={80}
              className="mt-8 grid max-w-lg grid-cols-1 gap-3.5 sm:grid-cols-2"
            >
              {becomeHeroHighlights.map((item, index) => (
                <StaggerItem
                  key={item.title}
                  index={index}
                  className="flex items-center gap-3 rounded-xl border border-surface-border/80 bg-surface px-3.5 py-2.5 shadow-xs transition-all duration-200 hover:shadow-sm hover:border-brand-soft-border hover:-translate-y-0.5"
                >
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                    {highlightIcons[item.icon]}
                  </span>
                  <span className="text-xs font-bold text-ink">
                    {item.title}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="relative mx-auto flex w-full max-w-xl justify-center lg:col-span-6 lg:max-w-none xl:col-span-6">
            <AnimateIn variant="zoom-in" delay={150} duration={750} className="relative w-full max-w-[600px] sm:max-w-[680px]">
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-soft/70 blur-xl sm:size-96"
                aria-hidden="true"
              />
              <div className="relative aspect-square w-full sm:aspect-[5/4]">
                <Image
                  src={becomeHeroImage.src}
                  alt={becomeHeroImage.alt}
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 680px"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
