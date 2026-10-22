import { MARQUEE_ITEMS } from "../data";

export default function MarqueeRibbon() {
  // Duplicated so the -50% translate loops seamlessly
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full bg-surface-container-high border-y border-outline-variant/50 py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-xs md:text-sm font-sans tracking-widest text-primary/80 uppercase font-medium">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="mx-8 flex items-center gap-2">
            <span className="text-gold" aria-hidden="true">
              ✦
            </span>{" "}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
