"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Activity, Hexagon, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  // Custom easing for premium feel
  const easePremium: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: easePremium },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050608]" />
        
        {/* Removed static cover image to prevent text overlap, relying on clean animated galaxy */}

        {/* Planet Horizon */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: easePremium }}
          className="absolute bottom-[-60%] left-1/2 w-[250%] h-[120%] -translate-x-1/2 rounded-[100%] bg-[#0B0F19] border-t border-primary/20 shadow-[0_-30px_150px_rgba(45,140,255,0.15)] md:w-[150%] md:bottom-[-50%]" 
        />
        <div className="absolute bottom-[-50%] left-1/2 w-[200%] h-[100%] -translate-x-1/2 rounded-[100%] bg-gradient-to-t from-transparent to-primary/5 mix-blend-screen" />
        
        {/* Blue Energy Streaks (Glows) */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
          className="absolute left-[15%] top-[20%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,140,255,0.15)_0%,transparent_60%)]" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
          className="absolute right-[15%] top-[40%] h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(86,168,255,0.1)_0%,transparent_60%)]" 
        />
        
        {/* Particles / Stars Overlay */}
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
      </div>

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto px-6 text-center lg:px-12"
      >
        <motion.div variants={itemVariants} className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.02)] transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default">
          <Sparkles size={16} className="text-primary animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-white">Award-Winning Engineering Studio</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="mx-auto max-w-5xl text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl leading-[1.1]">
          Engineering the <br className="hidden md:block" />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-glow to-primary bg-[length:200%_auto] animate-gradient text-glow">
            Future.
            <div className="absolute -inset-x-8 -inset-y-4 bg-primary/20 blur-[60px] -z-10 mix-blend-screen opacity-50" />
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="mx-auto mt-8 max-w-2xl text-lg text-secondary-text md:text-xl leading-relaxed font-light">
          We architect intelligent <strong className="text-white font-medium">AI, Web, Mobile</strong>, and <strong className="text-white font-medium">Cloud</strong> solutions that help global enterprises innovate, scale, and lead their industries.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link
            href="#contact"
            aria-label="Start Your Project"
            className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-10 font-medium text-white shadow-[0_0_40px_rgba(45,140,255,0.3)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(45,140,255,0.5)]"
          >
            <span className="relative z-10 text-sm md:text-base">Let&apos;s Talk</span>
            <ArrowRight size={18} className="relative z-10 transition-transform duration-500 group-hover:translate-x-2" />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-glow to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
          <Link
            href="#projects"
            aria-label="Explore Our Work"
            className="group flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-white/10 bg-white/5 px-10 font-medium tracking-wide text-white backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/30"
          >
            <span className="transition-transform duration-500 group-hover:-translate-y-[1px]">Explore Our Work</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-secondary-text">Scroll</span>
        <div className="h-12 w-[1px] bg-white/10 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent"
            animate={{ top: ["-50%", "150%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
      
      {/* CSS for custom gradient animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}} />
    </section>
  );
}

