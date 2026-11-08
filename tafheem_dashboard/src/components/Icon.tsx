interface IconProps {
  name: string;
  className?: string;
}

/** Material Symbols Outlined glyph (font loaded in public/index.html). */
export default function Icon({ name, className = '' }: IconProps) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}
