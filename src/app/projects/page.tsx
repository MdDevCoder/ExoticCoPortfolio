import { projectCategories, projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import ProjectFilter from "@/components/sections/ProjectFilter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Exotic Co.",
  description: "Explore our portfolio of enterprise-grade software, AI applications, and Web3 ecosystems.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-glow">Work</span>
          </h1>
          <p className="text-xl text-secondary-text font-light max-w-2xl">
            A selection of our most ambitious engineering projects, ranging from intelligent AI platforms to decentralized ecosystems.
          </p>
        </header>

        <ProjectFilter categories={projectCategories} initialProjects={projects} />
      </div>
    </main>
  );
}
