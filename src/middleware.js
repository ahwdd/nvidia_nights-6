import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request) {
  const response = intlMiddleware(request);
  
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
  response.headers.set('Cross-Origin-Embedder-Policy', 'unsafe-none');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  
  return response;
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};