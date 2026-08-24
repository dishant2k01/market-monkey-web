import type { Metadata } from "next";
import { CommonFaqSection } from "@/components/common/CommonFaqSection";
import { AppDownloadCTA } from "@/components/home/AppDownloadCTA";
import { PopularMarkets } from "@/components/home/PopularMarkets";
import { Container } from "@/components/layout/Container";
import { marketsFaqs } from "@/config/faqs";

export const metadata: Metadata = {
  title: "Explore Local Markets | Market Monkey",
  description:
    "Discover participating local markets across Delhi, Mumbai, Bengaluru, Jaipur, and Pune. Connect live with verified Monkeys for remote market exploration.",
  alternates: {
    canonical: "/markets",
  },
};

export default function MarketsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FFFDF9] border-b border-[#FFE8D6] pt-10 pb-14 lg:pt-16 lg:pb-20">
        <div
          className="pointer-events-none absolute -top-24 right-0 size-[500px] rounded-full bg-brand-primary/5 blur-3xl"
          aria-hidden="true"
        />
        <Container className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary">
            Market Discovery
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Explore Local <span className="text-brand-primary">Markets</span> Live
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Browse participating shopping hubs across Indian cities and connect with verified local Monkeys for real-time video exploration.
          </p>
        </Container>
      </section>

      {/* Markets Grid */}
      <PopularMarkets />

      {/* Market Discovery FAQs */}
      <CommonFaqSection
        id="markets-faq"
        title="Market Discovery & Local FAQs"
        highlightText="FAQs"
        subtitle="Frequently asked questions about finding markets, requesting product checks, and multi-city shopping."
        items={marketsFaqs}
        idPrefix="markets-pg-faq"
      />

      {/* App Download CTA */}
      <AppDownloadCTA />
    </>
  );
}
