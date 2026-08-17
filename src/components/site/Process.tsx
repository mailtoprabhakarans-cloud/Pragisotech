import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  { no: "01", title: "Discover", desc: "Understand the business, goals and target audience." },
  { no: "02", title: "Strategize", desc: "Create the right technology and design strategy." },
  { no: "03", title: "Design", desc: "Create intuitive and engaging user experiences." },
  { no: "04", title: "Develop", desc: "Build scalable, secure and high-performance solutions." },
  { no: "05", title: "Launch", desc: "Test, optimize and launch the product." },
  { no: "06", title: "Grow", desc: "Continuously improve and scale the solution." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 3xl:py-44">
      <div className="mx-auto fluid-container max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl">
        <SectionHeading eyebrow="Process" title="How We Bring Ideas To Life" />

        <ol className="relative mt-14 space-y-5 pl-8 sm:pl-12">
          {/* Animated gradient timeline line */}
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[11px] w-px sm:left-[15px] animate-sheen"
            style={{
              backgroundImage: "var(--gradient-brand)",
              opacity: 0.6,
              backgroundSize: "100% 200%",
            }}
          />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.no} delay={i * 80} className="relative">
              {/* Animated pulsing timeline dot */}
              <span
                aria-hidden
                className="absolute top-7 -left-8 size-[10px] rounded-full ring-4 ring-background sm:-left-12 sm:top-8 animate-pulse-ring"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              />
              <div className="card-shine glass-panel glow-border group rounded-2xl p-6 sm:p-7 3xl:p-8 transition-all duration-500 hover:translate-x-2 hover:shadow-[var(--shadow-glow)] relative overflow-hidden">
                {/* Left accent bar */}
                <div
                  aria-hidden
                  className="absolute top-0 left-0 w-[3px] h-0 rounded-full transition-all duration-700 group-hover:h-full"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                />

                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4">
                  <span className="font-display text-2xl sm:text-3xl 3xl:text-4xl font-bold text-muted-foreground/35 transition-all duration-500 group-hover:text-gradient group-hover:text-accent/50">
                    {s.no}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl 3xl:text-2xl font-semibold transition-colors duration-300 group-hover:text-accent">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base 3xl:text-lg leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
