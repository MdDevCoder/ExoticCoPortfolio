"use client";
/* eslint-disable */

import { motion } from "framer-motion";
import { ArrowUpRight, Layers, Lock, Globe, Zap, Server } from "lucide-react";
import Image from "next/image";

const cryptiqVerse = {
  title: "CryptiqVerse",
  tagline: "The Future of Web3 Real Estate & Commerce",
  description: "CryptiqVerse is a revolutionary platform blending blockchain technology with real-world applications. It serves as an ultimate hub for virtual and physical asset management, NFT marketplaces, and decentralized finance integrations. Built for scale, engineered for security.",
  problem: "Traditional real estate and digital asset marketplaces are fragmented, lacking transparency, and plagued by high fees, slow transactions, and poor user experiences.",
  solution: "We engineered a unified Web3 ecosystem that provides instant settlement, cryptographic security, and an immersive user interface. By bridging physical assets with blockchain tokenization, we created a borderless, trustless marketplace.",
  results: [
    { label: "Transaction Speed", value: "< 2s" },
    { label: "Uptime", value: "99.99%" },
    { label: "Smart Contracts", value: "Audited" }
  ],
  features: [
    { icon: <Globe />, title: "Decentralized Marketplace", desc: "Peer-to-peer trading with zero intermediaries." },
    { icon: <Lock />, title: "Smart Contract Automation", desc: "Trustless escrows and automated settlements." },
    { icon: <Layers />, title: "Asset Tokenization", desc: "Fractional ownership of high-value real estate." },
    { icon: <Zap />, title: "Real-time Estimator", desc: "AI-driven price feeds and market valuations." }
  ],
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Solidity", "Web3.js", "Node.js", "IPFS", "PostgreSQL"],
  link: "https://cryptiqverse.xyz/"
};

const eliteSkillHub = {
  title: "Elite Skill Hub",
  description: "A premium gaming platform built for modern browsers with high-performance rendering. Experience competitive gameplay with flawless 60FPS fluid mechanics and real-time leaderboards.",
  tech: ["React", "TypeScript", "Vite", "Canvas API", "WebGL"],
  type: "Web Application",
  link: "https://elite-skill-hub.example.com",
  delay: 0.1
};

