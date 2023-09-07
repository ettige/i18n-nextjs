
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
import MainNav from "@/components/navigation/main-nav";
import SideBar from "./side-bar";
import SignOut from "../signout";

const Navbar = ({ dictionary }: { dictionary: Dictionary }) => {

    return (
        <header className="border-b-2 backdrop-blur-sm py-2">
            <div className="container flex justify-between items-center">
                <SideBar />
                <div className="text-xl flex gap-1 font-bold">
                    <span>Logo</span>
                    <span className="hidden md:block">
                        {dictionary.siteName}
                    </span>
                </div>
                <MainNav className="hidden md:flex" />
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
                            <DropdownMenuItem className="justify-end">
                                <SignOut />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}

export default Navbar;