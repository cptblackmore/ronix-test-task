import { type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  variant = "primary",
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const base =
    "min-w-[101px] h-[29px] px-1 flex items-center justify-center rounded-5 transition-colors";

  const variants = {
    primary: clsx(
      "bg-accent text-white",
      "hover:bg-accent/85",
      "disabled:bg-accent/30 disabled:cursor-not-allowed",
    ),
    secondary: clsx(
      "bg-transparent border border-[#DBDBDB] text-[#CDCDCD] text-muted",
      "hover:border-accent",
      "hover:text-accent",
      "disabled:opacity-50 disabled:cursor-not-allowed",
    ),
  };

  return (
    <button
      {...props}
      disabled={disabled}
      className={clsx(base, variants[variant], className)}
    >
      {children}
    </button>
  );
};
