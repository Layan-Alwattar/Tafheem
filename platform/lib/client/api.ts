// Browser-side client for this app's own /api routes, used by the UI pages.
// The session from /api/auth/login is kept in localStorage and sent as a
// Bearer token (what requireAuth expects).

const SESSION_KEY = "tafheem_session";

export interface Session {
  access_token: string;
  refresh_token: string;
  expires_at: number; // seconds since epoch
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string,
  ) {
    super(message);
  }
}

export function saveSession(session: Session): void {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    // Storage blocked — the session just won't persist.
  }
}

function getSession(): Session | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as Session;
    if (session.expires_at && session.expires_at * 1000 < Date.now()) {
      signOut();
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function isSignedIn(): boolean {
  return getSession() !== null;
}

export function signOut(): void {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}

/** Call /api{path}. Resolves to the `data` (or `message`) field; throws ApiError. */
export async function api<T = unknown>(
  path: string,
  options: { method?: string; body?: unknown } = {},
): Promise<T> {
  const session = getSession();
  const headers: Record<string, string> = {};
  if (session) headers.Authorization = `Bearer ${session.access_token}`;
  if (options.body !== undefined) headers["Content-Type"] = "application/json";

  let res: Response;
  try {
    res = await fetch(`/api${path}`, {
      method: options.method ?? "GET",
      headers,
      body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
    });
  } catch {
    throw new ApiError("Can't reach the server. Please try again.", 0);
  }
  const json = await res.json().catch(() => null);

  if (!res.ok) {
    if (res.status === 401 && session) signOut();
    // Validation errors carry per-field messages; surface the first one.
    const details = json?.error?.details as Record<string, string[]> | undefined;
    const fieldMessage = details ? Object.values(details).flat()[0] : undefined;
    throw new ApiError(
      fieldMessage ?? json?.error?.message ?? "Something went wrong. Please try again.",
      res.status,
      json?.error?.code,
    );
  }
  return (json?.data ?? json?.message) as T;
}
