import Icon from '@/components/Icon';
import RichText from '@/components/RichText';
import TagBadge from '@/components/TagBadge';
import { USER } from '@/data/content';
import { getTagLabel } from '@/data/tags';
import { getUser } from '@/data/selectors';
import { formatDate } from '@/lib/format';
import { formatVerseRef } from '@/lib/verse';
import { Reflection } from '@/types';

type Variant = 'private' | 'public' | 'other';

function getVariant(r: Reflection): Variant {
  if (r.authorId !== USER.id) return 'other';
  return r.isPublic ? 'public' : 'private';
}

export default function ReflectionCard({ reflection: r }: { reflection: Reflection }) {
  const variant = getVariant(r);
  const author = getUser(r.authorId);

  const meta =
    variant === 'private'
      ? `Edited ${formatDate(r.updatedAt)}`
      : `Published ${formatDate(r.publishedAt ?? r.updatedAt)}${r.reads !== undefined ? ` · ${r.reads} Reads` : ''}`;

  return (
    <article className="p-5 rounded-lg bg-brand-cream border border-brand-gold/50 shadow-gold-sm hover:border-brand-gold hover:shadow-gold-hover transition-all space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 flex-wrap">
          {variant === 'private' ? (
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
          ) : (
            <span className="px-2 py-0.5 rounded bg-brand-gold/20 border border-brand-gold text-brand-maroon text-[11px] font-bold">
              {variant === 'public' ? 'Published' : 'Reflection'}
            </span>
          )}
          <span className="font-headline-sm text-[13px] text-brand-gold-dark font-bold">{formatVerseRef(r.surah, r.ayah)}</span>
          {variant === 'other' && author && (
            <>
              <span className="text-brand-gold">·</span>
              <span className="text-[12px] text-on-surface-variant">Saved from {author.displayName}</span>
            </>
          )}
        </div>
        <span className="text-[11px] text-outline">{meta}</span>
      </div>

      <div>
        <h3 className="font-headline-sm text-[16px] text-brand-maroon font-bold hover:text-brand-gold-dark transition-colors cursor-pointer">
          {r.title}
        </h3>
        <p className="font-serif-text text-[14px] text-on-surface-variant line-clamp-2 leading-relaxed mt-1">
          <RichText text={r.content} />
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-brand-gold/30">
        <TagBadge label={getTagLabel(r.tagId)} size="sm" />

        <div className="flex items-center gap-2">
          {variant === 'private' && (
            <>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-maroon text-white hover:bg-brand-maroon-dark border border-brand-gold/70 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer shadow-sm"
              >
                <Icon name="edit" className="text-[15px] text-brand-gold" />
                <span>Edit Reflection</span>
              </button>
              <button
                type="button"
                title="Publish to community"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-cream hover:bg-brand-gold/10 border border-brand-gold rounded-lg text-[11px] text-brand-maroon font-semibold transition-colors cursor-pointer"
              >
                <Icon name="share" className="text-[15px] text-brand-gold" />
                <span>Share Publicly</span>
              </button>
              <button
                type="button"
                title="Delete reflection"
                aria-label="Delete reflection"
                className="inline-flex items-center p-1.5 text-on-surface-variant hover:text-error rounded-lg transition-colors cursor-pointer"
              >
                <Icon name="delete" className="text-[16px]" />
              </button>
            </>
          )}

          {variant === 'public' && (
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-maroon text-white rounded-lg text-[11px] font-semibold hover:bg-brand-maroon-dark transition-colors cursor-pointer"
            >
              <Icon name="visibility" className="text-[15px] text-brand-gold" />
              <span>View Public Post</span>
            </button>
          )}

          {variant === 'other' && (
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-1 bg-brand-maroon text-white rounded-lg text-[11px] font-semibold shadow-sm hover:bg-brand-maroon-dark transition-colors cursor-pointer"
            >
              <Icon name="open_in_new" className="text-[15px] text-brand-gold" />
              <span>View Reflection</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
