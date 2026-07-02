import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Code2, Settings } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return { title: "Not Found" };
  
  return {
    title: `${service.title} | Exotic Co.`,
    description: service.description,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "provider": {
              "@type": "Organization",
              "name": "Exotic Co."
            },
            "description": service.description
          })
        }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <Link href="/services" className="inline-flex items-center text-sm font-semibold text-secondary-text hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} className="mr-2" /> All Services
        </Link>

        {/* Hero */}
        <header className="mb-24 md:max-w-4xl">
          <h1 className="mb-6 text-5xl md:text-7xl font-bold text-white tracking-tight">{service.title}</h1>
          <p className="text-xl md:text-2xl text-secondary-text font-light leading-relaxed">
            {service.overview}
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Col */}
          <div className="space-y-16">
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <CheckCircle size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Business Benefits</h2>
              </div>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-secondary-text font-light">
                    <div className="h-2 w-2 rounded-full bg-primary" /> {benefit}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <Settings size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Engineering Process</h2>
              </div>
              <div className="space-y-6">
                {service.process.map((step, i) => (
                  <div key={i} className="flex items-center gap-6 rounded-[1.5rem] bg-surface/30 p-6 border border-white/5">
                    <div className="text-2xl font-bold text-white/20">0{i + 1}</div>
                    <div className="text-lg font-medium text-white">{step}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Col */}
          <div>
            <div className="sticky top-32 rounded-[2.5rem] bg-surface/30 p-10 border border-white/5 backdrop-blur-md">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <Code2 size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Core Technologies</h2>
              </div>
              <div className="flex flex-wrap gap-3 mb-12">
                {service.tech.map(t => (
                  <span key={t} className="rounded-full bg-white/5 border border-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/20 hover:border-primary/50 cursor-default">
                    {t}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-glow/10 p-8 border border-primary/30 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to architect this?</h3>
                <p className="text-secondary-text text-sm font-light mb-8">Speak with an engineering lead to discuss your specific requirements.</p>
                <Link href="/contact" className="inline-block w-full rounded-full bg-primary py-4 font-bold text-white transition-all hover:bg-glow hover:shadow-[0_0_20px_rgba(45,140,255,0.4)]">
                  Start Project
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
