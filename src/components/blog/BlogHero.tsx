import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { heroFeaturedPost } from "@/config/blog";

export function BlogHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFF9F4] pt-10 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-[#FFE8D6]"
      aria-labelledby="blog-hero-heading"
    >
      {/* Subtle Background Dotted Flourish */}
      <svg
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 w-64 h-40 text-brand-primary/15"
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

      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* Left Column — Headline & Copy */}
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
          </div>

          {/* Right Column — Featured Post Card with Floating Overlay */}
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

              {/* Dark Gradient overlay */}
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
      </Container>
    </section>
  );
}
