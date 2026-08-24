import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SearchIcon, ArrowRightIcon } from "@/components/ui/icons";
import { heroFeaturedPost } from "@/config/blog";

type BlogHeroProps = {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
};

export function BlogHero({ searchQuery = "", onSearchChange }: BlogHeroProps) {
  return (
    <section
      className="bg-surface pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-16"
      aria-labelledby="blog-hero-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[#FFF9F4] border border-[#FFE8D6] p-6 sm:p-8 lg:p-12 shadow-xs">
          {/* Subtle Background Dotted Flourish */}
          <svg
            className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 w-48 h-32 text-brand-primary/20"
            viewBox="0 0 160 100"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 80 Q 40 10, 80 50 T 150 20"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
          </svg>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            {/* Left Column — Headline & Search */}
            <div className="relative z-10 lg:col-span-6">
              <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-brand-primary">
                OUR BLOG
              </span>

              <h1
                id="blog-hero-heading"
                className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl lg:leading-[1.15]"
              >
                Market Insights,{" "}
                <span className="text-brand-primary">Tips & More</span>
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
                Stay updated with the best market guides, shopping tips, Monkey
                stories and everything you need to explore smarter.
              </p>

              {/* Search Bar Input */}
              <div className="mt-6 flex max-w-md items-center rounded-2xl bg-white p-1.5 shadow-sm border border-[#FFE3D1] focus-within:ring-2 focus-within:ring-brand-primary">
                <div className="flex flex-1 items-center gap-2.5 px-3">
                  <SearchIcon className="size-4 shrink-0 text-ink-subtle" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                    placeholder="Search blogs..."
                    className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-subtle"
                  />
                </div>
                <button
                  type="button"
                  aria-label="Search"
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-brand-primary-foreground shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <SearchIcon className="size-4" />
                </button>
              </div>
            </div>

            {/* Right Column — Featured Post Card with Floating Badge */}
            <div className="relative lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-muted shadow-md sm:aspect-[16/9]">
                <Image
                  src={heroFeaturedPost.imageSrc}
                  alt={heroFeaturedPost.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  priority
                  unoptimized
                />

                {/* Gradient overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating White Overlay Card on bottom-right */}
                <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-xs rounded-2xl bg-white p-4 sm:p-5 shadow-xl border border-surface-border">
                  <span className="inline-block text-[0.6875rem] font-bold uppercase tracking-wider text-brand-primary">
                    {heroFeaturedPost.categoryBadge}
                  </span>

                  <h2 className="mt-1 text-base font-extrabold text-ink leading-snug sm:text-lg">
                    {heroFeaturedPost.title}
                  </h2>

                  <p className="mt-1.5 text-xs text-ink-muted line-clamp-2 leading-relaxed">
                    {heroFeaturedPost.excerpt}
                  </p>

                  <Link
                    href={`/blog/${heroFeaturedPost.slug}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:underline"
                  >
                    Read More
                    <ArrowRightIcon className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
