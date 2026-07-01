import React from "react";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ className = "", children, ...props }: LayoutProps) {
  return (
    <div className={`container mx-auto px-6 lg:px-12 w-full ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Section({ className = "", children, ...props }: LayoutProps) {
  return (
    <section className={`py-24 md:py-32 w-full relative ${className}`} {...props}>
      {children}
    </section>
  );
}

export function Grid({ className = "", children, ...props }: LayoutProps) {
  return (
    <div className={`grid gap-6 md:gap-8 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Stack({ className = "", children, ...props }: LayoutProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Flex({ className = "", children, ...props }: LayoutProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
