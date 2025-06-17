import type { IncludeItem } from "./IncludesBox";

import FeaturesText from "./FeaturesText";
import IncludesBox from "./IncludesBox";

type FeaturesSectionProps = {
  features: string;
  includes: IncludeItem[];
};

export default function FeaturesSection({
  features,
  includes,
}: FeaturesSectionProps) {
  return (
    <section className="w-full px-6 md:px-10 xl:px-28 py-16 flex flex-col xl:flex-row gap-16">
      <FeaturesText text={features} />
      <IncludesBox includes={includes} />
    </section>
  );
}
