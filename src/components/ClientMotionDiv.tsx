"use client";
/* eslint-disable */

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ClientMotionDiv({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

