import type { RootInsight } from "../types";
import Icon from "./Icon";

interface RootInsightCardProps {
  insight: RootInsight;
}

export default function RootInsightCard({ insight }: RootInsightCardProps) {
  return (
    <div className="lg:col-span-5 bg-surface-container-low p-6 rounded border border-outline-variant/40 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-sans font-bold uppercase tracking-wider text-secondary">
            Root Insight
          </span>
          <span className="px-2 py-0.5 bg-background rounded text-[11px] font-sans text-outline font-medium">
            {insight.root}
          </span>
        </div>

        <div className="flex items-baseline gap-3 mb-3">
          <span className="font-arabic text-3xl text-primary font-bold">{insight.arabic}</span>
          <span className="text-xs font-sans text-secondary font-medium">{insight.gloss}</span>
        </div>

        <p className="text-sm font-serif leading-relaxed text-on-surface-variant">
          Derived from contraction, tightness, or pressure. In this verse,{" "}
          <span className="italic text-primary font-medium">Al-‘Usr</span> arrives with the
          definite article (<span className="font-arabic font-semibold">ال</span>)—meaning it is
          specific, measured, and temporary.
        </p>

        <div className="mt-4 p-3 bg-surface-container rounded text-xs font-sans text-on-surface/80 flex items-start gap-2 border-l-2 border-gold">
          <Icon name="lightbulb" className="text-sm text-gold-dark mt-0.5 shrink-0" />
          <span>
            Notice the particle <strong className="text-primary">“مع” (with)</strong>: Relief
            doesn’t just trail behind difficulty; it is woven directly into it simultaneously.
          </span>
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs font-sans text-outline">
        <span>Appears {insight.occurrences} times in the Qur’an</span>
        <button type="button" className="text-primary font-medium hover:underline">
          Explore root occurrences →
        </button>
      </div>
    </div>
  );
}
