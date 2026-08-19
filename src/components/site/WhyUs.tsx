import { Lightbulb, Cpu, Users, Target, Eye, Handshake } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const reasons = [
  {
    no: "01",
    icon: Lightbulb,
    title: "Best Portfolio & Custom Design",
    desc: "We build the best portfolio websites and custom digital solutions tailored for high conversion.",
  },
  {
    no: "02",
    icon: Cpu,
    title: "Modern Tech Stack",
    desc: "We use state-of-the-art frameworks like React, Next.js, Flutter and TypeScript.",
  },
  {
    no: "03",
    icon: Users,
    title: "User-Centered Design",
    desc: "Every experience is crafted around real users for maximum engagement.",
  },
  {
    no: "04",
    icon: Target,
    title: "Business-Driven Results",
    desc: "Our software development solutions are built to solve real business challenges.",
  },
  {
    no: "05",
    icon: Eye,
    title: "Transparent Communication",
    desc: "Clear visibility, regular updates and open collaboration throughout every project.",
  },
  {
    no: "06",
    icon: Handshake,
    title: "Best Support & Maintenance",
    desc: "We provide 24/7 technical assistance, ongoing maintenance and dedicated support post-launch.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 3xl:py-44">
      <div className="mx-auto fluid-container">
        <SectionHeading eyebrow="Why Us" title="Why Businesses Choose Pragiso" />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-6 3xl:gap-6">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 70}>
              <div className="card-shine glass-panel glow-border group h-full rounded-2xl p-6 sm:p-7 3xl:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] relative overflow-hidden">
                {/* Top gradient line that animates on hover */}
                <div
                  aria-hidden
                  className="absolute top-0 left-0 h-[3px] w-0 rounded-full transition-all duration-700 group-hover:w-full"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                />

                <div className="flex items-center gap-3">
                  <span className="animate-icon-morph grid size-11 sm:size-12 3xl:size-14 place-items-center border border-border bg-secondary/50 text-accent transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:shadow-[0_0_20px_-5px_var(--accent)]">
                    <r.icon
                      className="size-5 3xl:size-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                      aria-hidden
                    />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-muted-foreground/60 transition-colors duration-300 group-hover:text-accent/60">
                    {r.no}
                  </span>
                </div>
                <h3 className="mt-5 text-lg sm:text-xl 3xl:text-2xl font-semibold transition-colors duration-300 group-hover:text-accent">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base 3xl:text-lg leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
