import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { homeHero } from "@/config/home";

export function Hero() {
  return (
    <section
      className="relative min-h-[720px] sm:min-h-[780px] lg:min-h-[820px] xl:min-h-[860px] w-full overflow-hidden bg-stone-950 text-white flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Full-Bleed Realistic Market Photography Background */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src={homeHero.backgroundSrc}
          alt={homeHero.backgroundAlt}
          fill
          priority
          unoptimized
          className="object-cover object-center sm:object-[65%_center] lg:object-center"
          sizes="100vw"
        />

        {/* Sophisticated gradient overlay for AAA text contrast on the left while keeping photographic richness on the right */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 md:from-black/90 md:via-black/65 md:to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Content Container */}
      <Container className="relative z-20 w-full pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline, Supporting Copy, Action Buttons & Subtle Trust Proof */}
          <div className="max-w-2xl lg:col-span-7 xl:col-span-7">
            {/* Main Headline */}
            <AnimateIn variant="fade-up" delay={50} duration={600}>
              <h1
                id="hero-heading"
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.06]"
              >
                <span className="block text-white">{homeHero.titleLine1}</span>
                <span className="block mt-1">
                  <span className="text-[#FF800C]">{homeHero.titleHighlight}</span>
                </span>
                <span className="block mt-1 text-white">{homeHero.titleLine3}</span>
              </h1>
            </AnimateIn>

            {/* Supporting Description */}
            <AnimateIn variant="fade-up" delay={150} duration={600}>
              <p className="mt-6 max-w-xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white/90 drop-shadow-xs">
                {homeHero.description}
              </p>
            </AnimateIn>

            {/* Primary & Secondary Action Buttons */}
            <AnimateIn variant="fade-up" delay={250} duration={600}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={homeHero.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF800C] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[#FF800C]/25 transition-all duration-200 hover:bg-[#e0700a] hover:shadow-[#FF800C]/40 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <span>{homeHero.primaryCta.label}</span>
                </Link>

                <Link
                  href={homeHero.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-black/40 px-6 py-3.5 text-base font-semibold text-white shadow-md backdrop-blur-md transition-all duration-200 hover:bg-black/60 hover:border-white/50 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <span>{homeHero.secondaryCta.label}</span>
                </Link>
              </div>
            </AnimateIn>

            {/* Subtle Minimal Trust Proof */}
            <AnimateIn variant="fade-up" delay={350} duration={600}>
              <div className="mt-10 flex items-center gap-3 pt-2">
                <div className="flex -space-x-2 overflow-hidden">
                  <Image
                    src="/images/testimonials/priya.jpg"
                    alt="Shopper avatar"
                    width={36}
                    height={36}
                    className="inline-block size-9 rounded-full ring-2 ring-black object-cover"
                  />
                  <Image
                    src="/images/testimonials/rahul.jpg"
                    alt="Shopper avatar"
                    width={36}
                    height={36}
                    className="inline-block size-9 rounded-full ring-2 ring-black object-cover"
                  />
                  <Image
                    src="/images/testimonials/neha.jpg"
                    alt="Shopper avatar"
                    width={36}
                    height={36}
                    className="inline-block size-9 rounded-full ring-2 ring-black object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                    <span>★ ★ ★ ★ ★</span>
                    <span className="text-white font-semibold">4.9</span>
                  </div>
                  <span className="text-xs font-medium text-white/80">
                    {homeHero.trustText}
                  </span>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Right Column: Single Premium Phone Mockup Integrated Naturally into Photography */}
          <div className="flex items-center justify-center lg:col-span-5 xl:col-span-5">
            <AnimateIn variant="zoom-in" delay={200} duration={800} className="w-full flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[370px] xl:max-w-[400px] transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative aspect-[626/1024] w-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]">
                  <Image
                    src={homeHero.phoneSrc}
                    alt={homeHero.phoneAlt}
                    fill
                    priority
                    unoptimized
                    className="object-contain"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                  />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
