"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";
import { UserCheck, ShieldCheck, Wrench, Award } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "One Point of Contact",
    description:
      "No more bouncing between different departments. You get a dedicated manager who knows your building inside out.",
  },
  {
    icon: ShieldCheck,
    title: "Proactive, Not Reactive",
    description:
      "We implement thorough preventative maintenance schedules to catch minor wear and tear before it becomes a major capital expense.",
  },
  {
    icon: Wrench,
    title: "Builder-Led Knowledge",
    description:
      "Our foundation in building and construction means we assess structural issues with expert eyes, ensuring contractors quote fairly and work correctly.",
  },
];

const stats = [
  {
    targetNumber: 20,
    suffix: "+",
    title: "Years Experience",
    description: "Deep understanding of Sydney's property landscape.",
  },
  {
    targetNumber: 40,
    suffix: "+",
    title: "Sites Managed",
    description: "Trusted by committees across the metropolitan area.",
  },
  {
    targetNumber: 2,
    suffix: "hr",
    title: "Emergency Response",
    description: "Rapid deployment for critical building faults.",
  },
  {
    targetNumber: 100,
    suffix: "%",
    title: "Transparent",
    description: "Clear reporting and open communication always.",
  },
];

function AnimatedCounter({ targetNumber, suffix = "" }: { targetNumber: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000; // 2 seconds count animation
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const increment = targetNumber / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, targetNumber]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function WhyChooseSection() {
  return (
    /* Background: Very light orange #fff9f5bc */
    <section id="why-choose" className="w-full bg-[#fff9f5bc] py-20 md:py-28 text-neutral-900">
      {/* 50px viewport padding container */}
      <div className="w-full px-6 md:px-[50px]">
        <div className="mx-auto max-w-7xl">
          
          {/* Top 2-Column Split */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Left Image Showcase (No Shadows or Borders) */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-[15px] md:rounded-[24px] overflow-hidden bg-neutral-900 group"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/whychoose.png"
                  alt="Why Choose Judeva Team Working On Site"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Badge Overlay with Light Orange Icon Container */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-[15px] flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E6] text-highlight">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-primary">Builder-Led Excellence</h4>
                  <p className="font-sans text-xs text-neutral-600 mt-0.5">Sydney&apos;s Trusted Building Managers</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content & Feature Bullets */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight">
                02 / Why Judeva
              </p>
              
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.12]">
                Why Choose Judeva?
              </h2>

              <p className="mt-5 font-sans text-base sm:text-lg leading-relaxed text-neutral-700 font-normal">
                We believe building management should be invisible. When we do our job correctly, strata committees and property owners don&apos;t have to think about maintenance, compliance, or contractor coordination. We handle it all.
              </p>

              {/* 3 Feature Bullets with Light Orange Icon Backgrounds */}
              <div className="mt-8 space-y-6">
                {features.map((feature, idx) => {
                  const IconComp = feature.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E6] text-highlight">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-primary">
                          {feature.title}
                        </h3>
                        <p className="mt-1 font-sans text-sm leading-relaxed text-neutral-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* Bottom Statistics 4-Column Grid with Animated Counters */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-white rounded-[15px] md:rounded-[20px] p-6 md:p-8 hover:bg-highlight transition-all duration-300 cursor-pointer"
              >
                {/* Stat number: Animated counter that turns WHITE on hover */}
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-highlight group-hover:text-white transition-colors duration-300 tracking-tight">
                  <AnimatedCounter targetNumber={stat.targetNumber} suffix={stat.suffix} />
                </div>
                
                {/* Stat title: turns WHITE on hover */}
                <h4 className="mt-3 font-display text-lg font-bold text-primary group-hover:text-white transition-colors duration-300">
                  {stat.title}
                </h4>
                
                {/* Stat description: turns WHITE on hover */}
                <p className="mt-2 font-sans text-sm text-neutral-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
