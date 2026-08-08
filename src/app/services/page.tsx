"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Building2, Wrench, ShieldCheck, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

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

const serviceLayersTable = [
  {
    layer: "Property Maintenance",
    focus: "Physical repair, upkeep, and reactive fixes to the building structure.",
    client: "All properties requiring hands-on trades work.",
    tasks: ["Fixing a leaking roof", "Replacing blown lighting", "Patching and painting walls"],
  },
  {
    layer: "Building Management",
    focus: "Daily operations, contractor coordination, and common area oversight.",
    client: "Residential strata complexes, medium commercial sites.",
    tasks: [
      "Supervising cleaners & gardeners",
      "Reporting to strata committees",
      "Managing resident communications",
    ],
  },
  {
    layer: "Facilities Management",
    focus: "Strategic system lifecycle, compliance, and preventative maintenance.",
    client: "Large strata towers, commercial office buildings, mixed-use.",
    tasks: [
      "HVAC preventative schedules",
      "Fire safety compliance (AFSS)",
      "Asset lifecycle planning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-neutral-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero with service.png Background */}
        <section className="w-full py-4 sm:py-6">
          <div className="w-full px-6 md:px-[50px]">
            <div className="relative min-h-[480px] sm:min-h-[520px] md:min-h-[560px] w-full overflow-hidden rounded-[15px] md:rounded-[24px] bg-neutral-900 flex items-center justify-center">
              
              {/* Background Image: service.png */}
              <Image
                src="/service.png"
                alt="Judeva Services Building Architecture"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />

              {/* Gradient Dark Overlay for Crisp White Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />

              {/* Hero Floating Content */}
              <div className="relative z-10 p-6 sm:p-10 md:p-16 max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5 text-highlight" />
                    <span>Comprehensive Property Care</span>
                  </div>

                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                    Building Management & Facilities Management Services
                  </h1>

                  <p className="mt-6 font-sans text-base sm:text-lg md:text-xl text-neutral-100 leading-relaxed font-normal max-w-3xl mx-auto">
                    Tailored, proactive operational support for Sydney&apos;s residential strata and commercial properties. We protect your asset so you don&apos;t have to worry about it.
                  </p>

                  <div className="mt-8 flex justify-center">
                    <Button
                      variant="highlight"
                      size="lg"
                      className="rounded-full gap-2 px-8 py-3.5 text-sm font-bold shadow-none hover:bg-highlight-dark transition-all"
                      onClick={() => (window.location.href = "#contact")}
                    >
                      <span>Request a proposal</span>
                      <ArrowUpRight size={16} />
                    </Button>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Educational Scope Section */}
        <section className="w-full bg-white py-20 md:py-28 text-neutral-900">
          <div className="w-full px-6 md:px-[50px]">
            <div className="mx-auto max-w-7xl">
              
              <div className="mx-auto max-w-3xl text-center mb-16">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight">
                  Operational Insight
                </p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
                  Understanding the Scope of Property Operations
                </h2>
                <p className="mt-4 font-sans text-base text-neutral-600 leading-relaxed">
                  Navigating the terminology of property operations can be confusing for strata committees and new commercial asset owners. While the terms are often used interchangeably, building management, facilities management, and property maintenance represent distinct, crucial layers of asset protection.
                </p>
              </div>

              {/* 3 Pillars Deep-Dive Cards */}
              <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mb-20">
                <div className="rounded-[24px] bg-[#FFF8F3] p-8 flex flex-col justify-between">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-highlight">
                      <Wrench size={24} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-primary mb-3">Property Maintenance</h3>
                    <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                      The hands-on execution of physical tasks—plumbing repairs, electrical fault fixes, and clearing gutters. Essential for keeping the physical fabric intact, though requires oversight to avoid becoming purely reactive.
                    </p>
                  </div>
                </div>

                <div className="rounded-[24px] bg-[#FFF8F3] p-8 flex flex-col justify-between">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-highlight">
                      <Building2 size={24} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-primary mb-3">Building Management</h3>
                    <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                      Acts as the coordinator and eyes on the ground. Supervises contractors, manages defect logs, coordinates resident move-ins, enforces by-laws, and ensures smooth day-to-day operations.
                    </p>
                  </div>
                </div>

                <div className="rounded-[24px] bg-[#FFF8F3] p-8 flex flex-col justify-between">
                  <div>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-highlight">
                      <ShieldCheck size={24} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-primary mb-3">Facilities Management</h3>
                    <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                      Elevates operations to a strategic level—overseeing system lifecycles, HVAC, fire safety (AFSS), and security. Highly analytical, focusing on energy efficiency and long-term capital planning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Layer Comparison Table */}
              <div className="overflow-x-auto rounded-[24px] bg-[#FFF8F3] p-6 sm:p-10">
                <h3 className="font-display text-2xl font-bold text-primary mb-6">Service Layers Comparison</h3>
                <table className="w-full text-left font-sans border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-300 text-xs font-bold uppercase tracking-wider text-neutral-600">
                      <th className="py-4 px-4">Service Layer</th>
                      <th className="py-4 px-4">Primary Focus</th>
                      <th className="py-4 px-4">Typical Client</th>
                      <th className="py-4 px-4">Example Tasks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-sm text-neutral-800 font-normal">
                    {serviceLayersTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/60 transition-colors">
                        <td className="py-5 px-4 font-bold text-primary">{row.layer}</td>
                        <td className="py-5 px-4 max-w-xs">{row.focus}</td>
                        <td className="py-5 px-4 max-w-xs">{row.client}</td>
                        <td className="py-5 px-4">
                          <ul className="space-y-1">
                            {row.tasks.map((task, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-highlight shrink-0" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </section>

        {/* Our Core Capabilities Grid */}
        <section className="w-full bg-[#FFF8F3] py-20 md:py-28 text-neutral-900">
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
                  <div
                    key={item.id}
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
                  </div>
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
