"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Send, ChevronLeft, ChevronRight, Award, ShieldCheck, FileCheck2, Sparkles, Laptop } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SlideData {
  id: number;
  image: string;
  badge: string;
  title: string;
  description: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/hero1.png",
    badge: "Builder-Led Differentiator",
    title: "Builder-Led Building & Facilities Management",
    description:
      "Construction-qualified property stewardship for private, strata, and commercial sites across Greater Sydney. Real builder knowledge, not just administrative oversight.",
  },
  {
    id: 2,
    image: "/hero2.jpg",
    badge: "Independent Site Audit",
    title: "One-Time Building Health Check Package",
    description:
      "A comprehensive site walkthrough and diagnostic report from a builder and senior Building Manager's perspective — ideal before AGM planning or switching providers.",
  },
  {
    id: 3,
    image: "/hero3.png",
    badge: "Licensed & Qualified",
    title: "Dedicated Onsite & Part-Time Site Management",
    description:
      "Licensed Builder background (Cert IV & Diploma in Building & Construction). Proactive maintenance, strict compliance, and direct trade accountability.",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section className="w-full py-4 sm:py-6">
      {/* 50px padding from viewport screen edges */}
      <div className="w-full px-6 md:px-[50px]">
        
        {/* Outer Padded Hero Carousel Container */}
        <div
          className="relative min-h-[560px] sm:min-h-[600px] md:min-h-[640px] w-full overflow-hidden rounded-[15px] md:rounded-[24px] bg-neutral-900"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Image Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full"
            >
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                priority={currentSlide === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Slide Content Layout */}
          <div className="relative z-10 flex min-h-[560px] sm:min-h-[600px] md:min-h-[640px] w-full flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16">
            
            {/* Top Bar: Badge on Left, Controls on TOP RIGHT */}
            <div className="flex flex-wrap items-center justify-between gap-4 w-full">
              
              {/* Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${slides[currentSlide].id}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md border border-white/10"
                >
                  <Sparkles className="h-3.5 w-3.5 text-highlight" />
                  <span>{slides[currentSlide].badge}</span>
                </motion.div>
              </AnimatePresence>

              {/* TOP RIGHT Controls: Dots & Navigation Arrows */}
              <div className="flex items-center gap-4 bg-slate-900/80 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                {/* Dots Indicators */}
                <div className="flex items-center gap-2">
                  {slides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                        idx === currentSlide
                          ? "w-7 bg-highlight"
                          : "w-2.5 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="h-4 w-px bg-white/30" />

                {/* Arrow Navigation Controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevSlide}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/30 hover:scale-105 active:scale-95 focus:outline-none"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/30 hover:scale-105 active:scale-95 focus:outline-none"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Main Floating Headline & Action Section */}
            <div className="my-auto max-w-xl md:max-w-3xl pt-4 pb-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${slides[currentSlide].id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-white"
                >
                  <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12]">
                    {slides[currentSlide].title}
                  </h1>

                  <p className="mt-4 sm:mt-6 font-sans text-base sm:text-lg md:text-xl leading-relaxed text-white/95 font-normal max-w-2xl">
                    {slides[currentSlide].description}
                  </p>

                  {/* Trust Signals & Qualifications Bar */}
                  <div className="mt-6 flex flex-wrap items-center gap-2.5 font-sans text-xs font-semibold text-neutral-200">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3.5 py-1.5 backdrop-blur-md border border-white/15">
                      <Award className="h-3.5 w-3.5 text-highlight" />
                      <span>NSW Builder&apos;s Licence</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3.5 py-1.5 backdrop-blur-md border border-white/15">
                      <FileCheck2 className="h-3.5 w-3.5 text-highlight" />
                      <span>Cert IV & Diploma in Building</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3.5 py-1.5 backdrop-blur-md border border-white/15">
                      <ShieldCheck className="h-3.5 w-3.5 text-highlight" />
                      <span>Certified in Security (10+ Yrs Security Exp)</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3.5 py-1.5 backdrop-blur-md border border-white/15">
                      <Laptop className="h-3.5 w-3.5 text-highlight" />
                      <span>Certified in Information Technology (IT)</span>
                    </span>
                  </div>

                  {/* 2 Buttons */}
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Button
                      variant="highlight"
                      size="lg"
                      className="!min-w-[200px] gap-2.5 rounded-full text-white font-bold text-sm sm:text-base shadow-none transition-all hover:bg-highlight-dark"
                      onClick={() => (window.location.href = "tel:0432800928")}
                    >
                      <PhoneCall className="h-4 w-4" />
                      <span>Call Us Today</span>
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="!min-w-[200px] gap-2.5 rounded-full border-white/50 bg-black/25 text-white hover:bg-black/40 backdrop-blur-md font-bold text-sm sm:text-base transition-all"
                      onClick={() => (window.location.href = "#contact")}
                    >
                      <Send className="h-4 w-4 text-highlight" />
                      <span>Request a Proposal</span>
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
