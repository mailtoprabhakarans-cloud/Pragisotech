import { Box, Sparkles, MessageSquare, Phone, CheckCircle2, FileText } from "lucide-react";
import { cctvConfig } from "@/config/cctv.config";
import { trackWhatsAppClick, trackPhoneCallClick } from "@/lib/analytics-events";

export function CctvProductShowcase() {
  const { products } = cctvConfig;

  const whatsappUrl = `https://wa.me/${cctvConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi Pragiso, please send me the latest Secure Plus CCTV product catalog, model list, and pricing."
  )}`;

  const handleCall = () => {
    trackPhoneCallClick("ProductCatalogCard", cctvConfig.contact.callingPhone);
  };

  return (
    <section
      id="product-showcase"
      aria-labelledby="showcase-heading"
      className="relative py-16 md:py-24 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold text-cyan backdrop-blur-md">
            <Box className="size-3.5" />
            <span className="tracking-wide uppercase">Genuine Hardware</span>
          </div>

          <h2
            id="showcase-heading"
            className="mt-6 font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-foreground"
          >
            Secure Plus Surveillance Product Showcase
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We supply authentic Secure Plus HD dome cameras, outdoor bullet cameras, pan-tilt-zoom (PTZ) units, and multi-channel DVR/NVR recorders in Coimbatore.
          </p>
        </div>

        {products && products.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article
                key={p.id}
                className="card-shine glass-panel glow-border flex flex-col justify-between rounded-3xl border border-border/80 p-6 transition-all duration-300 hover:border-cyan/40"
              >
                <div>
                  <div className="overflow-hidden rounded-2xl bg-secondary/30 p-4 aspect-[4/3] flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.alt}
                      width={400}
                      height={300}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="mt-4 inline-block rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold text-cyan">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                    {p.shortDescription}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 mx-auto max-w-4xl">
            <div className="card-shine glass-panel glow-border rounded-3xl border border-border/80 p-8 sm:p-12 text-center shadow-[var(--shadow-glow)]">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-cyan/15 text-cyan">
                <FileText className="size-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                Official Secure Plus Catalog & Price List Available on Request
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                As an authorised dealer and wholesale distributor in Coimbatore, we maintain ready stock of the complete Secure Plus CCTV lineup for residential homes, commercial projects, and local security sub-dealers.
              </p>

              {/* Verified Product Range Grid */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2 text-left max-w-2xl mx-auto">
                <div className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-secondary/30 p-3 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="size-4 text-cyan shrink-0" />
                  <span>HD Dome & Bullet Cameras (2MP, 5MP & 4K)</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-secondary/30 p-3 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="size-4 text-cyan shrink-0" />
                  <span>Multi-Channel DVR & NVR Surveillance Units</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-secondary/30 p-3 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="size-4 text-cyan shrink-0" />
                  <span>Color Night Vision & Mobile App Remote View</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-secondary/30 p-3 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="size-4 text-cyan shrink-0" />
                  <span>Wholesale Margins & Bulk Dispatch for Sub-Dealers</span>
                </div>
              </div>

              {/* Direct CTAs */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("ProductShowcaseCatalog", cctvConfig.contact.whatsappNumber)}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/30 px-6 py-3 text-sm font-semibold text-emerald-400 hover:bg-emerald-900/40 transition-all shadow-[0_0_20px_-5px_rgba(52,211,153,0.4)]"
                >
                  <MessageSquare className="size-4" />
                  <span>Request Full Catalog on WhatsApp</span>
                </a>

                <a
                  href={`tel:${cctvConfig.contact.callingPhoneRaw}`}
                  onClick={handleCall}
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground hover:bg-accent/10 transition-colors"
                >
                  <Phone className="size-4 text-accent" />
                  <span>Call {cctvConfig.contact.callingPhone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

