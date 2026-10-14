export interface StakeholderPersona {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  iconName: string;
  accentColor: string;
  points: string[];
}

export interface PainPointComparison {
  id: string;
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
}

export interface CoreFeature {
  id: string;
  iconName: string;
  title: string;
  category: "ADMIN" | "ENGINEER" | "HR" | "MOBILE" | "FINANCE" | "SALES" | "REPORTS" | "OPERATIONS" | "SECURITY" | "ALL ROLES";
  description: string;
  highlight?: string;
}

export interface TechItem {
  iconName: string;
  name: string;
  description: string;
  category: string;
}

export interface RoleMatrixItem {
  role: string;
  accessLevel: string;
  badgeVariant: "royal" | "electric" | "teal" | "cyan";
  capabilities: string;
}

export interface DemoDayPlan {
  day: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
}

export const LIVE_CRM_DEMO_URL = "https://demo-crm-xi.vercel.app/";

export const crmHeroStats = [
  { value: "3", label: "Role Portals", subtext: "Admin, Engineer & Client" },
  { value: "15+", label: "Core Modules", subtext: "From Lead to Billing" },
  { value: "100%", label: "Cloud Native", subtext: "Zero Server Setup" },
  { value: "PWA", label: "Mobile Ready", subtext: "Android & iOS Supported" },
];

export const crmStakeholders: StakeholderPersona[] = [
  {
    id: "admin",
    title: "Operations & Admin Teams",
    subtitle: "For Dispatchers, Supervisors & Executives",
    badge: "Control Room",
    iconName: "Building2",
    accentColor: "from-cyan/20 to-royal/20",
    points: [
      "Dispatch service jobs to nearest available engineer live",
      "Monitor entire fleet on a real-time GPS map",
      "Approve attendance, leaves & travel claims",
      "Track outstanding payments & client billing",
      "Audit travel kilometres & service logs",
      "Manage leads pipeline & sales funnel",
      "Export branded PDF reports & service call slips",
    ],
  },
  {
    id: "engineer",
    title: "Field Service Engineers",
    subtitle: "For Technicians & On-Site Staff",
    badge: "Mobile Field Force",
    iconName: "Wrench",
    accentColor: "from-electric/20 to-teal/20",
    points: [
      "GPS punch-in/out with geofenced location proof",
      "Receive job assignments directly on phone",
      "Navigate to client site with live GPS route",
      "Log diagnosis, parts used, inspection charges",
      "Upload before/after repair photo evidence",
      "Collect digital client sign-off on phone",
      "Submit leave & regularization requests",
    ],
  },
  {
    id: "client",
    title: "Corporate Clients & Customers",
    subtitle: "For End Customers & B2B Clients",
    badge: "Self-Service Portal",
    iconName: "Handshake",
    accentColor: "from-teal/20 to-cyan/20",
    points: [
      "Self-service breakdown call booking portal",
      "Track assigned engineer's live arrival ETA",
      "View full service history & job status",
      "Download signed PDF service call slips",
      "Check warranty status for equipment",
      "Upload failure photos when logging a call",
    ],
  },
];

export const crmPainPoints: PainPointComparison[] = [
  {
    id: "slips",
    problem: {
      title: "Paper Service Call Slips",
      description: "Engineers carry physical paper slips that get lost, torn, or filled incorrectly — causing billing disputes and missing records.",
    },
    solution: {
      title: "Digital Job Workflow + PDF Export",
      description: "All job details, parts, charges, and client signatures are captured digitally and instantly exported as branded PDF call slips.",
    },
  },
  {
    id: "visibility",
    problem: {
      title: "No Idea Where Engineers Are",
      description: "Dispatchers have to call engineers repeatedly to find their location, causing delays and poor customer communication.",
    },
    solution: {
      title: "Live GPS Fleet Map",
      description: "See all engineers on a real-time map with status pills — On Duty, In Transit, At Client Place — updated every few seconds.",
    },
  },
  {
    id: "attendance",
    problem: {
      title: "Manual Attendance Registers",
      description: "Paper attendance sheets are easy to manipulate, hard to audit, and require hours of HR effort each month to process.",
    },
    solution: {
      title: "Geofenced GPS Attendance",
      description: "Engineers punch in and out with verified GPS coordinates — auto-calculating working hours, overtime, and late arrivals.",
    },
  },
  {
    id: "conveyance",
    problem: {
      title: "Inflated Conveyance Claims",
      description: "Engineers claim more travel kilometers than actually driven — costing companies thousands monthly with no way to verify.",
    },
    solution: {
      title: "GPS Road KM Audit",
      description: "Pragiso CRM tracks actual roads traveled using OSRM map matching — comparing claimed vs real kilometers in an automated audit report.",
    },
  },
  {
    id: "customers",
    problem: {
      title: "Customers Left in the Dark",
      description: "Customers wait hours without knowing if or when an engineer is coming — leading to frustrated calls and poor satisfaction scores.",
    },
    solution: {
      title: "Client Self-Service Portal",
      description: "Customers can book calls, track their assigned engineer's live ETA, and access their full service history from any device.",
    },
  },
  {
    id: "revenue",
    problem: {
      title: "Missing Revenue & Outstanding Payments",
      description: "No centralised view of which clients owe money — uncollected dues pile up with no alerts or tracking system in place.",
    },
    solution: {
      title: "Outstanding Payment Tracker",
      description: "A live dashboard of all clients with outstanding balances — with overdue alerts, payment method breakdowns, and export reports.",
    },
  },
];

