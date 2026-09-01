import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CheckIcon, ShieldCheckIcon } from "@/components/ui/icons";
import { homeLiveExperience } from "@/config/home";

function VideoCameraIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="6.5"
        width="12"
        height="11"
        rx="2.25"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M15.5 10.5 20 8v8l-4.5-2.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4 3.5V6.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const featureIcons = {
  video: <VideoCameraIcon className="size-5" />,
  chat: <ChatIcon className="size-5" />,
  secure: <ShieldCheckIcon className="size-5" />,
} as const;

export function LiveMarketExperience() {
  return (
    <section
      id="live-experience"
      className="bg-surface pt-[var(--space-section-y-mobile)] lg:pt-[var(--space-section-y)]"
      aria-labelledby="live-experience-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-soft/90 via-brand-soft/60 to-amber-50/50 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 border border-brand-soft-border/60 shadow-xs">
          {/* Subtle Ambient Orb */}
          <div
            className="pointer-events-none absolute -top-10 -right-10 size-72 rounded-full bg-brand-primary/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.45fr_0.65fr] lg:gap-6 xl:gap-8 relative z-10">
            <AnimateIn variant="fade-right" delay={50} duration={650} className="max-w-md">
              <h2
                id="live-experience-heading"
                className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
              >
                {homeLiveExperience.title}
                <span className="mt-1 block">
                  {homeLiveExperience.titleHighlightPrefix}{" "}
                  <span className="text-brand-primary">
                    {homeLiveExperience.titleHighlight}
                  </span>
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                {homeLiveExperience.description}
              </p>
              <ul className="mt-6 space-y-3">
                {homeLiveExperience.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1.5">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-brand-primary-foreground shadow-2xs">
                      <CheckIcon className="size-3" />
                    </span>
                    <span className="text-sm font-medium text-ink">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            {/* Middle: Phone Display */}
            <div className="relative mx-auto w-full max-w-2xl scale-100 sm:scale-105 lg:max-w-none lg:scale-[1.2] lg:origin-center">
              <Image
                src={homeLiveExperience.imageSrc}
                alt={homeLiveExperience.imageAlt}
                width={1536}
                height={1024}
                className="relative z-10 mx-auto h-auto min-h-[300px] w-full object-contain sm:min-h-[360px] lg:min-h-[460px] drop-shadow-xl"
                sizes="(max-width: 1024px) 90vw, 620px"
                unoptimized
              />
            </div>

            {/* Right: Floating Feature Cards with Hover Depth */}
            <ul className="flex flex-row gap-3 overflow-x-auto pb-1 lg:flex-col lg:gap-3.5 lg:overflow-visible lg:pb-0">
              {homeLiveExperience.floatingFeatures.map((feature, idx) => (
                <li
                  key={feature.label}
                  className={`flex min-w-[11.5rem] items-center gap-3 rounded-2xl border border-surface-border bg-surface px-4 py-3.5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-primary/40 lg:min-w-0 ${
                    idx === 0 ? "hover:scale-[1.02]" : ""
                  }`}
                >
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-primary transition-transform duration-300 hover:scale-110">
                    {featureIcons[feature.icon]}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{feature.label}</p>
                    <p className="text-xs text-ink-muted">{feature.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
