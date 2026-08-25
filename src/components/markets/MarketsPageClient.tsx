"use client";

import { useState } from "react";
import { CommonFaqSection } from "@/components/common/CommonFaqSection";
import { AppDownloadCTA } from "@/components/home/AppDownloadCTA";
import { MarketsCantFindCta } from "@/components/markets/MarketsCantFindCta";
import { MarketsExplorerSection } from "@/components/markets/MarketsExplorerSection";
import { MarketsHero } from "@/components/markets/MarketsHero";
import { MarketsPopularCities } from "@/components/markets/MarketsPopularCities";
import { marketsFaqs } from "@/config/faqs";

export function MarketsPageClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const scrollToExplorer = () => {
    const el = document.getElementById("explore-markets");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    scrollToExplorer();
  };

  return (
    <>
      <MarketsHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onSearchSubmit={scrollToExplorer}
      />

      <MarketsPopularCities
        selectedCity={selectedCity}
        onSelectCity={handleCitySelect}
      />

      <MarketsExplorerSection
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
      />

      <MarketsCantFindCta />

      {/* Market Discovery FAQs Section */}
      <CommonFaqSection
        id="markets-faq"
        title="Frequently Asked Questions"
        highlightText="Questions"
        subtitle="Frequently asked questions about finding markets, requesting product checks, and multi-city shopping."
        items={marketsFaqs}
        idPrefix="markets-pg-faq"
      />

      <AppDownloadCTA />
    </>
  );
}
