import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { homeHero } from "@/config/home";

export function Hero() {
  return (
    <section
      className="relative min-h-[640px] sm:min-h-[780px] lg:min-h-[840px] xl:min-h-[880px] w-full overflow-hidden bg-stone-950 text-white flex items-center"
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

        {/* Static ambient light orbs */}
        <div
          className="pointer-events-none absolute -top-24 left-1/10 size-[20rem] sm:size-[30rem] rounded-full bg-[#FF800C]/20 blur-[90px] sm:blur-[110px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/12 size-[18rem] sm:size-[26rem] rounded-full bg-amber-500/15 blur-[80px] sm:blur-[100px]"
          aria-hidden="true"
        />

        {/* Sophisticated gradient overlay for AAA text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/40 md:from-black/90 md:via-black/70 md:to-black/20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Content Container */}
      <Container className="relative z-20 w-full pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Left Column: Headline, Supporting Copy, Action Buttons & Trust Proof */}
          <div className="max-w-3xl lg:col-span-7 xl:col-span-8">
            {/* Main Headline */}
            <AnimateIn variant="fade-up" delay={80} duration={650}>
              <h1
                id="hero-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem] leading-[1.08] sm:leading-[1.05]"
              >
                <span className="block text-white">{homeHero.titleLine1}</span>
                <span className="block mt-1">
                  <span className="text-[#FF800C] bg-gradient-to-r from-[#FF800C] via-amber-400 to-[#FF800C] bg-clip-text text-transparent">
                    {homeHero.titleHighlight}
                  </span>
                </span>
                <span className="block mt-1 text-white">{homeHero.titleLine3}</span>
              </h1>
            </AnimateIn>

            {/* Supporting Description */}
            <AnimateIn variant="fade-up" delay={180} duration={600}>
              <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg lg:text-xl font-normal leading-relaxed text-white/90 drop-shadow-xs">
                {homeHero.description}
              </p>
            </AnimateIn>

            {/* Primary & Secondary Action Buttons */}
            <AnimateIn variant="fade-up" delay={260} duration={600}>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href={homeHero.primaryCta.href}
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF800C] px-6 py-3.5 sm:px-7 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#FF800C]/30 transition-all duration-200 hover:bg-[#e0700a] hover:shadow-[#FF800C]/50 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  {/* Subtle moving shimmer light effect */}
                  <span
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-shimmer-sweep"
                    aria-hidden="true"
                  />
                  <span>{homeHero.primaryCta.label}</span>
                </Link>

                <Link
                  href={homeHero.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-black/40 px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md backdrop-blur-md transition-all duration-200 hover:bg-black/60 hover:border-white/50 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <span>{homeHero.secondaryCta.label}</span>
                </Link>
              </div>
            </AnimateIn>

            {/* Trust Proof with Glowing Stars */}
            <AnimateIn variant="fade-up" delay={340} duration={600}>
              <div className="mt-8 sm:mt-10 flex items-center gap-3 pt-1 sm:pt-2">
                <div className="flex -space-x-2 overflow-hidden">
                  <Image
                    src="/images/testimonials/priya.jpg"
                    alt="Shopper avatar"
                    width={36}
                    height={36}
                    className="inline-block size-8 sm:size-9 rounded-full ring-2 ring-black object-cover"
                  />
                  <Image
                    src="/images/testimonials/rahul.jpg"
                    alt="Shopper avatar"
                    width={36}
                    height={36}
                    className="inline-block size-8 sm:size-9 rounded-full ring-2 ring-black object-cover"
                  />
                  <Image
                    src="/images/testimonials/neha.jpg"
                    alt="Shopper avatar"
                    width={36}
                    height={36}
                    className="inline-block size-8 sm:size-9 rounded-full ring-2 ring-black object-cover"
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

          {/* Right Column: Phone Mockup */}
          <div className="relative flex items-center justify-center lg:col-span-5 xl:col-span-4 lg:justify-end">
            {/* Main Phone Mockup */}
            <AnimateIn variant="zoom-in" delay={150} duration={800} className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[240px] xs:max-w-[270px] sm:max-w-[310px] lg:max-w-[350px] xl:max-w-[380px]">
                <div className="relative aspect-[626/1024] w-full drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
                  <Image
                    src={homeHero.phoneSrc}
                    alt={homeHero.phoneAlt}
                    fill
                    priority
                    unoptimized
                    className="object-contain"
                    sizes="(max-width: 640px) 270px, (max-width: 1024px) 330px, 380px"
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
