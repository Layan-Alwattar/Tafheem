"use client";
import React, { useEffect, useState } from "react";
import { VerseContainer } from "./VerseContainer";
import type { AyahWordData } from "./AyahWord";
import type { ReflectionNoteData } from "./ReflectionNote";
import { api, isSignedIn, signOut } from "@/lib/client/api";
import type { QuranVerse, WordTabs } from "@/lib/types";

type SurahWord = WordTabs & { ayah_number: number };

interface VerseProps {
  surah: string;
  surahEnglishName: string;
  surahNumber: number;
  ayahNumber: number;
  translation: string;
  words: AyahWordData[];
}

interface LiveVerseProps {
  /** Shown until (or instead of) live data — also the design preview. */
  sample: VerseProps;
  sampleNote?: ReflectionNoteData;
}

// "عسر" → "ع - س - ر", matching the design's root display.
function formatRoot(root: string | null): string {
  return root ? Array.from(root).join(" - ") : "—";
}

function toAyahWord(w: SurahWord): AyahWordData {
  return {
    id: w.position,
    arabic: w.arabic_text ?? "",
    transliteration: w.transliteration ?? undefined,
    english: w.translation_en ?? "",
    root: formatRoot(w.root),
    rootInsight: w.tabs.mufradat ?? w.tabs.lanes ?? w.part_of_speech ?? "",
  };
}

type Status = "signed-out" | "loading" | "live" | "error";

export const LiveVerse: React.FC<LiveVerseProps> = ({ sample, sampleNote }) => {
  const [verse, setVerse] = useState<VerseProps>(sample);
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isSignedIn()) {
      setStatus("signed-out");
      return;
    }

    const { surahNumber, ayahNumber } = sample;
    Promise.all([
      api<QuranVerse>(`/quran/verse/${surahNumber}/${ayahNumber}`),
      api<SurahWord[]>(`/quran/surah/${surahNumber}/words`),
    ])
      .then(([v, surahWords]) => {
        const words = surahWords
          .filter((w) => w.ayah_number === ayahNumber && w.arabic_text)
          .map(toAyahWord);
        setVerse({
          ...sample,
          translation: v.translation_en ?? sample.translation,
          // Lexicon not seeded yet → keep the sample words so the UI still works.
          words: words.length > 0 ? words : sample.words,
        });
        setStatus("live");
      })
      .catch((err: Error) => {
        setError(err.message);
        setStatus(isSignedIn() ? "error" : "signed-out");
      });
  }, [sample]);

  function handleSignOut() {
    api("/auth/logout", { method: "POST" }).catch(() => undefined);
    signOut();
    setVerse(sample);
    setStatus("signed-out");
  }

  const signedIn = status === "live" || status === "error";

  return (
    <div className="w-full max-w-5xl mx-auto mb-6 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-[#514347] bg-white/80 px-4 py-2 rounded-lg border border-[#d6c1c6]/50">
        {status === "loading" && <span>Loading verse…</span>}
        {status === "signed-out" && (
          <>
            <span>Preview with sample data. Sign in to load the live verse and save reflections.</span>
            <span className="flex gap-3">
              <a href="/signin" className="font-semibold text-[#551d35] hover:underline">
                Sign in →
              </a>
              <a href="/signup" className="font-semibold text-[#551d35] hover:underline">
                Create account
              </a>
            </span>
          </>
        )}
        {status === "live" && <span>Live data from Tafheem</span>}
        {status === "error" && <span className="text-[#b94a48]">Couldn&apos;t load the verse: {error}</span>}
        {signedIn && (
          <button onClick={handleSignOut} className="font-semibold text-[#551d35] hover:underline">
            Sign out
          </button>
        )}
      </div>

      {/* Remount when the data source changes so the selected word resets. */}
      <VerseContainer
        key={status}
        {...verse}
        reflectionNote={signedIn ? undefined : sampleNote}
        signedIn={signedIn}
      />
    </div>
  );
};
