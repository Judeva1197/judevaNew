"use client";

import React from "react";
import { ServiceDetailLayout } from "@/components/layout/ServiceDetailLayout";

export default function OnsiteBuildingManagerPage() {
  return (
    <ServiceDetailLayout
      title="Onsite Building Manager Sydney"
      subtitle="Dedicated onsite building managers for strata towers and commercial buildings. A highly trained professional on-site daily to protect your asset and serve your occupants."
      heroImage="/service.png"
      features={[
        {
          title: "Constant Vigilance",
          description:
            "Daily patrols ensure blown lights are replaced, hazards are cleared, and cleanliness is maintained perfectly.",
        },
        {
          title: "Contractor Supervision",
          description:
            "Physical oversight of tradespeople on-site ensures strata funds are only spent on high-quality workmanship.",
        },
        {
          title: "Emergency First Response",
          description:
            "Immediate on-site action during crises to isolate services, direct emergency trades, and protect the asset.",
        },
        {
          title: "Resident Support",
          description:
            "A dedicated, professional liaison for residents handling move-ins, fobs, and common property inquiries.",
        },
      ]}
      contentSections={[
        {
          heading: "What an Onsite Building Manager Does",
          paragraphs: [
            "Large, complex buildings cannot be managed effectively from a distance. They are dynamic ecosystems that require constant supervision, immediate problem-solving, and strict contractor coordination. An onsite building manager is your dedicated operational commander, stationed at your property every day.",
            "Judeva provides elite onsite management personnel for premium strata towers and commercial assets across Sydney. The onsite manager becomes the beating heart of the building's operations—patrolling daily, physically supervising contractors, managing move-in logistics, testing life-safety systems, and supporting residents.",
          ],
        },
        {
          heading: "Benefits of Having an Onsite Manager",
          paragraphs: [
            "Dedicating a manager to a single site guarantees immediate emergency response. If a lift faults or a leak appears, the manager is already on-site to isolate the issue and deploy trades, preventing minor issues from becoming major disasters.",
            "It also ensures total contractor accountability. An onsite manager physically inspects contractor work before any invoice is authorized.",
          ],
        },
        {
          heading: "Onsite vs Mobile Building Management",
          paragraphs: [
            "Mobile Management is effective for smaller strata blocks (under 60 lots) where a manager visits 1-3 times a week.",
            "Onsite Management becomes necessary when daily activity outstrips a visiting schedule—buildings over 80 lots, multiple lift cores, expansive pools and gyms, or high tenant turnover.",
          ],
          listItems: [
            "Detailed daily site walks & cleaning audits",
            "Preventative schedule execution & trade supervision",
            "Emergency system testing & WHS induction logs",
            "Access fob database management & move-in coordination",
          ],
        },
      ]}
    />
  );
}
