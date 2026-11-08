import Icon from '@/components/Icon';
import { VERSE_OF_THE_DAY as verse } from '@/data/content';
import { formatVerseRef } from '@/lib/verse';

export default function VerseOfTheDay() {
  return (
    <section className="relative overflow-hidden rounded-lg border border-brand-gold/80 shadow-gold-md py-7 px-8 bg-[linear-gradient(135deg,rgba(253,248,238,0.95)_0%,rgba(254,252,247,0.8)_50%,rgba(247,244,231,0.9)_100%)]">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded bg-brand-gold/20 border border-brand-gold text-brand-maroon font-bold tracking-wide text-[10px]">
              Verse of the Day
            </span>
            <span className="text-brand-gold-dark font-medium text-[11px]">{formatVerseRef(verse.surah, verse.ayah)}</span>
          </div>
          <p className="font-serif-text text-on-surface italic leading-relaxed text-[15px] sm:text-base">
            {verse.translation}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1 text-[12px]">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-brand-maroon font-semibold hover:text-brand-gold-dark transition-colors cursor-pointer text-[12px]"
            >
              <Icon name="menu_book" className="text-[17px] text-brand-gold" />
              <span>Read in Context</span>
            </button>
            <span className="text-brand-gold text-xs">✦</span>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-brand-gold-dark hover:text-brand-maroon font-semibold transition-colors cursor-pointer text-[12px]"
            >
              <Icon name="edit_note" className="text-[17px] text-brand-gold" />
              <span>Reflect on this Verse</span>
            </button>
          </div>
        </div>
        <div className="text-right pl-4 border-t md:border-t-0 md:border-l border-brand-gold/30 pt-4 md:pt-0 md:pl-8">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic-display text-brand-maroon leading-relaxed text-lg sm:text-xl"
          >
            {verse.arabic}
          </p>
        </div>
      </div>
    </section>
  );
}
