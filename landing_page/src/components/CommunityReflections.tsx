import { COMMUNITY_REFLECTIONS } from "../data";
import type { CommunityReflection } from "../types";

function ReflectionCard({ reflection }: { reflection: CommunityReflection }) {
  return (
    <article className="w-[310px] sm:w-[350px] shrink-0 bg-surface-container-lowest p-6 rounded-md border border-outline-variant/40 shadow-sm flex flex-col justify-between hover:shadow-card-lift transition-all">
      <div>
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3 mb-4">
          <span lang="ar" dir="rtl" className="font-arabic text-xl text-primary">
            {reflection.arabic}
          </span>
          <span className="text-xs font-sans text-secondary font-medium">
            {reflection.reference}
          </span>
        </div>
        <p className="font-serif text-[15px] leading-relaxed text-on-surface mb-4">
          {reflection.quote}
        </p>
      </div>
      <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs font-sans text-outline">
        <span className="font-medium text-secondary">{reflection.author}</span>
        <span>{reflection.timeAgo}</span>
      </div>
    </article>
  );
}

export default function CommunityReflections() {
  return (
    <section
      id="reflections-feed"
      className="py-20 bg-surface-container-low border-t border-outline-variant/35"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase font-sans tracking-[0.25em] text-secondary font-bold block mb-2">
              Community Reflections
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-primary font-medium">
              Voices in the margins.
            </h2>
          </div>
          <p className="font-serif text-sm sm:text-base text-on-surface-variant max-w-md mt-3 md:mt-0">
            Real people finding clarity in everyday moments through the words of Allah.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 custom-scrollbar">
          {COMMUNITY_REFLECTIONS.map((r) => (
            <ReflectionCard key={r.id} reflection={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
