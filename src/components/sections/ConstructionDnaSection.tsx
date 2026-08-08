"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function ConstructionDnaSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 text-neutral-900">
      {/* 50px viewport side padding */}
      <div className="w-full px-6 md:px-[50px]">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 items-center">
          
          {/* Left Column: Image with Floating 100% Vetted Trades Badge */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative min-h-[440px] sm:min-h-[480px] w-full overflow-hidden rounded-[24px] bg-neutral-900">
              <Image
                src="/Built on construction DNA.png"
                alt="Property inspector reviewing building details"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Floating Badge on Bottom Right */}
            <div className="absolute -bottom-5 right-4 sm:-right-6 rounded-[20px] bg-[#FFF8F3] p-5 sm:p-6 text-center ring-1 ring-black/5">
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-highlight tracking-tight">
                100%
              </span>
              <p className="mt-1 font-sans text-[11px] font-bold uppercase tracking-widest text-neutral-600">
                Vetted trades
              </p>
            </div>
          </motion.div>

          {/* Right Column: Content & Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col pt-4 lg:pt-0"
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight">
              05 / Built on construction DNA
            </p>

            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.08]">
              We know what’s behind the wall.
            </h2>

            <p className="mt-6 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-neutral-700 font-normal">
              Founded by a licensed builder, Judeva understands how buildings age, where problems start and what it takes to protect an asset for the long term.
            </p>

            {/* Metrics Row */}
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-neutral-200 pt-8">
              <div>
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-highlight tracking-tight">
                  24/7
                </span>
                <p className="mt-2 font-sans text-xs font-bold uppercase tracking-widest text-neutral-600">
                  Emergency response
                </p>
              </div>

              <div>
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-highlight tracking-tight">
                  15+
                </span>
                <p className="mt-2 font-sans text-xs font-bold uppercase tracking-widest text-neutral-600">
                  Years of experience
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
