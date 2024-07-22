import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const allCookies = cookies(request);
  const accessToken = allCookies.get("accessToken")?.value;
  const role = allCookies.get("role")?.value;

  const publicPages = [
    "/about",
    "/services",
    "/pricing",
    "/feedback",
    "/login-v2",
    "/loginEmail",
    "/register",
    "/forgotpasscode",
    "/_next",
  ];

  if (
    pathname == "/" ||
    publicPages.some((page) => pathname.startsWith(page))
  ) {
    return NextResponse.next();
  }

  if (
    !accessToken ||
    (pathname.startsWith("/admin") && role !== "Admin") ||
    (pathname.startsWith("/staff") && role !== "Staff")
  ) {
    return NextResponse.redirect(new URL("/login-v2", request.url));
  }
  return NextResponse.next();
}
