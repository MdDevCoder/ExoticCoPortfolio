"use client";
/* eslint-disable */

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Enterprise Projects", value: 50, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Global Partners", value: 20, suffix: "+" },
];

export default function Achievements() {
  return (
    <section className="relative bg-surface/30 pt-24 pb-24 border-y border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute left-[10%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary/10 blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute right-[10%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-glow/10 blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-16">
          {stats.map((stat, index) => (
            <Counter key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ stat, index }: { stat: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const incrementTime = (duration / end);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  const easePremium: any = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: easePremium }}
      className="text-center group"
    >
      <div className="mb-3 text-5xl font-bold tracking-tighter text-white md:text-6xl lg:text-7xl transition-colors duration-500 group-hover:text-glow">
        {count}{stat.suffix}
      </div>
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {stat.label}
      </div>
    </motion.div>
  );
}

