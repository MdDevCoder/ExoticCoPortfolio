/* eslint-disable */
import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = "", variant = "primary", size = "sm", children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-full font-bold uppercase tracking-widest transition-colors";
    
    const variants = {
      primary: "bg-primary/20 text-white border border-primary/50 shadow-[0_0_15px_rgba(45,140,255,0.2)]",
      secondary: "bg-white/10 text-white border border-white/20",
      outline: "bg-transparent text-primary border border-primary/50",
      ghost: "bg-transparent text-secondary-text"
    };

    const sizes = {
      sm: "px-3 py-1 text-[10px]",
      md: "px-4 py-1.5 text-xs"
    };

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";

