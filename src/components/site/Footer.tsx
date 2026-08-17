import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/pragiso-mark.png.asset.json";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const services = ["Web Development", "App Development", "Digital Marketing", "UI/UX Design"];

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
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
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={logoSrc}
                alt="Pragiso Soft Technologies logo"
                width={44}
                height={44}
                loading="lazy"
                className="size-10 3xl:size-12 shrink-0 rounded-lg bg-foreground object-contain p-0.5 transition-all duration-500 hover:rotate-[360deg] hover:shadow-[0_0_20px_-5px_var(--electric)]"
              />
              <span className="min-w-0">
                <span className="block text-sm sm:text-base 3xl:text-lg font-bold tracking-[0.14em] uppercase">
                  Pragiso Soft Technologies
                </span>
                <span className="block text-[10px] sm:text-xs 3xl:text-sm tracking-[0.3em] text-accent uppercase">
                  Innovate • Build • Grow
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm sm:text-base 3xl:text-lg leading-relaxed text-muted-foreground">
              Solutions that empower growth — modern web, mobile, design and marketing built for
              ambitious businesses.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  to="/"
                  hash="contact"
                  aria-label={s.label}
                  className="grid size-9 3xl:size-11 place-items-center rounded-lg border border-border bg-secondary/30 text-muted-foreground transition-all duration-500 hover:-translate-y-1.5 hover:text-accent hover:border-accent/40 hover:bg-accent/10 hover:shadow-[0_0_20px_-5px_var(--accent)] hover:scale-110"
                >
                  <s.icon className="size-4 3xl:size-5" aria-hidden />
                </Link>
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
            <h3 className="text-sm sm:text-base 3xl:text-lg font-semibold tracking-[0.16em] uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/"
                    hash="services"
                    className="link-underline text-sm sm:text-base 3xl:text-lg text-muted-foreground transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block"
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
                <a href="mailto:pragisosofts@gmail.com" className="hover:text-accent">
                  pragisosofts@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.pragisotech.in" className="hover:text-accent">
                  www.pragisotech.in
                </a>
              </li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-border pt-7 text-center text-xs sm:text-sm 3xl:text-base text-muted-foreground">
          © 2026 Pragiso Soft Technologies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
