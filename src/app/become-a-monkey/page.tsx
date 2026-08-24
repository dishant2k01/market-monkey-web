import type { Metadata } from "next";
import { BecomeHero } from "@/components/become/BecomeHero";
import { BecomeHowItWorks } from "@/components/become/BecomeHowItWorks";
import { BecomeWhy } from "@/components/become/BecomeWhy";
import { BecomeWhoAndEarnings } from "@/components/become/BecomeWhoAndEarnings";
import { BecomeTestimonials } from "@/components/become/BecomeTestimonials";
import { BecomeCta } from "@/components/become/BecomeCta";

export const metadata: Metadata = {
  title: "Become a Monkey | Market Monkey",
  description:
    "Turn your knowledge of local markets into real earnings. Help people explore, compare and shop with confidence on Market Monkey.",
};

export default function BecomeAMonkeyPage() {
  return (
    <>
      <BecomeHero />
      <BecomeHowItWorks />
      <BecomeWhy />
      <BecomeWhoAndEarnings />
      <BecomeTestimonials />
      <BecomeCta />
    </>
  );
}
