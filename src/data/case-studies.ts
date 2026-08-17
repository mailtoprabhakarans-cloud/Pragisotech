import ecommerce from "@/assets/work-ecommerce.jpg";
import app from "@/assets/work-app.jpg";
import corporate from "@/assets/work-corporate.jpg";
import marketing from "@/assets/work-marketing.jpg";
import fintech from "@/assets/work-fintech.jpg";

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  groups: string[];
  tags: string[];
  desc: string;
  image: string;
  client: string;
  industry: string;
  timeline: string;
  services: string[];
  challenge: string;
  solution: string;
  approach: { title: string; body: string }[];
  features: string[];
  metrics: { value: number; suffix: string; prefix?: string; label: string }[];
  outcome: string;
  testimonial: { quote: string; author: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ecommerce-platform",
    name: "E-Commerce Platform",
    category: "Web Development",
    groups: ["Web"],
    tags: ["React", "Node.js", "Stripe"],
    desc: "A high-performance storefront with real-time inventory and a checkout tuned for conversion.",
    image: ecommerce,
    client: "Multi-brand retail group",
    industry: "Retail & Commerce",
    timeline: "14 weeks",
    services: ["Web Development", "UI/UX Design", "Performance Engineering"],
    challenge:
      "The legacy storefront took over eight seconds to load on mobile, inventory counts drifted out of sync with the warehouse, and a five-step checkout was quietly losing most of the traffic that reached it.",
    solution:
      "We rebuilt the storefront on a React and Node.js stack with server-rendered category pages, a real-time inventory feed from the warehouse system, and a single-screen Stripe checkout with saved addresses and wallet payments.",
    approach: [
      {
        title: "Audit & instrumentation",
        body: "Mapped the full purchase funnel, added event tracking on every step and identified the three drop-off points responsible for most lost revenue.",
      },
      {
        title: "Rebuild the critical path",
        body: "Rewrote catalogue, product and checkout pages first, shipping them behind a traffic split so improvements could be measured against the old store.",
      },
      {
        title: "Scale & harden",
        body: "Added edge caching, image optimisation and load testing ahead of the festive peak, plus alerting on stock-sync failures.",
      },
    ],
    features: [
      "Real-time inventory sync across warehouse and storefront",
      "One-page Stripe checkout with wallet and UPI payments",
      "Faceted search with instant filtering",
      "Admin dashboard for merchandising and promotions",
      "Automated order and shipping notifications",
    ],
    metrics: [
      { value: 168, suffix: "%", prefix: "+", label: "Online revenue" },
      { value: 62, suffix: "%", prefix: "+", label: "Checkout completion" },
      { value: 78, suffix: "%", prefix: "-", label: "Page load time" },
      { value: 4, suffix: "x", label: "Peak traffic capacity" },
    ],
    outcome:
      "The new storefront handled the festive season without a single outage and became the group's highest-margin sales channel within two quarters.",
    testimonial: {
      quote:
        "They treated our revenue like their own — every decision came back to whether it would help customers check out faster.",
      author: "Head of Digital",
      role: "Multi-brand retail group",
    },
  },
  {
    slug: "business-management-app",
    name: "Business Management App",
    category: "App Development",
    groups: ["Apps"],
    tags: ["Flutter", "Firebase", "REST"],
    desc: "A cross-platform operations app that keeps teams, tasks and reporting in one place.",
    image: app,
    client: "Field services company",
    industry: "Operations & Field Services",
    timeline: "18 weeks",
    services: ["App Development", "UI/UX Design", "Backend Integration"],
    challenge:
      "Field teams ran on paper job sheets and WhatsApp threads. Managers had no live view of work in progress, and payroll reconciliation took several days at the end of every month.",
    solution:
      "We shipped a Flutter app for iOS and Android with offline-first job management, photo proof of work, GPS check-ins and a manager dashboard backed by Firebase and the client's existing ERP APIs.",
    approach: [
      {
        title: "Shadow the field team",
        body: "Spent time with technicians on site to design flows that work with gloves on, one hand free and patchy network coverage.",
      },
      {
        title: "Offline-first architecture",
        body: "Built a local queue that syncs jobs, photos and signatures automatically the moment connectivity returns.",
      },
      {
        title: "Roll out by region",
        body: "Released region by region with in-app guidance, collecting feedback between waves before the national launch.",
      },
    ],
    features: [
      "Offline job management with automatic sync",
      "GPS check-in and photo proof of completion",
      "Role-based access for technicians, supervisors and admins",
      "Live operations dashboard with SLA alerts",
      "Automated timesheet export for payroll",
    ],
    metrics: [
      { value: 92, suffix: "%", prefix: "+", label: "Job reporting accuracy" },
      { value: 6, suffix: " hrs", prefix: "-", label: "Admin time per week" },
      { value: 3, suffix: " days", prefix: "-", label: "Payroll cycle" },
      { value: 4.8, suffix: "/5", label: "Internal app rating" },
    ],
    outcome:
      "Paper job sheets were retired entirely within three months, and supervisors now resolve SLA risks the same day instead of the following week.",
    testimonial: {
      quote:
        "Our supervisors finally see the whole operation live. The month-end scramble simply disappeared.",
      author: "Operations Director",
      role: "Field services company",
    },
  },
  {
    slug: "corporate-website",
    name: "Modern Corporate Website",
    category: "Web Development + UI/UX",
    groups: ["Web", "UI/UX"],
    tags: ["Next.js", "Figma", "CMS"],
    desc: "A refreshed corporate presence with a scalable design system and editorial CMS.",
    image: corporate,
    client: "B2B manufacturing group",
    industry: "Manufacturing",
    timeline: "10 weeks",
    services: ["UI/UX Design", "Web Development", "Content Architecture"],
    challenge:
      "Years of ad-hoc page building had left an inconsistent site that marketing could not update without a developer, and enquiry forms buried three clicks deep.",
    solution:
      "We designed a component-based system in Figma, built it as a documented library and connected every page to a headless CMS so the marketing team can publish independently.",
    approach: [
      {
        title: "Design system first",
        body: "Defined typography, spacing, colour and 30+ reusable blocks so every future page stays visually consistent.",
      },
      {
        title: "Content model",
        body: "Restructured products, industries and case content into CMS models that mirror how the business actually talks about itself.",
      },
      {
        title: "SEO migration",
        body: "Mapped and redirected every legacy URL, rebuilt metadata and structured data, then monitored rankings post-launch.",
      },
    ],
    features: [
      "Headless CMS with editorial preview",
      "Reusable block library for landing pages",
      "Multi-language ready content structure",
      "Structured data and technical SEO baseline",
      "Accessible, responsive component set",
    ],
    metrics: [
      { value: 140, suffix: "%", prefix: "+", label: "Organic sessions" },
      { value: 74, suffix: "%", prefix: "+", label: "Enquiry submissions" },
      { value: 95, suffix: "/100", label: "Lighthouse performance" },
      { value: 80, suffix: "%", prefix: "-", label: "Time to publish a page" },
    ],
    outcome:
      "Marketing now ships campaign landing pages in hours instead of weeks, and organic search has become the group's primary source of new enquiries.",
    testimonial: {
      quote:
        "We went from waiting on developers for every comma to launching full campaign pages ourselves.",
      author: "Marketing Lead",
      role: "B2B manufacturing group",
    },
  },
  {
    slug: "digital-growth-campaign",
    name: "Digital Growth Campaign",
    category: "Digital Marketing",
    groups: ["Marketing"],
    tags: ["SEO", "Google Ads", "Meta Ads"],
    desc: "A full-funnel acquisition program that lifted qualified leads quarter over quarter.",
    image: marketing,
    client: "Education technology brand",
    industry: "EdTech",
    timeline: "6 months",
    services: ["Digital Marketing", "SEO", "Paid Media", "Analytics"],
    challenge:
      "Spend was rising while lead quality fell. Attribution was unreliable, campaigns competed with each other on the same keywords, and sales could not tell which channel produced revenue.",
    solution:
      "We rebuilt tracking end to end, restructured paid accounts around intent rather than product, and paired them with a content and SEO programme targeting the questions buyers actually search.",
    approach: [
      {
        title: "Fix measurement",
        body: "Implemented clean event tracking and offline conversion imports so every enrolled student traces back to a source.",
      },
      {
        title: "Restructure spend",
        body: "Consolidated overlapping campaigns, cut wasted keywords and reallocated budget toward the segments that converted.",
      },
      {
        title: "Compound with content",
        body: "Published a targeted content cluster each month, then retargeted engaged readers with nurture creative.",
      },
    ],
    features: [
      "End-to-end conversion tracking and dashboards",
      "Intent-based Google Ads account structure",
      "Meta prospecting and retargeting funnels",
      "Monthly SEO content clusters",
      "Weekly performance reporting for sales and marketing",
    ],
    metrics: [
      { value: 213, suffix: "%", prefix: "+", label: "Qualified leads" },
      { value: 46, suffix: "%", prefix: "-", label: "Cost per lead" },
      { value: 3.4, suffix: "x", label: "Return on ad spend" },
      { value: 120, suffix: "%", prefix: "+", label: "Organic traffic" },
    ],
    outcome:
      "Marketing and sales now work from the same numbers, and the brand scaled spend confidently for two consecutive admission cycles.",
    testimonial: {
      quote: "For the first time we know exactly which rupee produced which enrolment.",
      author: "Growth Manager",
      role: "Education technology brand",
    },
  },
  {
    slug: "fintech-dashboard",
    name: "FinTech Dashboard",
    category: "UI/UX + Web Development",
    groups: ["UI/UX", "Web"],
    tags: ["TypeScript", "React", "Design System"],
    desc: "A dense analytics dashboard made readable through clear hierarchy and live data views.",
    image: fintech,
    client: "Payments platform",
    industry: "Financial Services",
    timeline: "16 weeks",
    services: ["UI/UX Design", "Web Development", "Design Systems"],
    challenge:
      "Analysts exported data to spreadsheets because the product's own dashboard was too slow and too cluttered to trust for daily decisions.",
    solution:
      "We redesigned the information hierarchy around the five decisions analysts make every morning, then rebuilt the front end in TypeScript and React with virtualised tables and streaming updates.",
    approach: [
      {
        title: "Decision-led IA",
        body: "Interviewed analysts to rank the metrics that drive action, and demoted everything else into drill-downs.",
      },
      {
        title: "Performance budget",
        body: "Set strict render budgets, virtualised large tables and moved heavy aggregation server-side.",
      },
      {
        title: "Systemised the UI",
        body: "Delivered a documented component library with charts, tables and states so future modules stay consistent.",
      },
    ],
    features: [
      "Live transaction and settlement monitoring",
      "Virtualised tables handling millions of rows",
      "Configurable dashboards per role",
      "Anomaly and threshold alerting",
      "Accessible dark and light themes",
    ],
    metrics: [
      { value: 71, suffix: "%", prefix: "-", label: "Time to insight" },
      { value: 90, suffix: "%", prefix: "+", label: "Daily active analysts" },
      { value: 250, suffix: " ms", label: "Median query render" },
      { value: 65, suffix: "%", prefix: "-", label: "Spreadsheet exports" },
    ],
    outcome:
      "The dashboard replaced the morning spreadsheet ritual entirely and is now the platform's most used internal surface.",
    testimonial: {
      quote:
        "It is the rare redesign where the team stopped asking for exports because the product was simply faster.",
      author: "Product Lead",
      role: "Payments platform",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
