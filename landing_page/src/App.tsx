import React, { useState, useEffect } from "react";
import { VerseContainer } from "./components/VerseContainer";
import { ashSharh946 } from "./components/verseData";
// Types & Interfaces

interface Word {
  id: string;
  text: string;
  transliteration: string;
  meaning: string;
  root: string;
  rootDisplay: string;
  shortMeaning: string;
  insightText: string;
  lightbulb: string;
  occurrences: string;
}

interface VerseData {
  id: string;
  surahName: string;
  ayahRef: string;
  translationTitle: string;
  englishTranslation: string;
  words: Word[];
  defaultWordId: string;
  sampleReflection: string;
  sampleQuote: string;
}

const FontLoader: React.FC = () => {
  useEffect(() => {
    const linkFonts = document.createElement("link");
    linkFonts.href =
      "https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700&display=swap";
    linkFonts.rel = "stylesheet";
    document.head.appendChild(linkFonts);

    const linkIcons = document.createElement("link");
    linkIcons.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
    linkIcons.rel = "stylesheet";
    document.head.appendChild(linkIcons);
  }, []);

  return null;
};
const trialData = {
  id: "w3",
  arabic: "يُسْرًا",
  transliteration: "yusran",
  english: "ease / relief",
  root: "ي - س - ر",
  rootInsight:
    "Derived from fluency, smoothness, and adaptability. In this verse, 'yusran' arrives indefinite (without 'al-') and repeated, signaling that with every single difficulty comes unlimited, manifold forms of ease.",
  occurrences: 44,
};

