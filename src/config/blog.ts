import blogsDataRaw from "@/data/blogs.json";

export type BlogCategoryName =
  | "All Posts"
  | "Market Guides"
  | "Shopping Tips"
  | "Monkey Stories"
  | "News & Updates";

export type BlogCategoryItem = {
  id: string;
  name: BlogCategoryName;
  count: number;
  icon: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategoryName, "All Posts">;
  categoryBadge: string;
  date: string;
  dateLabel: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
};

export type BlogPopularPost = {
  rank: number;
  slug: string;
  title: string;
  dateLabel: string;
  imageSrc: string;
};

export type BlogHeroFeatured = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryBadge: string;
  date: string;
  dateLabel: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
};

export type BlogsData = {
  heroFeatured: BlogHeroFeatured;
  categories: BlogCategoryItem[];
  posts: BlogPost[];
  popularPosts: BlogPopularPost[];
};

export const blogsData: BlogsData = blogsDataRaw as BlogsData;

export const blogCategories: BlogCategoryItem[] = blogsData.categories;
export const blogPosts: BlogPost[] = blogsData.posts;
export const heroFeaturedPost: BlogHeroFeatured = blogsData.heroFeatured;
export const popularPosts: BlogPopularPost[] = blogsData.popularPosts;

export const BLOG_PAGE_SIZE = 6;
