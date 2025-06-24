import { Link } from "react-router";

import Button from "../components/ui/Button";
import type { ImageSet } from "../types/Product";

interface ProductCardProps {
  name: string;
  description: string;
  slug: string;
  new: boolean;
  categoryImage: ImageSet;
  reverse?: boolean;
}

export default function ProductCard({
  name,
  description,
  slug,
  new: isNew,
  categoryImage,
  reverse = false,
}: ProductCardProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      } gap-10 lg:gap-24 py-16`}
    >
      <div className="bg-light-gray rounded-lg w-full lg:w-1/2 p-6 flex justify-center">
        <img
          src={categoryImage.desktop}
          alt={name}
          className="w-48 sm:w-60 lg:w-72 object-contain"
        />
      </div>
      <div className="text-center lg:text-left w-full lg:w-1/2 px-4">
        {isNew && (
          <p className="text-sm text-primary uppercase tracking-widest mb-6 ">
            New Product
          </p>
          
        )}
        <h2 className="text-black text-h2 font-bold sm:text-h2 uppercase mb-4 ">
          {name}
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
        <Link to={`/product/${slug}`}>
          <Button>See Product</Button>
        </Link>
      </div>
    </div>
  );
}
