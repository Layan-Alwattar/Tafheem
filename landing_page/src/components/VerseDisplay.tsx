import type { VerseWord } from "../types";

interface VerseDisplayProps {
  words: VerseWord[];
  translation: string;
  activeWordId: string | null;
  onSelectWord: (id: string) => void;
}

export default function VerseDisplay({
  words,
  translation,
  activeWordId,
  onSelectWord,
}: VerseDisplayProps) {
  return (
    <div className="py-10 text-center">
      <div
        dir="rtl"
        lang="ar"
        className="font-arabic text-4xl sm:text-5xl md:text-6xl text-primary leading-[2.1] tracking-wide inline-block"
      >
        {words.map((word) => {
          const isActive = word.id === activeWordId;
          const isSelectable = Boolean(word.insight);

          return (
            <span key={word.id} className="inline-block relative group mx-1">
              <button
                type="button"
                onClick={() => isSelectable && onSelectWord(word.id)}
                aria-pressed={isSelectable ? isActive : undefined}
                title={isActive && word.insight ? `Selected Root: ${word.insight.root}` : undefined}
                className={
                  isActive
                    ? "bg-gold/25 border-b-2 border-gold text-primary font-semibold px-3 py-1 rounded cursor-pointer shadow-sm"
                    : "text-on-surface hover:text-primary transition-colors cursor-pointer px-2 py-0.5 rounded"
                }
              >
                {word.text}
              </button>
              {isActive && (
                <span className="absolute -top-4 right-1/2 translate-x-1/2 bg-primary text-on-primary text-[10px] font-sans font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  Active
                </span>
              )}
            </span>
          );
        })}
      </div>
      <p className="font-serif italic text-base sm:text-lg text-on-surface-variant/90 mt-5 max-w-xl mx-auto">
        “{translation}”
      </p>
    </div>
  );
}
