import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { UNAUTHENTICATED_ONLY_ROUTES, UNPROTECTED_ROUTES } from "@/lib/constants";
import { updateSession } from "@/services/supabase/middleware";
import { createClient } from "@/services/supabase/server";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const supabase = createClient();

  await updateSession(req);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  /*
   Redirect the user to /login if:
      1. supabase.auth.getUser() returned null (NOT logged in)
      2. NOT already in an unprotected route (e.g. /register, /login etc.)
  */
  if (!user && !UNPROTECTED_ROUTES.includes(pathname))
    return NextResponse.redirect(new URL("/login", req.url));

  /*
   Redirect the user to / if:
      1. supabase.auth.getUser() returned the user (IS logged in)
      2. IS in an unauthenticated only route (e.g. /login, /login-otp etc.)
  */
  if (user && UNAUTHENTICATED_ONLY_ROUTES.includes(pathname))
    return NextResponse.redirect(new URL("/", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
