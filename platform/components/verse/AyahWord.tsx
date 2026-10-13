import React from "react";

export interface AyahWordData {
  id: number; // 👈 Updated to number (word position in ayah)
  arabic: string;
  transliteration?: string;
  english: string;
  root: string;
  rootInsight: string;
  calloutNote?: string;
  occurrences?: number;
}

interface AyahWordProps {
  word: AyahWordData;
  isSelected: boolean;
  onSelect: (id: number) => void; // 👈 Accepts number ID
}

export const AyahWord: React.FC<AyahWordProps> = ({
  word,
  isSelected,
  onSelect,
}) => {
  return (
    <span className="inline-block relative group mx-1">
      {/* Active Pill Badge */}
      {isSelected && (
        <span className="absolute -top-3.5 right-1/2 translate-x-1/2 bg-primary text-on-primary text-[9px] font-sans font-bold px-1.5 py-0.5 rounded uppercase tracking-wider select-none z-10 shadow-sm">
          Active
        </span>
      )}

      <button
        onClick={() => onSelect(word.id)}
        className={`font-arabic text-4xl sm:text-5xl md:text-6xl transition-all duration-200 px-3 py-1 rounded cursor-pointer ${
          isSelected
            ? "bg-gold/25 border-b-2 border-gold text-primary font-semibold shadow-sm"
            : "text-on-surface hover:text-primary hover:bg-surface-container/50"
        }`}
        title={`Position: ${word.id} · Root: ${word.root}`}
      >
        {word.arabic}
      </button>
    </span>
  );
};
