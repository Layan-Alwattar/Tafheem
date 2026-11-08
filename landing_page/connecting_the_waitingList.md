# Connecting the waitlist — 4 steps

The form sends **name + email** to `save.php`, the same script the current coming-soon page uses.
It saves the person to the waitlist, adds them to **Kit**, and sends the **welcome email**.

```
WaitlistForm.tsx → App.tsx (joinWaitlist) → /save.php → MySQL + Kit + welcome email
```

> **Before you start:** Layan uploads the updated `save.php` to Hostinger first.
> Until then, every sign-up will show an error.

---

## Step 1 — Create a new file

Create **`landing_page/src/waitlist.ts`** and paste:

```ts
import type { WaitlistPayload } from "./types";

/** Sends a waitlist signup to save.php. Throws an Error with a readable message on failure. */
export async function joinWaitlist(payload: WaitlistPayload): Promise<void> {
  let res: Response;
  try {
    res = await fetch("/save.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, lang: "en" }),
    });
  } catch {
    throw new Error("Can't reach the server. Please try again.");
  }

  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.ok) {
    throw new Error(data?.message ?? "Something went wrong. Please try again.");
  }
}
```

---

## Step 2 — Edit `landing_page/src/App.tsx`

**1. Delete** this whole function:

```ts
async function joinWaitlist(payload: WaitlistPayload): Promise<void> {
  // TODO: replace with your API call
  console.log("Waitlist signup", payload);
}
```

**2. Replace** this line:

```ts
import type { WaitlistPayload } from "./types";
```

with:

```ts
import { joinWaitlist } from "./waitlist";
```

**3. Leave** `<EarlyAccess onJoinWaitlist={joinWaitlist} />` as it is.

---

## Step 3 — Replace `landing_page/src/components/WaitlistForm.tsx`

Open the file, **select all**, and paste this in its place.
The design is unchanged. It only adds an error message and a "Sending…" state.

```tsx
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { WaitlistPayload } from "../types";
import Icon from "./Icon";

interface WaitlistFormProps {
  /** Sends the signup to the backend (see src/waitlist.ts) */
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
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!onSubmit) {
      console.error("Waitlist submission handler is not configured.");
      return;
    }

    setError(null);
    setStatus("submitting");

    try {
      await onSubmit(values);
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
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

          {error && (
            <p role="alert" className="text-xs font-sans text-[#b94a48]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full mt-2 py-3.5 bg-primary text-on-primary hover:bg-primary-container disabled:opacity-60 font-sans font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <span>{status === "submitting" ? "Sending…" : "Request Invitation"}</span>
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
```

---

## Step 4 — Test it

`npm start` can't run PHP, so for testing the form is sent to the live site.

**1.** In `landing_page/package.json`, change:

```json
"proxy": "http://localhost:3000",
```

to:

```json
"proxy": "https://tafheem.io",
```

**2.** Stop `npm start` (**Ctrl + C**) and run it again. It only reads `package.json` when it starts.

**3.** Fill in the form with **your own email**. It really saves to the list and really sends the welcome email.

| Check | Expected result |
|---|---|
| Real email | "Thank you…" shows, and the welcome email arrives |
| Kit | Your email appears in Kit → Subscribers with the tag `language_english` |
| Email `test@x` | A red **"Please enter a valid email address."** shows |

**4.** When everything works, commit and push.
