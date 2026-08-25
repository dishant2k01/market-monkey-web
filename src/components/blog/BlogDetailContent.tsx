import Image from "next/image";
import type { BlogPost } from "@/config/blog";

function ListCheckIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function QuoteIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.4 6.2C6.6 7.4 4.8 9.7 4.8 13v4.8h5.2V12.6H7.2c.1-1.7 1-3 2.7-3.9l-.5-2.5Zm10 0c-2.8 1.2-4.6 3.5-4.6 6.8v4.8h5.2V12.6h-2.8c.1-1.7 1-3 2.7-3.9l-.5-2.5Z" />
    </svg>
  );
}

type BlogDetailContentProps = {
  post: BlogPost;
};

export function BlogDetailContent({ post }: BlogDetailContentProps) {
  const author = post.author || {
    name: "Market Monkey Team",
    role: "Market Specialist",
    avatar: "/images/cta/shopper-man.jpg",
    bio: "Our team of verified Monkeys brings you authentic, real-time insights from traditional and wholesale markets across India.",
  };

  const toc = post.tableOfContents || [
    { id: "overview", title: "Overview & Key Highlights" },
    { id: "top-tips", title: "Top Shopping & Bargaining Tips" },
    { id: "how-market-monkey-helps", title: "How Market Monkey Helps You Shop Live" },
    { id: "summary", title: "Final Summary & Next Steps" },
  ];

  const sections = post.contentSections || [
    {
      id: "overview",
      heading: "Overview & Key Highlights",
      paragraphs: [
        post.excerpt,
        "Traditional markets offer incredible variety, vintage items, and wholesale prices that you rarely find online. However, navigating narrow lanes and avoiding inflated pricing requires insider knowledge.",
      ],
      bullets: [
        "Best timing for comfortable shopping and fresh stock arrivals",
        "Average price ranges for popular categories and bargaining benchmarks",
        "Essential landmarks, metro connectivity, and nearby street food spots",
      ],
    },
    {
      id: "top-tips",
      heading: "Top Shopping & Bargaining Tips",
      paragraphs: [
        "Always inspect items thoroughly before finalizing payment. When bargaining, start at 40-50% of the initial quoted price and work your way up to a fair middle ground.",
      ],
      quote:
        "Pro Tip: Early morning hours (between 10:30 AM and 11:30 AM) are the best time to land 'Bohni' discounts as vendors consider the first sale of the day lucky!",
    },
    {
      id: "how-market-monkey-helps",
      heading: "How Market Monkey Helps You Shop Live",
      paragraphs: [
        "Can't physically visit the market? Market Monkey connects you with verified local guide Monkeys on high-definition video calls. Your Monkey walks through the market lanes on your behalf, negotiates prices directly with shopkeepers, and packs your orders securely for doorstep delivery.",
      ],
    },
    {
      id: "summary",
      heading: "Final Summary & Next Steps",
      paragraphs: [
        "Whether you are planning a weekend shopping trip or looking to source products remotely, having local insights gives you a major advantage. Explore our app to connect with verified Monkeys today!",
      ],
    },
  ];

  return (
    <article className="space-y-8">
      {/* Table of Contents Card (Quick Jump Index) */}
      <div className="rounded-2xl border border-[#FFE8D6] bg-[#FFF9F4] p-5 shadow-xs">
        <div className="flex items-center gap-2 text-sm font-extrabold text-ink">
          <span className="flex size-7 items-center justify-center rounded-lg bg-brand-primary text-brand-primary-foreground shadow-xs">
            <ListCheckIcon />
          </span>
          <h3>Table of Contents</h3>
        </div>

        <ul className="mt-3.5 space-y-2 text-xs font-semibold text-ink-secondary">
          {toc.map((item, idx) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="inline-flex items-center gap-2 hover:text-brand-primary transition-colors"
              >
                <span className="text-brand-primary font-bold">{idx + 1}.</span>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Structured Content Sections */}
      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-xl font-extrabold text-ink tracking-tight sm:text-2xl">
              {section.heading}
            </h2>

            <div className="mt-3 space-y-3.5 text-sm leading-relaxed text-ink-secondary sm:text-base">
              {section.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {section.bullets && section.bullets.length > 0 ? (
              <ul className="mt-4 space-y-2 rounded-xl bg-surface-muted p-4 text-xs font-medium text-ink sm:text-sm">
                {section.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {section.quote ? (
              <blockquote className="mt-5 flex gap-3 rounded-2xl border-l-4 border-brand-primary bg-[#FFF9F4] p-4 sm:p-5">
                <QuoteIcon className="size-5 shrink-0 text-brand-primary" />
                <p className="text-xs font-semibold italic leading-relaxed text-ink sm:text-sm">
                  {section.quote}
                </p>
              </blockquote>
            ) : null}
          </section>
        ))}
      </div>

      {/* Author Bio Card at end of article */}
      <div className="mt-10 rounded-2xl border border-surface-border bg-surface p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start gap-4">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-full border border-brand-primary/20 bg-surface-muted shadow-xs">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            className="object-cover"
            sizes="56px"
            unoptimized
          />
        </div>

        <div>
          <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-brand-primary">
            WRITTEN BY
          </span>
          <h4 className="text-base font-extrabold text-ink">{author.name}</h4>
          <p className="mt-1 text-xs leading-relaxed text-ink-muted">
            {author.bio}
          </p>
        </div>
      </div>
    </article>
  );
}
