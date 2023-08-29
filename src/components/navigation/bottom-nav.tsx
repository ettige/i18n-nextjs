"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { Attributes } from "react";

import { useDictionary } from "@/components/providers/dictionary-provider";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { HomeIcon, GearIcon } from "@radix-ui/react-icons";
import SideBar from "./side-bar";

interface Routes {
    href: string,
    label: string,
    active?: boolean,
    icon?: React.ReactNode
}

const BottomNav = ({ className }: React.HTMLAttributes<Attributes>) => {
    const pathname = usePathname()
    const dictionary = useDictionary()

    const routes: Routes[] = [
        {
            href: "/",
            label: dictionary.routes[0],
            active: pathname === "/",
            icon: <HomeIcon className="h-6 w-6" />,
        },
        {
            href: "/settings",
            label: dictionary.routes[1],
            active: pathname === "/settings",
            icon: <GearIcon className="h-6 w-6" />,
        },
        {
            href: "/help",
            label: dictionary.routes[1],
            active: pathname === "/help",
            icon: <HomeIcon className="h-6 w-6" />,
        },
    ]

    return (
        <nav className={cn("flex items-center justify-center gap-1 sticky bottom-0 " + className)}>
            <SideBar className="flex justify-center p-1" />
            {routes.map(route => (
                <Link
                    className={cn("flex-1 flex p-1 justify-center " + (route.active ? "text-foreground border-t-2" : "text-neutral-500"))}
                    href={route.href}
                    key={route.href}
                >
                    {route.icon}
                </Link>
            ))}

        </nav>

    );
}

export default BottomNav;