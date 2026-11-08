import { TAGS, TagId } from '@/data/tags';
import { Filters } from '@/types';

export const DEFAULT_FILTERS: Filters = { surah: '', tag: '', sort: 'recent' };

interface Filterable {
  surah: number;
  ayah: number;
  tagId: TagId;
}

/** Applies the surah/tag filters, then the sort. Returns a new array. */
export function filterAndSort<T extends Filterable>(
  items: readonly T[],
  filters: Filters,
  dateOf: (item: T) => string
): T[] {
  const surah = filters.surah === '' ? null : Number(filters.surah);

  const result = items.filter(
    (i) => (surah === null || i.surah === surah) && (filters.tag === '' || i.tagId === filters.tag)
  );

  switch (filters.sort) {
    case 'ayah':
      return result.sort((a, b) => a.surah - b.surah || a.ayah - b.ayah);
    case 'oldest':
      return result.sort((a, b) => dateOf(a).localeCompare(dateOf(b)));
    default:
      return result.sort((a, b) => dateOf(b).localeCompare(dateOf(a)));
  }
}

/** Surah numbers present in `items`, ascending (so the dropdown never offers an empty result). */
export const getAvailableSurahs = (items: readonly { surah: number }[]) =>
  Array.from(new Set(items.map((i) => i.surah))).sort((a, b) => a - b);

/** Tag ids present in `items`, in the order they're declared in TAGS. */
export const getAvailableTags = (items: readonly { tagId: TagId }[]) =>
  (Object.keys(TAGS) as TagId[]).filter((id) => items.some((i) => i.tagId === id));

export const hasActiveFilters = (f: Filters) => f.surah !== '' || f.tag !== '';
