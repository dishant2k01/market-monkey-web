import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  PriceTagIcon,
  ShieldVerifiedIcon,
  SmartphoneIcon,
  StoreFrontIcon,
  VideoShoppingIcon,
} from "@/components/markets/marketIcons";
import { heroMarketHighlights } from "@/config/markets";

export function MarketsHero() {
  const highlightIcons = {
    store: <StoreFrontIcon className="size-4 text-brand-primary" />,
    shield: <ShieldVerifiedIcon className="size-4 text-brand-primary" />,
    video: <VideoShoppingIcon className="size-4 text-brand-primary" />,
    tag: <PriceTagIcon className="size-4 text-brand-primary" />,
  };

  return (
    <section className="relative overflow-hidden bg-surface-muted pt-10 pb-12 lg:pt-14 lg:pb-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, CTA buttons & Value Props */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-extrabold tracking-widest text-brand-primary uppercase">
              EXPLORE MARKETS
            </span>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[3.25rem] leading-[1.15]">
              Explore Real Markets <br />
              From <span className="text-brand-primary">Anywhere</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl">
              Discover local markets across India with verified Market Monkeys.
              Compare products, prices, and local finds before you shop.
            </p>

            {/* Action Buttons Row */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#get-the-app"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-primary px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-xs transition-all hover:bg-brand-primary-hover hover:shadow-sm"
              >
                <SmartphoneIcon className="size-4 shrink-0" />
                <span>Get the App</span>
              </a>

              <Link
                href="/become-a-monkey"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-surface-border bg-surface px-6 py-3 text-xs sm:text-sm font-bold text-ink shadow-2xs transition-all hover:bg-surface-subtle hover:border-ink/20"
              >
                <span>Become a Monkey</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Highlights List */}
            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-sm font-semibold text-ink-secondary">
              {heroMarketHighlights.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-full bg-brand-soft">
                    {highlightIcons[item.icon]}
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Hero Market Photo & Floating Live Card */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl shadow-md">
              <Image
                src="/images/home/hero-bg.jpeg"
                alt="Bustling Indian night market stalls with authentic lights and clothing"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>

            {/* Floating Live Badge Card */}
            <div className="absolute right-3 -bottom-6 sm:right-6 sm:-bottom-6 z-10 rounded-2xl border border-surface-border/80 bg-surface/95 p-3.5 sm:p-4 shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-red-500" />
                </span>
                <p className="text-xs font-bold text-ink">
                  Live from Sarojini Nagar, Delhi
                </p>
              </div>

              <div className="mt-2.5 flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden">
                  <Image
                    src="/images/testimonials/priya.jpg"
                    alt="Viewer avatar Priya"
                    width={26}
                    height={26}
                    className="inline-block size-6.5 rounded-full ring-2 ring-white object-cover"
                  />
                  <Image
                    src="/images/testimonials/rahul.jpg"
                    alt="Viewer avatar Rahul"
                    width={26}
                    height={26}
                    className="inline-block size-6.5 rounded-full ring-2 ring-white object-cover"
                  />
                  <Image
                    src="/images/testimonials/neha.jpg"
                    alt="Viewer avatar Neha"
                    width={26}
                    height={26}
                    className="inline-block size-6.5 rounded-full ring-2 ring-white object-cover"
                  />
                  <Image
                    src="/images/testimonials/arjun.jpg"
                    alt="Viewer avatar Arjun"
                    width={26}
                    height={26}
                    className="inline-block size-6.5 rounded-full ring-2 ring-white object-cover"
                  />
                </div>
                <span className="text-[11px] font-extrabold text-ink-muted">
                  +124
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
