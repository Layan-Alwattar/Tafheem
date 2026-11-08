/**
 * Format an ISO date as e.g. "5 Nov 2026".
 * Fixed to UTC so the server render and the browser always agree (avoids hydration mismatches).
 */
export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
