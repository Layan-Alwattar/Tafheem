import { useState, type ChangeEvent, type FormEvent } from "react";
import type { WaitlistPayload } from "../types";
import Icon from "./Icon";

interface WaitlistFormProps {
  /** Wire this up to your backend / email provider */
  onSubmit?: (payload: WaitlistPayload) => void | Promise<void>;
}

const INPUT_CLASS =
  "w-full px-4 py-3 bg-surface-container-low border border-outline-variant/60 rounded text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all";
const LABEL_CLASS =
  "block text-xs font-sans font-medium text-on-surface-variant uppercase tracking-wider mb-1.5";

export default function WaitlistForm({ onSubmit }: WaitlistFormProps) {
  const [values, setValues] = useState<WaitlistPayload>({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!onSubmit) {
      console.error("Waitlist submission handler is not configured.");
      return;
    }

    setStatus("submitting");

    try {
      await onSubmit(values);
      setStatus("done");
    } catch (error) {
      console.error("Waitlist submission failed:", error);
      setStatus("idle");
    }
  };

  return (
    <div className="lg:col-span-6 bg-surface-container-lowest p-6 sm:p-8 rounded-lg border border-outline-variant/50 shadow-sm">
      <h3 className="font-display text-xl text-primary font-semibold mb-2">
        Reserve your spot
      </h3>
      <p className="font-serif text-xs text-on-surface-variant mb-6">
        Receive early invite code before the public launch.
      </p>

      {status === "done" ? (
        <p role="status" className="font-serif text-sm text-primary">
          Thank you, {values.name || "friend"}. We’ll send your invitation to{" "}
          {values.email}.
        </p>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className={LABEL_CLASS} htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={values.name}
              onChange={handleChange}
              placeholder="e.g. Maryam or Tariq"
              className={INPUT_CLASS}
            />
          </div>
          <div>
            <label className={LABEL_CLASS} htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={values.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={INPUT_CLASS}
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full mt-2 py-3.5 bg-primary text-on-primary hover:bg-primary-container disabled:opacity-60 font-sans font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <span>Request Invitation</span>
            <Icon name="mail" className="text-sm" />
          </button>
          <p className="text-[11px] font-sans text-center text-outline pt-2">
            Respectful of your inbox. Zero promotional noise.
          </p>
        </form>
      )}
    </div>
  );
}
