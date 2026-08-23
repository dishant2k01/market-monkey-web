import type { Metadata } from "next";
import { AudienceSection } from "@/components/home/AudienceSection";
import { AppDownloadCTA } from "@/components/home/AppDownloadCTA";
import { Hero } from "@/components/home/Hero";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LiveMarketExperience } from "@/components/home/LiveMarketExperience";
import { PopularMarkets } from "@/components/home/PopularMarkets";
import { PricingSection } from "@/components/home/PricingSection";
import { VerificationSection } from "@/components/home/VerificationSection";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";

export const metadata: Metadata = {
  title: "Live Market Exploration — See Reality Before You Buy",
  description:
    "Explore local markets online with verified Monkeys through live video shopping. Compare prices before buying, inspect products remotely, and shop Indian markets with confidence.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Market Monkey — Live Market Exploration",
    description:
      "Go live with verified local Monkeys to explore real markets, check products, and compare prices before you buy.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/images/home/hero-bg.jpeg",
        alt: "Live market exploration with Market Monkey",
      },
    ],
  },
  twitter: {
    title: "Market Monkey — Live Market Exploration",
    description:
      "Explore Indian markets online with live video shopping and verified local Monkeys.",
    images: ["/images/home/hero-bg.jpeg"],
  },
  keywords: [
    "live market exploration",
    "explore local markets online",
    "virtual market exploration",
    "live video shopping",
    "verified local sellers",
    "compare prices before buying",
    "remote product inspection",
    "local market shopping",
    "explore Indian markets online",
  ],
};

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <HowItWorks />
      <LiveMarketExperience />
      <AudienceSection />
      <PopularMarkets />
      <PricingSection />
      <VerificationSection />
      <HomeTestimonials />
      <HomeFaq />
      <AppDownloadCTA />
    </>
  );
}
