import { useMemo } from "react";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  Zap,
  CheckCircle2,
  Globe,
  Cpu,
  Layers,
  Database,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTilt } from "@/hooks/use-tilt";
import logo from "@/assets/pragiso-logo.png.asset.json";

const particles = [
  { top: "18%", left: "12%", size: 10, delay: "0s", speed: "7s" },
  { top: "62%", left: "8%", size: 6, delay: "1.4s", speed: "9s" },
  { top: "30%", left: "82%", size: 12, delay: "0.7s", speed: "11s" },
  { top: "72%", left: "74%", size: 8, delay: "2.1s", speed: "8s" },
  { top: "44%", left: "48%", size: 5, delay: "1.1s", speed: "10s" },
  { top: "85%", left: "25%", size: 7, delay: "0.4s", speed: "12s" },
  { top: "15%", left: "65%", size: 9, delay: "1.8s", speed: "6s" },
  { top: "55%", left: "92%", size: 4, delay: "2.5s", speed: "13s" },
];

// Service-relevant background floating badges
const ambientTechBadges = [
  {
    icon: Code2,
    label: "Web Dev & React",
    pos: "top-[16%] left-[3%] sm:left-[6%]",
    animation: "animate-float",
    delay: "0s",
  },
  {
    icon: Smartphone,
    label: "iOS • Android",
    pos: "top-[22%] right-[2%] sm:right-[5%]",
    animation: "animate-float-reverse",
    delay: "1.2s",
  },
  {
    icon: Palette,
    label: "UI/UX Craft",
    pos: "bottom-[22%] left-[2%] sm:left-[5%]",
    animation: "animate-float-reverse",
    delay: "2.5s",
  },
  {
    icon: TrendingUp,
    label: "+150% SEO Growth",
    pos: "bottom-[18%] right-[3%] sm:right-[6%]",
    animation: "animate-float",
    delay: "1.8s",
  },
  {
    icon: Database,
    label: "Cloud Architecture",
    pos: "top-[52%] left-[1%]",
    animation: "animate-float",
    delay: "3.1s",
  },
  {
    icon: Cpu,
    label: "Custom API & AI",
    pos: "top-[48%] right-[1%]",
    animation: "animate-float-reverse",
    delay: "2.1s",
  },
];

const logoSrc = typeof logo === "string" ? logo : logo?.url || "/favicon.png";

const serviceHighlights = [
  { icon: Code2, label: "Web Development" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: TrendingUp, label: "Digital Growth" },
];

