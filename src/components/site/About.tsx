import { Reveal, SectionHeading } from "./Reveal";
import { useCountUp, useInView } from "@/hooks/use-reveal";

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "+", label: "Happy Clients" },
  { value: 4, suffix: "+", label: "Core Services" },
  { value: 100, suffix: "%", label: "Commitment" },
];

function StatCard({
  value,
  suffix,
  label,
  start,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
  index: number;
}) {
  const n = useCountUp(value, start);
  return (
    <div
      className="card-shine glass-panel glow-border group rounded-2xl p-6 sm:p-8 3xl:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] relative overflow-hidden"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Animated progress bar at bottom */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-[3px] rounded-full"
        style={{
          backgroundImage: "var(--gradient-brand)",
          width: start ? "100%" : "0%",
          transition: "width 1.8s cubic-bezier(0.22,1,0.36,1)",
          transitionDelay: `${index * 200 + 400}ms`,
        }}
      />

      <p className="text-gradient text-4xl font-bold sm:text-5xl lg:text-6xl 3xl:text-7xl transition-transform duration-500 group-hover:scale-105">
        {n}
        {suffix}
      </p>
      <p className="mt-2 text-sm sm:text-base 2xl:text-lg text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
        {label}
      </p>
    </div>
  );
}

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="about" className="relative py-24 md:py-32 3xl:py-44">
      <div className="mx-auto fluid-container">
        <div className="grid items-center gap-10 lg:gap-14 2xl:gap-20 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Turning Ideas Into Digital Reality"
              align="left"
            />
            <Reveal delay={80}>
              <p className="mt-6 text-base sm:text-lg 2xl:text-xl 3xl:text-2xl leading-relaxed text-muted-foreground">
                Pragiso Soft Technologies helps businesses and startups transform ideas into modern
                digital products. From the first strategy conversation to launch and beyond, we
                combine engineering discipline with design craft to build platforms that perform.
              </p>
              <p className="mt-4 text-base sm:text-lg 2xl:text-xl 3xl:text-2xl leading-relaxed text-muted-foreground">
                We work as an extension of your team — clear communication, measurable outcomes and
                technology choices that stay relevant as your business scales.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Product-minded engineering",
                  "Design-led experiences",
                  "Growth and marketing expertise",
                  "Long-term technical support",
                ].map((item, i) => (
                  <li
                    key={item}
                    className="group/item flex items-center gap-3 text-sm sm:text-base 2xl:text-lg text-foreground/90 transition-all duration-300 hover:translate-x-1"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span
                      aria-hidden
                      className="size-2 shrink-0 rounded-full animate-pulse-ring transition-transform duration-300 group-hover/item:scale-150"
                      style={{ backgroundImage: "var(--gradient-brand)" }}
                    />
                    <span className="link-underline">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div ref={ref} className="grid grid-cols-2 gap-4 sm:gap-6 2xl:gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <StatCard {...s} start={inView} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
