import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from '@/i18n/settings'
import { cookies } from 'next/headers'

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

export function middleware(req: NextRequest) {
  let lng
  // Get the "cookie" header from the text
  const cookieHeader = req.headers.get("cookie")?.split(';').filter(slice => slice.includes(cookieName))[0];

  const cookieValue = cookieHeader ? cookieHeader.split('=')[1].trim() : undefined
  
  if (cookieValue) lng = acceptLanguage.get(cookieValue)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }
  const refererValue = req.headers.get("referer")
  if (refererValue) {
    const refererUrl = new URL(refererValue)
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}