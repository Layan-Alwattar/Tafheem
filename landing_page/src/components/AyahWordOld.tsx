import React from "react";

interface AyahWordProps {
  word: {
    id: string;
    arabic: string;
    transliteration?: string;
    english: string;
    root: string;
    rootInsight: string;
    occurrences?: number;
  };
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const AyahWord: React.FC<AyahWordProps> = ({
  word,
  isSelected,
  onSelect,
}) => {
  return (
    <span className="inline-block relative group mx-1">
      {isSelected && (
        <span className="absolute -top-4 right-1/2 translate-x-1/2 bg-primary text-on-primary text-[10px] font-sans font-bold px-2 py-0.5 rounded uppercase tracking-wider select-none">
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
        title={`Root: ${word.root}`}
      >
        {word.arabic}
      </button>
    </span>
  );
};
