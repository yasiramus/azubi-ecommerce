import type { ImageSet } from "../../types/Product";
import ResponsiveImage from "../ui/ResponsiveImage";

type GalleryProps = {
  gallery: {
    first: ImageSet;
    second: ImageSet;
    third: ImageSet;
  };
};

export default function Gallery({ gallery }: GalleryProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
      <div className="grid gap-6">
        <ResponsiveImage
          image={gallery.first}
          alt="Gallery image 1"
          className="rounded-lg"
        />
        <ResponsiveImage
          image={gallery.second}
          alt="Gallery image 2"
          className="rounded-lg"
        />
      </div>
      <ResponsiveImage
        image={gallery.third}
        alt="Gallery image 3"
        className="rounded-lg h-full object-cover"
      />
    </section>
  );
}
