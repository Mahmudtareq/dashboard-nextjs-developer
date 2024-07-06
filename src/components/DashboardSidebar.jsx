"use client";
import {
  Badge,
  Bell,
  Home,
  HomeIcon,
  LineChart,
  Package2,
  SquareGanttChart,
  Settings2,
  Users,
  History,
  CheckCheck,
  MoreHorizontal,
  Settings,
  LogOut,
  ChevronDownIcon,
  BugOffIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { usePathname } from "next/navigation";
import SidebarButton from "./SidebarButton";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
const links = [
  {
    label: "Home",
    link: "/dashboard",
    icon: HomeIcon,
  },
  {
    label: "Project Management",
    link: "/dashboard/project-management",
    icon: SquareGanttChart,
  },
  {
    label: "Settings",
    link: "/dashboard/settings",
    icon: Settings2,
  },
  {
    label: "Task List",
    link: "/dashboard/tasks-list",
    icon: CheckCheck,
  },
  {
    label: "Analytics",
    link: "/dashboard/analytics",
    icon: LineChart,
   
  },
  {
    label: "Bugs",
    link: "/dashboard/bugs",
    icon: BugOffIcon,
  },
];

const DashboardSidebar = () => {
  const pathName = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const handleToggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const toggleBugsDropdown = () => {
    setBugsDropdownOpen(!bugsDropdownOpen);
  };
  return (
    <div className="hidden border-r bg-muted/40 md:block py-3">
      <ScrollArea className="h-full">
        <div className="flex h-full max-h-screen  flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 relative">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="">Global</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {/* {links.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="flex items-center gap-3 rounded-lg  py-1 text-muted-foreground transition-all"
                >
                  <SidebarButton
                    variant={pathName === item.link ? "destructive" : "ghost"}
                    icon={item.icon}
                    className="w-full"
                  >
                    {item.label}
                  </SidebarButton>
                </Link>
              ))} */}
              {links.map((item, idx) => (
                <div key={idx}>
                  {/* Render submenu only if submenus exist */}
                  {item.submenus ? (
                    <div className="relative">
                      <div
                        onClick={() => handleToggleSubmenu(idx)}
                        className="flex items-center gap-3 rounded-lg py-1 text-muted-foreground transition-all w-full cursor-pointer"
                      >
                        <SidebarButton
                          variant={
                            pathName === item.link ? "destructive" : "ghost"
                          }
                          icon={item.icon}
                          className="w-full"
                        >
                          {item.label}
                        </SidebarButton>
                        <ChevronDownIcon className="h-5 w-5" />
                      </div>
                      {/* Render dropdown content if submenu is open */}
                      {openSubmenu === idx && (
                        <div className="absolute mt-1 w-full rounded-lg">
                          <nav className="grid items-start px-2 text-sm font-medium">
                            {item.submenus.map((submenu, subIdx) => (
                              <Link
                                key={subIdx}
                                href={submenu.link}
                                className="block px-4 py-2 text-muted-foreground  transition-all"
                              >
                                <SidebarButton
                                  variant={
                                    pathName === item.link
                                      ? "destructive"
                                      : "ghost"
                                  }
                                  icon={item.icon}
                                  className="w-full"
                                >
                                  {submenu.label}
                                </SidebarButton>
                              </Link>
                            ))}
                          </nav>
                        </div>
                      )}
                    </div>
                  ) : (
                    // Render regular menu item if no submenus
                    <Link
                      href={item.link}
                      className={`flex items-center gap-3 rounded-lg py-1 text-muted-foreground transition-all ${
                        openSubmenu === idx ? "mt-10" : ""
                      }`}
                    >
                      <SidebarButton
                        variant={
                          pathName === item.link ? "destructive" : "ghost"
                        }
                        icon={item.icon}
                        className="w-full"
                      >
                        {item.label}
                      </SidebarButton>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="absolute bottom-0 mb-0 left-0 p-4 px-1">
            <Separator className="-top-3 left-0 w-full" />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="flex justify-between items-center w-full gap-2">
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
      </ScrollArea>
    </div>
  );
};

export default DashboardSidebar;
