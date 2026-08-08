"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Building2, Wrench, ShieldCheck, Sparkles, Clock, CalendarCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { BuildingHealthCheckSection } from "@/components/sections/BuildingHealthCheckSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const packageTiers = [
  {
    icon: Building2,
    badge: "Full-Time Presence",
    title: "Full-Time Building & Facilities Management",
    description:
      "Dedicated on-site management for larger complexes, strata schemes and commercial buildings. We oversee shared facilities, contractor coordination, compliance, and day-to-day operations — backed by real construction knowledge, not just administrative oversight.",
    highlights: [
      "Dedicated daily on-site presence",
      "Comprehensive contractor & trade oversight",
      "Full WHS & Annual Fire Safety (AFSS) management",
      "Resident, tenant & strata committee liaison",
    ],
    ctaText: "Request a Tailored Quote",
    enquiryType: "Full-Time Building & Facilities Management",
  },
  {
    icon: Clock,
    badge: "Scheduled Site Visits",
    title: "Part-Time Site Management",
    description:
      "Designed for smaller complexes that need consistent, professional oversight without a full-time presence. We attend on a scheduled basis (e.g. weekly or fortnightly) to manage shared facilities, coordinate contractors, and keep your site compliant and well maintained — a cost-effective solution for smaller strata and commercial sites.",
    highlights: [
      "Scheduled weekly or fortnightly site visits",
      "Common area maintenance & cleaning audits",
      "Contractor work verification & invoice checks",
      "Cost-effective oversight for smaller schemes",
    ],
    ctaText: "Request a Tailored Quote",
    enquiryType: "Part-Time Site Management",
  },
  {
    icon: CalendarCheck,
    badge: "One-Time Assessment",
    title: "Building Health Check",
    description:
      "A one-time, full site walkthrough and assessment conducted from a builder and senior Building Manager’s perspective. We identify existing or emerging issues across shared facilities and common areas, providing committees and strata managers with a clear, independent report — ideal before switching providers, ahead of AGM planning, or for peace of mind.",
    highlights: [
      "Full common area & plant room walkthrough",
      "Independent builder diagnostic report",
      "Early structural defect & risk identification",
      "Prioritized maintenance & AGM planning roadmap",
    ],
    ctaText: "Request a Health Check",
    enquiryType: "Building Health Check Request",
  },
];

