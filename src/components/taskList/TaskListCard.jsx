import React from "react";
import { Badge } from "../ui/badge";
import { CalendarCheck2, TrendingUp } from "lucide-react";

const TaskListCard = () => {
  return (
    <div>
      <div className="flex items-start gap-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <CalendarCheck2 className="w-6 h-6 text-gray-500 dark:text-gray-400 mb-3" />
        </div>
        <div>
          <span className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
            New Tasks{" "}
            <span className="ms-2">
              <Badge>12,120</Badge>
            </span>
          </span>
          <div className="text-2xl font-bold mb-2">12</div>
          <div className="text-xs text-muted-foreground flex items-center gap-1 justify-start">
            <Badge
              variant="secondary"
              className={`flex items-center gap-1 text-fuchsia-500`}
            >
              {" "}
              12 % <TrendingUp size={18} />
            </Badge>
            <span>This Months</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListCard;
