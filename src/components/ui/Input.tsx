import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, icon, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2.5 w-full">
        {label && (
          <label htmlFor={props.id} className="text-sm font-semibold uppercase tracking-wider text-secondary-text ml-1">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/50">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full rounded-2xl border border-white/10 bg-white/[0.03] py-4 text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-primary focus:bg-white/[0.08] focus:shadow-[0_0_20px_rgba(45,140,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed ${icon ? "pl-12 pr-5" : "px-5"} ${error ? "border-red-500 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.15)]" : ""} ${className}`}
            {...props}
          />
        </div>
        {error && <span className="text-xs text-red-500 ml-1">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";
