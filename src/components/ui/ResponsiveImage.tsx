import type { ImageSet } from "../../types/Product";

type ResponsiveImageProps = {
  image: ImageSet;
  alt: string;
  className?: string;
};

export default function ResponsiveImage({
  image,
  alt,
  className,
}: ResponsiveImageProps) {
  return (
    <picture className="block w-full">
      <source media="(min-width: 1280px)" srcSet={image.desktop} />
      <source media="(min-width: 768px)" srcSet={image.tablet} />
      <img
        src={image.mobile}
        alt={alt}
        className={`w-full h-auto object-cover ${className}`}
        loading="lazy"
      />
    </picture>
  );
}
