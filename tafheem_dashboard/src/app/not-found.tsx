import Link from "next/link";
// Not found page (error 404)
export default function NotFound() {
  return (
    <div className="py-24 text-center space-y-4">
      <p className="text-brand-gold-dark font-semibold text-[11px] tracking-wider uppercase">
        Error 404
      </p>
      <h1 className="font-headline-md text-brand-maroon font-bold text-2xl">
        This page could not be found
      </h1>
      <p className="font-serif-text text-on-surface-variant">
        The page you’re looking for doesn’t exist or hasn’t been built yet.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-4 py-2 bg-brand-maroon text-white border border-brand-gold/80 rounded-lg font-semibold hover:bg-brand-maroon-dark transition-colors text-[12px]"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
