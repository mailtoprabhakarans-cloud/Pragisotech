import { FileCheck2, ArrowRight } from "lucide-react";

export function CrmHowToCallSlips() {
  const steps = [
    {
      step: 1,
      title: "Dispatcher creates and assigns job",
      desc: "The operations team creates the service ticket in the central admin portal, assigns equipment assets, and dispatches the task to the nearest available technician in real time.",
    },
    {
      step: 2,
      title: "Engineer punches in at the client site",
      desc: "The field engineer navigates to the customer location and punches in on their mobile PWA with geofenced GPS verification proving arrival.",
    },
    {
      step: 3,
      title: "Engineer completes work and adds photos",
      desc: "The technician conducts diagnostics, logs replacement parts used, records labor hours, and uploads before-and-after repair photographs directly through their phone.",
    },
    {
      step: 4,
      title: "Client signs on the phone",
      desc: "The client reviews the completed work summary on the engineer's screen and provides their digital signature directly on the mobile display.",
    },
    {
      step: 5,
      title: "A branded PDF call slip is generated instantly",
      desc: "Pragiso CRM automatically compiles the complete service record, GPS coordinates, parts list, photo evidence, and client signature into a tamper-proof branded PDF call report sent to all parties [TODO: Confirm whether automatic WhatsApp or SMS delivery of PDF call slips is configured].",
    },
  ];

  return (
    <section
      id="how-to-replace-paper-service-slips"
      aria-labelledby="how-to-heading"
      className="relative py-20 md:py-28 border-t border-border/40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold text-teal backdrop-blur-md">
            <FileCheck2 className="size-3.5" />
            <span className="tracking-wide uppercase">Digital Workflow</span>
          </div>

          <h2
            id="how-to-heading"
            className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground"
          >
            How to replace paper service slips with digital call slips
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Transition your field operations from lost paper carbon copies to automated, tamper-proof digital service slips in five straightforward steps.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-5 list-none">
          {steps.map((s, idx) => (
            <li
              key={s.step}
              className="card-shine glass-panel glow-border relative flex flex-col justify-between rounded-3xl border border-border/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-cyan/10 font-display text-base font-bold text-cyan">
                    {s.step}
                  </span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="hidden md:block size-4 text-muted-foreground/40" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
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
