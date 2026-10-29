import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import {
  Building2,
  CheckCircle2,
  Code2,
  Cpu,
  Globe2,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
  Target,
} from "lucide-react";

const title = "About Us | Pragiso Soft Technologies — Coimbatore IT Company";
const description =
  "Learn about Pragiso Soft Technologies, a digital agency and software company in Coimbatore, Tamil Nadu building custom web, mobile, SaaS, and enterprise applications.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pragisotech.in/about" },
      { property: "og:image", content: "https://www.pragisotech.in/pragiso-services-hero.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://www.pragisotech.in/pragiso-services-hero.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.pragisotech.in/about" }],
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
                  name: "About Us",
                  item: "https://www.pragisotech.in/about",
                },
              ],
            },
            {
              "@type": "AboutPage",
              "@id": "https://www.pragisotech.in/about#webpage",
              url: "https://www.pragisotech.in/about",
              name: "About Pragiso Soft Technologies",
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

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main id="main">
        {/* Breadcrumb */}
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
              About Us
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[50rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
          />
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-secondary/70 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-md">
                <Building2 className="size-3.5" />
                <span className="tracking-wide uppercase">Engineering Digital Growth</span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                About{" "}
                <span className="text-gradient">Pragiso Soft Technologies</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Pragiso Soft Technologies is a full-service technology company headquartered in Coimbatore, Tamil Nadu. We specialize in building modern web applications, native & cross-platform mobile apps, cloud architectures, and specialized B2B enterprise software like Pragiso CRM.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 border-t border-border/60 bg-secondary/20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-border/80">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                  <Target className="size-6" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-bold text-foreground">Our Mission</h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  To empower startups, SMEs, and enterprise contractors with reliable, modern, and high-performance digital products. We eliminate operational bottlenecks, paper clutter, and outdated systems through smart software engineering and data-driven marketing.
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-border/80">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Sparkles className="size-6" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-bold text-foreground">Our Vision</h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  To be Coimbatore’s leading software innovation hub, recognized globally for craftsmanship, performance optimization, transparent collaboration, and tangible business returns for every client we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl text-foreground">
                Core Capabilities & Focus
              </h2>
              <p className="mt-3 text-muted-foreground">
                Everything we build is engineered for high speed, search engine visibility, accessibility, and intuitive user experiences.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="glass-panel rounded-2xl p-6 border border-border/80">
                <Code2 className="size-8 text-cyan" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  <Link to="/" hash="services" className="hover:text-accent transition-colors">
                    Web Application Development
                  </Link>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  High-performance web apps built with React, TypeScript, TanStack Start, and modern cloud serverless runtimes.
                </p>
                <Link to="/" hash="services" className="mt-3 inline-block text-xs font-semibold text-accent hover:underline">
                  View web services →
                </Link>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-border/80">
                <Cpu className="size-8 text-electric" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  <Link to="/" hash="services" className="hover:text-accent transition-colors">
                    Mobile App Development
                  </Link>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  Progressive Web Apps and cross-platform mobile solutions with offline capabilities and real-time GPS telemetry.
                </p>
                <Link to="/" hash="services" className="mt-3 inline-block text-xs font-semibold text-accent hover:underline">
                  View mobile services →
                </Link>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-border/80">
                <Globe2 className="size-8 text-teal" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  <Link to="/products" className="hover:text-accent transition-colors">
                    Pragiso CRM (Field Service SaaS)
                  </Link>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  Specialized SaaS solutions including Pragiso CRM for fleet dispatch, geofenced attendance, and instant PDF call slips.
                </p>
                <Link to="/products" className="mt-3 inline-block text-xs font-semibold text-accent hover:underline">
                  Explore Pragiso CRM →
                </Link>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-border/80">
                <Sparkles className="size-8 text-pink-400" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  <Link to="/" hash="services" className="hover:text-accent transition-colors">
                    UI/UX Design & Branding
                  </Link>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  High-converting user interface design, accessible component design systems, wireframes, and enterprise brand identity.
                </p>
                <Link to="/" hash="services" className="mt-3 inline-block text-xs font-semibold text-accent hover:underline">
                  View design services →
                </Link>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-border/80">
                <Target className="size-8 text-amber-400" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  <Link to="/" hash="services" className="hover:text-accent transition-colors">
                    Digital Marketing & SEO
                  </Link>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  Data-driven SEO, Generative Engine Optimization (GEO), performance advertising campaigns, and lead generation funnels.
                </p>
                <Link to="/" hash="services" className="mt-3 inline-block text-xs font-semibold text-accent hover:underline">
                  View marketing services →
                </Link>
              </div>

              <div className="glass-panel rounded-2xl p-6 border border-border/80">
                <ShieldCheck className="size-8 text-emerald-400" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  <Link to="/contact" className="hover:text-accent transition-colors">
                    Custom Cloud & Consulting
                  </Link>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  Scalable cloud infrastructure design, API integrations, database optimization, and dedicated software maintenance.
                </p>
                <Link to="/contact" className="mt-3 inline-block text-xs font-semibold text-accent hover:underline">
                  Discuss a project →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Company Background & Leadership */}
        <section className="py-16 border-t border-border/60 bg-secondary/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="glass-panel rounded-3xl p-8 border border-border/80">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/20 text-accent">
                  <Building2 className="size-6" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-bold text-foreground">Company History</h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Founded:</strong> [TODO: Add official founding year, e.g. 2024] in Coimbatore, Tamil Nadu, India.
                  </p>
                  <p>
                    Pragiso Soft Technologies was established to deliver end-to-end digital solutions for growing enterprises, combining modern web applications, mobile development, UI/UX design, digital marketing, and proprietary SaaS platforms like Pragiso CRM.
                  </p>
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-8 border border-border/80">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                  <Users className="size-6" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-bold text-foreground">Leadership & Team</h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Founders & Leadership:</strong> [TODO: Add founder name(s), executive roles, and key leadership team members].
                  </p>
                  <p>
                    Our multidisciplinary engineering and design team builds production systems focused on performance, accessibility, search authority, and clean UX workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Location */}
        <section className="py-16 border-t border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-cyan/10 p-3 text-cyan">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Headquarters</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Coimbatore, Tamil Nadu, India<br />
                    <span className="text-xs text-muted-foreground/80">[TODO: Add official street address and postal code]</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-accent/10 p-3 text-accent">
                  <Mail className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Official Email</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <a href="mailto:contact@pragisotech.in" className="hover:text-accent transition-colors">
                      contact@pragisotech.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-teal/10 p-3 text-teal">
                  <Phone className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Direct Contact</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <a href="tel:+919080961649" className="hover:text-accent transition-colors">
                      +91-90809-61649
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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

