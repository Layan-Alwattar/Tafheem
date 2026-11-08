import Icon from '@/components/Icon';
import TagBadge from '@/components/TagBadge';
import { getTagLabel } from '@/data/tags';
import { formatDate } from '@/lib/format';
import { formatVerseRef } from '@/lib/verse';
import { SavedVerse } from '@/types';

export default function SavedVerseCard({ verse }: { verse: SavedVerse }) {
  return (
    <article className="p-5 rounded-lg bg-brand-cream border border-brand-gold/50 shadow-gold-sm hover:border-brand-gold hover:shadow-[0_4px_16px_rgba(219,188,71,0.12)] transition-all space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
          <span className="inline-block px-2 py-0.5 rounded bg-brand-gold/20 border border-brand-gold text-brand-maroon text-[11px] font-bold">
            Verse
          </span>
          <span className="font-headline-sm text-sm text-brand-gold-dark font-bold">{formatVerseRef(verse.surah, verse.ayah)}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-outline">Saved {formatDate(verse.savedAt)}</span>
          <button
            type="button"
            title="Saved Ayah"
            aria-label="Remove saved ayah"
            className="text-brand-maroon hover:text-brand-gold-dark transition-colors p-1"
          >
            <Icon name="bookmark" className="text-[18px]" />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 items-center pt-1">
        <p className="font-serif-text text-[15px] text-on-surface italic leading-relaxed sm:text-base">
          {verse.translation}
        </p>
        <p
          dir="rtl"
          lang="ar"
          className="font-arabic-display text-brand-maroon text-right leading-relaxed text-lg sm:text-xl"
        >
          {verse.arabic}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-brand-gold/30">
        <div className="flex items-center gap-2">
          <TagBadge label={getTagLabel(verse.tagId)} />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-maroon text-white hover:bg-[#5b2838] border border-brand-gold/70 rounded-lg text-[12px] font-semibold transition-colors cursor-pointer shadow-sm"
          >
            <Icon name="edit_note" className="text-[16px] text-brand-gold" />
            <span>Reflect on this Verse</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-cream hover:bg-brand-gold/10 border border-brand-gold rounded-lg text-[12px] text-brand-maroon font-semibold transition-colors cursor-pointer"
          >
            <Icon name="menu_book" className="text-[16px] text-brand-gold" />
            <span>Read in Context</span>
          </button>
        </div>
      </div>
    </article>
  );
}
