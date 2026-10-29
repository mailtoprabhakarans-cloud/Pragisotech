import { Home, Building2, Check, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cctvConfig } from "@/config/cctv.config";
import { trackWhatsAppClick } from "@/lib/analytics-events";

interface CctvResidentialCommercialProps {
  onSelectPropertyType: (type: "Residential" | "Commercial") => void;
}

export function CctvResidentialCommercial({ onSelectPropertyType }: CctvResidentialCommercialProps) {
  const whatsappUrl = `https://wa.me/${cctvConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    cctvConfig.contact.whatsappPrefilledMessage
  )}`;

  const handleWhatsApp = (property: string) => {
    trackWhatsAppClick(`ResidentialCommercial-${property}`, cctvConfig.contact.whatsappNumber);
  };

  return (
    <section
      id="sectors"
      aria-labelledby="sectors-heading"
      className="relative py-16 md:py-24 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="sectors-heading"
            className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-foreground"
          >
            Surveillance Solutions for Homes & Businesses in Coimbatore
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Whether securing a private residence or an entire commercial distribution facility, we customize camera counts, focal lengths, and recording capacities to your perimeter layout.
          </p>
        </div>

        {/* 2-Column Sector Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Residential Card */}
          <article className="card-shine glass-panel glow-border relative flex flex-col justify-between rounded-3xl border border-border/80 p-8 transition-all duration-300 hover:border-cyan/40">
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                <Home className="size-6" />
              </div>
              <h3 className="mt-6 font-display text-xl sm:text-2xl font-bold text-foreground">
                Home & Apartment CCTV Installation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tailored security setups for independent houses, villas, and residential apartment buildings across Coimbatore. Protect your family, verify visitors, and monitor entry gates with high-clarity video feeds.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/90">
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-cyan shrink-0" />
                  <span>Main door and perimeter gate monitoring</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-cyan shrink-0" />
                  <span>Infrared night vision for low-light driveways and balconies</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-cyan shrink-0" />
                  <span>Mobile phone remote monitoring for working parents</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-cyan shrink-0" />
                  <span>Concealed and clean indoor wiring to preserve interior decor</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap gap-3">
              <Button
                variant="hero"
                size="sm"
                onClick={() => onSelectPropertyType("Residential")}
                className="rounded-full"
              >
                <span>Get Home CCTV Quote</span>
                <ArrowRight className="size-3.5" />
              </Button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsApp("Residential")}
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-900/30 transition-colors"
              >
                <MessageSquare className="size-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </article>

          {/* Commercial Card */}
          <article className="card-shine glass-panel glow-border relative flex flex-col justify-between rounded-3xl border border-border/80 p-8 transition-all duration-300 hover:border-accent/40">
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Building2 className="size-6" />
              </div>
              <h3 className="mt-6 font-display text-xl sm:text-2xl font-bold text-foreground">
                Commercial CCTV (Shops, Offices, Warehouses)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Heavy-duty multi-channel surveillance systems engineered for retail shops, corporate offices, factories, and warehouses in Coimbatore to minimize inventory shrinkage and monitor operations.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/90">
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-accent shrink-0" />
                  <span>Cash billing counter and customer entrance focal points</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-accent shrink-0" />
                  <span>Warehouse storage aisle and loading dock surveillance</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-accent shrink-0" />
                  <span>Multi-channel DVR/NVR with multi-terabyte continuous recording</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="size-4 text-accent shrink-0" />
                  <span>Central control room viewing and manager smartphone access</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap gap-3">
              <Button
                variant="hero"
                size="sm"
                onClick={() => onSelectPropertyType("Commercial")}
                className="rounded-full"
              >
                <span>Get Commercial Quote</span>
                <ArrowRight className="size-3.5" />
              </Button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsApp("Commercial")}
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-900/30 transition-colors"
              >
                <MessageSquare className="size-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

