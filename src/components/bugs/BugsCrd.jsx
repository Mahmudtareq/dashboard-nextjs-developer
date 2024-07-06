import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FileStack, TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const BugsCrd = ({ item }) => {
  return (
    <>
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
          <Button variant="outline" size="icon" className="rounded-[8px]">
           {item.icon}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-2">{item.total}</div>
          <div className="text-xs text-muted-foreground flex items-center gap-1 justify-start">
            <Badge
              variant="secondary"
              className={`flex items-center gap-1 text-fuchsia-500 `}
            >
              {" "}
              {item.percentage_completed} % <TrendingUp size={18} />
            </Badge>
            <span>This Months</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default BugsCrd;
