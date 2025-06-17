import { useParams } from "react-router";

import { categories } from "../utils";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import InfoSection from "../components/InfoSection";
import CategoryCard, { CardSection } from "../components/Cards";

export default function Category() {
  const { categorySlug } = useParams<{ categorySlug: string }>(); //get the path from the url

  const filteredProducts = products
    .filter((product) => product.category === categorySlug)
    .sort((a, b) => (b.new === true ? 1 : 0) - (a.new === true ? 1 : 0));

  return (
    <>
      <div className="text-h2 font-bold text-center pt-16 pb-28 uppercase">
        {categorySlug}
      </div>
      <section className="bg-white p-4 w-full px-4 md:px-10 lg:px-20 py-16">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            slug={product.slug}
            new={product.new}
            categoryImage={product.categoryImage}
          />
        ))}

        <CardSection>
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              name={category.name}
              slug={category.slug}
              image={category.image}
            />
          ))}
        </CardSection>

        <InfoSection />
      </section>
    </>
  );
}
