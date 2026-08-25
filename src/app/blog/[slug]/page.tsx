import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BlogDetailContent } from "@/components/blog/BlogDetailContent";
import { BlogDetailFAQ } from "@/components/blog/BlogDetailFAQ";
import { BlogDetailHeader } from "@/components/blog/BlogDetailHeader";
import { BlogDetailSidebar } from "@/components/blog/BlogDetailSidebar";
import { BlogRelatedPosts } from "@/components/blog/BlogRelatedPosts";
import { AppDownloadCTASection } from "@/components/common/AppDownloadCTASection";
import { Container } from "@/components/layout/Container";
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
    return { title: "Post Not Found - Market Monkey Blog" };
  }

  return {
    title: `${post.title} | Market Monkey Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <>
      {/* 1. Blog Header with Breadcrumbs, Title, Author & Meta */}
      <BlogDetailHeader post={post} />

      {/* 2. Featured Image & Main 2-Column Content Area */}
      <section className="bg-surface py-8 sm:py-12 lg:py-16">
        <Container>
          {/* Featured Hero Image */}
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl bg-surface-muted shadow-lg">
            <Image
              src={post.imageSrc}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1120px"
              unoptimized
            />
          </div>

          {/* 12-Column Grid: Left 8 Cols (Article + FAQ) | Right 4 Cols (Sidebar Widgets) */}
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <main className="lg:col-span-8">
              {/* Article Content Body & Author Bio */}
              <BlogDetailContent post={post} />

              {/* FAQ Accordion Section */}
              <BlogDetailFAQ faqs={post.faqs} />
            </main>

            <div className="lg:col-span-4">
              {/* Sidebar Widgets */}
              <BlogDetailSidebar />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Related Blog Posts Cards */}
      <BlogRelatedPosts currentSlug={post.slug} />

      {/* 4. Common App Download CTA Banner */}
      <AppDownloadCTASection
        variant="light"
        title="Explore Markets Live with Verified Monkeys"
        description="Compare, ask and shop with confidence."
      />
    </>
  );
}
