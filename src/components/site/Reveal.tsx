import type { ReactNode } from "react";
import { useInView } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <As
      ref={ref as never}
      data-visible={inView}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </As>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl xl:max-w-4xl 3xl:max-w-5xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <span className="animate-badge-bounce inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-5 text-3xl font-bold text-balance sm:text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl 3xl:text-2xl">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
