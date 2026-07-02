import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Testimonials from "@/components/sections/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Exotic Co.",
  description: "Learn about Exotic Co.'s mission, values, and our uncompromising standard of engineering excellence.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          The <span className="text-primary italic">Exotic</span> Standard
        </h1>
        <p className="text-xl text-secondary-text font-light max-w-3xl mx-auto leading-relaxed">
          We are a collective of elite software engineers, designers, and architects. Our mission is to build the digital infrastructure of tomorrow.
        </p>
      </div>

      <About />
      <Achievements />
      <Testimonials />
    </main>
  );
}

