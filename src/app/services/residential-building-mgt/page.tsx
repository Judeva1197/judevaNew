"use client";

import React from "react";
import { ServiceDetailLayout } from "@/components/layout/ServiceDetailLayout";

export default function ResidentialBuildingMgtPage() {
  return (
    <ServiceDetailLayout
      title="Residential Building Management Sydney"
      subtitle="Trusted residential building management for apartment towers and strata complexes. We create safe, well-maintained environments residents love to come home to."
      heroImage="/service.png"
      features={[
        {
          title: "Amenity Management",
          description:
            "Meticulous upkeep of pools, gyms, saunas, and BBQ areas to ensure they remain safe, hygienic, and premium assets.",
        },
        {
          title: "Security & Access",
          description:
            "Strict management of electronic access fobs, CCTV systems, and garage gates to protect the perimeter of the complex.",
        },
        {
          title: "Proactive Upkeep",
          description:
            "Scheduled preventative maintenance for lifts, pumps, and fire systems to prevent sudden breakdowns and emergencies.",
        },
        {
          title: "Resident Liaison",
          description:
            "Friendly, professional handling of resident inquiries, move-ins, parcel logistics, and by-law communication.",
        },
      ]}
      contentSections={[
        {
          heading: "What Residential Building Management Includes",
          paragraphs: [
            "A residential apartment building is more than an asset; it is a collection of homes. Managing it requires a delicate balance of strict operational discipline and strong interpersonal skills. High-density living in Sydney brings unique challenges: high tenant turnover, strain on shared amenities, and security requirements.",
            "Judeva provides comprehensive, builder-led management for residential strata complexes across Sydney. We manage the physical infrastructure, oversee contractors, enforce by-laws, and act as the primary point of contact for residents.",
          ],
        },
        {
          heading: "Creating Outstanding Living Environments",
          paragraphs: [
            "The value of a residential apartment is heavily dictated by the condition of its common areas. A pristine lobby, a sparkling pool, and perfectly manicured gardens create an environment that commands premium rental yields and high resale values.",
            "We implement rigorous oversight of all soft services—cleaning, landscaping, pressure washing, pool servicing, and protective lift curtains during move-ins.",
          ],
        },
        {
          heading: "Safety, Security & Committee Support",
          paragraphs: [
            "Residents must feel safe in their homes. Security in a modern strata tower relies on perfectly maintained infrastructure—CCTV coverage, automated garage gates, and access control databases.",
            "We work seamlessly alongside your strata manager, handling the physical reality on-site so your volunteer committee can enjoy peace of mind.",
          ],
          listItems: [
            "Pool, gym & sauna hygiene oversight",
            "CCTV & access fob deactivation management",
            "Protective move-in/move-out lift padding",
            "Diplomatic by-law enforcement & resident support",
          ],
        },
      ]}
    />
  );
}
