import { useNavigate } from "react-router";

import { categories } from "../utils";
import Hero from "../components/Hero";
import Button from "../components/ui/Button";
import PromoCard from "../components/PromoCard";
import InfoSection from "../components/InfoSection";
import CategoryCard, { CardSection } from "../components/Cards";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <section className="bg-white p-4 w-full px-4 md:px-10 lg:px-20 py-16">
        <div className="flex flex-col gap-y-8">
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

          <div className=" bg-primary max-h-1/2 rounded-lg px-6 pt-16 ">
            <div className="mx-auto px-8 w-full bg-[url(assets/home/desktop/pattern-circles.svg)] flex items-center gap-x-4  h-full bg-no-repeat">
              <div className="w-1/2 h-auto ">
                <img
                  src="/assets/home/desktop/image-speaker-zx9.png"
                  alt="speaker"
                  className="h-[400px] object-cover"
                />
              </div>

              <div className="w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-h1 md:text-6xl font-bold leading-tight uppercase">
                  ZX9
                  <br /> SPEAKER
                </h1>
                <p className="text-body text-gray-300 max-w-md mx-auto md:mx-0">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => navigate("/product/zx9-speaker")}
                >
                  See Product
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-8">
            {/*ZX7 with background image */}
            <PromoCard
              title="ZX7 SPEAKER"
              image="/assets/home/desktop/image-speaker-zx7.jpg"
              isBackgroundImage
              onClick={() => navigate("/product/zx7-speaker")}
            />

            <PromoCard
              title="YX1 EARPHONES"
              image="/assets/home/desktop/image-earphones-yx1.jpg"
              className="gap-x-6"
              backgroundColor="bg-none"
              onClick={() => navigate("/product/yx1-earphones")}
            />
            <InfoSection />
          </div>
        </div>
      </section>
    </>
  );
}
