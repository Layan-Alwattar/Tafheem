import { Reflection, SavedVerse, SortKey, User } from '@/types';

/* ---------- Users ---------- */

export const USERS: User[] = [
  {
    id: 'u1',
    displayName: 'Zayd E.',
    email: 'zayd@tafheem.io',
    notifications: [
      {
        id: 'n1',
        message: 'Someone reacted to your reflection',
        createdAt: '2026-11-05T10:00:00Z',
        read: false,
      },
    ],
    savedReflectionIds: ['r5'],
  },
  {
    id: 'u2',
    displayName: 'Dr. Tariq Ramadan',
    email: 'tariq@example.com',
    notifications: [],
    savedReflectionIds: [],
  },
];

/** The signed-in user (mock). */
export const USER: User = USERS[0];

/* ---------- Reflections: one dataset for everyone ---------- */

export const REFLECTIONS: Reflection[] = [
  {
    id: 'r1',
    authorId: 'u1',
    surah: 1,
    ayah: 2,
    title: 'The Distinction between Al-Hamd and Ash-Shukr',
    content:
      'Reflecting on why the Qur’an opens with الْحَمْدُ rather than الشُّكْرُ. Al-hamd conveys gratitude and praise regardless of circumstance, expressing unconditional adoration and awe for the Divine.',
    tagId: 'gratitude',
    updatedAt: '2026-11-07T08:00:00Z',
    isPublic: false,
  },
  {
    id: 'r2',
    authorId: 'u1',
    surah: 24,
    ayah: 35,
    title: 'Nūr ‘alā Nūr: The Purity of the Heart and Revelation',
    content:
      'An exploration of the phrase يَكَادُ زَيْتُهَا يُضِيءُ — how an open, sincere heart is naturally predisposed to recognize divine truth, awaiting the spark of revelation to shine fully.',
    tagId: 'faith',
    updatedAt: '2026-11-05T10:00:00Z',
    isPublic: false,
  },
  {
    id: 'r3',
    authorId: 'u1',
    surah: 50,
    ayah: 16,
    title: 'Closer Than the Jugular Vein: Overcoming Fear and Loneliness',
    content:
      'Contemplating the expression حَبْلِ الْوَرِيدِ. How Allah knows our deepest unspoken thoughts, concerns, and fears before we even verbalize them, providing immense solace during quiet moments.',
    tagId: 'closeness',
    updatedAt: '2026-11-03T10:00:00Z',
    isPublic: false,
  },
  {
    id: 'r4',
    authorId: 'u1',
    surah: 18,
    ayah: 28,
    title: 'Surrounding Yourself with Righteous Companions',
    content:
      'A reflection on maintaining patience with those who remember their Lord morning and evening. Community preserves spiritual sincerity.',
    tagId: 'companionship',
    updatedAt: '2026-11-02T10:00:00Z',
    isPublic: true,
    publishedAt: '2026-11-02T10:00:00Z',
    reads: 42,
  },
  {
    id: 'r5',
    authorId: 'u2',
    surah: 2,
    ayah: 186,
    title: 'When My Servants Ask of Me: The Directness of Du’a',
    content:
      'In this verse, unlike other verses where Allah says ‘Tell them (Qul)’, here Allah immediately says ‘I am indeed near’ without any intermediary.',
    tagId: 'supplication',
    updatedAt: '2026-10-28T10:00:00Z',
    isPublic: true,
    publishedAt: '2026-10-28T10:00:00Z',
    reads: 310,
  },
];

/* ---------- Verses (not reflections, so they stay separate) ---------- */

export const SAVED_VERSES: SavedVerse[] = [
  {
    id: 'v1',
    surah: 18,
    ayah: 10,
    savedAt: '2026-11-06T10:00:00Z',
    translation:
      '“Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.”',
    arabic: 'رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',
    tagId: 'guidance',
  },
  {
    id: 'v2',
    surah: 2,
    ayah: 186,
    savedAt: '2026-11-01T10:00:00Z',
    translation: '“And when My servants ask you concerning Me, indeed I am near.”',
    arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ',
    tagId: 'supplication',
  },
];

/* ---------- Page copy & options ---------- */

export const VERSE_OF_THE_DAY = {
  surah: 93,
  ayah: 3,
  translation: '“Your Lord has not forsaken you, nor is He displeased.”',
  arabic: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ',
};

export const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'recent', label: 'Recently Modified' },
  { value: 'ayah', label: 'Ayah Order' },
  { value: 'oldest', label: 'Oldest First' },
];
