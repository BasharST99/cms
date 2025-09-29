import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Only protect specific sections (example)
const PROTECTED_PREFIXES = ["/dashboard", "/account"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ Skip API & public auth pages entirely
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/verify") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    /\.[\w]+$/.test(pathname) // static files
  ) {
    return NextResponse.next();
  }

  // ✅ Only guard what you intend
  const needsAuth = PROTECTED_PREFIXES.some(p => pathname.startsWith(p));
  if (!needsAuth) return NextResponse.next();

  const hasToken = req.cookies.get("dx_at")?.value;
  if (!hasToken) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Or, alternatively, constrain with a matcher so middleware doesn't run on /api/*
// export const config = { matcher: ["/dashboard/:path*", "/account/:path*"] };
