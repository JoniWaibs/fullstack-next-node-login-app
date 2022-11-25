import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { pages } from "@root/enums/index";

/**
 * Make redirect to /public url from ssr
 * @param request
 * @returns
 */
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL(pages.PUBLIC, request.url));
}

export const config = {
  matcher: pages.PUBLIC,
};
