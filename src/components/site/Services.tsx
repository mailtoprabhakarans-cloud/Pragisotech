import { Code2, Smartphone, TrendingUp, PenTool } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { useTilt } from "@/hooks/use-tilt";

const services = [
  {
    no: "01",
    icon: Code2,
    title: "Web Development",
    desc: "Best web development company in Coimbatore — we build fast, scalable and conversion-focused websites and web applications.",
    items: [
      "Business Websites",
      "Corporate Websites",
      "E-commerce",
      "Web Applications",
      "Custom Platforms",
    ],
  },
  {
    no: "02",
    icon: Smartphone,
    title: "App Development",
    desc: "Top mobile app development in Coimbatore — beautiful and reliable mobile experiences for modern businesses.",
    items: [
      "Android Apps",
      "iOS Apps",
      "Cross-platform Apps",
      "Business Apps",
      "Custom Mobile Solutions",
    ],
  },
  {
    no: "03",
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Best digital marketing agency in Coimbatore — increase visibility, traffic, leads and conversions.",
    items: ["SEO", "Social Media Marketing", "Google Ads", "Content Marketing", "Lead Generation"],
  },
  {
    no: "04",
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Best UI/UX design company in Coimbatore — intuitive and visually stunning digital experiences.",
    items: ["Website UI/UX", "Mobile App Design", "Branding", "Prototyping", "Design Systems"],
  },
];

function ServiceCard({ s, index }: { s: (typeof services)[number]; index: number }) {
  const { ref, style, onMove, onLeave } = useTilt<HTMLDivElement>(4, 900);

  return (
    <Reveal key={s.title} delay={index * 90} as="article">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="card-shine glass-panel glow-border group h-full rounded-3xl p-7 sm:p-8 3xl:p-10 transition-all duration-500 hover:shadow-[var(--shadow-glow)]"
        style={style as React.CSSProperties}
      >
        {/* Spotlight overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[2] rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle 200px at var(--spotlight-x, 50%) var(--spotlight-y, 50%), color-mix(in oklab, var(--cyan) 10%, transparent), transparent 70%)`,
          }}
        />

        <div className="relative z-[3] flex items-start justify-between gap-4">
          <span
            className="animate-icon-morph grid size-12 sm:size-14 3xl:size-16 shrink-0 place-items-center text-primary-foreground transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            <s.icon
              className="size-6 3xl:size-8 transition-transform duration-700 group-hover:rotate-12"
              aria-hidden
            />
          </span>
          <span className="font-display text-3xl 3xl:text-4xl font-bold text-muted-foreground/30 transition-colors duration-500 group-hover:text-accent/30">
            {s.no}
          </span>
        </div>
        <h3 className="relative z-[3] mt-6 text-xl sm:text-2xl 3xl:text-3xl font-semibold transition-colors duration-300 group-hover:text-accent">
          {s.title}
        </h3>
        <p className="relative z-[3] mt-3 text-sm sm:text-base 3xl:text-lg leading-relaxed text-muted-foreground">
          {s.desc}
        </p>
        <ul className="relative z-[3] mt-6 flex flex-wrap gap-2">
          {s.items.map((it, i) => (
            <li
              key={it}
              className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs 3xl:text-sm text-foreground/85 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/5"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {it}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/3 -z-10 h-72 bg-primary/10 blur-[140px] glow-breathe"
      />
      <div className="mx-auto fluid-container">
        <SectionHeading
          eyebrow="Services"
          title="Our Expertise — Best IT Services in Coimbatore"
          subtitle="Technology solutions designed to help your business innovate, compete and grow. Trusted by startups and enterprises across Tamil Nadu."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4 3xl:gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
