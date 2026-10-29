import { ShieldCheck, Phone, ArrowRight, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cctvConfig } from "@/config/cctv.config";
import { trackWhatsAppClick, trackPhoneCallClick } from "@/lib/analytics-events";

interface CctvHeroProps {
  onScrollToForm: (propertyType?: string) => void;
}

export function CctvHero({ onScrollToForm }: CctvHeroProps) {
  const whatsappUrl = `https://wa.me/${cctvConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    cctvConfig.contact.whatsappPrefilledMessage
  )}`;

  const handleWhatsApp = () => {
    trackWhatsAppClick("CctvHero", cctvConfig.contact.whatsappNumber);
  };

  const handleCall = () => {
    trackPhoneCallClick("CctvHero", cctvConfig.contact.callingPhone);
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background radial gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[50rem] -translate-x-1/2 rounded-full bg-cyan/15 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-0 -z-10 h-[28rem] w-[30rem] rounded-full bg-primary/20 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading and CTAs (7 cols) */}
          <div className="lg:col-span-7">
            {/* Dealer Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold text-teal backdrop-blur-md">
              <ShieldCheck className="size-3.5" />
              <span className="tracking-wide uppercase">Authorised Dealer • Secure Plus</span>
            </div>

            {/* City Tag */}
            <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <MapPin className="size-3.5 text-accent" />
              <span>Coimbatore, Tamil Nadu (Supply & On-Site Installation)</span>
            </div>

            {/* Main H1 Title */}
            <h1
              id="cctv-heading"
              className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground"
            >
              Secure Plus CCTV Camera Supply & Installation in{" "}
              <span className="text-gradient">Coimbatore</span>
            </h1>

            {/* Mandatory Authorised Dealer Statement */}
            <p className="mt-5 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-foreground/90">
              Pragiso Soft Technologies is an authorised dealer of Secure Plus CCTV cameras.
            </p>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
              We provide genuine Secure Plus surveillance hardware, professional camera mounting, multi-channel DVR/NVR recording setups, and remote mobile viewing for residential homes, apartment complexes, and commercial establishments across Coimbatore.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => onScrollToForm()}
                className="btn-magnetic rounded-full shadow-[var(--shadow-glow)]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="size-4" />
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/30 px-5 py-2.5 text-sm font-semibold text-emerald-400 backdrop-blur-md transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-900/40 hover:shadow-[0_0_20px_-5px_rgba(52,211,153,0.5)]"
              >
                <MessageSquare className="size-4" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href={`tel:${cctvConfig.contact.callingPhoneRaw}`}
                onClick={handleCall}
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/50 px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-accent/10"
              >
                <Phone className="size-3.5 text-accent" />
                <span>Call {cctvConfig.contact.callingPhone}</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-cyan" />
                <span>100% Genuine Hardware</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-teal" />
                <span>On-Site Site Survey</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" />
                <span>Mobile App Setup</span>
              </div>
            </div>
          </div>

          {/* Right Column: Official Secure Plus Branding Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="card-shine glass-panel glow-border relative overflow-hidden rounded-3xl border border-border/80 p-6 sm:p-8 text-center shadow-[var(--shadow-glow)]">
              <div className="mx-auto flex max-w-[280px] items-center justify-center rounded-2xl bg-white p-6 shadow-md">
                <img
                  src={cctvConfig.dealer.logoUrl}
                  alt="Secure Plus CCTV Official Authorized Dealer Logo"
                  width={240}
                  height={120}
                  className="h-auto w-full object-contain"
                  loading="eager"
                />
              </div>

              <div className="mt-6 text-left">
                <div className="inline-block rounded-md bg-secondary/70 px-2.5 py-1 text-[11px] font-semibold text-cyan">
                  Official Partnership
                </div>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                  Authorised Supply & Installation
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Partnered with Secure Plus to deliver high-reliability video security systems, night vision capabilities, and cloud storage options in Coimbatore.
                </p>

                <div className="mt-5 rounded-2xl border border-border/80 bg-secondary/30 p-4 text-xs space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Authorized Entity:</span>
                    <strong className="text-foreground">Pragiso Soft Technologies</strong>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Service Jurisdiction:</span>
                    <strong className="text-foreground">Coimbatore, Tamil Nadu</strong>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Deployment:</span>
                    <strong className="text-foreground">Homes & Businesses</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

