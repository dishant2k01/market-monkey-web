import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { CheckIcon } from "@/components/ui/icons";
import { pricingHero } from "@/config/pricingPage";

export function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF9] pt-8 pb-12 lg:pt-14 lg:pb-16">
      {/* Decorative subtle background ambient glow */}
      <div
        className="pointer-events-none absolute -top-24 right-0 size-[500px] rounded-full bg-brand-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              {pricingHero.eyebrow}
            </span>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              {pricingHero.titleBefore}{" "}
              <br />
              <span className="text-brand-primary">{pricingHero.titleAccent}</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {pricingHero.description}
            </p>

            {/* 3 Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {pricingHero.trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 rounded-full border border-[#FFE8D6] bg-white px-3.5 py-2 shadow-xs transition-shadow hover:shadow-sm"
                >
                  <span className="flex size-4 items-center justify-center rounded-full border border-brand-primary/40 bg-brand-soft text-brand-primary">
                    <CheckIcon className="size-2.5" />
                  </span>
                  <span className="text-xs font-semibold text-ink sm:text-sm">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hero Visual with Floating Overlay */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-[540px]">
              {/* Main Market Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-surface-subtle shadow-xl ring-1 ring-black/5">
                <Image
                  src={pricingHero.imageSrc}
                  alt={pricingHero.imageAlt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 540px"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating Overlay Badge (Bottom Left/Right of image) */}
              <div className="absolute bottom-4 left-4 z-20 max-w-[260px] sm:max-w-[290px] rounded-2xl border border-surface-border/80 bg-surface/95 p-3.5 shadow-2xl backdrop-blur-md transition-transform hover:scale-105 duration-200">
                <div className="flex items-start gap-2.5">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                    <svg
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-snug text-ink">
                      Trusted by thousands of customers and{" "}
                      <span className="text-brand-primary">verified Monkeys</span>.
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between pt-2 border-t border-surface-border/60">
                  <div className="flex -space-x-2 overflow-hidden">
                    {pricingHero.trustedOverlay.avatars.map((src, index) => (
                      <div
                        key={src + index}
                        className="relative inline-block size-6 overflow-hidden rounded-full ring-2 ring-surface"
                      >
                        <Image
                          src={src}
                          alt="User avatar"
                          fill
                          className="object-cover"
                          sizes="24px"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-ink-muted">
                    {pricingHero.trustedOverlay.stat}
                  </span>
                </div>
              </div>

              {/* Decorative Dotted Line & Pin Icon */}
              <div
                className="pointer-events-none absolute -bottom-6 -right-6 hidden sm:block opacity-60 z-10"
                aria-hidden="true"
              >
                <svg
                  className="w-48 h-20"
                  viewBox="0 0 200 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 10 20 Q 90 70 180 50"
                    stroke="#FF800C"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                  />
                  <circle cx="180" cy="50" r="10" fill="#FF800C" />
                  <path
                    d="M180 44C176.686 44 174 46.686 174 50C174 54.5 180 58 180 58C180 58 186 54.5 186 50C186 46.686 183.314 44 180 44ZM180 51.5C179.172 51.5 178.5 50.828 178.5 50C178.5 49.172 179.172 48.5 180 48.5C180.828 48.5 181.5 49.172 181.5 50C181.5 50.828 180.828 51.5 180 51.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
