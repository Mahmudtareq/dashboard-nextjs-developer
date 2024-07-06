"use client";

import Image from "next/image";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage } from "../ui/avatar";

export const columns = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessor: "assignedTo",
    header: "Assigned",
    cell: ({ row }) => (
      <div className="">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
    ),
  },

  {
    accessorKey: "tasks",
    header: "Tasks",
    cell: ({ row }) => (
      <div className="">
        <div className="">
          {row.getValue("tasks")}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "completeTask",
    header: "CompleteTask",
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => (
      <div className="">
        <Progress
          className="h-2 bg-fuchsia-400"
          value={row.getValue("progress")}
        />
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge className="bg-gray-400">{row.getValue("status")}</Badge>
    ),
  },
  {
    accessorKey: "dueDate",
    header: "DueDate",
  },
];
