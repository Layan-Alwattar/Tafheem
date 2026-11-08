import { Reflection, TabKey } from '@/types';
import { REFLECTIONS, SAVED_VERSES, USER, USERS } from './content';

export const getUser = (id: string) => USERS.find((u) => u.id === id);

const newestFirst = (a: Reflection, b: Reflection) => b.updatedAt.localeCompare(a.updatedAt);

/** The signed-in user's own unpublished reflections. */
export const myPrivate = REFLECTIONS.filter((r) => r.authorId === USER.id && !r.isPublic).sort(newestFirst);

/** The signed-in user's own published reflections. */
export const myPublic = REFLECTIONS.filter((r) => r.authorId === USER.id && r.isPublic).sort(newestFirst);

/** Other people's reflections the user bookmarked. */
export const saved = USER.savedReflectionIds
  .map((id) => REFLECTIONS.find((r) => r.id === id))
  .filter((r): r is Reflection => r !== undefined);

export const TAB_COUNTS: Record<TabKey, number> = {
  private: myPrivate.length,
  public: myPublic.length,
  bookmarks: saved.length + SAVED_VERSES.length,
};
