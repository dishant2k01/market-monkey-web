import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimateIn, FloatingElement } from "@/components/ui/AnimateIn";
import { CheckIcon } from "@/components/ui/icons";
import { homeAudiencePanels } from "@/config/home";

function TrendUpIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2.5 11.5 6.5 7.5l2.5 2.5 4.5-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 5h3.5V8.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AudienceSection() {
  return (
    <section
      className="bg-surface pt-[var(--space-section-y-mobile)] lg:pt-[var(--space-section-y)]"
      aria-label="For customers and Monkeys"
    >
      <Container>
        <div className="grid gap-4 lg:grid-cols-2">
          {homeAudiencePanels.map((panel, idx) => (
            <AnimateIn
              key={panel.id}
              variant={idx === 0 ? "fade-right" : "fade-left"}
              delay={idx * 150}
              duration={650}
              as="article"
              id={panel.id === "customers" ? "for-customers" : "for-monkeys"}
              className="group overflow-hidden rounded-[1.75rem] bg-surface-muted shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="grid min-h-[240px] sm:min-h-[220px] sm:grid-cols-[1.05fr_0.95fr]">
                <div className="flex flex-col justify-center px-5 py-5 sm:px-6 sm:py-5 lg:px-6">
                  <div>
                    <h2 className="text-lg font-extrabold text-ink sm:text-xl">
                      {panel.eyebrow}
                    </h2>
                    <p className="mt-0.5 text-sm font-medium text-ink-secondary">
                      {panel.subtitle}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {panel.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 transition-transform duration-200 hover:translate-x-1">
                        <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-brand-primary-foreground shadow-2xs">
                          <CheckIcon className="size-3" />
                        </span>
                        <span className="text-sm leading-snug text-ink-secondary">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative min-h-[200px] sm:min-h-full overflow-hidden">
                  <div
                    className="absolute inset-0 overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105 sm:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]"
                    aria-hidden={false}
                  >
                    <Image
                      src={panel.imageSrc}
                      alt={panel.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 320px"
                      unoptimized
                    />
                  </div>

                  {panel.earningsLabel && panel.earningsAmount ? (
                    <FloatingElement
                      animation="pulse"
                      className="absolute right-4 bottom-4 z-10"
                    >
                      <div className="rounded-xl bg-surface/95 backdrop-blur-sm border border-surface-border/80 px-3.5 py-2.5 shadow-md">
                        <p className="text-[0.6875rem] font-medium text-ink-muted">
                          {panel.earningsLabel}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1.5 text-lg font-extrabold text-ink">
                          {panel.earningsAmount}
                          <span className="inline-flex text-feedback-success">
                            <TrendUpIcon />
                          </span>
                        </p>
                      </div>
                    </FloatingElement>
                  ) : null}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
