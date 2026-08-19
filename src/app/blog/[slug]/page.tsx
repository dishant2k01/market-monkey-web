import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeftIcon } from "@/components/ui/icons";
import { blogPosts } from "@/config/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <>
      <article className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]">
        <Container>
          <Button
            href="/blog"
            variant="ghost"
            size="sm"
            leftIcon={<ArrowLeftIcon className="size-3.5" />}
            className="mb-6 px-0 hover:bg-transparent"
          >
            Back to Blog
          </Button>

          <p className="text-xs font-bold tracking-[0.12em] text-brand-primary uppercase">
            {post.category}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-ink-muted">
            {post.dateLabel} · {post.readTime}
          </p>

          <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-2xl bg-surface-subtle">
            <Image
              src={post.imageSrc}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1120px"
            />
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-ink-secondary">
            <p>{post.excerpt}</p>
            <p>
              This is placeholder article content for the Market Monkey blog.
              In production, replace this with your full CMS-driven post body,
              rich media, and author details.
            </p>
            <p>
              Teams use Market Monkey to explore markets live, compare options
              faster, and make clearer decisions with help from verified local
              Monkeys.
            </p>
            <p>
              Want more insights like this?{" "}
              <Link
                href="/blog"
                className="font-semibold text-brand-primary hover:underline"
              >
                Browse all posts
              </Link>{" "}
              or{" "}
              <Link
                href="/contact"
                className="font-semibold text-brand-primary hover:underline"
              >
                talk to our team
              </Link>
              .
            </p>
          </div>
        </Container>
      </article>
      <BlogNewsletter />
    </>
  );
}
