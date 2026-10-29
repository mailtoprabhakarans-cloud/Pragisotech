import { ClipboardCheck, Calculator, ShieldCheck, Smartphone, ArrowRight } from "lucide-react";

export function CctvHowWeWork() {
  const steps = [
    {
      step: 1,
      title: "Site Survey & Assessment",
      desc: "Our technicians visit your home, office, or warehouse in Coimbatore to evaluate entry gates, perimeter blind spots, lighting, and cabling paths.",
      icon: ClipboardCheck,
    },
    {
      step: 2,
      title: "Transparent Quotation",
      desc: "We prepare a clear estimate specifying Secure Plus camera models, DVR/NVR channels, hard disk storage capacity, and installation costs.",
      icon: Calculator,
    },
    {
      step: 3,
      title: "Precision Installation",
      desc: "Technicians mount the cameras securely, run high-quality concealed cabling, install the central recording station, and configure power backup.",
      icon: ShieldCheck,
    },
    {
      step: 4,
      title: "Handover & Mobile Setup",
      desc: "We configure the secure mobile app on your smartphones, test night vision, explain playback controls, and hand over the system.",
      icon: Smartphone,
    },
  ];

  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
      className="relative py-16 md:py-24 border-t border-border/40 bg-secondary/10"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="how-we-work-heading"
            className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-foreground"
          >
            How We Work: 4-Step Installation Process
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From initial site inspection in Coimbatore to final mobile phone live streaming, our structured process ensures reliable security with zero guesswork.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 list-none">
          {steps.map((s, idx) => (
            <li
              key={s.step}
              className="card-shine glass-panel glow-border relative flex flex-col justify-between rounded-3xl border border-border/80 p-6 sm:p-7 transition-all duration-300 hover:border-cyan/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-cyan/10 font-display text-base font-bold text-cyan">
                    {s.step}
                  </span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block size-4 text-muted-foreground/30" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

