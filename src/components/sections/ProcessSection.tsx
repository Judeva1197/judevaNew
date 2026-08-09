"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Assess",
    description: "We start with a deep-dive site audit, reviewing plant, equipment, contracts and current condition.",
  },
  {
    number: "02",
    title: "Plan",
    description: "We create a practical maintenance plan and a single source of truth for your property.",
  },
  {
    number: "03",
    title: "Deliver",
    description: "We coordinate vetted trades and clear communication, with quality and compliance at the centre.",
  },
  {
    number: "04",
    title: "Review",
    description: "We keep improving the plan so your building continues to perform at its best.",
  },
];

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export function ProcessSection() {
  return (
    /* White background */
    <section id="process" className="w-full bg-white py-20 md:py-28 text-neutral-900 ">
      {/* 50px viewport side padding */}
      <div className="w-full px-6 md:px-[50px]">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 items-start">
          
          {/* Left Column: Heading & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight">
              05 / How we work
            </p>

            {/* Black / Primary Headline */}
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.05]">
              Less firefighting.<br />
              <span className="text-highlight">More foresight.</span>
            </h2>

            <p className="mt-6 max-w-[340px] font-sans text-sm sm:text-base leading-relaxed text-neutral-600 font-normal">
              A thorough, human process that gives your property a clear plan and the confidence to move forward.
            </p>

            <div className="mt-8">
              <Button
                variant="highlight"
                size="lg"
                className="rounded-full !min-w-[210px] gap-2 px-6 py-3 text-sm font-bold shadow-none hover:bg-highlight-dark transition-all"
                onClick={() => (window.location.href = "#contact")}
              >
                <span>See what we can do</span>
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </motion.div>

          {/* Right Column: 4 Process Steps List */}
          <div className="flex flex-col border-t border-neutral-200">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                className="group grid gap-3 sm:grid-cols-[60px_160px_1fr] sm:items-start border-b border-neutral-200 py-7 transition-colors hover:bg-[#FFF8F3] px-3 rounded-lg cursor-pointer"
              >
                {/* Step Number */}
                <span className="font-sans text-sm font-extrabold text-highlight">
                  {step.number}
                </span>

                {/* Step Title (Primary / Black text) */}
                <h3 className="font-display text-2xl font-bold tracking-tight text-primary group-hover:text-highlight transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="font-sans text-sm leading-relaxed text-neutral-600 font-normal">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
