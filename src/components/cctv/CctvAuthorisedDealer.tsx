import { Award, FileText, CheckCircle2, ShieldAlert } from "lucide-react";
import { cctvConfig } from "@/config/cctv.config";

export function CctvAuthorisedDealer() {
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
            <span className="tracking-wide uppercase">Dealer Credentials</span>
          </div>

          <h2
            id="dealer-heading"
            className="mt-6 font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-foreground"
          >
            Authorised Dealer Announcement
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground font-medium">
            Pragiso Soft Technologies is an authorised dealer of Secure Plus CCTV cameras.
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            As an officially appointed dealer in Coimbatore, we supply authentic Secure Plus surveillance systems directly backed by genuine manufacturer hardware, warranty support, and authorized installation practices.
          </p>
        </div>

        {/* Dealer Authorization Certificate / Letter Card */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="card-shine glass-panel glow-border rounded-3xl border border-border/80 p-6 sm:p-10">
            <div className="grid gap-8 md:grid-cols-12 items-center">
              {/* Certificate Placeholder or Verified Image */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                {cctvConfig.dealer.hasAuthLetterImage ? (
                  <img
                    src={cctvConfig.dealer.dealerAuthLetterUrl}
                    alt="Secure Plus Authorised Dealer Certificate for Pragiso Soft Technologies"
                    width={320}
                    height={420}
                    loading="lazy"
                    className="rounded-2xl border border-border/80 object-cover shadow-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border/80 bg-secondary/40 p-8 text-center w-full min-h-[260px]">
                    <div className="rounded-full bg-cyan/10 p-3 text-cyan">
                      <FileText className="size-8" />
                    </div>
                    <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-accent">
                      Dealer Certificate Placeholder
                    </span>
                    <p className="mt-2 text-xs text-muted-foreground">
                      [TODO: Upload scanned copy of official Secure Plus dealer authorization certificate or appointment letter to display here]
                    </p>
                    <span className="mt-3 rounded-md bg-secondary/80 px-2.5 py-1 text-[11px] text-muted-foreground">
                      Official Document on File
                    </span>
                  </div>
                )}
              </div>

              {/* Verified Dealership Assurances */}
              <div className="md:col-span-7 space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Why Buy From an Authorised Secure Plus Dealer?
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Purchasing and installing CCTV surveillance through an authorised dealer protects your investment against counterfeit equipment, uncertified power supplies, and unsupported firmware.
                </p>

                <ul className="space-y-3 pt-2 text-sm text-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-cyan mt-0.5" />
                    <span>
                      <strong className="text-foreground">Authentic Secure Plus Hardware:</strong> Direct from authorized distribution channels with serial number verification.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-cyan mt-0.5" />
                    <span>
                      <strong className="text-foreground">Certified Cable & Power Sizing:</strong> Proper copper cabling and surge-protected SMPS power units to prevent camera burnout.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-cyan mt-0.5" />
                    <span>
                      <strong className="text-foreground">Local Coimbatore Support:</strong> Rapid on-site technician response for maintenance, relocations, or storage upgrades.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

