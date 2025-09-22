export const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const SERVER_TOKEN = process.env.DIRECTUS_TOKEN ?? null;
const PUBLIC_TOKEN = process.env.NEXT_PUBLIC_DIRECTUS_TOKEN ?? null;

if (!DIRECTUS_URL) {
  throw new Error("NEXT_PUBLIC_DIRECTUS_URL is not defined");
}

type AuthMode = "auto" | "server" | "public" | "none";

export type DirectusFetchOptions = {
  params?: Record<string, string>;
  revalidate?: number;
  cache?: RequestCache;
  auth?: AuthMode;
  signal?: AbortSignal;
};

export async function directusFetch<T>(
  path: string,
  { params, revalidate, cache, auth = "auto", signal }: DirectusFetchOptions = {}
): Promise<T> {
  const url = new URL(`${DIRECTUS_URL}${path}`);
  Object.entries(params ?? {}).forEach(([key, value]) =>
    url.searchParams.set(key, value)
  );

  const headers: HeadersInit = {};
  const isServer = typeof window === "undefined";

  let token: string | null = null;
  switch (auth) {
    case "server":
      token = SERVER_TOKEN;
      break;
    case "public":
      token = PUBLIC_TOKEN;
      break;
    case "none":
      token = null;
      break;
    default:
      token = isServer ? SERVER_TOKEN ?? PUBLIC_TOKEN : PUBLIC_TOKEN;
      break;
  }

  if (token) headers.Authorization = `Bearer ${token}`;

  const init: RequestInit & { next?: { revalidate?: number } } = {
    headers,
    signal,
  };

  if (cache) init.cache = cache;
  if (!cache && !isServer) init.cache = "no-store";
  if (isServer && typeof revalidate === "number") {
    init.next = { revalidate };
  }

  const response = await fetch(url.toString(), init);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url.pathname}`);
  }

  return (await response.json()) as T;
}

export function getAssetURL(
  id?: string | null,
  qs?: Record<string, string | number>
) {
  if (!id) return "";
  const url = new URL(`${DIRECTUS_URL}/assets/${id}`);
  Object.entries(qs ?? {}).forEach(([key, value]) =>
    url.searchParams.set(key, String(value))
  );
  return url.toString();
}

export type DirectusListResponse<T> = { data: T[] };
export type DirectusItemResponse<T> = { data: T };
