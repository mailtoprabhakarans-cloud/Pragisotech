export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  contactLink?: boolean;
}

export const crmFaqList: FaqItem[] = [
  {
    id: "faq-what-is-pragiso-crm",
    question: "What is Pragiso CRM?",
    answer:
      "Pragiso CRM is field service management software that connects dispatchers, field engineers, and corporate clients with live GPS tracking, geofenced attendance, and instant PDF call slips. The cloud platform features three role portals, automated engineer dispatch, digital customer sign-offs, and payment tracking to eliminate paper clutter and operational guesswork for service businesses.",
  },
  {
    id: "faq-how-does-the-7-day-free-demo-work",
    question: "How does the 7-day free demo work?",
    answer:
      "The 7-day free demo provides full enterprise access to Pragiso CRM without requiring a credit card or contract. Our engineering team assists with a guided twenty-minute setup to onboard your technicians, configure geofencing boundaries, test live GPS dispatching, and issue test branded PDF call slips before your business decides on a commercial plan.",
  },
  {
    id: "faq-does-pragiso-crm-work-on-mobile-phones",
    question: "Does Pragiso CRM work on mobile phones?",
    answer:
      "Pragiso CRM runs directly on mobile phones as an installable Progressive Web App across Android and iOS devices. Field technicians punch attendance with geofenced location verification, receive immediate dispatch assignments, navigate via GPS to client locations, capture inspection photographs, and collect customer signatures directly on their smartphones without downloading native app store binaries.",
  },
  {
    id: "faq-who-is-pragiso-crm-built-for",
    question: "Who is Pragiso CRM built for?",
    answer:
      "Pragiso CRM is built for field service contractors, equipment manufacturers, and maintenance providers managing mobile workforces. It serves operations dispatchers needing real-time GPS visibility, field service technicians completing repair jobs on site, supervisors reviewing geofenced attendance, finance teams auditing travel and payment records, and corporate clients tracking service status and digital reports.",
  },
  {
    id: "faq-how-much-does-pragiso-crm-cost",
    question: "How much does Pragiso CRM cost?",
    answer:
      "Pricing depends on team size. Contact us for a quote [TODO: Add official pricing tiers and per-user monthly rates]. You can start with our complete 7-day free trial that includes guided 20-minute setup, all three role portals, and full enterprise features with zero upfront commitment. Please reach out through our contact page for commercial subscription pricing.",
    contactLink: true,
  },
  {
    id: "faq-does-it-work-offline",
    question: "Does it work offline?",
    answer:
      "Pragiso CRM supports offline caching on its mobile Progressive Web App so field engineers can access assigned call details in low-connectivity areas. Work items synchronize automatically once mobile internet is restored [TODO: Confirm whether full offline punch-in, photo upload queuing, and digital signature collection without active data connection are supported in production].",
  },
];
