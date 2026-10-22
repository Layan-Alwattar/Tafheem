import Icon from "./Icon";

export default function AnnouncementBar() {
  return (
    <aside className="w-full bg-primary text-on-primary/90 text-xs md:text-sm font-sans py-2.5 px-4 tracking-wider border-b border-primary-container">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse" />
          <span className="font-medium tracking-[0.2em] uppercase text-[11px] md:text-xs text-gold-light">
            Tadabbur · Tafakkur · Tafheem
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-xs text-on-primary/75">
          <span>A quiet space for your thoughts</span>
          <div className="flex items-center gap-1.5 bg-primary-container/80 px-2.5 py-0.5 rounded-full text-gold-light text-[11px] font-medium border border-gold/20">
            <Icon name="lock" className="text-[13px]" />
            <span>100% Private Reflections</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
