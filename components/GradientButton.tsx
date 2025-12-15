import React from "react";
import { cn } from "../lib/utils";

export interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "variant" | "white"; // Added 'white' for footer compatibility
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    
    // Base styles (Layout, spacing, font) - REMOVED color here
    const baseLayout = "inline-flex items-center justify-center rounded-[11px] min-w-[132px] px-9 py-4 text-base leading-[19px] font-[500] font-sans font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer z-10 transition-transform active:scale-95";

    // Variant specific styles (Colors, backgrounds)
    let variantStyles = "";
    
    if (variant === "default") {
        variantStyles = "gradient-button text-white";
    } else if (variant === "variant") {
        // Outline style: Blue text always visible
        variantStyles = "gradient-button-variant text-primary border-2 border-primary bg-transparent hover:bg-primary/5";
    } else if (variant === "white") {
        // White style for footer
        variantStyles = "bg-white text-primary hover:bg-gray-50 shadow-md";
    }

    return (
      <button
        ref={ref}
        className={cn(baseLayout, variantStyles, className)}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";