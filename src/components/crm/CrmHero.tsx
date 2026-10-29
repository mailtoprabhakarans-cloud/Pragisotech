import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Layers,
  Cloud,
  CheckCircle2,
  Play,
  MapPin,
  Clock,
  Radio,
  FileCheck,
  UserCheck,
  PhoneCall,
  Zap,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { crmHeroStats, LIVE_CRM_DEMO_URL } from "@/data/pragiso-crm";

export function CrmHero({ onOpenDemoModal }: { onOpenDemoModal?: () => void }) {
  const [activeTab, setActiveTab] = useState<"desktop" | "mobile">("desktop");
  const [pulsing, setPulsing] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulsing((prev) => !prev);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[50rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-[24rem] w-[24rem] rounded-full bg-teal/15 blur-[120px]"
      />

      {/* Grid pattern overlay */}
      <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0 -z-10 opacity-30" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-secondary/70 px-4 py-1.5 text-xs font-semibold text-accent shadow-[var(--shadow-glow)] backdrop-blur-md">
            <span className="flex size-2 rounded-full bg-accent animate-ping" />
            <span className="tracking-wide uppercase">Pragiso CRM • Product Release 2026</span>
            <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] text-cyan">Enterprise Edition</span>
          </div>

          {/* Main H1 Title (SEO / AEO / GEO optimized) */}
          <h1
            id="hero-heading"
            className="mt-6 max-w-5xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground"
          >
            Field Service Management Software with{" "}
            <span className="text-gradient underline decoration-accent/40 decoration-wavy decoration-2 underline-offset-8">
              Live GPS Tracking
            </span>
          </h1>

          {/* Sub-headline preserved */}
          <p className="mt-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
            Run Your Field Operations{" "}
            <span className="text-gradient">Smarter</span>
          </p>

          {/* X is a... definition sentence */}
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            <strong className="text-foreground font-semibold">Pragiso CRM is field service management software</strong> with live GPS tracking, geofenced attendance, a mobile PWA, and instant PDF call slips connecting dispatchers, field engineers, and corporate clients in real time — eliminating paper slips, guesswork, and lost revenue.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={LIVE_CRM_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:scale-105"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              <ExternalLink className="size-5 transition-transform duration-300 group-hover:scale-110" />
              Launch Live Demo Web App
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#demo-section"
              onClick={(e) => {
                if (onOpenDemoModal) {
                  e.preventDefault();
                  onOpenDemoModal();
                }
              }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-secondary/80 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-secondary hover:border-accent hover:shadow-[var(--shadow-glow)]"
            >
              <Sparkles className="size-4 text-accent" />
              Claim 7-Day Custom Trial
            </a>

            <a
              href="https://wa.me/917904588377?text=Hello%20Pragiso%20Team%2C%20I%20tested%20your%20demo%20at%20demo-crm-xi.vercel.app%20and%20want%20to%20set%20up%20a%207-day%20demo%20for%20my%20company."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-5 py-3.5 text-sm font-medium text-emerald-300 transition-all hover:bg-emerald-950/50 hover:border-emerald-500/60"
            >
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              Instant WhatsApp Support
            </a>
          </div>

          {/* 7-Day Risk-Free Callout */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="size-3.5" /> Live Sandbox Ready: demo-crm-xi.vercel.app
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-cyan">
              <Zap className="size-3.5" /> Zero Server Setup
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-primary">
              <ShieldCheck className="size-3.5" /> 7-Day Risk-Free Deployment
            </span>
          </div>
        </div>

        {/* 4 Core Brochure Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {crmHeroStats.map((st, i) => (
            <div
              key={st.label}
              className="glass-panel card-shine group relative overflow-hidden rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-glow)]"
            >
              <div
                aria-hidden
                className="absolute -right-6 -bottom-6 size-20 rounded-full bg-accent/5 blur-xl group-hover:bg-accent/15 transition-all"
              />
              <p className="text-gradient font-display text-4xl font-black tracking-tight sm:text-5xl">
                {st.value}
              </p>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-foreground">
                {st.label}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{st.subtext}</p>
            </div>
          ))}
        </div>

        {/* Live Interactive Product Mockup Teaser */}
        <div id="live-preview" className="mt-16 scroll-mt-28">
          <div className="glass-panel overflow-hidden rounded-3xl border border-border/80 shadow-[var(--shadow-glow)]">
            {/* Window bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-border/60 bg-secondary/60 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-destructive/80" />
                <span className="size-3 rounded-full bg-amber-500/80" />
                <span className="size-3 rounded-full bg-emerald-500/80" />
                <a
                  href={LIVE_CRM_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 font-mono text-xs text-cyan hover:underline hidden sm:inline-flex items-center gap-1.5"
                >
                  <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                  demo-crm-xi.vercel.app/admin/tracking
                  <ExternalLink className="size-3" />
                </a>
              </div>

              {/* View toggle & Live App Button */}
              <div className="flex items-center gap-2">
                <a
                  href={LIVE_CRM_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan hover:bg-cyan/20 transition-colors"
                >
                  <span>Open Live App</span>
                  <ExternalLink className="size-3" />
                </a>
                <button
                  onClick={() => setActiveTab("desktop")}
                  className={`cursor-pointer rounded-full px-3 py-1 font-medium transition-all ${
                    activeTab === "desktop"
                      ? "bg-primary text-primary-foreground shadow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  🖥️ Control Room Dispatch
                </button>
                <button
                  onClick={() => setActiveTab("mobile")}
                  className={`cursor-pointer rounded-full px-3 py-1 font-medium transition-all ${
                    activeTab === "mobile"
                      ? "bg-primary text-primary-foreground shadow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  📱 Engineer Mobile PWA
                </button>
              </div>
            </div>

            {/* Mockup Display */}
            {activeTab === "desktop" ? (
              <div className="p-4 sm:p-6 lg:p-8 bg-background/40">
                {/* Header Stats in simulation */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-4">
                  <div className="rounded-xl border border-border/60 bg-secondary/30 p-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Active Engineers</span>
                      <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                    <p className="mt-1 text-2xl font-bold text-foreground">24 <span className="text-xs font-normal text-muted-foreground">/ 26 online</span></p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-secondary/30 p-3">
                    <div className="text-xs text-muted-foreground">Open Jobs Today</div>
                    <p className="mt-1 text-2xl font-bold text-cyan">87 <span className="text-xs font-normal text-emerald-400 font-medium">↑ 14 completed</span></p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-secondary/30 p-3">
                    <div className="text-xs text-muted-foreground">Pending Calls</div>
                    <p className="mt-1 text-2xl font-bold text-amber-400">14 <span className="text-xs font-normal text-muted-foreground">unassigned</span></p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-secondary/30 p-3">
                    <div className="text-xs text-muted-foreground">Avg Response Time</div>
                    <p className="mt-1 text-2xl font-bold text-teal">18m <span className="text-xs font-normal text-emerald-400 font-medium">-42% vs paper</span></p>
                  </div>
                </div>

                {/* Simulated Dispatch Control Map */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-2xl border border-border/80 bg-navy-deep/80 shadow-inner">
                  {/* Map Grid Background */}
                  <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,_var(--color-cyan)_1px,_transparent_1px)] [background-size:24px_24px]" />
                  
                  {/* City Highway Simulation Lines */}
                  <svg className="absolute inset-0 size-full stroke-cyan/20 fill-none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 50 180 Q 200 120 400 150 T 800 120 T 1200 200" strokeWidth="3" strokeDasharray="6 6" />
                    <path d="M 120 40 Q 260 160 520 220 T 960 300" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M 400 40 L 400 360" strokeWidth="1.5" strokeOpacity="0.3" />
                    <path d="M 750 40 L 750 360" strokeWidth="1.5" strokeOpacity="0.3" />
                  </svg>

                  {/* Pulsing Fleet Location Pins */}
                  <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex items-center gap-2 rounded-full border border-emerald-500/60 bg-secondary/95 px-3 py-1 shadow-lg backdrop-blur">
                      <span className="size-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <div className="text-left text-[11px] leading-tight">
                        <p className="font-semibold text-foreground">David Lee</p>
                        <p className="text-[10px] text-emerald-400 font-medium">At Client Place • Job #302</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-3/5 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex items-center gap-2 rounded-full border border-cyan/60 bg-secondary/95 px-3 py-1 shadow-lg backdrop-blur">
                      <span className="size-2.5 rounded-full bg-cyan animate-pulse" />
                      <div className="text-left text-[11px] leading-tight">
                        <p className="font-semibold text-foreground">Sarah Chen</p>
                        <p className="text-[10px] text-cyan font-medium">In Transit (ETA 8 min)</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex items-center gap-2 rounded-full border border-amber-500/60 bg-secondary/95 px-3 py-1 shadow-lg backdrop-blur">
                      <span className="size-2.5 rounded-full bg-amber-400" />
                      <div className="text-left text-[11px] leading-tight">
                        <p className="font-semibold text-foreground">Liam Smith</p>
                        <p className="text-[10px] text-amber-400 font-medium">Standing By • Branch A</p>
                      </div>
                    </div>
                  </div>

                  {/* Real-time Dispatch ticker overlay */}
                  <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md rounded-xl border border-border/80 bg-background/90 p-3 shadow-xl backdrop-blur">
                    <div className="flex items-center justify-between text-xs font-semibold text-foreground pb-1.5 border-b border-border/60">
                      <span className="flex items-center gap-1.5 text-accent">
                        <Radio className="size-3.5 animate-pulse text-cyan" /> Google Live Dispatch Feed
                      </span>
                      <span className="text-[10px] text-muted-foreground font-mono">12:38:42 PM</span>
                    </div>
                    <div className="mt-2 space-y-1 text-xs">
                      <p className="text-muted-foreground flex items-center justify-between">
                        <span>Job #3101A Assigned → David Lee</span>
                        <span className="text-emerald-400 font-medium">Instant Push</span>
                      </p>
                      <p className="text-muted-foreground flex items-center justify-between">
                        <span>Client "TechPark Tower" booked breakdown call</span>
                        <span className="text-cyan font-mono text-[10px]">Portal</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Mobile Engineer PWA simulation */
              <div className="p-6 bg-background/40 flex justify-center">
                <div className="relative w-full max-w-sm rounded-[2.5rem] border-4 border-secondary bg-surface p-4 shadow-2xl">
                  {/* Phone Speaker Notch */}
                  <div className="mx-auto mb-4 h-4 w-32 rounded-full bg-background/80" />

                  {/* Phone Screen Header */}
                  <div className="flex items-center justify-between border-b border-border/60 pb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-400" />
                      <span className="font-bold text-foreground">PRAGISO PWA</span>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                      GPS ACTIVE (Screen-Off)
                    </span>
                  </div>

                  {/* Job Card Simulation */}
                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-cyan/40 bg-secondary/60 p-4 shadow-md">
                      <div className="flex items-start justify-between">
                        <span className="rounded-md bg-primary/20 px-2 py-0.5 text-[10px] font-mono text-cyan">
                          JOB #4902
                        </span>
                        <span className="text-xs font-bold text-amber-400">High Priority</span>
                      </div>
                      <h4 className="mt-2 text-sm font-bold text-foreground">AC Chiller Compressor Failure</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                        <MapPin className="size-3 text-accent" /> Zenith Towers, Block B, Floor 4
                      </p>

                      {/* Status Pipeline */}
                      <div className="mt-3 grid grid-cols-4 gap-1 text-center text-[9px] font-medium">
                        <div className="rounded bg-emerald-500/20 py-1 text-emerald-400 font-bold">Assigned</div>
                        <div className="rounded bg-emerald-500/20 py-1 text-emerald-400 font-bold">Traveling</div>
                        <div className="rounded bg-cyan/20 py-1 text-cyan font-bold animate-pulse">Reached</div>
                        <div className="rounded bg-muted py-1 text-muted-foreground">Sign-off</div>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <button className="flex-1 rounded-xl bg-cyan py-2 text-xs font-bold text-navy-deep hover:bg-cyan/90 transition-colors">
                          One-Tap Navigation
                        </button>
                        <button className="rounded-xl border border-border px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary">
                          Call Client
                        </button>
                      </div>
                    </div>

                    {/* Geofence Attendance Card */}
                    <div className="rounded-2xl border border-border bg-secondary/40 p-3.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-foreground">Today's Attendance</span>
                        <span className="text-emerald-400 font-mono text-[11px]">09:12 AM In</span>
                      </div>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        Geofenced Location Verified • 18.4 KM traveled via OSRM
                      </p>
                    </div>

                    {/* Digital Signature & PDF */}
                    <div className="rounded-2xl border border-border bg-secondary/40 p-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileCheck className="size-4 text-accent" />
                        <div>
                          <p className="text-xs font-semibold text-foreground">Instant Digital Slip</p>
                          <p className="text-[10px] text-muted-foreground">Auto-generates branded PDF</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-accent">Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
