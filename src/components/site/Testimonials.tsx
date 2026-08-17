import { Star } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Ananya Menon",
    role: "Founder",
    company: "Nivara Retail",
    initials: "AM",
    rating: 5,
    quote:
      "Pragiso rebuilt our storefront and the difference was immediate — faster pages, cleaner checkout and a real lift in orders within the first month.",
  },
  {
    name: "Rahul Verma",
    role: "Operations Director",
    company: "Axis Logistics",
    initials: "RV",
    rating: 5,
    quote:
      "Their team understood our workflow before writing a line of code. The management app now runs our daily operations across three branches.",
  },
  {
    name: "Sophie Clarke",
    role: "Marketing Head",
    company: "Brightline Studio",
    initials: "SC",
    rating: 5,
    quote:
      "Clear reporting, sharp creative and steady growth. Our qualified leads nearly doubled over two quarters of working together.",
  },
  {
    name: "Karthik Raman",
    role: "CTO",
    company: "Finwise",
    initials: "KR",
    rating: 5,
    quote:
      "The dashboard they designed made complex financial data genuinely readable. Thoughtful engineering and excellent communication throughout.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 3xl:py-44">
      <div className="mx-auto fluid-container">
        <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />

        <Reveal className="mt-14">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t, idx) => (
                <CarouselItem
                  key={t.name}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 3xl:basis-1/4"
                >
                  <figure className="card-shine glass-panel glow-border group flex h-full flex-col rounded-3xl p-6 sm:p-7 3xl:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] relative overflow-hidden">
                    {/* Top gradient accent */}
                    <div
                      aria-hidden
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ backgroundImage: "var(--gradient-brand)" }}
                    />

                    <div className="flex gap-1 text-accent" aria-label={`${t.rating} out of 5`}>
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 3xl:size-5 fill-current transition-all duration-300 hover:scale-125"
                          style={{ transitionDelay: `${i * 60}ms` }}
                        />
                      ))}
                    </div>
                    <blockquote className="mt-5 flex-1 text-sm sm:text-base 3xl:text-lg leading-relaxed text-foreground/90">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 flex min-w-0 items-center gap-3 border-t border-border pt-5">
                      <span
                        className="grid size-11 3xl:size-13 shrink-0 place-items-center rounded-full text-sm 3xl:text-base font-semibold text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_-5px_var(--electric)]"
                        style={{ backgroundImage: "var(--gradient-brand)" }}
                        aria-hidden
                      >
                        {t.initials}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm sm:text-base 3xl:text-lg font-semibold transition-colors duration-300 group-hover:text-accent">
                          {t.name}
                        </span>
                        <span className="block truncate text-xs sm:text-sm text-muted-foreground">
                          {t.role}, {t.company}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 border-border bg-secondary/60 text-foreground hover:bg-secondary transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-glow)]" />
            <CarouselNext className="-right-3 border-border bg-secondary/60 text-foreground hover:bg-secondary transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-glow)]" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
