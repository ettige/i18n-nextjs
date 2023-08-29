import { Inter } from 'next/font/google'
import { Vazirmatn } from 'next/font/google'

const vazirmatn=Vazirmatn({subsets:['arabic'],adjustFontFallback:true})
const inter = Inter({ subsets: ['latin'] })

interface I18N {
    defaultLocale: string,
    locales: string[],
    directions: { rtl: string[] }
}

export const i18n: I18N = {
    defaultLocale: 'en',
    locales: ['en', 'fa'],
    directions: { rtl: ["fa"] }
    
} as const
export const locales=[
    {
        name:"English",
        local:"en",
        direction:"ltr",
        font:inter,
    },
    {
        name:"فارسی",
        local:"fa",
        direction:"rtl",
        font:vazirmatn
    },
]
export type Locale = (typeof i18n)['locales'][number]