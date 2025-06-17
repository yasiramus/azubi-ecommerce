import { Link } from "react-router";

import IconArrow from "../assets/shared/desktop/icon-arrow-right.svg";

export function CardSection({ children }: { children: React.ReactNode }) {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 px-6 py-16 bg-white">
    //   {children}
    // </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
      {children}
    </div>
  );
}

interface Props {
  name: string;
  slug: string;
  image: string;
}

export default function CategoryCard({ name, slug, image }: Props) {
  return (
    <div className="bg-[#f2f2f2] rounded-lg text-center px-6 pt-16 pb-8 relative overflow-visible">
      <img
        src={image}
        alt={name}
        className="w-24 sm:w-28 lg:w-32 mx-auto -mt-20 object-contain"
      />

      <h3 className="mt-6 text-h6 sm:text-xl font-bold tracking-wide uppercase text-black">
        {name}
      </h3>

      <Link
        to={`/${slug}`}
        className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-black/50 hover:text-[#FBAF85] transition"
      >
        <span>Shop</span>
        <img src={IconArrow} alt="arrow icon" className="w-1 h-2" />
      </Link>
    </div>
  );
}
