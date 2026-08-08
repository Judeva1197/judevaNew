"use client";

import React from "react";
import { MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

const serviceAreas = [
  {
    region: "Sydney CBD & Inner City",
    description: "High-density commercial towers, luxury residential strata, and heritage property maintenance.",
    suburbs: ["Sydney CBD", "Barangaroo", "Surry Hills", "Pyrmont", "Ultimo", "Darlinghurst"],
  },
  {
    region: "Inner West",
    description: "Boutique residential complexes, converted heritage sites, and community strata management.",
    suburbs: ["Merrylands", "Parramatta", "Strathfield", "Burwood", "Newtown", "Leichhardt"],
  },
  {
    region: "North Shore & Northern Beaches",
    description: "Premium residential towers, corporate parks, and waterfront strata developments.",
    suburbs: ["North Sydney", "Chatswood", "St Leonards", "Manly", "Mosman", "Macquarie Park"],
  },
  {
    region: "Eastern Suburbs",
    description: "High-end residential strata, coastal apartment blocks, and mixed-use commercial sites.",
    suburbs: ["Bondi", "Double Bay", "Edgecliff", "Coogee", "Randwick", "Rose Bay"],
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-neutral-900">
      <Navbar />

      <main className="flex-1">
        {/* Service Areas Hero */}
        <section className="w-full py-16 md:py-24 bg-primary text-white">
          <div className="w-full px-6 md:px-[50px]">
            <div className="mx-auto max-w-4xl text-center">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight">
                Greater Sydney Coverage
              </span>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Service Areas Across Greater Sydney
              </h1>
              <p className="mt-6 font-sans text-lg sm:text-xl text-neutral-200 leading-relaxed font-normal">
                Rapid response, local trade networks, and dedicated onsite management across Sydney CBD, Inner West, North Shore, and major commercial hubs.
              </p>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="w-full bg-white py-20 md:py-28 text-neutral-900">
          <div className="w-full px-6 md:px-[50px]">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {serviceAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="rounded-[24px] bg-[#FFF8F3] p-8 flex flex-col justify-between"
                  >
                    <div>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-highlight">
                        <MapPin size={24} />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-primary mb-2">
                        {area.region}
                      </h3>
                      <p className="font-sans text-sm text-neutral-700 leading-relaxed mb-6">
                        {area.description}
                      </p>

                      <div className="pt-4 border-t border-neutral-200">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                          Key Suburbs Serviced
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {area.suburbs.map((suburb, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary border border-neutral-200/80"
                            >
                              <CheckCircle2 size={12} className="text-highlight" />
                              {suburb}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
