"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Since Judeva took over our building, the difference has been night and day. Issues are fixed before we even have to complain about them, and their communication is flawless.",
    author: "Sarah M.",
    role: "Strata Committee Chair · Residential Strata, Inner West",
  },
  {
    quote:
      "Having a builder-led team means they actually understand the structural reports and can keep the contractors honest. It has saved us thousands in unnecessary repairs.",
    author: "David T.",
    role: "Commercial Property Owner · Commercial Office, Parramatta",
  },
  {
    quote:
      "Reliable, professional, and they always answer the phone. Eddy and the team have completely removed the stress from managing our complex.",
    author: "Michael R.",
    role: "Owners Corporation Secretary · Mixed Use Development, North Shore",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full bg-[#FFF8F3] py-20 md:py-28 text-neutral-900">
      {/* 50px viewport side padding */}
      <div className="w-full px-6 md:px-[50px]">
        <div className="mx-auto max-w-7xl">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight"
            >
              Client Feedback
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-primary tracking-tight"
            >
              Trusted by Sydney Committees
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 font-sans text-base sm:text-lg text-neutral-600 font-normal leading-relaxed"
            >
              Don&apos;t just take our word for it. Hear from the owners corporations and asset managers we partner with.
            </motion.p>
          </div>

          {/* 3 Testimonials Grid */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="group flex flex-col justify-between h-full rounded-[24px] bg-white p-7 sm:p-9 transition-all duration-300 hover:bg-primary hover:text-white cursor-pointer"
              >
                <div>
                  {/* Top Quote Icon & 5 Stars */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0E6] text-highlight group-hover:bg-highlight group-hover:text-white transition-colors duration-300">
                      <Quote className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p className="font-sans text-base leading-relaxed text-neutral-700 group-hover:text-neutral-100 transition-colors duration-300 font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-neutral-200/80 group-hover:border-white/20 transition-colors duration-300">
                  <h4 className="font-display text-lg font-bold text-primary group-hover:text-white transition-colors duration-300">
                    {item.author}
                  </h4>
                  <p className="mt-1 font-sans text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