export const crmCoreFeatures: CoreFeature[] = [
  {
    id: "gps-tracking",
    iconName: "MapPin",
    title: "Live GPS Fleet Tracking",
    category: "ADMIN",
    description: "Real-time map showing all engineers with live status — On Duty, In Transit, At Client Place, Standing By. One-click dispatch & call.",
    highlight: "Sub-second live updates",
  },
  {
    id: "job-workflow",
    iconName: "ClipboardList",
    title: "End-to-End Job Workflow",
    category: "ENGINEER",
    description: "Full pipeline from Assigned → Traveling → Reached → In Progress → Completed with digital call report, part logging, and client sign-off.",
    highlight: "Zero paperwork",
  },
  {
    id: "attendance-hub",
    iconName: "Timer",
    title: "Smart Attendance Hub",
    category: "HR",
    description: "Geofenced punch-in/out, shift compliance, overtime calculation, leave requests, and conveyance allowance based on GPS kilometers.",
    highlight: "Geofence verified",
  },
  {
    id: "screen-off-gps",
    iconName: "Smartphone",
    title: "Screen-Off GPS Tracking (PWA)",
    category: "MOBILE",
    description: "Unique audio keepalive engine keeps GPS active even when the phone is locked in an engineer's pocket — no data loss on the go.",
    highlight: "Pocket keep-alive tech",
  },
  {
    id: "payment-tracker",
    iconName: "CircleDollarSign",
    title: "Outstanding Payment Tracker",
    category: "FINANCE",
    description: "Centralised view of all client balances, payment modes (Cash, UPI, Cheque, Credit), overdue alerts, and collection tracking.",
    highlight: "Overdue alert engine",
  },
  {
    id: "pipeline-crm",
    iconName: "Target",
    title: "Sales Leads & Pipeline CRM",
    category: "SALES",
    description: "Manage prospects from first contact through proposal, negotiation, and close — with funnel analytics and sales performance reports.",
    highlight: "Full funnel view",
  },
  {
    id: "bi-reports",
    iconName: "BarChart3",
    title: "Business Intelligence Reports",
    category: "REPORTS",
    description: "Service job pipeline analytics, GPS kilometer audit, vendor repair tracking, client outstanding dues, and exportable PDF reports.",
    highlight: "Executive BI analytics",
  },
  {
    id: "pdf-slip",
    iconName: "FileText",
    title: "Digital Service Call Slip (PDF)",
    category: "ENGINEER",
    description: "Replaces paper slips with digital job forms — capturing diagnosis, parts, charges, photos, and digital signatures. Exports branded PDF instantly.",
    highlight: "Instant branded PDF",
  },
  {
    id: "vendor-escalation",
    iconName: "Store",
    title: "Vendor & Parts Escalation",
    category: "OPERATIONS",
    description: "Track equipment sent to third-party repair vendors — with contact logs, completion ETAs, return status, and vendor notes.",
    highlight: "3rd-party vendor tracking",
  },
  {
    id: "client-registry",
    iconName: "Building",
    title: "Client & Equipment Registry",
    category: "ADMIN",
    description: "Full client database with GPS-pinned addresses, contact details, service history, equipment records, and recurring job patterns.",
    highlight: "GPS-pinned locations",
  },
  {
    id: "realtime-notifications",
    iconName: "Bell",
    title: "Real-Time Notifications",
    category: "ALL ROLES",
    description: "Live alerts for new call requests, leave approvals, job status changes, and outstanding payment breaches — delivered in-app instantly.",
    highlight: "Instant push & in-app alerts",
  },
  {
    id: "role-security",
    iconName: "ShieldCheck",
    title: "Role-Based Security (RLS)",
    category: "SECURITY",
    description: "Row-level security ensures engineers only see their own data, coordinators see their branch, and admins have full platform visibility.",
    highlight: "Bank-grade data isolation",
  },
];

