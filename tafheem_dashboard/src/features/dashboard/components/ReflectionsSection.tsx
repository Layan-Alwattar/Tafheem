'use client';

import { useState } from 'react';
import BookmarksPanel from './BookmarksPanel';
import EmptyState from './EmptyState';
import FilterBar from './FilterBar';
import ReflectionCard from './ReflectionCard';
import Tabs from './Tabs';
import { SAVED_VERSES } from '@/data/content';
import { myPrivate, myPublic, saved } from '@/data/selectors';
import {
  DEFAULT_FILTERS,
  filterAndSort,
  getAvailableSurahs,
  getAvailableTags,
  hasActiveFilters,
} from '@/lib/filters';
import { Filters, TabKey } from '@/types';

/** Everything on each tab, before filtering: used to build the dropdown options. */
const BASE_ITEMS = {
  private: myPrivate,
  public: myPublic,
  bookmarks: [...saved, ...SAVED_VERSES],
};

export default function ReflectionsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('private');
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  const privateList = filterAndSort(myPrivate, filters, (r) => r.updatedAt);
  const publicList = filterAndSort(myPublic, filters, (r) => r.updatedAt);
  const savedList = filterAndSort(saved, filters, (r) => r.updatedAt);
  const verseList = filterAndSort(SAVED_VERSES, filters, (v) => v.savedAt);

  const shown: Record<TabKey, number> = {
    private: privateList.length,
    public: publicList.length,
    bookmarks: savedList.length + verseList.length,
  };

  const filtersActive = hasActiveFilters(filters);
  const clearFilters = () => setFilters((f) => ({ ...f, surah: '', tag: '' }));

  // A surah or tag picked on one tab may not exist on another, so start fresh.
  const changeTab = (tab: TabKey) => {
    setActiveTab(tab);
    setFilters(DEFAULT_FILTERS);
  };

  const base = BASE_ITEMS[activeTab];

  return (
    <section className="space-y-4">
      <Tabs active={activeTab} onChange={changeTab} shown={shown[activeTab]} />
      <FilterBar
        filters={filters}
        onChange={setFilters}
        surahs={getAvailableSurahs(base)}
        tags={getAvailableTags(base)}
      />

      {activeTab === 'private' && (
        <div className="space-y-4" role="tabpanel">
          {privateList.length === 0 ? (
            <EmptyState filtersActive={filtersActive} onClear={clearFilters} />
          ) : (
            privateList.map((r) => <ReflectionCard key={r.id} reflection={r} />)
          )}
        </div>
      )}

      {activeTab === 'public' && (
        <div className="space-y-4" role="tabpanel">
          {publicList.length === 0 ? (
            <EmptyState filtersActive={filtersActive} onClear={clearFilters} />
          ) : (
            publicList.map((r) => <ReflectionCard key={r.id} reflection={r} />)
          )}
        </div>
      )}

      {activeTab === 'bookmarks' && (
        <div role="tabpanel">
          <BookmarksPanel
            reflections={savedList}
            verses={verseList}
            filtersActive={filtersActive}
            onClearFilters={clearFilters}
          />
        </div>
      )}
    </section>
  );
}
