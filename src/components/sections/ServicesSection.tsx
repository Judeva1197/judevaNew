"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  benefit: string;
  href: string;
}

const servicesList: ServiceCard[] = [
  {
    id: "01",
    title: "Building Management",
    description: "Comprehensive oversight of your building's physical structure, common areas, and daily operations.",
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
    description: "Responsive repair services and ongoing upkeep to ensure your site remains safe and presentable.",
    benefit: "Fast resolution to physical issues",
    href: "/services/property-maintenance",
  },
  {
    id: "04",
    title: "Strata Building Management",
    description: "Specialised support for owners corporations, ensuring harmony and compliance in residential complexes.",
    benefit: "Stress-free strata living",
    href: "/services/strata-building-management",
  },
  {
    id: "05",
    title: "Commercial Building Management",
    description: "Rigorous oversight of commercial assets focusing on tenant retention and system reliability.",
    benefit: "Maximise commercial returns",
    href: "/services/commercial-building-management",
  },
  {
    id: "06",
    title: "Building Maintenance",
    description: "Scheduled servicing of essential infrastructure including HVAC, plumbing, and electrical systems.",
    benefit: "Prevent costly system failures",
    href: "/services/building-maintenance",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-white py-20 md:py-28 text-neutral-900">
      {/* 50px viewport side padding */}
      <div className="w-full px-6 md:px-[50px]">
        <div className="mx-auto max-w-7xl">
          
          {/* Header Row */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight">
                03 / What we do
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.08]">
                Made for real life.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="max-w-[320px] font-sans text-sm sm:text-base leading-relaxed text-neutral-600 font-normal"
            >
              One considered approach across management, maintenance and the moments in between.
            </motion.p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service, i) => (
              <motion.article
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="group flex flex-col justify-between h-full rounded-[24px] bg-primary p-7 sm:p-9 text-white transition-all duration-300 hover:bg-highlight hover:-translate-y-2 cursor-pointer"
              >
                <div>
                  {/* Top Row: Number & Hover Arrow */}
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm font-extrabold text-highlight group-hover:text-white transition-colors duration-300">
                      {service.id}
                    </span>
                    <ArrowUpRight
                      size={24}
                      className="text-highlight transition-transform duration-300 group-hover:rotate-45 group-hover:text-white"
                    />
                  </div>

                  {/* Title (Highlight color in default, White on hover) */}
                  <h3 className="mt-8 font-display text-2xl font-bold leading-tight text-highlight group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description (White text) */}
                  <p className="mt-4 text-sm leading-relaxed text-white/90 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Section: Benefit & Learn More */}
                <div className="mt-8 pt-6 border-t border-white/15">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                    <CheckCircle2 size={16} className="text-highlight group-hover:text-white shrink-0 transition-colors duration-300" />
                    <span>{service.benefit}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-highlight group-hover:text-white transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
