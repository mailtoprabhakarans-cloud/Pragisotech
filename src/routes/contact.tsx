import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";

const title = "Contact Us | Pragiso Soft Technologies — Coimbatore";
const description =
  "Get in touch with Pragiso Soft Technologies in Coimbatore, Tamil Nadu. Reach out for custom web development, mobile apps, digital marketing, or Pragiso CRM demos.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pragisotech.in/contact" },
      { property: "og:image", content: "https://www.pragisotech.in/pragiso-services-hero.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://www.pragisotech.in/contact" }],
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
                  name: "Contact Us",
                  item: "https://www.pragisotech.in/contact",
                },
              ],
            },
            {
              "@type": "ContactPage",
              "@id": "https://www.pragisotech.in/contact#webpage",
              url: "https://www.pragisotech.in/contact",
              name: "Contact Pragiso Soft Technologies",
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

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Message received! Our team will get back to you shortly.");
    }, 600);
  };

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
              Contact Us
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative py-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[50rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
          />
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-secondary/70 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-md">
                <MessageSquare className="size-3.5" />
                <span className="tracking-wide uppercase">Let's Connect</span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                Get in Touch with{" "}
                <span className="text-gradient">Pragiso Tech</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Have a project in mind, need enterprise field service automation, or want to explore digital growth for your business? We’re ready to assist.
              </p>
            </div>

            {/* Grid */}
            <div className="mt-14 grid gap-10 lg:grid-cols-12">
              {/* Contact Info (5 cols) */}
              <div className="space-y-6 lg:col-span-5">
                <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-border/80">
                  <h2 className="font-display text-xl font-bold text-foreground">Contact Details</h2>
                  <div className="mt-6 space-y-6 text-sm sm:text-base">
                    <div className="flex items-start gap-3.5">
                      <div className="rounded-xl bg-accent/10 p-2.5 text-accent">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a
                          href="mailto:contact@pragisotech.in"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          contact@pragisotech.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="rounded-xl bg-cyan/10 p-2.5 text-cyan">
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <a
                          href="tel:+919080961649"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          +91-90809-61649
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="rounded-xl bg-teal/10 p-2.5 text-teal">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Office Location</p>
                        <p className="text-muted-foreground">
                          Coimbatore, Tamil Nadu, India<br />
                          <span className="text-xs text-muted-foreground/80">[TODO: Add official street address and postal code]</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="rounded-xl bg-secondary p-2.5 text-foreground">
                        <Clock className="size-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Business Hours</p>
                        <p className="text-muted-foreground">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-panel rounded-3xl p-6 border border-emerald-500/30 bg-emerald-950/15">
                  <h3 className="font-bold text-foreground">Need a Pragiso CRM Demo?</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                    Test our field service CRM with 7 days of risk-free access. You can also message our technical team directly on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/919080961649?text=Hi%20Pragiso%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:underline"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              {/* Form (7 cols) - Accessible with label for, name, type, autocomplete */}
              <div className="lg:col-span-7">
                <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-border/80">
                  <h2 className="font-display text-2xl font-bold text-foreground">Send Us a Message</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill out the form below and we will respond within one business day.
                  </p>

                  {submitted ? (
                    <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center">
                      <CheckCircle2 className="mx-auto size-12 text-emerald-400" />
                      <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                        Thank You!
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        We have received your message and will reach out to you shortly.
                      </p>
                      <Button
                        variant="glass"
                        className="mt-6 rounded-full"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                          >
                            Full Name <span className="text-accent">*</span>
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="John Doe"
                            className="mt-2 w-full rounded-xl border border-border/80 bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                          >
                            Email Address <span className="text-accent">*</span>
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@company.com"
                            className="mt-2 w-full rounded-xl border border-border/80 bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="contact-phone"
                            className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                          >
                            Phone Number
                          </label>
                          <input
                            id="contact-phone"
                            name="tel"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+91 98765 43210"
                            className="mt-2 w-full rounded-xl border border-border/80 bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="contact-subject"
                            className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                          >
                            Subject
                          </label>
                          <input
                            id="contact-subject"
                            name="subject"
                            type="text"
                            autoComplete="off"
                            placeholder="e.g. Pragiso CRM inquiry or Web App"
                            className="mt-2 w-full rounded-xl border border-border/80 bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Message / Project Brief <span className="text-accent">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={4}
                          required
                          autoComplete="off"
                          placeholder="Tell us about your project requirements or the size of your field operations team..."
                          className="mt-2 w-full rounded-xl border border-border/80 bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        disabled={loading}
                        className="w-full rounded-full shadow-[var(--shadow-glow)]"
                      >
                        {loading ? "Sending..." : "Send Message"}
                        <Send className="ml-2 size-4" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

