// Client for the Tafheem platform API. In development, /api is proxied to the
// backend (see "proxy" in package.json), so requests stay same-origin.

const SESSION_KEY = "tafheem_session";

export const SIGNIN_URL =
  process.env.REACT_APP_SIGNIN_URL ?? "http://localhost:3001/signin";

interface Session {
  access_token: string;
  refresh_token: string;
  expires_at: number; // seconds since epoch
}

export class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
  }
}

/**
 * The sign-in app redirects here with the session in the URL fragment.
 * Store it and strip it from the address bar so it isn't bookmarked or shared.
 */
export function captureSessionFromUrl(): void {
  const params = new URLSearchParams(window.location.hash.slice(1));
  const access_token = params.get("access_token");
  const refresh_token = params.get("refresh_token");
  if (!access_token || !refresh_token) return;

  const session: Session = {
    access_token,
    refresh_token,
    expires_at: Number(params.get("expires_at")) || 0,
  };
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    // Storage blocked — the session just won't persist.
  }
  window.history.replaceState(null, "", window.location.pathname + window.location.search);
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

export async function api<T>(
  path: string,
  options: { method?: string; body?: unknown } = {},
): Promise<T> {
  const session = getSession();
  const headers: Record<string, string> = {};
  if (session) headers.Authorization = `Bearer ${session.access_token}`;
  if (options.body !== undefined) headers["Content-Type"] = "application/json";

  const res = await fetch(`/api${path}`, {
    method: options.method ?? "GET",
    headers,
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
  });
  const json = await res.json().catch(() => null);

  if (!res.ok) {
    if (res.status === 401) signOut();
    throw new ApiError(json?.error?.message ?? "Request failed", res.status);
  }
  return json?.data as T;
}

// ---------- Response shapes (mirror platform/lib/types.ts) -------------------

export interface QuranVerse {
  surah_number: number;
  ayah_number: number;
  arabic_text: string;
  translation_en: string | null;
}

export interface SurahWord {
  ayah_number: number;
  position: number;
  arabic_text: string | null;
  transliteration: string | null;
  translation_en: string | null;
  root: string | null;
  part_of_speech: string | null;
  tabs: { morphology: string | null; mufradat: string | null; lanes: string | null };
}

export interface Reflection {
  id: string;
  surah_number: number;
  ayah_number: number;
  body: string;
  is_published: boolean;
  updated_at: string;
}
