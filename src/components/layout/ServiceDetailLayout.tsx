"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export interface FeatureCard {
  title: string;
  description: string;
}

export interface ServiceDetailProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  features: FeatureCard[];
  contentSections: {
    heading: string;
    paragraphs: string[];
    listItems?: string[];
  }[];
}

export function ServiceDetailLayout({
  title,
  subtitle,
  heroImage = "/service.png",
  features,
  contentSections,
}: ServiceDetailProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-neutral-900">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Padded Background Image (No Dark Overlay) */}
        <section className="w-full py-4 sm:py-6">
          <div className="w-full px-6 md:px-[50px]">
            <div className="relative min-h-[460px] sm:min-h-[500px] w-full overflow-hidden rounded-[15px] md:rounded-[24px] bg-neutral-900 flex items-center justify-center">
              
              <Image
                src={heroImage}
                alt={title}
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />

              <div className="relative z-10 p-6 sm:p-10 md:p-16 max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-white hover:text-highlight transition-colors mb-4 bg-slate-900/80 px-4 py-1.5 rounded-full backdrop-blur-md"
                  >
                    <ArrowLeft size={14} />
                    <span>Back to Services</span>
                  </Link>

                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] bg-slate-900/60 p-4 rounded-2xl backdrop-blur-md inline-block">
                    {title}
                  </h1>

                  <p className="mt-6 font-sans text-base sm:text-lg md:text-xl text-white leading-relaxed font-medium max-w-3xl mx-auto bg-slate-900/60 p-4 rounded-2xl backdrop-blur-md">
                    {subtitle}
                  </p>

                  <div className="mt-8 flex justify-center">
                    <Button
                      variant="highlight"
                      size="lg"
                      className="rounded-full gap-2 px-8 py-3.5 text-sm font-bold shadow-none hover:bg-highlight-dark transition-all"
                      onClick={() => (window.location.href = "#contact")}
                    >
                      <span>Request a Proposal</span>
                      <ArrowUpRight size={16} />
                    </Button>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        {features && features.length > 0 && (
          <section className="w-full bg-[#FFF8F3] py-16 text-neutral-900">
            <div className="w-full px-6 md:px-[50px]">
              <div className="mx-auto max-w-7xl">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="rounded-[20px] bg-white p-7 shadow-none flex flex-col justify-between"
                    >
                      <div>
                        <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF0E6] text-highlight">
                          <Sparkles size={18} />
                        </div>
                        <h3 className="font-display text-xl font-bold text-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Detailed Body Copy Sections */}
        <section className="w-full bg-white py-20 md:py-28 text-neutral-900">
          <div className="w-full px-6 md:px-[50px]">
            <div className="mx-auto max-w-4xl space-y-16">
              {contentSections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="font-sans text-base sm:text-lg leading-relaxed text-neutral-700 font-normal"
                    >
                      {p}
                    </p>
                  ))}

                  {section.listItems && section.listItems.length > 0 && (
                    <div className="pt-4 grid gap-3 grid-cols-1 sm:grid-cols-2">
                      {section.listItems.map((item, lIdx) => (
                        <div
                          key={lIdx}
                          className="flex items-start gap-3 rounded-xl bg-[#FFF8F3] p-4 text-sm font-semibold text-primary"
                        >
                          <CheckCircle2 size={18} className="text-highlight shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reusable FAQ Section */}
        <FaqSection />

        {/* Reusable Contact Proposal Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
