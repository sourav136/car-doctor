import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = req.cookies.get("next-auth.session-token");
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/checkout") && !token) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${pathname}`, req.url),
    );
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/checkout/:path*"],
};
