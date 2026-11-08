interface EmptyStateProps {
  filtersActive: boolean;
  onClear: () => void;
}

export default function EmptyState({ filtersActive, onClear }: EmptyStateProps) {
  return (
    <div className="py-12 text-center space-y-3 rounded-lg border border-dashed border-brand-gold/60 bg-brand-cream">
      <p className="font-headline-sm text-brand-maroon font-bold">
        {filtersActive ? 'Nothing matches these filters' : 'Nothing here yet'}
      </p>
      {filtersActive && (
        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center px-3 py-1 bg-brand-maroon text-white border border-brand-gold/70 rounded-lg text-[12px] font-semibold hover:bg-brand-maroon-dark transition-colors cursor-pointer"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
