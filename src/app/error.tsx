"use client";

import { useEffect } from "react";
import { AlertOctagon } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#020305] text-center p-6">
      <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-red-500/10 text-red-500 border border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.2)]">
        <AlertOctagon size={48} />
      </div>
      
      <h1 className="text-4xl font-bold text-white tracking-tight mb-4">A Runtime Exception Occurred</h1>
      
      <p className="text-lg text-secondary-text font-light mb-12 max-w-lg">
        An unexpected error occurred in the application layer. Our engineering team has been notified of the exception.
      </p>
      
      <button 
        onClick={() => reset()}
        className="rounded-full bg-primary px-8 py-4 font-bold text-white hover:bg-glow transition-all shadow-[0_0_30px_rgba(45,140,255,0.3)]"
      >
        Attempt Recovery
      </button>
    </main>
  );
}

