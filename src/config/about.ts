export type AboutPillar = {
  title: string;
  description: string;
  icon: "mission" | "vision";
};

export type AboutValue = {
  title: string;
  description: string;
  icon: "users" | "shield" | "heart" | "rocket";
};

export type AboutStat = {
  value: string;
  label: string;
  icon: "shop" | "users" | "mapPin" | "star";
};

export const aboutHero = {
  titleBefore: "Making Markets Accessible for",
  titleAccent: "Everyone.",
  description:
    "Market Monkey is your all-in-one market discovery platform. From local bazaars to popular shopping hubs — we help you explore, compare and make the best choices, anytime, anywhere.",
  imageSrc: "/images/hero/about.png",
  imageAlt: "Market Monkey app shown on two phones",
} as const;

export const aboutPillars: AboutPillar[] = [
  {
    title: "Our Mission",
    icon: "mission",
    description:
      "To simplify the way people discover and explore markets by bringing transparency, convenience, and trust to every shopping experience.",
  },
  {
    title: "Our Vision",
    icon: "vision",
    description:
      "To become the most trusted market discovery platform, empowering people and supporting local businesses everywhere.",
  },
];

export const aboutValues: AboutValue[] = [
  {
    title: "Customer First",
    icon: "users",
    description:
      "We put our users first and work every day to deliver the best experience.",
  },
  {
    title: "Trust & Transparency",
    icon: "shield",
    description:
      "We believe in honest information and transparent market insights.",
  },
  {
    title: "Support Local",
    icon: "heart",
    description:
      "We empower local businesses and promote local communities.",
  },
  {
    title: "Innovation",
    icon: "rocket",
    description:
      "We continuously innovate to make market discovery smarter and easier.",
  },
];

export const aboutStory = {
  title: "Our Story",
  paragraphs: [
    "Market Monkey started with a simple belief — finding the right market shouldn't be hard. What began as a small idea has grown into a platform that helps thousands of people discover markets with confidence.",
    "We saw shoppers struggling with outdated information, unclear prices, and no real way to explore local markets remotely. So we built Market Monkey to connect people with verified locals through live video — bringing transparency and trust to every shopping experience.",
    "Today, we’re building a community of explorers and Monkeys who make markets accessible for everyone, anytime, anywhere.",
  ],
  ctaLabel: "Join Our Journey",
  ctaHref: "/#get-app",
  imageSrc: "/images/about/story-market.jpg",
  imageAlt: "Crowded outdoor market street at golden hour",
} as const;

export const aboutStats: AboutStat[] = [
  {
    value: "10K+",
    label: "Markets Listed",
    icon: "shop",
  },
  {
    value: "500K+",
    label: "Happy Users",
    icon: "users",
  },
  {
    value: "100+",
    label: "Cities Covered",
    icon: "mapPin",
  },
  {
    value: "4.8/5",
    label: "User Rating",
    icon: "star",
  },
];
