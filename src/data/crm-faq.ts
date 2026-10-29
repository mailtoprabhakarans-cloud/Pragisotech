export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const crmFaqList: FaqItem[] = [
  {
    id: "faq-what-is-pragiso-crm",
    question: "What is Pragiso CRM?",
    answer:
      "Pragiso CRM is an enterprise cloud field service management platform that unifies operations, technicians, and clients in real time. It automates daily service dispatching, tracks field engineers through live GPS telemetry, replaces paperwork with digital sign-offs, and issues instant branded PDF service call slips to accelerate resolution times and client billing.",
  },
  {
    id: "faq-how-does-the-7-day-free-demo-work",
    question: "How does the 7-day free demo work?",
    answer:
      "The 7-day free demo gives your company full production access to Pragiso CRM with zero upfront commitments. Our engineering team assists with a guided twenty-minute setup to onboard your technicians, configure geofencing boundaries, test live GPS route audits, and issue branded test call slips before choosing a commercial subscription.",
  },
  {
    id: "faq-does-it-work-on-mobile-phones",
    question: "Does it work on mobile phones?",
    answer:
      "Pragiso CRM runs seamlessly on mobile smartphones as a Progressive Web App across Android and iOS devices. Field technicians punch attendance with geofenced location verification, receive immediate dispatch alerts, navigate directly to job destinations, capture repair photographs, and collect customer sign-offs directly on their mobile screens without native app store installs.",
  },
  {
    id: "faq-who-is-it-built-for",
    question: "Who is it built for?",
    answer:
      "Pragiso CRM is built specifically for field service companies, equipment manufacturers, maintenance contractors, and facility management providers managing mobile workforces. It serves operations dispatchers needing real-time technician visibility, field service technicians executing on-site repairs, finance teams reviewing travel claims, and commercial clients seeking clear service delivery proof.",
  },
  {
    id: "faq-how-much-does-it-cost",
    question: "How much does it cost?",
    answer:
      "Pragiso CRM pricing is customized based on your fleet size, technician seat count, and required deployment modules. The initial 7-day live demo is completely free with full feature access and zero financial obligation. Please contact our team for standard commercial subscription plans [TODO: Add official pricing tiers and per-user monthly rates].",
  },
];

