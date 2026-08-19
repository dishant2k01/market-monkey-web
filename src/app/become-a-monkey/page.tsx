import type { Metadata } from "next";
import { BecomeCta } from "@/components/become/BecomeCta";
import { BecomeHero } from "@/components/become/BecomeHero";
import { BecomeHowItWorks } from "@/components/become/BecomeHowItWorks";
import { BecomeNewsletter } from "@/components/become/BecomeNewsletter";
import { BecomeTestimonials } from "@/components/become/BecomeTestimonials";
import { BecomeWho } from "@/components/become/BecomeWho";
import { BecomeWhy } from "@/components/become/BecomeWhy";

export const metadata: Metadata = {
  title: "Become a Monkey",
  description:
    "Share your skills, set your schedule, and earn with Market Monkey. Join thousands of verified Monkeys helping people explore markets.",
};

export default function BecomeAMonkeyPage() {
  return (
    <>
      <BecomeHero />
      <BecomeWhy />
      <BecomeHowItWorks />
      <BecomeWho />
      <BecomeCta />
      <BecomeTestimonials />
      <BecomeNewsletter />
    </>
  );
}
