"use client";

import { motion } from "framer-motion";
import { 
  Cpu, Layout, Smartphone, PenTool, Cloud, 
  RefreshCw, Terminal, Zap, Database, Link 
} from "lucide-react";

const services = [
  { icon: <Cpu strokeWidth={1.5} />, title: "AI Solutions", description: "Integrating intelligent machine learning models and AI agents to automate, optimize, and scale complex operations." },
  { icon: <Layout strokeWidth={1.5} />, title: "Web Development", description: "Architecting lightning-fast, highly scalable web applications using React, Next.js, and serverless infrastructure." },
  { icon: <Smartphone strokeWidth={1.5} />, title: "Mobile Apps", description: "Crafting native and cross-platform mobile experiences that users love, with uncompromising performance." },
  { icon: <PenTool strokeWidth={1.5} />, title: "UI/UX Design", description: "Designing intuitive, conversion-focused interfaces with premium aesthetics and pixel-perfect precision." },
  { icon: <Cloud strokeWidth={1.5} />, title: "Cloud & DevOps", description: "Deploying resilient cloud infrastructure for ultimate scalability, zero-downtime, and enterprise security." },
  { icon: <RefreshCw strokeWidth={1.5} />, title: "Digital Transformation", description: "Modernizing legacy systems to propel your enterprise into the digital age with seamless transitions." },
  { icon: <Terminal strokeWidth={1.5} />, title: "Custom Software", description: "Bespoke engineering solutions tailored precisely to solve your most complex and unique business challenges." },
  { icon: <Database strokeWidth={1.5} />, title: "Backend Architecture", description: "Developing robust, secure, and highly performant server-side architectures capable of handling millions of requests." },
];

export default function Services() {
  const easePremium: any = [0.16, 1, 0.3, 1];

  return (
    <section id="services" className="relative bg-surface/30 pt-32 pb-40 border-y border-white/5">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px] mix-blend-screen" />
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <header className="mx-auto mb-24 text-center md:max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easePremium }}
            className="mb-6 text-4xl font-bold text-white md:text-6xl tracking-tight"
          >
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-glow">Competencies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: easePremium }}
            className="text-xl text-secondary-text leading-relaxed font-light"
          >
            We provide end-to-end engineering firepower. From conceptualization to deployment, we build software that drives real business value.
          </motion.p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} ease={easePremium} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, ease }: { service: any; index: number; ease: any }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease }}
      className="group relative h-full overflow-hidden rounded-[2rem] bg-surface/40 border border-white/5 p-8 lg:p-10 transition-all duration-500 hover:bg-surface/80 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(45,140,255,0.1)]"
    >
      <header className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-primary border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_30px_rgba(45,140,255,0.4)] group-hover:border-primary/50">
        {service.icon}
      </header>
      <h3 className="mb-4 text-2xl font-semibold text-white tracking-tight transition-colors duration-300 group-hover:text-glow">{service.title}</h3>
      <p className="text-base font-light leading-relaxed text-secondary-text">{service.description}</p>
      
      {/* Bottom line glow effect */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-glow opacity-0 transition-all duration-700 ease-out group-hover:w-full group-hover:opacity-100" />
    </motion.article>
  );
}
