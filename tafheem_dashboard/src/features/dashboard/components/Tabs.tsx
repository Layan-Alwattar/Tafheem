'use client';

import Icon from '@/components/Icon';
import { TAB_COUNTS } from '@/data/selectors';
import { TabKey } from '@/types';

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: 'private', label: 'Private Reflections', icon: 'lock' },
  { key: 'public', label: 'Public Reflections', icon: 'public' },
  { key: 'bookmarks', label: 'Saved', icon: 'bookmark' },
];

const NOUN: Record<TabKey, string> = {
  private: 'private reflections',
  public: 'public reflections',
  bookmarks: 'bookmarks',
};

interface TabsProps {
  active: TabKey;
  onChange: (tab: TabKey) => void;
  /** How many items are visible after filtering. */
  shown: number;
}

export default function Tabs({ active, onChange, shown }: TabsProps) {
  return (
    <div className="flex items-center justify-between border-b-2 border-brand-gold/30 gap-4 flex-wrap">
      <div className="flex items-center gap-1" role="tablist">
        {TABS.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.key)}
              className={`px-4 py-3 border-b-[3px] font-headline-sm flex items-center gap-2 transition-all cursor-pointer -mb-[2px] text-[14px] ${
                isActive
                  ? 'border-brand-gold text-brand-maroon font-bold'
                  : 'border-transparent text-on-surface-variant font-medium rounded-t hover:text-brand-maroon hover:bg-brand-gold/10'
              }`}
            >
              <Icon name={tab.icon} className={`text-[18px] ${isActive ? 'text-brand-gold' : ''}`} />
              <span>{tab.label}</span>
              <span
                className={`px-2 py-0.5 rounded-full border font-semibold text-[10px] ${
                  isActive
                    ? 'bg-brand-maroon text-white border-brand-gold'
                    : 'bg-brand-cream text-brand-gold-dark border-brand-gold/50'
                }`}
              >
                {TAB_COUNTS[tab.key]}
              </span>
            </button>
          );
        })}
      </div>
      <div className="pb-2 sm:pb-0">
        <span className="text-brand-gold-dark font-medium text-[11px]">{shown === TAB_COUNTS[active]
            ? `Showing ${shown} ${NOUN[active]}`
            : `Showing ${shown} of ${TAB_COUNTS[active]} ${NOUN[active]}`}</span>
      </div>
    </div>
  );
}
