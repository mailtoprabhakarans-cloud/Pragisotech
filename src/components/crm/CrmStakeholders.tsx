import { useState } from "react";
import { Building2, Wrench, Handshake, Check, ShieldCheck, ArrowRight, Smartphone, Users } from "lucide-react";
import { crmStakeholders } from "@/data/pragiso-crm";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

const iconMap = {
  Building2,
  Wrench,
  Handshake,
};

export function CrmStakeholders() {
  const [activeId, setActiveId] = useState(crmStakeholders[0].id);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Target Audience"
          title="Who Uses Pragiso CRM?"
          subtitle="Built specifically for the three key stakeholders in field service businesses — from the control room to the customer's doorstep."
        />

        {/* 3 Persona Cards Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {crmStakeholders.map((persona, index) => {
            const Icon = iconMap[persona.iconName as keyof typeof iconMap] || Building2;
            const isSelected = activeId === persona.id;

            return (
              <Reveal key={persona.id} delay={index * 100}>
                <div
                  onClick={() => setActiveId(persona.id)}
                  className={`card-shine glass-panel group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-500 ${
                    isSelected
                      ? "border-accent/60 shadow-[var(--shadow-glow)] -translate-y-1.5"
                      : "border-border/80 hover:border-accent/40 hover:-translate-y-1"
                  }`}
                >
                  {/* Top Badge & Icon */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-2xl border border-border/80 bg-secondary/80 text-accent group-hover:scale-110 transition-transform">
                        <Icon className="size-6 text-cyan" />
                      </span>
                      <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold text-accent">
                        {persona.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                      {persona.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      {persona.subtitle}
                    </p>

                    {/* Features list */}
                    <ul className="mt-6 space-y-3">
                      {persona.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                          <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal mt-0.5">
                            <Check className="size-2.5 stroke-[3]" />
                          </span>
                          <span className="text-foreground/90">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-accent">
                    <span>Explore {persona.badge} capabilities</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
