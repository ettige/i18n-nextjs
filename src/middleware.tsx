import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { i18n } from './config/i18n.config';

function getLocale(request: Request): string {
  const headers = new Headers(request.headers)
  const acceptLanguage = headers.get("accept-language")
  if (acceptLanguage) {
    headers.set('accept-language', acceptLanguage.replaceAll("_", "-"))
  }

  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  return match(languages, i18n.locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers)
  let locale = getLocale(request) ?? i18n.defaultLocale
  const pathname = request.nextUrl.pathname

  // Get the "cookie" header from the text
  const cookieHeader = headers.get("cookie")?.split(';').filter(slice => slice.includes("accept-language"))[0];
  locale = cookieHeader ? cookieHeader.split('=')[1].trim() : locale;

  let newUrl = new URL(`/${locale}${pathname}`, request.nextUrl);
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.rewrite(newUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}