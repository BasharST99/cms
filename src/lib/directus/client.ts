// src/lib/directus/client.ts
export const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL!;
const PUBLIC_TOKEN = process.env.NEXT_PUBLIC_DIRECTUS_TOKEN; // optional, read-only token for public role

export function getAssetURL(id?: string | null, qs?: Record<string, string | number>) {
  if (!id) return "";
  const u = new URL(`${DIRECTUS_URL}/assets/${id}`);
  Object.entries(qs ?? {}).forEach(([k, v]) => u.searchParams.set(k, String(v)));
  return u.toString();
}

type FetchOpts = { cache?: RequestCache | "no-store"; auth?: "public" };

export async function fetchJSON<T>(path: string, params?: Record<string, string>, opts: FetchOpts = {}) {
  const url = new URL(`${DIRECTUS_URL}${path}`);
  Object.entries(params ?? {}).forEach(([k, v]) => url.searchParams.set(k, v));

  const headers: HeadersInit = {};
  if (opts.auth === "public" && PUBLIC_TOKEN) headers.Authorization = `Bearer ${PUBLIC_TOKEN}`;

  const res = await fetch(url.toString(), { headers, cache: opts.cache ?? "no-store" });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url.pathname}`);
  return (await res.json()) as T;
}
