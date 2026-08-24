"use client";

import { useState } from "react";
import { MarketsHero } from "@/components/markets/MarketsHero";
import { MarketsPopularCities } from "@/components/markets/MarketsPopularCities";
import { MarketsExplorerSection } from "@/components/markets/MarketsExplorerSection";
import { MarketsCantFindCta } from "@/components/markets/MarketsCantFindCta";
import { AppDownloadCTA } from "@/components/home/AppDownloadCTA";

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

      <AppDownloadCTA />
    </>
  );
}
