import React from "react";
import { exoticTokens } from "@/lib/design/tokens";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", fullWidth = false, icon, iconPosition = "right", children, ...props }, ref) => {
    
    const baseStyles = "group relative inline-flex items-center justify-center overflow-hidden font-bold transition-all duration-500 rounded-full outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-primary text-white hover:scale-[1.02] hover:bg-glow hover:shadow-[0_0_40px_rgba(45,140,255,0.4)]",
      secondary: "bg-surface/80 border border-white/10 text-white hover:bg-surface hover:border-primary/50 hover:shadow-[0_0_20px_rgba(45,140,255,0.2)]",
      ghost: "bg-transparent text-secondary-text hover:text-white hover:bg-white/5",
      outline: "bg-transparent border border-white/20 text-white hover:border-white hover:bg-white/5"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-8 text-base",
      lg: "h-16 px-10 text-lg"
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-3">
          {icon && iconPosition === "left" && (
            <span className="transition-transform duration-500 group-hover:-translate-x-1">{icon}</span>
          )}
          {children}
          {icon && iconPosition === "right" && (
            <span className="transition-transform duration-500 group-hover:translate-x-1">{icon}</span>
          )}
        </span>
        
        {/* Hover Gradient Overlay for Primary */}
        {variant === "primary" && (
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-glow to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
