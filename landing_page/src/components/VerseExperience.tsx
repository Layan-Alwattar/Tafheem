import { useState } from "react";
import { VERSE_WORDS } from "../data";
import ReflectionNote from "./ReflectionNote";
import RootInsightCard from "./RootInsightCard";
import VerseDisplay from "./VerseDisplay";
import { VerseContainer } from "./VerseContainer";
import { ashSharh946 } from "./verseData";
import { defaultReflectionNote } from "./reflectionNoteData";

const DEFAULT_ACTIVE_ID = VERSE_WORDS.find((w) => w.insight)?.id ?? null;

export default function VerseExperience() {
  const [activeWordId, setActiveWordId] = useState<string | null>(
    DEFAULT_ACTIVE_ID,
  );
  const activeInsight = VERSE_WORDS.find((w) => w.id === activeWordId)?.insight;

  return (
    <section
      id="interactive-preview"
      className="py-20 md:py-28 px-5 md:px-8 bg-surface-container-low/60 relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-secondary font-bold block mb-2">
            Interactive Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary font-medium tracking-tight mb-4">
            Tap a word. Unlock the heart of the verse.
          </h2>
          <p className="font-serif text-base sm:text-lg text-on-surface-variant">
            See how Tafheem unpacks every word with clear linguistic roots, then
            anchors your heartfelt reflections right beneath it.
          </p>
        </div>

        <VerseContainer
          {...ashSharh946}
          reflectionNote={defaultReflectionNote}
        />
      </div>
    </section>
  );
}
