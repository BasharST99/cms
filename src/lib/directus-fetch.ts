// lib/directus-fetch.ts
import { cookies } from "next/headers";
import { ACCESS_COOKIE } from "./auth-cookies";
const DX = process.env.DIRECTUS_URL ?? "http://localhost:8055";

export async function dx<T>(path: string, init: RequestInit = {}): Promise<T> {
  const cookieStore = await cookies();
  const at = cookieStore.get(ACCESS_COOKIE)?.value;
  const res = await fetch(`${DX}${path}`, {
    ...init,
    headers: { ...(init.headers||{}), Authorization: at ? `Bearer ${at}` : "" },
    cache: "no-store"
  });

  if (res.status === 401) {
    const ref = await fetch("/api/auth/refresh", { method: "POST" });
    if (ref.ok) {
      const refreshedCookies = await cookies();
      const at2 = refreshedCookies.get(ACCESS_COOKIE)?.value;
      const retry = await fetch(`${DX}${path}`, {
        ...init, headers: { ...(init.headers||{}), Authorization: at2 ? `Bearer ${at2}` : "" }, cache: "no-store"
      });
      if (!retry.ok) throw new Error(`Directus error ${retry.status}`);
      return retry.json();
    }
  }
  if (!res.ok) throw new Error(`Directus error ${res.status}`);
  return res.json();
}
