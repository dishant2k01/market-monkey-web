import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { LinkedInIcon } from "@/components/ui/icons";
import { aboutTeam } from "@/config/about";

export function AboutTeam() {
  return (
    <section
      className="bg-surface-muted py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="about-team-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-primary uppercase">
            Meet Our Team
          </p>
          <h2
            id="about-team-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            The People Behind Market Monkey
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {aboutTeam.map((member) => (
            <li key={member.name}>
              <article className="overflow-hidden rounded-xl border border-surface-border bg-surface shadow-sm transition-shadow duration-200 hover:shadow-md">
                <div className="relative aspect-[4/5] bg-surface-subtle">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  />
                </div>
                <div className="px-4 py-5 text-center">
                  <h3 className="text-base font-bold text-ink">{member.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="mt-3 inline-flex size-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-brand-soft hover:text-brand-primary"
                  >
                    <LinkedInIcon className="size-4" />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
