import type { SVGProps } from "react";

interface PragisoWordmarkProps extends SVGProps<SVGSVGElement> {
  className?: string;
  dotColor?: string;
}

/**
 * High-fidelity vector wordmark for PRAGISO matching the official brand identity:
 * - Stylized geometric P with inner notch
 * - Modern angular R with disconnected dynamic leg
 * - Chevron / Lambda A with signature cyan dot
 * - Geometric modern G
 * - Sleek vertical I
 * - Angular modern S
 * - Wide geometric oval O
 */
export function PragisoWordmark({
  className = "h-7 w-auto",
  dotColor = "#00f2fe",
  ...props
}: PragisoWordmarkProps) {
  return (
    <svg
      viewBox="0 0 520 72"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PRAGISO"
      role="img"
      {...props}
    >
      {/* ─── P ─── */}
      <path
        d="M 12 8 L 56 8 C 69 8 78 16 78 26 C 78 36 69 44 56 44 L 38 44 L 24 30 L 24 18 L 54 18 C 59 18 64 21 64 26 C 64 31 59 34 54 34 L 32 34 L 32 44 L 24 36 L 24 64 L 12 64 Z"
        fillRule="evenodd"
      />

      {/* ─── R ─── */}
      <path
        d="M 90 8 L 134 8 C 147 8 156 16 156 26 C 156 36 147 43 134 43 L 102 43 L 102 18 L 132 18 C 138 18 143 21 143 26 C 143 31 138 33 132 33 L 102 33 L 102 64 L 90 64 Z"
        fillRule="evenodd"
      />
      {/* R dynamic angled leg with gap */}
      <polygon points="120,44 133,44 158,64 145,64" />

      {/* ─── A (Lambda style with center cyan dot) ─── */}
      <path d="M 170 64 L 202 8 L 214 8 L 246 64 L 233 64 L 208 20 L 183 64 Z" />
      {/* Signature Cyan Dot */}
      <circle cx="208" cy="52" r="7" fill={dotColor} />

      {/* ─── G ─── */}
      <path
        d="M 324 18 L 312 18 C 304 18 280 18 270 25 C 258 35 258 45 270 54 C 280 62 304 62 312 55 L 312 43 L 292 43 L 292 33 L 324 33 L 324 58 C 312 67 288 67 268 62 C 248 53 248 27 268 15 C 288 5 316 6 324 18 Z"
        fillRule="evenodd"
      />

      {/* ─── I ─── */}
      <rect x="340" y="8" width="12" height="56" rx="1.5" />

      {/* ─── S ─── */}
      <path
        d="M 430 18 L 388 18 C 378 18 368 22 368 30 C 368 38 378 41 396 45 C 418 50 426 53 426 59 C 426 64 418 64 400 64 L 366 64 L 366 54 L 414 54 C 420 54 424 52 424 49 C 424 44 416 41 398 37 C 376 32 368 28 368 21 C 368 13 378 8 398 8 L 430 8 Z"
        fillRule="evenodd"
      />

      {/* ─── O ─── */}
      <path
        d="M 478 8 C 504 8 518 19 518 36 C 518 53 504 64 478 64 C 452 64 438 53 438 36 C 438 19 452 8 478 8 Z M 478 18 C 460 18 450 25 450 36 C 450 47 460 54 478 54 C 496 54 506 47 506 36 C 506 25 496 18 478 18 Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

/**
 * Complete Branding Logo Unit with Mark + Stylized Wordmark + Subtitle
 */
export function PragisoBrandBadge({
  markSrc,
  subtitle = "Soft Technologies",
  className = "",
  size = "md",
}: {
  markSrc?: string;
  subtitle?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const markSize =
    size === "sm"
      ? "h-8 w-8"
      : size === "lg"
        ? "size-11 3xl:size-13"
        : "h-9 w-9 sm:h-10 sm:w-10 3xl:h-12 3xl:w-12";

  const wordmarkHeight =
    size === "sm"
      ? "h-4 sm:h-5"
      : size === "lg"
        ? "h-5 sm:h-6 3xl:h-7"
        : "h-4.5 sm:h-5 3xl:h-6";

  const subtitleClass =
    size === "sm"
      ? "text-[9px] tracking-[0.24em]"
      : size === "lg"
        ? "text-[10px] sm:text-xs 3xl:text-sm tracking-[0.3em]"
        : "text-[9px] sm:text-[10px] 3xl:text-xs tracking-[0.28em]";

  return (
    <div className={`flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}>
      {markSrc && (
        <img
          src={markSrc}
          alt="Pragiso logo emblem"
          width={44}
          height={44}
          className={`${markSize} shrink-0 rounded-lg bg-foreground object-contain p-0.5 transition-all duration-500 group-hover:rotate-[360deg] group-hover:shadow-[0_0_20px_-5px_var(--electric)]`}
        />
      )}

      <div className="flex min-w-0 flex-col justify-center">
        <PragisoWordmark
          className={`${wordmarkHeight} w-auto text-foreground transition-colors duration-300 group-hover:text-accent`}
        />
        {subtitle && (
          <span
            className={`block truncate font-semibold uppercase text-accent font-sans mt-0.5 ${subtitleClass}`}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
