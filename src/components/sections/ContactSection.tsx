"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="w-full bg-white py-20 md:py-28 text-neutral-900">
      {/* 50px viewport side padding */}
      <div className="w-full px-6 md:px-[50px]">
        <div className="mx-auto max-w-7xl">
          
          {/* Padded Light Orange Form Outer Container */}
          <div className="rounded-[28px] bg-[#FFF8F3] p-8 sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20 items-start">
              
              {/* Left Column: Heading & Direct Contacts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight">
                  07 / Let’s talk
                </p>

                <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.02]">
                  A better building starts here.
                </h2>

                <p className="mt-6 max-w-md font-sans text-base sm:text-lg leading-relaxed text-neutral-700 font-normal">
                  Tell us a little about your property and we’ll arrange a free site assessment.
                </p>

                {/* Direct Contact Links */}
                <div className="mt-10 space-y-4 font-sans text-sm font-semibold text-primary">
                  <a
                    href="tel:0432800928"
                    className="flex items-center gap-3 transition-colors hover:text-highlight"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF0E6] text-highlight">
                      <Phone size={18} />
                    </div>
                    <span>0432 800 928</span>
                  </a>

                  <a
                    href="mailto:eddy@judeva.com.au"
                    className="flex items-center gap-3 transition-colors hover:text-highlight"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF0E6] text-highlight">
                      <Mail size={18} />
                    </div>
                    <span>eddy@judeva.com.au</span>
                  </a>

                  <div className="flex items-center gap-3 text-neutral-700 font-medium">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF0E6] text-highlight shrink-0">
                      <MapPin size={18} />
                    </div>
                    <span>90 Eddy Street, Merrylands West</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Proposal Form Card with PRIMARY Background */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              >
                <div className="rounded-[24px] bg-primary p-6 sm:p-8 font-sans text-white">
                  <h3 className="font-display text-2xl font-bold text-white">
                    Request a proposal
                  </h3>

                  {formSent ? (
                    <div className="mt-6 rounded-2xl bg-white/10 p-6 text-sm text-neutral-100 font-medium border border-white/20">
                      <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-highlight text-white">
                        <Check size={18} />
                      </div>
                      <h4 className="font-display text-base font-bold text-white mb-1">
                        Proposal Request Received
                      </h4>
                      <p className="text-neutral-200">
                        Thanks for reaching out. We&apos;ll be in touch within two business hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div>
                        <input
                          required
                          type="text"
                          placeholder="Your name"
                          className="w-full rounded-xl bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-neutral-300 border border-white/20 focus:border-highlight focus:bg-white/15 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <input
                          required
                          type="email"
                          placeholder="Email address"
                          className="w-full rounded-xl bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-neutral-300 border border-white/20 focus:border-highlight focus:bg-white/15 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          placeholder="Property suburb"
                          className="w-full rounded-xl bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-neutral-300 border border-white/20 focus:border-highlight focus:bg-white/15 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <select
                          defaultValue=""
                          className="w-full rounded-xl bg-white/10 px-4 py-3.5 text-sm text-neutral-200 border border-white/20 focus:border-highlight focus:bg-white/15 focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="" disabled className="text-neutral-900 bg-white">
                            What can we help with?
                          </option>
                          <option className="text-neutral-900 bg-white">Building management</option>
                          <option className="text-neutral-900 bg-white">Facilities management</option>
                          <option className="text-neutral-900 bg-white">Maintenance services</option>
                          <option className="text-neutral-900 bg-white">Onsite management</option>
                        </select>
                      </div>

                      <div>
                        <textarea
                          placeholder="Tell us a little more (optional)"
                          rows={3}
                          className="w-full rounded-xl bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-neutral-300 border border-white/20 focus:border-highlight focus:bg-white/15 focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="highlight"
                        className="w-full justify-center rounded-xl gap-2 py-3.5 text-sm font-bold shadow-none hover:bg-highlight-dark transition-all"
                      >
                        <span>Send enquiry</span>
                        <ArrowUpRight size={16} />
                      </Button>

                      <p className="text-center text-xs text-neutral-300 font-sans">
                        No obligation. Free initial consultation.
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
