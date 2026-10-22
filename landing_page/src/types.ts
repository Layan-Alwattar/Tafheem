export interface NavLink {
  label: string;
  href: string;
}

export interface VerseWord {
  id: string;
  text: string;
  /** Word has a root insight and can be selected */
  insight?: RootInsight;
}

export interface RootInsight {
  /** e.g. "ع - س - ر" */
  root: string;
  /** e.g. "عُسْر (al-‘usr)" */
  arabic: string;
  gloss: string;
  occurrences: number;
}

export interface CommunityReflection {
  id: string;
  arabic: string;
  reference: string;
  quote: string;
  author: string;
  timeAgo: string;
}

export interface PillarData {
  number: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface WaitlistPayload {
  name: string;
  email: string;
}

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