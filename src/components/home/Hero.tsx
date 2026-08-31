import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { homeHero } from "@/config/home";

export function Hero() {
  return (
    <section
      className="relative min-h-[720px] sm:min-h-[780px] lg:min-h-[840px] xl:min-h-[880px] w-full overflow-hidden bg-stone-950 text-white flex items-center"
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
          className="object-cover object-center sm:object-[65%_center] lg:object-center scale-105 transition-transform duration-1000 ease-out"
          sizes="100vw"
        />

        {/* Dynamic moving ambient light orbs */}
        <div
          className="pointer-events-none absolute -top-24 left-1/10 size-[30rem] rounded-full bg-[#FF800C]/20 blur-[110px] animate-ambient-1"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/12 size-[26rem] rounded-full bg-amber-500/15 blur-[100px] animate-ambient-2"
          aria-hidden="true"
        />

        {/* Sophisticated gradient overlay for AAA text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/35 md:from-black/90 md:via-black/70 md:to-black/20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Content Container */}
      <Container className="relative z-20 w-full pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Left Column: Headline, Supporting Copy, Action Buttons & Trust Proof */}
          <div className="max-w-3xl lg:col-span-7 xl:col-span-8">
            {/* Live Radar Moving Pill */}
            <AnimateIn variant="fade-down" delay={0} duration={600}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-black/60 px-3.5 py-1.5 backdrop-blur-md shadow-lg shadow-black/40 mb-6">
                <span className="relative flex size-2.5 items-center justify-center">
                  <span className="absolute inline-flex size-full animate-radar-ripple rounded-full bg-[#FF800C]" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#FF800C]" />
                </span>
                <span className="text-xs font-bold tracking-wide uppercase text-white/90">
                  Live Market Radar
                </span>
                <span className="size-1 rounded-full bg-white/30" />
                <span className="text-xs font-medium text-amber-300">
                  Verified Monkeys Active
                </span>
              </div>
            </AnimateIn>

            {/* Main Headline */}
            <AnimateIn variant="fade-up" delay={80} duration={650}>
              <h1
                id="hero-heading"
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem] leading-[1.05]"
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
              <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white/90 drop-shadow-xs">
                {homeHero.description}
              </p>
            </AnimateIn>

            {/* Primary & Secondary Action Buttons */}
            <AnimateIn variant="fade-up" delay={260} duration={600}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={homeHero.primaryCta.href}
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF800C] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[#FF800C]/30 transition-all duration-200 hover:bg-[#e0700a] hover:shadow-[#FF800C]/50 hover:-translate-y-0.5 active:scale-[0.98]"
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
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-black/40 px-6 py-3.5 text-base font-semibold text-white shadow-md backdrop-blur-md transition-all duration-200 hover:bg-black/60 hover:border-white/50 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <span>{homeHero.secondaryCta.label}</span>
                </Link>
              </div>
            </AnimateIn>

            {/* Trust Proof with Glowing Stars */}
            <AnimateIn variant="fade-up" delay={340} duration={600}>
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

          {/* Right Column: Phone Mockup with Floating Moving Badges & Live Reactions */}
          <div className="relative flex items-center justify-center lg:col-span-5 xl:col-span-4 lg:justify-end">
            {/* Top-Left Floating Moving Card */}
            <div className="absolute -top-4 -left-6 sm:-top-6 sm:-left-10 z-30 animate-float-slow hidden xs:flex">
              <div className="flex items-center gap-2.5 rounded-2xl border border-white/20 bg-black/75 px-3.5 py-2.5 shadow-2xl backdrop-blur-md">
                <span className="relative flex size-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-[#FF800C] text-sm text-black font-bold shadow-sm">
                  🛍️
                </span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[0.6875rem] font-bold text-white uppercase tracking-wider">
                      Live Bargaining
                    </span>
                    <span className="rounded bg-emerald-500/20 px-1 text-[0.625rem] font-bold text-emerald-400">
                      -40%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-extrabold text-[#FF800C]">₹350</span>
                    <span className="text-[0.6875rem] line-through text-white/50">₹600</span>
                    <span className="flex items-end gap-0.5 h-3">
                      <span className="w-0.5 bg-emerald-400 rounded-full animate-soundwave-1" />
                      <span className="w-0.5 bg-emerald-400 rounded-full animate-soundwave-2" />
                      <span className="w-0.5 bg-emerald-400 rounded-full animate-soundwave-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom-Right Floating Moving Card */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 z-30 animate-float-reverse hidden xs:flex">
              <div className="flex items-center gap-2.5 rounded-2xl border border-white/20 bg-black/80 px-3.5 py-2.5 shadow-2xl backdrop-blur-md">
                <div className="relative size-8 shrink-0 overflow-hidden rounded-xl ring-1 ring-emerald-500/60">
                  <Image
                    src="/images/testimonials/rahul.jpg"
                    alt="Verified Monkey Rahul"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-0 right-0 size-2 rounded-full bg-emerald-400 ring-1 ring-black" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Rahul S. (Monkey)</p>
                  <p className="flex items-center gap-1 text-[0.6875rem] text-emerald-400 font-medium">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live @ Sarojini Nagar
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Live Reaction Stream Emojis */}
            <div className="pointer-events-none absolute right-4 top-1/3 z-30 flex flex-col items-center">
              <span className="animate-reaction-1 text-2xl drop-shadow-md select-none">❤️</span>
              <span className="animate-reaction-2 text-2xl drop-shadow-md select-none">🔥</span>
              <span className="animate-reaction-3 text-2xl drop-shadow-md select-none">🛍️</span>
            </div>

            {/* Main Phone Mockup */}
            <AnimateIn variant="zoom-in" delay={150} duration={800} className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[270px] sm:max-w-[310px] lg:max-w-[350px] xl:max-w-[380px] transition-transform duration-300 hover:scale-[1.02]">
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
