"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { Container } from "@/components/layout/Container";
import { SearchIcon } from "@/components/ui/icons";
import {
  blogCategories,
  blogPosts,
  popularPosts,
  type BlogCategoryName,
} from "@/config/blog";

/* Category SVG Icons */
function CategoryIcon({ name }: { name: string }) {
  switch (name) {
    case "Market Guides":
      return (
        <svg className="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 4.5 7.5 3l5 3 4.5-1.5v11L12.5 17l-5-3-4.5 1.5v-11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M7.5 3v11M12.5 6v11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "Shopping Tips":
      return (
        <svg className="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 6.5h12l-1 10H5l-1-10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M7.5 6.5a2.5 2.5 0 0 1 5 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "Monkey Stories":
      return (
        <svg className="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="7.5" cy="8.5" r="1" fill="currentColor" />
          <circle cx="12.5" cy="8.5" r="1" fill="currentColor" />
          <path d="M7 12.5q3 2.5 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "News & Updates":
      return (
        <svg className="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 7h8M6 10h8M6 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      /* All Posts */
      return (
        <svg className="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="3" y="6" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 6V4.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 13 4.5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}

function ChevronDownIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type BlogListingProps = {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
};

export function BlogListing({
  searchQuery = "",
  onSearchChange,
}: BlogListingProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategoryName>("All Posts");
  const [displayCount, setDisplayCount] = useState(6);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All Posts" || post.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visiblePosts = filteredPosts.slice(0, displayCount);
  const hasMore = displayCount < filteredPosts.length;

  return (
    <section className="bg-surface pt-10 pb-[var(--space-section-y-mobile)] lg:pt-14 lg:pb-[var(--space-section-y)]">
      <Container>
        {/* Category Tabs Filter Bar */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 pb-8 border-b border-surface-border/60"
          role="tablist"
          aria-label="Blog categories"
        >
          {blogCategories.map((cat) => {
            const isActive = cat.name === activeCategory;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setDisplayCount(6);
                }}
                className="group flex flex-col items-center gap-1.5 cursor-pointer transition-all focus:outline-none"
              >
                {/* Circular Icon Container */}
                <div
                  className={`flex size-12 items-center justify-center rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-brand-primary text-brand-primary-foreground shadow-md scale-105"
                      : "bg-[#FFF9F4] text-ink-secondary border border-[#FFE8D6] group-hover:border-brand-primary/40 group-hover:text-brand-primary"
                  }`}
                >
                  <CategoryIcon name={cat.name} />
                </div>

                {/* Category Label */}
                <span
                  className={`text-xs font-bold transition-colors ${
                    isActive ? "text-ink" : "text-ink-secondary group-hover:text-ink"
                  }`}
                >
                  {cat.name}
                </span>

                {/* Post Count Label */}
                <span className="text-[0.6875rem] font-medium text-ink-subtle">
                  {cat.count} Posts
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Content Grid: 8-col Left (Articles) & 4-col Right (Sidebar Widgets) */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Main Column: Blog Posts Grid */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-extrabold text-ink tracking-tight">
              {activeCategory === "All Posts" ? "All Blog Posts" : activeCategory}
            </h2>

            {visiblePosts.length > 0 ? (
              <>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {visiblePosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>

                {hasMore ? (
                  <div className="mt-10 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setDisplayCount((prev) => prev + 6)}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-primary/40 bg-white px-6 py-2.5 text-xs font-bold text-brand-primary shadow-xs transition-colors hover:bg-[#FFF9F4] cursor-pointer"
                    >
                      Load More Posts
                      <ChevronDownIcon className="size-4" />
                    </button>
                  </div>
                ) : null}
              </>
            ) : (
              <div className="mt-12 rounded-2xl bg-surface-muted p-8 text-center">
                <p className="text-sm font-semibold text-ink-muted">
                  No blog posts found matching your filter.
                </p>
              </div>
            )}
          </div>

          {/* Right Sidebar Column */}
          <aside className="space-y-6 lg:col-span-4">
            {/* Widget 0: Search Input Bar */}
            <div className="rounded-2xl border border-[#FFE8D6] bg-[#FFF9F4]/70 p-4 shadow-xs">
              <div className="flex items-center rounded-xl bg-white p-1.5 border border-[#FFE3D1] focus-within:ring-2 focus-within:ring-brand-primary">
                <div className="flex flex-1 items-center gap-2 px-2.5">
                  <SearchIcon className="size-4 shrink-0 text-ink-subtle" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                    placeholder="Search blogs..."
                    className="w-full bg-transparent text-xs text-ink outline-none placeholder:text-ink-subtle"
                  />
                </div>
                <button
                  type="button"
                  aria-label="Search"
                  className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-brand-primary-foreground shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <SearchIcon className="size-3.5" />
                </button>
              </div>
            </div>

            {/* Widget 1: Popular Posts */}
            <div className="rounded-2xl border border-[#FFE8D6] bg-[#FFF9F4]/70 p-5 shadow-xs">
              <h3 className="text-base font-extrabold text-ink">Popular Posts</h3>

              <div className="mt-4 space-y-3.5">
                {popularPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group flex items-center gap-3 rounded-xl p-1.5 transition-colors hover:bg-white/80"
                  >
                    {/* Rank Badge */}
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-brand-primary-foreground shadow-xs">
                      {item.rank}
                    </span>

                    {/* Image Thumbnail */}
                    <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-surface-muted">
                      <Image
                        src={item.imageSrc}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="48px"
                        unoptimized
                      />
                    </div>

                    {/* Title & Date */}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold leading-snug text-ink group-hover:text-brand-primary line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-[0.6875rem] font-medium text-ink-subtle">
                        {item.dateLabel}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget 2: Categories Count */}
            <div className="rounded-2xl border border-[#FFE8D6] bg-[#FFF9F4]/70 p-5 shadow-xs">
              <h3 className="text-base font-extrabold text-ink">Categories</h3>

              <div className="mt-3 space-y-2">
                {blogCategories
                  .filter((cat) => cat.name !== "All Posts")
                  .map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setActiveCategory(cat.name);
                        setDisplayCount(6);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                        activeCategory === cat.name
                          ? "bg-brand-primary text-brand-primary-foreground"
                          : "text-ink-secondary hover:bg-white/80 hover:text-ink"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <CategoryIcon name={cat.name} />
                        <span>{cat.name}</span>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[0.6875rem] font-bold ${
                          activeCategory === cat.name
                            ? "bg-brand-primary-foreground/20 text-brand-primary-foreground"
                            : "bg-surface text-ink-subtle border border-surface-border"
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
