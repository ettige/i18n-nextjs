"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { Attributes } from "react";

import { useDictionary } from "@/components/providers/dictionary-provider";
import { cn } from "@/lib/utils";

interface Routes {
    href: string,
    label: string,
    active?: boolean ,

}

const MainNav = ({className}:React.HTMLAttributes<Attributes>) => {
    const pathname = usePathname()
    const dictionary = useDictionary()

    const routes: Routes[] = [
        {
            href: "/",
            label: dictionary.routes[0],
            active: pathname === "/"
        },
        {
            href: "/settings",
            label: dictionary.routes[1],
            active: pathname === "/settings"
        },
    ]

    return (
        <nav className={cn("flex gap-1 space-x-1 "+className)}>
            {routes.map(route=><Link className={cn(" "+(route.active?"text-red-600":""))} key={route.href} href={route.href}>{route.label}</Link>)}
        </nav>
    );
}

export default MainNav;