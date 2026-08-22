import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, CheckIcon, UsersIcon } from "@/components/ui/icons";
import { homeAudiencePanels } from "@/config/home";

export function AudienceSection() {
  return (
    <section
      className="bg-surface-muted py-12 lg:py-16"
      aria-label="For customers and Monkeys"
    >
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          {homeAudiencePanels.map((panel) => (
            <article
              key={panel.id}
              id={panel.id === "customers" ? "for-customers" : "for-monkeys"}
              className="overflow-hidden rounded-3xl border border-surface-border bg-surface shadow-sm"
            >
              <div className="flex items-center gap-2 border-b border-surface-border px-5 py-3.5">
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                  <UsersIcon className="size-4" />
                </span>
                <h2 className="text-base font-extrabold text-ink">
                  {panel.eyebrow}
                </h2>
              </div>

              <div className="relative aspect-[16/10] bg-surface-subtle">
                <Image
                  src={panel.imageSrc}
                  alt={panel.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                {panel.earningsBadge ? (
                  <span className="absolute bottom-3 left-3 rounded-xl bg-feedback-success px-3 py-1.5 text-xs font-bold text-ink-inverse shadow-sm">
                    {panel.earningsBadge}
                  </span>
                ) : null}
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                  {panel.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {panel.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                        <CheckIcon className="size-3" />
                      </span>
                      <span className="text-sm text-ink-secondary">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Button
                    href={panel.ctaHref}
                    size="md"
                    rightIcon={<ArrowRightIcon className="size-3.5" />}
                  >
                    {panel.ctaLabel}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
