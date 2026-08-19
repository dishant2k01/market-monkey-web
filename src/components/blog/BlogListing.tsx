"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/icons";
import {
  BLOG_PAGE_SIZE,
  blogCategories,
  blogPosts,
  type BlogCategory,
} from "@/config/blog";

function getPageNumbers(current: number, total: number) {
  if (total <= 5) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const pages: Array<number | "ellipsis"> = [1];

  if (current > 3) pages.push("ellipsis");

  for (
    let page = Math.max(2, current - 1);
    page <= Math.min(total - 1, current + 1);
    page += 1
  ) {
    pages.push(page);
  }

  if (current < total - 2) pages.push("ellipsis");

  pages.push(total);
  return pages;
}

export function BlogListing() {
  const [activeCategory, setActiveCategory] =
    useState<BlogCategory>("All Posts");
  const [page, setPage] = useState(1);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All Posts") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / BLOG_PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * BLOG_PAGE_SIZE;
  const visiblePosts = filteredPosts.slice(start, start + BLOG_PAGE_SIZE);
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  const selectCategory = (category: BlogCategory) => {
    setActiveCategory(category);
    setPage(1);
  };

  return (
    <section className="bg-surface pb-[var(--space-section-y-mobile)] lg:pb-[var(--space-section-y)]">
      <Container>
        <div
          className="flex flex-wrap items-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Blog categories"
        >
          {blogCategories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectCategory(category)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-brand-primary text-brand-primary-foreground shadow-xs"
                    : "bg-transparent text-ink hover:bg-surface-muted hover:text-brand-primary"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </ul>

        {visiblePosts.length === 0 ? (
          <p className="mt-10 text-center text-sm text-ink-muted">
            No posts found in this category yet.
          </p>
        ) : null}

        {totalPages > 1 ? (
          <nav
            className="mt-12 flex items-center justify-center gap-2"
            aria-label="Blog pagination"
          >
            <Button
              type="button"
              variant="secondary"
              className="h-10 w-10 shrink-0 rounded-md px-0"
              aria-label="Previous page"
              disabled={currentPage === 1}
              onClick={() => setPage((value) => Math.max(1, value - 1))}
            >
              <ArrowLeftIcon className="size-4" />
            </Button>

            {pageNumbers.map((item, index) =>
              item === "ellipsis" ? (
                <span
                  key={`ellipsis-${index}`}
                  className="px-1 text-sm text-ink-subtle"
                >
                  …
                </span>
              ) : (
                <button
                  key={item}
                  type="button"
                  aria-label={`Go to page ${item}`}
                  aria-current={item === currentPage ? "page" : undefined}
                  onClick={() => setPage(item)}
                  className={`inline-flex h-10 min-w-10 items-center justify-center rounded-md px-3 text-sm font-semibold transition-colors ${
                    item === currentPage
                      ? "bg-brand-primary text-brand-primary-foreground"
                      : "border border-surface-border bg-surface text-ink hover:border-brand-soft-border hover:text-brand-primary"
                  }`}
                >
                  {item}
                </button>
              ),
            )}

            <Button
              type="button"
              variant="secondary"
              className="h-10 w-10 shrink-0 rounded-md px-0"
              aria-label="Next page"
              disabled={currentPage === totalPages}
              onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            >
              <ArrowRightIcon className="size-4" />
            </Button>
          </nav>
        ) : null}
      </Container>
    </section>
  );
}
