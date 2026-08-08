"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What exactly does a building manager do?",
    answer:
      "A building manager oversees the daily operations and physical maintenance of a strata or commercial property. This includes coordinating trades for repairs, ensuring compliance with safety regulations, maintaining common areas, and acting as the primary point of contact for the strata committee or property owner regarding the building's condition. At Judeva, we focus on proactive maintenance to catch small issues before they become expensive problems.",
  },
  {
    question: "What is the difference between building management and facilities management?",
    answer:
      "Building management typically focuses on the physical structure and common areas of a single residential strata complex or commercial building. Facilities management encompasses a broader scope, often dealing with the operational systems (HVAC, lifts, security) and strategic asset planning across larger or multiple commercial sites, ensuring the working environment is safe and efficient for its occupants. We offer both services tailored to the specific needs of your site in Sydney.",
  },
  {
    question: "What areas of Sydney do you service?",
    answer:
      "Judeva services the Greater Sydney region. This includes the Sydney CBD, the Inner West, the Eastern Suburbs, the North Shore, and major commercial hubs like Parramatta and Macquarie Park. Our local knowledge allows us to maintain a rapid response time and a reliable network of local tradespeople.",
  },
  {
    question: "Are you experienced with residential strata complexes?",
    answer:
      "Yes, managing residential strata complexes is a core part of our business. We understand the unique dynamics of working with owners corporations and strata committees. We provide transparent reporting, coordinate reliable contractors, and ensure common areas are maintained to a high standard, protecting the value of the residents' investments.",
  },
  {
    question: "How do we transition our building management to Judeva?",
    answer:
      "Transitioning to Judeva is a straightforward process. Once you contact us, we conduct a comprehensive site review to understand your building's current condition and requirements. We then provide a tailored management plan and proposal. If approved, we handle the handover process from your previous manager, ensuring all compliance documents, keys, and maintenance schedules are seamlessly transferred.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-20 md:py-28 text-neutral-900">
      {/* 50px viewport side padding */}
      <div className="w-full px-6 md:px-[50px]">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 items-start">
          
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight">
              06 / Common Questions
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.05]">
              Good to know.
            </h2>
          </motion.div>

          {/* Right Column: Interactive Accordion List */}
          <div className="flex flex-col border-t border-neutral-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-neutral-200 py-5">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between text-left focus:outline-none group py-2"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-display text-lg sm:text-xl font-bold transition-colors ${
                      isOpen ? "text-highlight" : "text-primary group-hover:text-highlight"
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-highlight" : "group-hover:text-highlight"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 pb-2 font-sans text-sm sm:text-base leading-relaxed text-neutral-600 font-normal max-w-3xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
