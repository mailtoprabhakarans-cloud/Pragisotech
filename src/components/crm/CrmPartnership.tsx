import { Mail, Phone, Globe, Shield, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function CrmPartnership() {
  return (
    <section className="relative py-16 md:py-24 border-t border-border/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="card-shine glass-panel glow-border relative overflow-hidden rounded-3xl border border-border/80 p-8 sm:p-12 text-center shadow-[var(--shadow-elegant)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
              <Sparkles className="size-3.5 text-cyan" />
              <span>Engineering & Enterprise Partnership</span>
            </div>

            <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Ready to Transform Your Field Operations?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Join businesses that have eliminated paper slips, optimised engineer dispatch, and recovered lost revenue with Pragiso CRM.
            </p>

            {/* Direct Contact Points */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-medium">
              <a
                href="mailto:info@pragisotech.in"
                className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-foreground hover:border-accent/40 hover:text-accent transition-colors"
              >
                <Mail className="size-4 text-cyan" />
                info@pragisotech.in
              </a>
              <a
                href="tel:+917904588377"
                className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-foreground hover:border-accent/40 hover:text-accent transition-colors"
              >
                <Phone className="size-4 text-teal" />
                +91 7904588377
              </a>
              <a
                href="https://www.pragisotech.in"
                className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-foreground hover:border-accent/40 hover:text-accent transition-colors"
              >
                <Globe className="size-4 text-primary" />
                pragisotech.in
              </a>
            </div>

            {/* Partnership Badge Box from Page 8 of brochure */}
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-accent/20 bg-background/60 p-6 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                This CRM Developed by
              </p>
              <p className="mt-1 font-display text-lg font-extrabold text-cyan">
                PRAGISO SOFT TECHNOLOGIES
              </p>

              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground font-medium">
                  In Collaboration and Partnership with
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-foreground">
                  <span className="rounded-lg bg-secondary/80 px-3 py-1.5 border border-border/60 text-teal">
                    SHIV DHANV TECH SOLUTIONS
                  </span>
                  <span className="text-muted-foreground">&</span>
                  <span className="rounded-lg bg-secondary/80 px-3 py-1.5 border border-border/60 text-cyan">
                    ICS TECHNOLOGIES
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-[11px] text-muted-foreground">
              © 2026 Pragiso CRM — All Rights Reserved. Enterprise Edition.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
