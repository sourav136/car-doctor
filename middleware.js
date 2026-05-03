import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(req){
  const session = await auth();
  const {pathname} = req.nextUrl;
    if(pathname.startsWith("/checkout") && !session){
        return NextResponse.redirect(
            new URL(`/login?callbackUrl=${pathname}`, req.url)
        );
    }
    return NextResponse.next();
};
export const config={
    matcher: ["/checkout/:path*"],
};