import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import {
  ACCESS_COOKIE,
  REFRESH_COOKIE,
  clearAuthCookies,
  setAuthCookies,
} from "@/lib/auth-cookies";

const DX = process.env.DIRECTUS_URL ?? "http://localhost:8055";

async function fetchUser(accessToken: string) {
  const res = await fetch(`${DX}/users/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  });

  if (res.ok) {
    const payload = await res.json().catch(() => null);
    const user = payload?.data ?? payload ?? null;
    return { ok: true as const, user };
  }

  return { ok: false as const, status: res.status };
}

async function refreshTokens(refreshToken: string) {
  const res = await fetch(`${DX}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  if (!res.ok) return null;
  const { access_token, refresh_token, expires } = await res.json();
  await setAuthCookies(
    access_token,
    refresh_token ?? refreshToken,
    typeof expires === "number" ? expires : 600,
  );
  return access_token as string;
}

export async function GET() {
  const store = await cookies();
  const access = store.get(ACCESS_COOKIE)?.value;
  const refresh = store.get(REFRESH_COOKIE)?.value;

  if (!access && !refresh) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  if (access) {
    const result = await fetchUser(access);
    if (result.ok) {
      return NextResponse.json({ authenticated: true, user: result.user });
    }
    if (result.status && result.status !== 401) {
      return NextResponse.json({ authenticated: false }, { status: result.status });
    }
  }

  if (refresh) {
    const newAccess = await refreshTokens(refresh);
    if (newAccess) {
      const result = await fetchUser(newAccess);
      if (result.ok) {
        return NextResponse.json({ authenticated: true, user: result.user });
      }
    }
  }

  await clearAuthCookies();
  return NextResponse.json({ authenticated: false }, { status: 401 });
}
