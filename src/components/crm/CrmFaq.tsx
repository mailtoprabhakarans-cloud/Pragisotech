import { HelpCircle } from "lucide-react";
import { crmFaqList } from "@/data/crm-faq";

export function CrmFaq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-20 md:py-28">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 -z-10 h-[24rem] w-[24rem] rounded-full bg-cyan/10 blur-[130px]"
      />

      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-secondary/70 px-4 py-1.5 text-xs font-semibold text-accent shadow-[var(--shadow-glow)] backdrop-blur-md">
            <HelpCircle className="size-3.5" />
            <span className="tracking-wide uppercase">Questions & Answers</span>
          </div>

          <h2
            id="faq-heading"
            className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground"
          >
            Frequently Asked Questions About{" "}
            <span className="text-gradient">Pragiso CRM</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Direct, verified answers regarding Pragiso CRM field service management software, mobile capabilities, and the 7-day live demo.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {crmFaqList.map((faq) => (
            <article
              key={faq.id}
              className="card-shine glass-panel glow-border rounded-2xl border border-border/80 p-6 sm:p-8 transition-all duration-300 hover:border-accent/40"
            >
              <h3
                id={faq.id}
                className="font-display text-lg font-bold sm:text-xl text-foreground"
              >
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

