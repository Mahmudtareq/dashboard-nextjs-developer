"use client";

import { Edit2Icon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const TableTest = ({ taskList }) => {
  return (
    <div className="relative">
      <div className="overflow-x-auto rounded-sm">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4 px-3 border-r">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="py-3 px-3 whitespace-nowrap border-r">
                Task
              </th>
              <th scope="col" className="py-3 px-3 whitespace-nowrap border-r">
                Task Id
              </th>

              <th scope="col" className="py-3 px-3 whitespace-nowrap border-r">
                Assigned Date
              </th>
              <th scope="col" className="py-3 px-3 whitespace-nowrap border-r">
                Status
              </th>
              <th scope="col" className="py-3 px-3 whitespace-nowrap border-r">
                Assigned
              </th>
              <th scope="col" className="py-3 px-3 whitespace-nowrap border-r">
                Due Date
              </th>
              <th scope="col" className="py-3 px-3 border-r ">
                Priority
              </th>
              <th scope="col" className="py-3 px-3 border-r">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((item) => (
              <tr
                key={item.id}
                className="bg-white border dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4 border">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${item.id}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-table-search-${item.id}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="py-4 px-2 border  text-start font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.task}
                </td>
                <td className="py-4 text-start border px-2 whitespace-nowrap">
                  {item.taskid}
                </td>
                <td className="py-4 text-start border px-2 whitespace-nowrap">
                  {item.assigneddate}
                </td>
                <td
                  className={`py-4 text-start border px-2 whitespace-nowrap ${
                    item.status === "Pending"
                      ? "text-red-500"
                      : item.status === "Completed"
                      ? "text-green-500"
                      : item.status === "In Progress"
                      ? "text-blue-500"
                      : ""
                  }`}
                >
                  {item.status}
                </td>
                <td className="py-4 border text-start whitespace-nowrap px-2">
                  <div className="flex items-center -space-x-4 rtl:space-x-reverse">
                    <Avatar>
                      <AvatarImage
                        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                        src="https://i.ibb.co/ctXR8mY/member-img-09.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage
                        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                        src="https://i.ibb.co/2s537VF/member-img-11.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage
                        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                        src="https://i.ibb.co/ctXR8mY/member-img-09.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </td>
                <td className="py-4 border text-start px-2 whitespace-nowrap">
                  {item.duedate}
                </td>
                {/* <td className="py-4 border text-start px-2 whitespace-nowrap">
                  {item.priority}
                </td> */}
                <td className={`py-4 text-start border px-2 whitespace-nowrap`}>
                  <Badge
                    className={` rounded-[8px] ${
                      item?.priority === "High"
                        ? "bg-red-500"
                        : item?.priority === "Low"
                        ? "bg-sky-600"
                        : item?.priority === "Medium"
                        ? "bg-blue-500"
                        : ""
                    }`}
                  >
                    {item.priority}
                  </Badge>
                </td>
                <td className="py-4 border text-start px-2 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="secondaryBtn"
                            className="rounded-[8px]"
                            size="iconSmall"
                          >
                            <Edit2Icon className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>Edit</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="destructive"
                            className="rounded-[8px]"
                            size="iconSmall"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>Delete</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTest;
