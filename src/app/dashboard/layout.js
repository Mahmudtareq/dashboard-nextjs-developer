import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import TestSidebar from "@/components/DashboardSidebar";
import TestMobileSidebar from "@/components/DashboardMobileSidebar";
import DashBoardHeader from "@/components/DashBoardHeader";
import UserProfile from "@/components/UserProfile";
import ToggleMode from "@/components/ToggleMode";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

const Dashboard = async ({ children }) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <TestSidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <TestMobileSidebar />
            </SheetContent>
          </Sheet>
          <DashBoardHeader />
          <ToggleMode />
          <UserProfile session={session} />
        </header>
        <main className="px-4 py-4 grid grid-cols-1">{children}</main>
      </div>
    </div>
  );
};
export default Dashboard;
