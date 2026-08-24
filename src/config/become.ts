export type BecomeHeroHighlight = {
  title: string;
  icon: "terms" | "earn" | "customers" | "trusted";
};

export type BecomeHeroStat = {
  label: string;
  icon: "users" | "star" | "rupee";
};

export type BecomeReason = {
  title: string;
  description: string;
  icon: "clock" | "rupee" | "chart" | "users" | "boss" | "badge";
};

export type BecomeHowItWorksStep = {
  step: string;
  title: string;
  description: string;
  icon: "apply" | "verification" | "live" | "earn";
};

export type BecomeRequirement = {
  text: string;
};

export type BecomeEarningPlan = {
  icon: "session" | "subscription";
  title: string;
  price: string;
  unit: string;
  description: string;
};

export type BecomeAudience = {
  label: string;
  icon: "spark" | "users" | "flag" | "lightbulb" | "build" | "chart";
};

export type BecomeTestimonial = {
  quote: string;
  name: string;
  location: string;
  avatarSrc: string;
  rating: number;
};

export const becomeHeroHighlights: BecomeHeroHighlight[] = [
  {
    title: "Work on Your Terms",
    icon: "terms",
  },
  {
    title: "Earn More as You Grow",
    icon: "earn",
  },
  {
    title: "Help Thousands of Customers",
    icon: "customers",
  },
  {
    title: "100% Trusted & Verified",
    icon: "trusted",
  },
];

export const becomeHeroLiveDetails = {
  earnings: "₹2,450",
  earningsLabel: "Today's Earnings",
  liveLabel: "Live Session",
  liveLocation: "Lajpat Nagar, Delhi",
  viewerCount: "+24",
  avatars: [
    "/images/testimonials/arjun.jpg",
    "/images/testimonials/neha.jpg",
    "/images/testimonials/priya.jpg",
  ],
  imageSrc: "/images/become/hero-monkey.jpg",
  imageAlt: "Market Monkey local guide streaming live from an authentic Indian market",
} as const;

export const becomeHowItWorksSteps: BecomeHowItWorksStep[] = [
  {
    step: "01",
    title: "Apply & Sign Up",
    description: "Fill out the application form and tell us about yourself.",
    icon: "apply",
  },
  {
    step: "02",
    title: "Verification",
    description: "We'll verify your identity and review your local market knowledge.",
    icon: "verification",
  },
  {
    step: "03",
    title: "Start Going Live",
    description: "Once approved, go live from your market and help shoppers.",
    icon: "live",
  },
  {
    step: "04",
    title: "Earn & Grow",
    description: "Earn per session and unlock more earnings as you grow.",
    icon: "earn",
  },
];

export const becomeReasons: BecomeReason[] = [
  {
    title: "Work on Your Time",
    description: "Choose your hours and go live when it suits you.",
    icon: "clock",
  },
  {
    title: "Great Earnings",
    description: "Earn per session + monthly subscription model.",
    icon: "rupee",
  },
  {
    title: "Grow Your Reputation",
    description: "Build your profile, get more bookings and grow.",
    icon: "chart",
  },
  {
    title: "Help Real People",
    description: "Help thousands of shoppers make better decisions.",
    icon: "users",
  },
  {
    title: "Be Your Own Boss",
    description: "You're in charge. You work your way.",
    icon: "boss",
  },
  {
    title: "Trusted & Verified",
    description: "We verify every Monkey for safety and trust.",
    icon: "badge",
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

export const whoCanBecomeRequirements: BecomeRequirement[] = [
  { text: "You know your local markets really well" },
  { text: "You have a smartphone and good internet" },
  { text: "You are friendly, honest and helpful" },
  { text: "You can communicate in Hindi or English" },
  { text: "You are 18 years or older" },
];

export const whatYouEarnPlans: BecomeEarningPlan[] = [
  {
    icon: "session",
    title: "Per Live Session",
    price: "₹99",
    unit: "/ 15 mins",
    description: "Earn for every successful live market session.",
  },
  {
    icon: "subscription",
    title: "Monthly Subscription",
    price: "₹299",
    unit: "/ month",
    description: "Unlock more bookings, more visibility and more earnings.",
  },
];

export const topEarnerHighlight = "Top Monkeys earn ₹20,000+ per month!";

export const becomeTestimonials: BecomeTestimonial[] = [
  {
    quote:
      "Market Monkey changed my life. I work from my favorite market and earn well. Super flexible!",
    name: "Raj Kumar",
    location: "Chandni Chowk, Delhi",
    avatarSrc: "/images/testimonials/rahul.jpg",
    rating: 5,
  },
  {
    quote:
      "I love showing my market to people from all over India. The earnings are great and the team supports us a lot.",
    name: "Neha Sharma",
    location: "Colaba Causeway, Mumbai",
    avatarSrc: "/images/testimonials/neha.jpg",
    rating: 5,
  },
  {
    quote:
      "Best part is the freedom. I go live, help customers and earn at my own time. Highly recommended!",
    name: "Arjun Singh",
    location: "Lajpat Nagar, Delhi",
    avatarSrc: "/images/testimonials/arjun.jpg",
    rating: 5,
  },
  {
    quote:
      "Being a Monkey lets me share my favorite shopping spots while earning great income on my own schedule.",
    name: "Priya Verma",
    location: "Commercial Street, Bengaluru",
    avatarSrc: "/images/testimonials/priya.jpg",
    rating: 5,
  },
  {
    quote:
      "I guide customers through authentic handicraft stalls every day. The payouts are fast and reliable.",
    name: "Vikram Joshi",
    location: "Johari Bazaar, Jaipur",
    avatarSrc: "/images/testimonials/vikram.jpg",
    rating: 5,
  },
  {
    quote:
      "I love interacting with shoppers and helping them find genuine bargains. Market Monkey is a game changer!",
    name: "Meera Nair",
    location: "Sarojini Nagar, Delhi",
    avatarSrc: "/images/testimonials/meera.jpg",
    rating: 5,
  },
];
