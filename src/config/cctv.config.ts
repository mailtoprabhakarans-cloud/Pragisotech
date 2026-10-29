/**
 * Secure Plus CCTV Configuration
 * Pragiso Soft Technologies, Coimbatore, Tamil Nadu
 * 
 * Central config for all CCTV & surveillance service settings, contact numbers,
 * service feature flags, and product showcase items.
 * 
 * ALL UNCONFIRMED FACTS ARE CLEARLY MARKED AS [TODO].
 */

export interface CctvProduct {
  id: string;
  name: string;
  category: "Bullet Camera" | "Dome Camera" | "PTZ Camera" | "DVR / NVR" | "Accessories";
  shortDescription: string;
  image: string;
  alt: string;
}

export interface CctvServiceFlag {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export const cctvConfig = {
  // Company & Location Identity
  company: {
    name: "Pragiso Soft Technologies",
    legalStatus: "Authorised dealer of Secure Plus CCTV cameras",
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India",
    addressLine: "Coimbatore, Tamil Nadu, India",
    // [TODO: Add official physical shop/office street address and postal code]
    streetAddress: "[TODO: Add physical office/store street address]",
    postalCode: "[TODO: Add postal code, e.g. 641001]",
    // [TODO: Confirm additional service districts if applicable, e.g., Tirupur, Erode, Nilgiris]
    serviceAreas: ["Coimbatore"],
  },

  // Contact Numbers & WhatsApp
  // [TODO QUESTION FOR CLIENT]:
  // The website previously showed +91 90809 61649 in the footer and 79045 88377 in a WhatsApp link.
  // Which number is the official business WhatsApp number, and which is the primary calling number?
  contact: {
    // Primary calling telephone number (used in tel: links)
    callingPhone: "+91-90809-61649", // [TODO: Confirm if +91 90809 61649 is the main calling number]
    callingPhoneRaw: "+919080961649",
    
    // Official WhatsApp number (used in wa.me links, country code prefix without +)
    whatsappNumber: "919080961649", // [TODO: Change to 917904588377 if that is the dedicated WhatsApp business line]
    whatsappPrefilledMessage:
      "Hi Pragiso, I'm interested in Secure Plus CCTV for my [home/business]. Please share details.",
    
    // Support email
    email: "contact@pragisotech.in",
  },

  // Authorised Dealer Credentials & Official Assets
  dealer: {
    brandName: "Secure Plus / Umaiya Security System",
    authorizedStatement: "Pragiso Soft Technologies is an authorised dealer of Secure Plus & Umaiya Security System CCTV cameras.",
    certifyingAuthority: "Umaiya Security System (Manufacturer / Distributor)",
    certificateTitle: "Authorized Dealer Certificate",
    certificateIssueDate: "01-10-2026",
    certificateValidUntil: "01-10-2027",
    logoUrl: "/secure-plus-logo.jpg", // Official logo provided by client
    dealerAuthLetterUrl: "/authorized-dealer-certificate.jpg", // Verified official certificate uploaded by client
    hasAuthLetterImage: true,
  },

  // Dealer & Wholesale Supply (B2B Supply for Sub-Dealers & Installers)
  dealerSupply: {
    enabled: true,
    title: "Dealer & Wholesale Supply",
    subtitle: "We supply CCTV hardware in bulk to local sub-dealers, security contractors, and installers.",
    description:
      "Looking for reliable CCTV stock in Coimbatore? We supply genuine CCTV cameras, multi-channel DVR/NVR units, SMPS power supplies, and cabling in bulk with attractive dealer margins, warranty backing, and prompt local dispatch.",
    benefits: [
      "Wholesale dealer price margins on bulk camera orders",
      "Direct manufacturer warranty backing and serial tracking",
      "Ready stock availability in Coimbatore for quick turnaround",
      "Complete ecosystem: Dome, Bullet, PTZ, DVR/NVR, hard disks, and cables",
    ],
    whatsappPrefilledMessage:
      "Hi Pragiso, I am a CCTV dealer/installer in Tamil Nadu. I would like to get your wholesale dealer price list and bulk supply terms.",
  },

  // Modular Service Offerings (Toggle on/off as needed)
  services: {
    cameraInstallationAndConfig: {
      id: "camera-installation",
      title: "Camera Installation & Configuration",
      description:
        "Professional on-site mounting, angle calibration, optimal lens positioning, and cable routing for indoor and outdoor Secure Plus cameras.",
      enabled: true, // [TODO: Toggle false if not offered]
    },
    dvrNvrSetup: {
      id: "dvr-nvr-setup",
      title: "DVR / NVR Setup & Storage",
      description:
        "High-definition DVR/NVR configuration, hard drive storage planning, continuous and motion-detection recording setup, and backup management.",
      enabled: true, // [TODO: Toggle false if not offered]
    },
    mobileViewingSetup: {
      id: "mobile-viewing",
      title: "Mobile App Remote Viewing",
      description:
        "Cloud remote monitoring setup on Android and iOS smartphones, allowing owners to stream live footage and playback securely from anywhere.",
      enabled: true, // [TODO: Toggle false if not offered]
    },
    maintenanceAndTroubleshooting: {
      id: "maintenance-troubleshooting",
      title: "Maintenance & Troubleshooting",
      description:
        "Routine lens cleaning, power supply audits, cable fault repairs, firmware updates, and rapid diagnostic support for existing CCTV setups.",
      enabled: true, // [TODO: Toggle false if not offered]
    },
  },

  // Product Showcase Driven by Configuration
  // [RULE]: Do NOT invent models, specs or copy unauthorized images.
  // Verified Secure Plus product models will be populated here once provided.
  products: [] as CctvProduct[],
  // Example structure when client provides verified models:
  // [
  //   {
  //     id: "sp-dome-2mp",
  //     name: "Secure Plus HD Dome Camera",
  //     category: "Dome Camera",
  //     shortDescription: "High-definition indoor surveillance with night vision for homes and offices.",
  //     image: "/assets/cctv/secure-plus-dome.webp",
  //     alt: "Secure Plus HD Dome CCTV Camera",
  //   }
  // ]

  // Meta and Dates
  lastUpdatedDate: "2026-10-29",
  lastUpdatedDisplay: "October 29, 2026",
};

