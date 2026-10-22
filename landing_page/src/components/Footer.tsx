import { FOOTER_LINKS } from "../data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/40 bg-surface-container-low py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <span className="font-arabic text-2xl text-primary font-medium">تفهيم</span>
            <span className="text-gold" aria-hidden="true">
              ✦
            </span>
            <span className="font-display italic text-lg text-primary font-semibold">
              Tafheem
            </span>
          </div>
          <p className="text-xs font-serif text-on-surface-variant text-center md:text-left">
            More than recitation. True connection with the words of Allah.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-6 text-xs font-sans text-outline"
        >
          {FOOTER_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-[11px] font-sans text-outline text-center md:text-right">
          © 2026 Tafheem. All rights reserved.
          <br />
          <span className="text-secondary">Made for seekers everywhere.</span>
        </div>
      </div>
    </footer>
  );
}
