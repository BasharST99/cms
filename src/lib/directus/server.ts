// src/lib/directus/server.ts
import { directusFetch, getAssetURL } from "./fetcher";

export { DIRECTUS_URL } from "./fetcher";
export { getAssetURL };

export async function dxGet<T>(
  path: string,
  params?: Record<string, string>,
  revalidateSeconds = 60
): Promise<T> {
  return directusFetch<T>(path, {
    params,
    revalidate: revalidateSeconds,
    auth: "server",
  });
}
