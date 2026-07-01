/* eslint-disable */
import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Display({ className = "", as: Component = "h1", children, ...props }: TypographyProps) {
  return (
    <Component className={`text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1] ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function H1({ className = "", as: Component = "h1", children, ...props }: TypographyProps) {
  return (
    <Component className={`text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function H2({ className = "", as: Component = "h2", children, ...props }: TypographyProps) {
  return (
    <Component className={`text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2] ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function H3({ className = "", as: Component = "h3", children, ...props }: TypographyProps) {
  return (
    <Component className={`text-2xl md:text-3xl font-bold tracking-tight text-white leading-[1.3] ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function H4({ className = "", as: Component = "h4", children, ...props }: TypographyProps) {
  return (
    <Component className={`text-xl md:text-2xl font-bold tracking-tight text-white leading-[1.4] ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function Lead({ className = "", as: Component = "p", children, ...props }: TypographyProps) {
  return (
    <Component className={`text-xl md:text-2xl font-light text-secondary-text leading-relaxed ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function Body({ className = "", as: Component = "p", children, ...props }: TypographyProps) {
  return (
    <Component className={`text-base md:text-lg font-light text-secondary-text leading-relaxed ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function Small({ className = "", as: Component = "small", children, ...props }: TypographyProps) {
  return (
    <Component className={`text-sm font-light text-secondary-text leading-relaxed ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function Overline({ className = "", as: Component = "span", children, ...props }: TypographyProps) {
  return (
    <Component className={`text-xs font-bold uppercase tracking-[0.2em] text-primary ${className}`} {...props}>
      {children}
    </Component>
  );
}

