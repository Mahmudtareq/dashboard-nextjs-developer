import { taskChartData } from "@/data/barchartdata";
import TaskChart from "./TaskChart";

const TaskStatistics = async () => {
  const taskData = await taskChartData();

  return (
    <div className="max-w-sm px-2 py-3 my-5 bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="mb-3">
        <h2>Tasks Statistics (Last 6 months) </h2>
      </div>
      <div>
        <TaskChart taskStatistics={taskData} />
      </div>
    </div>
  );
};

export default TaskStatistics;
