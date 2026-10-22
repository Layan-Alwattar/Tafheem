import React, { useState } from "react";

export interface ReflectionNoteData {
  initialQuote?: string;
  initialContent: string;
  lastEdited?: string;
  isPrivate?: boolean;
}
interface ReflectionNoteProps {
  note?: ReflectionNoteData;
}

export const ReflectionNote: React.FC<ReflectionNoteProps> = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [quote, setQuote] = useState(note?.initialQuote ?? "");
  const [content, setContent] = useState(note?.initialContent ?? "");

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
              lock
            </span>
            <span>Private to you</span>
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
            <p className="text-on-surface-variant text-[15px]">{content}</p>
          </div>
        )}
      </div>

      {/* Note Action Footer */}
      <div className="mt-6 pt-3 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-sans text-outline">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-1 font-medium text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              {isEditing ? "check" : "edit_note"}
            </span>
            <span>{isEditing ? "Save Note" : "Edit Note"}</span>
          </button>
          <span>·</span>
          <span>{note?.lastEdited ?? ""}</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs font-sans font-medium rounded text-on-surface-variant hover:bg-surface-container transition-colors">
            Kept in private notes
          </button>
          <button className="px-3.5 py-1.5 bg-secondary-container/70 hover:bg-secondary-container text-secondary text-xs font-sans font-semibold rounded transition-colors flex items-center gap-1.5 shadow-sm">
            <span className="material-symbols-outlined text-xs">share</span>
            <span>Share anonymously</span>
          </button>
        </div>
      </div>
    </div>
  );
};
