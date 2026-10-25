// Small client for the Tafheem platform API (proxied at /api, see next.config.ts).

export type ApiResult<T> =
  | { ok: true; data: T; message?: string }
  | { ok: false; error: string; code?: string };

export async function apiPost<T = unknown>(
  path: string,
  body: unknown,
): Promise<ApiResult<T>> {
  let res: Response;
  try {
    res = await fetch(`/api${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    return { ok: false, error: "Can't reach the server. Please try again." };
  }

  const json = await res.json().catch(() => null);
  if (res.ok) return { ok: true, data: json?.data as T, message: json?.message };

  // Validation errors carry per-field messages; show the first one.
  const details = json?.error?.details as Record<string, string[]> | undefined;
  const fieldMessage = details ? Object.values(details).flat()[0] : undefined;
  return {
    ok: false,
    error: fieldMessage ?? json?.error?.message ?? "Something went wrong. Please try again.",
    code: json?.error?.code,
  };
}

// The verse reader is a separate app, so the session is handed over in the URL
// fragment (never sent to any server) and stored there.
export const READER_URL = process.env.NEXT_PUBLIC_READER_URL ?? "http://localhost:3002";
