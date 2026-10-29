import { Award, CheckCircle2, ShieldCheck, Calendar, Building2, ZoomIn } from "lucide-react";
import { cctvConfig } from "@/config/cctv.config";
import { useState } from "react";

export function CctvAuthorisedDealer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="authorised-dealer"
      aria-labelledby="dealer-heading"
      className="relative py-16 md:py-24 border-t border-border/40 bg-secondary/10"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold text-cyan backdrop-blur-md">
            <Award className="size-3.5" />
            <span className="tracking-wide uppercase">Official Dealer Credentials</span>
          </div>

          <h2
            id="dealer-heading"
            className="mt-6 font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-foreground"
          >
            Authorised Dealer Announcement & Certificate
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground font-medium">
            Pragiso Soft Technologies is an authorised dealer of Secure Plus & Umaiya Security System CCTV cameras.
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            As an officially appointed dealer and distributor in Coimbatore, we supply authentic CCTV surveillance hardware directly backed by manufacturer warranties — serving residential homes, commercial enterprises, and local retail sub-dealers across Tamil Nadu.
          </p>
        </div>

        {/* Dealer Authorization Certificate Card */}
        <div className="mt-12 mx-auto max-w-5xl">
          <div className="card-shine glass-panel glow-border rounded-3xl border border-border/80 p-6 sm:p-10 shadow-[var(--shadow-glow)]">
            <div className="grid gap-8 md:grid-cols-12 items-center">
              {/* Certificate Image Display */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <div
                  onClick={() => setShowModal(true)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-accent/40 bg-white p-2 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-cyan"
                >
                  <img
                    src={cctvConfig.dealer.dealerAuthLetterUrl}
                    alt="Official Authorized Dealer Certificate — Pragiso Soft Technologies, Umaiya Security System"
                    width={450}
                    height={320}
                    loading="eager"
                    className="h-auto w-full rounded-xl object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-xs transition-opacity group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan px-3 py-1.5 text-xs font-bold text-background shadow-lg">
                      <ZoomIn className="size-3.5" /> Click to Enlarge
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <ShieldCheck className="size-3.5 text-cyan" />
                  <span>Verified Official Manufacturer Certificate</span>
                </div>
              </div>

              {/* Verified Dealership Assurances & Credentials */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-cyan">
                  <Building2 className="size-3.5" /> Issued by {cctvConfig.dealer.certifyingAuthority}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  Certified Supply, Installation & Sub-Dealer Distribution
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Pragiso Soft Technologies is certified and permitted to market, sell, and support CCTV products in Coimbatore and designated territories. We support both direct installation clients and commercial sub-dealers with genuine hardware and rapid fulfillment.
                </p>

                {/* Certificate Meta Pills */}
                <div className="grid grid-cols-2 gap-3 py-2 text-xs">
                  <div className="rounded-xl border border-border/80 bg-secondary/40 p-3">
                    <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">Issue Date</span>
                    <strong className="text-foreground">{cctvConfig.dealer.certificateIssueDate}</strong>
                  </div>
                  <div className="rounded-xl border border-border/80 bg-secondary/40 p-3">
                    <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">Valid Until</span>
                    <strong className="text-foreground">{cctvConfig.dealer.certificateValidUntil}</strong>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-cyan mt-0.5" />
                    <span>
                      <strong className="text-foreground">Authentic Brand Hardware:</strong> Direct supply of genuine dome cameras, bullet cameras, PTZ units, and DVR/NVR kits.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-cyan mt-0.5" />
                    <span>
                      <strong className="text-foreground">Supply for Sub-Dealers:</strong> Wholesale margins, bulk quantity pricing, and dispatch for local security contractors.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-cyan mt-0.5" />
                    <span>
                      <strong className="text-foreground">Local Coimbatore Technical Backup:</strong> Prompt on-site technician response, cabling support, and warranty claims.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Lightbox for Certificate */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black"
              aria-label="Close modal"
            >
              ✕
            </button>
            <img
              src={cctvConfig.dealer.dealerAuthLetterUrl}
              alt="Authorized Dealer Certificate Full Size"
              className="max-h-[85vh] w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

