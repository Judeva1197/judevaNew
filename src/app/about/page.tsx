"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ConstructionDnaSection } from "@/components/sections/ConstructionDnaSection";
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

        {/* Construction DNA Section */}
        <ConstructionDnaSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
