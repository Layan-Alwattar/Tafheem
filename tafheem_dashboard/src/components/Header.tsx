'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';
import ProfileMenu from '@/components/ProfileMenu';
import { USER } from '@/data/content';

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/', icon: null },
  { label: 'Qur’an Reader', href: '/quran', icon: 'menu_book' },
  { label: 'Community', href: '/community', icon: 'group' },
] as const;

export default function Header() {
  const pathname = usePathname();
  const hasUnread = USER.notifications.some((n) => !n.read);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-brand-gold/30 shadow-header bg-brand-parchment/85">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 relative flex items-center justify-between">
        {/* Left: brand */}
        <div className="flex items-center justify-start z-10">
          <Link className="flex items-center gap-2.5 group" href="/" title="Tafheem Home">
            <div className="flex items-baseline gap-2">
              <span className="font-headline-sm text-brand-maroon tracking-tight font-bold group-hover:text-brand-maroon-dark transition-colors text-xl">
                Tafheem
              </span>
              <span className="font-arabic-display text-brand-gold font-semibold leading-none text-xl">
                تفهيم
              </span>
            </div>
          </Link>
        </div>

        {/* Center: absolutely centered nav capsule */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <nav className="flex items-center gap-1 p-1 bg-brand-cream border border-brand-gold/50 rounded-full shadow-[0_2px_10px_rgba(219,188,71,0.12)]">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return isActive ? (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current="page"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-maroon text-white font-semibold shadow-sm transition-all text-[12px]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>{item.label}</span>
                </Link>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-on-surface-variant hover:text-brand-maroon hover:bg-brand-gold/15 font-medium transition-colors text-[12px]"
                >
                  {item.icon && <Icon name={item.icon} className="text-[17px] text-brand-gold" />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: notifications + profile */}
        <div className="flex items-center justify-end gap-3 z-10">
          <button
            type="button"
            aria-label="Notifications"
            title="Notifications"
            className="w-9 h-9 rounded-full flex items-center justify-center text-brand-maroon hover:bg-brand-gold/15 border border-transparent hover:border-brand-gold/40 transition-all cursor-pointer relative"
          >
            <Icon name="notifications" className="text-[20px]" />
            {hasUnread && (
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brand-gold ring-2 ring-brand-cream" />
            )}
          </button>
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
