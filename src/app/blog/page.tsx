import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogListing } from "@/components/blog/BlogListing";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, stories, and strategies to help you explore markets, analyze trends, and make smarter business decisions.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogListing />
      <BlogNewsletter />
    </>
  );
}
