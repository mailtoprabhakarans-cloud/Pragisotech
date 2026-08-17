import { ArrowRight, AlertCircle, Wrench, BarChart3 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { useCountUp, useInView } from "@/hooks/use-reveal";
import fintech from "@/assets/work-fintech.jpg";

const blocks = [
  {
    icon: AlertCircle,
    title: "The Challenge",
    body: "A growing retail brand had an outdated website, slow load times and no reliable way to convert traffic into qualified leads.",
  },
  {
    icon: Wrench,
    title: "Our Solution",
    body: "We rebuilt the platform with a modern stack, redesigned the journey around real user intent and layered in an SEO and paid-media growth program.",
  },
  {
    icon: BarChart3,
    title: "The Result",
    body: "Within two quarters the brand saw compounding gains across traffic, lead volume and conversion quality.",
  },
];

const results = [
  { value: 120, label: "Website Traffic" },
  { value: 85, label: "Lead Generation" },
  { value: 60, label: "Conversion Rate" },
];

function ResultStat({ value, label, start }: { value: number; label: string; start: boolean }) {
  const n = useCountUp(value, start);
  return (
    <div className="rounded-2xl border border-border bg-secondary/30 p-5 text-center">
      <p className="text-gradient text-3xl font-bold">+{n}%</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

export function CaseStudy() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="case-study" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Case Study"
          title="Growth, Measured End To End"
          subtitle="One featured engagement — from problem definition to measurable business outcomes."
        />

        <Reveal className="mt-14">
          <div className="glass-panel overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-64">
                <img
                  src={fintech}
                  alt="Featured Pragiso case study dashboard interface"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-background/60 to-background/20"
                />
              </div>
              <div className="p-8 md:p-10">
                <ul className="space-y-6">
                  {blocks.map((b) => (
                    <li key={b.title} className="flex gap-4">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary/50 text-accent">
                        <b.icon className="size-5" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold">{b.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {b.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div ref={ref} className="mt-8 grid grid-cols-3 gap-3">
                  {results.map((r) => (
                    <ResultStat key={r.label} {...r} start={inView} />
                  ))}
                </div>

                <Button variant="hero" size="lg" className="mt-8 rounded-xl" asChild>
                  <Link to="/case-studies/$slug" params={{ slug: "fintech-dashboard" }}>
                    View Case Study <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
