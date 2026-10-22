import type { ComponentPropsWithoutRef } from "react";

interface IconProps extends ComponentPropsWithoutRef<"span"> {
  /** Material Symbols ligature name, e.g. "lock" */
  name: string;
}

/** Thin wrapper around Material Symbols Outlined. Decorative by default. */
export default function Icon({ name, className = "", ...rest }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${className}`}
      {...rest}
    >
      {name}
    </span>
  );
}