const VERSES_DATA: VerseData[] = [
  {
    id: "94:6",
    surahName: "Surah Ash-Sharh",
    ayahRef: "94:6",
    translationTitle: "The Relief (العسر واليسر)",
    englishTranslation: '"For truly, with hardship comes ease."',
    words: [
      {
        id: "word-1",
        text: "فَإِنَّ",
        transliteration: "Fa'inna",
        meaning: "For indeed",
        root: "إ - ن - ن",
        rootDisplay: "فَإِنَّ (fa-inna)",
        shortMeaning: "Emphasis / Particle",
        insightText:
          'Emphatic particle reinforcing certainty. "Fa" acts as a connective sequence, assuring the reader that what follows is guaranteed and undeniable.',
        lightbulb:
          'Notice how "Fa" connects cause to reassurance without delay—certainty is offered immediately to steady the heart.',
        occurrences: "Appears frequently across Quranic discourse",
      },
      {
        id: "word-2",
        text: "مَعَ",
        transliteration: "Ma'a",
        meaning: "With",
        root: "م - ع - ي",
        rootDisplay: "مَعَ (ma‘a)",
        shortMeaning: "Simultaneity / Togetherness",
        insightText:
          'A preposition denoting togetherness and co-presence. Unlike "ba\'d" (after), "ma\'a" means happening at the exact same moment.',
        lightbulb:
          'Notice the particle "مع" (with): Relief doesn\'t just trail behind difficulty; it is woven directly into it simultaneously.',
        occurrences: "Appears 162 times in the Qur'an",
      },
      {
        id: "word-3",
        text: "الْعُسْرِ",
        transliteration: "Al-'Usr",
        meaning: "Hardship / Difficulty",
        root: "ع - س - ر",
        rootDisplay: "عُسْر (al-‘usr)",
        shortMeaning: "Difficulty / Constraint",
        insightText:
          "Derived from contraction, tightness, or pressure. In this verse, Al-‘Usr arrives with the definite article (ال)—meaning it is specific, measured, and temporary.",
        lightbulb:
          'Because "Al-\'Usr" has the definite article (ال), it refers to one single, bounded struggle, whereas "Yusra" is indefinite and boundless.',
        occurrences: "Appears 12 times in the Qur'an",
      },
      {
        id: "word-4",
        text: "يُسْرًا",
        transliteration: "Yusra",
        meaning: "Ease",
        root: "ي - س - ر",
        rootDisplay: "يُسْر (yusr)",
        shortMeaning: "Ease / Smoothness",
        insightText:
          'Root relates to facility, abundance, and smooth motion without friction. Without the definite article, "Yusra" represents an indefinite, overflowing variety of relief.',
        lightbulb:
          'Classical commentators note: "One difficulty (Al-\'Usr) cannot overcome double ease (Yusra)." Multiple avenues of relief surround every single trial.',
        occurrences: "Appears 36 times in the Qur'an",
      },
    ],
    defaultWordId: "word-3",
    sampleReflection:
      'Looking at the root today, it hit me that Allah placed "with" rather than "after". Even on the heaviest days this month, the small blessings—my child\'s smile, a moment of quiet prayer—were right there beside the weight. I am not waiting for life to get easy to find God; He is carrying the ease right now.',
    sampleQuote:
      '"I used to read this thinking the ease only starts when the struggle ends completely..."',
  },
  {
    id: "93:3",
    surahName: "Surah Ad-Duha",
    ayahRef: "93:3",
    translationTitle: "The Morning Hours (الضحى)",
    englishTranslation:
      '"Your Lord has not taken leave of you, nor has He detested you."',
    words: [
      {
        id: "duha-1",
        text: "مَا",
        transliteration: "Ma",
        meaning: "Not",
        root: "م - ا",
        rootDisplay: "مَا (mā)",
        shortMeaning: "Absolute Negation",
        insightText:
          "Strong negation particle used here to definitively refute any feelings of abandonment or distance.",
        lightbulb:
          "Directly addresses silent fears of being forsaken during quiet or unproductive periods of life.",
        occurrences: "Appears extensively throughout the Qur'an",
      },
      {
        id: "duha-2",
        text: "وَدَّعَكَ",
        transliteration: "Wadda'aka",
        meaning: "Forsaken / Left you",
        root: "و - د - ع",
        rootDisplay: "وَدَّعَ (wadda‘a)",
        shortMeaning: "Bidding Farewell / Abandoning",
        insightText:
          "Root implies leaving something behind permanently or saying farewell. Allah reassures that He has never turned His back or said goodbye.",
        lightbulb:
          "This surah was revealed after a long period of silence (interruption of revelation). The word assures us that silence from Heaven is never abandonment.",
        occurrences: "Appears 3 times in the Qur'an",
      },
      {
        id: "duha-3",
        text: "رَبُّكَ",
        transliteration: "Rabbuka",
        meaning: "Your Lord",
        root: "ر - ب - ب",
        rootDisplay: "رَبّ (Rabb)",
        shortMeaning: "Nurturer / Sustainer",
        insightText:
          "Root R-B-B conveys gradual nurturing, caretaking, and sustained growth from inception to perfection, tailored specifically for you ('ka').",
        lightbulb:
          "Notice the tender suffix '-ka' (Your). He is not just the Lord of the cosmos, but specifically *your* personal Guardian and Educator.",
        occurrences: "Appears 970+ times in the Qur'an",
      },
      {
        id: "duha-4",
        text: "وَمَا",
        transliteration: "Wa-ma",
        meaning: "And not",
        root: "و - م - ا",
        rootDisplay: "وَمَا (wa-mā)",
        shortMeaning: "Conjunction + Negation",
        insightText:
          "Reinforces the total rejection of any negative assumptions about Divine love.",
        lightbulb: "Piles reassurance upon reassurance.",
        occurrences: "Appears frequently",
      },
      {
        id: "duha-5",
        text: "قَلَىٰ",
        transliteration: "Qala",
        meaning: "Detested / Disliked",
        root: "ق - ل - ي",
        rootDisplay: "قَلَى (qalā)",
        shortMeaning: "Dislike / Burning Hatred",
        insightText:
          "Connotes deep resentment or harsh rejection. The verse denies this completely and emphatically.",
        lightbulb:
          "Notice Allah omits the word 'you' after 'qala' out of tenderness—He doesn't even link the concept of displeasure directly with your name.",
        occurrences: "Appears 2 times in the Qur'an",
      },
    ],
    defaultWordId: "duha-3",
    sampleReflection:
      "When life feels stagnant or when my heart feels dry, I start suspecting I did something to be pushed away. Re-reading the root 'Rabb' (the one who nurtures step-by-step) reminds me that pruning isn't destruction. Silence is just a quiet room in His care.",
    sampleQuote:
      '"This verse always finds me when I feel cut off or emotionally burnout..."',
  },
  {
    id: "50:16",
    surahName: "Surah Qaf",
    ayahRef: "50:16",
    translationTitle: "The Letter Qaf (ق)",
    englishTranslation: '"And We are closer to him than his jugular vein."',
    words: [
      {
        id: "qaf-1",
        text: "وَنَحْنُ",
        transliteration: "Wa-nahnu",
        meaning: "And We",
        root: "ن - ح - ن",
        rootDisplay: "نَحْنُ (nahnu)",
        shortMeaning: "Royal First Person Plural",
        insightText:
          "Majestic divine pronoun indicating total authority, omniscience, and loving attention.",
        lightbulb:
          "The Creator Himself steps forward in first person to state His direct involvement in human life.",
        occurrences: "Appears 86 times in the Qur'an",
      },
      {
        id: "qaf-2",
        text: "أَقْرَبُ",
        transliteration: "Aqrabu",
        meaning: "Closer / Nearest",
        root: "ق - ر - ب",
        rootDisplay: "قَرِيب (qarīb)",
        shortMeaning: "Nearness / Proximity",
        insightText:
          "Comparative form of nearness. Denotes intimacy without physical barriers or delays in communication.",
        lightbulb:
          "You never have to shout or search far away; closeness is already the baseline reality.",
        occurrences: "Appears 94 times in the Qur'an",
      },
      {
        id: "qaf-3",
        text: "إِلَيْهِ",
        transliteration: "Ilayhi",
        meaning: "To him",
        root: "إ - ل - ى",
        rootDisplay: "إِلَى (ilā)",
        shortMeaning: "Direction / Target",
        insightText:
          "Directs Divine nearness personally to every individual human soul.",
        lightbulb: "A targeted promise for each reader.",
        occurrences: "Appears continuously",
      },
      {
        id: "qaf-4",
        text: "مِنْ",
        transliteration: "Min",
        meaning: "Than",
        root: "م - ن",
        rootDisplay: "مِنْ (min)",
        shortMeaning: "Comparison / Origin",
        insightText: "Sets the benchmark of intimacy.",
        lightbulb: "Exceeding physical anatomy.",
        occurrences: "Common preposition",
      },
      {
        id: "qaf-5",
        text: "حَبْلِ",
        transliteration: "Habli",
        meaning: "Vein / Cord",
        root: "ح - ب - ل",
        rootDisplay: "حَبْل (habl)",
        shortMeaning: "Rope / Lifeline / Conduit",
        insightText:
          "Refers to essential life-sustaining channels within the body.",
        lightbulb: "Symbolizes the very source of physical pulse and breath.",
        occurrences: "Appears 7 times in the Qur'an",
      },
      {
        id: "qaf-6",
        text: "الْوَرِيدِ",
        transliteration: "Al-Warid",
        meaning: "The Jugular / Vital Vein",
        root: "و - ر - د",
        rootDisplay: "وَرِيد (warīd)",
        shortMeaning: "Jugular Vein / Inflow",
        insightText:
          "Root means to arrive or flow into. The jugular vein carries life-giving blood straight to the heart.",
        lightbulb:
          "He knows the unspoken thoughts racing through your mind before your brain even registers them in words.",
        occurrences: "Appears 1 time in the Qur'an in this specific form",
      },
    ],
    defaultWordId: "qaf-2",
    sampleReflection:
      "Realizing He knows my quiet anxiety before I even form the words brought an immediate stillness. I don't need to put on a polished performance in prayer—He already inhabits every corner of my inner life.",
    sampleQuote:
      '"Closer than the pulse in my neck. I stopped overthinking my du\'a after reading this..."',
  },
];

