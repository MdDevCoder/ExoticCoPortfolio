"use client";
/* eslint-disable */

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function MouseGlow() {
  const [isClient, setIsClient] = useState(true);
  
  const springConfig = { stiffness: 300, damping: 28, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);
  const opacity = useMotionValue(0);

  useEffect(() => {
    
    
    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        isVisible = true;
        opacity.set(1);
      }
      mouseX.set(e.clientX - 200); // 400px width / 2
      mouseY.set(e.clientY - 200); // 400px height / 2
    };
    
    const handleMouseLeave = () => {
      isVisible = false;
      opacity.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, opacity]);

  if (!isClient) return null;

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
        opacity,
        willChange: "transform, opacity",
        translateZ: 0
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(86,168,255,0.06)_0%,transparent_60%)] transition-opacity duration-500"
    />
  );
}

