import type { ReactNode } from "react";
import type { PillarData } from "../types";
import Icon from "./Icon";

interface PillarProps {
  pillar: PillarData;
  visual: ReactNode;
  /** Visual on the left (desktop) and first in DOM order */
  visualFirst?: boolean;
}

export default function Pillar({ pillar, visual, visualFirst = false }: PillarProps) {
  const textBlock = (
    <div className={`md:col-span-5 ${visualFirst ? "" : "order-2 md:order-1"}`}>
      <span className="font-display text-3xl text-gold-dark/60 font-bold block mb-1">
        {pillar.number}
      </span>
      <h3 className="font-display text-2xl sm:text-3xl text-primary font-semibold mb-3">
        {pillar.title}
      </h3>
      <p className="font-serif text-base text-on-surface-variant leading-relaxed mb-4">
        {pillar.description}
      </p>
      <ul className="font-sans text-xs sm:text-sm space-y-2 text-outline">
        {pillar.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-2">
            <Icon name="check_circle" className="text-gold-dark text-base" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const visualBlock = (
    <div
      className={`md:col-span-7 bg-surface-container-low p-6 rounded-md border border-gold/20 ${
        visualFirst ? "" : "order-1 md:order-2"
      }`}
    >
      {visual}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-6 sm:p-10">
      {visualFirst ? (
        <>
          {visualBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {visualBlock}
        </>
      )}
    </div>
  );
}
