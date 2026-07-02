"use client";
/* eslint-disable */

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 50;
    if (scrolled !== isScrolled) {
      setScrolled(isScrolled);
    }
  });

  const easePremium: any = [0.16, 1, 0.3, 1];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: easePremium, delay: 2.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transform-gpu transition-all duration-500 ${
        scrolled ? "bg-[#050608]/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        <Link href="/" className="relative flex items-center gap-3 group" aria-label="Home">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-105">
            <Image src="/assets/Logo.png" alt="Exotic Co Logo" fill className="object-cover" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-glow">Exotic Co.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-secondary-text transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-primary px-6 font-semibold text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(45,140,255,0.4)]"
          >
            <span className="relative z-10 text-sm">Let&apos;s Talk</span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-glow to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: easePremium }}
            className="md:hidden absolute left-0 right-0 top-full bg-[#050608]/95 backdrop-blur-3xl border-b border-white/10 flex flex-col items-center justify-center gap-8 pt-10 pb-20"
          >
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-semibold text-secondary-text hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(45,140,255,0.3)]"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