export function Hero() {
  const { ref: tiltRef, style: tiltStyle, onMove, onLeave } = useTilt<HTMLDivElement>(5, 900);

  // Memoize orbiting decorative dots
  const orbitDots = useMemo(
    () =>
      Array.from({ length: 3 }).map((_, i) => ({
        size: 6 + i * 2,
        duration: `${20 + i * 8}s`,
        radius: `${120 + i * 60}px`,
        delay: `${i * -5}s`,
      })),
    [],
  );

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden min-h-screen flex items-center pt-20 pb-16 md:pt-24 md:pb-20"
    >
      {/* Base Dark Gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />

      {/* Cyber Grid Backdrop */}
      <div aria-hidden className="grid-backdrop absolute inset-0 -z-30 opacity-30" />

      {/* Laser Scanning Beams across Hero Grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="animate-scan-beam-h absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-[1px]" />
        <div className="animate-scan-beam-v absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-electric/30 to-transparent blur-[1px]" />
      </div>

      {/* Animated Glowing Nebula Blurs */}
      <div
        aria-hidden
        className="animate-drift glow-breathe absolute -top-40 -left-32 -z-20 h-[32rem] w-[32rem] rounded-full bg-primary/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="animate-drift glow-breathe absolute -right-32 bottom-0 -z-20 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[130px]"
        style={{ animationDelay: "2s" }}
      />
      <div
        aria-hidden
        className="animate-pulse-slow absolute top-1/3 right-1/4 -z-20 h-[22rem] w-[22rem] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          aria-hidden
          className="animate-float absolute -z-10 rounded-sm bg-accent/50 blur-[1px]"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.speed,
          }}
        />
      ))}

      {/* Service-Relevant Floating Tech Badges in Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden xl:block">
        {ambientTechBadges.map((badge, i) => {
          const IconComponent = badge.icon;
          return (
            <div
              key={badge.label}
              className={`absolute ${badge.pos} ${badge.animation} flex items-center gap-2 rounded-xl border border-white/10 bg-secondary/30 px-3 py-1.5 backdrop-blur-md shadow-lg opacity-40 hover:opacity-90 transition-opacity duration-500`}
              style={{ animationDelay: badge.delay, animationDuration: `${10 + i * 2}s` }}
            >
              <span className="grid size-6 place-items-center rounded-lg bg-accent/20 text-accent">
                <IconComponent className="size-3.5" />
              </span>
              <span className="text-[11px] font-medium tracking-wide text-foreground/80">
                {badge.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Constellation Tech Connection Lines SVG */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full opacity-20"
      >
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--electric)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <line
          x1="10%"
          y1="20%"
          x2="25%"
          y2="40%"
          stroke="url(#line-grad)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="75%"
          y1="15%"
          x2="88%"
          y2="35%"
          stroke="url(#line-grad)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="15%"
          y1="70%"
          x2="30%"
          y2="85%"
          stroke="url(#line-grad)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="70%"
          y1="75%"
          x2="85%"
          y2="60%"
          stroke="url(#line-grad)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle
          cx="10%"
          cy="20%"
          r="3"
          fill="var(--cyan)"
          className="animate-ping"
          style={{ animationDuration: "4s" }}
        />
        <circle
          cx="88%"
          cy="35%"
          r="3"
          fill="var(--electric)"
          className="animate-ping"
          style={{ animationDuration: "6s" }}
        />
        <circle
          cx="15%"
          cy="70%"
          r="3"
          fill="var(--accent)"
          className="animate-ping"
          style={{ animationDuration: "5s" }}
        />
      </svg>

      {/* Orbiting decorative rings */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
      >
        {orbitDots.map((d, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-accent/30"
            style={
              {
                width: d.size,
                height: d.size,
                animation: `orbit ${d.duration} linear infinite`,
                animationDelay: d.delay,
                "--orbit-radius": d.radius,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="reveal" data-visible="true">
          <span className="animate-badge-bounce inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            <Sparkles className="size-3.5 animate-pulse" /> Innovate • Build • Grow
          </span>
          <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            {["We", "Build"].map((word, i) => (
              <span
                key={word}
                className="inline-block opacity-0"
                style={{
                  animation: "reveal-up 800ms cubic-bezier(0.22,1,0.36,1) forwards",
                  animationDelay: `${300 + i * 120}ms`,
                }}
              >
                {word}&nbsp;
              </span>
            ))}
            {["Digital", "Experiences"].map((word, i) => (
              <span
                key={word}
                className="text-gradient inline-block opacity-0"
                style={{
                  animation: "reveal-up 800ms cubic-bezier(0.22,1,0.36,1) forwards",
                  animationDelay: `${540 + i * 120}ms`,
                }}
              >
                {word}&nbsp;
              </span>
            ))}
            {["That", "Drive", "Growth."].map((word, i) => (
              <span
                key={word}
                className="inline-block opacity-0"
                style={{
                  animation: "reveal-up 800ms cubic-bezier(0.22,1,0.36,1) forwards",
                  animationDelay: `${780 + i * 120}ms`,
                }}
              >
                {word}&nbsp;
              </span>
            ))}
          </h1>
          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg opacity-0"
            style={{
              animation: "reveal-up 800ms cubic-bezier(0.22,1,0.36,1) forwards",
              animationDelay: "1100ms",
            }}
          >
            Pragiso Soft Technologies transforms ideas into powerful websites, mobile applications,
            digital experiences and growth-focused solutions.
          </p>
          <div
            className="mt-9 flex flex-wrap items-center gap-3 opacity-0"
            style={{
              animation: "reveal-up 800ms cubic-bezier(0.22,1,0.36,1) forwards",
              animationDelay: "1300ms",
            }}
          >
            <Button variant="hero" size="xl" className="btn-magnetic rounded-xl" asChild>
              <a href="#contact">
                Start Your Project <ArrowRight />
              </a>
            </Button>
            <Button variant="glass" size="xl" className="btn-magnetic rounded-xl" asChild>
              <a href="#portfolio">Explore Our Work</a>
            </Button>
          </div>
          <p className="mt-10 text-xs font-semibold tracking-[0.32em] text-muted-foreground uppercase text-shimmer-animated">
            Design • Technology • Growth
          </p>
        </div>

        {/* Hero Digital Services & Tech Showcase Card — 3D tilt */}
        <div className="reveal relative mx-auto w-full max-w-lg lg:max-w-none" data-visible="true">
          <div
            aria-hidden
            className="absolute inset-4 rounded-[2.5rem] glow-breathe"
            style={{ backgroundImage: "var(--gradient-brand)", opacity: 0.3 }}
          />

          <div
            ref={tiltRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="card-shine glass-panel relative rounded-[2rem] p-5 shadow-[var(--shadow-glow)] border border-white/10 overflow-hidden"
            style={tiltStyle as React.CSSProperties}
          >
            {/* Spotlight glow that tracks the mouse cursor */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-[2] opacity-0 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle 280px at var(--spotlight-x, 50%) var(--spotlight-y, 50%), color-mix(in oklab, var(--cyan) 14%, transparent), transparent 70%)`,
                opacity: tiltStyle.transform.includes("scale3d(1.02") ? 1 : 0,
              }}
            />

            {/* Top Brand & Live Status Header */}
            <div className="flex items-center justify-between gap-3 mb-4 px-1">
              <div className="flex items-center gap-2.5">
                <img
                  src={logoSrc}
                  alt="Pragiso Soft Technologies logo"
                  width={28}
                  height={28}
                  className="size-7 rounded-lg bg-foreground object-contain p-0.5 shadow-sm transition-transform duration-500 hover:rotate-[360deg]"
                />
                <div>
                  <span className="block text-xs font-bold tracking-wider uppercase text-foreground">
                    Pragiso Digital Suite
                  </span>
                  <span className="block text-[10px] text-muted-foreground">
                    Enterprise Solutions
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-400 backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                Showcase
              </span>
            </div>

            {/* High-Resolution Digital Services Showcase Image */}
            <div className="relative overflow-hidden rounded-xl group border border-border/40 shadow-inner">
              <img
                src="/pragiso-services-hero.png"
                alt="Pragiso Soft Technologies digital services mockup showcasing web development, mobile apps, and growth analytics"
                width={600}
                height={400}
                className="h-[280px] sm:h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

              {/* Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 rounded-lg bg-background/80 p-3 backdrop-blur-md border border-white/10 shadow-lg transition-transform duration-500 group-hover:translate-y-[-4px]">
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-accent shrink-0 animate-pulse-ring" />
                  <span className="text-xs font-semibold text-foreground">
                    High-Performance Tech Stack
                  </span>
                </div>
                <span className="text-[11px] font-medium text-accent">100% Custom Built</span>
              </div>
            </div>

            {/* Key Services Pill Grid */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {serviceHighlights.map((s, i) => (
                <div
                  key={s.label}
                  className="hover-lift card-shine flex flex-col items-center justify-center p-2.5 rounded-xl border border-border/60 bg-secondary/30 text-center cursor-default"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <s.icon className="size-4 text-accent mb-1 transition-transform duration-500 group-hover:rotate-12" />
                  <span className="text-[11px] font-medium text-foreground">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Floating Impact Stat Badge */}
            <div className="mt-3 flex items-center justify-between gap-2 px-1 pt-2 border-t border-border/40 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <CheckCircle2 className="size-3.5" /> 99.8% Client Satisfaction
              </span>
              <span className="font-semibold text-accent">+150% Digital Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