export const crmTechStack: TechItem[] = [
  {
    iconName: "Atom",
    name: "React 18 + TypeScript",
    description: "Type-safe, component-driven frontend for a blazing fast and responsive control room UI.",
    category: "Frontend Core",
  },
  {
    iconName: "Database",
    name: "Supabase PostgreSQL",
    description: "High-scale relational DB with Row-Level Security, instant migrations, and automatic indexing.",
    category: "Cloud Database",
  },
  {
    iconName: "Map",
    name: "Leaflet.js + OSRM",
    description: "Interactive real-time map engine with road map-matched GPS routing and kilometer audits.",
    category: "Mapping & GIS",
  },
  {
    iconName: "Zap",
    name: "Supabase Realtime",
    description: "WebSocket-powered sub-second live location & event updates across dispatchers and engineers.",
    category: "Real-Time Engine",
  },
  {
    iconName: "Smartphone",
    name: "PWA + Service Worker",
    description: "Installable mobile app on Android & iOS without app store hassle, with offline cache support.",
    category: "Mobile Architecture",
  },
  {
    iconName: "Lock",
    name: "JWT Auth + RLS",
    description: "Tamper-proof role-based access control enforced directly at the Postgres database level.",
    category: "Identity & Security",
  },
  {
    iconName: "FileCode",
    name: "html2canvas + jsPDF",
    description: "Client-side branded PDF generation for service call slips, inspection sheets, and receipts.",
    category: "Document Generation",
  },
  {
    iconName: "Cloud",
    name: "Cloud Storage Buckets",
    description: "Encrypted asset storage for before/after job evidence photos, digital slips, and invoice files.",
    category: "Media Storage",
  },
];

export const crmRoleMatrix: RoleMatrixItem[] = [
  {
    role: "Admin",
    accessLevel: "Full Platform Access — All Branches",
    badgeVariant: "royal",
    capabilities: "Live fleet map, job dispatch, attendance hub, HR management, revenue reports, lead pipeline, outstanding tracker, user creation, SMTP config.",
  },
  {
    role: "Coordinator",
    accessLevel: "Operational Access — Assigned Branch Only",
    badgeVariant: "electric",
    capabilities: "Call requests, service jobs, client registry, live tracking, vendor management, reports — strictly limited to their assigned branch.",
  },
  {
    role: "Engineer",
    accessLevel: "Mobile Field Tools — Own Data Only",
    badgeVariant: "teal",
    capabilities: "Attendance punch-in/out, assigned job execution, GPS route tracking, job report slip, photo uploads, digital signature, leave requests.",
  },
  {
    role: "Client / Customer",
    accessLevel: "Self-Service Portal — Own Jobs Only",
    badgeVariant: "cyan",
    capabilities: "Breakdown call booking, assigned engineer tracking, service history viewing, signed PDF slip download, warranty status check.",
  },
];

export const crmDemoPlan: DemoDayPlan[] = [
  {
    day: "Day 1",
    title: "Organization Setup & Onboarding",
    badge: "Quick Start",
    description: "We configure your company workspace, branches, equipment categories, and admin credentials in under 20 minutes.",
    deliverables: ["Cloud instance deployed", "Admin credentials delivered", "Branch structure configured"],
  },
  {
    day: "Day 2",
    title: "Field Engineer PWA Rollout",
    badge: "Zero App Store Hassle",
    description: "Your technicians scan a single QR code to install the Pragiso CRM PWA directly on Android or iPhone.",
    deliverables: ["Technicians registered", "Pocket screen-off GPS activated", "First test punch-in logged"],
  },
  {
    day: "Day 3",
    title: "Live GPS Fleet Dispatch & Geofencing",
    badge: "Control Room Live",
    description: "Watch your field team appear live on the interactive dispatch map. Assign your first real client service ticket.",
    deliverables: ["Real-time map tracking active", "Live job allocation test", "Geofence boundary enforcement verified"],
  },
  {
    day: "Day 4",
    title: "Digital Job Execution & PDF Slip Export",
    badge: "Paperless Operations",
    description: "Technicians log parts used, capture before/after photos, and collect client digital sign-offs right on site.",
    deliverables: ["Branded PDF call slip generated", "Digital signature captured", "Photo evidence stored in cloud"],
  },
  {
    day: "Day 5",
    title: "GPS Road KM Audit & Payments",
    badge: "Cost Control",
    description: "Run automated road route verification using OSRM to compare actual driven vs claimed kilometers.",
    deliverables: ["Automated conveyance audit report", "Outstanding dues tracker populated", "Payment method breakdown"],
  },
  {
    day: "Day 6",
    title: "Customer Self-Service Portal",
    badge: "Client Delight",
    description: "Give a corporate client access to book service calls online and watch their assigned engineer's live arrival ETA.",
    deliverables: ["Customer portal login tested", "Live engineer ETA tracking verified", "Customer history download"],
  },
  {
    day: "Day 7",
    title: "BI Analytics Review & Next Steps",
    badge: "Executive Insights",
    description: "Review complete pipeline performance, revenue trends, and get a tailored enterprise rollout plan.",
    deliverables: ["Comprehensive performance audit", "Custom integration roadmap", "ROI & savings breakdown"],
  },
];

export const crmPillars = [
  { label: "Cloud Native", desc: "No server setup or maintenance required" },
  { label: "Mobile PWA", desc: "Works on any Android or iPhone instantly" },
  { label: "Bank-Grade Secure", desc: "Row-Level Security & encrypted data" },
  { label: "Multi-Branch Scale", desc: "Supports single depot to national fleets" },
];
