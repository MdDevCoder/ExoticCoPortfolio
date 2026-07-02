import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Not Found | Exotic Co.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#020305] text-center p-6">
      <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-red-500/10 text-red-500 border border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.2)]">
        <AlertTriangle size={48} />
      </div>
      
      <h1 className="text-6xl font-bold text-white tracking-tight mb-4">404</h1>
      <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
      
      <p className="text-xl text-secondary-text font-light mb-12 max-w-lg">
        The route you are looking for has been deprecated, moved, or does not exist within our current architecture.
      </p>
      
      <Link href="/" className="rounded-full bg-primary px-8 py-4 font-bold text-white hover:bg-glow transition-all shadow-[0_0_30px_rgba(45,140,255,0.3)]">
        Return to Headquarters
      </Link>
    </main>
  );
}

