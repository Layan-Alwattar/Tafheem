import { getSurah } from '@/data/surahs';

/** e.g. formatVerseRef(50, 16) → "Surah Qāf · 50:16" */
export function formatVerseRef(surah: number, ayah: number) {
  const s = getSurah(surah);
  return `Surah ${s ? s.name : surah} · ${surah}:${ayah}`;
}