const allCapabilities = [
  {
    id: "01",
    title: "Building Management",
    description: "Comprehensive oversight of your building's physical structure and daily operations.",
    benefit: "Protect your property value",
    href: "/services/building-management",
  },
  {
    id: "02",
    title: "Facilities Management",
    description: "Strategic management of building systems, compliance, and preventative maintenance programs.",
    benefit: "Optimise operational efficiency",
    href: "/services/facilities-management",
  },
  {
    id: "03",
    title: "Property Maintenance",
    description: "Responsive repair services and ongoing upkeep to ensure your site remains safe.",
    benefit: "Fast resolution to physical issues",
    href: "/services/property-maintenance",
  },
  {
    id: "04",
    title: "Building Maintenance",
    description: "Scheduled servicing of essential infrastructure including HVAC, plumbing, and electrical.",
    benefit: "Prevent costly system failures",
    href: "/services/building-maintenance",
  },
  {
    id: "05",
    title: "Strata Building Management",
    description: "Specialised support for owners corporations, ensuring harmony and compliance.",
    benefit: "Stress-free strata living",
    href: "/services/strata-building-management",
  },
  {
    id: "06",
    title: "Commercial Building Mgt",
    description: "Rigorous oversight of commercial assets focusing on tenant retention and yield.",
    benefit: "Maximise commercial returns",
    href: "/services/commercial-building-mgt",
  },
  {
    id: "07",
    title: "Residential Building Mgt",
    description: "Tailored operations for residential towers, focusing on community and safety.",
    benefit: "Enhance resident satisfaction",
    href: "/services/residential-building-mgt",
  },
  {
    id: "08",
    title: "Onsite Building Manager",
    description: "A dedicated, daily physical presence to manage large or complex properties.",
    benefit: "Immediate issue resolution",
    href: "/services/onsite-building-manager",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-neutral-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero with service.png Background (No Dark Overlay) */}
        <section className="w-full py-4 sm:py-6">
          <div className="w-full px-6 md:px-[50px]">
            <div className="relative min-h-[480px] sm:min-h-[520px] md:min-h-[560px] w-full overflow-hidden rounded-[15px] md:rounded-[24px] bg-neutral-900 flex items-center justify-center">
              
              {/* Background Image: service.png without overlay */}
              <Image
                src="/service.png"
                alt="Judeva Services Building Architecture"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />

              {/* Hero Floating Content */}
              <div className="relative z-10 p-6 sm:p-10 md:p-16 max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5 text-highlight" />
                    <span>Builder-Led Property Care</span>
                  </div>

                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                    Building Management & Facilities Management Services
                  </h1>

                  <p className="mt-6 font-sans text-base sm:text-lg md:text-xl text-white leading-relaxed font-medium max-w-3xl mx-auto bg-slate-900/60 p-4 rounded-2xl backdrop-blur-md">
                    Tailored, proactive operational support for Sydney&apos;s residential strata and commercial properties. We protect your asset so you don&apos;t have to worry about it.
                  </p>

                  <div className="mt-8 flex justify-center">
                    <Button
                      variant="highlight"
                      size="lg"
                      className="rounded-full gap-2 px-8 py-3.5 text-sm font-bold shadow-none hover:bg-highlight-dark transition-all"
                      onClick={() => (window.location.href = "#packages")}
                    >
                      <span>Explore Service Packages</span>
                      <ArrowUpRight size={16} />
                    </Button>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Service Package Tiers Section */}
        <section id="packages" className="w-full bg-white py-20 md:py-28 text-neutral-900">
          <div className="w-full px-6 md:px-[50px]">
            <div className="mx-auto max-w-7xl">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight">
                  Flexible Engagement Options
                </p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
                  Service Packages & Engagement Tiers
                </h2>
                <p className="mt-4 font-sans text-base text-neutral-600 leading-relaxed">
                  Every site is unique. We scale our operational scope precisely to your property&apos;s size, complexity, and compliance requirements.
                </p>
              </div>

              {/* 3 Package Tier Cards */}
              <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                {packageTiers.map((tier, idx) => {
                  const Icon = tier.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-[24px] bg-[#FFF8F3] p-8 flex flex-col justify-between transition-all duration-300 hover:bg-primary hover:text-white group cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-highlight group-hover:bg-highlight group-hover:text-white transition-colors duration-300">
                            <Icon size={24} />
                          </div>
                          <span className="rounded-full bg-white/80 group-hover:bg-white/15 px-3 py-1 text-xs font-bold text-primary group-hover:text-white transition-colors duration-300">
                            {tier.badge}
                          </span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300 mb-3">
                          {tier.title}
                        </h3>

                        <p className="font-sans text-sm text-neutral-700 group-hover:text-neutral-200 leading-relaxed mb-6">
                          {tier.description}
                        </p>

                        <div className="space-y-2.5 pt-4 border-t border-neutral-200/80 group-hover:border-white/20 transition-colors">
                          {tier.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-2.5 text-xs font-semibold text-neutral-800 group-hover:text-neutral-100">
                              <CheckCircle2 size={14} className="text-highlight group-hover:text-white shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 pt-6">
                        <Button
                          variant="highlight"
                          className="w-full justify-center rounded-xl gap-2 py-3 text-sm font-bold shadow-none group-hover:bg-white group-hover:text-primary transition-all"
                          onClick={() => {
                            const contactSection = document.getElementById("contact");
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                        >
                          <span>{tier.ctaText}</span>
                          <ArrowUpRight size={16} />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* Feature Callout: Building Health Check */}
        <BuildingHealthCheckSection />

        {/* Full Capabilities Grid */}
        <section className="w-full bg-white py-20 md:py-28 text-neutral-900">
          <div className="w-full px-6 md:px-[50px]">
            <div className="mx-auto max-w-7xl">
              
              <div className="mb-14 text-center max-w-3xl mx-auto">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight">
                  Full Service Range
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
                  Our Core Capabilities
                </h2>
                <p className="mt-4 font-sans text-base text-neutral-600">
                  Expert solutions designed to protect your investment, ensure compliance, and create a seamless experience for occupants.
                </p>
              </div>

              {/* 8 Core Capability Cards */}
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {allCapabilities.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group flex flex-col justify-between h-full rounded-[24px] bg-primary p-7 text-white transition-all duration-300 hover:bg-highlight hover:-translate-y-2 cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-sans text-sm font-extrabold text-highlight group-hover:text-white transition-colors duration-300">
                          {item.id}
                        </span>
                        <ArrowUpRight
                          size={20}
                          className="text-highlight transition-transform duration-300 group-hover:rotate-45 group-hover:text-white"
                        />
                      </div>

                      <h3 className="font-display text-xl font-bold leading-tight text-highlight group-hover:text-white transition-colors duration-300 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-xs leading-relaxed text-white/90 font-normal mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/15">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-white mb-2">
                        <CheckCircle2 size={14} className="text-highlight group-hover:text-white shrink-0 transition-colors" />
                        <span>{item.benefit}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

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
