"use client";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisVertical,
  Plus,
} from "lucide-react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import TableTest from "../dataTable/TableTest";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const TaskListTable = ({ taskList }) => {
  const itemsPerPage = 4; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("");
  const getSortedTasks = () => {
    let sortedTasks = [...taskList];
    console.log(sortedTasks);
    if (sortOption === "Pending") {
      sortedTasks = sortedTasks.filter((task) => task.status === "Pending");
    } else if (sortOption === "Completed") {
      sortedTasks = sortedTasks.filter((task) => task.status === "Completed");
    } else if (sortOption === "In Progress") {
      sortedTasks = sortedTasks.filter((task) => task.status === "In Progress");
    }
    return sortedTasks;
  };
  const sortedTasks = getSortedTasks();
  //   const totalPages = Math.ceil(taskList.length / itemsPerPage);
  const totalPages = Math.ceil(sortedTasks.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = Math.min(startIndex + itemsPerPage, taskList.length);
  const endIndex = Math.min(startIndex + itemsPerPage, sortedTasks.length);

  // Function to handle page navigation
  const goToPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <Card className=" rounded-sm shadow-lg">
      <div className="flex items-center flex-wrap  justify-between lg:p-4 p-3">
        <div>
          <span className="font-bold text-[0.9rem]">Total Tasks</span>
        </div>
        <div className="flex items-center gap-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="rounded-[8px]" size="sm">
                <Plus className="mr-2 h-4 w-4" /> Create Task
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Task</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when youre
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-[8px]">
                <EllipsisVertical className="h-4 w-4 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSortOption("Pending")}>
                Pending
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("Completed")}>
                Completed
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("In Progress")}>
                In Progress
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator className="w-full mb-3" />
      <div className="grid grid-cols-1 lg:p-4 p-3">
        <TableTest taskList={sortedTasks.slice(startIndex, endIndex)} />
      </div>
      <Separator className="w-full mb-3" />
      <div className="my-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="outline"
                size="icon"
                className="rounded-[8px]"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
            </PaginationItem>
            {[...Array(totalPages).keys()].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => goToPage(page + 1)}
                  className={`rounded-[8px] cursor-pointer ${
                    page + 1 === currentPage ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <Button
                variant="outline"
                size="icon"
                className="rounded-[8px]"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Card>
  );
};

export default TaskListTable;
