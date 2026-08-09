"use client";

import React from "react";
import { ServiceDetailLayout } from "@/components/layout/ServiceDetailLayout";

export default function FacilitiesManagementPage() {
  return (
    <ServiceDetailLayout
      title="Facilities Management Sydney"
      subtitle="Strategic, proactive oversight of your property's critical infrastructure. We ensure compliance, optimise performance, and protect your capital investments."
      heroImage="/service.png"
      features={[
        {
          title: "Preventative Maintenance",
          description:
            "Thorough scheduled servicing to extend equipment lifespan and prevent catastrophic failures before they occur.",
        },
        {
          title: "Strict Compliance",
          description:
            "Flawless management of WHS requirements, Annual Fire Safety Statements (AFSS), and legislative obligations.",
        },
        {
          title: "Contractor Management",
          description:
            "Vetting, coordinating, and auditing specialised trades to ensure high-quality work and value for money.",
        },
        {
          title: "Lifecycle Planning",
          description:
            "Strategic forecasting for capital expenditure, ensuring funds are available for major equipment upgrades when needed.",
        },
      ]}
      contentSections={[
        {
          heading: "Protecting the Pulse of Your Building",
          paragraphs: [
            "A building is more than its concrete and glass exterior; it is a complex, living machine. The mechanical ventilation, vertical transport, fire suppression, and security systems form the pulse of the property. When these systems fail, the building ceases to function effectively, causing severe disruption to commercial tenants and residential occupants alike.",
            "Our facilities management services in Sydney are designed to ensure this never happens. We provide strategic, high-level operational management that looks beyond daily aesthetic upkeep to focus on the reliability, compliance, and lifecycle of your building's core infrastructure. We partner with commercial asset managers and strata committees to remove the operational burden, providing a sophisticated, builder-led approach to building facilities management.",
          ],
        },
        {
          heading: "What a Typical Engagement Looks Like",
          paragraphs: [
            "Every property requires a unique approach. When we are engaged as your facilities management company in Sydney, we do not apply a generic template. We begin with a deep-dive audit of your site's plant and equipment. We review existing maintenance contracts, assess the current condition of critical systems like HVAC and chillers, and identify immediate compliance gaps.",
            "From there, we build a comprehensive asset register and implement a preventative maintenance schedule. We act as the single point of contact for all specialized trades. If a lift faults or a pump fails, your committee or asset manager does not need to scramble for a technician. Judeva manages the emergency response, oversees the repair, verifies the work, and processes the invoicing.",
          ],
          listItems: [
            "Deep-dive site audit of plant and equipment",
            "Comprehensive digital asset register & schedule",
            "Single point of contact for all specialized trades",
            "Transparent monthly technical and financial reporting",
          ],
        },
        {
          heading: "Integration with Local Operations",
          paragraphs: [
            "Effective property facilities management requires seamless integration with broader building operations. A well-maintained HVAC system is compromised if the roof membrane above it is leaking. This is why our services operate in tandem. We frequently combine high-level facilities management with hands-on building management to ensure both the strategic systems and the physical structure are maintained holistically.",
            "Our capability spans the entire Greater Sydney region. Whether managing a complex mixed-use development in the CBD or providing robust facilities management in Parramatta's growing commercial hub, our local knowledge ensures we deploy the right trades rapidly.",
          ],
        },
      ]}
    />
  );
}
