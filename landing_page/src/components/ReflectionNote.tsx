import React, { useEffect, useState } from "react";
import { api, type Reflection } from "../api";

export interface ReflectionNoteData {
  initialQuote?: string;
  initialContent: string;
  lastEdited?: string;
  isPrivate?: boolean;
}
interface ReflectionNoteProps {
  note?: ReflectionNoteData;
  surahNumber?: number;
  ayahNumber?: number;
  /** When true, the note is loaded from and saved to the backend. */
  signedIn?: boolean;
}

// The backend stores reflections as sanitized HTML. The opening line is kept
// as a <blockquote>, the body as paragraphs.
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function toHtml(quote: string, content: string): string {
  const paragraphs = content
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${escapeHtml(p).replace(/\n/g, "<br>")}</p>`)
    .join("");
  return (quote.trim() ? `<blockquote>${escapeHtml(quote.trim())}</blockquote>` : "") + paragraphs;
}

function fromHtml(html: string): { quote: string; content: string } {
  const doc = new DOMParser().parseFromString(
    html.replace(/<br\s*\/?>/gi, "\n"),
    "text/html",
  );
  const blockquote = doc.querySelector("blockquote");
  const quote = blockquote?.textContent?.trim() ?? "";
  blockquote?.remove();
  const blocks = Array.from(doc.body.querySelectorAll("p"));
  const content = blocks.length
    ? blocks.map((p) => p.textContent?.trim() ?? "").join("\n\n")
    : doc.body.textContent?.trim() ?? "";
  return { quote, content };
}

function savedLabel(iso: string): string {
  return `Saved ${new Date(iso).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}`;
}

export const ReflectionNote: React.FC<ReflectionNoteProps> = ({
  note,
  surahNumber,
  ayahNumber,
  signedIn = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [quote, setQuote] = useState(note?.initialQuote ?? "");
  const [content, setContent] = useState(note?.initialContent ?? "");
  const [lastEdited, setLastEdited] = useState(note?.lastEdited ?? "");
  const [reflectionId, setReflectionId] = useState<string | null>(null);
  const [isPublished, setIsPublished] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const connected = signedIn && surahNumber !== undefined && ayahNumber !== undefined;

  // Load the user's existing reflection on this ayah, if any.
  useEffect(() => {
    if (!connected) return;
    api<Reflection[]>(`/reflections/mine?surah=${surahNumber}&ayah=${ayahNumber}`)
      .then((mine) => {
        const existing = mine[0];
        if (!existing) {
          setLastEdited("Not saved yet");
          return;
        }
        const parsed = fromHtml(existing.body);
        setQuote(parsed.quote);
        setContent(parsed.content);
        setReflectionId(existing.id);
        setIsPublished(existing.is_published);
        setLastEdited(existing.is_published ? "Shared" : savedLabel(existing.updated_at));
      })
      .catch((err: Error) => setError(err.message));
  }, [connected, surahNumber, ayahNumber]);

  async function save() {
    if (!content.trim()) {
      setError("Write something before saving.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      const body = toHtml(quote, content);
      const saved = reflectionId
        ? await api<Reflection>(`/reflections/${reflectionId}`, { method: "PATCH", body: { body } })
        : await api<Reflection>("/reflections", {
            method: "POST",
            body: { surah_number: surahNumber, ayah_number: ayahNumber, body },
          });
      setReflectionId(saved.id);
      setLastEdited(savedLabel(saved.updated_at));
      setIsEditing(false);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  async function share() {
    if (!reflectionId) {
      setError("Save your note before sharing it.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      await api<Reflection>(`/reflections/${reflectionId}/publish`, { method: "POST" });
      setIsPublished(true);
      setLastEdited("Shared");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  function handleEditToggle() {
    if (isEditing && connected) {
      save();
    } else {
      setIsEditing(!isEditing);
    }
  }

  return (
    <div className="bg-background p-6 rounded-md border border-outline-variant/40 flex flex-col justify-between shadow-sm relative h-full">
      <div>
        {/* Note Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-outline-variant/25">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold inline-block"></span>
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-primary">
              Your Reflection Note
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-sans text-outline">
            <span className="material-symbols-outlined text-xs text-secondary">
              {isPublished ? "public" : "lock"}
            </span>
            <span>{isPublished ? "Shared" : "Private to you"}</span>
          </div>
        </div>

        {/* Note Body: Display mode vs Edit mode */}
        {isEditing ? (
          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-sans font-medium text-outline mb-1">
                Highlighted Thought / Opening Line
              </label>
              <input
                type="text"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="w-full p-2 bg-surface-container-lowest border border-outline-variant/50 rounded font-serif italic text-primary text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-[11px] font-sans font-medium text-outline mb-1">
                Reflection Body
              </label>
              <textarea
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 bg-surface-container-lowest border border-outline-variant/50 rounded font-serif text-on-surface text-sm focus:outline-none focus:border-gold"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-3 font-serif text-[15px] leading-relaxed text-on-surface">
            {quote && (
              <p className="italic text-primary/90 font-medium">{quote}</p>
            )}
            {content ? (
              <p className="text-on-surface-variant text-[15px] whitespace-pre-line">{content}</p>
            ) : (
              <p className="text-outline text-sm italic">
                No reflection yet. Tap “Edit Note” to write one.
              </p>
            )}
          </div>
        )}

        {error && (
          <p className="mt-3 text-xs font-sans text-[#b94a48]">{error}</p>
        )}
      </div>

      {/* Note Action Footer */}
      <div className="mt-6 pt-3 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-sans text-outline">
          <button
            onClick={handleEditToggle}
            disabled={busy || isPublished}
            title={isPublished ? "Shared reflections can't be edited" : undefined}
            className="flex items-center gap-1 font-medium text-on-surface-variant hover:text-primary transition-colors disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-sm">
              {isEditing ? "check" : "edit_note"}
            </span>
            <span>{isEditing ? (busy ? "Saving..." : "Save Note") : "Edit Note"}</span>
          </button>
          <span>·</span>
          <span>{lastEdited}</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs font-sans font-medium rounded text-on-surface-variant hover:bg-surface-container transition-colors">
            {isPublished ? "Shared with the community" : "Kept in private notes"}
          </button>
          <button
            onClick={connected ? share : undefined}
            disabled={busy || isPublished}
            className="px-3.5 py-1.5 bg-secondary-container/70 hover:bg-secondary-container text-secondary text-xs font-sans font-semibold rounded transition-colors flex items-center gap-1.5 shadow-sm disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-xs">share</span>
            <span>Share anonymously</span>
          </button>
        </div>
      </div>
    </div>
  );
};
