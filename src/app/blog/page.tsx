/* eslint-disable */
import { Metadata } from "next";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights & Engineering Blog | Exotic Co.",
  description: "Deep technical insights, architecture breakdowns, and engineering philosophies from the Exotic Co. team.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-40 pb-24 flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 text-primary shadow-[0_0_40px_rgba(45,140,255,0.3)]">
          <BookOpen size={40} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          Engineering <span className="text-primary italic">Insights</span>
        </h1>
        <p className="text-xl text-secondary-text font-light mb-12">
          We are preparing a series of deep technical breakdowns on cloud architecture, AI integrations, and Web3 security.
        </p>
        
        <div className="rounded-[2rem] bg-surface/30 p-10 border border-white/5 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
          <p className="text-secondary-text mb-8">Subscribe to be notified when we publish our first architectural deep dive.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your enterprise email" 
              className="flex-1 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-white outline-none focus:border-primary"
            />
            <button className="rounded-full bg-primary px-8 py-4 font-bold text-white hover:bg-glow transition-all">
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="mt-16">
          <Link href="/" className="text-sm font-semibold uppercase tracking-widest text-primary hover:text-white transition-colors">
            Return to Headquarters
          </Link>
        </div>
      </div>
    </main>
  );
}

