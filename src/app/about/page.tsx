"use client";

import React from "react";
import { Award, FileCheck2, UserCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { FounderNoteSection } from "@/components/sections/FounderNoteSection";
import { ConstructionDnaSection } from "@/components/sections/ConstructionDnaSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-neutral-900">
      <Navbar />

      <main className="flex-1">
        {/* About Section */}
        <AboutSection />

        {/* Founder Note Section */}
        <FounderNoteSection />

        {/* Qualification & Credentials Bar Section */}
        <section className="w-full bg-[#FFF8F3] py-12 text-neutral-900 border-y border-neutral-200/60">
          <div className="w-full px-6 md:px-[50px]">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight">
                  Verified Credentials & Licences
                </span>
                <h3 className="font-display text-2xl font-bold text-primary mt-1">
                  Builder-Led Qualifications
                </h3>
              </div>

              {/* Qualification Badges Bar */}
              <div className="flex flex-wrap gap-4 font-sans text-sm font-bold text-primary">
                <div className="flex items-center gap-2.5 rounded-2xl bg-white px-5 py-3.5 border border-neutral-200/80">
                  <Award size={20} className="text-highlight shrink-0" />
                  <span>NSW Builder&apos;s Licence</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-2xl bg-white px-5 py-3.5 border border-neutral-200/80">
                  <FileCheck2 size={20} className="text-highlight shrink-0" />
                  <span>Cert IV in Building & Construction</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-2xl bg-white px-5 py-3.5 border border-neutral-200/80">
                  <UserCheck size={20} className="text-highlight shrink-0" />
                  <span>Diploma in Building & Construction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Construction DNA Section */}
        <ConstructionDnaSection />

        {/* Site Portfolio Gallery Section (Lazy Loaded Images) */}
        <PortfolioSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
