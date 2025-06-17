import clsx from "clsx";

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "transparent" | "danger";
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "text-white cursor-pointer px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-300";

  const variantStyles = {
    primary: "bg-[#D87D4A] hover:bg-[#fbaf85]",
    secondary: "bg-black hover:bg-[#4c4c4c]",
    dark: "bg-transparent text-black border border-black hover:bg-black hover:text-white",
    transparent:
      "!font-bold bg-transparent text-black/25 hover:bg-[#f2f2f2] hover:text-black",
    danger: "bg-[#CD2C2C]",
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
