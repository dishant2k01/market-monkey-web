import type { Metadata } from "next";
import { AudienceSection } from "@/components/common/AudienceSection";
import { CommonFaqSection } from "@/components/common/CommonFaqSection";
import { HowItWorksSection } from "@/components/common/HowItWorksSection";
import { HowItWorksCtaSection } from "@/components/how-it-works/HowItWorksCtaSection";
import { HowItWorksHero } from "@/components/how-it-works/HowItWorksHero";
import { HowItWorksLiveSection } from "@/components/how-it-works/HowItWorksLiveSection";
import { howItWorksFaqs } from "@/config/faqs";

export const metadata: Metadata = {
  title: "How It Works — Explore Any Market Live in 4 Simple Steps",
  description:
    "Discover how Market Monkey connects you with verified local Monkeys for live video shopping. Pick a market, choose a Monkey, go live, compare prices, and shop with confidence.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How Market Monkey Works — Live Market Exploration",
    description:
      "A simple 4-step process to explore real markets from anywhere. Connect live with verified local Monkeys today.",
    url: "/how-it-works",
    type: "website",
    images: [
      {
        url: "/images/hero/how_it_works.png",
        alt: "How Market Monkey Works Live Shopping Experience",
      },
    ],
  },
  twitter: {
    title: "How Market Monkey Works — Live Market Exploration",
    description:
      "Explore local markets online in 4 simple steps with live video shopping.",
    images: ["/images/hero/how_it_works.png"],
  },
  keywords: [
    "how market monkey works",
    "live market shopping process",
    "explore local markets step by step",
    "verified local shoppers",
    "live video market shopping",
    "remote shopping assistant",
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <HowItWorksSection
        id="how-it-works-steps"
        title="How Market Monkey Works"
        subtitle="A simple 4-step process to explore real markets from anywhere."
      />
      <HowItWorksLiveSection />
      <AudienceSection />
      <CommonFaqSection
        id="how-it-works-faq"
        title="Frequently Asked Questions"
        highlightText="Questions"
        subtitle="Frequently asked questions about the customer journey on Market Monkey."
        items={howItWorksFaqs}
        idPrefix="hiw-faq"
      />
      <HowItWorksCtaSection />
    </>
  );
}
