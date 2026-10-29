import { createFileRoute, Link } from "@tanstack/react-router";
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
import { CrmFaq } from "@/components/crm/CrmFaq";
import { crmFaqList } from "@/data/crm-faq";

const title = "Pragiso CRM: Field Service Management Software | Free Demo";
const description =
  "Pragiso CRM is field service management software with live GPS tracking, geofenced attendance, and instant PDF call slips. Start a free 7-day demo.";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pragisotech.in/products" },
      { property: "og:image", content: "https://www.pragisotech.in/pragiso-services-hero.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Pragiso CRM — Field Service Management Software" },
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
              publisher: {
                "@type": "Organization",
                "@id": "https://www.pragisotech.in/#organization",
                name: "Pragiso Soft Technologies",
                url: "https://www.pragisotech.in",
              },
              datePublished: "2026-08-20",
              dateModified: "2026-10-29",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
                name: "7-Day Risk-Free Live Demo",
                description:
                  "Full enterprise trial with live GPS fleet dispatch, PWA engineer rollout, and automated conveyance audit for 7 days.",
                url: "https://www.pragisotech.in/products",
                availability: "https://schema.org/InStock",
              },
              // [TODO: Add aggregateRating once verified customer reviews are published visibly on /products]
            },
            {
              "@type": "FAQPage",
              mainEntity: crmFaqList.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
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
      <main id="main">
        {/* Visible Breadcrumb (Matches BreadcrumbList schema: Home > Products > Pragiso CRM) */}
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-5 pt-28 pb-2 lg:px-8 text-xs text-muted-foreground"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-border">/</li>
            <li>
              <Link to="/products" className="hover:text-accent transition-colors">
                Products
              </Link>
            </li>
            <li aria-hidden="true" className="text-border">/</li>
            <li className="font-semibold text-foreground" aria-current="page">
              Pragiso CRM
            </li>
          </ol>
        </nav>

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

        {/* FAQ Section (AEO / GEO optimized with matching FAQPage JSON-LD) */}
        <CrmFaq />

        {/* Partnership & Direct Contact */}
        <CrmPartnership />

        {/* Visible Last Updated indicator */}
        <footer className="border-t border-border/40 py-8 text-center text-xs text-muted-foreground">
          <p>
            Last updated: <time dateTime="2026-10-29">October 29, 2026</time> • Pragiso Soft Technologies • Coimbatore, Tamil Nadu, India
          </p>
        </footer>
      </main>
      <Footer />
    </div>
  );
}
