import type { TagId } from '@/data/tags';

export type TabKey = 'private' | 'public' | 'bookmarks';
export type BookmarkView = 'verses' | 'reflections';
export type SortKey = 'recent' | 'ayah' | 'oldest';

export interface Filters {
  surah: string; // surah number as a string, '' = all
  tag: string; // TagId, '' = all
  sort: SortKey;
}

export interface Notification {
  id: string;
  message: string;
  createdAt: string; // ISO date
  read: boolean;
}

export interface User {
  id: string;
  displayName: string;
  email: string;
  notifications: Notification[];
  /** Ids of other people's reflections this user has bookmarked. */
  savedReflectionIds: string[];
}

export interface Reflection {
  id: string;
  authorId: string; // points at User.id; ownership is stored here only
  surah: number; // 1–114
  ayah: number; // verse number within the surah
  title: string;
  content: string;
  tagId: TagId;
  updatedAt: string; // ISO date of last edit
  isPublic: boolean;
  publishedAt?: string; // ISO date, set once first published
  reads?: number; // only meaningful when public
}

export interface SavedVerse {
  id: string;
  surah: number;
  ayah: number;
  savedAt: string; // ISO date
  translation: string;
  arabic: string;
  tagId: TagId;
}
