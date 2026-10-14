import { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  MapPin,
  CheckCircle,
  Clock,
  Smartphone,
  Navigation,
  FileCheck2,
  Camera,
  PenTool,
  ArrowRight,
  Shield,
  Layers,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export function CrmInteractivePreview() {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    { name: "Journey", time: "09:30 AM", status: "completed" },
    { name: "Reached", time: "09:55 AM", status: "completed" },
    { name: "In Progress", time: "10:15 AM", status: "active" },
    { name: "Done", time: "Pending", status: "upcoming" },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-surface/20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="In Action"
          title="See the Platform at Work"
          subtitle="Explore the executive command center and the mobile field experience designed for maximum on-site efficiency."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Card 1: Business Intelligence Analytics */}
          <Reveal delay={100}>
            <div className="card-shine glass-panel relative overflow-hidden rounded-3xl border border-border/80 p-6 md:p-8 shadow-[var(--shadow-elegant)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
                <BarChart3 className="size-3.5" /> Business Intelligence
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                Powerful Analytics at a Glance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Your full operational performance in one screen — service job pipeline, GPS road kilometer audits, vendor repair handovers, and outstanding client payments.
              </p>

              {/* Simulated BI Dashboard Card */}
              <div className="mt-6 rounded-2xl border border-border/80 bg-navy-deep/90 p-5 shadow-inner">
                {/* Metrics ribbon */}
                <div className="grid grid-cols-2 gap-3 pb-4 border-b border-border/50 text-xs">
                  <div>
                    <span className="text-muted-foreground">GPS Claimed vs Actual Road KM</span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-mono text-lg font-bold text-foreground">11,620 km</span>
                      <span className="text-[11px] font-semibold text-emerald-400">-830 km audited</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Outstanding Collections</span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-mono text-lg font-bold text-foreground">₹4,82,000</span>
                      <span className="text-[11px] font-semibold text-amber-400">8 Overdue</span>
                    </div>
                  </div>
                </div>

                {/* Job Funnel Bar chart simulation */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Job Pipeline Funnel (Last 30 Days)</span>
                    <span className="font-mono text-cyan">94.2% completion rate</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[11px] text-foreground font-medium mb-1">
                        <span>Assigned Calls (342)</span>
                        <span>100%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary/80 overflow-hidden">
                        <div className="h-full bg-royal rounded-full w-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-foreground font-medium mb-1">
                        <span>En Route / Reached (318)</span>
                        <span>93%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary/80 overflow-hidden">
                        <div className="h-full bg-electric rounded-full w-[93%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-foreground font-medium mb-1">
                        <span>Completed & Signed (298)</span>
                        <span>87%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary/80 overflow-hidden">
                        <div className="h-full bg-teal rounded-full w-[87%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bullet checklist from Page 5 */}
              <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-cyan" />
                  Service job funnel from Assigned to Completed with real-time timestamps
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-cyan" />
                  GPS claimed vs actual KM road audit comparison with OSRM matching
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-cyan" />
                  Outstanding payments by client with automated overdue collection alerts
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-cyan" />
                  Vendor handover & component third-party repair tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-cyan" />
                  Exportable & downloadable PDF service and audit reports
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Card 2: Engineer Mobile PWA */}
          <Reveal delay={200}>
            <div className="card-shine glass-panel relative overflow-hidden rounded-3xl border border-border/80 p-6 md:p-8 shadow-[var(--shadow-elegant)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">
                <Smartphone className="size-3.5" /> Engineer Mobile PWA
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                Everything an Engineer Needs — On Their Phone
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Installable as a native-like Progressive Web App on any Android or iPhone — no app store required. Engineers get everything from job details to GPS tracking right in their pocket.
              </p>

              {/* Interactive Pipeline Step Selector */}
              <div className="mt-6 rounded-2xl border border-border/80 bg-navy-deep/90 p-5 shadow-inner">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-border/50">
                  <span className="font-semibold text-foreground">Interactive Job Card Demo</span>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-400 font-mono">
                    Screen-Off GPS Active
                  </span>
                </div>

                {/* Status progression bar */}
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {steps.map((st, i) => (
                    <button
                      key={st.name}
                      onClick={() => setActiveStep(i)}
                      className={`cursor-pointer rounded-xl p-2 text-center transition-all ${
                        activeStep === i
                          ? "border border-cyan/60 bg-cyan/20 text-cyan shadow-sm"
                          : i < activeStep
                          ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border border-border/40 bg-secondary/30 text-muted-foreground"
                      }`}
                    >
                      <p className="text-[11px] font-bold">{st.name}</p>
                      <p className="text-[9px] opacity-80">{st.time}</p>
                    </button>
                  ))}
                </div>

                {/* Simulated active task */}
                <div className="mt-4 rounded-xl border border-border/60 bg-secondary/40 p-3.5 text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground">Machine: Daikin VRV IV 12HP</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">Issue: Low refrigerant pressure sensor tripping</p>
                    </div>
                    <span className="rounded bg-primary/20 px-2 py-0.5 text-[10px] text-accent font-mono">
                      GPS Pinned
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-border/40 text-[11px]">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Camera className="size-3" /> Before/After Photo (2 Uploaded)
                    </span>
                    <span className="flex items-center gap-1 text-cyan">
                      <PenTool className="size-3" /> Digital Sign Captured
                    </span>
                  </div>
                </div>
              </div>

              {/* Bullet checklist from Page 5 */}
              <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-teal" />
                  GPS punch-in with live geofenced location confirmation
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-teal" />
                  Job card with client, address, machine details & reported issue
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-teal" />
                  One-tap live navigation directly to client site
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-teal" />
                  Status progression: Journey → Reached → In Progress → Done
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-teal" />
                  Photo upload for before & after repair verification
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-teal" />
                  Unique screen-off audio keepalive keeps GPS active in pocket
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
