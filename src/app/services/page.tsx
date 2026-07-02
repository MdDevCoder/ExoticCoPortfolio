import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { Metadata } from "next";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";

export const metadata: Metadata = {
  title: "Services & Capabilities | Exotic Co.",
  description: "Explore our world-class engineering capabilities, from AI integrations to enterprise Web3 ecosystems.",
};

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 mb-32">
        <header className="mb-20 md:max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Engineering <span className="text-primary italic">Capabilities</span>
          </h1>
          <p className="text-xl text-secondary-text font-light leading-relaxed">
            We are a full-stack engineering collective. We provide end-to-end solutions for enterprises that require uncompromising quality, security, and scalability.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group relative rounded-[2rem] bg-surface/30 p-8 md:p-10 border border-white/5 transition-all duration-500 hover:bg-surface/80 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(45,140,255,0.1)] overflow-hidden">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-primary border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_30px_rgba(45,140,255,0.4)]">
                <Code2 size={24} />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-white tracking-tight group-hover:text-glow transition-colors">{service.title}</h2>
              <p className="mb-8 text-secondary-text font-light leading-relaxed line-clamp-3">{service.description}</p>
              
              <div className="mt-auto flex items-center text-sm font-semibold text-white transition-colors group-hover:text-primary">
                Explore Capability <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>

              {/* Hover Glow */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-glow opacity-0 transition-all duration-700 ease-out group-hover:w-full group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>

      <Process />
      <TechStack />
    </main>
  );
}

