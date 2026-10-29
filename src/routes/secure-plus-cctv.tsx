import { useCallback, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CctvHero } from "@/components/cctv/CctvHero";
import { CctvAuthorisedDealer } from "@/components/cctv/CctvAuthorisedDealer";
import { CctvResidentialCommercial } from "@/components/cctv/CctvResidentialCommercial";
import { CctvServicesList } from "@/components/cctv/CctvServicesList";
import { CctvProductShowcase } from "@/components/cctv/CctvProductShowcase";
import { CctvHowWeWork } from "@/components/cctv/CctvHowWeWork";
import { CctvFaq } from "@/components/cctv/CctvFaq";
import { CctvEnquiryForm } from "@/components/cctv/CctvEnquiryForm";
import { CctvStickyMobileBar } from "@/components/cctv/CctvStickyMobileBar";
import { cctvFaqList } from "@/data/cctv-faq";
import { cctvConfig } from "@/config/cctv.config";

const title = "Secure Plus CCTV Dealer & Installation | Pragiso Soft Technologies";
const description =
  "Authorised Secure Plus CCTV dealer in Coimbatore. CCTV camera sales, home and commercial installation, DVR/NVR setup and maintenance. Request a quote.";

export const Route = createFileRoute("/secure-plus-cctv")({
  component: SecurePlusCctvPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pragisotech.in/secure-plus-cctv" },
      { property: "og:image", content: "https://www.pragisotech.in/pragiso-services-hero.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Secure Plus CCTV Authorised Dealer — Pragiso Soft Technologies" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://www.pragisotech.in/pragiso-services-hero.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.pragisotech.in/secure-plus-cctv" }],
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
                  name: "Secure Plus CCTV",
                  item: "https://www.pragisotech.in/secure-plus-cctv",
                },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://www.pragisotech.in/secure-plus-cctv#service",
              name: "Secure Plus CCTV Camera Supply and Installation",
              serviceType: "CCTV Camera Installation and Sales",
              description:
                "Authorised Secure Plus CCTV dealer in Coimbatore. CCTV camera sales, home and commercial installation, DVR/NVR setup and maintenance.",
              url: "https://www.pragisotech.in/secure-plus-cctv",
              provider: {
                "@type": "Organization",
                "@id": "https://www.pragisotech.in/#organization",
                name: "Pragiso Soft Technologies",
                url: "https://www.pragisotech.in",
              },
              areaServed: {
                "@type": "City",
                name: "Coimbatore",
              },
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: "https://www.pragisotech.in/secure-plus-cctv",
                servicePhone: cctvConfig.contact.callingPhone,
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: cctvFaqList.map((faq) => ({
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

function SecurePlusCctvPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [propertyType, setPropertyType] = useState("Residential");

  const scrollToForm = useCallback(
    (type?: string) => {
      if (type) setPropertyType(type);
      const el = document.getElementById("cctv-quote-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main id="main">
        {/* Visible Breadcrumb */}
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
            <li className="font-semibold text-foreground" aria-current="page">
              Secure Plus CCTV
            </li>
          </ol>
        </nav>

        {/* Hero Section with H1, Authorised Dealer Statement and CTA Buttons */}
        <CctvHero onScrollToForm={scrollToForm} />

        {/* Authorised Dealer Announcement (Certificate Image Placeholder) */}
        <CctvAuthorisedDealer />

        {/* Residential vs Commercial CCTV */}
        <CctvResidentialCommercial onSelectPropertyType={(t) => scrollToForm(t)} />

        {/* Technical Service Offerings (config-driven flags) */}
        <CctvServicesList onScrollToForm={() => scrollToForm()} />

        {/* Product Showcase (config-driven array) */}
        <CctvProductShowcase />

        {/* How We Work: 4-Step Process */}
        <CctvHowWeWork />

        {/* FAQ Section with matching FAQPage JSON-LD */}
        <CctvFaq />

        {/* Enquiry Form & CTA Section */}
        <div ref={formRef}>
          <CctvEnquiryForm initialPropertyType={propertyType} />
        </div>

        {/* Visible Last Updated date */}
        <footer className="border-t border-border/40 py-8 text-center text-xs text-muted-foreground">
          <p>
            Last updated: <time dateTime={cctvConfig.lastUpdatedDate}>{cctvConfig.lastUpdatedDisplay}</time> • Pragiso Soft Technologies • Coimbatore, Tamil Nadu, India
          </p>
        </footer>
      </main>

      {/* Sticky Mobile CTA bar (visible only below md breakpoint) */}
      <CctvStickyMobileBar onScrollToForm={() => scrollToForm()} />

      <Footer />
    </div>
  );
}

