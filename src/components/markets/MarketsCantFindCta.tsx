import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function MarketsCantFindCta() {
  return (
    <section className="bg-surface py-8 lg:py-10" aria-label="Request a market">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between rounded-3xl border border-[#FFD6B3] bg-[#FFF9F5] p-6 sm:p-8 lg:px-10 lg:py-8 shadow-xs gap-6">
          {/* Left: Mascot & Text */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 text-center sm:text-left">
            <div className="relative size-24 sm:size-28 shrink-0">
              <Image
                src="/images/become/mascot-cool.png"
                alt="Market Monkey mascot"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 96px, 112px"
                unoptimized
              />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-ink">
                Can&apos;t find your market?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-ink-muted max-w-md">
                Tell us which market you want to explore. We&apos;ll notify you when
                Monkeys are available.
              </p>
            </div>
          </div>

          {/* Right: Action Button */}
          <button
            type="button"
            className="rounded-xl border-2 border-brand-primary bg-white px-6 py-3 text-xs sm:text-sm font-extrabold text-brand-primary shadow-xs transition-all hover:bg-brand-soft hover:shadow-sm shrink-0 cursor-pointer"
          >
            Request a Market
          </button>
        </div>
      </Container>
    </section>
  );
}
