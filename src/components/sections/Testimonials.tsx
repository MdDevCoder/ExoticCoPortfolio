"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Exotic Co. didn&apos;t just build our app; they architected a highly scalable platform that allowed us to handle 10x our usual traffic without a single dropped request. True engineering partners.",
    author: "Sarah Jenkins",
    role: "CTO, FinTech Innovators"
  },
  {
    quote: "The level of polish and architectural rigor in their Web3 integration is unmatched. They turned a complex smart contract requirement into an effortless, premium user experience.",
    author: "David Chen",
    role: "Founder, CryptiqVerse"
  },
  {
    quote: "Working with Exotic Co. felt like having an elite in-house engineering squad. They shipped ahead of schedule, and the code quality was nothing short of exceptional.",
    author: "Elena Rodriguez",
    role: "VP of Product, HealthTech Systems"
  }
];

export default function Testimonials() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const easePremium = [0.16, 1, 0.3, 1] as any // eslint-disable-line @typescript-eslint/no-explicit-any;

  return (
    <section id="testimonials" className="relative bg-background pt-32 pb-40 border-t border-white/5">
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <header className="mx-auto mb-24 text-center md:max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easePremium }}
            className="mb-6 text-4xl font-bold text-white md:text-6xl tracking-tight"
          >
            Trusted by <span className="text-primary italic">Visionaries.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: easePremium }}
            className="text-xl text-secondary-text leading-relaxed font-light"
          >
            Don&apos;t just take our word for it. Here is what industry leaders have to say about our uncompromising commitment to excellence.
          </motion.p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: easePremium }}
              className="group relative rounded-[2rem] bg-surface/30 p-10 lg:p-12 border border-white/5 backdrop-blur-md transition-all duration-500 hover:bg-surface/70 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(45,140,255,0.1)]"
            >
              <Quote size={48} className="mb-8 text-white/5 transition-colors duration-500 group-hover:text-primary/20" />
              <p className="mb-10 text-lg text-secondary-text font-light leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-auto">
                <h4 className="font-bold text-white text-lg tracking-tight">{testimonial.author}</h4>
                <p className="text-sm font-medium uppercase tracking-widest text-primary mt-1">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
