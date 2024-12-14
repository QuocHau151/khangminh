import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  salesRoutes,
} from "@/routes";
import { NextRequest, NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const session = await auth();
  const isLoggedIn = !!session;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const IsSalesRoute = salesRoutes.includes(nextUrl.pathname);
  const IsAuthRoute = authRoutes.includes(nextUrl.pathname);
  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (isLoggedIn) {
    if (IsAuthRoute) {
      return NextResponse.redirect(
        new URL(DEFAULT_LOGIN_REDIRECT, nextUrl.origin),
      );
    }
    return NextResponse.next();
  }

  if (!isLoggedIn && IsSalesRoute) {
    return NextResponse.redirect(new URL("/register", nextUrl));
  }
  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
