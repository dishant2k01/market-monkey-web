export type MarketCity = {
  id: string;
  name: string;
  countLabel: string;
  icon: "delhi" | "mumbai" | "chandigarh" | "bangalore" | "kolkata" | "jaipur";
};

export type MarketItem = {
  id: string;
  name: string;
  city: string;
  categories: string[];
  monkeysLive: number;
  isLive?: boolean;
  imageSrc: string;
  imageAlt: string;
};

export const popularCities: MarketCity[] = [
  {
    id: "delhi",
    name: "Delhi",
    countLabel: "120+ Markets",
    icon: "delhi",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    countLabel: "95+ Markets",
    icon: "mumbai",
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    countLabel: "45+ Markets",
    icon: "chandigarh",
  },
  {
    id: "bangalore",
    name: "Bangalore",
    countLabel: "40+ Markets",
    icon: "bangalore",
  },
  {
    id: "kolkata",
    name: "Kolkata",
    countLabel: "35+ Markets",
    icon: "kolkata",
  },
  {
    id: "jaipur",
    name: "Jaipur",
    countLabel: "30+ Markets",
    icon: "jaipur",
  },
];

export const allMarketItems: MarketItem[] = [
  {
    id: "sarojini-nagar",
    name: "Sarojini Nagar Market",
    city: "Delhi",
    categories: ["Clothing", "Accessories"],
    monkeysLive: 24,
    isLive: true,
    imageSrc: "/images/markets/sarojini.jpg",
    imageAlt: "Sarojini Nagar Market fashion stalls in Delhi",
  },
  {
    id: "chor-bazaar",
    name: "Chor Bazaar",
    city: "Mumbai",
    categories: ["Antiques", "Collectibles"],
    monkeysLive: 18,
    isLive: false,
    imageSrc: "/images/markets/chor-bajar.jpg",
    imageAlt: "Chor Bazaar vintage and antique collections in Mumbai",
  },
  {
    id: "lajpat-nagar",
    name: "Lajpat Nagar Market",
    city: "Delhi",
    categories: ["Clothing", "Home Decor"],
    monkeysLive: 20,
    isLive: false,
    imageSrc: "/images/markets/lajpat.jpg",
    imageAlt: "Lajpat Nagar Market ethnic wear and decor in Delhi",
  },
  {
    id: "commercial-street",
    name: "Commercial Street",
    city: "Bangalore",
    categories: ["Fashion", "Footwear"],
    monkeysLive: 15,
    isLive: false,
    imageSrc: "/images/markets/commercial-street.png",
    imageAlt: "Commercial Street bustling fashion lane in Bangalore",
  },
  {
    id: "zakaria-street",
    name: "Zakaria Street",
    city: "Mumbai",
    categories: ["Clothing", "Accessories"],
    monkeysLive: 12,
    isLive: false,
    imageSrc: "/images/markets/sarojini.jpg",
    imageAlt: "Zakaria Street traditional shopping stalls in Mumbai",
  },
  {
    id: "karol-bagh",
    name: "Karol Bagh Market",
    city: "Delhi",
    categories: ["Electronics", "Fashion"],
    monkeysLive: 17,
    isLive: false,
    imageSrc: "/images/markets/mg-road.jpg",
    imageAlt: "Karol Bagh Market electronics and fashion hub in Delhi",
  },
  {
    id: "bapu-bazaar",
    name: "Bapu Bazaar",
    city: "Jaipur",
    categories: ["Textiles", "Jewelry"],
    monkeysLive: 10,
    isLive: false,
    imageSrc: "/images/markets/johari-bazaar.jpg",
    imageAlt: "Bapu Bazaar authentic textiles and jewelry in Jaipur",
  },
  {
    id: "colaba-causeway",
    name: "Colaba Causeway",
    city: "Mumbai",
    categories: ["Fashion", "Accessories"],
    monkeysLive: 14,
    isLive: false,
    imageSrc: "/images/markets/chor-bajar.jpg",
    imageAlt: "Colaba Causeway street retail and accessories in Mumbai",
  },
];

export const filterCategoryOptions = [
  "Clothing",
  "Footwear",
  "Accessories",
  "Electronics",
  "Home Decor",
  "Textiles",
  "Jewelry",
  "Antiques",
] as const;

export const filterCityOptions = [
  "All Cities",
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Jaipur",
  "Kolkata",
  "Chandigarh",
] as const;

export const heroMarketHighlights = [
  { label: "500+ Markets", icon: "store" },
  { label: "100% Verified Monkeys", icon: "shield" },
  { label: "Live Video Shopping", icon: "video" },
  { label: "Compare & Save", icon: "tag" },
] as const;

export const whyMarketMonkeyPoints = [
  "Live exploration with verified local Monkeys",
  "Ask questions and get real-time answers",
  "Compare prices before buying",
  "Shop with confidence",
] as const;
