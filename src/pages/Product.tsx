import { useParams } from "react-router";

import GoBack from "../components/GoBack.tsx";
import { products } from "../data/products.ts";
import { categories } from "../utils/index.ts";
import AddToCart from "../components/Cart/AddToCart.tsx";
import Gallery from "../components/Gallery/Gallery.tsx";
import InfoSection from "../components/InfoSection.tsx";
import CategoryCard, { CardSection } from "../components/Cards.tsx";
import FeaturesSection from "../components/FeaturesSection/Index.tsx";
import RecommendationSection from "../components/Recommendation/RecommendationSection.tsx";

export default function Product() {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="text-center text-red-600 py-10">Product not found.</div>
    );
  }

  return (
    <main className="bg-white px-4 md:px-10 lg:px-20 py-8 space-y-20">
      <GoBack />
      <AddToCart product={product} />
      <FeaturesSection
        features={product.features}
        includes={product.includes}
      />
      <Gallery gallery={product.gallery} />
      <RecommendationSection recommendations={product?.others} />
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
    </main>
  );
}
