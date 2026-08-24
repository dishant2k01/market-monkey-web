import Image from "next/image";
import { Container } from "@/components/layout/Container";
import {
  GreenCheckCircleIcon,
  RupeeIcon,
  BriefcaseScheduleIcon,
  TrophyIcon,
} from "@/components/become/becomeIcons";
import {
  whoCanBecomeRequirements,
  whatYouEarnPlans,
  topEarnerHighlight,
} from "@/config/become";

export function BecomeWhoAndEarnings() {
  return (
    <section
      className="bg-surface py-12 lg:py-16"
      aria-labelledby="who-and-earnings-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 items-stretch">
          {/* Left Card: Who Can Become a Monkey? */}
          <div className="flex flex-col justify-between rounded-[2rem] border border-[#D4EEDB] bg-[#F2FBF5] p-7 sm:p-9 lg:p-10 shadow-xs">
            <div>
              <h2
                id="who-and-earnings-heading"
                className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
              >
                Who Can Become a <span className="text-[#22C55E]">Monkey?</span>
              </h2>

              {/* Requirements Checklist */}
              <ul className="mt-6 sm:mt-7 space-y-3 sm:space-y-3.5">
                {whoCanBecomeRequirements.map((req) => (
                  <li key={req.text} className="flex items-center gap-3">
                    <GreenCheckCircleIcon className="size-5 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-ink-secondary">
                      {req.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mascot and Tagline Bottom Visual */}
            <div className="mt-8 flex items-end justify-between gap-4">
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0">
                <Image
                  src="/images/become/mascot-cool.png"
                  alt="Market Monkey mascot with sunglasses giving a thumbs up"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 112px, 128px"
                  unoptimized
                />
              </div>

              <div className="flex-1 pb-1">
                <p className="font-handwriting text-3xl sm:text-4xl font-bold text-ink-strong leading-tight">
                  Be local.
                  <br />
                  <span>Earn global.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Card: What You Earn */}
          <div className="flex flex-col justify-between rounded-[2rem] border border-[#DCE8F8] bg-[#F0F5FD] p-7 sm:p-9 lg:p-10 shadow-xs">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                What You Earn
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-ink-muted">
                Transparent earnings. Grow more, earn more.
              </p>

              {/* 2 Internal Pricing Cards */}
              <div className="mt-6 sm:mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {whatYouEarnPlans.map((plan) => (
                  <div
                    key={plan.title}
                    className="flex flex-col justify-between rounded-2xl border border-surface-border/60 bg-white p-5 sm:p-5.5 shadow-xs transition-shadow duration-200 hover:shadow-sm"
                  >
                    <div>
                      {/* Icon + Title on same row */}
                      <div className="flex items-center gap-2.5">
                        <div className="flex size-7 sm:size-8 items-center justify-center rounded-full bg-brand-soft text-brand-primary shrink-0">
                          {plan.icon === "session" ? (
                            <RupeeIcon className="size-3.5 sm:size-4" />
                          ) : (
                            <BriefcaseScheduleIcon className="size-3.5 sm:size-4" />
                          )}
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-ink">
                          {plan.title}
                        </h3>
                      </div>

                      {/* Price Row */}
                      <div className="mt-3.5 flex items-baseline gap-1.5">
                        <span className="text-2xl sm:text-3xl font-black tracking-tight text-brand-primary">
                          {plan.price}
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold text-ink-muted">
                          {plan.unit}
                        </span>
                      </div>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                      {plan.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Trophy Highlight */}
            <div className="mt-6 flex items-center justify-center gap-2 text-center">
              <TrophyIcon className="size-4.5 text-brand-primary shrink-0" />
              <p className="text-xs sm:text-sm font-bold text-[#2563EB]">
                {topEarnerHighlight}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
