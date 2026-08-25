import Link from "next/link";
import { pricingMonkeyPlan } from "@/config/pricingPage";

export function PricingMonkeyPlan() {
  return (
    <div className="rounded-3xl border border-[#D0E4FF] bg-[#F0F7FF] p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
        {/* Left Column: Title, Bullet Points, Blue CTA */}
        <div className="flex flex-col justify-between lg:col-span-4">
          <div>
            <h3 className="text-2xl font-black text-ink sm:text-3xl">
              {pricingMonkeyPlan.titleBefore}{" "}
              <br />
              <span className="text-[#0066FF]">
                {pricingMonkeyPlan.titleAccent}
              </span>
            </h3>

            <ul className="mt-6 space-y-3">
              {pricingMonkeyPlan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-[#0066FF] text-white text-[10px]">
                    ✓
                  </span>
                  <span className="text-xs font-semibold leading-snug text-ink sm:text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Blue CTA Button on Left Column */}
          <div className="mt-8">
            <Link
              href={pricingMonkeyPlan.leftCtaHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0066FF] py-3.5 text-sm font-bold text-white shadow-xs transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {pricingMonkeyPlan.leftCtaLabel}
              <span className="text-base">→</span>
            </Link>
            <p className="mt-2 text-center text-[11px] font-medium text-ink-muted">
              {pricingMonkeyPlan.leftCtaNote}
            </p>
          </div>
        </div>

        {/* Middle Column: Main Pricing Card */}
        <div className="relative flex flex-col justify-between rounded-3xl border border-[#C2DBFF] bg-white p-6 shadow-md text-center lg:col-span-4">
          <div>
            <div className="mt-2">
              <span className="text-4xl font-black text-[#0066FF] sm:text-5xl">
                {pricingMonkeyPlan.price}
              </span>
              <p className="mt-1 text-xs font-semibold text-ink-muted sm:text-sm">
                {pricingMonkeyPlan.priceSubtitle}
              </p>
            </div>

            {/* Feature Table Rows */}
            <div className="mt-6 space-y-2">
              {pricingMonkeyPlan.tableFeatures.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-[#E2EEFF] bg-[#F8FAFC] px-3.5 py-2.5 text-left text-xs font-semibold text-ink"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#EBF3FF] text-[#0066FF] text-xs">
                    {item.icon === "briefcase" && "💼"}
                    {item.icon === "clock" && "⏰"}
                    {item.icon === "wallet" && "💳"}
                    {item.icon === "headset" && "🎧"}
                    {item.icon === "cancel" && "✕"}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button & Note */}
          <div className="mt-8">
            <Link
              href={pricingMonkeyPlan.ctaHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0066FF] py-3.5 text-sm font-bold text-white shadow-xs transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {pricingMonkeyPlan.ctaLabel}
              <span className="text-base">→</span>
            </Link>
            <p className="mt-3 text-[11px] font-medium text-ink-muted">
              {pricingMonkeyPlan.priceNote}
            </p>
          </div>
        </div>

        {/* Right Column: "Why Join as a Monkey?" */}
        <div className="rounded-3xl border border-[#D0E4FF] bg-[#F8FAFC] p-6 lg:col-span-4">
          <h4 className="text-base font-extrabold text-ink sm:text-lg">
            {pricingMonkeyPlan.whyTitle}
          </h4>

          <div className="mt-5 space-y-4">
            {pricingMonkeyPlan.whyPoints.map((point) => (
              <div key={point.title} className="flex items-start gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-[#EBF3FF] text-[#0066FF] text-xs font-bold shadow-xs">
                  {point.icon === "chart" && "📊"}
                  {point.icon === "boss" && "🏠"}
                  {point.icon === "heart" && "💙"}
                  {point.icon === "community" && "🤝"}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-ink sm:text-sm">
                    {point.title}
                  </h5>
                  <p className="mt-0.5 text-[11px] font-medium leading-relaxed text-ink-muted sm:text-xs">
                    {point.description}
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
