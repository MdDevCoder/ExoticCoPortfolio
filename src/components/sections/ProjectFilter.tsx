"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Project = { id: string | number; slug: string; title: string; description: string; category: string; isFlagship?: boolean; branding?: { logo: string; alt: string; color: string; }; techStack?: string[]; };

export default function ProjectFilter({ categories, initialProjects }: { categories: string[], initialProjects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? initialProjects 
    : initialProjects.filter(p => p.category === activeCategory);

  
  const easePremium = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <div>
      {/* Filters */}
      <div className="mb-12 flex flex-wrap gap-3">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${activeCategory === category ? 'bg-primary text-white shadow-[0_0_20px_rgba(45,140,255,0.4)]' : 'bg-surface/50 text-secondary-text border border-white/5 hover:bg-surface hover:text-white'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: easePremium, delay: i * 0.05 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block h-full relative overflow-hidden rounded-[2.5rem] bg-surface/30 border border-white/5 p-10 transition-all duration-500 hover:bg-surface/60 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_rgba(45,140,255,0.15)]">
                
                {project.isFlagship && (
                  <div className="absolute top-8 right-8 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary border border-primary/20">
                    FLAGSHIP
                  </div>
                )}
                
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-secondary-text">{project.category}</p>
                      
                      {/* Logo Badge (Dynamic via Branding) */}
                      {project.branding && (
                        <motion.div 
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className={`relative flex items-center justify-center w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-full p-1.5 bg-white/[0.03] backdrop-blur-md border border-white/10 overflow-hidden ${project.branding.color === 'purple' ? 'shadow-[0_0_30px_rgba(168,85,247,0.3)]' : 'shadow-[0_0_30px_rgba(45,140,255,0.3)]'}`}
                        >
                           <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent mix-blend-overlay rounded-full pointer-events-none z-20" />
                           <div className={`absolute inset-0 blur-xl rounded-full z-0 ${project.branding.color === 'purple' ? 'bg-purple-500/20' : 'bg-primary/20'}`} />
                           <Image 
                            src={project.branding.logo} 
                            alt={project.branding.alt} 
                            fill 
                            sizes="100px"
                            className={`object-cover p-2 rounded-full relative z-10 ${project.branding.color === 'purple' ? 'drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'drop-shadow-[0_0_10px_rgba(45,140,255,0.5)]'}`}
                           />
                        </motion.div>
                      )}
                    </div>
                    
                    <h3 className={`mb-4 text-3xl md:text-4xl font-bold tracking-tight transition-colors ${project.branding?.color === 'purple' ? 'text-white group-hover:text-purple-400' : 'text-white group-hover:text-glow'}`}>{project.title}</h3>
                    <p className="mb-8 text-lg text-secondary-text font-light leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="mt-auto pt-8 border-t border-white/5">
                    <div className="flex flex-wrap gap-2 mb-8">
                       {project.techStack?.slice(0, 4).map((tech: string) => (
                         <span key={tech} className={`rounded-lg bg-black/40 px-3 py-1.5 text-xs font-medium text-white/70 border border-white/5 transition-colors group-hover:text-white ${project.branding?.color === 'purple' ? 'group-hover:border-purple-500/30' : 'group-hover:border-white/10'}`}>
                           {tech}
                         </span>
                       ))}
                    </div>
                    
                    <div className={`inline-flex items-center text-sm font-bold text-white transition-colors ${project.branding?.color === 'purple' ? 'group-hover:text-purple-400' : 'group-hover:text-primary'}`}>
                      View Live Demo <ArrowUpRight size={18} className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

