import { useState } from "react";
import { XCircle, CheckCircle2, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";
import { crmPainPoints } from "@/data/pragiso-crm";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export function CrmPainPoints() {
  const [filterMode, setFilterMode] = useState<"all" | "comparison">("all");

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-border/40">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/4 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-destructive/5 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-1/4 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-teal/10 blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Problems We Solve"
          title="Say Goodbye to Operational Headaches"
          subtitle="Every field service business faces these daily bottlenecks. Pragiso CRM replaces manual chaos with automated precision."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {crmPainPoints.map((item, index) => (
            <Reveal key={item.id} delay={index * 60}>
              <div className="glass-panel group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-glow)]">
                {/* Red/Problem Header */}
                <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-4 transition-colors group-hover:bg-destructive/10">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-destructive">
                    <XCircle className="size-4 shrink-0 text-destructive" />
                    <span className="uppercase tracking-wider">Before Pragiso CRM</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-foreground">
                    {item.problem.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.problem.description}
                  </p>
                </div>

                {/* Transition Arrow Badge */}
                <div className="my-3 flex items-center justify-center">
                  <span className="flex size-7 items-center justify-center rounded-full border border-border bg-secondary/80 text-accent shadow-sm group-hover:scale-110 transition-transform">
                    <ArrowRight className="size-3.5 rotate-90 md:rotate-0" />
                  </span>
                </div>

                {/* Green/Cyan/Solution Box */}
                <div className="rounded-2xl border border-cyan/30 bg-cyan/5 p-4 transition-colors group-hover:bg-cyan/10">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-cyan">
                    <CheckCircle2 className="size-4 shrink-0 text-teal" />
                    <span className="uppercase tracking-wider">With Pragiso CRM</span>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-foreground">
                    {item.solution.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.solution.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
