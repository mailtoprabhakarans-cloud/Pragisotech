import { HelpCircle } from "lucide-react";
import { cctvFaqList } from "@/data/cctv-faq";

export function CctvFaq() {
  return (
    <section
      id="cctv-faq"
      aria-labelledby="faq-heading"
      className="relative py-16 md:py-24 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold text-teal backdrop-blur-md">
            <HelpCircle className="size-3.5" />
            <span className="tracking-wide uppercase">CCTV Information & Support</span>
          </div>

          <h2
            id="faq-heading"
            className="mt-6 font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-foreground"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Direct, verified answers regarding Secure Plus CCTV camera sales, home and commercial installation services, and dealer authenticity in Coimbatore.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-4xl space-y-6">
          {cctvFaqList.map((faq) => (
            <article
              key={faq.id}
              className="card-shine glass-panel glow-border rounded-2xl border border-border/80 p-6 sm:p-8 transition-all duration-300 hover:border-cyan/40"
            >
              <h3
                id={faq.id}
                className="font-display text-base sm:text-lg font-bold text-foreground"
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

