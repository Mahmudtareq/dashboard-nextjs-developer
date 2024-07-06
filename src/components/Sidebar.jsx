import SidebarLink from "./SidebarLink";
import SidebarButton from "./SidebarButton";
import { Separator } from "./ui/separator";
import { LogOut, MoreHorizontal, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Sidebar = () => {
  return (
    <aside className="w-[270px] max-w-xs h-screen fixed left-0 top-0 border-r">
      <div className="h-full px-3 py-4">
        <h3 className="mx-3 text-lg font-semibold text-foreground">Developer</h3>
        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">
            <SidebarLink />
          </div>
          <div className="absolute w-full bottom-4 px-1 left-0">
            <Separator className="absolute -top-3 left-0 w-full" />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src="https://github.com/max-programming.png" />
                        <AvatarFallback>Max Programming</AvatarFallback>
                      </Avatar>
                      <span>Global Programming</span>
                    </div>
                    <MoreHorizontal size={20} />
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="mb-2 w-56 p-3 rounded-[1rem]">
                <div className="space-y-1">
                  <Link href="/">
                    <SidebarButton size="sm" icon={Settings} className="w-full">
                      Account Settings
                    </SidebarButton>
                  </Link>
                  <SidebarButton size="sm" icon={LogOut} className="w-full">
                    Log Out
                  </SidebarButton>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
