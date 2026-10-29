import { Phone, MessageSquare } from "lucide-react";
import { cctvConfig } from "@/config/cctv.config";
import { trackWhatsAppClick, trackPhoneCallClick } from "@/lib/analytics-events";

interface CctvStickyMobileBarProps {
  onScrollToForm: () => void;
}

export function CctvStickyMobileBar({ onScrollToForm }: CctvStickyMobileBarProps) {
  const whatsappUrl = `https://wa.me/${cctvConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    cctvConfig.contact.whatsappPrefilledMessage
  )}`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 flex items-center gap-2 border-t border-border bg-background/95 backdrop-blur-lg px-3 py-2 shadow-[0_-4px_20px_-6px_rgba(0,0,0,0.6)] md:hidden">
      <button
        type="button"
        onClick={onScrollToForm}
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-accent py-2.5 text-xs font-bold text-background transition-transform active:scale-95"
      >
        Get Quote
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("StickyMobileBar", cctvConfig.contact.whatsappNumber)}
        className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-950/30 px-3 py-2.5 text-xs font-bold text-emerald-400 transition-transform active:scale-95"
      >
        <MessageSquare className="size-3.5" />
        <span>WhatsApp</span>
      </a>

      <a
        href={`tel:${cctvConfig.contact.callingPhoneRaw}`}
        onClick={() => trackPhoneCallClick("StickyMobileBar", cctvConfig.contact.callingPhone)}
        className="flex items-center justify-center gap-1.5 rounded-xl border border-border/80 bg-secondary/50 px-3 py-2.5 text-xs font-medium text-foreground transition-transform active:scale-95"
      >
        <Phone className="size-3.5 text-accent" />
        <span>Call</span>
      </a>
    </div>
  );
}

