import Image from "next/image";
import Link from "next/link";

export type MarketCategory = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

type MarketCategoryCardProps = {
  category: MarketCategory;
};

export function MarketCategoryCard({ category }: MarketCategoryCardProps) {
  return (
    <li>
      <Link
        href={category.href}
        className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      >
        <article className="flex flex-col items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-subtle shadow-sm">
            <Image
              src={category.imageSrc}
              alt={category.imageAlt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 180px"
              className="object-cover transition-transform duration-300 ease-[var(--motion-ease)] group-hover:scale-[1.03]"
            />
          </div>
          <h3 className="mt-3 text-center text-sm font-semibold text-ink transition-colors group-hover:text-brand-primary sm:text-[0.9375rem]">
            {category.title}
          </h3>
        </article>
      </Link>
    </li>
  );
}
