export type AboutHighlight = {
  title: string;
  description: string;
  icon: "shield" | "chart" | "growth";
};

export type AboutMilestone = {
  title: string;
  description: string;
  icon: "flag" | "build" | "growth";
};

export type AboutStat = {
  value: string;
  label: string;
  icon: "users" | "chart" | "globe" | "shield";
};

export type AboutTeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  linkedin: string;
};

export type AboutValue = {
  title: string;
  description: string;
  icon: "heart" | "shield" | "lightbulb" | "rocket";
};

export const aboutHeroHighlights: AboutHighlight[] = [
  {
    title: "Trusted Data",
    description: "Reliable & Verified",
    icon: "shield",
  },
  {
    title: "Actionable Insights",
    description: "Easy to Understand",
    icon: "chart",
  },
  {
    title: "Business Growth",
    description: "Built for Everyone",
    icon: "growth",
  },
];

export const aboutHeroAvatars = [
  "/images/testimonials/priya.jpg",
  "/images/testimonials/rahul.jpg",
  "/images/testimonials/neha.jpg",
  "/images/testimonials/arjun.jpg",
] as const;

export const aboutHeroSocialProof = {
  rating: "4.8",
  reviewLabel: "from 1,200+ reviews",
  caption: "Join thousands of businesses growing with Market Monkey",
  imageSrc: "/images/about/hero-workspace.jpg",
  imageAlt: "Laptop showing market analytics dashboard on a workspace desk",
} as const;

export const aboutMilestones: AboutMilestone[] = [
  {
    title: "The Beginning",
    description:
      "Market Monkey started with a small team of data enthusiasts and a big dream.",
    icon: "flag",
  },
  {
    title: "Building the Platform",
    description:
      "We built a powerful platform that collects, organizes and visualizes market data effortlessly.",
    icon: "build",
  },
  {
    title: "Empowering Businesses",
    description:
      "Today, businesses of all sizes trust us to make smarter decisions and grow faster.",
    icon: "growth",
  },
];

export const aboutStats: AboutStat[] = [
  {
    value: "10K+",
    label: "Businesses Empowered",
    icon: "users",
  },
  {
    value: "50K+",
    label: "Markets Analyzed",
    icon: "chart",
  },
  {
    value: "120+",
    label: "Countries Covered",
    icon: "globe",
  },
  {
    value: "99.9%",
    label: "Data Accuracy",
    icon: "shield",
  },
];

export const aboutTeam: AboutTeamMember[] = [
  {
    name: "Rohit Verma",
    role: "CEO & Co-Founder",
    imageSrc: "/images/about/rohit.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Anjali Sharma",
    role: "CTO & Co-Founder",
    imageSrc: "/images/about/anjali.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Vikram Singh",
    role: "Head of Data",
    imageSrc: "/images/about/vikram.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Neha Kapoor",
    role: "Head of Growth",
    imageSrc: "/images/about/neha.jpg",
    linkedin: "https://www.linkedin.com",
  },
];

export const aboutValues: AboutValue[] = [
  {
    title: "Customer First",
    description: "We build everything with our customers in mind.",
    icon: "heart",
  },
  {
    title: "Trust & Transparency",
    description: "We believe in honest data and open communication.",
    icon: "shield",
  },
  {
    title: "Innovation",
    description: "We constantly innovate to deliver better insights.",
    icon: "lightbulb",
  },
  {
    title: "Growth Mindset",
    description: "We grow together with our customers and partners.",
    icon: "rocket",
  },
];
