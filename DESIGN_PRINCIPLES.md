# Exotic Co. Design Principles

This document outlines the core philosophical pillars of the **Exotic Design System**. All products, interfaces, and engineering artifacts created by Exotic Co. must adhere strictly to these principles.

## 1. Uncompromising Quality
We do not build minimum viable products. We build premium, production-ready systems from day one. Every hover state, every animation, and every pixel must feel intentional, expensive, and meticulously crafted.

## 2. The Physics of Motion
Motion is not decorative; it is fundamental to the user experience. 
- Use the standardized `exoticEasing` curve (`[0.16, 1, 0.3, 1]`) for all component entrances.
- Animations must never be sluggish or linear.
- Elements should feel like they possess physical weight and momentum.

## 3. Dark Mode by Default
Our visual identity is rooted in deep, aerospace-inspired aesthetics. The default canvas is `#050608`, accentuated by glowing primary blue (`#2D8CFF`). Interfaces should utilize glassmorphism (`backdrop-blur`) and subtle borders to create depth rather than relying on flat background colors.

## 4. Typography as Interface
Typography must establish immediate hierarchy. Use tight letter-spacing (`tracking-tight`) for display and heading fonts to create a compact, modern feel. Body text should breathe (`font-light`, relaxed line heights) to maximize legibility.

## 5. Elimination of Clutter
Remove everything that does not add immediate value to the user. Embrace negative space. If a border, background, or divider is not necessary to separate content, remove it.

## 6. Accessibility is Non-Negotiable
Premium design includes everyone. Contrast ratios must meet WCAG AA standards. Focus rings must be visible. Semantic HTML and ARIA labels are required on all interactive elements.

## 7. The Single Source of Truth
Never hardcode a color, easing curve, or font size. If a value exists in `src/lib/design/tokens.ts`, it must be imported and used. If it does not exist, it must be added to the design system before it is used in production.
