import { Icon } from "@/components/ui/Icon";

export interface Notice {
  icon: string;
  text: string;
  urdu?: string;
}

interface NoticeRibbonProps {
  notices: Notice[];
}

/** Slow-scrolling gold ribbon for time-sensitive notices (visa dates, Ramadan seats). */
export function NoticeRibbon({ notices }: NoticeRibbonProps) {
  const items = [...notices, ...notices];
  return (
    <div className="overflow-hidden border-y border-gold-deep/30 bg-gold-pale text-haram-deep" role="region" aria-label="Important notices">
      <div className="marquee-track py-2.5">
        {items.map((n, i) => (
          <span key={`${n.text}-${i}`} className="flex items-center gap-3 px-6 text-sm font-semibold" aria-hidden={i >= notices.length}>
            <Icon name={n.icon} className="text-[18px] text-gold-deep" />
            <span>{n.text}</span>
            {n.urdu && <span className="urdu text-base leading-none">{n.urdu}</span>}
            <span className="h-1.5 w-1.5 rounded-full bg-gold-deep/60" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
