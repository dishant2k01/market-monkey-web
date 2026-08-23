export const blogCategories = [
  "All Posts",
  "Market Insights",
  "Growth Strategies",
  "Industry Trends",
  "Guides",
  "Product Updates",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "All Posts">;
  date: string;
  dateLabel: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-spot-high-potential-markets",
    title: "How to Spot High-Potential Markets Before Your Competitors",
    excerpt:
      "A practical framework for evaluating demand, competition, and timing when exploring new market opportunities.",
    category: "Market Insights",
    date: "2024-05-12",
    dateLabel: "May 12, 2024",
    readTime: "6 min read",
    imageSrc: "/images/markets/chor-bajar.jpg",
    imageAlt: "Analytics dashboard on a laptop",
  },
  {
    slug: "live-market-walkthroughs-explained",
    title: "Why Live Market Walkthroughs Beat Traditional Research",
    excerpt:
      "See how real-time video sessions help teams validate products, prices, and local buying behavior faster.",
    category: "Guides",
    date: "2024-05-08",
    dateLabel: "May 8, 2024",
    readTime: "5 min read",
    imageSrc: "/images/about/hero-workspace.jpg",
    imageAlt: "Team reviewing charts and reports",
  },
  {
    slug: "growth-playbook-for-smes",
    title: "A Simple Growth Playbook for SMEs Entering New Cities",
    excerpt:
      "From first market scan to local partnerships—steps small businesses can take without oversized research budgets.",
    category: "Growth Strategies",
    date: "2024-04-29",
    dateLabel: "Apr 29, 2024",
    readTime: "7 min read",
    imageSrc: "/images/markets/sarojini.jpg",
    imageAlt: "Business professionals in a meeting",
  },
  {
    slug: "industry-shifts-retail-2024",
    title: "5 Retail Industry Shifts Worth Watching This Year",
    excerpt:
      "Explore the trends reshaping retail discovery, customer trust, and local commerce across emerging markets.",
    category: "Industry Trends",
    date: "2024-04-21",
    dateLabel: "Apr 21, 2024",
    readTime: "4 min read",
    imageSrc: "/images/markets/lajpat.jpg",
    imageAlt: "Retail store aisle with products",
  },
  {
    slug: "building-trust-with-local-experts",
    title: "Building Trust with Local Experts on Every Call",
    excerpt:
      "Best practices for asking better questions, verifying quality, and getting clearer answers during live sessions.",
    category: "Guides",
    date: "2024-04-14",
    dateLabel: "Apr 14, 2024",
    readTime: "5 min read",
    imageSrc: "/images/cta/shopper-woman.jpg",
    imageAlt: "People collaborating around a laptop",
  },
  {
    slug: "product-update-smarter-booking",
    title: "Product Update: Smarter Booking and Session Insights",
    excerpt:
      "New tools to schedule faster, track session outcomes, and turn live market visits into shareable insights.",
    category: "Product Updates",
    date: "2024-04-05",
    dateLabel: "Apr 5, 2024",
    readTime: "3 min read",
    imageSrc: "/images/markets/commercial-street.png",
    imageAlt: "Person writing notes next to a laptop",
  },
  {
    slug: "pricing-signals-that-matter",
    title: "Pricing Signals That Matter When Comparing Local Sellers",
    excerpt:
      "Learn which price cues are useful, which are noise, and how to compare options with more confidence.",
    category: "Market Insights",
    date: "2024-03-28",
    dateLabel: "Mar 28, 2024",
    readTime: "6 min read",
    imageSrc: "/images/markets/mg-road.jpg",
    imageAlt: "Financial charts and calculator",
  },
  {
    slug: "scaling-market-research-teams",
    title: "How Growing Teams Scale Market Research Without Slowing Down",
    excerpt:
      "A look at workflows that keep research fast, shared, and actionable as your team expands into new regions.",
    category: "Growth Strategies",
    date: "2024-03-18",
    dateLabel: "Mar 18, 2024",
    readTime: "8 min read",
    imageSrc: "/images/cta/shopper-man.jpg",
    imageAlt: "Business team planning at a whiteboard",
  },
  {
    slug: "what-buyers-ask-on-live-calls",
    title: "What Buyers Ask Most on Live Market Calls",
    excerpt:
      "We reviewed common session questions to help first-time users prepare clearer, higher-signal conversations.",
    category: "Industry Trends",
    date: "2024-03-09",
    dateLabel: "Mar 9, 2024",
    readTime: "4 min read",
    imageSrc: "/images/markets/johari-bazaar.jpg",
    imageAlt: "Team discussion in a modern office",
  },
];

export const BLOG_PAGE_SIZE = 6;
