import RecommendationCard from "./Index";
import type { Product } from "../../types/Product";

interface RecommendationSectionProps {
  recommendations: Product["others"];
}

export default function RecommendationSection({
  recommendations,
}: RecommendationSectionProps) {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-4 space-y-12 text-black">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold uppercase">
        You may also like
      </h2>
      <div className="grid gap-14 md:grid-cols-3">
        {recommendations.map((item) => (
          <RecommendationCard
            key={item.slug}
            name={item.name}
            image={item.image}
            slug={item.slug}
          />
        ))}
      </div>
    </section>
  );
}
