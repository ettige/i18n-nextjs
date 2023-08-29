
import { Dictionary } from "@/lib/get-dictionary";
import { ModeToggle } from "@/components/theme-switcher";
import LanguageSwitcher from "@/components/language-switcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = ({ dictionary }: { dictionary: Dictionary }) => {

    return (
        <header className="border-b-2 backdrop-blur-sm">
            <div className="container flex justify-between items-center">
                {dictionary.siteName}
                <div className="flex gap-1 items-center">
                    <ModeToggle />
                    <LanguageSwitcher />
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/ettige.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="justify-end">
                                {dictionary.profile}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>
        </header>
    );
}

export default Navbar;