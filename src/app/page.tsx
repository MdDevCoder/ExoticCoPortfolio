/* eslint-disable */
import Hero from "@/components/sections/Hero";
import EnterpriseTrust from "@/components/sections/EnterpriseTrust";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TechStack from "@/components/sections/TechStack";
import Achievements from "@/components/sections/Achievements";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <EnterpriseTrust />
      <About />
      <Services />
      <Process />
      <FeaturedProjects />
      <TechStack />
      <Achievements />
      <Testimonials />
      <Contact />
    </main>
  );
}

