import { AyahWordData } from "./AyahWord";



export const asharhWords: AyahWordData[] = [
  {
    id: 1,
    arabic: "فَإِنَّ",
    transliteration: "fa-inna",
    english: "For indeed",
    root: "—",
    rootInsight:
      "A connecting particle followed by an emphatic particle, introducing the statement that follows.",
  },
  {
    id: 2,
    arabic: "مَعَ",
    transliteration: "ma'a",
    english: "With",
    root: "—",
    rootInsight:
      "A preposition meaning 'with'. Explore how the wording expresses companionship rather than simply sequence.",
  },
  {
    id: 3,
    arabic: "الْعُسْرِ",
    transliteration: "al-'usr",
    english: "Hardship",
    root: "ع - س - ر",
    rootInsight:
      "Associated with difficulty, constraint, and hardship. The definite article al- appears in this form of the word.",
    occurrences: 12,
  },
  {
    id: 4,
    arabic: "يُسْرًا",
    transliteration: "yusran",
    english: "Ease",
    root: "ي - س - ر",
    rootInsight:
      "Associated with ease, facility, and what is made manageable. It contrasts with al-'usr in the verse.",
  },
];

// 946 for surah number and ayah number
export const ashSharh946 = {
  surah: "الشرح",
  surahEnglishName: "Ash-Sharh",
  surahNumber: 94,
  ayahNumber: 6,
  translation: "For indeed, with hardship comes ease.",
  words: asharhWords
};
