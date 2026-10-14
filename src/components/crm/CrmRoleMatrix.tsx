import { ShieldCheck, Cloud, Smartphone, Lock, Maximize2, CheckCircle2 } from "lucide-react";
import { crmRoleMatrix, crmPillars } from "@/data/pragiso-crm";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

export function CrmRoleMatrix() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-surface/20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Access Control"
          title="Role-Based Access — Right Tools for the Right People"
          subtitle="Every user sees exactly what they need — strictly enforced at the database layer with PostgreSQL Row-Level Security (RLS)."
        />

        {/* 4 Pillars Strip */}
        <Reveal className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {crmPillars.map((p, i) => (
            <div
              key={p.label}
              className="glass-panel card-shine flex flex-col items-center justify-center rounded-2xl border border-border/80 p-5 text-center transition-all hover:border-accent/40"
            >
              <span className="text-accent text-sm font-bold">✦ {p.label}</span>
              <span className="mt-1 text-xs text-muted-foreground">{p.desc}</span>
            </div>
          ))}
        </Reveal>

        {/* Access Control Table / Grid */}
        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-border/80 glass-panel shadow-[var(--shadow-elegant)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-border/80 bg-secondary/80 font-display text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-4 font-bold">Role</th>
                  <th className="px-6 py-4 font-bold">Access Level</th>
                  <th className="px-6 py-4 font-bold">Key Capabilities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {crmRoleMatrix.map((item) => (
                  <tr
                    key={item.role}
                    className="transition-colors hover:bg-secondary/40"
                  >
                    <td className="whitespace-nowrap px-6 py-5 font-bold text-foreground">
                      <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-cyan">
                        {item.role}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-5 font-medium text-foreground">
                      <span className="flex items-center gap-1.5 text-xs text-teal">
                        <CheckCircle2 className="size-3.5" />
                        {item.accessLevel}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-xs leading-relaxed text-muted-foreground">
                      {item.capabilities}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
