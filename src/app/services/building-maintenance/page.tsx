"use client";

import React from "react";
import { ServiceDetailLayout } from "@/components/layout/ServiceDetailLayout";

export default function BuildingMaintenancePage() {
  return (
    <ServiceDetailLayout
      title="Building Maintenance Sydney"
      subtitle="Proactive upkeep for strata towers and commercial buildings. We schedule, coordinate, and oversee all physical maintenance tasks to protect your asset."
      heroImage="/service.png"
      features={[
        {
          title: "Fire System Servicing",
          description:
            "Coordinating mandatory testing of alarms, sprinklers, and hydrants to ensure critical life-safety systems perform flawlessly.",
        },
        {
          title: "Mechanical Infrastructure",
          description:
            "Oversight of HVAC, exhaust fans, and cooling tower maintenance to ensure optimal climate control and air quality.",
        },
        {
          title: "Structural Upkeep",
          description:
            "Inspecting and maintaining roof membranes, facade integrity, concrete spalling, and balustrade safety.",
        },
        {
          title: "Essential Services",
          description:
            "Coordinating lift servicing, automated gate maintenance, and central hot water plant inspections.",
        },
      ]}
      contentSections={[
        {
          heading: "What Building Maintenance Covers",
          paragraphs: [
            "Building maintenance goes beyond simple aesthetics; it is the thorough, disciplined servicing of the structural and mechanical elements that keep a property functioning. While building management focuses on high-level operational oversight and resident liaison, building maintenance is strictly focused on physical tasks.",
            "At Judeva, we deliver intelligent building maintenance across Sydney. Driven by our deep, builder-led expertise, we don't just coordinate contractors; we manage the lifecycle of your property's critical infrastructure. We ensure that every piece of plant equipment and every structural element is maintained precisely to specification.",
          ],
        },
        {
          heading: "Preventative Maintenance Programs",
          paragraphs: [
            "A reactive approach to heavy infrastructure is financially devastating. Waiting for a commercial chiller unit or a complex lift system to fail results in exorbitant emergency repair costs, tenant fury, and massive disruption. The core of our service is the Preventative Maintenance Program.",
            "We conduct a comprehensive audit of your building's assets and build an annual schedule of preventative works—including quarterly HVAC filter changes, bi-annual gutter clearing, routine lift servicing, and waterproofing inspections.",
          ],
        },
        {
          heading: "Compliance-Driven Maintenance",
          paragraphs: [
            "In New South Wales, building maintenance is deeply intertwined with legal compliance. Neglecting essential services doesn't just result in broken equipment; it results in council fines, voided insurance policies, and severe legal liability.",
            "Our maintenance programs are compliance-driven. We meticulously manage the path to the Annual Fire Safety Statement (AFSS), coordinate lift safety registrations, and manage roof anchor point testing.",
          ],
          listItems: [
            "AFSS testing & fire safety compliance",
            "Lift safety registrations & BMU facade access",
            "HVAC climate control & exhaust servicing",
            "Waterproofing & structural concrete spalling audits",
          ],
        },
      ]}
    />
  );
}
