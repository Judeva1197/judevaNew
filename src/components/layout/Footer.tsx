"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-white font-sans border-t border-primary-light/20">
      {/* 50px viewport side padding */}
      <div className="w-full px-6 md:px-[50px] py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          
          {/* Main Footer Grid */}
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/15">
            
            {/* Col 1: Brand, Logo & Embedded Sydney Map */}
            <div className="flex flex-col items-start gap-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 shadow-xs transition-transform group-hover:scale-105">
                  <Image
                    src="/logo.png"
                    alt="JUDEVA Logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <span className="font-display text-2xl font-extrabold tracking-tight text-white">
                  Judeva<span className="text-highlight">.</span>
                </span>
              </Link>

              <p className="font-sans text-sm text-neutral-300 leading-relaxed font-normal mt-1">
                Builder-led building and facilities management across Greater Sydney. Dedicated, proactive property stewardship you can trust.
              </p>

              {/* Embedded Interactive Location Map */}
              <div className="mt-2 w-full h-[150px] rounded-2xl overflow-hidden border border-white/20 relative">
                <iframe
                  title="Judeva Location Map"
                  src="https://maps.google.com/maps?q=90%20Eddy%20Street,%20Merrylands%20West%20NSW%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h4 className="font-display text-base font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2.5 font-sans text-sm text-neutral-300">
                <li>
                  <Link href="/" className="hover:text-highlight transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-highlight transition-colors">Services</Link>
                </li>
                <li>
                  <Link href="#why-choose" className="hover:text-highlight transition-colors">Why Judeva</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-highlight transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-highlight transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Core Services */}
            <div>
              <h4 className="font-display text-base font-bold text-white mb-4">Our Services</h4>
              <ul className="space-y-2.5 font-sans text-sm text-neutral-300">
                <li>
                  <Link href="/services/building-management" className="hover:text-highlight transition-colors">Building Management</Link>
                </li>
                <li>
                  <Link href="/services/facilities-management" className="hover:text-highlight transition-colors">Facilities Management</Link>
                </li>
                <li>
                  <Link href="/services/property-maintenance" className="hover:text-highlight transition-colors">Property Maintenance</Link>
                </li>
                <li>
                  <Link href="/services/strata-building-management" className="hover:text-highlight transition-colors">Strata Building Management</Link>
                </li>
                <li>
                  <Link href="/services/commercial-building-mgt" className="hover:text-highlight transition-colors">Commercial Building Mgt</Link>
                </li>
                <li>
                  <Link href="/services/onsite-building-manager" className="hover:text-highlight transition-colors">Onsite Building Manager</Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Info */}
            <div>
              <h4 className="font-display text-base font-bold text-white mb-4">Get in Touch</h4>
              <ul className="space-y-3 font-sans text-sm text-neutral-300">
                <li>
                  <a href="tel:0432800928" className="flex items-center gap-2.5 hover:text-highlight transition-colors">
                    <Phone size={16} className="text-highlight shrink-0" />
                    <span>0432 800 928</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:eddy@judeva.com.au" className="flex items-center gap-2.5 hover:text-highlight transition-colors">
                    <Mail size={16} className="text-highlight shrink-0" />
                    <span>eddy@judeva.com.au</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2.5 text-neutral-300">
                    <MapPin size={16} className="text-highlight shrink-0 mt-0.5" />
                    <span>90 Eddy Street, Merrylands West, Sydney NSW</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Footer Bar with WEBASI Attribution */}
          <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-neutral-300 font-sans">
            <p>© {new Date().getFullYear()} Judeva Building & Facilities Management. All rights reserved.</p>

            <div className="flex items-center gap-1">
              <span>Design by</span>
              <a
                href="https://webasi.co"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-highlight transition-colors inline-flex items-center gap-0.5 underline underline-offset-4"
              >
                WEBASI <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
