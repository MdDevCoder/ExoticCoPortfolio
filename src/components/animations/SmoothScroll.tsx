"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.15, // Tighter interpolation for instant responsiveness (removes floatiness)
      wheelMultiplier: 1, // 1:1 ratio prevents erratic behavior on macOS/Windows precision trackpads
      smoothWheel: true, // Apply smoothing only to discrete mouse wheel ticks
      smoothTouch: false, // Fall back to flawless native iOS/Android momentum scrolling on touch devices
      syncTouch: false, // Prevent JS thread from interfering with native touch events
    });

    let rafId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
