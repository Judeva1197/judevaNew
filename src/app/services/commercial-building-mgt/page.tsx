"use client";

import React from "react";
import { ServiceDetailLayout } from "@/components/layout/ServiceDetailLayout";

export default function CommercialBuildingMgtPage() {
  return (
    <ServiceDetailLayout
      title="Commercial Building Management Sydney"
      subtitle="Expert commercial building management services. We protect your commercial asset's yield with proactive maintenance, strict compliance oversight, and a focus on tenant retention."
      heroImage="/service.png"
      features={[
        {
          title: "Yield Protection",
          description:
            "Minimising downtime and controlling operational expenditure to ensure the asset maintains maximum profitability.",
        },
        {
          title: "Tenant Satisfaction",
          description:
            "Providing a rapid-response helpdesk for tenant issues, ensuring a premium environment that supports lease renewals.",
        },
        {
          title: "Lifecycle Management",
          description:
            "Strategic forecasting and planning for major plant replacement and capital works to avoid sudden financial shocks.",
        },
        {
          title: "Strict Compliance",
          description:
            "Flawless execution of all WHS, AFSS, and legislative requirements to shield the owner from severe liability.",
        },
      ]}
      contentSections={[
        {
          heading: "What Commercial Building Management Entails",
          paragraphs: [
            "Managing a commercial asset is fundamentally different from managing residential strata. A commercial building is a financial vehicle—its value is inextricably tied to its yield, which depends on keeping high-quality commercial tenants satisfied and maintaining physical infrastructure to a premium standard.",
            "Commercial building management requires a sophisticated, highly strategic approach. The infrastructure is complex—centralized chiller plants, heavy-duty BMS (Building Management Systems), multi-zoned access control, and intricate fire suppression networks. Judeva provides elite, builder-led operational oversight.",
          ],
        },
        {
          heading: "Protecting Your Commercial Asset & Yield",
          paragraphs: [
            "The greatest threat to a commercial asset is deferred maintenance. When plant equipment fails, it disrupts business operations, leading to tenant compensation claims, broken leases, and massive emergency capital expenditure.",
            "We protect your asset through aggressive preventative maintenance strategies. We audit your existing service contracts for HVAC, lifts, and fire systems to ensure they provide value and technical rigor.",
          ],
        },
        {
          heading: "Tenant Satisfaction and Fit-Out Management",
          paragraphs: [
            "In the competitive Sydney commercial property market, tenant retention is paramount. Judeva acts as the professional face of your building. We liaise directly with commercial tenants, manage fit-out processes carefully to protect base building systems, and schedule noisy works strictly outside business hours.",
          ],
          listItems: [
            "BMS integration & chiller plant optimization",
            "Cooling tower testing & Legionella risk management",
            "After-hours maintenance scheduling for zero disruption",
            "Audit-ready WHS & AFSS compliance registers",
          ],
        },
      ]}
    />
  );
}
