import { Sparkles, ArrowRight, ShieldCheck, Smartphone, MapPin, Zap, CheckCircle2, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { LIVE_CRM_DEMO_URL } from "@/data/pragiso-crm";

export function ProductSpotlight() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-surface/40 border-y border-border/50">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[36rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[150px]"
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="card-shine glass-panel glow-border relative overflow-hidden rounded-3xl border border-accent/40 p-8 sm:p-12 lg:p-16 shadow-[var(--shadow-glow)]">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Product info & 7-Day Demo Offer (7 cols) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3.5 py-1 text-xs font-semibold text-cyan">
                  <span className="size-2 rounded-full bg-cyan animate-ping" />
                  <span>Flagship SaaS Product • 2026 Edition</span>
                </div>

                <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  Pragiso CRM —{" "}
                  <span className="text-gradient">Field Service CRM</span>
                </h2>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Run your field operations smarter. Connect dispatchers, engineers, and clients in real time — eliminating paper slips, guesswork, and lost revenue with GPS-powered automation.
                </p>

                {/* 4 Feature Pills */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 text-xs font-semibold">
                  <div className="rounded-xl border border-border/70 bg-secondary/50 p-2.5 text-center">
                    <p className="font-display text-lg font-bold text-cyan">3</p>
                    <p className="text-[11px] text-muted-foreground">Role Portals</p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-secondary/50 p-2.5 text-center">
                    <p className="font-display text-lg font-bold text-electric">15+</p>
                    <p className="text-[11px] text-muted-foreground">Core Modules</p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-secondary/50 p-2.5 text-center">
                    <p className="font-display text-lg font-bold text-teal">100%</p>
                    <p className="text-[11px] text-muted-foreground">Cloud Native</p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-secondary/50 p-2.5 text-center">
                    <p className="font-display text-lg font-bold text-emerald-400">PWA</p>
                    <p className="text-[11px] text-muted-foreground">Mobile Ready</p>
                  </div>
                </div>

                {/* 7-Day Demo Box */}
                <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <Sparkles className="size-4" />
                    <span>Special Offer: 7-Day Risk-Free Live Trial</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Get full enterprise platform access for your field team with guided 20-minute setup and no credit card required.
                  </p>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button variant="hero" size="lg" className="rounded-full shadow-[var(--shadow-glow)]" asChild>
                    <a href={LIVE_CRM_DEMO_URL} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 size-4" />
                      Launch Live Demo App
                    </a>
                  </Button>
                  <Button variant="glass" size="lg" className="rounded-full" asChild>
                    <a href="/products#demo-section">
                      7-Day Trial Details <ArrowRight className="ml-1 size-4" />
                    </a>
                  </Button>
                  <Button variant="glass" size="lg" className="rounded-full" asChild>
                    <a
                      href="https://wa.me/917904588377?text=Hi%20Pragiso%20Team%2C%20I%20tested%20your%20demo%20at%20demo-crm-xi.vercel.app%20and%20want%20to%20start%20a%207-day%20demo%20for%20my%20company."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instant WhatsApp Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column: Live Interactive Mockup Card Preview (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-border/80 bg-navy-deep/90 p-5 shadow-2xl">
                  {/* Mockup Header */}
                  <div className="flex items-center justify-between border-b border-border/60 pb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-bold text-foreground">DEMO CRM (DEMO UNIT)</span>
                    </div>
                    <a
                      href={`${LIVE_CRM_DEMO_URL}admin/tracking`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-cyan/20 px-2.5 py-0.5 text-[10px] text-cyan font-mono hover:underline flex items-center gap-1"
                    >
                      <span>demo-crm-xi.vercel.app</span>
                      <ExternalLink className="size-2.5" />
                    </a>
                  </div>

                  {/* Simulated Dispatch Fleet Pins */}
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-center justify-between rounded-xl border border-border/60 bg-secondary/40 p-3 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="size-2 rounded-full bg-emerald-400" />
                        <div>
                          <p className="font-semibold text-foreground">Live GPS Tracking — Coimbatore</p>
                          <p className="text-[10px] text-emerald-400">Gandhipuram • Saibaba Colony • RS Puram</p>
                        </div>
                      </div>
                      <span className="font-mono text-[11px] text-cyan">All Branches</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="rounded-lg border border-border/50 bg-secondary/30 p-2">
                        <p className="text-muted-foreground">TOTAL FLEET</p>
                        <p className="font-bold text-foreground mt-0.5 text-xs">Registered</p>
                      </div>
                      <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-2 text-emerald-400">
                        <p className="text-[9px]">ON DUTY</p>
                        <p className="font-bold mt-0.5 text-xs">Punched In</p>
                      </div>
                      <div className="rounded-lg border border-cyan/30 bg-cyan/10 p-2 text-cyan">
                        <p className="text-[9px]">IN TRANSIT</p>
                        <p className="font-bold mt-0.5 text-xs">Client Visits</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-border/60 bg-secondary/40 p-3 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="size-2 rounded-full bg-cyan" />
                        <div>
                          <p className="font-semibold text-foreground">Engineer Sarah Chen</p>
                          <p className="text-[10px] text-cyan">In Transit (ETA 8 mins)</p>
                        </div>
                      </div>
                      <span className="font-mono text-[11px] text-teal">OSRM Route</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-border/60 bg-secondary/40 p-3 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="size-2 rounded-full bg-amber-400" />
                        <div>
                          <p className="font-semibold text-foreground">Client Breakdown Ticket</p>
                          <p className="text-[10px] text-muted-foreground">TechPark Towers • Chiller</p>
                        </div>
                      </div>
                      <span className="rounded bg-accent/20 px-1.5 py-0.5 text-[10px] text-accent">Assigned</span>
                    </div>
                  </div>

                  {/* PDF Slip Generation Indicator */}
                  <div className="mt-4 rounded-xl border border-cyan/40 bg-cyan/5 p-3 text-xs flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">Digital Service Call Slip</p>
                      <p className="text-[10px] text-muted-foreground">Client signature + Photos attached</p>
                    </div>
                    <span className="text-[11px] font-bold text-cyan">Branded PDF</span>
                  </div>

                  {/* Partnership footer notice */}
                  <div className="mt-4 pt-3 border-t border-border/50 text-[10px] text-muted-foreground text-center">
                    Developed by <span className="text-cyan font-semibold">Pragiso Soft Technologies</span> with <span className="text-foreground">Shiv Dhanv & ICS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
