"use client";

import React from "react";
import { ServiceDetailLayout } from "@/components/layout/ServiceDetailLayout";

export default function StrataBuildingManagementPage() {
  return (
    <ServiceDetailLayout
      title="Strata Building Management Sydney"
      subtitle="Specialist strata building management across Sydney. We handle daily operations, by-law compliance, contractor oversight, and resident communication for strata committees."
      heroImage="/service.png"
      features={[
        {
          title: "Common Area Management",
          description:
            "Meticulous oversight of lobbies, hallways, gardens, and amenities to maintain a premium standard of living.",
        },
        {
          title: "By-Law Compliance",
          description:
            "Fair and consistent enforcement of building rules regarding noise, parking, pets, and waste disposal.",
        },
        {
          title: "Resident Communication",
          description:
            "Clear, timely notifications to residents regarding upcoming maintenance, water shut-offs, or scheduled works.",
        },
        {
          title: "Contractor Oversight",
          description:
            "Vetting trades, auditing their work on-site, and ensuring strata funds are only spent on high-quality outcomes.",
        },
      ]}
      contentSections={[
        {
          heading: "What Is Strata Building Management?",
          paragraphs: [
            "A strata property is a micro-community—a shared ecosystem where hundreds of people live closely together, relying on shared infrastructure. Managing this environment requires a unique blend of technical expertise, diplomatic communication, and strict operational discipline.",
            "Strata building management is the discipline of maintaining the physical common property of a strata scheme. While your strata manager handles the financial and administrative duties, Judeva handles the reality on the ground. We coordinate cleaners, audit fire safety systems, oversee plumbers, and enforce by-laws for a harmonious living environment.",
          ],
        },
        {
          heading: "Strata Building Manager vs Strata Manager",
          paragraphs: [
            "The Strata Manager (Administration): Works from an office, handles levy money, legal compliance, strata roll, and AGMs.",
            "The Strata Building Manager (Operations - Judeva): Works on-site, handles the physical building, manages contractors, tests equipment, responds to physical emergencies, and executes maintenance strategies.",
          ],
        },
        {
          heading: "How We Support Strata Committees",
          paragraphs: [
            "Strata committee members are volunteers who shouldn't spend evenings chasing quotes or handling noise complaints. Judeva removes the operational burden from the committee by providing expert builder-led guidance.",
            "When major capital works are required—such as roof replacements or facade painting—we review scopes, analyze contractor methodologies, and provide clear recommendations based on deep construction knowledge.",
          ],
          listItems: [
            "Fair by-law enforcement & breach documentation",
            "Protective lift curtain installations for move-ins",
            "Vetted tier-one contractor network & invoice audits",
            "Detailed monthly reporting for committee meetings",
          ],
        },
      ]}
    />
  );
}
