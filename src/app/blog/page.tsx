"use client";

import { useState } from "react";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogListing } from "@/components/blog/BlogListing";
import { AppDownloadCTASection } from "@/components/common/AppDownloadCTASection";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Top Hero Section */}
      <BlogHero />

      {/* Main Category Filter & Listing with Sidebar Widgets */}
      <BlogListing searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Common CTA Download Banner */}
      <AppDownloadCTASection
        variant="light"
        title="Explore Markets Live with Verified Monkeys"
        description="Compare, ask and shop with confidence."
      />
    </>
  );
}
