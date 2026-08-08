"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Wrench,
  ShieldCheck,
  Building,
  Briefcase,
  Home as HomeIcon,
  UserCheck,
  ChevronDown,
  ArrowUpRight,
  Menu,
  X,
  LayoutGrid,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

const servicesList: ServiceItem[] = [
  {
    title: "Building Management",
    description: "Comprehensive oversight and administrative management of building operations.",
    href: "/services/building-management",
    icon: Building2,
  },
  {
    title: "Facilities Management",
    description: "Strategic maintenance and operational efficiency for modern facilities.",
    href: "/services/facilities-management",
    icon: LayoutGrid,
  },
  {
    title: "Property Maintenance",
    description: "Proactive repairs, servicing, and upkeep for structural integrity.",
    href: "/services/property-maintenance",
    icon: Wrench,
  },
  {
    title: "Building Maintenance",
    description: "Routine inspection and maintenance solutions for all asset types.",
    href: "/services/building-maintenance",
    icon: ShieldCheck,
  },
  {
    title: "Strata Building Management",
    description: "Specialized strata scheme compliance and community building care.",
    href: "/services/strata-building-management",
    icon: Building,
  },
  {
    title: "Commercial Building Mgt",
    description: "Tailored management for office towers, retail, and corporate parks.",
    href: "/services/commercial-building-mgt",
    icon: Briefcase,
  },
  {
    title: "Residential Building Mgt",
    description: "High-touch management for multi-dwelling residential communities.",
    href: "/services/residential-building-mgt",
    icon: HomeIcon,
  },
  {
    title: "Onsite Building Manager",
    description: "Dedicated on-premises manager for daily operations and immediate support.",
    href: "/services/onsite-building-manager",
    icon: UserCheck,
  },
];

export function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* 50px viewport padding left & right */}
      <div className="w-full flex items-center justify-between px-6 md:px-[50px] pt-6 pb-3">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="JUDEVA Logo"
              width={28}
              height={28}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display text-2xl font-extrabold tracking-tight text-primary">
            Judeva<span className="text-highlight">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex font-sans">
          <Link
            href="/"
            className="text-sm font-semibold text-neutral-700 transition-colors hover:text-primary"
          >
            Home
          </Link>

          {/* Services Mega Menu Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-semibold text-neutral-700 transition-colors hover:text-primary py-2 cursor-pointer focus:outline-none"
              aria-expanded={isServicesOpen}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 text-neutral-500 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>

            {/* Desktop Mega-Menu Fade-In White Panel without borders or shadows */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 pt-3"
                >
                  <div className="rounded-[15px] bg-white p-6 ring-1 ring-black/5">
                    <div className="mb-4 flex items-center justify-between pb-3">
                      <div>
                        <h3 className="font-display text-base font-bold text-primary">Our Expert Services</h3>
                        <p className="text-xs text-neutral-500 font-sans">
                          Professional building and facility management solutions tailored to your properties.
                        </p>
                      </div>
                      <Link
                        href="/services"
                        className="flex items-center gap-1 text-xs font-semibold text-highlight hover:text-highlight-dark transition-colors"
                      >
                        View all <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                    {/* 8 Services Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {servicesList.map((service, idx) => {
                        const IconComponent = service.icon;
                        return (
                          <Link
                            key={idx}
                            href={service.href}
                            className="group flex items-start gap-3.5 rounded-[12px] p-3 transition-all hover:bg-[#FFF8F3]"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#FFF0E6] text-highlight transition-colors group-hover:bg-highlight group-hover:text-white">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-sans text-sm font-bold text-neutral-900 group-hover:text-primary transition-colors">
                                {service.title}
                              </h4>
                              <p className="mt-0.5 line-clamp-2 text-xs text-neutral-500 font-sans leading-normal">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/service-areas"
            className="text-sm font-semibold text-neutral-700 transition-colors hover:text-primary"
          >
            Service Areas
          </Link>

          <Link
            href="/about"
            className="text-sm font-semibold text-neutral-700 transition-colors hover:text-primary"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-semibold text-neutral-700 transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Pill Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="primary"
            className="rounded-full !min-w-[200px] gap-2 px-6 py-2.5 text-sm font-semibold"
          >
            Request a proposal <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-neutral-700 hover:bg-neutral-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white md:hidden overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6 space-y-3 font-sans">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-neutral-800 hover:bg-neutral-100"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-neutral-800 hover:bg-neutral-100"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-500 transition-transform ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="mt-2 ml-3 space-y-2 pl-3">
                    {servicesList.map((service, idx) => {
                      const IconComp = service.icon;
                      return (
                        <Link
                          key={idx}
                          href={service.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-neutral-700 hover:bg-[#FFF8F3] hover:text-primary"
                        >
                          <IconComp className="h-4 w-4 text-highlight shrink-0" />
                          <span>{service.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/service-areas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-neutral-800 hover:bg-neutral-100"
              >
                Service Areas
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-neutral-800 hover:bg-neutral-100"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-neutral-800 hover:bg-neutral-100"
              >
                Contact
              </Link>

              <div className="pt-4">
                <Button
                  variant="primary"
                  className="w-full justify-center rounded-full gap-2 text-sm font-semibold"
                >
                  Request a proposal <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
