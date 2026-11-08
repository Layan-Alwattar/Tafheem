'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import EmptyState from './EmptyState';
import ReflectionCard from './ReflectionCard';
import SavedVerseCard from './SavedVerseCard';
import { BookmarkView, Reflection, SavedVerse } from '@/types';

interface BookmarksPanelProps {
  /** Already filtered and sorted by the parent. */
  reflections: Reflection[];
  verses: SavedVerse[];
  filtersActive: boolean;
  onClearFilters: () => void;
}

export default function BookmarksPanel({
  reflections,
  verses,
  filtersActive,
  onClearFilters,
}: BookmarksPanelProps) {
  const [view, setView] = useState<BookmarkView>('verses');

  const VIEWS: { key: BookmarkView; label: string; icon: string; count: number }[] = [
    { key: 'verses', label: 'Verses', icon: 'format_quote', count: verses.length },
    { key: 'reflections', label: 'Reflections', icon: 'auto_stories', count: reflections.length },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-1">
        <div className="inline-flex items-center p-1 bg-brand-cream border border-brand-gold/50 rounded-full shadow-sm">
          {VIEWS.map((v) => {
            const isActive = v.key === view;
            return (
              <button
                key={v.key}
                type="button"
                onClick={() => setView(v.key)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs transition-all ${
                  isActive
                    ? 'font-semibold bg-brand-maroon text-white shadow-sm'
                    : 'font-medium text-on-surface-variant hover:text-brand-maroon hover:bg-brand-gold/15'
                }`}
              >
                <Icon name={v.icon} className="text-[15px] text-brand-gold" />
                <span>{v.label}</span>
                <span
                  className={`px-1.5 rounded-full text-[10px] bg-brand-gold/20 font-bold ${
                    v.key === 'verses' ? 'text-brand-gold' : 'text-brand-gold-dark'
                  }`}
                >
                  {v.count}
                </span>
              </button>
            );
          })}
        </div>
        <span className="text-[12px] text-brand-gold-dark font-medium hidden sm:inline-block">
          Quickly access memorized &amp; bookmarked āyāt
        </span>
      </div>

      <div className="space-y-4">
        {view === 'verses' &&
          (verses.length === 0 ? (
            <EmptyState filtersActive={filtersActive} onClear={onClearFilters} />
          ) : (
            verses.map((v) => <SavedVerseCard key={v.id} verse={v} />)
          ))}

        {view === 'reflections' &&
          (reflections.length === 0 ? (
            <EmptyState filtersActive={filtersActive} onClear={onClearFilters} />
          ) : (
            reflections.map((r) => <ReflectionCard key={r.id} reflection={r} />)
          ))}
      </div>
    </div>
  );
}
