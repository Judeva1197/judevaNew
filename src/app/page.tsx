"use client";

import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ConstructionDnaSection } from "@/components/sections/ConstructionDnaSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-neutral-900">
      {/* Header / Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Padded Carousel Hero Section */}
        <HeroSection />

        {/* 01 / Our point of view (About Section) */}
        <AboutSection />

        {/* 02 / Why Choose Judeva Section */}
        <WhyChooseSection />

        {/* 03 / What We Do (Services Section) */}
        <ServicesSection />

        {/* 04 / How We Work (Process Section) */}
        <ProcessSection />

        {/* 05 / Built on Construction DNA Section */}
        <ConstructionDnaSection />

        {/* Client Testimonials Section */}
        <TestimonialsSection />

        {/* 06 / Common Questions (FAQ Section) */}
        <FaqSection />

        {/* 07 / Let's Talk (Contact Section & Proposal Form) */}
        <ContactSection />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
