import TaskListCard from "@/components/taskList/TaskListCard";
import TaskListHeader from "@/components/taskList/TaskListHeader";
import TaskListTable from "@/components/taskList/TaskListTable";
import TaskStatistics from "@/components/taskList/TaskStatistics";
import { tsakListdata } from "@/data/tasklistdata";

const TasksListPage = async () => {
  const taskList = await tsakListdata();
  return (
    <>
      <TaskListHeader />
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-9 col-span-12">
          <TaskListTable taskList={taskList} />
        </div>
        <div className="lg:col-span-3 col-span-12 ">
          <TaskListCard />
          <div>
            <TaskStatistics  />
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksListPage;
