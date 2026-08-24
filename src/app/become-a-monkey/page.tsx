import type { Metadata } from "next";
import { BecomeCta } from "@/components/become/BecomeCta";
import { BecomeHero } from "@/components/become/BecomeHero";
import { BecomeHowItWorks } from "@/components/become/BecomeHowItWorks";
import { BecomeTestimonials } from "@/components/become/BecomeTestimonials";
import { BecomeWhoAndEarnings } from "@/components/become/BecomeWhoAndEarnings";
import { BecomeWhy } from "@/components/become/BecomeWhy";
import { CommonFaqSection } from "@/components/common/CommonFaqSection";
import { becomeAMonkeyFaqs } from "@/config/faqs";

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
      <CommonFaqSection
        id="become-monkey-faq"
        title="Become a Monkey FAQs"
        highlightText="FAQs"
        subtitle="Frequently asked questions about applying, verification, and earning as a local Monkey."
        items={becomeAMonkeyFaqs}
        idPrefix="bm-faq"
      />
      <BecomeCta />
    </>
  );
}
