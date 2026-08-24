import Image from "next/image";
import Link from "next/link";
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

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-muted">
        <Image
          src={post.imageSrc}
          alt={post.imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          unoptimized
        />

        {/* Category Badge on top left of image */}
        <div className="absolute top-3 left-3">
          <span className="inline-block rounded-md bg-brand-primary px-2.5 py-1 text-[0.6875rem] font-bold tracking-wider text-brand-primary-foreground uppercase shadow-xs">
            {post.categoryBadge}
          </span>
        </div>
      </div>

      {/* Content body */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="text-base font-extrabold text-ink leading-snug transition-colors group-hover:text-brand-primary line-clamp-2">
            <Link href={`/blog/${post.slug}`} className="focus:outline-none">
              {post.title}
            </Link>
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-ink-muted line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        {/* Metadata Footer: Date & Read Time */}
        <div className="mt-4 flex items-center gap-4 pt-3 border-t border-surface-border/60 text-xs text-ink-subtle">
          <div className="flex items-center gap-1.5">
            <CalendarIcon className="size-3.5 text-ink-subtle" />
            <span>{post.dateLabel}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <ClockIcon className="size-3.5 text-ink-subtle" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
