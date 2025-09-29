import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { REFRESH_COOKIE, setAuthCookies } from "@/lib/auth-cookies";

const DX = process.env.DIRECTUS_URL ?? "http://localhost:8055";

export async function POST() {
  const store = await cookies();
  const rt = store.get(REFRESH_COOKIE)?.value;
  if (!rt) return NextResponse.json({ error: "No refresh token" }, { status: 401 });

  const r = await fetch(`${DX}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: rt })
  });
  if (!r.ok) return NextResponse.json({ error: "Refresh failed" }, { status: 401 });

  const { access_token, refresh_token, expires } = await r.json();
  await setAuthCookies(access_token, refresh_token, typeof expires === "number" ? expires : 600);
  return NextResponse.json({ ok: true });
}
