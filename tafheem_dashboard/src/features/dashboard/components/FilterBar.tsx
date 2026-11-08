'use client';

import { SORT_OPTIONS } from '@/data/content';
import { getSurah } from '@/data/surahs';
import { getTagLabel, TagId } from '@/data/tags';
import { Filters, SortKey } from '@/types';

const SELECT_CLASS =
  'bg-brand-cream border border-brand-gold/60 rounded-lg px-3 py-1.5 text-on-surface focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold shadow-sm cursor-pointer text-[12px]';

// A native <select> sizes itself to its longest option, and the options differ per tab.
// Fixed widths keep the bar from jumping around when you switch tabs.
const FILTER_WIDTH = 'min-w-0 flex-1 md:flex-none md:w-52';
const SORT_WIDTH = 'md:w-44';

interface FilterBarProps {
  filters: Filters;
  onChange: (next: Filters) => void;
  /** Surah numbers present on the current tab. */
  surahs: number[];
  /** Tag ids present on the current tab. */
  tags: TagId[];
}

export default function FilterBar({ filters, onChange, surahs, tags }: FilterBarProps) {
  return (
    <div className="p-3.5 rounded-lg bg-brand-cream border border-brand-gold/60 shadow-gold-sm flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-2.5 w-full md:w-auto flex-1">
        <select
          aria-label="Filter by surah"
          className={`${SELECT_CLASS} ${FILTER_WIDTH}`}
          value={filters.surah}
          onChange={(e) => onChange({ ...filters, surah: e.target.value })}
        >
          <option value="">All Surahs</option>
          {surahs.map((n) => (
            <option key={n} value={String(n)}>
              {`Surah ${getSurah(n)?.name ?? n} (${n})`}
            </option>
          ))}
        </select>

        <select
          aria-label="Filter by tag"
          className={`${SELECT_CLASS} ${FILTER_WIDTH}`}
          value={filters.tag}
          onChange={(e) => onChange({ ...filters, tag: e.target.value })}
        >
          <option value="">All Tags</option>
          {tags.map((id) => (
            <option key={id} value={id}>
              {getTagLabel(id)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2 self-end md:self-auto">
        <span className="text-brand-gold-dark font-semibold text-[11px]">Sort:</span>
        <select
          aria-label="Sort order"
          className={`${SELECT_CLASS} ${SORT_WIDTH}`}
          value={filters.sort}
          onChange={(e) => onChange({ ...filters, sort: e.target.value as SortKey })}
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
