// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { setAuthCookies } from "@/lib/auth-cookies";

const DX = process.env.DIRECTUS_URL ?? "http://localhost:8055";
export async function POST(req: Request) {
  const { email, password } = await req.json();

  const r = await fetch(`${DX}/auth/login?fields=email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, mode: "json" }),
    cache: "no-store",
  });

  if (!r.ok) {
    const err = await r.json().catch(() => ({}));
    return NextResponse.json(err, { status: r.status });
  }

  const json = await r.json();

  // 🔧 Support both shapes (official REST responses use the data envelope)
  const payload = json?.data ?? json;
  const access_token: string | undefined = payload?.access_token;
  const refresh_token: string | undefined = payload?.refresh_token;
  const expires: number | undefined = payload?.expires; // usually ms

  if (!access_token || !refresh_token) {
    return NextResponse.json({ error: "Missing tokens from Directus" }, { status: 500 });
  }

  const accessTTLsec = Math.floor((typeof expires === "number" ? expires : 900_000) / 1000);

  await setAuthCookies(access_token, refresh_token, accessTTLsec);

  return NextResponse.json({ ok: true });
}
