import React from "react";
import { exoticTokens } from "@/lib/design/tokens";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "glass" | "outline";
  padding?: "none" | "sm" | "md" | "lg";
  hoverEffect?: "none" | "glow" | "lift";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "glass", padding = "md", hoverEffect = "glow", children, ...props }, ref) => {
    
    const baseStyles = "relative overflow-hidden transition-all duration-500";
    
    // Default border radius from design tokens
    const radiusStyle = "rounded-[2rem]";

    const variants = {
      surface: "bg-surface border border-white/5",
      glass: "bg-surface/30 border border-white/5 backdrop-blur-xl",
      outline: "bg-transparent border border-white/10"
    };

    const paddings = {
      none: "p-0",
      sm: "p-4",
      md: "p-8",
      lg: "p-12"
    };

    const hoverEffects = {
      none: "",
      glow: "hover:bg-surface/80 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(45,140,255,0.1)] group",
      lift: "hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${radiusStyle} ${variants[variant]} ${paddings[padding]} ${hoverEffects[hoverEffect]} ${className}`}
        {...props}
      >
        {children}
        
        {/* Hover Bottom Glow Line (Optional if requested by specific design implementation) */}
        {hoverEffect === "glow" && (
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-glow opacity-0 transition-all duration-700 ease-out group-hover:w-full group-hover:opacity-100" />
        )}
      </div>
    );
  }
);
Card.displayName = "Card";

