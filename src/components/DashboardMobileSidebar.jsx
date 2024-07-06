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
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import SidebarButton from "./SidebarButton";
import { usePathname } from "next/navigation";
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
    label: "Profile",
    link: "/dashboard/profile",
    icon: Users,
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
];

const DashboardMobileSidebar = () => {
  const pathName = usePathname();
  return (
    <>
      <nav className="grid gap-2 text-lg font-medium">
        {links.map((item, idx) => (
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
        ))}
      </nav>
      <div className="mt-auto">
        <Card>
          <CardHeader>
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DashboardMobileSidebar;
