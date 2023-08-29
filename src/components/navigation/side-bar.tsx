import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import MainNav from "@/components/navigation/main-nav";
import { Attributes } from "react";

const SideBar = ({className}:React.HTMLAttributes<Attributes>) => {

  return (
    <Sheet>
      <SheetTrigger className={className}><DotsVerticalIcon className="h-5 w-5" /></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>hello</SheetTitle>
          <MainNav className="flex-col items-start" />
        </SheetHeader>
      </SheetContent>
    </Sheet>

  );
}

export default SideBar;