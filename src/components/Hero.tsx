import { useNavigate } from "react-router";

import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="text-white px-6 md:px-10 pt-16 pb-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <Content />

        {/* Hero Image */}
        <div className="h-full w-full flex justify-center">
          <img
            src="/assets/home/desktop/image-hero.jpg"
            alt="XX99 Mark II Headphones"
            className="md:w-full max-w-md md:max-w-full h-full object-cover shadow-lg opacity-100 mix-blend-lighten "
          />
        </div>
      </div>
    </section>
  );
}

export function Content() {
  const navigate = useNavigate();
  return (
    <div className="text-center md:text-left space-y-6">
      <p className="text-gray-400 tracking-[10px] text-sm">NEW PRODUCT</p>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight uppercase">
        XX99 Mark II
        <br /> Headphones
      </h1>
      <p className="text-gray-300 max-w-md mx-auto md:mx-0">
        Experience natural, life like audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button onClick={() => navigate("/product/xx99-mark-two-headphones")}>
        {" "}
        See Product
      </Button>
    </div>
  );
}
