import { Home, Building2, Store, Check, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cctvConfig } from "@/config/cctv.config";
import { trackWhatsAppClick } from "@/lib/analytics-events";

interface CctvResidentialCommercialProps {
  onSelectPropertyType: (type: "Residential" | "Commercial" | "Dealer") => void;
}

export function CctvResidentialCommercial({ onSelectPropertyType }: CctvResidentialCommercialProps) {
  const whatsappUrl = `https://wa.me/${cctvConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    cctvConfig.contact.whatsappPrefilledMessage
  )}`;

  const dealerWhatsAppUrl = `https://wa.me/${cctvConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    cctvConfig.dealerSupply.whatsappPrefilledMessage
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
            Supply & Installation for Homes, Businesses, and Sub-Dealers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From single-family homes to large industrial warehouses and retail sub-dealer wholesale supply, we deliver authentic CCTV equipment with transparent pricing across Coimbatore.
          </p>
        </div>

        {/* 3-Column Sector Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Residential Card */}
          <article className="card-shine glass-panel glow-border relative flex flex-col justify-between rounded-3xl border border-border/80 p-7 transition-all duration-300 hover:border-cyan/40">
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                <Home className="size-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                Home & Apartment CCTV
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Tailored security setups for independent houses, villas, and residential apartment buildings in Coimbatore.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-foreground/90">
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-cyan shrink-0" />
                  <span>Main door and perimeter gate monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-cyan shrink-0" />
                  <span>Infrared night vision for driveways</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-cyan shrink-0" />
                  <span>Mobile phone remote live streaming</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-cyan shrink-0" />
                  <span>Concealed wiring to protect home decor</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex flex-col gap-2.5">
              <Button
                variant="hero"
                size="sm"
                onClick={() => onSelectPropertyType("Residential")}
                className="w-full rounded-full"
              >
                <span>Get Home CCTV Quote</span>
                <ArrowRight className="size-3.5" />
              </Button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsApp("Residential")}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 py-2 text-xs font-semibold text-emerald-400 hover:bg-emerald-900/30 transition-colors"
              >
                <MessageSquare className="size-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </article>

          {/* Commercial Card */}
          <article className="card-shine glass-panel glow-border relative flex flex-col justify-between rounded-3xl border border-border/80 p-7 transition-all duration-300 hover:border-accent/40">
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Building2 className="size-6" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                Commercial CCTV (Shops & Offices)
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Multi-channel surveillance systems for retail shops, offices, warehouses, and factories to protect inventory and monitor operations.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-foreground/90">
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-accent shrink-0" />
                  <span>Billing counters and entrance aisles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-accent shrink-0" />
                  <span>Warehouse storage aisle surveillance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-accent shrink-0" />
                  <span>Multi-channel DVR/NVR continuous recording</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-accent shrink-0" />
                  <span>Multi-device managerial app access</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex flex-col gap-2.5">
              <Button
                variant="hero"
                size="sm"
                onClick={() => onSelectPropertyType("Commercial")}
                className="w-full rounded-full"
              >
                <span>Get Commercial Quote</span>
                <ArrowRight className="size-3.5" />
              </Button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsApp("Commercial")}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 py-2 text-xs font-semibold text-emerald-400 hover:bg-emerald-900/30 transition-colors"
              >
                <MessageSquare className="size-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </article>

          {/* Sub-Dealer & Wholesale Supply Card */}
          <article className="card-shine glass-panel glow-border relative flex flex-col justify-between rounded-3xl border border-teal/40 bg-teal/5 p-7 transition-all duration-300 hover:border-teal hover:shadow-[0_0_30px_-10px_rgba(45,212,191,0.3)]">
            <div>
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-teal/15 text-teal">
                <Store className="size-6" />
              </div>
              <div className="mt-2 inline-block rounded-md bg-teal/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal">
                B2B Wholesale Supply
              </div>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                We Supply for Dealers Also
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                Are you a local CCTV dealer, electrical contractor, or security installer? We supply genuine cameras, NVRs, and accessories at wholesale dealer margins.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-foreground/90">
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-teal shrink-0" />
                  <span>Wholesale margins on bulk camera orders</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-teal shrink-0" />
                  <span>Ready stock in Coimbatore for fast dispatch</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-teal shrink-0" />
                  <span>Direct manufacturer warranty backing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3.5 text-teal shrink-0" />
                  <span>Full kit: Dome, Bullet, DVR/NVR, and cables</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex flex-col gap-2.5">
              <Button
                variant="hero"
                size="sm"
                onClick={() => onSelectPropertyType("Dealer")}
                className="w-full rounded-full shadow-[0_0_15px_-3px_rgba(45,212,191,0.4)]"
              >
                <span>Request Dealer Price List</span>
                <ArrowRight className="size-3.5" />
              </Button>
              <a
                href={dealerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsApp("SubDealer")}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-teal/40 bg-teal/15 py-2 text-xs font-semibold text-teal hover:bg-teal/25 transition-colors"
              >
                <MessageSquare className="size-3.5" />
                <span>Dealer WhatsApp Hotline</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

