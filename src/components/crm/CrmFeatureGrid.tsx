import { useState } from "react";
import {
  MapPin,
  ClipboardList,
  Timer,
  Smartphone,
  CircleDollarSign,
  Target,
  BarChart3,
  FileText,
  Store,
  Building,
  Bell,
  ShieldCheck,
  Check,
} from "lucide-react";
import { crmCoreFeatures, type CoreFeature } from "@/data/pragiso-crm";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

const iconMap: Record<string, any> = {
  MapPin,
  ClipboardList,
  Timer,
  Smartphone,
  CircleDollarSign,
  Target,
  BarChart3,
  FileText,
  Store,
  Building,
  Bell,
  ShieldCheck,
};

const categoryBadges: Record<string, string> = {
  ADMIN: "border-cyan/40 bg-cyan/10 text-cyan",
  ENGINEER: "border-electric/40 bg-electric/10 text-electric",
  HR: "border-teal/40 bg-teal/10 text-teal",
  MOBILE: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  FINANCE: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  SALES: "border-pink-500/40 bg-pink-500/10 text-pink-400",
  REPORTS: "border-blue-500/40 bg-blue-500/10 text-blue-400",
  OPERATIONS: "border-purple-500/40 bg-purple-500/10 text-purple-400",
  SECURITY: "border-teal/40 bg-teal/10 text-teal",
  "ALL ROLES": "border-border bg-secondary text-foreground",
};

export function CrmFeatureGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "ADMIN", "ENGINEER", "HR", "MOBILE", "FINANCE", "OPERATIONS", "SECURITY"];

  const filtered = activeCategory === "ALL"
    ? crmCoreFeatures
    : crmCoreFeatures.filter(f => f.category === activeCategory || (activeCategory === "ENGINEER" && f.category === "MOBILE"));

  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background radial ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[32rem] w-[50rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]"
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Core Features"
          title="Everything Your Team Needs — In One Platform"
          subtitle="From GPS fleet dispatch to HR attendance — Pragiso CRM covers your entire field service operation end-to-end."
        />

        {/* Filter Pills */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "border-transparent text-primary-foreground shadow-[var(--shadow-glow)] scale-105"
                  : "border-border bg-secondary/40 text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
              }`}
              style={activeCategory === cat ? { backgroundImage: "var(--gradient-brand)" } : undefined}
            >
              {cat === "ALL" ? "All 12 Modules" : cat}
            </button>
          ))}
        </Reveal>

        {/* 12 Features Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => {
            const Icon = iconMap[item.iconName] || MapPin;
            const badgeStyle = categoryBadges[item.category] || "border-border bg-secondary text-foreground";

            return (
              <Reveal key={item.id} delay={index * 40}>
                <div className="card-shine glass-panel group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/70 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[var(--shadow-glow)]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-2xl border border-border/80 bg-secondary/80 text-accent transition-transform group-hover:scale-110">
                        <Icon className="size-5 text-cyan" />
                      </span>
                      <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wider ${badgeStyle}`}>
                        {item.category}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  {item.highlight && (
                    <div className="mt-5 pt-3 border-t border-border/40 flex items-center gap-1.5 text-[11px] font-medium text-teal">
                      <Check className="size-3.5 stroke-[2.5]" />
                      <span>{item.highlight}</span>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
