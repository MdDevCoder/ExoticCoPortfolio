"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 600px
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const easePremium = [0.16, 1, 0.3, 1] as any // eslint-disable-line @typescript-eslint/no-explicit-any

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.8, ease: easePremium }}
          className="fixed bottom-8 right-8 z-[90] hidden md:block"
        >
          <Link
            href="/contact"
            className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-surface/80 p-2 pr-6 backdrop-blur-md border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:bg-surface hover:border-primary/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_20px_rgba(45,140,255,0.4)] transition-transform duration-500 group-hover:scale-105 group-hover:bg-glow">
              <MessageSquare size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-wide">Start a Project</span>
              <span className="text-xs font-light text-secondary-text transition-colors group-hover:text-white/80">Get a free consultation</span>
            </div>
            <ArrowRight size={16} className="ml-2 text-primary transition-transform duration-500 group-hover:translate-x-1" />
            
            <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-transparent to-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
