import clsx from "clsx";

export default function InfoSection({ reverse }: { reverse?: false }) {
  return (
    <section
      className={clsx(
        "my-16 flex flex-col-reverse md:flex-row items-center gap-8 w-full",
        reverse && "md:flex-row-reverse"
      )}
    >
      {/* Text Content */}
      <div className="w-full text-center md:text-left px-6 md:px-8 animate-fadeInUp">
        <h2 className="text-h2 md:text-h2 font-bold uppercase leading-tight text-black">
          Bringing you the <br />
          <span className="text-primary">best</span> audio gear
        </h2>
        <p className="mt-6 max-w-md mx-auto md:mx-0 text-black text-base md:text-body">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      {/* Image */}
      <div className="w-full">
        <img
          src={"/assets/shared/desktop/image-best-gear.jpg"}
          alt={"Best Audio Gear"}
          className="w-full h-75 md:h-100 lg:h-125 object-cover rounded-lg animate"
        />
      </div>
    </section>
  );
}
