import Icon from "./Icon";

export function WordUnderstandingVisual() {
  return (
    <div className="bg-background rounded p-5 border border-outline-variant/30 space-y-3">
      <div className="flex items-center justify-between text-xs font-sans text-secondary border-b border-outline-variant/20 pb-2">
        <span className="font-semibold">Selected Word: رَحْمَة (Rahmah)</span>
        <span>Root: ر - ح - م</span>
      </div>
      <p className="font-serif text-sm text-on-surface">
        Connected to the maternal womb (
        <span className="italic text-primary font-medium">al-rihm</span>): an enveloping,
        nurturing love that protects before the recipient even realizes its presence.
      </p>
    </div>
  );
}

export function PrivateJournalVisual() {
  return (
    <div className="bg-background rounded p-5 border border-outline-variant/30 space-y-3">
      <div className="flex items-center justify-between text-xs font-sans border-b border-outline-variant/20 pb-2">
        <span className="text-primary font-medium flex items-center gap-1.5">
          <Icon name="lock" className="text-xs text-gold" />
          Personal Journal · Only You
        </span>
        <span className="text-outline">Surah Ad-Duha · 93:3</span>
      </div>
      <p className="font-serif italic text-sm text-on-surface-variant">
        “Your Lord has not taken leave of you, nor has He detested you.”
      </p>
      <p className="font-serif text-sm text-on-surface">
        This verse always finds me when I feel cut off. Just putting my feelings down in words
        next to this ayah took the tension out of my chest today.
      </p>
    </div>
  );
}

interface SnippetProps {
  author: string;
  reference: string;
  quote: string;
}

function ReaderSnippet({ author, reference, quote }: SnippetProps) {
  return (
    <div className="bg-background p-4 rounded border border-outline-variant/30 text-xs">
      <div className="flex items-center justify-between text-secondary font-medium mb-1">
        <span>{author}</span>
        <span className="text-outline">{reference}</span>
      </div>
      <p className="font-serif text-sm text-on-surface">{quote}</p>
    </div>
  );
}

export function OthersFeltVisual() {
  return (
    <div className="space-y-3">
      <ReaderSnippet
        author="Amina from Leeds"
        reference="Surah Qaf · 50:16"
        quote="“Realizing He knows my quiet anxiety before I even form the words brought an immediate stillness.”"
      />
      <ReaderSnippet
        author="Bilal from Toronto"
        reference="Surah Al-Alaq · 96:1"
        quote="“The root ‘R-B-B’ means nurturing someone step-by-step. He isn’t rushing my growth.”"
      />
    </div>
  );
}
