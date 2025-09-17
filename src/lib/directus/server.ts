// src/lib/directus/server.ts
export const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL!;
const SERVER_TOKEN = process.env.DIRECTUS_TOKEN ?? null;

export function getAssetURL(
  id?: string | null,
  qs?: Record<string, string | number>
) {
  if (!id) return "";
  const u = new URL(`${DIRECTUS_URL}/assets/${id}`);
  Object.entries(qs ?? {}).forEach(([k, v]) => u.searchParams.set(k, String(v)));
  return u.toString();
}
export async function dxGet<T>(path: string, params?: Record<string, string>, revalidateSeconds = 60): Promise<T> {
  const url = new URL(`${DIRECTUS_URL}${path}`);
  Object.entries(params ?? {}).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString(), {
    headers: SERVER_TOKEN ? { Authorization: `Bearer ${SERVER_TOKEN}` } : undefined,
    next: { revalidate: revalidateSeconds },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url.pathname}`);
  return res.json() as Promise<T>;
}
