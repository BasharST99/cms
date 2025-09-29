// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";

const DX = process.env.DIRECTUS_URL ?? "http://localhost:8055";
const ADMIN_TOKEN = process.env.DIRECTUS_ADMIN_STATIC_TOKEN!; // set in .env.local

async function userByEmail(email: string) {
  const q = new URLSearchParams({
    "fields": "id,email,status,role.name",
    "filter[email][_eq]": email,
    "limit": "1",
  });
  const res = await fetch(`${DX}/users?${q.toString()}`, {
    headers: { Authorization: `Bearer ${ADMIN_TOKEN}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const json = await res.json();
  return (json?.data?.[0] ?? null) as { id: string; email: string; status: string } | null;
}

export async function POST(req: Request) {
  const { email, password, first_name, last_name, verification_url } = await req.json();

  // (a) Pre-check for duplicates (UX)
  const exists = await userByEmail(email);
  if (exists) {
    return NextResponse.json({ error: "Email already in use" }, { status: 409 });
  }

  // (b) Register (always returns 204, even for some failures)
  const r = await fetch(`${DX}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, first_name, last_name, verification_url }),
  });

  // If Directus returns anything but 204, bubble it up
  if (r.status !== 204) {
    const err = await r.json().catch(() => ({}));
    return NextResponse.json(err, { status: r.status });
  }

  // (c) Post-check to confirm creation/status
  const created = await userByEmail(email);
  if (!created) {
    // Could be rate-limit stall or email existed in a race; still return 204 like Directus
    return new NextResponse(null, { status: 204 });
  }

  // Return minimal info to the client (don’t leak sensitive fields)
  return NextResponse.json(
    { ok: true, status: created.status }, // likely "unverified" if verification is ON
    { status: 201 }
  );
}
