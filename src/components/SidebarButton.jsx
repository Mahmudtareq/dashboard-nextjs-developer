import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const SidebarButton = ({ children, className, icon: Icon, ...props }) => {
  return (
    <Button
      variant="ghost"
      className={cn("gap-2 justify-start", className)}
      {...props}
    >
      {Icon && <Icon size={20}/>}
      <span>{children}</span>
    </Button>
  );
};

export default SidebarButton;
