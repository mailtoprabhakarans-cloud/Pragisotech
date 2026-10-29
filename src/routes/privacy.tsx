import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ShieldCheck } from "lucide-react";

const title = "Privacy Policy | Pragiso Soft Technologies";
const description =
  "Read the privacy policy of Pragiso Soft Technologies. Learn how we handle, process, and protect your personal and business data across our website and SaaS products.";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pragisotech.in/privacy" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://www.pragisotech.in/privacy" }],
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
                  name: "Privacy Policy",
                  item: "https://www.pragisotech.in/privacy",
                },
              ],
            },
            {
              "@type": "WebPage",
              "@id": "https://www.pragisotech.in/privacy#webpage",
              url: "https://www.pragisotech.in/privacy",
              name: "Privacy Policy",
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

function PrivacyPage() {
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
              Privacy Policy
            </li>
          </ol>
        </nav>

        <article className="mx-auto max-w-5xl px-5 py-12 md:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-secondary/70 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-md">
            <ShieldCheck className="size-3.5" />
            <span className="tracking-wide uppercase">Legal & Compliance</span>
          </div>

          <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Privacy Policy
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
            Effective Date: <time dateTime="2026-10-29">October 29, 2026</time> • Pragiso Soft Technologies
          </p>

          <div className="mt-10 space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-border/80">
              <h2 className="font-display text-xl font-bold text-foreground">1. Introduction</h2>
              <p className="mt-3">
                Pragiso Soft Technologies (&quot;Pragiso&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operating from Coimbatore, Tamil Nadu, India, respects your privacy and is dedicated to protecting any personal and operational data you provide when accessing our website (https://www.pragisotech.in) and our software products, including Pragiso CRM.
              </p>
            </section>

            <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-border/80">
              <h2 className="font-display text-xl font-bold text-foreground">2. Information We Collect</h2>
              <p className="mt-3">We collect information that you knowingly provide to us, including:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Contact information: name, email address, telephone number, and company name.</li>
                <li>Inquiry and demo requests submitted through our contact and registration forms.</li>
                <li>Operational SaaS data for Pragiso CRM: technician names, dispatch locations, attendance logs, and service call reports necessary to provide field management functionality.</li>
                <li>Technical analytics: browser type, anonymized IP addresses, and page navigation patterns via privacy-preserving analytics.</li>
              </ul>
            </section>

            <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-border/80">
              <h2 className="font-display text-xl font-bold text-foreground">3. How We Use Your Data</h2>
              <p className="mt-3">We use your information exclusively to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Respond to inquiries, provide quotes, and deliver requested software services.</li>
                <li>Provision and support the Pragiso CRM 7-day live demo for your organization.</li>
                <li>Maintain system performance, security, and fraud prevention.</li>
                <li>Comply with applicable legal and statutory regulations.</li>
              </ul>
            </section>

            <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-border/80">
              <h2 className="font-display text-xl font-bold text-foreground">4. Data Security & Storage</h2>
              <p className="mt-3">
                We implement role-based access control, encrypted data transmission (HTTPS/TLS), and secure cloud infrastructure to prevent unauthorized access or accidental disclosure of your information.
              </p>
            </section>

            <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-border/80">
              <h2 className="font-display text-xl font-bold text-foreground">5. Contact Information</h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at:
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
