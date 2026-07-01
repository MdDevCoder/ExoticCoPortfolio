"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function MouseGlow() {
  const [isClient, setIsClient] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  
  const springConfig = { stiffness: 300, damping: 28, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX - 200); // 400px width / 2
      mouseY.set(e.clientY - 200); // 400px height / 2
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isClient) return null;

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
        opacity: isVisible ? 1 : 0,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(86,168,255,0.08)_0%,transparent_60%)] mix-blend-screen transition-opacity duration-500"
    />
  );
}
