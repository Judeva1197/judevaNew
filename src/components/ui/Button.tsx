import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "highlight" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-semibold min-w-[80px] rounded-[8px] md:rounded-[150px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
      primary: "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark ",
      highlight: "bg-highlight text-white hover:bg-highlight-dark active:bg-highlight-dark ",
      outline: "border border-neutral-300 bg-transparent text-neutral-800 hover:bg-neutral-100 hover:text-neutral-900",
      ghost: "bg-transparent text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-13 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
