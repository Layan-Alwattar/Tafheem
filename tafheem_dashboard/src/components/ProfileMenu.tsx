'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';
import { USER } from '@/data/content';

const MENU_ITEMS = [
  { label: 'Settings', icon: 'settings' },
  { label: 'How We Reflect', icon: 'auto_stories' },
  { label: 'Help', icon: 'help_outline' },
];

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        title="User Profile"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full border border-brand-gold bg-brand-cream shadow-sm hover:shadow-[0_2px_8px_rgba(219,188,71,0.2)] transition-all cursor-pointer group"
      >
        <div className="w-7 h-7 rounded-full bg-brand-maroon text-brand-gold flex items-center justify-center font-bold text-xs shadow-sm">
          {USER.displayName[0]}
        </div>
        <span className="font-semibold text-brand-maroon group-hover:text-brand-maroon-dark transition-colors text-[12px]">
          {USER.displayName}
        </span>
        <Icon
          name="expand_more"
          className={`text-[16px] text-brand-gold transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 rounded-lg bg-brand-cream border border-brand-gold/80 shadow-menu z-50 overflow-hidden divide-y divide-brand-gold/30">
          <div className="p-3.5 bg-linear-to-b from-brand-parchment/90 to-brand-cream">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-maroon text-brand-gold flex items-center justify-center font-bold text-sm shadow-sm ring-2 ring-brand-gold/40">
                {USER.displayName[0]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-[14px] font-bold text-brand-maroon truncate font-headline-sm">
                    {USER.displayName}
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                </div>
                <p className="text-[11px] text-on-surface-variant truncate">{USER.email}</p>
              </div>
            </div>
          </div>

          <div className="py-1.5">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.label}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-2.5 px-3.5 py-2 text-[13px] text-on-surface-variant hover:text-brand-maroon hover:bg-brand-gold/15 transition-colors group"
              >
                <Icon name={item.icon} className="text-[18px] text-brand-gold" />
                <span className="font-medium text-on-surface group-hover:text-brand-maroon">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          <div className="py-1 bg-brand-parchment/40">
            <button
              type="button"
              className="w-full flex items-center gap-2.5 px-3.5 py-2 text-[13px] font-semibold text-error hover:bg-brand-gold/15 transition-colors cursor-pointer text-left"
            >
              <Icon name="logout" className="text-[18px] text-error" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
