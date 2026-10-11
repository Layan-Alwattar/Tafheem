import React, { useState } from "react";
import { AyahWord, type AyahWordData } from "./AyahWord";

interface VerseContainerProps {
  words: AyahWordData[];
  surah: string;
  surahEnglishName: string;
  surahNumber: number;
  ayahNumber: number;
  translation: string;
  initialSelectedId?: number; // 👈 Optional initial position number
}

export const VerseContainer: React.FC<VerseContainerProps> = ({
  words,
  surah,
  surahEnglishName,
  surahNumber,
  ayahNumber,
  translation,
  initialSelectedId,
}) => {
  // Defaults to initialSelectedId, or the first word position (1), or 0
  const [selectedId, setSelectedId] = useState<number>(
    () => initialSelectedId ?? words[0]?.id ?? 1,
  );

  const selectedWord = words.find((word) => word.id === selectedId);

  return (
    <section className="bg-surface-container-lowest border-2 border-gold/30 rounded-lg p-6 sm:p-10 md:p-12 shadow-parchment relative">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-outline-variant/30">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-surface-container rounded font-sans text-xs font-semibold text-primary">
            Surah {surahEnglishName} · {surahNumber}:{ayahNumber}
          </span>
          <span className="text-xs font-sans text-outline hidden sm:inline">
            {surah}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-sans text-secondary font-medium">
          <span className="material-symbols-outlined text-sm text-gold-dark">
            touch_app
          </span>
          <span>Interactive preview: tap highlighted root</span>
        </div>
      </div>

      {/* Verse Word Stream */}
      <div className="py-10 text-center">
        <div
          dir="rtl"
          lang="ar"
          className="inline-flex flex-wrap items-center justify-center gap-1 font-arabic leading-[2.1] tracking-wide text-primary"
        >
          {words.map((word) => (
            <AyahWord
              key={word.id}
              word={word}
              isSelected={selectedId === word.id}
              onSelect={setSelectedId}
            />
          ))}
        </div>

        <p className="font-serif italic text-base sm:text-lg text-on-surface-variant/90 mt-5 max-w-xl mx-auto">
          "{translation}"
        </p>
      </div>

      {/* Root Insight Box */}
      {selectedWord && (
        <div className="pt-6 border-t border-outline-variant/30">
          <div className="max-w-md bg-surface-container-low p-6 rounded border border-outline-variant/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-secondary">
                  Root Insight
                </span>
                <span className="px-2 py-0.5 bg-background rounded text-[11px] font-sans text-outline font-medium">
                  {selectedWord.root}
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-3">
                <span
                  className="font-arabic text-3xl text-primary font-bold"
                  dir="rtl"
                  lang="ar"
                >
                  {selectedWord.arabic}
                </span>
                {selectedWord.transliteration && (
                  <span className="font-serif text-lg text-primary font-bold">
                    ({selectedWord.transliteration})
                  </span>
                )}
                <span className="text-xs font-sans text-secondary font-medium">
                  {selectedWord.english}
                </span>
              </div>

              <p className="text-sm font-serif leading-relaxed text-on-surface-variant mb-4">
                {selectedWord.rootInsight}
              </p>

              {selectedWord.calloutNote && (
                <div className="p-3 bg-surface-container rounded text-xs font-sans text-on-surface/80 flex items-start gap-2 border-l-2 border-gold mb-4">
                  <span className="material-symbols-outlined text-sm text-gold-dark mt-0.5 shrink-0">
                    lightbulb
                  </span>
                  <span>{selectedWord.calloutNote}</span>
                </div>
              )}
            </div>

            <div className="mt-2 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs font-sans text-outline">
              {selectedWord.occurrences !== undefined && (
                <span>
                  Appears {selectedWord.occurrences} times in the Qur'an
                </span>
              )}
              <a
                href="#explore"
                className="text-primary font-medium hover:underline"
              >
                Explore root occurrences →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
