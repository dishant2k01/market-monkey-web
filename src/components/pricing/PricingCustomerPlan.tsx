import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@/components/ui/icons";
import { pricingCustomerPlan } from "@/config/pricingPage";

export function PricingCustomerPlan() {
  return (
    <div className="rounded-3xl border border-[#FFE8D6] bg-[#FFF9F4] p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
        {/* Left Column: Title, Bullet Points, Waving Monkey Mascot */}
        <div className="flex flex-col justify-between lg:col-span-4">
          <div>
            <h3 className="text-2xl font-black text-ink sm:text-3xl">
              {pricingCustomerPlan.titleBefore}{" "}
              <br />
              <span className="text-brand-primary">
                {pricingCustomerPlan.titleAccent}
              </span>
            </h3>

            <ul className="mt-6 space-y-3">
              {pricingCustomerPlan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                    <CheckIcon className="size-2.5" />
                  </span>
                  <span className="text-xs font-semibold leading-snug text-ink sm:text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Waving Monkey Mascot Image at bottom left */}
          <div className="relative mt-6 hidden h-44 w-full sm:block lg:mt-8">
            <Image
              src={pricingCustomerPlan.mascotSrc}
              alt="Market Monkey Mascot"
              fill
              className="object-contain object-left-bottom"
              sizes="(max-width: 1024px) 240px, 300px"
              unoptimized
            />
          </div>
        </div>

        {/* Middle Column: Main Pricing Card */}
        <div className="relative flex flex-col justify-between rounded-3xl border border-[#FFE3D1] bg-white p-6 shadow-md text-center lg:col-span-4">
          {/* Top Most Popular Badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-primary-foreground shadow-xs">
            {pricingCustomerPlan.popularBadge}
          </div>

          <div>
            <div className="mt-3">
              <span className="text-4xl font-black text-brand-primary sm:text-5xl">
                {pricingCustomerPlan.price}
              </span>
              <p className="mt-1 text-xs font-semibold text-ink-muted sm:text-sm">
                {pricingCustomerPlan.priceSubtitle}
              </p>
            </div>

            {/* Feature Table Rows */}
            <div className="mt-6 space-y-2">
              {pricingCustomerPlan.tableFeatures.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-surface-border/60 bg-surface-subtle/50 px-3.5 py-2.5 text-left text-xs font-semibold text-ink"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-primary text-xs">
                    {item.icon === "video" && "📷"}
                    {item.icon === "user" && "👤"}
                    {item.icon === "search" && "🔍"}
                    {item.icon === "price" && "🏷️"}
                    {item.icon === "shield" && "🛡️"}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button & Note */}
          <div className="mt-8">
            <Link
              href={pricingCustomerPlan.ctaHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-primary py-3.5 text-sm font-bold text-white shadow-xs transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {pricingCustomerPlan.ctaLabel}
              <span className="text-base">→</span>
            </Link>
            <p className="mt-3 text-[11px] font-medium text-ink-muted">
              {pricingCustomerPlan.priceNote}
            </p>
          </div>
        </div>

        {/* Right Column: "How it works?" Timeline */}
        <div className="rounded-3xl border border-[#FFE8D6] bg-[#FFFDF9] p-6 lg:col-span-4">
          <h4 className="text-base font-extrabold text-ink sm:text-lg">
            {pricingCustomerPlan.howItWorksTitle}
          </h4>

          <div className="relative mt-5 space-y-5">
            {/* Dashed connecting vertical line */}
            <div
              className="pointer-events-none absolute top-3 bottom-3 left-4 w-px border-l-2 border-dashed border-brand-primary/30"
              aria-hidden="true"
            />

            {pricingCustomerPlan.howItWorksSteps.map((step) => (
              <div
                key={step.title}
                className="relative flex items-start gap-3.5 pl-0"
              >
                <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-brand-primary/30 bg-white text-brand-primary shadow-xs">
                  <span className="text-xs">
                    {step.icon === "user" && "👤"}
                    {step.icon === "video" && "📹"}
                    {step.icon === "compare" && "🔍"}
                  </span>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-ink sm:text-sm">
                    {step.title}
                  </h5>
                  <p className="mt-0.5 text-[11px] font-medium leading-relaxed text-ink-muted sm:text-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
