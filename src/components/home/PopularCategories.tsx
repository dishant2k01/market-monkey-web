import { MarketCategoryCard } from "@/components/home/MarketCategoryCard";
import type { MarketCategory } from "@/components/home/MarketCategoryCard";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

const categories: MarketCategory[] = [
  {
    title: "Clothing & Fashion",
    href: "/#markets",
    imageSrc: "/images/markets/clothing-fashion.jpg",
    imageAlt: "Folded stacks of clothing and fabric",
  },
  {
    title: "Electronics",
    href: "/#markets",
    imageSrc: "/images/markets/electronics.jpg",
    imageAlt: "Modern over-ear headphones",
  },
  {
    title: "Jewelry",
    href: "/#markets",
    imageSrc: "/images/markets/jewelry.jpg",
    imageAlt: "Gold necklace on a jewelry display",
  },
  {
    title: "Home & Decor",
    href: "/#markets",
    imageSrc: "/images/markets/home-decor.jpg",
    imageAlt: "Cozy living room with lamps and furniture",
  },
  {
    title: "Footwear",
    href: "/#markets",
    imageSrc: "/images/markets/footwear.jpg",
    imageAlt: "Pair of stylish sneakers",
  },
  {
    title: "Spices & Dry Fruits",
    href: "/#markets",
    imageSrc: "/images/markets/spices-dry-fruits.jpg",
    imageAlt: "Colorful spices arranged in wooden bowls",
  },
];

export function PopularCategories() {
  return (
    <section
      id="markets"
      className="bg-surface py-[var(--space-section-y-mobile)] lg:py-[var(--space-section-y)]"
      aria-labelledby="popular-categories-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-primary uppercase">
            Popular Market Categories
          </p>
          <h2
            id="popular-categories-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            What Would You Like to Explore?
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:mt-14 lg:grid-cols-6 lg:gap-x-5">
          {categories.map((category) => (
            <MarketCategoryCard key={category.title} category={category} />
          ))}
        </ul>

        <div className="mt-10 flex justify-center lg:mt-12">
          <Button
            href="/#markets"
            variant="outline"
            size="lg"
            className="min-w-[16rem] px-8"
            rightIcon={<ArrowRightIcon className="size-4" />}
          >
            Explore All Categories
          </Button>
        </div>
      </Container>
    </section>
  );
}
