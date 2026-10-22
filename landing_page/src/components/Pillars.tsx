import { PILLARS } from "../data";
import Pillar from "./Pillar";
import {
  OthersFeltVisual,
  PrivateJournalVisual,
  WordUnderstandingVisual,
} from "./PillarVisuals";

export default function Pillars() {
  const [wordUnderstanding, journal, others] = PILLARS;

  return (
    <section id="three-pillars" className="py-20 md:py-28 px-5 md:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase font-sans tracking-[0.25em] text-secondary font-bold block mb-2">
          Designed for Reflection
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary font-medium tracking-tight mb-4">
          A calm rhythm for every verse.
        </h2>
        <p className="font-serif text-base sm:text-lg text-on-surface-variant">
          No complex jargon or academic hurdles. Three simple steps that bring the sacred text
          into your daily life.
        </p>
      </div>

      <div className="space-y-12">
        <Pillar pillar={wordUnderstanding} visual={<WordUnderstandingVisual />} />
        <Pillar pillar={journal} visual={<PrivateJournalVisual />} visualFirst />
        <Pillar pillar={others} visual={<OthersFeltVisual />} />
      </div>
    </section>
  );
}
