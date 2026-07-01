"use client";
/* eslint-disable */

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Lightbulb, PenTool, Code, CheckCircle, Rocket, HeartHandshake } from "lucide-react";
import { useRef } from "react";

const steps = [
  { icon: <Search strokeWidth={1.5} size={24} />, title: "Discovery & Strategy", description: "Deep diving into your business goals, target audience, and technical requirements to define a precise roadmap." },
  { icon: <Lightbulb strokeWidth={1.5} size={24} />, title: "Architecture Design", description: "Mapping out resilient system architecture, cloud infrastructure, and security protocols before a single line of code is written." },
  { icon: <PenTool strokeWidth={1.5} size={24} />, title: "UI/UX Prototyping", description: "Crafting wireframes and high-fidelity prototypes that balance premium aesthetics with seamless user journeys." },
  { icon: <Code strokeWidth={1.5} size={24} />, title: "Agile Engineering", description: "Developing robust, scalable solutions using modern tech stacks. We build for the future, not just the MVP." },
  { icon: <CheckCircle strokeWidth={1.5} size={24} />, title: "Rigorous QA", description: "Automated testing, security audits, and performance profiling to ensure zero-defect deployments." },
  { icon: <Rocket strokeWidth={1.5} size={24} />, title: "Continuous Deployment", description: "Smooth CI/CD pipelines that push your product to production with zero downtime." },
  { icon: <HeartHandshake strokeWidth={1.5} size={24} />, title: "Scale & Support", description: "Ongoing monitoring, maintenance, and feature iteration as your business scales globally." },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const easePremium: any = [0.16, 1, 0.3, 1];
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative bg-background pt-32 pb-40 overflow-hidden" ref={containerRef}>
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <header className="mx-auto mb-32 text-center md:max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easePremium }}
            className="mb-6 text-4xl font-bold text-white md:text-6xl tracking-tight"
          >
            The Engineering <span className="text-primary italic">Blueprint.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: easePremium }}
            className="text-xl text-secondary-text leading-relaxed font-light"
          >
            A battle-tested methodology designed to deliver complex, enterprise-grade projects on time, within budget, and flawlessly executed.
          </motion.p>
        </header>

        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Line Background */}
          <div className="absolute left-[39px] top-0 h-full w-[2px] bg-white/[0.03] md:left-1/2 md:-translate-x-1/2" />
          
          {/* Animated Line Progress */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[39px] top-0 w-[2px] bg-gradient-to-b from-primary via-glow to-primary md:left-1/2 md:-translate-x-1/2 origin-top shadow-[0_0_20px_rgba(45,140,255,0.5)]" 
          />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} ease={easePremium} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index, ease }: { step: any; index: number; ease: any }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease }}
      className={`relative flex flex-col gap-8 md:flex-row md:items-center ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Node / Icon */}
      <div className="absolute left-0 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#050608] border-2 border-primary/30 text-primary shadow-[0_0_30px_rgba(45,140,255,0.2)] md:left-1/2 md:-translate-x-1/2 transition-all duration-500 hover:scale-110 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_0_40px_rgba(45,140,255,0.6)] cursor-default">
        {step.icon}
      </div>

      {/* Content */}
      <div className={`ml-28 flex-1 md:ml-0 ${isEven ? "md:mr-32 md:text-right" : "md:ml-32"}`}>
        <div className="group rounded-[2rem] bg-surface/30 border border-white/5 p-8 lg:p-10 backdrop-blur-md transition-all duration-500 hover:bg-surface/70 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(45,140,255,0.1)]">
          <h3 className="mb-4 text-2xl font-bold text-white tracking-tight flex items-center gap-4 ${isEven ? 'md:justify-end' : ''}">
            <span className="text-primary text-sm font-mono tracking-widest">{`0${index + 1}.`}</span>
            {step.title}
          </h3>
          <p className="text-lg text-secondary-text font-light leading-relaxed">{step.description}</p>
        </div>
      </div>
    </motion.article>
  );
}

