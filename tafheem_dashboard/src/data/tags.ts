export const TAGS = {
  guidance: 'Topic: Guidance & Mercy',
  supplication: 'Topic: Supplication',
  gratitude: 'Topic: Gratitude',
  faith: 'Topic: Faith & Clarity',
  closeness: 'Topic: Divine Closeness',
  companionship: 'Topic: Companionship',
} as const;

export type TagId = keyof typeof TAGS;

export const getTagLabel = (id: TagId) => TAGS[id];
