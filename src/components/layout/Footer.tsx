"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, ArrowUpRight, Mail } from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const easePremium: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <footer className="relative bg-[#020305] pt-24 pb-12 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,140,255,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8 pb-20 border-b border-white/10">
          
          <div className="lg:col-span-5 pr-8">
            <Link href="/" className="mb-8 inline-flex items-center gap-3 group" aria-label="Home">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-105 shadow-[0_0_20px_rgba(45,140,255,0.2)]">
                 <Image src="/assets/Logo.png" alt="Exotic Co Logo" fill className="object-cover" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-glow">Exotic Co.</span>
            </Link>
            <p className="mb-8 text-lg text-secondary-text font-light leading-relaxed max-w-sm">
              Engineering the Future. We architect intelligent AI, Web, Mobile, and Cloud solutions that empower visionaries.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="https://x.com/ExoticCo_BDM" icon={<FaTwitter size={20} />} ariaLabel="X (Twitter)" />
              <SocialLink href="https://instagram.com/ExoticCo_BDM" icon={<FaInstagram size={20} />} ariaLabel="Instagram" />
              <SocialLink href="#" icon={<FaLinkedin size={20} />} ariaLabel="LinkedIn" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-6 font-semibold text-white tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/services">Capabilities</FooterLink></li>
              <li><FooterLink href="/process">Methodology</FooterLink></li>
              <li><FooterLink href="/careers">Careers</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-6 font-semibold text-white tracking-wide">Work</h4>
            <ul className="space-y-4">
              <li><FooterLink href="/projects">Flagship Projects</FooterLink></li>
              <li><FooterLink href="/testimonials">Client Partners</FooterLink></li>
              <li><FooterLink href="/blog">Insights (Blog)</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-6 font-semibold text-white tracking-wide">Initiate</h4>
            <p className="mb-6 text-secondary-text text-sm font-light leading-relaxed">Ready to build something extraordinary? let&apos;s talk architecture.</p>
            <a href="mailto:exoticzack01@gmail.com" className="group inline-flex items-center gap-3 text-white transition-colors hover:text-primary">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-colors group-hover:bg-primary/20 group-hover:border-primary/50">
                <Mail size={16} />
              </div>
              <span className="font-medium">exoticzack01@gmail.com</span>
            </a>
          </div>

        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-secondary-text font-light">
            © {new Date().getFullYear()} Exotic Co. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-surface border border-white/10 transition-all duration-500 hover:bg-primary hover:border-primary hover:shadow-[0_0_30px_rgba(45,140,255,0.4)]"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket size={20} className="text-secondary-text transition-colors duration-500 group-hover:text-white" />
            </motion.div>
          </button>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center text-sm font-light text-secondary-text transition-colors hover:text-white">
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
}

function SocialLink({ href, icon, ariaLabel }: { href: string; icon: React.ReactNode, ariaLabel: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-secondary-text border border-white/10 transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
    >
      {icon}
    </a>
  );
}

