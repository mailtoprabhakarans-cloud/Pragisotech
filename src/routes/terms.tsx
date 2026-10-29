import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FileText } from "lucide-react";

const title = "Terms of Service | Pragiso Soft Technologies";
const description =
  "Review the Terms of Service for Pragiso Soft Technologies and Pragiso CRM SaaS platform. Understand the terms, conditions, and service guidelines.";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pragisotech.in/terms" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://www.pragisotech.in/terms" }],
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
                  name: "Terms of Service",
                  item: "https://www.pragisotech.in/terms",
                },
              ],
            },
            {
              "@type": "WebPage",
              "@id": "https://www.pragisotech.in/terms#webpage",
              url: "https://www.pragisotech.in/terms",
              name: "Terms of Service",
              description: description,
              publisher: {
                "@type": "Organization",
                "@id": "https://www.pragisotech.in/#organization",
              },
            },
          ],
        }),
      },
    ],
  }),
});

function TermsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main id="main">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-5xl px-5 pt-28 pb-2 lg:px-8 text-xs text-muted-foreground"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-border">/</li>
            <li className="font-semibold text-foreground" aria-current="page">
              Terms of Service
            </li>
          </ol>
        </nav>

        <article className="mx-auto max-w-5xl px-5 py-12 md:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-secondary/70 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-md">
            <FileText className="size-3.5" />
            <span className="tracking-wide uppercase">Terms & Conditions</span>
          </div>

          <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Terms of Service
          </h1>

          {/* Legal Draft Notice */}
          <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs sm:text-sm text-amber-200">
            <strong>Notice:</strong> This document is a draft for legal review and customization by Pragiso Soft Technologies before final commercial publication.
          </div>

          <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
            Last modified: <time dateTime="2026-10-29">October 29, 2026</time> • Pragiso Soft Technologies
          </p>

          <div className="mt-10 space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-border/80">
              <h2 className="font-display text-xl font-bold text-foreground">1. Agreement to Terms</h2>
              <p className="mt-3">
                By accessing or using the Pragiso Soft Technologies website (https://www.pragisotech.in) and associated software products (including the Pragiso CRM platform), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you must not access the services.
              </p>
            </section>

            <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-border/80">
              <h2 className="font-display text-xl font-bold text-foreground">2. SaaS Product Usage & 7-Day Demo</h2>
              <p className="mt-3">
                Pragiso CRM offers a 7-day trial period designed for enterprise evaluation. The trial provides access to core fleet dispatch, mobile PWA, and reporting modules. You agree to utilize the platform in compliance with applicable local data regulations and not for any fraudulent, unauthorized, or abusive activity.
              </p>
            </section>

            <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-border/80">
              <h2 className="font-display text-xl font-bold text-foreground">3. Intellectual Property</h2>
              <p className="mt-3">
                All software, codebases, designs, trademarks, logos, and materials published by Pragiso Soft Technologies remain the exclusive property of Pragiso Soft Technologies. Clients retain full ownership of their operational business data, customer records, and uploaded assets.
              </p>
            </section>

            <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-border/80">
              <h2 className="font-display text-xl font-bold text-foreground">4. Limitation of Liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by applicable law, Pragiso Soft Technologies will not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, network disruptions, or GPS signal outages outside our direct control.
              </p>
            </section>

            <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-border/80">
              <h2 className="font-display text-xl font-bold text-foreground">5. Governing Law & Contact</h2>
              <p className="mt-3">
                These terms are governed by and construed in accordance with the laws of India, subject to the jurisdiction of courts in Coimbatore, Tamil Nadu. For questions regarding these terms:
              </p>
              <div className="mt-4 rounded-xl bg-secondary/50 p-4 text-xs sm:text-sm text-foreground">
                <p className="font-semibold">Pragiso Soft Technologies</p>
                <p className="mt-1">Coimbatore, Tamil Nadu, India</p>
                <p className="mt-1">Email: <a href="mailto:contact@pragisotech.in" className="text-accent underline">contact@pragisotech.in</a></p>
                <p className="mt-1">Phone: <a href="tel:+919080961649" className="text-accent underline">+91-90809-61649</a></p>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

