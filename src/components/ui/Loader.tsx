"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for premium effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const easePremium: any = [0.16, 1, 0.3, 1];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.98 }}
          transition={{ duration: 1, ease: easePremium }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#020305]"
        >
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: easePremium }}
            className="relative mb-10 h-28 w-28 overflow-hidden rounded-3xl bg-surface border border-white/5 shadow-[0_0_60px_rgba(45,140,255,0.15)]"
          >
             <Image src="/assets/Logo.png" alt="Exotic Co Logo" fill className="object-cover" priority />
          </motion.div>

          {/* Text Reveal */}
          <div className="overflow-hidden flex flex-col items-center">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easePremium }}
              className="text-2xl font-bold tracking-[0.2em] text-white uppercase"
            >
              Exotic Co.
            </motion.h2>
            
            <div className="overflow-hidden mt-3">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: easePremium }}
                className="text-xs font-semibold tracking-[0.3em] text-primary uppercase"
              >
                Engineering the Future
              </motion.p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-16 h-[1px] w-64 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.2, ease: "easeInOut", delay: 0.2 }}
              className="h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(45,140,255,0.8)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
