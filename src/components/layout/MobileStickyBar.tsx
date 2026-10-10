import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { contactNumber, whatsappUrl } from "@/config/site";
import { planHref } from "@/config/navigation";

/** Fixed bottom action bar on phones: Call · WhatsApp · Plan. Hidden from lg up. */
export function MobileStickyBar() {
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-ivory/95 backdrop-blur lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <a href={contactNumber.telUrl} className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-bold text-haram-deep">
        <Icon name="call" filled className="text-[22px] text-haram" />
        Call now
      </a>
      <a href={whatsappUrl("Assalam o Alaikum, I want to plan my Umrah. Please guide me.")} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-0.5 bg-whatsapp py-2.5 text-xs font-bold text-white">
        <WhatsAppIcon className="h-[22px] w-[22px]" />
        WhatsApp
      </a>
      <Link href={planHref} className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-bold text-haram-deep">
        <Icon name="edit_note" className="text-[22px] text-haram" />
        Get quote
      </Link>
    </nav>
  );
}
