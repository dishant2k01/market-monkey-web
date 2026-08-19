import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/config/blog";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ClockOutlineIcon } from "@/components/become/becomeIcons";

function CalendarMiniIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="3.5"
        width="12"
        height="10.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M2 6.5h12M5 2v2.5M11 2v2.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <li>
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-surface-border bg-surface shadow-sm transition-shadow duration-200 hover:shadow-md">
        <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
          <div className="relative aspect-[16/10] overflow-hidden bg-surface-subtle">
            <Image
              src={post.imageSrc}
              alt={post.imageAlt}
              fill
              className="object-cover transition-transform duration-300 ease-[var(--motion-ease)] group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
            />
          </div>

          <div className="flex flex-1 flex-col p-5">
            <p className="text-[0.6875rem] font-bold tracking-[0.12em] text-brand-primary uppercase">
              {post.category}
            </p>
            <h2 className="mt-2 text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand-primary">
              {post.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
              {post.excerpt}
            </p>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-surface-border pt-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarMiniIcon />
                  {post.dateLabel}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ClockOutlineIcon className="size-3.5" />
                  {post.readTime}
                </span>
              </div>
              <span className="inline-flex size-8 items-center justify-center rounded-full text-brand-primary transition-colors group-hover:bg-brand-soft">
                <ArrowRightIcon className="size-4" />
              </span>
            </div>
          </div>
        </Link>
      </article>
    </li>
  );
}
