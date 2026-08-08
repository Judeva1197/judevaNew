"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

export function FounderNoteSection() {
  return (
    <section id="founder-note" className="w-full bg-white py-20 md:py-28 text-neutral-900 ">
      {/* 50px viewport side padding */}
      <div className="w-full px-6 md:px-[50px]">
        <div className="mx-auto max-w-7xl">
          <div className="gap-12 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 items-start">
            
            {/* Left Column: Title on top, image below title, and creative NSW Licensed Builder badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col"
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-highlight">
                Meet the Founder
              </p>

              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-primary leading-[1.08]">
                A Note From Eddy
              </h2>

              <p className="mt-2 text-sm font-semibold text-highlight font-sans">
                Owner & Director, Judeva Building & Facilities Management
              </p>

              {/* Below Title Image Container */}
              <div className="relative mt-8 min-h-[300px] sm:min-h-[340px] w-full overflow-hidden rounded-[20px] bg-neutral-900 group">
                <Image
                  src="/construction_crane.png"
                  alt="Sydney Construction Crane showcasing Judeva Builder License"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
                
                {/* Creative Floating Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-primary/90 p-3.5 backdrop-blur-md text-white border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-highlight text-white">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                        NSW Licensed Builder
                      </h4>
                      <p className="text-[11px] text-neutral-300 font-sans">
                        Cert IV & Diploma Qualified
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 size={18} className="text-highlight shrink-0" />
                </div>
              </div>
            </motion.div>

            {/* Right Column: Founder's Personal Quote & Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col space-y-6 mt-8 lg:mt-0"
            >
              <p className="font-sans text-xl sm:text-2xl font-medium leading-relaxed tracking-tight text-neutral-900">
                &ldquo;I’m Eddy, owner and director of Judeva Building & Facilities Management. With a Builder’s Licence, Cert IV and Diploma in Building & Construction, and years of hands-on experience across building management and construction, I bring a genuinely different perspective to how buildings are managed.&rdquo;
              </p>

              <p className="font-sans text-base sm:text-lg leading-relaxed text-neutral-700 font-normal">
                &ldquo;Most building managers come from an administrative background — I come from the trades and construction side, which means I understand not just how to manage a building, but how it was actually built, what to look for, and how to solve problems before they become costly. I treat every site I manage as if it were my own.&rdquo;
              </p>

              <p className="font-sans text-base sm:text-lg leading-relaxed text-neutral-700 font-normal">
                &ldquo;I founded Judeva to bring this builder-led approach to strata, commercial, and private clients across Sydney — combining hands-on construction expertise with the day-to-day discipline of professional building management.&rdquo;
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
