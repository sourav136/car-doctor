import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET});
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/checkout") && !token) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${pathname}`, req.url),
    );
  }
  if(pathname.startsWith("/admin")){
    if(!token){
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${pathname}`, req.url),
      )
    }
    if(token.role !== "admin"){
      return NextResponse.redirect(
        new URL("/", req.url)
      )
    }
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/checkout/:path*", "/admin/:path*"],
};
