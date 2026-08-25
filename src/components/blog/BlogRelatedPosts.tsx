import { BlogCard } from "@/components/blog/BlogCard";
import { Container } from "@/components/layout/Container";
import { blogPosts, type BlogPost } from "@/config/blog";

type BlogRelatedPostsProps = {
  currentSlug: string;
};

export function BlogRelatedPosts({ currentSlug }: BlogRelatedPostsProps) {
  const related = blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="bg-surface py-12 lg:py-16 border-t border-surface-border/60">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-primary">
              MORE TO EXPLORE
            </span>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Related Articles
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
