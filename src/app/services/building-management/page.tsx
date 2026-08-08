"use client";

import React from "react";
import { ServiceDetailLayout } from "@/components/layout/ServiceDetailLayout";

export default function BuildingManagementPage() {
  return (
    <ServiceDetailLayout
      title="Building Management Sydney"
      subtitle="Expert building management for strata and commercial properties across Sydney. Proactive oversight, compliance, and contractor management by a trusted local team."
      heroImage="/service.png"
      features={[
        {
          title: "Daily Operational Oversight",
          description:
            "Continuous monitoring of common areas, amenity functionality, cleanliness, and security protocols to guarantee an exceptional environment.",
        },
        {
          title: "Common Area Maintenance",
          description:
            "Strategic scheduling of preventative maintenance for all shared spaces, ensuring high standards without unexpected strata levy spikes.",
        },
        {
          title: "Contractor Management",
          description:
            "Vetting, coordinating, and auditing tradespeople. We ensure all work meets stringent quality and compliance standards before processing invoices.",
        },
        {
          title: "WHS & Compliance",
          description:
            "Comprehensive management of statutory obligations, risk assessments, and Annual Fire Safety Statements to keep the property legally compliant.",
        },
      ]}
      contentSections={[
        {
          heading: "What Is Building Management?",
          paragraphs: [
            "Building management is the comprehensive physical and operational administration of a property. While strata managers focus entirely on administrative tasks like budgets, levy collection, and organizing meetings, a professional building manager operates on the ground. We are the guardians of the physical asset. We take responsibility for the daily operational oversight, ensuring that every facet of the building functions perfectly, from the automated garage doors to the rooftop plant rooms.",
            "At Judeva, we redefine building management in Sydney through a proactive lens. Backed by extensive builder-led expertise, we understand properties not just as spaces to be cleaned, but as complex mechanical, structural, and social ecosystems. We spot structural anomalies and system inefficiencies long before they become critical failures. This depth of insight allows us to provide a level of care and precision that standard building management companies simply cannot match.",
          ],
        },
        {
          heading: "Why Choose Judeva for Building Management",
          paragraphs: [
            "Many building management providers in Sydney operate as dispatch centres—they receive a complaint and simply send a contractor. We do not operate this way. Our builder-led background gives us a distinct advantage: we understand exactly how buildings are constructed, how materials interact, and how systems degrade over time. We bring a diagnostic approach to building management. When a problem arises, we identify the root cause rather than repeatedly treating the symptom.",
            "This expertise allows us to engage intelligently with tradespeople, ensuring you are never overcharged for unnecessary repairs. It also informs our approach to lifecycle planning, where we map out future capital expenditures so owners corporations and asset owners can budget accurately years in advance. We provide transparency, integrity, and absolute accountability.",
          ],
        },
        {
          heading: "Compliance and Safety Management",
          paragraphs: [
            "Compliance is non-negotiable. In New South Wales, the regulatory landscape for both strata and commercial properties is complex and carries heavy penalties for non-compliance. From the Annual Fire Safety Statement (AFSS) and lift certifications to facade inspections and anchor point testing, the administrative burden on committees is massive.",
            "Judeva handles this entirely. We maintain rigorous compliance registers, coordinate certified practitioners for mandatory testing, manage the rectification of any defects identified during inspections, and ensure all necessary documentation is submitted to local councils and fire authorities on time. We also conduct comprehensive risk assessments and implement strict contractor management protocols, ensuring that anyone working on your site holds the correct licenses and insurances.",
          ],
        },
        {
          heading: "Building Management for Strata vs Commercial",
          paragraphs: [
            "In Strata Building Management, the focus is heavily geared toward the residential experience. We enforce by-laws harmoniously, manage resident move-ins and move-outs to protect common property, maintain high-end amenities like pools and gymnasiums, and provide comprehensive reporting to the strata committee.",
            "In Commercial Building Management, the priority shifts toward yield protection and tenant retention. We ensure that critical infrastructure like HVAC and lift systems operate flawlessly during business hours. We coordinate maintenance tasks after hours to avoid disrupting trade, support tenant fit-outs, and ensure the building meets stringent commercial lease compliance standards.",
          ],
          listItems: [
            "Harmonious by-law enforcement & resident liaison",
            "Protective move-in & move-out lift logistics",
            "Commercial yield protection & SLA contractor audits",
            "After-hours maintenance scheduling for commercial tenants",
          ],
        },
      ]}
    />
  );
}
