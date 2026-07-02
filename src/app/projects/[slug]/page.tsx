import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Zap } from "lucide-react";
import { Metadata } from "next";
import { motion } from "framer-motion";
import ClientMotionDiv from "@/components/ClientMotionDiv";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return { title: "Not Found" };
  
  return {
    title: `${project.title} | Case Study | Exotic Co.`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.description,
      images: project.branding?.ogImage ? [{ url: project.branding.ogImage, width: 800, height: 800, alt: project.branding.alt }] : [],
    }
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Dynamic branding colors
  const isPurple = project.branding?.color === "purple";
  const glowColor = isPurple ? "bg-purple-500/20" : "bg-primary/20";
  const shadowColor = isPurple ? "shadow-[0_0_60px_rgba(168,85,247,0.4)]" : "shadow-[0_0_60px_rgba(45,140,255,0.4)]";
  const dropShadow = isPurple ? "drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" : "drop-shadow-[0_0_15px_rgba(45,140,255,0.5)]";

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": project.title,
            "applicationCategory": project.category,
            "operatingSystem": "Web",
            "description": project.description,
            "url": project.link || "https://exotic.co"
          })
        }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <Link href="/projects" className="inline-flex items-center text-sm font-semibold text-secondary-text hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} className="mr-2" /> Back to Projects
        </Link>

        {/* Hero */}
        <header className="mb-32 relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-surface/80 to-[#050B14] border border-white/5 p-12 lg:p-24 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 max-w-4xl">
              <p className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">{project.category}</p>
              <h1 className="mb-8 text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tighter leading-[1]">{project.title}</h1>
              <p className="text-xl md:text-3xl text-secondary-text font-light max-w-4xl leading-relaxed">
                {project.tagline || project.description}
              </p>
              
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className={`mt-12 group inline-flex h-16 items-center gap-3 rounded-full px-10 font-bold text-white transition-all hover:scale-[1.02] ${isPurple ? 'bg-purple-600 hover:bg-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]' : 'bg-primary hover:bg-glow hover:shadow-[0_0_40px_rgba(45,140,255,0.4)]'}`}>
                  <span className="text-lg">Launch Live Platform</span>
                  <ArrowUpRight size={22} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              )}
            </div>
            
            {/* Logo Badge */}
            {project.branding && (
              <ClientMotionDiv 
                className={`hidden lg:flex relative items-center justify-center w-[140px] h-[140px] xl:w-[180px] xl:h-[180px] rounded-full p-2 bg-white/[0.03] backdrop-blur-md border border-white/10 ${shadowColor} overflow-hidden`}
              >
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent mix-blend-overlay rounded-full pointer-events-none z-20" />
                 <div className={`absolute inset-0 ${glowColor} blur-2xl rounded-full z-0`} />
                 <Image 
                  src={project.branding.logo} 
                  alt={project.branding.alt} 
                  fill 
                  sizes="(max-width: 1024px) 140px, 180px"
                  className={`object-cover p-3 rounded-full relative z-10 ${dropShadow}`}
                 />
              </ClientMotionDiv>
            )}
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8 space-y-24">
            
            {project.problem && project.solution && (
              <>
                <section>
                  <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
                  <p className="text-xl text-secondary-text font-light leading-relaxed">{project.problem}</p>
                </section>
                <section>
                  <h2 className="text-3xl font-bold text-white mb-6">The Engineering Solution</h2>
                  <p className="text-xl text-secondary-text font-light leading-relaxed">{project.solution}</p>
                </section>
              </>
            )}

            {project.features && (
              <section>
                <h2 className="text-3xl font-bold text-white mb-8">Architectural Features</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="rounded-[2rem] bg-surface/30 p-8 border border-white/5 backdrop-blur-md transition-colors hover:bg-surface/50">
                      <div className={isPurple ? "text-purple-400 mb-6" : "text-primary mb-6"}>
                        <Zap size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-secondary-text font-light leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12 rounded-[2.5rem] bg-surface/30 p-10 border border-white/5 backdrop-blur-md">
              
              {project.results && (
                <div>
                  <h3 className={`text-sm font-bold uppercase tracking-widest ${isPurple ? "text-purple-400" : "text-primary"} mb-6`}>Performance Metrics</h3>
                  <div className="space-y-8">
                    {project.results.map((res, idx) => (
                      <div key={idx}>
                        <div className="text-4xl font-bold text-white mb-2 tracking-tight">{res.value}</div>
                        <div className="text-sm text-secondary-text font-medium">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.results && <div className="h-px w-full bg-white/5" />}

              <div>
                <h3 className={`text-sm font-bold uppercase tracking-widest ${isPurple ? "text-purple-400" : "text-primary"} mb-6`}>Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map(tech => (
                    <span key={tech} className="rounded-xl bg-black/40 border border-white/10 px-5 py-2.5 text-sm font-medium text-white/90">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
