export type TableFeature = {
  label: string;
  icon: string;
};

export type HowItWorksStep = {
  title: string;
  description: string;
  icon: string;
};

export type WhyPoint = {
  title: string;
  description: string;
  icon: string;
};

export const pricingHero = {
  titleBefore: "Simple Pricing,",
  titleAccent: "Real Value.",
  description:
    "Whether you want to explore a market or earn as a Monkey, we've got a plan for you.",
  trustBadges: [
    "Secure Payments",
    "Transparent Pricing",
    "No Hidden Charges",
  ],
  imageSrc: "/images/hero/pricing.png",
  imageAlt: "Market Monkey pricing — simple plans with more value",
  trustedOverlay: {
    title: "Trusted by thousands of customers and verified Monkeys.",
    stat: "+12K",
    avatars: [
      "/images/testimonials/priya.jpg",
      "/images/testimonials/rahul.jpg",
      "/images/testimonials/neha.jpg",
      "/images/testimonials/vikram.jpg",
    ],
  },
} as const;

export const pricingCustomerPlan = {
  titleBefore: "Explore Markets",
  titleAccent: "Verified Monkeys",
  features: [
    "Live video exploration of real markets",
    "Compare products & prices in real-time",
    "Ask questions and get instant answers",
    "Explore multiple shops in one session",
    "Shop confidently & save time",
    "Safe, secure & trusted experience",
  ],
  mascotSrc: "/images/monkey.png",
  price: "₹ 99",
  priceSubtitle: "For 15 Minutes Live Session",
  popularBadge: "MOST POPULAR",
  tableFeatures: [
    { label: "15 Minutes Live Video", icon: "video" },
    { label: "Verified Local Monkey", icon: "user" },
    { label: "Explore, Compare & Shop", icon: "search" },
    { label: "Real-time Price Check", icon: "price" },
    { label: "100% Secure Payments", icon: "shield" },
  ],
  ctaLabel: "Explore a Market Now",
  ctaHref: "/#markets",
  priceNote: "One session at a time. Pay only for what you use.",
  howItWorksTitle: "How it works?",
  howItWorksSteps: [
    {
      title: "Select a Market",
      description: "Choose the market you want to explore.",
      icon: "user",
    },
    {
      title: "Choose a Monkey",
      description: "Pick a verified local Monkey who knows the market.",
      icon: "user",
    },
    {
      title: "Go Live",
      description: "Start a live video session and explore in real-time.",
      icon: "video",
    },
    {
      title: "Compare & Decide",
      description: "Check products, compare prices and shop smart.",
      icon: "compare",
    },
  ],
};

export const pricingMonkeyPlan = {
  titleBefore: "Become a Monkey",
  titleAccent: "Earn on Your Terms",
  features: [
    "Earn by helping customers explore markets",
    "Flexible timings – you choose when to work",
    "Access to customer requests & bookings",
    "Monthly subscription to get started",
    "Dedicated support & community",
    "Grow your earnings with more sessions",
  ],
  leftCtaLabel: "Become a Monkey Now",
  leftCtaHref: "/become-a-monkey",
  leftCtaNote: "Join 10,000+ Monkeys earning with us!",
  price: "₹ 299",
  priceSubtitle: "Per Month Subscription",
  tableFeatures: [
    { label: "Get Bookings & Earn", icon: "briefcase" },
    { label: "Work on Your Schedule", icon: "clock" },
    { label: "Secure Monthly Payouts", icon: "wallet" },
    { label: "Support & Training", icon: "headset" },
    { label: "Cancel Anytime", icon: "cancel" },
  ],
  ctaLabel: "Join as Monkey",
  ctaHref: "/become-a-monkey",
  priceNote: "Simple monthly plan. No long-term lock-in.",
  whyTitle: "Why Join as a Monkey?",
  whyPoints: [
    {
      title: "Good Earning Potential",
      description: "Earn more as you do more sessions.",
      icon: "chart",
    },
    {
      title: "Be Your Own Boss",
      description: "Work on your schedule and your terms.",
      icon: "boss",
    },
    {
      title: "Make an Impact",
      description: "Help people shop smart and save time.",
      icon: "heart",
    },
    {
      title: "Help Local, Earn Local",
      description: "Support your local market and community.",
      icon: "community",
    },
  ],
};
