import type { Metadata } from "next";
import { CommonFaqSection } from "@/components/common/CommonFaqSection";
import { AppDownloadCTA } from "@/components/home/AppDownloadCTA";
import { Container } from "@/components/layout/Container";
import { PricingCustomerPlan } from "@/components/pricing/PricingCustomerPlan";

import { PricingHeader } from "@/components/pricing/PricingHeader";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingMonkeyPlan } from "@/components/pricing/PricingMonkeyPlan";
import { pricingFaqs } from "@/config/faqs";

export const metadata: Metadata = {
  title: "Pricing & Plans | Market Monkey",
  description:
    "Simple & transparent pricing for live market discovery. ₹99 per 15-minute live customer session and ₹299/month for verified Monkeys.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <PricingHero />

      {/* 2. Main Pricing Plans Section */}
      <section
        id="plans"
        className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
        aria-labelledby="pricing-plans-heading"
      >
        <Container>
          {/* Section Header (without tabs) */}
          <PricingHeader />

          {/* Pricing Cards Container */}
          <div className="mt-8 space-y-12 lg:mt-12 lg:space-y-16">
            {/* Customer Plan */}
            <div id="customer-plan">
              <PricingCustomerPlan />
            </div>

            {/* Monkey Plan */}
            <div id="monkey-plan">
              <PricingMonkeyPlan />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Pricing FAQs Section (Placed directly above App Download CTA as requested) */}
      <CommonFaqSection
        id="pricing-faq"
        title="Frequently Asked Questions"
        highlightText="Questions"
        subtitle="Everything you need to know about live session pricing, payment terms, and Monkey subscriptions."
        items={pricingFaqs}
        idPrefix="pricing-faqs"
      />

      {/* 4. Take Market Monkey With You App CTA Section */}
      <AppDownloadCTA />
    </>
  );
}
