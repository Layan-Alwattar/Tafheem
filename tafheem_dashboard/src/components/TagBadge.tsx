interface TagBadgeProps {
  label: string;
  size?: 'sm' | 'md';
}

export default function TagBadge({ label, size = 'md' }: TagBadgeProps) {
  return (
    <span
      className={`whitespace-nowrap px-2.5 py-0.5 rounded-lg bg-brand-gold/15 border border-brand-gold/60 text-brand-maroon font-medium ${
        size === 'sm' ? 'text-[10px]' : 'text-[11px]'
      }`}
    >
      {label}
    </span>
  );
}
