"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Frontend Architecture",
    technologies: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    name: "Backend Engineering",
    technologies: ["Node.js", "Python", "Go", "GraphQL", "REST APIs", "NestJS"]
  },
  {
    name: "Cloud & DevOps",
    technologies: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"]
  },
  {
    name: "Database Systems",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Prisma"]
  },
  {
    name: "AI & Web3",
    technologies: ["OpenAI", "TensorFlow", "Solidity", "Web3.js", "Ethers.js"]
  }
];

export default function TechStack() {
  const easePremium: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section className="relative bg-background pt-32 pb-40 border-t border-white/5">
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <header className="mx-auto mb-24 text-center md:max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easePremium }}
            className="mb-6 text-4xl font-bold text-white md:text-6xl tracking-tight"
          >
            Our Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-glow">Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: easePremium }}
            className="text-xl text-secondary-text leading-relaxed font-light"
          >
            We leverage the most robust, scalable, and modern technologies to ensure your digital product is built for the future.
          </motion.p>
        </header>

        <div className="flex flex-col gap-16">
          {categories.map((category, index) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: easePremium }}
              className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16 border-b border-white/5 pb-12 last:border-0 last:pb-0"
            >
              <div className="md:w-64 shrink-0 pt-2">
                <h3 className="text-lg font-bold uppercase tracking-widest text-primary">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-4 flex-1">
                {category.technologies.map(tech => (
                  <div 
                    key={tech} 
                    className="group relative overflow-hidden rounded-full bg-surface/40 border border-white/10 px-8 py-3 transition-all duration-500 hover:bg-surface hover:border-primary/50 hover:shadow-[0_0_25px_rgba(45,140,255,0.2)] hover:scale-105 cursor-default"
                  >
                    <span className="relative z-10 text-sm font-semibold text-secondary-text transition-colors duration-300 group-hover:text-white">
                      {tech}
                    </span>
                    {/* Hover glow inside button */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

