"use client"
import { useParams, usePathname, useRouter } from "next/navigation"

import { locales } from "@/config/i18n.config";
import { useCookies } from 'next-client-cookies';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useDictionary } from "./providers/dictionary-provider";
const LanguageSwitcher = () => {
    const cookies = useCookies();
    const pathname = usePathname()
    const params = useParams()
    const router = useRouter()
    const dictionary = useDictionary()
    const locale = locales.find(locale => locale.local === params.lang)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    {locale?.local.toUpperCase()}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {locales.map(locale => <DropdownMenuItem onClick={() => { cookies.set('accept-language', locale.local); router.push(pathname) }} key={locale.local} dir={locale.direction}>{locale.name}</DropdownMenuItem>)}
                <DropdownMenuItem onClick={() => { cookies.remove('accept-language'); router.push(pathname) }} >{dictionary.system}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    );
};
export default LanguageSwitcher