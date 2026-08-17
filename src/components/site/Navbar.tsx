import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/pragiso-mark.png.asset.json";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const logoSrc = typeof logo === "string" ? logo : logo?.url || "/favicon.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "link-underline rounded-full px-3.5 py-2 text-sm 3xl:text-base 3xl:px-4 text-muted-foreground transition-all duration-300 hover:bg-secondary/60 hover:text-foreground";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-panel border-b shadow-[var(--shadow-elegant)]"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid fluid-container grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3.5 3xl:py-5"
      >
        <a href="#home" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
          <img
            src={logoSrc}
            alt="Pragiso Soft Technologies logo"
            width={40}
            height={40}
            className="h-9 w-9 sm:h-10 sm:w-10 3xl:h-12 3xl:w-12 shrink-0 rounded-lg bg-foreground object-contain p-0.5 transition-all duration-500 group-hover:rotate-[360deg] group-hover:shadow-[0_0_20px_-5px_var(--electric)]"
          />

          <span className="min-w-0">
            <span className="block truncate text-sm sm:text-base 3xl:text-lg font-bold tracking-[0.16em] uppercase transition-colors duration-300 group-hover:text-accent">
              Pragiso
            </span>
            <span className="block truncate text-[10px] sm:text-xs 3xl:text-sm tracking-[0.28em] text-accent uppercase">
              Soft Technologies
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2 3xl:gap-4">
          <ul className="hidden items-center gap-1 xl:flex 3xl:gap-2">
            {links.map((l) => {
              const isHash = l.href.startsWith("#");
              return (
              <li key={l.href}>
                {isHash ? (
                  <Link to="/" hash={l.href.slice(1)} className={linkClass}>
                    {l.label}
                  </Link>
                ) : l.href.startsWith("/") ? (
                  <Link to={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                ) : (
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                )}
              </li>
              );
            })}
          </ul>
          <Button
            variant="hero"
            size="lg"
            className="btn-magnetic hidden rounded-full sm:inline-flex 3xl:text-base 3xl:px-6 3xl:py-3"
            asChild
          >
            <Link to="/" hash="contact">Let's Talk</Link>
          </Button>
          <Button
            variant="glass"
            size="icon"
            className="rounded-full xl:hidden transition-transform duration-300 hover:rotate-180"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu with staggered animation */}
      <div
        className={cn(
          "glass-panel border-t xl:hidden transition-all duration-500 overflow-hidden",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-t-transparent",
        )}
      >
        <ul className="fluid-container grid gap-1 py-4">
          {links.map((l, i) => {
            const isHash = l.href.startsWith("#");
            return (
            <li
              key={l.href}
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-20px)",
                transition: `all 400ms cubic-bezier(0.22,1,0.36,1)`,
                transitionDelay: open ? `${i * 50}ms` : "0ms",
              }}
            >
              {isHash ? (
                <Link
                  to="/"
                  hash={l.href.slice(1)}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary/60 hover:text-foreground hover:translate-x-1"
                >
                  {l.label}
                </Link>
              ) : l.href.startsWith("/") ? (
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary/60 hover:text-foreground hover:translate-x-1"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary/60 hover:text-foreground hover:translate-x-1"
                >
                  {l.label}
                </a>
              )}
            </li>
            );
          })}
          <li
            className="pt-2"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(10px)",
              transition: "all 400ms cubic-bezier(0.22,1,0.36,1)",
              transitionDelay: open ? `${links.length * 50}ms` : "0ms",
            }}
          >
            <Button variant="hero" size="xl" className="btn-magnetic w-full rounded-xl" asChild>
              <Link to="/" hash="contact" onClick={() => setOpen(false)}>
                Let's Talk
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
