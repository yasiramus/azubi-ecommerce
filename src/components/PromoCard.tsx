import Button from "./ui/Button";
import clsx from "clsx";

interface PromoCardProps {
  title: string;
  image?: string;
  align?: "left" | "right" | "center";
  buttonText?: string;
  buttonVariant?: "primary" | "secondary" | "dark";
  backgroundColor?: string;
  isBackgroundImage?: boolean;
  className?: string;
}

export default function PromoCard({
  title,
  image,
  align = "left",
  buttonText = "See Product",
  buttonVariant = "dark",
  backgroundColor = "#F1F1F1",
  isBackgroundImage = false,
  className,
}: PromoCardProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <div
      className={clsx(
        className,
        "w-full h-[320px] rounded-lg overflow-hidden relative flex",
        isBackgroundImage ? "" : "bg-cover bg-no-repeat"
      )}
      style={{
        backgroundColor: !isBackgroundImage ? backgroundColor : undefined,
        backgroundImage:
          isBackgroundImage && image ? `url(${image})` : undefined,
        backgroundPosition: "right",
        backgroundSize: "cover",
      }}
    >
      {!isBackgroundImage && image && (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      )}

      <div
        className={clsx(
          "relative z-10 h-full flex flex-col justify-center px-8 py-6 w-full",

          !isBackgroundImage && image ? "bg-[#F1F1F1] rounded-lg" : ""
        )}
      >
        <div className={clsx("space-y-6", alignment)}>
          <h1 className="text-h4 md:text-6xl font-bold leading-tight uppercase text-black">
            {title}
          </h1>
          <Button variant={buttonVariant}>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
}
