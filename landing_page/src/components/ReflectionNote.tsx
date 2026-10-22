import React, { useState } from "react";
import Icon from "./Icon";

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

  const handleSave = () => {
    // The current component stores edits in local state.
    // Connect a save callback or backend to persist them.
    setIsEditing(false);
  };

  return (
    <div className="lg:col-span-7 bg-background p-6 rounded border border-outline-variant/50 flex flex-col justify-between shadow-sm relative h-full">
      <div>
        {/* Note Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-outline-variant/25">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold inline-block" />
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-primary">
              Your Reflection Note
            </span>
          </div>

          <span className="text-[11px] font-sans text-outline flex items-center gap-1">
            <Icon name="lock" className="text-xs text-secondary" />
            {note?.isPrivate === false ? "Not private" : "Private to you"}
          </span>
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
                placeholder="Write an opening thought..."
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
                placeholder="Write your reflection..."
                className="w-full p-2 bg-surface-container-lowest border border-outline-variant/50 rounded font-serif text-on-surface text-sm focus:outline-none focus:border-gold"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-3 font-serif text-[15px] sm:text-base leading-relaxed text-on-surface">
            {quote && (
              <p className="italic text-primary/80 font-medium">“{quote}”</p>
            )}

            <p className="text-on-surface-variant text-[15px]">{content}</p>
          </div>
        )}
      </div>

      {/* Note Action Footer */}
      <div className="mt-6 pt-3 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-outline">
          <button
            type="button"
            onClick={() => {
              if (isEditing) {
                handleSave();
              } else {
                setIsEditing(true);
              }
            }}
            className="flex items-center gap-1 font-medium text-on-surface-variant hover:text-primary transition-colors"
          >
            <Icon
              name={isEditing ? "check" : "edit_note"}
              className="text-sm"
            />
            <span>{isEditing ? "Save Note" : "Edit Note"}</span>
          </button>

          {note?.lastEdited && (
            <>
              <span>·</span>
              <span>{note.lastEdited}</span>
            </>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="px-3 py-1 text-xs font-sans font-medium rounded text-on-surface-variant hover:bg-surface-container transition-colors"
          >
            Keep in private notes
          </button>

          <button
            type="button"
            className="px-3 py-1 bg-secondary-container/70 hover:bg-secondary-container text-secondary text-xs font-sans font-semibold rounded transition-colors flex items-center gap-1"
          >
            <Icon name="share" className="text-xs" />
            <span>Share anonymously</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Support both named and default imports.
export default ReflectionNote;
