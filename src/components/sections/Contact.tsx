/* eslint-disable */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

const serviceOptions = [
  "AI Solutions", "Web Development", "Mobile Apps", "UI/UX Design", "Cloud & DevOps", "Custom Software", "Blockchain & Web3"
];

const budgetOptions = ["<$10k", "$10k - $50k", "$50k - $100k", "$100k+"];
const timelineOptions = ["< 1 Month", "1-3 Months", "3-6 Months", "6+ Months"];

export default function Contact() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const easePremium = [0.16, 1, 0.3, 1] as any // eslint-disable-line @typescript-eslint/no-explicit-any
  const [formState, setFormState] = useState({
    name: "", email: "", services: [] as string[], budget: "", timeline: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setFormState(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-[#020305] pt-32 pb-40">
      <div className="absolute top-0 right-0 h-full w-[60%] bg-gradient-to-l from-primary/10 to-transparent mix-blend-screen pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easePremium }}
            className="sticky top-32"
          >
            <h2 className="mb-6 text-5xl font-bold text-white md:text-7xl tracking-tight leading-[1.1]">
              Let&apos;s engineer the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-glow">Future.</span>
            </h2>
            <p className="mb-14 text-xl text-secondary-text max-w-lg font-light leading-relaxed">
              Whether you&apos;re a visionary startup or an established enterprise, we have the engineering firepower to bring your most ambitious ideas to life.
            </p>
            
            <div className="space-y-8">
              <div className="group flex items-center gap-6 cursor-pointer">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_30px_rgba(45,140,255,0.3)]">
                  <Mail strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-secondary-text mb-1 transition-colors group-hover:text-white">Email Us</p>
                  <p className="text-lg font-medium text-white">exoticzack01@gmail.com</p>
                  <p className="text-sm text-secondary-text mt-1">Response time: &lt; 24 hours</p>
                </div>
              </div>
              <div className="group flex items-center gap-6 cursor-pointer">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_30px_rgba(45,140,255,0.3)]">
                  <MapPin strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-secondary-text mb-1 transition-colors group-hover:text-white">Headquarters</p>
                  <p className="text-lg font-medium text-white">Global Remote</p>
                  <p className="text-sm text-secondary-text mt-1">Available across all timezones</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: easePremium }}
          >
            <div className="relative rounded-[2.5rem] bg-surface/60 border border-white/10 p-8 sm:p-10 backdrop-blur-md shadow-[0_30px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: easePremium }}
                    className="flex flex-col gap-8" 
                    onSubmit={handleSubmit}
                  >
                    <h3 className="text-3xl font-bold text-white tracking-tight">Initiate a Project</h3>
                    
                    {/* Basic Info */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex flex-col gap-2.5">
                        <label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider text-secondary-text ml-1">Name</label>
                        <input 
                          type="text" id="name" required
                          value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})}
                          className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-primary focus:bg-white/[0.08]"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider text-secondary-text ml-1">Email</label>
                        <input 
                          type="email" id="email" required
                          value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})}
                          className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-primary focus:bg-white/[0.08]"
                          placeholder="jane@enterprise.com"
                        />
                      </div>
                    </div>
                    
                    {/* Services Checklist */}
                    <div className="flex flex-col gap-3">
                      <label className="text-sm font-semibold uppercase tracking-wider text-secondary-text ml-1">Services Required</label>
                      <div className="flex flex-wrap gap-3">
                        {serviceOptions.map(service => (
                          <button
                            key={service} type="button"
                            onClick={() => toggleService(service)}
                            className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${formState.services.includes(service) ? 'bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(45,140,255,0.2)]' : 'bg-white/5 border-white/10 text-secondary-text hover:bg-white/10 hover:text-white'}`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Selectors */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex flex-col gap-3">
                        <label className="text-sm font-semibold uppercase tracking-wider text-secondary-text ml-1">Budget</label>
                        <div className="grid grid-cols-2 gap-2">
                          {budgetOptions.map(opt => (
                            <button
                              key={opt} type="button"
                              onClick={() => setFormState({...formState, budget: opt})}
                              className={`rounded-xl border py-2.5 text-sm font-medium transition-all duration-300 ${formState.budget === opt ? 'bg-primary/20 border-primary text-white' : 'bg-white/5 border-white/10 text-secondary-text hover:bg-white/10'}`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <label className="text-sm font-semibold uppercase tracking-wider text-secondary-text ml-1">Timeline</label>
                        <div className="grid grid-cols-2 gap-2">
                          {timelineOptions.map(opt => (
                            <button
                              key={opt} type="button"
                              onClick={() => setFormState({...formState, timeline: opt})}
                              className={`rounded-xl border py-2.5 text-sm font-medium transition-all duration-300 ${formState.timeline === opt ? 'bg-primary/20 border-primary text-white' : 'bg-white/5 border-white/10 text-secondary-text hover:bg-white/10'}`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2.5">
                      <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider text-secondary-text ml-1">Project Details</label>
                      <textarea 
                        id="message" rows={4} required
                        value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-primary focus:bg-white/[0.08] resize-none"
                        placeholder="Tell us about the scale of your challenge..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-5 font-bold text-white shadow-[0_0_40px_rgba(45,140,255,0.3)] transition-all duration-500 hover:scale-[1.02] hover:bg-glow hover:shadow-[0_0_60px_rgba(86,168,255,0.5)]"
                    >
                      <span className="text-lg">Transmit Request</span>
                      <Send size={20} className="transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: easePremium }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                      className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 text-primary shadow-[0_0_50px_rgba(45,140,255,0.3)]"
                    >
                      <CheckCircle size={48} />
                    </motion.div>
                    <h3 className="mb-4 text-3xl font-bold text-white tracking-tight">Transmission Received.</h3>
                    <p className="text-lg text-secondary-text font-light max-w-sm">
                      Thank you for reaching out. An engineering lead will review your requirements and respond within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-10 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

