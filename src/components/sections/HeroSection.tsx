"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Send, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
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
    badge: "Builder-Led Expertise",
    title: "Building Management and Facilities Management Sydney.",
    description:
      "Builder-led expertise. Proactive maintenance instead of reactive firefighting. One point of contact who actually shows up to keep your property running smoothly.",
  },
  {
    id: 2,
    image: "/hero2.jpg",
    badge: "Strata & Commercial Care",
    title: "Commercial & Strata Property Maintenance.",
    description:
      "Comprehensive building solutions tailored for Sydney strata schemes, commercial hubs, and residential complexes. Quality craftsmanship guaranteed.",
  },
  {
    id: 3,
    image: "/hero3.png",
    badge: "Onsite Leadership",
    title: "Dedicated Onsite Building Managers.",
    description:
      "Experienced on-premises leadership overseeing daily operations, emergency response, contractor coordination, and compliance peace of mind.",
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

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section className="w-full py-4 sm:py-6">
      {/* 50px padding from viewport screen edges */}
      <div className="w-full px-6 md:px-[50px]">
        
        {/* Outer Padded Hero Carousel Container */}
        <div
          className="relative min-h-[540px] sm:min-h-[580px] md:min-h-[620px] w-full overflow-hidden rounded-[15px] md:rounded-[24px] bg-neutral-900"
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
          <div className="relative z-10 flex min-h-[540px] sm:min-h-[580px] md:min-h-[620px] w-full flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16">
            
            {/* Top Bar: Badge on Left, Dots & Arrow Navigation on TOP RIGHT */}
            <div className="flex flex-wrap items-center justify-between gap-4 w-full">
              
              {/* Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${slides[currentSlide].id}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md"
                >
                  <Sparkles className="h-3.5 w-3.5 text-highlight" />
                  <span>{slides[currentSlide].badge}</span>
                </motion.div>
              </AnimatePresence>

              {/* TOP RIGHT Controls: Dots & Navigation Arrows */}
              <div className="flex items-center gap-4 bg-slate-900/80 px-4 py-2 rounded-full backdrop-blur-md">
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

            {/* Left Content directly floating without inner card container or shadows */}
            <div className="my-auto max-w-xl md:max-w-2xl pt-6 pb-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${slides[currentSlide].id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-white"
                >
                  <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
                    {slides[currentSlide].title}
                  </h1>

                  <p className="mt-4 sm:mt-6 font-sans text-sm sm:text-base md:text-lg leading-relaxed text-white/95 font-normal">
                    {slides[currentSlide].description}
                  </p>

                  {/* 2 Buttons */}
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Button
                      variant="highlight"
                      size="lg"
                      className="!min-w-[190px] gap-2.5 rounded-full text-white font-semibold text-sm sm:text-base transition-all"
                      onClick={() => (window.location.href = "tel:1300000000")}
                    >
                      <PhoneCall className="h-4 w-4" />
                      <span>Call Us Today</span>
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="!min-w-[190px] gap-2.5 rounded-full border-white/50 bg-black/25 text-white hover:bg-black/40 backdrop-blur-md font-semibold text-sm sm:text-base transition-all"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      <Send className="h-4 w-4 text-highlight" />
                      <span>Inquiry Now</span>
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
