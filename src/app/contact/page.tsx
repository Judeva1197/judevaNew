"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-neutral-900">
      <Navbar />

      <main className="flex-1">
        <ContactSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
