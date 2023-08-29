import './globals.css'
import type { Metadata } from 'next'
import { locales } from '@/config/i18n.config'
import { ClientCookiesProvider } from '@/components/providers/cookies-provicer'
import { cookies } from "next/headers"
import Navbar from '@/components/navigation/navbar'
import { getDictionary } from '@/lib/get-dictionary'
import { ThemeProvider } from '@/components/providers/theme-provider'
import DictionaryProvider from '@/components/providers/dictionary-provider'
import BottomNav from '@/components/navigation/bottom-nav'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string, }
}) {
  const dictionary = await getDictionary(params.lang)

  const locale = locales.find(locale => locale.local === params.lang)

  return (
    <html lang={params.lang} dir={locale?.direction}>
      <body className={locale?.font.className}>
        <ClientCookiesProvider value={cookies().getAll()}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <DictionaryProvider dictionary={dictionary}>

              <Navbar dictionary={dictionary} />
              <main className='container h-screen'>
                {children}
              </main>
              <BottomNav className='md:hidden'/>
            </DictionaryProvider>
          </ThemeProvider>
        </ClientCookiesProvider>
      </body>
    </html>
  )
}
