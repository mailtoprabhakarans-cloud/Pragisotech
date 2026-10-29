import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/pragiso-mark.png.asset.json";
import { PragisoBrandBadge } from "./PragisoBrandLogo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products (Pragiso CRM)", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const products = [
  { label: "Pragiso CRM", href: "/products", badge: "7-Day Demo" },
  { label: "Field Service Mobile PWA", href: "/products" },
  { label: "GPS Fleet Tracking System", href: "/products" },
];

const services = ["Web Development", "App Development", "Digital Marketing", "UI/UX Design"];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/pragiso-soft-technologies/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/pragisotech/" },
  { icon: Facebook, label: "Facebook", href: "/contact" },
  { icon: Youtube, label: "YouTube", href: "/contact" },
];

const logoSrc = typeof logo === "string" ? logo : logo?.url || "/favicon.png";

export function Footer() {
  return (
    <footer
      className="relative border-t border-border"
      style={{ backgroundColor: "var(--navy-deep)" }}
    >
      <div className="mx-auto fluid-container py-16 3xl:py-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 3xl:gap-16">
          <div>
            <div className="flex min-w-0 items-center">
              <PragisoBrandBadge markSrc={logoSrc} subtitle="Innovate • Build • Grow" size="lg" />
            </div>
            <p className="mt-5 max-w-xs text-sm sm:text-base 3xl:text-lg leading-relaxed text-muted-foreground">
              Solutions that empower growth — modern web, mobile, design and marketing built for
              ambitious businesses.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href !== "#contact" ? "_blank" : undefined}
                  rel={s.href !== "#contact" ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="grid size-9 3xl:size-11 place-items-center rounded-lg border border-border bg-secondary/30 text-muted-foreground transition-all duration-500 hover:-translate-y-1.5 hover:text-accent hover:border-accent/40 hover:bg-accent/10 hover:shadow-[0_0_20px_-5px_var(--accent)] hover:scale-110"
                >
                  <s.icon className="size-4 3xl:size-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-sm sm:text-base 3xl:text-lg font-semibold tracking-[0.16em] uppercase">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => {
                const isHash = l.href.startsWith("#");
                return (
                <li key={l.label}>
                  {isHash ? (
                    <Link
                      to="/"
                      hash={l.href.slice(1)}
                      className="link-underline text-sm sm:text-base 3xl:text-lg text-muted-foreground transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <Link
                      to={l.href}
                      className="link-underline text-sm sm:text-base 3xl:text-lg text-muted-foreground transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
                );
              })}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm sm:text-base 3xl:text-lg font-semibold tracking-[0.16em] uppercase text-foreground">
              Products & Solutions
            </h3>
            <ul className="mt-5 space-y-2.5">
              {products.map((p) => (
                <li key={p.label}>
                  <Link
                    to={p.href}
                    className="link-underline text-sm sm:text-base 3xl:text-lg text-muted-foreground transition-all duration-300 hover:text-accent hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    <span>{p.label}</span>
                    {p.badge && (
                      <span className="rounded-full bg-cyan/20 px-1.5 py-0.5 text-[10px] font-bold text-cyan">
                        {p.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mt-6 text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-muted-foreground">
              Core Services
            </h4>
            <ul className="mt-3 space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/"
                    hash="services"
                    className="link-underline text-xs sm:text-sm text-muted-foreground/80 transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm sm:text-base 3xl:text-lg font-semibold tracking-[0.16em] uppercase">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm sm:text-base 3xl:text-lg text-muted-foreground">
              <li>
                <a href="tel:+919080961649" className="hover:text-accent transition-colors font-medium">
                  +91-90809-61649
                </a>
              </li>
              <li>
                <a href="mailto:contact@pragisotech.in" className="hover:text-accent transition-colors">
                  contact@pragisotech.in
                </a>
              </li>
              <li>
                <a href="https://www.pragisotech.in" className="hover:text-accent transition-colors font-medium">
                  www.pragisotech.in
                </a>
              </li>
              <li>Coimbatore, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>© 2026 Pragiso Soft Technologies (PragisoTech • www.pragisotech.in). All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <span aria-hidden="true">•</span>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
