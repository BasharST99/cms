// lib/auth-cookies.ts
import { cookies } from "next/headers";

export const ACCESS_COOKIE = "dx_at";
export const REFRESH_COOKIE = "dx_rt";

const isProduction = process.env.NODE_ENV === "production";

export async function setAuthCookies(access: string, refresh: string, accessTTL: number) {
  const c = await cookies();
  c.set(ACCESS_COOKIE, access, {
    httpOnly: true,
    sameSite: "lax",
    secure: isProduction,
    path: "/",
    maxAge: accessTTL,
  });
  c.set(REFRESH_COOKIE, refresh, {
    httpOnly: true,
    sameSite: "lax",
    secure: isProduction,
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function clearAuthCookies() {
  const c = await cookies();
  c.delete(ACCESS_COOKIE);
  c.delete(REFRESH_COOKIE);
}
