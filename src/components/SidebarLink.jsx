"use client";

import SidebarButton from "./SidebarButton";
import {
  CheckCheck,
  History,
  Home,
  MoreHorizontal,
  Settings2,
  SquareGanttChart,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Home",
    link: "/dashboard",
    icon: Home,
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
    label: "Profile",
    link: "/dashboard/profile",
    icon: User,
  },
  {
    label: "Task List",
    link: "/dashboard/task-list",
    icon: CheckCheck,
  },
  {
    label: "History",
    link: "/dashboard/history",
    icon: History,
  },
];

const SidebarLink = () => {
  const pathName = usePathname();
  return (
    <div>
      {links.map((item, idx) => (
        <Link key={idx} href={item.link}>
          <SidebarButton
            variant={pathName === item.link ? "destructive" : "ghost"}
            icon={item.icon}
            className="w-full"
          >
            {item.label}
          </SidebarButton>
        </Link>
      ))}
      {/* extra button without link */}
      <div className="flex flex-col gap-2">
        <SidebarButton icon={MoreHorizontal} className="w-full">
          More
        </SidebarButton>
        <SidebarButton
          className="w-full justify-center text-white"
          variant="default"
        >
          Tweet
        </SidebarButton>
      </div>
    </div>
  );
};

export default SidebarLink;
