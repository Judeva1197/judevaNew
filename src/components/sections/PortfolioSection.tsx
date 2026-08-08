"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Building2 } from "lucide-react";

interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  category: string;
  location: string;
}

const portfolioImages: PortfolioItem[] = [
  { id: 1, src: "/portfolio/1.jpeg", title: "Luxury Strata Complex", category: "Residential Strata", location: "Inner West, Sydney" },
  { id: 2, src: "/portfolio/2.jpeg", title: "Commercial Office Tower", category: "Commercial FM", location: "Sydney CBD" },
  { id: 3, src: "/portfolio/3.jpeg", title: "Mixed-Use Precinct", category: "Onsite Management", location: "Parramatta" },
  { id: 4, src: "/portfolio/4.jpeg", title: "High-Rise Apartment Tower", category: "Building Management", location: "North Shore" },
  { id: 5, src: "/portfolio/5.jpeg", title: "Boutique Residential Scheme", category: "Facilities Management", location: "Eastern Suburbs" },
  { id: 6, src: "/portfolio/6.jpeg", title: "Corporate Business Park", category: "Commercial FM", location: "Macquarie Park" },
  { id: 7, src: "/portfolio/7.jpeg", title: "Waterfront Strata Estate", category: "Property Maintenance", location: "Manly" },
  { id: 8, src: "/portfolio/8.jpeg", title: "Heritage Building Upgrade", category: "Builder Oversight", location: "Surry Hills" },
  { id: 9, src: "/portfolio/9.jpeg", title: "Modern Apartment Complex", category: "Onsite Management", location: "Strathfield" },
  { id: 10, src: "/portfolio/10.jpeg", title: "Commercial Hub & Retail", category: "Facilities Management", location: "Chatswood" },
  { id: 11, src: "/portfolio/11.jpeg", title: "Townhome Community Scheme", category: "Strata Management", location: "Merrylands" },
  { id: 12, src: "/portfolio/12.jpeg", title: "Premium Residential Tower", category: "Building Management", location: "Rhodes" },
];

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="w-full bg-[#FFF8F3] py-20 md:py-28 text-neutral-900">
      {/* 50px viewport side padding */}
      <div className="w-full px-6 md:px-[50px]">
        <div className="mx-auto max-w-7xl">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight"
            >
              Our Site Portfolio
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-primary tracking-tight"
            >
              Managed Properties & Sites
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 font-sans text-base sm:text-lg text-neutral-600 font-normal leading-relaxed"
            >
              A showcase of Sydney residential strata complexes, commercial towers, and mixed-use properties under Judeva&apos;s builder-led stewardship.
            </motion.p>
          </div>

          {/* 12 Image Responsive Gallery Grid with Lazy Loading */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {portfolioImages.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                onClick={() => setSelectedImage(item)}
                className="group relative h-[280px] w-full overflow-hidden rounded-[20px] bg-neutral-900 cursor-pointer"
              >
                {/* Lazy Loaded Next.js Image */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Hover Gradient & Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                      <Maximize2 size={16} />
                    </span>
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-highlight px-3 py-1 text-[11px] font-bold text-white mb-2">
                      <Building2 size={12} />
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-300 font-medium">
                      {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lightbox Preview Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8 backdrop-blur-md"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-h-[90vh] max-w-4xl w-full overflow-hidden rounded-[24px] bg-primary text-white"
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-highlight transition-colors"
                  >
                    <X size={20} />
                  </button>

                  <div className="relative h-[60vh] w-full">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      fill
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="p-6 sm:p-8 bg-primary">
                    <span className="text-xs font-bold uppercase tracking-wider text-highlight">
                      {selectedImage.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mt-1">
                      {selectedImage.title}
                    </h3>
                    <p className="font-sans text-sm text-neutral-300 mt-1">
                      {selectedImage.location}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
