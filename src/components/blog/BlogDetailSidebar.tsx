import Image from "next/image";
import Link from "next/link";
import { blogCategories, popularPosts } from "@/config/blog";

export function BlogDetailSidebar() {
  return (
    <aside className="space-y-6">
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
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-brand-primary-foreground shadow-xs">
                {item.rank}
              </span>

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

      {/* Widget 2: Categories */}
      <div className="rounded-2xl border border-[#FFE8D6] bg-[#FFF9F4]/70 p-5 shadow-xs">
        <h3 className="text-base font-extrabold text-ink">Categories</h3>

        <div className="mt-3 space-y-2">
          {blogCategories
            .filter((cat) => cat.name !== "All Posts")
            .map((cat) => (
              <Link
                key={cat.id}
                href="/blog"
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-ink-secondary hover:bg-white/80 hover:text-ink transition-colors"
              >
                <span>{cat.name}</span>
                <span className="rounded-full bg-surface px-2 py-0.5 text-[0.6875rem] font-bold text-ink-subtle border border-surface-border">
                  {cat.count}
                </span>
              </Link>
            ))}
        </div>
      </div>

      {/* Widget 3: Mini App CTA Card */}
      <div className="rounded-2xl border border-brand-primary/20 bg-gradient-to-br from-[#FFF9F4] to-brand-soft/50 p-5 text-center shadow-xs">
        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-md text-xl">
          🐵
        </div>
        <h4 className="mt-3 text-base font-extrabold text-ink">
          Shop Markets Live
        </h4>
        <p className="mt-1 text-xs leading-relaxed text-ink-muted">
          Connect with verified local Monkeys on live video calls and shop from anywhere.
        </p>
        <Link
          href="/#download"
          className="mt-4 inline-block w-full rounded-xl bg-brand-primary py-2.5 text-xs font-bold text-brand-primary-foreground shadow-xs transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Get The App
        </Link>
      </div>
    </aside>
  );
}
