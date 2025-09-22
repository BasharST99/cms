// src/lib/directus/client.ts
import { directusFetch, getAssetURL, type DirectusFetchOptions } from "./fetcher";

export { DIRECTUS_URL } from "./fetcher";
export { getAssetURL };

type FetchOpts = Pick<DirectusFetchOptions, "cache" | "auth">;

export async function fetchJSON<T>(
  path: string,
  params?: Record<string, string>,
  opts: FetchOpts = {}
) {
  return directusFetch<T>(path, {
    params,
    cache: opts.cache,
    auth: opts.auth ?? "auto",
  });
}
