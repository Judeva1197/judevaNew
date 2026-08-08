"use client";

import React from "react";
import { ServiceDetailLayout } from "@/components/layout/ServiceDetailLayout";

export default function PropertyMaintenancePage() {
  return (
    <ServiceDetailLayout
      title="Property Maintenance Sydney"
      subtitle="Reliable property maintenance in Sydney for strata and commercial properties. From reactive repairs to scheduled preventative maintenance — one trusted team."
      heroImage="/service.png"
      features={[
        {
          title: "General Handyman Repairs",
          description:
            "Door adjustments, lock replacements, minor painting, patching drywall, and general common area upkeep.",
        },
        {
          title: "Technical Servicing",
          description:
            "Coordinating licensed contractors for complex mechanical, electrical, and plumbing infrastructure.",
        },
        {
          title: "Aesthetic Upkeep",
          description:
            "Managing soft services like high-pressure washing, carpet cleaning, landscaping, and window cleaning to preserve street appeal.",
        },
        {
          title: "Emergency Response",
          description:
            "24/7 rapid deployment of licensed trades to make safe and repair urgent issues like floods or electrical faults.",
        },
      ]}
      contentSections={[
        {
          heading: "What Is Property Maintenance?",
          paragraphs: [
            "Property maintenance is the backbone of asset protection. It encompasses every physical task required to keep a building safe, operational, and visually appealing. While management focuses on strategy and oversight, property maintenance is about execution. From fixing a leaking pipe and replacing blown lighting in common areas to coordinating major plumbing overhauls and ensuring gardens remain pristine, it is the constant, hands-on care your building requires.",
            "At Judeva, our approach to property maintenance in Sydney is comprehensive and builder-led. We do not just fix what is broken; we analyze why it broke. We manage the entire spectrum of physical upkeep for complex strata schemes and commercial assets.",
          ],
        },
        {
          heading: "Preventative vs Reactive Maintenance",
          paragraphs: [
            "The most expensive way to maintain a property is to wait for things to break. This is known as reactive maintenance. Relying solely on a reactive approach leads to emergency call-out fees, compounded secondary damage, and immense frustration for occupants.",
            "Judeva champions preventative maintenance. We implement scheduled servicing programs designed to catch wear and tear before failure occurs. We clean gutters before storm season, test sump pumps before heavy rains, inspect roof membranes annually, and schedule routine servicing for high-use items.",
          ],
        },
        {
          heading: "Licensed Trades We Coordinate",
          paragraphs: [
            "Quality maintenance relies entirely on quality trades. Over years in the Sydney market, Judeva has curated a vetted network of tier-one contractors. We strictly verify all licenses, public liability insurances, and WHS compliance before a contractor steps foot on your property.",
          ],
          listItems: [
            "Plumbers: Blocked drains, leak detection, pump servicing, hot water plant",
            "Electricians: Switchboards, emergency lighting, automated gates, fault finding",
            "Fire Technicians: Mandatory testing of alarms, extinguishers, and sprinklers",
            "Specialists: Lift technicians, HVAC mechanics, waterproofers, roofers, engineers",
          ],
        },
      ]}
    />
  );
}
