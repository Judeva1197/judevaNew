"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { HardHat, ShieldCheck, Clock3 } from "lucide-react";

const featureVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
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

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-20 md:py-28 text-neutral-900">
      {/* 50px viewport padding container */}
      <div className="w-full px-6 md:px-[50px]">
        <div className="mx-auto max-w-7xl gap-12 lg:grid lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 items-start">
          
          {/* Left Column: Point of view label & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight">
              01 / Our point of view
            </p>
            <h2 className="mt-4 max-w-md font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl leading-[1.08]">
              Care that keeps you ahead.
            </h2>
          </motion.div>

          {/* Right Column: Lead Statement & 3 Pillars Grid */}
          <div className="flex flex-col mt-8 lg:mt-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="max-w-3xl font-sans text-2xl sm:text-3xl font-medium leading-relaxed tracking-tight text-neutral-800"
            >
              Judeva is the trusted guardian for the places people live and work. We bring construction knowledge, clear communication and a proactive mindset to every property.
            </motion.p>

            {/* 3 Pillars Grid */}
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              
              {/* Feature 1 */}
              <motion.div
                custom={0}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="flex flex-col"
              >
                {/* Light orange background for icons */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-highlight">
                  <HardHat size={26} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-bold text-primary">
                  Builder-led insight
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-neutral-600">
                  We diagnose root causes before they become expensive problems.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                custom={1}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="flex flex-col"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-highlight">
                  <ShieldCheck size={26} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-bold text-primary">
                  Absolute integrity
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-neutral-600">
                  Transparent advice, fair quoting and no surprises.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                custom={2}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                className="flex flex-col"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-highlight">
                  <Clock3 size={26} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-bold text-primary">
                  Direct accountability
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-neutral-600">
                  The people who review your property are the people who manage it.
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
