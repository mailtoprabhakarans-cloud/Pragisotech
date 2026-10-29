import { Camera, HardDrive, Smartphone, Wrench, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cctvConfig } from "@/config/cctv.config";
import { trackWhatsAppClick } from "@/lib/analytics-events";

interface CctvServicesListProps {
  onScrollToForm: () => void;
}

export function CctvServicesList({ onScrollToForm }: CctvServicesListProps) {
  const { services } = cctvConfig;

  const serviceItems = [
    {
      flag: services.cameraInstallationAndConfig,
      icon: Camera,
      color: "text-cyan",
      bgColor: "bg-cyan/10",
      borderColor: "hover:border-cyan/40",
    },
    {
      flag: services.dvrNvrSetup,
      icon: HardDrive,
      color: "text-electric",
      bgColor: "bg-electric/10",
      borderColor: "hover:border-electric/40",
    },
    {
      flag: services.mobileViewingSetup,
      icon: Smartphone,
      color: "text-teal",
      bgColor: "bg-teal/10",
      borderColor: "hover:border-teal/40",
    },
    {
      flag: services.maintenanceAndTroubleshooting,
      icon: Wrench,
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      borderColor: "hover:border-pink-400/40",
    },
  ].filter((item) => item.flag.enabled);

  const whatsappUrl = `https://wa.me/${cctvConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    cctvConfig.contact.whatsappPrefilledMessage
  )}`;

  return (
    <section
      id="services-offered"
      aria-labelledby="services-offered-heading"
      className="relative py-16 md:py-24 border-t border-border/40 bg-secondary/10"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-md">
            <Wrench className="size-3.5" />
            <span className="tracking-wide uppercase">Technical Capabilities</span>
          </div>

          <h2
            id="services-offered-heading"
            className="mt-6 font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-foreground"
          >
            CCTV Installation & Technical Services in Coimbatore
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our certified field technicians handle end-to-end security deployment from hardware mounting and wiring to DVR/NVR network configuration and remote smartphone monitoring.
          </p>
        </div>

        {/* Dynamic Service Grid based on config flags */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceItems.map((s) => (
            <article
              key={s.flag.id}
              className={`card-shine glass-panel glow-border rounded-3xl border border-border/80 p-6 sm:p-7 transition-all duration-300 ${s.borderColor}`}
            >
              <div className={`inline-flex size-12 items-center justify-center rounded-2xl ${s.bgColor} ${s.color}`}>
                <s.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {s.flag.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {s.flag.description}
              </p>
            </article>
          ))}
        </div>

        {/* Section CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="hero"
            size="lg"
            onClick={onScrollToForm}
            className="btn-magnetic rounded-full shadow-[var(--shadow-glow)]"
          >
            <span>Request Service Quote</span>
            <ArrowRight className="size-4" />
          </Button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("ServicesList", cctvConfig.contact.whatsappNumber)}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/30 px-5 py-2.5 text-sm font-semibold text-emerald-400 hover:bg-emerald-900/40 transition-colors"
          >
            <MessageSquare className="size-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

