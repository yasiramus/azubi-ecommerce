import { Link } from "react-router";
import Button from "../ui/Button";
import type { RelatedProduct } from "../../types/Product";

export default function RecommendationCard({
  name,
  image,
  slug,
}: RelatedProduct) {

  return (
    <div className="flex flex-col items-center text-center gap-8">
      <picture>
        <source media="(min-width: 1024px)" srcSet={image.desktop} />
        <source media="(min-width: 640px)" srcSet={image.tablet} />
        <img
          src={image.mobile}
          alt={name}
          className="rounded-lg w-full object-cover max-h-[318px]"
        />
      </picture>
     

      <div className="space-y-4">
        <h3 className="text-xl font-bold uppercase tracking-wider">{name}</h3>
        <Link to={`/product/${slug}`}>
          <Button>See Product</Button>
        </Link>
      </div>
    </div>
  );
}