export default function App(): React.JSX.Element {
  const [selectedSurahIndex, setSelectedSurahIndex] = useState<number>(0);
  const currentVerse: VerseData = VERSES_DATA[selectedSurahIndex];

  const [selectedWordId, setSelectedWordId] = useState<string>(
    currentVerse.defaultWordId,
  );

  // Synchronize selected word when active verse changes
  useEffect(() => {
    setSelectedWordId(currentVerse.defaultWordId);
  }, [selectedSurahIndex]);

  // Derive active word state safely
  const activeWord: Word =
    currentVerse.words.find((w) => w.id === selectedWordId) ||
    currentVerse.words[0];

  // Reflection states
  const [reflectionText, setReflectionText] = useState<string>(
    currentVerse.sampleReflection,
  );
  const [isEditingReflection, setIsEditingReflection] =
    useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(true);
  const [shareToast, setShareToast] = useState<boolean>(false);

  // Reset reflection text when surah changes
  useEffect(() => {
    setReflectionText(currentVerse.sampleReflection);
    setIsEditingReflection(false);
    setIsSaved(true);
  }, [selectedSurahIndex]);

  const handleShareClick = (): void => {
    setShareToast(true);
    setTimeout(() => {
      setShareToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#fdf9ec] text-[#1c1c14] font-serif p-4 sm:p-6 md:p-10 flex flex-col items-center justify-center selection:bg-[#fedb99] selection:text-[#551d35]">
      <FontLoader />
      {/* spread operator in verseContainers works because verseDate prop names match the verseContainerProps interface */}
      <VerseContainer {...ashSharh946} />

      {/* Main Container Wrapper */}
      <div className="w-full max-w-5xl mx-auto space-y-6">
        {/* Top Control Header & Surah Switcher Tabs */}
        {}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#d6c1c6]/50 shadow-sm">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-medium text-[#551d35] flex items-center gap-2">
              <span className="font-arabic text-3xl text-[#551d35]">تفهيم</span>
              <span className="text-[#DBBC47]">✦</span>
              <span className="italic font-normal">Verse Preview</span>
            </h1>
            <p className="text-xs font-sans text-[#514347] mt-0.5">
              Select a verse and tap any word to unpack its root & reflection
            </p>
          </div>

          {/* Surah Dropdown Selector */}
          <div className="flex items-center gap-2 bg-[#f7f4e7] p-1.5 rounded-lg border border-[#d6c1c6]">
            <span className="material-symbols-outlined text-sm text-[#735b25] pl-1">
              auto_stories
            </span>
            <select
              value={selectedSurahIndex}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSelectedSurahIndex(Number(e.target.value))
              }
              className="bg-transparent font-sans text-xs md:text-sm font-semibold text-[#551d35] border-none focus:outline-none cursor-pointer pr-2"
            >
              {VERSES_DATA.map((v, idx) => (
                <option key={v.id} value={idx}>
                  {v.surahName} ({v.ayahRef})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* PRIMARY PARCHMENT CARD */}
        {}
        <div className="bg-white border-2 border-[#DBBC47]/40 rounded-xl p-5 sm:p-8 md:p-12 shadow-[0_12px_36px_-8px_rgba(85,29,53,0.08),0_4px_12px_-2px_rgba(85,29,53,0.04)] relative">
          {/* Top Bar Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#d6c1c6]/40">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#f1eee1] rounded font-sans text-xs font-semibold text-[#551d35]">
                {currentVerse.surahName} · {currentVerse.ayahRef}
              </span>
              <span className="text-xs font-sans text-[#847377] hidden sm:inline">
                {currentVerse.translationTitle}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-sans text-[#735b25] font-medium bg-[#fdf9ec] px-3 py-1 rounded-full border border-[#DBBC47]/30">
              <span className="material-symbols-outlined text-sm text-[#9E811F]">
                touch_app
              </span>
              <span>Interactive preview: tap highlighted root</span>
            </div>
          </div>

          {/* Interactive Verse Word-by-Word Component */}
          {}
          <div className="py-10 text-center relative select-none">
            <div
              className="font-arabic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#551d35] leading-[2.2] tracking-wide inline-flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6"
              dir="rtl"
            >
              {currentVerse.words.map((w: Word) => {
                const isActive = w.id === activeWord.id;
                return (
                  <div
                    key={w.id}
                    onClick={() => setSelectedWordId(w.id)}
                    className="relative group cursor-pointer my-1"
                  >
                    {/* Active Floating Tag */}
                    {isActive && (
                      <span className="absolute -top-5 right-1/2 translate-x-1/2 bg-[#551d35] text-[#ffffff] text-[9px] font-sans font-bold px-2 py-0.5 rounded uppercase tracking-wider z-20 shadow-sm transition-all duration-200">
                        ACTIVE
                      </span>
                    )}

                    {/* Word Box */}
                    <span
                      className={`inline-block px-3 py-1.5 rounded transition-all duration-200 ${
                        isActive
                          ? "bg-[#fbeea8] border-b-2 border-[#DBBC47] text-[#551d35] font-bold shadow-sm scale-105"
                          : "text-[#1c1c14] hover:bg-[#f7f4e7] hover:text-[#551d35]"
                      }`}
                    >
                      {w.text}
                    </span>

                    {/* Transliteration preview tooltip */}
                    <span className="absolute -bottom-5 right-1/2 translate-x-1/2 text-[10px] font-sans font-medium text-[#847377] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {w.transliteration}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Verse English Translation */}
            <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#514347]/90 mt-8 max-w-xl mx-auto">
              {currentVerse.englishTranslation}
            </p>
          </div>

          {/* Dual Insight Breakdown Grid */}
          {}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-8 border-t border-[#d6c1c6]/40 items-stretch">
            {/* LEFT SIDE: Root Deep-Dive Card */}
            <div className="lg:col-span-5 bg-[#f7f4e7] p-6 rounded-lg border border-[#d6c1c6]/50 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#735b25]">
                    Root Insight
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#fdf9ec] rounded text-[11px] font-sans text-[#847377] font-semibold border border-[#d6c1c6]/40">
                    {activeWord.root}
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-arabic text-3xl text-[#551d35] font-bold">
                    {activeWord.rootDisplay}
                  </span>
                  <span className="text-xs font-sans text-[#735b25] font-medium">
                    {activeWord.shortMeaning}
                  </span>
                </div>

                <p className="text-sm font-serif leading-relaxed text-[#514347]">
                  {activeWord.insightText}
                </p>

                {/* Callout box */}
                <div className="mt-4 p-3.5 bg-[#f1eee1] rounded text-xs font-sans text-[#1c1c14]/90 flex items-start gap-2.5 border-l-2 border-[#DBBC47]">
                  <span className="material-symbols-outlined text-base text-[#9E811F] shrink-0 mt-0.5">
                    lightbulb
                  </span>
                  <span className="leading-normal">{activeWord.lightbulb}</span>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#d6c1c6]/30 flex items-center justify-between text-xs font-sans text-[#847377]">
                <span>{activeWord.occurrences}</span>
                <button className="text-[#551d35] font-semibold hover:underline cursor-pointer flex items-center gap-0.5">
                  Explore occurrences →
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: Private Reflection Journal */}
            <div className="lg:col-span-7 bg-[#fdf9ec] p-6 rounded-lg border border-[#d6c1c6]/60 flex flex-col justify-between shadow-xs relative">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#d6c1c6]/30">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DBBC47] inline-block animate-pulse"></span>
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#551d35]">
                      Your Reflection Note
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-sans text-[#847377]">
                    <span className="material-symbols-outlined text-xs text-[#735b25]">
                      lock
                    </span>
                    <span>Private to you</span>
                  </div>
                </div>

                <div className="space-y-3 font-serif text-[15px] sm:text-base leading-relaxed text-[#1c1c14]">
                  <p className="italic text-[#551d35]/90 font-medium text-sm sm:text-base">
                    {currentVerse.sampleQuote}
                  </p>

                  {/* Interactive Editor State */}
                  {isEditingReflection ? (
                    <div className="space-y-2">
                      <textarea
                        value={reflectionText}
                        onChange={(
                          e: React.ChangeEvent<HTMLTextAreaElement>,
                        ) => {
                          setReflectionText(e.target.value);
                          setIsSaved(false);
                        }}
                        rows={5}
                        className="w-full p-3 bg-white rounded border border-[#DBBC47]/60 font-serif text-sm text-[#1c1c14] focus:outline-none focus:ring-2 focus:ring-[#551d35]/30 leading-relaxed shadow-inner"
                        placeholder="Write your personal reflection on this verse..."
                      />
                      <div className="flex justify-end">
                        <button
                          onClick={() => {
                            setIsEditingReflection(false);
                            setIsSaved(true);
                          }}
                          className="px-3 py-1 bg-[#551d35] text-white text-xs font-sans font-medium rounded hover:bg-[#70334c] transition-colors"
                        >
                          Save Reflection
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-[#514347] text-sm sm:text-[15px] leading-relaxed">
                      {reflectionText}
                    </p>
                  )}
                </div>
              </div>

              {/* Reflection Card Actions */}
              <div className="mt-6 pt-3 border-t border-[#d6c1c6]/30 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-xs font-sans text-[#847377]">
                  <button
                    onClick={() => setIsEditingReflection(!isEditingReflection)}
                    className="flex items-center gap-1 hover:text-[#551d35] font-medium transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {isEditingReflection ? "visibility" : "edit_note"}
                    </span>
                    <span>
                      {isEditingReflection ? "View Note" : "Edit Note"}
                    </span>
                  </button>
                  <span>·</span>
                  <span className="text-[11px]">
                    {isSaved ? "Saved 2m ago" : "Unsaved changes..."}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsSaved(true)}
                    className={`px-3 py-1.5 text-xs font-sans font-medium rounded transition-colors ${
                      isSaved
                        ? "bg-[#f1eee1] text-[#514347]"
                        : "bg-[#DBBC47] text-[#551d35] font-semibold"
                    }`}
                  >
                    {isSaved ? "Kept in private notes" : "Save Note"}
                  </button>

                  <button
                    onClick={handleShareClick}
                    className="px-3 py-1.5 bg-[#fedb99]/80 hover:bg-[#fedb99] text-[#735b25] text-xs font-sans font-semibold rounded transition-colors flex items-center gap-1 cursor-pointer border border-[#DBBC47]/40"
                  >
                    <span className="material-symbols-outlined text-xs">
                      share
                    </span>
                    <span>Share anonymously</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Share Toast Popup */}
        {shareToast && (
          <div className="fixed bottom-6 right-6 bg-[#551d35] text-[#ffffff] px-4 py-3 rounded-lg shadow-lg font-sans text-xs flex items-center gap-2 animate-bounce z-50">
            <span className="material-symbols-outlined text-sm text-[#DBBC47]">
              check_circle
            </span>
            <span>Verse reflection copied for anonymous sharing!</span>
          </div>
        )}

        <div className="text-center text-xs font-sans text-[#847377] pt-2">
          <span>
            Tafheem Platform · Deep Quranic Connection without distraction
          </span>
        </div>
      </div>
    </div>
  );
}
