import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { caseStudies } from "@/data/case-studies";

const title = "Case Studies | Pragiso Soft Technologies";
const description =
  "Detailed case studies from Pragiso Soft Technologies covering web platforms, mobile apps, UI/UX design and digital marketing — with the challenge, approach and measured results.";

export const Route = createFileRoute("/case-studies/")({
  component: CaseStudiesIndex,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function CaseStudiesIndex() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-24 md:pt-40">
        <div className="mx-auto fluid-container">
          {/* Back to Home Button */}
          <div className="mb-6 flex items-center justify-start">
            <Link
              to="/"
              className="btn-magnetic glass-panel glow-border group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-foreground transition-all duration-300 hover:text-accent hover:shadow-[var(--shadow-glow)]"
            >
              <ArrowLeft className="size-4 text-accent transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          <SectionHeading
            eyebrow="Case Studies"
            title="Work, Explained In Full"
            subtitle="Every engagement below includes the problem we started with, how we solved it and the numbers it moved."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 3xl:gap-8">
            {caseStudies.map((c, i) => (
              <Reveal as="article" key={c.slug} delay={i * 80}>
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: c.slug }}
                  className="glass-panel group block h-full overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={`${c.name} — ${c.category} case study by Pragiso Soft Technologies`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90"
                    />
                    <span className="absolute top-4 left-4 rounded-full border border-border bg-background/70 px-3.5 py-1 text-xs sm:text-sm font-medium text-accent backdrop-blur-sm">
                      {c.category}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7 3xl:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-xl sm:text-2xl 3xl:text-3xl font-semibold">{c.name}</h2>
                      <ArrowUpRight className="size-5 sm:size-6 shrink-0 text-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <p className="mt-3 text-sm sm:text-base 3xl:text-lg leading-relaxed text-muted-foreground">
                      {c.desc}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {c.metrics.slice(0, 2).map((m) => (
                        <li
                          key={m.label}
                          className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs sm:text-sm text-foreground/80"
                        >
                          {m.prefix ?? ""}
                          {m.value}
                          {m.suffix} {m.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
