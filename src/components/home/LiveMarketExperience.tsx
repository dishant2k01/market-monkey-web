import Image from "next/image";
import { Container } from "@/components/layout/Container";
import {
  CheckIcon,
  LiveClockIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import { homeLiveExperience } from "@/config/home";

function ChatIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
  video: <LiveClockIcon className="size-4" />,
  chat: <ChatIcon className="size-4" />,
  secure: <ShieldCheckIcon className="size-4" />,
} as const;

export function LiveMarketExperience() {
  return (
    <section
      id="live-experience"
      className="bg-surface py-12 lg:py-16"
      aria-labelledby="live-experience-heading"
    >
      <Container>
        <div className="rounded-3xl bg-brand-soft/70 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.15fr_0.7fr] lg:gap-8">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-brand-primary uppercase">
                {homeLiveExperience.eyebrow}
              </p>
              <h2
                id="live-experience-heading"
                className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
              >
                {homeLiveExperience.title}{" "}
                <span className="text-brand-primary">
                  {homeLiveExperience.titleHighlight}
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                {homeLiveExperience.description}
              </p>
              <ul className="mt-6 space-y-3">
                {homeLiveExperience.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-brand-primary-foreground">
                      <CheckIcon className="size-3" />
                    </span>
                    <span className="text-sm font-medium text-ink">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto flex w-full max-w-md items-end justify-center gap-3 sm:max-w-lg">
              <div className="relative z-10 aspect-[9/16] w-[48%] overflow-hidden rounded-[1.5rem] border-[6px] border-ink shadow-md">
                <Image
                  src={homeLiveExperience.imageSrc}
                  alt={homeLiveExperience.imageAlt}
                  fill
                  className="object-cover object-right"
                  sizes="220px"
                />
                <span className="absolute top-3 left-3 rounded-full bg-feedback-error px-2 py-0.5 text-[0.625rem] font-bold text-ink-inverse">
                  ● LIVE
                </span>
              </div>
              <div className="relative mb-6 aspect-[9/16] w-[48%] overflow-hidden rounded-[1.5rem] border-[6px] border-ink shadow-md">
                <Image
                  src={homeLiveExperience.productImageSrc}
                  alt={homeLiveExperience.productImageAlt}
                  fill
                  className="object-cover"
                  sizes="220px"
                />
                <div className="absolute inset-x-3 bottom-4 space-y-2">
                  <p className="rounded-2xl rounded-bl-md bg-surface px-3 py-2 text-[0.6875rem] font-medium text-ink shadow-sm">
                    What is the price?
                  </p>
                  <p className="ml-auto max-w-[90%] rounded-2xl rounded-br-md bg-brand-primary px-3 py-2 text-[0.6875rem] font-semibold text-brand-primary-foreground shadow-sm">
                    ₹850 final price
                  </p>
                </div>
              </div>
            </div>

            <ul className="flex flex-row gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
              {homeLiveExperience.floatingFeatures.map((feature) => (
                <li
                  key={feature.label}
                  className="min-w-[9.5rem] rounded-2xl border border-surface-border bg-surface p-4 shadow-sm lg:min-w-0"
                >
                  <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-soft text-brand-primary">
                    {featureIcons[feature.icon]}
                  </span>
                  <p className="mt-3 text-sm font-bold text-ink">{feature.label}</p>
                  <p className="text-xs text-ink-muted">{feature.subtitle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
