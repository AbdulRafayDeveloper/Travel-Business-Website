import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/config/site";

/** Floating WhatsApp button for desktop; phones use the sticky bottom bar instead. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl("Assalam o Alaikum, I want to plan my Umrah. Please guide me.")}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 end-6 z-40 hidden items-center gap-3 rounded-full bg-whatsapp py-3 pe-5 ps-3 text-night shadow-soft transition-transform hover:-translate-y-0.5 lg:flex"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="text-sm font-bold">Plan your Umrah on WhatsApp</span>
    </a>
  );
}
