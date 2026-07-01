/* eslint-disable */
"use client";

import { motion } from "framer-motion";
import { Shield, Server, Code, Zap, RefreshCw, Handshake } from "lucide-react";

const trustFactors = [
  { icon: <Shield />, title: "Secure Architecture", desc: "Military-grade security protocols built into every layer of the tech stack." },
  { icon: <Server />, title: "Scalable Systems", desc: "Cloud-native infrastructure designed to handle millions of concurrent users." },
  { icon: <Code />, title: "Clean Code", desc: "Maintainable, strictly typed, and heavily documented engineering." },
  { icon: <Zap />, title: "Performance Optimized", desc: "Edge rendering and CDN delivery for sub-second global load times." },
  { icon: <RefreshCw />, title: "Agile Delivery", desc: "Iterative sprints with complete transparency and continuous deployment." },
  { icon: <Handshake />, title: "Long-Term Support", desc: "Dedicated enterprise SLAs for post-launch scaling and maintenance." },
];

export default function EnterpriseTrust() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const easePremium = [0.16, 1, 0.3, 1] as any // eslint-disable-line @typescript-eslint/no-explicit-any

  return (
    <section className="relative bg-[#020305] pt-32 pb-40 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-[20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <header className="mx-auto mb-20 text-center md:max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easePremium }}
            className="mb-6 text-3xl font-bold text-white md:text-5xl tracking-tight"
          >
            Why Enterprises Choose <span className="text-primary italic">Exotic Co.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: easePremium }}
            className="text-lg text-secondary-text leading-relaxed font-light"
          >
            We eliminate technical debt before it happens. Our engineering standards are designed for businesses where failure is not an option.
          </motion.p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFactors.map((factor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: easePremium }}
              className="group flex gap-5 rounded-[2rem] bg-surface/30 p-8 border border-white/5 transition-all duration-500 hover:bg-surface hover:border-primary/30"
            >
              <div className="flex-shrink-0 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:text-glow">
                {factor.icon}
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold text-white tracking-tight">{factor.title}</h4>
                <p className="text-sm font-light leading-relaxed text-secondary-text">{factor.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

