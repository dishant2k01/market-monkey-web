import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { homeHero } from "@/config/home";

export function Hero() {
  return (
    <section
      className="relative min-h-[580px] sm:min-h-[720px] lg:min-h-[820px] xl:min-h-[860px] w-full overflow-hidden bg-stone-950 text-white flex items-center"
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
          className="object-cover object-center sm:object-[65%_center] lg:object-center opacity-60 sm:opacity-75"
          sizes="100vw"
        />

        {/* Ambient warm light orbs */}
        <div
          className="pointer-events-none absolute -top-24 left-1/10 size-[16rem] sm:size-[30rem] rounded-full bg-[#FF800C]/20 blur-[80px] sm:blur-[110px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/12 size-[14rem] sm:size-[26rem] rounded-full bg-amber-500/15 blur-[70px] sm:blur-[100px]"
          aria-hidden="true"
        />

        {/* Sophisticated gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/70 to-stone-950 lg:bg-gradient-to-r lg:from-stone-950/95 lg:via-stone-950/85 lg:to-stone-950/40"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Content Container */}
      <Container className="relative z-20 w-full pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-20">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline, Supporting Copy, Action Buttons & Trust Proof */}
          <div className="max-w-3xl lg:col-span-7 xl:col-span-8">
            {/* Main Headline */}
            <AnimateIn variant="fade-up" delay={80} duration={650}>
              <h1
                id="hero-heading"
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.08]"
              >
                <span className="block">{homeHero.titleLine1}</span>
                <span className="block mt-0.5 sm:mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#FF800C] via-amber-400 to-[#FF800C]">
                  {homeHero.titleHighlight}
                </span>
                <span className="block mt-0.5 sm:mt-1">{homeHero.titleLine3}</span>
              </h1>
            </AnimateIn>

            {/* Supporting Description */}
            <AnimateIn variant="fade-up" delay={180} duration={600}>
              <p className="mt-3 sm:mt-5 max-w-xl text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-stone-300">
                {homeHero.description}
              </p>
            </AnimateIn>

            {/* Primary & Secondary Action Buttons */}
            <AnimateIn variant="fade-up" delay={260} duration={600}>
              <div className="mt-5 sm:mt-8 flex flex-row items-center gap-3">
                <Link
                  href={homeHero.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FF800C] to-[#ea6e00] px-5 py-3 sm:px-7 sm:py-3.5 text-xs xs:text-sm sm:text-base font-bold text-white shadow-lg shadow-[#FF800C]/25 transition-all duration-200 hover:shadow-[#FF800C]/40 hover:-translate-y-0.5 active:scale-95"
                >
                  <span>{homeHero.primaryCta.label}</span>
                </Link>

                <Link
                  href={homeHero.secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-3.5 text-xs xs:text-sm sm:text-base font-semibold text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white hover:-translate-y-0.5 active:scale-95"
                >
                  <span>{homeHero.secondaryCta.label}</span>
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="relative mt-4 lg:mt-0 flex items-center justify-center lg:col-span-5 xl:col-span-4 lg:justify-end">
            {/* Ambient subtle glow behind phone */}
            <div
              className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-tr from-[#FF800C]/25 via-amber-500/15 to-transparent blur-3xl opacity-70"
              aria-hidden="true"
            />

            {/* Main Phone Mockup */}
            <AnimateIn variant="zoom-in" delay={150} duration={800} className="relative z-10 w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[210px] xs:max-w-[240px] sm:max-w-[290px] lg:max-w-[350px] xl:max-w-[380px]">
                <div className="relative aspect-[626/1024] w-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]">
                  <Image
                    src={homeHero.phoneSrc}
                    alt={homeHero.phoneAlt}
                    fill
                    priority
                    unoptimized
                    className="object-contain"
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 290px, 380px"
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
