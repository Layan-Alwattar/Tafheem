import Icon from "./Icon";

const AVATARS = [
  { letter: "S", className: "bg-primary/20" },
  { letter: "A", className: "bg-gold/40" },
  { letter: "K", className: "bg-secondary-container" },
] as const;

export default function Hero() {
  return (
    <section className="relative pt-16 md:pt-24 pb-20 px-5 md:px-8 overflow-hidden">
      {/* Decorative calligraphic background */}
      <div className="absolute inset-0 calligraphy-bg pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-16 text-primary/5 font-arabic text-[180px] md:text-[260px] select-none pointer-events-none leading-none z-0"
      >
        تَدَبَّرْ
      </div>
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-12 text-primary/5 font-arabic text-[160px] md:text-[240px] select-none pointer-events-none leading-none z-0"
      >
        تَفَكَّرْ
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary-container/40 border border-gold/30 text-secondary text-xs md:text-sm font-sans font-medium mb-6">
          <Icon name="auto_stories" className="text-sm text-gold-dark" />
          <span>Understand what you read · Reflect at your own pace</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-[68px] leading-[1.12] text-primary font-medium tracking-tight mb-6">
          More than recitation.
          <br />
          <span className="italic font-normal text-on-surface-variant/95">True connection.</span>
        </h1>

        <p className="font-serif text-lg sm:text-xl md:text-[22px] text-on-surface-variant/90 leading-relaxed max-w-2xl mx-auto mb-10">
          You don’t need a degree in Arabic grammar to feel the depth of the Qur’an. Unpack
          individual root words in seconds, write your honest thoughts in private, and discover
          what others felt reading the same verse.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#early-access"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-on-primary hover:bg-primary-container font-sans font-semibold rounded text-sm tracking-wider uppercase transition-all duration-200 shadow-parchment hover:shadow-card-lift"
          >
            <span>Join the Waitlist</span>
            <Icon name="east" className="text-base" />
          </a>
          <a
            href="#interactive-preview"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-surface-container-low hover:bg-surface-container text-primary font-sans font-medium rounded text-sm border border-outline-variant/60 transition-colors"
          >
            <Icon name="touch_app" className="text-base text-gold-dark" />
            <span>Try Verse Preview</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-sans text-outline">
          <div className="flex -space-x-1.5">
            {AVATARS.map(({ letter, className }) => (
              <div
                key={letter}
                className={`w-6 h-6 rounded-full ${className} border border-background flex items-center justify-center font-bold text-[10px] text-primary`}
              >
                {letter}
              </div>
            ))}
          </div>
          <span>
            <span className="font-medium text-on-surface-variant">250+ believers</span> already
            waiting for early launch
          </span>
        </div>
      </div>
    </section>
  );
}
