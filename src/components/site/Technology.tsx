import { Reveal, SectionHeading } from "./Reveal";

const tech = [
  "React",
  "Next.js",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Flutter",
  "React Native",
  "HTML",
  "CSS",
  "Figma",
  "WordPress",
  "Google Ads",
  "Meta Ads",
];

export function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="animate-drift glow-breathe absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]"
      />
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Stack"
          title="Technology Meets Creativity"
          subtitle="A modern, pragmatic toolset chosen for performance, longevity and speed of delivery."
        />
        <ul className="mt-14 flex flex-wrap justify-center gap-3">
          {tech.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 45}>
              <span
                className="card-shine animate-float glass-panel glow-border inline-flex rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-500 hover:-translate-y-2 hover:text-accent hover:shadow-[0_0_25px_-8px_var(--accent)] hover:scale-105 cursor-default"
                style={{ animationDelay: `${(i % 5) * 0.6}s` }}
              >
                {t}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
