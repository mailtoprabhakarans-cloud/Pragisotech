import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";
import { caseStudies } from "@/data/case-studies";

const filters = ["All", "Web", "Apps", "UI/UX", "Marketing"] as const;

const projects = caseStudies;

export function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => active === "All" || p.groups.includes(active));

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          subtitle="A glimpse of what we can create."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={cn(
                "cursor-pointer rounded-full border border-border px-5 py-2 text-sm transition-all duration-400",
                active === f
                  ? "border-transparent text-primary-foreground shadow-[var(--shadow-elegant)] scale-105"
                  : "bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary/60 hover:scale-[1.03]",
              )}
              style={active === f ? { backgroundImage: "var(--gradient-brand)" } : undefined}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal as="article" key={p.name} delay={i * 80}>
              <Link
                to="/case-studies/$slug"
                params={{ slug: p.slug }}
                className="card-shine glass-panel group block h-full overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category} project by Pragiso Soft Technologies`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70"
                  />
                  <span className="absolute top-4 left-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm transition-all duration-500 group-hover:bg-accent/20 group-hover:border-accent/40 group-hover:scale-105">
                    {p.category}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-accent">
                      {p.name}
                    </h3>
                    <ArrowUpRight className="size-5 shrink-0 text-accent transition-all duration-500 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:scale-125" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t, tagIdx) => (
                      <li
                        key={t}
                        className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-foreground/80 transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/5"
                        style={{ transitionDelay: `${tagIdx * 30}ms` }}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent link-underline transition-all duration-300 group-hover:gap-2.5">
                    Read case study{" "}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
