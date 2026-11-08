// Runs of Arabic letters (and the spaces between Arabic words), captured so split() keeps them.
const ARABIC_RUN = /([\u0600-\u06FF]+(?:\s+[\u0600-\u06FF]+)*)/;

/** Renders plain text, setting any Arabic runs in the Arabic display face. */
export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(ARABIC_RUN).map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} lang="ar" className="font-arabic-display text-[15px] text-brand-maroon font-bold">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
