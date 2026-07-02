"use client";

import { motion } from "framer-motion";
import { Shield, Target, Zap, Globe2 } from "lucide-react";

const values = [
  { icon: <Target strokeWidth={1.5} size={28} />, title: "Precision Engineering", description: "We don&apos;t just write code. We architect solutions with mathematical precision, ensuring performance and scalability from day one." },
  { icon: <Zap strokeWidth={1.5} size={28} />, title: "Relentless Innovation", description: "From AI integrations to Web3 ecosystems, we stay at the bleeding edge of technology to give our clients an unfair advantage." },
  { icon: <Shield strokeWidth={1.5} size={28} />, title: "Enterprise Security", description: "Security is not an afterthought. Our architectures are battle-tested and compliant with the highest global standards." },
  { icon: <Globe2 strokeWidth={1.5} size={28} />, title: "Global Scale", description: "We build systems designed to handle millions of users effortlessly, deploying globally across resilient cloud infrastructures." },
];

export default function About() {
  const easePremium: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="about" className="relative bg-background pt-32 pb-40 overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: easePremium }}
          >
            <h2 className="mb-8 text-4xl font-bold text-white md:text-6xl tracking-tight leading-[1.1]">
              We don&apos;t build websites.<br/>
              <span className="text-primary italic">We build empires.</span>
            </h2>
            <div className="space-y-6 text-xl text-secondary-text font-light leading-relaxed">
              <p>
                Exotic Co. is an elite software engineering collective. We partner with visionaries, startups, to build the world&apos;s most sophisticated digital products that redefine industries.
              </p>
              <p>
                Our philosophy is simple: uncompromising quality. Whether it&apos;s an AI-driven SaaS platform, a high-frequency trading bot, or a beautifully crafted marketing site, we engineer every pixel and byte with absolute perfection.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
              <p className="text-sm font-semibold uppercase tracking-widest text-white">The Exotic Standard</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: easePremium }}
                className="group relative rounded-[2rem] bg-surface/30 border border-white/5 p-8 transition-all duration-500 hover:bg-surface/80 hover:border-primary/30 hover:shadow-[0_20px_50px_-15px_rgba(45,140,255,0.15)]"
              >
                <div className="mb-6 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:text-glow">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white tracking-tight">{value.title}</h3>
                <p className="text-base text-secondary-text font-light leading-relaxed">{value.description}</p>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

