import Contact from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Exotic Co.",
  description: "Initiate a project with Exotic Co. We have the engineering firepower to bring your most ambitious ideas to life.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Contact />
    </main>
  );
}

