"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import type { BlogPost } from "@/config/blog";

function CalendarIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="10.5" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 6.5h12M5 2v3M11 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 4.5V8l2.2 1.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ShareIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="12.5" cy="3.5" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="3.5" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12.5" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="m5.3 7.1 5.4-2.7M5.3 8.9l5.4 2.7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function CheckIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m3.5 8.5 3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type BlogDetailHeaderProps = {
  post: BlogPost;
};

export function BlogDetailHeader({ post }: BlogDetailHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const author = post.author || {
    name: "Market Monkey Team",
    role: "Market Specialist",
    avatar: "/images/cta/shopper-man.jpg",
  };

  return (
    <header className="bg-[#FFF9F4] pt-8 pb-10 sm:pt-10 sm:pb-12 border-b border-[#FFE8D6]">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-ink-muted">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand-primary transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-brand-primary font-bold line-clamp-1">
            {post.category}
          </span>
        </nav>

        {/* Category Badge & Post Title */}
        <div className="mt-5 max-w-4xl">
          <span className="inline-block rounded-md bg-brand-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary-foreground shadow-xs">
            {post.categoryBadge}
          </span>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            {post.excerpt}
          </p>

          {/* Author Meta & Action Toolbar */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#FFE3D1] pt-6">
            {/* Author Profile */}
            <div className="flex items-center gap-3">
              <div className="relative size-11 overflow-hidden rounded-full border border-brand-primary/20 bg-surface-muted shadow-xs">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                  sizes="44px"
                  unoptimized
                />
              </div>

              <div>
                <h4 className="text-xs font-extrabold text-ink">{author.name}</h4>
                <p className="text-[0.6875rem] font-medium text-ink-subtle">{author.role}</p>
              </div>
            </div>

            {/* Date, Read Time & Social Share Button */}
            <div className="flex items-center gap-5 text-xs text-ink-subtle font-medium">
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="size-3.5 text-brand-primary" />
                <span>{post.dateLabel}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <ClockIcon className="size-3.5 text-brand-primary" />
                <span>{post.readTime}</span>
              </div>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/30 bg-white px-3.5 py-1.5 text-xs font-bold text-brand-primary shadow-xs transition-colors hover:bg-brand-soft cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckIcon className="size-3.5 text-feedback-success" />
                    <span className="text-feedback-success">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <ShareIcon className="size-3.5" />
                    <span>Share Post</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
