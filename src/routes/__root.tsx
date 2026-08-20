import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  AlertTriangle,
  RefreshCw,
  Home,
  Sparkles,
  ArrowLeft,
  ShieldAlert,
  Terminal,
  Zap,
  SearchX,
  Loader2,
} from "lucide-react";

import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Analytics } from "@vercel/analytics/react";
import logo from "@/assets/pragiso-mark.png.asset.json";

const logoSrc = typeof logo === "string" ? logo : logo?.url || "/favicon.png";

// Floating background particles for loading & error pages
const backgroundParticles = [
  { top: "15%", left: "10%", size: 8, delay: "0s" },
  { top: "70%", left: "15%", size: 12, delay: "1.5s" },
  { top: "25%", left: "85%", size: 10, delay: "0.8s" },
  { top: "75%", left: "80%", size: 6, delay: "2.2s" },
];

/**
 * Premium Fullscreen Loading Fallback Component
 */
export function PendingComponent() {
  return (
    <div className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4">
      {/* Background Gradients & Grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div aria-hidden className="grid-backdrop absolute inset-0 -z-20 opacity-30" />
      <div
        aria-hidden
        className="animate-drift glow-breathe absolute -top-40 left-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[130px]"
      />
      <div
        aria-hidden
        className="animate-drift glow-breathe absolute -bottom-40 right-1/4 -z-10 h-[26rem] w-[26rem] rounded-full bg-accent/15 blur-[130px]"
        style={{ animationDelay: "2s" }}
      />

      {/* Ambient scanning light line */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-scan-beam-h absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent blur-[1px]" />
      </div>

      {particles()}

      {/* Centerpiece Animated Loading Badge */}
      <div className="relative flex flex-col items-center text-center">
        <div className="relative flex size-24 items-center justify-center">
          {/* Spinning Gradient Outer Ring */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent border-r-electric animate-spin"
            style={{ animationDuration: "1.5s" }}
          />
          <div
            aria-hidden
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-teal border-l-cyan animate-spin"
            style={{ animationDuration: "2.5s", animationDirection: "reverse" }}
          />

          {/* Glowing Center Logo Badge */}
          <div className="glass-panel relative flex size-14 items-center justify-center rounded-2xl p-1.5 shadow-[var(--shadow-glow)]">
            <img
              src={logoSrc}
              alt="Pragiso Soft Technologies logo"
              width={36}
              height={36}
              className="size-9 rounded-lg bg-foreground object-contain p-0.5 animate-pulse"
            />
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="mt-8 text-xl font-bold tracking-wide sm:text-2xl text-gradient">
          PRAGISO SOFT TECHNOLOGIES
        </h2>
        <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground font-medium">
          <Loader2 className="size-4 animate-spin text-accent" /> Loading Digital Experience...
        </p>

        {/* Animated Loading Bar */}
        <div className="mt-6 h-1.5 w-48 overflow-hidden rounded-full bg-secondary/60 border border-border/40">
          <div
            className="h-full rounded-full animate-sheen"
            style={{
              backgroundImage: "var(--gradient-brand)",
              animation:
                "counter-fill 1.8s ease-in-out infinite alternate, sheen 4s linear infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Premium 404 Not Found Component
 */
function NotFoundComponent() {
  return (
    <div className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-5 text-center">
      {/* Background Gradients & Grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div aria-hidden className="grid-backdrop absolute inset-0 -z-20 opacity-30" />
      <div
        aria-hidden
        className="animate-drift glow-breathe absolute -top-32 left-1/3 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-drift glow-breathe absolute -bottom-32 right-1/3 -z-10 h-80 w-80 rounded-full bg-accent/15 blur-[120px]"
        style={{ animationDelay: "2s" }}
      />

      {particles()}

      <div className="card-shine glass-panel glow-border relative mx-auto w-full max-w-lg rounded-3xl p-8 sm:p-12 shadow-[var(--shadow-glow)]">
        {/* Animated Icon Badge */}
        <div className="mx-auto flex size-20 items-center justify-center rounded-2xl border border-border bg-secondary/50 text-accent shadow-inner animate-badge-bounce">
          <SearchX className="size-10 text-cyan" />
        </div>

        {/* Huge 404 Display */}
        <h1 className="mt-6 font-display text-6xl sm:text-7xl font-extrabold text-gradient tracking-tight">
          404
        </h1>

        <h2 className="mt-3 text-xl sm:text-2xl font-bold text-foreground">Page Not Found</h2>

        <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
          The requested path doesn't exist or may have been moved. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button variant="hero" size="lg" className="btn-magnetic rounded-xl" asChild>
            <Link to="/">
              <Home className="size-4" /> Go Back Home
            </Link>
          </Button>
          <Button variant="glass" size="lg" className="btn-magnetic rounded-xl" asChild>
            <Link to="/" hash="services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

/**
 * Premium Error Fallback Component
 */
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const [isRetrying, setIsRetrying] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  const handleRetry = () => {
    setIsRetrying(true);
    setTimeout(() => {
      router.invalidate();
      reset();
      setIsRetrying(false);
    }, 600);
  };

  return (
    <div className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-5 py-12 text-center">
      {/* Background Gradients & Grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div aria-hidden className="grid-backdrop absolute inset-0 -z-20 opacity-30" />
      <div
        aria-hidden
        className="animate-drift glow-breathe absolute -top-40 left-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-destructive/15 blur-[140px]"
      />
      <div
        aria-hidden
        className="animate-drift glow-breathe absolute -bottom-40 right-1/4 -z-10 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[140px]"
        style={{ animationDelay: "2s" }}
      />

      {/* Laser Scanning Line */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-scan-beam-h absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-destructive/40 to-transparent blur-[1px]" />
      </div>

      {particles()}

      {/* Main Glass Card */}
      <div className="card-shine glass-panel glow-border relative mx-auto w-full max-w-xl rounded-3xl p-8 sm:p-12 shadow-[var(--shadow-glow)]">
        {/* Animated Warning Icon Container */}
        <div className="relative mx-auto flex size-20 items-center justify-center">
          <span
            aria-hidden
            className="absolute inset-0 rounded-2xl bg-destructive/20 blur-md animate-pulse"
          />
          <div className="glass-panel relative flex size-20 items-center justify-center rounded-2xl border border-destructive/40 bg-secondary/70 text-destructive shadow-lg animate-badge-bounce">
            <AlertTriangle className="size-10 text-amber-400" />
          </div>
        </div>

        {/* System Alert Eyebrow */}
        <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-amber-400 uppercase backdrop-blur-md">
          <ShieldAlert className="size-3.5 animate-pulse" /> System Notice • Error Caught
        </div>

        {/* Heading & Subtitle */}
        <h1 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground">
          This Page Didn't Load
        </h1>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
          Something unexpected occurred while rendering this page. You can try refreshing or return
          home.
        </p>

        {/* Interactive Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="hero"
            size="lg"
            onClick={handleRetry}
            disabled={isRetrying}
            className="btn-magnetic rounded-xl min-w-[140px]"
          >
            <RefreshCw className={`size-4 ${isRetrying ? "animate-spin" : ""}`} />
            {isRetrying ? "Reloading..." : "Try Again"}
          </Button>

          <Button variant="glass" size="lg" className="btn-magnetic rounded-xl" asChild>
            <a href="/">
              <Home className="size-4" /> Go Home
            </a>
          </Button>
        </div>

        {/* Optional Collapsible Technical Error Details */}
        <div className="mt-8 border-t border-border/50 pt-6">
          <button
            onClick={() => setShowDetails((v) => !v)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <Terminal className="size-3.5 text-accent" />
            {showDetails ? "Hide Error Details" : "Show Technical Details"}
          </button>

          {showDetails && (
            <div className="mt-3 rounded-xl border border-border/60 bg-navy-deep/80 p-4 text-left font-mono text-xs text-muted-foreground overflow-x-auto max-h-40">
              <p className="text-destructive font-semibold">
                {error.name}: {error.message}
              </p>
              {error.stack && (
                <pre className="mt-2 text-[11px] leading-normal opacity-80 whitespace-pre-wrap">
                  {error.stack}
                </pre>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function particles() {
  return backgroundParticles.map((p, i) => (
    <span
      key={i}
      aria-hidden
      className="animate-float absolute -z-10 rounded-sm bg-accent/40 blur-[1px]"
      style={{
        top: p.top,
        left: p.left,
        width: p.size,
        height: p.size,
        animationDelay: p.delay,
      }}
    />
  ));
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { title: "Best IT Company in Coimbatore | Pragiso Soft Technologies" },
      {
        name: "description",
        content:
          "Top IT company in Coimbatore offering web & mobile app development, UI/UX design, and digital marketing. Partner with Pragiso for scalable digital solutions.",
      },
      {
        name: "keywords",
        content:
          "pragisotech, pragisotech.in, pragiso tech, www.pragisotech.in, contact@pragisotech.in, info@pragisotech.in, best IT company in Coimbatore, best software development company Coimbatore, top web development company Coimbatore, best app development company Coimbatore, best digital marketing agency Coimbatore, best UI UX design company Coimbatore, best SEO company Coimbatore, software company in Tamil Nadu, website design Coimbatore, mobile app development Coimbatore, React development company India, Flutter app development India, ecommerce website development Coimbatore, custom software development India, best web design company Coimbatore, affordable web development Coimbatore, startup IT solutions Coimbatore, best portfolio website design, top software company India, Pragiso Soft Technologies, PragisoTech",
      },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Coimbatore" },
      { name: "geo.position", content: "11.0168;76.9558" },
      { name: "ICBM", content: "11.0168, 76.9558" },
      { name: "distribution", content: "global" },
      { name: "rating", content: "general" },
      { name: "revisit-after", content: "7 days" },
      { name: "language", content: "English" },
      { name: "coverage", content: "Worldwide" },
      { name: "target", content: "all" },
      { name: "HandheldFriendly", content: "True" },
      { name: "MobileOptimized", content: "320" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "PragisoTech" },
      { name: "author", content: "Pragiso Soft Technologies" },
      { name: "publisher", content: "Pragiso Soft Technologies" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "bingbot",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#030712" },
      { name: "color-scheme", content: "dark light" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:site_name", content: "Pragiso Soft Technologies" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: "https://www.pragisotech.in/pragiso-services-hero.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Pragiso Soft Technologies - Digital Agency" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@pragisotech" },
      { name: "twitter:creator", content: "@pragisotech" },
      { name: "twitter:image", content: "https://www.pragisotech.in/pragiso-services-hero.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "192x192" },
      { rel: "shortcut icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  pendingComponent: PendingComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster position="top-right" />
      <Analytics />
    </QueryClientProvider>
  );
}