export default function FeaturedProjects() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const easePremium = [0.16, 1, 0.3, 1] as any;

  return (
    <section id="projects" className="relative bg-background pt-32 pb-40">
      {/* Subtle background glows */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(45,140,255,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <header className="mx-auto mb-24 text-center md:max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easePremium }}
            className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl tracking-tight"
          >
            Engineering <span className="text-primary italic">Excellence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: easePremium }}
            className="text-xl text-secondary-text leading-relaxed font-light"
          >
            <strong className="text-white font-medium">Exotic Co. builds world-class digital products.</strong><br/> Explore our flagship ecosystem where we&apos;ve turned complex challenges into elegant, scalable solutions.
          </motion.p>
        </header>

        {/* =========================================
            CRYPTIQVERSE FLAGSHIP SHOWCASE
            ========================================= */}
        <div className="mb-40">
          <article className="group relative overflow-hidden rounded-[2.5rem] bg-surface/40 border border-white/5 backdrop-blur-md shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)]">
            
            {/* 1. Hero with Integrated Logo */}
            <div className="relative w-full overflow-hidden p-10 lg:p-24 bg-gradient-to-br from-surface to-[#050B14]">
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
              
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16">
                <div className="order-2 lg:order-1 flex-1">
                  <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-primary/10 px-5 py-2 backdrop-blur-md border border-primary/20 shadow-[0_0_30px_rgba(45,140,255,0.2)]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-glow"></span>
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-widest text-primary">Flagship Web3 Ecosystem</span>
                  </div>
                  <h3 className="mb-6 text-5xl font-bold text-white lg:text-[5rem] leading-[1] tracking-tighter">{cryptiqVerse.title}</h3>
                  <p className="text-2xl lg:text-4xl font-light text-glow/90 leading-tight max-w-2xl">{cryptiqVerse.tagline}</p>
                </div>
                
                <div className="order-1 lg:order-2 shrink-0 flex justify-center lg:justify-end">
                  {/* Brand Identity / Logo integration */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: "transform", transform: "translateZ(0)" }}
                    className="relative flex items-center justify-center w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] xl:w-[180px] xl:h-[180px] rounded-full p-2 bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[0_0_60px_rgba(45,140,255,0.4)] overflow-hidden"
                  >
                     {/* Light reflection */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent mix-blend-overlay rounded-full pointer-events-none z-20" />
                     {/* Soft blue outer glow (inner to the container) */}
                     <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full z-0" />
                     <Image 
                      src="/assets/projects/cryptiqverse-logo.jpg" 
                      alt="CryptiqVerse logo" 
                      fill 
                      sizes="(max-width: 1024px) 140px, 180px"
                      className="object-cover p-3 rounded-full relative z-10 drop-shadow-[0_0_15px_rgba(45,140,255,0.5)]"
                     />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* 2. Storytelling & Metrics */}
            <div className="grid lg:grid-cols-12 gap-12 p-10 lg:p-16 border-y border-white/5 bg-surface/20">
              <div className="lg:col-span-8">
                <h4 className="text-2xl font-semibold text-white mb-6">The Architecture of Tomorrow</h4>
                <p className="text-xl text-secondary-text leading-relaxed font-light mb-12">
                  {cryptiqVerse.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">The Challenge</h5>
                    <p className="text-secondary-text leading-relaxed">{cryptiqVerse.problem}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">The Solution</h5>
                    <p className="text-secondary-text leading-relaxed">{cryptiqVerse.solution}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4 flex flex-col justify-center gap-8 lg:pl-8 lg:border-l lg:border-white/5">
                {cryptiqVerse.results.map((res, i) => (
                  <div key={i}>
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{res.value}</div>
                    <div className="text-sm font-medium uppercase tracking-widest text-secondary-text">{res.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Feature Highlights Grid */}
            <div className="p-10 lg:p-16 bg-surface/10">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cryptiqVerse.features.map((feature, i) => (
                  <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                    <div className="text-primary mb-6 [&>svg]:w-8 [&>svg]:h-8">{feature.icon}</div>
                    <h5 className="text-lg font-semibold text-white mb-3">{feature.title}</h5>
                    <p className="text-sm text-secondary-text leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Tech Stack & CTA */}
            <div className="p-10 lg:p-16 border-t border-white/5 bg-gradient-to-b from-transparent to-primary/5 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                  <Server size={16} /> Technical Arsenal
                </h4>
                <div className="flex flex-wrap gap-3 max-w-2xl">
                  {cryptiqVerse.techStack.map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-lg bg-surface border border-white/10 text-sm font-medium text-white shadow-sm hover:border-primary/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={cryptiqVerse.link}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit CryptiqVerse Live Website"
                className="group relative flex h-16 w-full lg:w-auto min-w-[240px] items-center justify-center gap-3 overflow-hidden rounded-full bg-primary text-white px-10 font-bold shadow-[0_0_40px_rgba(45,140,255,0.4)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(45,140,255,0.6)]"
              >
                <span className="relative z-10 text-lg">Launch Live Demo</span>
                <ArrowUpRight size={22} className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </article>
        </div>

        {/* =========================================
            ELITE SKILL HUB SHOWCASE
            ========================================= */}
        <div>
           <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: eliteSkillHub.delay, ease: easePremium }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-surface/40 border border-white/5 p-10 lg:p-16 transition-all duration-500 hover:bg-surface hover:border-purple-500/30 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.15)]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
                <div className="order-2 lg:order-1 flex-1">
                  <header className="mb-8 flex items-center justify-between border-b border-white/5 pb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-400">{eliteSkillHub.type}</span>
                  </header>
                  <h3 className="mb-6 text-4xl lg:text-6xl font-bold text-white tracking-tighter transition-colors duration-300 group-hover:text-purple-400">
                    {eliteSkillHub.title}
                  </h3>
                  <p className="mb-12 text-xl text-secondary-text font-light leading-relaxed max-w-3xl">
                    {eliteSkillHub.description}
                  </p>
                  
                  <footer className="flex flex-wrap gap-3 mb-10 lg:mb-12">
                    {eliteSkillHub.tech.map(tech => (
                      <span key={tech} className="rounded-lg bg-black/40 px-4 py-2 text-sm font-medium text-white/70 border border-white/5 transition-colors group-hover:border-purple-500/20 group-hover:text-white">
                        {tech}
                      </span>
                    ))}
                  </footer>

                  <a 
                    href={eliteSkillHub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-16 items-center justify-center gap-3 overflow-hidden rounded-full bg-white text-background px-10 font-bold shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] hover:bg-purple-600 hover:text-white"
                  >
                    <span className="text-lg">Launch Live Demo</span>
                    <ArrowUpRight size={22} />
                  </a>
                </div>

                <div className="order-1 lg:order-2 shrink-0 flex justify-center lg:justify-end">
                  {/* Brand Identity / Logo integration */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: "transform", transform: "translateZ(0)" }}
                    className="relative flex items-center justify-center w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] xl:w-[180px] xl:h-[180px] rounded-full p-2 bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.4)] overflow-hidden"
                  >
                     {/* Light reflection */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent mix-blend-overlay rounded-full pointer-events-none z-20" />
                     {/* Soft purple outer glow (inner to the container) */}
                     <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full z-0" />
                     <Image 
                      src="/assets/projects/elite-skill-hub-logo-transparent.png" 
                      alt="Elite Skill Hub logo" 
                      fill 
                      sizes="(max-width: 1024px) 140px, 180px"
                      className="object-contain p-3 rounded-full relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                     />
                  </motion.div>
                </div>
              </div>
            </motion.article>
        </div>
      </div>
    </section>
  );
}

