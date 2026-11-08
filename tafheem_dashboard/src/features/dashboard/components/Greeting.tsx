import Icon from "@/components/Icon";
import { USER } from "@/data/content";
import TodayLabel from "./TodayLabel";

export default function Greeting() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 pb-1">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_6px_rgba(219,188,71,0.8)]" />
          <span className="tracking-wider uppercase text-brand-gold-dark font-semibold text-[11px]">
            <TodayLabel />
          </span>
        </div>
        <h1 className="font-headline-md text-brand-maroon font-bold tracking-tight text-xl lg:text-2xl">
          Assalamu Alaikum, {USER.displayName.split(" ")[0]}
        </h1>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-maroon text-white border border-brand-gold/80 rounded-lg font-semibold hover:bg-brand-maroon-dark hover:border-brand-gold hover:shadow-[0_0_12px_rgba(219,188,71,0.3)] transition-all shadow-sm cursor-pointer text-[12px]"
        >
          <Icon name="add" className="text-[18px] text-brand-gold" />
          <span>New Reflection</span>
        </button>
      </div>
    </div>
  );
}
