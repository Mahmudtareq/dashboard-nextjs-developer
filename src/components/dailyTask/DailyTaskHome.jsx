import { dailyTaskData } from "@/data/dailytaskdata";
import Link from "next/link";
import React from "react";
import DailyTask from "./DailyTask";

const DailyTaskHome = async () => {
  const taskList = await dailyTaskData();
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className="relative text-[1.2rem] text-gray-300 font-semibold my-3">
          Daily Tasks
        </h2>
        <Link href="#" className="text-gray-300">
          View All
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        {taskList.map((item) => (
          <DailyTask key={item.id} dailytask={item} />
        ))}
      </div>
    </div>
  );
};

export default DailyTaskHome;
