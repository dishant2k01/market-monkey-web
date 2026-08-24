import Image from "next/image";
import { Container } from "@/components/layout/Container";
import {
  CategoryGridIcon,
  LocationPinIcon,
  PriceTagIcon,
  SearchIcon,
  ShieldVerifiedIcon,
  StoreFrontIcon,
  VideoShoppingIcon,
} from "@/components/markets/marketIcons";
import {
  filterCategoryOptions,
  filterCityOptions,
  heroMarketHighlights,
} from "@/config/markets";

type MarketsHeroProps = {
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  selectedCity?: string;
  onCityChange?: (val: string) => void;
  selectedCategory?: string;
  onCategoryChange?: (val: string) => void;
  onSearchSubmit?: () => void;
};

export function MarketsHero({
  searchQuery = "",
  onSearchChange,
  selectedCity = "All Cities",
  onCityChange,
  selectedCategory = "All Categories",
  onCategoryChange,
  onSearchSubmit,
}: MarketsHeroProps) {
  const highlightIcons = {
    store: <StoreFrontIcon className="size-4 text-brand-primary" />,
    shield: <ShieldVerifiedIcon className="size-4 text-brand-primary" />,
    video: <VideoShoppingIcon className="size-4 text-brand-primary" />,
    tag: <PriceTagIcon className="size-4 text-brand-primary" />,
  };

  return (
    <section className="relative overflow-hidden bg-surface-muted pt-8 pb-12 lg:pt-12 lg:pb-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Search & Value Props */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-extrabold tracking-widest text-brand-primary uppercase">
              EXPLORE MARKETS
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight text-ink leading-[1.15]">
              Explore Real Markets <br />
              From <span className="text-brand-primary">Anywhere</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl">
              Go live with verified local Monkeys and explore markets, compare
              products and prices, and shop with confidence.
            </p>

            {/* Integrated Search Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSearchSubmit?.();
              }}
              className="mt-7 flex flex-col md:flex-row items-stretch md:items-center rounded-2xl md:rounded-full bg-surface border border-surface-border p-2 shadow-sm gap-2"
            >
              {/* Text Search */}
              <div className="flex flex-1 items-center gap-2.5 px-3 py-1.5 min-w-0">
                <SearchIcon className="size-4.5 text-ink-subtle shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                  placeholder="Search markets, areas or products..."
                  className="w-full bg-transparent text-xs sm:text-sm text-ink placeholder:text-ink-subtle focus:outline-hidden"
                />
              </div>

              <div className="hidden md:block h-6 w-px bg-surface-border" />

              {/* City Dropdown */}
              <div className="flex items-center gap-2 px-3 py-1.5 shrink-0">
                <LocationPinIcon className="size-4 text-ink-subtle shrink-0" />
                <select
                  value={selectedCity}
                  onChange={(e) => onCityChange?.(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-medium text-ink focus:outline-hidden cursor-pointer"
                >
                  {filterCityOptions.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="hidden md:block h-6 w-px bg-surface-border" />

              {/* Category Dropdown */}
              <div className="flex items-center gap-2 px-3 py-1.5 shrink-0">
                <CategoryGridIcon className="size-4 text-ink-subtle shrink-0" />
                <select
                  value={selectedCategory}
                  onChange={(e) => onCategoryChange?.(e.target.value)}
                  className="bg-transparent text-xs sm:text-sm font-medium text-ink focus:outline-hidden cursor-pointer"
                >
                  <option value="All Categories">All Categories</option>
                  {filterCategoryOptions.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="rounded-xl md:rounded-full bg-brand-primary px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition-colors hover:bg-brand-primary-hover shrink-0"
              >
                Search
              </button>
            </form>

            {/* Highlights List */}
            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-sm font-semibold text-ink-secondary">
              {heroMarketHighlights.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-full bg-brand-soft">
                    {highlightIcons[item.icon]}
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Hero Market Photo & Live Card */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl shadow-md">
              <Image
                src="/images/home/hero-bg.jpeg"
                alt="Bustling Indian night market stalls with authentic lights and clothing"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>

            {/* Floating Live Badge Card */}
            <div className="absolute right-4 -bottom-6 sm:right-6 sm:-bottom-6 z-10 rounded-2xl border border-surface-border/80 bg-surface/95 p-3.5 sm:p-4 shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-red-500" />
                </span>
                <p className="text-xs font-bold text-ink">
                  Live from Sarojini Nagar, Delhi
                </p>
              </div>

              <div className="mt-2.5 flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden">
                  <Image
                    src="/images/testimonials/priya.jpg"
                    alt="Viewer avatar"
                    width={26}
                    height={26}
                    className="inline-block size-6.5 rounded-full ring-2 ring-white object-cover"
                  />
                  <Image
                    src="/images/testimonials/rahul.jpg"
                    alt="Viewer avatar"
                    width={26}
                    height={26}
                    className="inline-block size-6.5 rounded-full ring-2 ring-white object-cover"
                  />
                  <Image
                    src="/images/testimonials/neha.jpg"
                    alt="Viewer avatar"
                    width={26}
                    height={26}
                    className="inline-block size-6.5 rounded-full ring-2 ring-white object-cover"
                  />
                  <Image
                    src="/images/testimonials/arjun.jpg"
                    alt="Viewer avatar"
                    width={26}
                    height={26}
                    className="inline-block size-6.5 rounded-full ring-2 ring-white object-cover"
                  />
                </div>
                <span className="text-[11px] font-extrabold text-ink-muted">
                  +124
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
