import {
  Code2,
  Database,
  MapPin,
  Zap,
  Smartphone,
  Lock,
  FileText,
  Cloud,
} from "lucide-react";
import { crmTechStack } from "@/data/pragiso-crm";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

const iconMap: Record<string, any> = {
  Atom: Code2,
  Database: Database,
  Map: MapPin,
  Zap: Zap,
  Smartphone: Smartphone,
  Lock: Lock,
  FileCode: FileText,
  Cloud: Cloud,
};

export function CrmTechStack() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-border/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Technology"
          title="Built on Enterprise-Grade Architecture"
          subtitle="Pragiso CRM is engineered for maximum reliability, speed, and data privacy using state-of-the-art modern cloud technologies."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {crmTechStack.map((tech, i) => {
            const Icon = iconMap[tech.iconName] || Code2;
            return (
              <Reveal key={tech.name} delay={i * 50}>
                <div className="card-shine glass-panel group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/70 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[var(--shadow-glow)]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-2xl border border-border/80 bg-secondary/80 text-accent transition-transform group-hover:scale-110">
                        <Icon className="size-6 text-cyan" />
                      </span>
                      <span className="rounded-full bg-secondary/60 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                        {tech.category}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-bold text-foreground group-hover:text-accent transition-colors">
                      {tech.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] text-teal font-medium">
                    <span>Enterprise Tested</span>
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
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
