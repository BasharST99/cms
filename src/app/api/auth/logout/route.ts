import { NextResponse } from "next/server";
import { REFRESH_COOKIE, clearAuthCookies } from "@/lib/auth-cookies";
import { cookies } from "next/headers";

const DX = process.env.DIRECTUS_URL ?? "http://localhost:8055";

export async function POST() {
  const store = await cookies();
  const rt = store.get(REFRESH_COOKIE)?.value;
  if (rt) {
    await fetch(`${DX}/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: rt })
    }).catch(() => {});
  }
  await clearAuthCookies();
  return NextResponse.json({ ok: true });
}
