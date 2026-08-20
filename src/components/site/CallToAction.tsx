import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CallToAction() {
  return (
    <section className="relative px-5 py-16 lg:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div
          className="relative isolate overflow-hidden rounded-[2rem] border border-border px-7 py-16 text-center sm:px-12 md:py-24"
          style={{ backgroundImage: "var(--gradient-hero)", backgroundColor: "var(--navy-deep)" }}
        >
          <div aria-hidden className="grid-backdrop absolute inset-0 -z-10 opacity-30" />
          <div
            aria-hidden
            className="animate-drift glow-breathe absolute -top-24 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary/25 blur-[110px]"
          />
          <div
            aria-hidden
            className="animate-drift glow-breathe absolute -bottom-24 right-1/4 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-[110px]"
          />
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-balance sm:text-4xl md:text-5xl">
            Have an Idea? Let's Build Something Great.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Tell us about your project and let's turn your idea into a powerful digital experience.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="xl" className="btn-magnetic rounded-xl" asChild>
              <a href="#contact">
                Start a Project <ArrowRight />
              </a>
            </Button>
            <Button variant="glass" size="xl" className="btn-magnetic rounded-xl" asChild>
              <a href="mailto:contact@pragisotech.in">
                <MessageCircle /> Talk to Our Team
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
