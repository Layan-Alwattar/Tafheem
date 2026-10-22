import type { CommunityReflection, NavLink, PillarData, VerseWord } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "The Experience", href: "#interactive-preview" },
  { label: "How It Works", href: "#three-pillars" },
  { label: "Reader Voices", href: "#reflections-feed" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Verse Experience", href: "#interactive-preview" },
  { label: "How It Works", href: "#three-pillars" },
  { label: "Reader Voices", href: "#reflections-feed" },
  { label: "Join Waitlist", href: "#early-access" },
  { label: "Privacy Promise", href: "#" },
];

export const MARQUEE_ITEMS: string[] = [
  "Word-by-word meaning",
  "Completely private reflection journal",
  "Honest reader perspectives",
  "Classical roots made clear",
  "No noise, no feeds, no performance",
];

/** Verse 94:6 — read right-to-left, so array order is the reading order. */
export const VERSE_WORDS: VerseWord[] = [
  { id: "fa-inna", text: "فَإِنَّ" },
  { id: "maa", text: "مَعَ" },
  {
    id: "usr",
    text: "الْعُسْرِ",
    insight: {
      root: "ع - س - ر",
      arabic: "عُسْر (al-‘usr)",
      gloss: "Difficulty / Constraint",
      occurrences: 12,
    },
  },
  { id: "yusra", text: "يُسْرًا" },
];

export const PILLARS: PillarData[] = [
  {
    number: "01",
    title: "Simple Word Understanding",
    description:
      "Unpack the roots and shades of meaning without feeling intimidated. See why a specific word was chosen and how it connects to other verses across the Qur’an.",
    bullets: [
      "Triliteral root breakdowns translated into plain English",
      "Instant cross-verse references for the same word",
    ],
  },
  {
    number: "02",
    title: "Private Personal Journal",
    description:
      "Your thoughts, your doubts, your heartfelt moments with Allah. Everything stays completely private by default until you deliberately choose otherwise.",
    bullets: [
      "Tied directly to the exact ayah you were reading",
      "Zero algorithmic feeds or vanity metrics",
    ],
  },
  {
    number: "03",
    title: "Read What Others Felt",
    description:
      "Discover sincere perspectives from brothers and sisters across the globe. See how a nurse, a parent, or an elder found reassurance in the very verse you are reciting today.",
    bullets: [
      "Humble, thoughtful reflections from real lives",
      "Notice meanings and comforts you hadn’t caught before",
    ],
  },
];

export const COMMUNITY_REFLECTIONS: CommunityReflection[] = [
  {
    id: "mariam",
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    reference: "94:6",
    quote:
      "“The grief of losing my mother felt immovable until I spent 20 minutes with this ayah. Ease isn’t an event on a calendar; it’s an unseen companion walking beside the pain.”",
    author: "Mariam S. · London",
    timeAgo: "4d ago",
  },
  {
    id: "farhan",
    arabic: "وَنَحْنُ أَقْرَبُ إِلَيْهِ",
    reference: "50:16",
    quote:
      "“Closer than the jugular vein. You don’t need an eloquent or polished prayer. When the heart races, He already understands the rhythm of what you cannot say.”",
    author: "Farhan R. · Chicago",
    timeAgo: "1w ago",
  },
  {
    id: "zeyneb",
    arabic: "ٱقْرَأْ بِٱسْمِ رَبِّكَ",
    reference: "96:1",
    quote:
      "“Learning that ‘Rabb’ implies gradual guidance was the antidote to my spiritual burnout. We don’t become masters overnight. He nurtures our slow return.”",
    author: "Zeyneb K. · Istanbul",
    timeAgo: "2w ago",
  },
  {
    id: "tariq",
    arabic: "مَا وَدَّعَكَ رَبُّكَ",
    reference: "93:3",
    quote:
      "“When you feel like your prayers are bouncing off the ceiling, remember this surah came after months of apparent silence. Silence is not abandonment.”",
    author: "Tariq M. · Kuala Lumpur",
    timeAgo: "3w ago",
  },
];
