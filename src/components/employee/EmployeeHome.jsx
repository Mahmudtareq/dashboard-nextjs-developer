import { employeeData } from "@/data/employeedata";
import React from "react";
import TeamMembers from "./TeamMembers";
import Link from "next/link";

const EmployeeHome = async () => {
  const employee = await employeeData();
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h2 className="relative text-[1.2rem] text-gray-300 font-semibold my-3">
          Temp Members
        </h2>
        <Link href="#" className="text-gray-300">
          View All
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 gap-4">
        {employee.map((item) => (
          <TeamMembers key={item.id} employee={item} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeHome;
