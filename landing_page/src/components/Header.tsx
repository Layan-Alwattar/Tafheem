import { NAV_LINKS } from "../data";
import Icon from "./Icon";

export default function Header() {
  return (
    <header className="w-full border-b border-outline-variant/40 bg-surface/95 backdrop-blur-md sticky top-0 z-40 transition-all">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        <a className="flex items-center gap-3.5 group" href="#" aria-label="Tafheem home">
          <span className="font-arabic text-3xl md:text-4xl text-primary font-normal leading-none group-hover:text-primary-container transition-colors">
            تفهيم
          </span>
          <div className="h-6 w-[1px] bg-gold/50" />
          <div className="flex flex-col">
            <span className="font-display italic text-xl md:text-2xl text-primary font-bold tracking-tight">
              Tafheem
            </span>
            <span className="text-[10px] font-sans uppercase tracking-widest text-secondary font-semibold -mt-1 hidden sm:block">
              Deep Quranic Connection
            </span>
          </div>
        </a>

        <nav className="flex items-center gap-6 md:gap-8 font-sans text-sm">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-on-surface-variant hover:text-primary transition-colors hidden ${
                i < 2 ? "md:inline-block" : "sm:inline-block"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#early-access"
            className="inline-flex items-center gap-2 bg-primary text-on-primary hover:bg-primary-container px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
          >
            <span>Join Waitlist</span>
            <Icon name="arrow_forward" className="text-sm" />
          </a>
        </nav>
      </div>
    </header>
  );
}
