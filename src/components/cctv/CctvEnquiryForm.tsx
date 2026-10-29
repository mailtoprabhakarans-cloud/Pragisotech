import { useState, type FormEvent } from "react";
import { Send, Phone, MessageSquare, Loader2, CheckCircle2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cctvConfig } from "@/config/cctv.config";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { trackFormSubmit, trackWhatsAppClick, trackPhoneCallClick } from "@/lib/analytics-events";

interface CctvEnquiryFormProps {
  initialPropertyType?: string;
}

export function CctvEnquiryForm({ initialPropertyType = "Residential" }: CctvEnquiryFormProps) {
  const [propertyType, setPropertyType] = useState(initialPropertyType);
  const [inquiryType, setInquiryType] = useState("Installation Quote");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/${cctvConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi Pragiso, I am interested in Secure Plus CCTV for my ${propertyType.toLowerCase()}. Please share details and pricing.`
  )}`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const area = (formData.get("area") as string) || "Coimbatore";
    const details = (formData.get("details") as string) || "";

    const combinedDetails = `[CCTV Inquiry] Property: ${propertyType} | Type: ${inquiryType} | Location: ${area} | Notes: ${details}`;

    setIsSubmitting(true);
    trackFormSubmit("CctvEnquiryForm", `CCTV & Security (${propertyType})`);

    try {
      if (!isSupabaseConfigured()) {
        toast.info("Inquiry received!", {
          description:
            "Thank you! Our CCTV installation team in Coimbatore will contact you shortly.",
        });
      } else {
        const { error } = await supabase.from("inquiries").insert([
          {
            name,
            email,
            phone,
            company: `${propertyType} Security`,
            service: "CCTV & Security Surveillance",
            details: combinedDetails,
          },
        ]);

        if (error) {
          throw error;
        }

        toast.success("CCTV quotation inquiry sent successfully!", {
          description: `Our Coimbatore technician team will contact you shortly at ${phone || email}.`,
        });
      }

      setSubmitted(true);
      form.reset();
    } catch (err: any) {
      console.error("Error submitting CCTV inquiry:", err);
      toast.error("Failed to send inquiry", {
        description: err?.message || "Please call us directly at +91-90809-61649 or chat on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="cctv-quote-form"
      aria-labelledby="quote-heading"
      className="relative py-16 md:py-24 border-t border-border/40 bg-secondary/15"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Context & Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-secondary/70 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-md">
              <ShieldCheck className="size-3.5" />
              <span className="tracking-wide uppercase">Request A Quote</span>
            </div>

            <h2
              id="quote-heading"
              className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-foreground"
            >
              Get a Fast CCTV Installation Quote in Coimbatore
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              Contact Pragiso Soft Technologies, your authorised Secure Plus CCTV dealer in Coimbatore. We assess your requirements and provide an itemized quote for camera supply, cabling, and mobile viewing setup.
            </p>

            <div className="card-shine glass-panel rounded-3xl p-6 border border-border/80 space-y-4">
              <h3 className="font-display text-base font-bold text-foreground">
                Prefer Instant Assistance?
              </h3>

              <div className="flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("EnquiryFormCard", cctvConfig.contact.whatsappNumber)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/30 px-4 py-3 text-sm font-semibold text-emerald-400 hover:bg-emerald-900/40 transition-colors"
                >
                  <MessageSquare className="size-4" />
                  <span>Enquire on WhatsApp Instantly</span>
                </a>

                <a
                  href={`tel:${cctvConfig.contact.callingPhoneRaw}`}
                  onClick={() => trackPhoneCallClick("EnquiryFormCard", cctvConfig.contact.callingPhone)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-secondary/50 px-4 py-3 text-sm font-medium text-foreground hover:bg-accent/10 transition-colors"
                >
                  <Phone className="size-4 text-accent" />
                  <span>Call {cctvConfig.contact.callingPhone}</span>
                </a>
              </div>

              <p className="text-[11px] text-muted-foreground text-center">
                Service jurisdiction: Coimbatore, Tamil Nadu • Monday – Saturday: 9 AM – 6 PM
              </p>
            </div>
          </div>

          {/* Right Column: Accessible Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="card-shine glass-panel glow-border rounded-3xl p-8 sm:p-10 border border-border/80 shadow-[var(--shadow-glow)]">
              {submitted ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center">
                  <CheckCircle2 className="mx-auto size-12 text-emerald-400" />
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                    Inquiry Submitted!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you. Our Secure Plus CCTV technician team in Coimbatore will review your requirements and get back to you shortly.
                  </p>
                  <Button
                    variant="glass"
                    className="mt-6 rounded-full"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    CCTV Installation & Product Inquiry
                  </h3>

                  {/* Property Type Radio Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Property Category <span className="text-accent">*</span>
                    </label>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPropertyType("Residential")}
                        className={`rounded-xl border px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                          propertyType === "Residential"
                            ? "border-cyan bg-cyan/15 text-cyan"
                            : "border-border/80 bg-secondary/30 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Residential (Home / Apartment)
                      </button>
                      <button
                        type="button"
                        onClick={() => setPropertyType("Commercial")}
                        className={`rounded-xl border px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                          propertyType === "Commercial"
                            ? "border-accent bg-accent/15 text-accent"
                            : "border-border/80 bg-secondary/30 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Commercial (Shop / Office / Warehouse)
                      </button>
                    </div>
                  </div>

                  {/* Inquiry Nature */}
                  <div>
                    <label
                      htmlFor="cctv-inquiry-type"
                      className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Inquiry Type <span className="text-accent">*</span>
                    </label>
                    <select
                      id="cctv-inquiry-type"
                      name="inquiryType"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border/80 bg-secondary/40 px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="Installation Quote">Complete New Camera Installation & Setup</option>
                      <option value="Product Availability & Pricing">Secure Plus Product Availability & Pricing</option>
                      <option value="DVR/NVR Storage Upgrade">DVR / NVR Upgrade or Hard Disk Storage</option>
                      <option value="Maintenance & Troubleshooting">CCTV Maintenance & Troubleshooting</option>
                    </select>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="cctv-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="cctv-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="e.g. Ramesh Kumar"
                        className="mt-2 w-full rounded-xl border border-border/80 bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cctv-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <input
                        id="cctv-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        className="mt-2 w-full rounded-xl border border-border/80 bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>

                  {/* Email and Area in Coimbatore */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="cctv-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        id="cctv-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-xl border border-border/80 bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cctv-area"
                        className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Area in Coimbatore
                      </label>
                      <input
                        id="cctv-area"
                        name="area"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="e.g. Gandhipuram, RS Puram, Peelamedu"
                        className="mt-2 w-full rounded-xl border border-border/80 bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>

                  {/* Requirements / Details */}
                  <div>
                    <label
                      htmlFor="cctv-details"
                      className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Project Details / Approximate Camera Count
                    </label>
                    <textarea
                      id="cctv-details"
                      name="details"
                      rows={3}
                      autoComplete="off"
                      placeholder="Tell us how many cameras you need (e.g. 4 cameras for house entry and backyard, or 8 cameras for warehouse) or any specific questions..."
                      className="mt-2 w-full rounded-xl border border-border/80 bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full rounded-full shadow-[var(--shadow-glow)]"
                  >
                    {isSubmitting ? (
                      <>
                        Submitting Inquiry... <Loader2 className="ml-2 size-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Submit CCTV Quote Request <Send className="ml-2 size-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

