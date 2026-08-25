"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import {
  MonkeyAvatarIcon,
  SmartphoneIcon,
} from "@/components/markets/marketIcons";
import {
  allMarketItems,
  filterCategoryOptions,
  filterCityOptions,
  whyMarketMonkeyPoints,
  type MarketItem,
} from "@/config/markets";

function CheckIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="m3.5 8.5 3 3 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type MarketsExplorerSectionProps = {
  selectedCity: string;
  onCityChange: (city: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
};

export function MarketsExplorerSection({
  selectedCity,
  onCityChange,
  selectedCategory,
  onCategoryChange,
  searchQuery,
}: MarketsExplorerSectionProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"popular" | "monkeys" | "recent" | "az">("popular");
  const [showAllTags, setShowAllTags] = useState(false);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearAll = () => {
    onCityChange("All Cities");
    onCategoryChange("All Categories");
    setSelectedTags([]);
    setSortBy("popular");
  };

  const filteredMarkets = useMemo(() => {
    return allMarketItems.filter((market) => {
      // City filter
      if (selectedCity !== "All Cities" && market.city.toLowerCase() !== selectedCity.toLowerCase()) {
        return false;
      }

      // Category filter
      if (
        selectedCategory !== "All Categories" &&
        !market.categories.some((c) => c.toLowerCase() === selectedCategory.toLowerCase())
      ) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = market.name.toLowerCase().includes(query);
        const matchesCity = market.city.toLowerCase().includes(query);
        const matchesCat = market.categories.some((c) => c.toLowerCase().includes(query));
        if (!matchesName && !matchesCity && !matchesCat) return false;
      }

      // Checkbox tag filters
      if (selectedTags.length > 0) {
        const hasTag = selectedTags.some((tag) =>
          market.categories.some((c) => c.toLowerCase() === tag.toLowerCase())
        );
        if (!hasTag) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "monkeys") {
        return b.monkeysLive - a.monkeysLive;
      }
      if (sortBy === "az") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "recent") {
        return b.id.localeCompare(a.id);
      }
      // default: popular (live items first, then by monkeys count)
      return (b.isLive ? 1 : 0) - (a.isLive ? 1 : 0) || b.monkeysLive - a.monkeysLive;
    });
  }, [selectedCity, selectedCategory, searchQuery, selectedTags, sortBy]);

  const visibleCheckboxCategories = showAllTags
    ? filterCategoryOptions
    : filterCategoryOptions.slice(0, 5);

  return (
    <section id="explore-markets" className="bg-surface py-10 lg:py-16" aria-labelledby="markets-explorer-heading">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Main Left Section: Markets Grid */}
          <div className="lg:col-span-8 xl:col-span-9">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <div>
                <h2
                  id="markets-explorer-heading"
                  className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink"
                >
                  Popular Markets
                </h2>
                <p className="mt-1 text-xs text-ink-muted">
                  Showing {filteredMarkets.length} of {allMarketItems.length} markets
                </p>
              </div>

              <button
                type="button"
                onClick={handleClearAll}
                className="text-xs sm:text-sm font-bold text-brand-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                View All Markets
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* 4-Column Responsive Grid */}
            {filteredMarkets.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {filteredMarkets.map((market) => (
                  <article
                    key={market.id}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border/80 bg-surface shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-brand-soft-border"
                  >
                    <div>
                      {/* Image container */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-subtle">
                        <Image
                          src={market.imageSrc}
                          alt={market.imageAlt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                        />

                        {/* Live Now Tag */}
                        {market.isLive && (
                          <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 rounded-md bg-brand-primary px-2 py-0.5 text-[10px] font-extrabold text-white shadow-xs">
                            <span className="size-1.5 rounded-full bg-white animate-pulse" />
                            Live Now
                          </div>
                        )}
                      </div>

                      {/* Content details */}
                      <div className="p-3.5 sm:p-4">
                        <h3 className="truncate text-xs sm:text-sm font-bold text-ink" title={market.name}>
                          {market.name}
                        </h3>
                        <p className="text-[11px] font-medium text-ink-muted">
                          {market.city}
                        </p>

                        {/* Tags */}
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {market.categories.map((cat) => (
                            <span
                              key={cat}
                              className="rounded-md bg-surface-subtle border border-surface-border/60 px-1.5 py-0.5 text-[10px] font-semibold text-ink-secondary"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer live count */}
                    <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-2">
                      <div className="flex items-center gap-1.5 border-t border-surface-border/50 pt-2.5 text-[11px] font-bold text-ink-secondary">
                        <MonkeyAvatarIcon className="size-4 shrink-0 text-brand-primary" />
                        <span>{market.monkeysLive} Monkeys Live</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-8 flex flex-col items-center justify-center rounded-3xl border border-dashed border-surface-border p-12 text-center">
                <p className="text-base font-bold text-ink">No markets found</p>
                <p className="mt-1 text-xs text-ink-muted">
                  Try adjusting your filters or search keywords.
                </p>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="mt-4 rounded-xl bg-brand-primary px-4 py-2 text-xs font-bold text-white shadow-xs"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Right Sidebar: Filters & Value Card */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-24 rounded-3xl border border-surface-border/80 bg-surface p-5 sm:p-6 shadow-xs space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-surface-border/60 pb-3">
                <h3 className="text-sm sm:text-base font-extrabold text-ink">
                  Filter Markets
                </h3>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="text-xs font-bold text-brand-primary hover:underline cursor-pointer"
                >
                  Clear All
                </button>
              </div>

              {/* City Dropdown */}
              <div>
                <label className="block text-xs font-bold text-ink mb-1.5">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => onCityChange(e.target.value)}
                  className="w-full rounded-xl border border-surface-border bg-surface px-3 py-2 text-xs font-medium text-ink focus:border-brand-primary focus:outline-hidden cursor-pointer"
                >
                  {filterCityOptions.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="block text-xs font-bold text-ink mb-1.5">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="w-full rounded-xl border border-surface-border bg-surface px-3 py-2 text-xs font-medium text-ink focus:border-brand-primary focus:outline-hidden cursor-pointer"
                >
                  <option value="All Categories">All Categories</option>
                  {filterCategoryOptions.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Checkboxes: What are you looking for? */}
              <div>
                <p className="text-xs font-bold text-ink mb-2.5">
                  What are you looking for?
                </p>
                <div className="space-y-2">
                  {visibleCheckboxCategories.map((cat) => {
                    const isChecked = selectedTags.includes(cat);
                    return (
                      <label
                        key={cat}
                        className="flex items-center gap-2 text-xs font-medium text-ink-secondary cursor-pointer hover:text-ink select-none"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleTag(cat)}
                          className="size-4 rounded-sm border-surface-border text-brand-primary focus:ring-brand-primary accent-brand-primary cursor-pointer"
                        />
                        <span>{cat}</span>
                      </label>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => setShowAllTags(!showAllTags)}
                  className="mt-2 text-[11px] font-bold text-brand-primary hover:underline cursor-pointer"
                >
                  {showAllTags ? "View Less ⌃" : "View More ⌄"}
                </button>
              </div>

              {/* Radio Group: Sort By */}
              <div>
                <p className="text-xs font-bold text-ink mb-2.5">
                  Sort By
                </p>
                <div className="space-y-2 text-xs font-medium text-ink-secondary">
                  {[
                    { id: "popular", label: "Popular" },
                    { id: "monkeys", label: "Most Monkeys Live" },
                    { id: "recent", label: "Recently Added" },
                    { id: "az", label: "A - Z" },
                  ].map((opt) => (
                    <label
                      key={opt.id}
                      className="flex items-center gap-2 cursor-pointer hover:text-ink select-none"
                    >
                      <input
                        type="radio"
                        name="sortBy"
                        checked={sortBy === opt.id}
                        onChange={() => setSortBy(opt.id as typeof sortBy)}
                        className="size-4 border-surface-border text-brand-primary focus:ring-brand-primary accent-brand-primary cursor-pointer"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Why Market Monkey Widget */}
              <div className="rounded-2xl border border-brand-soft-border/80 bg-brand-soft/40 p-4 space-y-3">
                <h4 className="text-xs font-extrabold text-ink">
                  Why Market Monkey?
                </h4>
                <ul className="space-y-2 text-[11px] font-medium text-ink-secondary">
                  {whyMarketMonkeyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white mt-0.5">
                        <CheckIcon className="size-2.5" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-2.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-black cursor-pointer"
                >
                  <SmartphoneIcon className="size-3.5" />
                  <span>Get the App</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
