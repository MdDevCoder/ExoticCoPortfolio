import { Variants } from "framer-motion";

/**
 * Exotic Co. Official Easing Curve
 * Provides a physics-based, premium feel to all entrance animations.
 */
export const exoticEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const durations = {
  fast: 0.3,
  normal: 0.8,
  slow: 1.2
};

export const exoticMotion = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: durations.normal, ease: exoticEasing }
  } as Variants,
  
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
    transition: { duration: durations.normal, ease: exoticEasing }
  } as Variants,
  
  fadeDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
    transition: { duration: durations.normal, ease: exoticEasing }
  } as Variants,

  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: durations.normal, ease: exoticEasing }
  } as Variants,

  slideLeft: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
    transition: { duration: durations.normal, ease: exoticEasing }
  } as Variants,

  slideRight: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 40 },
    transition: { duration: durations.normal, ease: exoticEasing }
  } as Variants,

  staggerContainer: (staggerDelay = 0.1): Variants => ({
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerDelay
      }
    }
  }),
};
