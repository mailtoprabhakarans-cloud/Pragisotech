import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CrmHero } from "@/components/crm/CrmHero";
import { CrmPainPoints } from "@/components/crm/CrmPainPoints";
import { CrmStakeholders } from "@/components/crm/CrmStakeholders";
import { CrmInteractivePreview } from "@/components/crm/CrmInteractivePreview";
import { CrmFeatureGrid } from "@/components/crm/CrmFeatureGrid";
import { CrmTechStack } from "@/components/crm/CrmTechStack";
import { CrmRoleMatrix } from "@/components/crm/CrmRoleMatrix";
import { CrmSevenDayDemo } from "@/components/crm/CrmSevenDayDemo";
import { CrmPartnership } from "@/components/crm/CrmPartnership";

const title = "Pragiso CRM — Enterprise Field Service Management Platform | 7-Day Free Demo";
const description =
  "Pragiso CRM connects dispatchers, field engineers, and corporate clients with live GPS tracking, geofenced attendance, screen-off PWA, instant PDF call slips, and payment audits. Start your 7-day risk-free live demo today.";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Pragiso CRM, Field Service CRM, Field Service Management software, GPS fleet tracking software, engineer dispatch system, geofenced attendance PWA, mobile field service app, OSRM route audit, digital service call slip PDF, CRM Coimbatore, field technician tracking software India, Pragiso Soft Technologies",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pragisotech.in/products" },
      { property: "og:image", content: "https://www.pragisotech.in/pragiso-services-hero.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Pragiso CRM — Enterprise Field Service Management" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://www.pragisotech.in/pragiso-services-hero.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.pragisotech.in/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.pragisotech.in/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Products",
                  item: "https://www.pragisotech.in/products",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Pragiso CRM",
                  item: "https://www.pragisotech.in/products",
                },
              ],
            },
            {
              "@type": ["SoftwareApplication", "Product"],
              "@id": "https://www.pragisotech.in/products#pragiso-crm",
              name: "Pragiso CRM",
              alternateName: "Pragiso Field Service CRM",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, Progressive Web App (Android, iOS)",
              description: description,
              url: "https://www.pragisotech.in/products",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
                name: "7-Day Risk-Free Live Demo",
                description: "Full enterprise trial with live GPS fleet dispatch, PWA engineer rollout, and automated conveyance audit for 7 days.",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "48",
              },
              creator: {
                "@type": "Organization",
                name: "Pragiso Soft Technologies",
                url: "https://www.pragisotech.in",
              },
            },
          ],
        }),
      },
    ],
  }),
});

function ProductsPage() {
  const scrollToDemo = () => {
    const el = document.getElementById("demo-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        {/* Hero with live control room dispatch mockup and stats */}
        <CrmHero onOpenDemoModal={scrollToDemo} />

        {/* 7-Day Live Demo Journey & Registration Form (Top Priority for Conversions) */}
        <CrmSevenDayDemo />

        {/* Problems Solved Comparison */}
        <CrmPainPoints />

        {/* 3 Stakeholders: Admin, Engineer, Client */}
        <CrmStakeholders />

        {/* Platform in Action: Desktop BI & Mobile PWA */}
        <CrmInteractivePreview />

        {/* 12 Core Feature Grid with Category Filters */}
        <CrmFeatureGrid />

        {/* Modern Cloud Tech Stack */}
        <CrmTechStack />

        {/* Role-Based Security Matrix */}
        <CrmRoleMatrix />

        {/* Partnership & Direct Contact */}
        <CrmPartnership />
      </main>
      <Footer />
    </div>
  );
}
