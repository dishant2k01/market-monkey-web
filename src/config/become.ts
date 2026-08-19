export type BecomeHeroHighlight = {
  title: string;
  description: string;
  icon: "flexible" | "rupee" | "shield";
};

export type BecomeHeroStat = {
  label: string;
  icon: "users" | "star" | "rupee";
};

export type BecomeReason = {
  title: string;
  description: string;
  icon: "clock" | "users" | "rupee" | "chart";
};

export type BecomeHowItWorksStep = {
  step: string;
  title: string;
  description: string;
  icon: "signUp" | "profile" | "calendar" | "rupee";
};

export type BecomeAudience = {
  label: string;
  icon: "spark" | "users" | "flag" | "lightbulb" | "build" | "chart";
};

export type BecomeTestimonial = {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
};

export const becomeHeroHighlights: BecomeHeroHighlight[] = [
  {
    title: "Flexible Hours",
    description: "Work when you want from anywhere",
    icon: "flexible",
  },
  {
    title: "Earn More",
    description: "Set your own prices and grow income",
    icon: "rupee",
  },
  {
    title: "Safe & Secure",
    description: "Verified platform with secure payments",
    icon: "shield",
  },
];

export const becomeHeroStats: BecomeHeroStat[] = [
  { label: "10,000+ Active Monkeys", icon: "users" },
  { label: "4.8 Average Rating", icon: "star" },
  { label: "₹50L+ Earnings Paid", icon: "rupee" },
];

export const becomeHeroMedia = {
  imageSrc: "/images/become/hero-monkey.jpg",
  imageAlt: "Smiling professional on a video call with headphones",
} as const;

export const becomeReasons: BecomeReason[] = [
  {
    title: "Work on your time",
    description: "Choose your availability and work when you’re free.",
    icon: "clock",
  },
  {
    title: "Help & impact",
    description: "Guide, mentor, and help others grow in their journey.",
    icon: "users",
  },
  {
    title: "Great earnings",
    description: "Set your own prices and earn more with every session.",
    icon: "rupee",
  },
  {
    title: "Grow your brand",
    description: "Build your profile, get reviews, and grow your reputation.",
    icon: "chart",
  },
];

export const becomeHowItWorksSteps: BecomeHowItWorksStep[] = [
  {
    step: "01",
    title: "Sign Up",
    description: "Create your account in minutes.",
    icon: "signUp",
  },
  {
    step: "02",
    title: "Create Profile",
    description: "Add your skills, experience, languages & price.",
    icon: "profile",
  },
  {
    step: "03",
    title: "Get Booked",
    description: "Users book sessions based on your availability.",
    icon: "calendar",
  },
  {
    step: "04",
    title: "Earn & Grow",
    description: "Connect, help and earn. Grow your reputation.",
    icon: "rupee",
  },
];

export const becomeAudiences: BecomeAudience[] = [
  { label: "Students & Experts", icon: "spark" },
  { label: "Professionals", icon: "users" },
  { label: "Mentors & Coaches", icon: "flag" },
  { label: "Teachers", icon: "lightbulb" },
  { label: "Consultants", icon: "build" },
  { label: "Industry Experts", icon: "chart" },
];

export const becomeTestimonials: BecomeTestimonial[] = [
  {
    quote:
      "I started with a few evening sessions and now mentor students every week. Flexible and rewarding.",
    name: "Priya Sharma",
    role: "Maths Mentor",
    avatarSrc: "/images/testimonials/priya.jpg",
  },
  {
    quote:
      "Setting my own rates and schedule changed everything. I help founders while growing my consulting brand.",
    name: "Rahul Mehta",
    role: "Business Consultant",
    avatarSrc: "/images/testimonials/rahul.jpg",
  },
  {
    quote:
      "The platform made it easy to get booked. Payments are smooth and the community is supportive.",
    name: "Neha Kapoor",
    role: "Career Coach",
    avatarSrc: "/images/testimonials/neha.jpg",
  },
  {
    quote:
      "I love sharing market walkthroughs live. Users ask great questions and I earn on my free hours.",
    name: "Arjun Patel",
    role: "Local Market Expert",
    avatarSrc: "/images/testimonials/arjun.jpg",
  },
  {
    quote:
      "As a teacher, this is a perfect side income. Verified users, clear bookings, and fair payouts.",
    name: "Meera Iyer",
    role: "Language Teacher",
    avatarSrc: "/images/testimonials/meera.jpg",
  },
  {
    quote:
      "Building my profile with reviews helped me stand out. Highly recommend joining as a Monkey.",
    name: "Vikram Shah",
    role: "Industry Expert",
    avatarSrc: "/images/testimonials/vikram.jpg",
  },
];
