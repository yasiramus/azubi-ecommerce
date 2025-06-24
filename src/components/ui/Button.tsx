import type { ButtonHTMLAttributes, ReactNode } from "react";

import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "transparent" | "danger"|"outline";
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
    primary: "bg-primary hover:bg-primary-soft",
    secondary: "bg-black hover:bg-[#4c4c4c]",
    dark: "bg-transparent !text-black border border-black hover:bg-black hover:!text-white",
    transparent:
      "!font-bold bg-transparent text-black/25 hover:bg-[#f2f2f2] hover:text-black",
    danger: "bg-error hover:bg-error/75",
    outline:"!font-medium !text-gray-500 underline hover:!text-primary !capitalize"
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
