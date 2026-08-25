import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function MarketsCantFindCta() {
  return (
    <section className="bg-surface py-10 lg:py-14" aria-label="Request a market">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between rounded-3xl border border-[#FFD6B3] bg-[#FFF9F5] p-6 sm:p-8 lg:px-10 lg:py-8 shadow-xs gap-6">
          {/* Left: Mascot & Text */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="relative size-20 sm:size-24 shrink-0">
              <Image
                src="/images/monkey.png"
                alt="Market Monkey mascot"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 80px, 96px"
                unoptimized
              />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-ink">
                Can&apos;t Find Your Market?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-ink-muted max-w-lg">
                Tell us which market you&apos;d like to explore. We&apos;re constantly
                expanding Market Monkey to new places.
              </p>
            </div>
          </div>

          {/* Right: Action Button */}
          <Link
            href="/contact"
            className="rounded-xl border-2 border-brand-primary bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-brand-primary shadow-xs transition-all hover:bg-brand-soft hover:shadow-sm shrink-0"
          >
            Request a Market
          </Link>
        </div>
      </Container>
    </section>
  );
}
