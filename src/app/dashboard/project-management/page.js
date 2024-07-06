import ProjectHome from "@/components/projects/ProjectHome";
import ProjectHeader from "@/components/projects/ProjectHeader";
import { DataTable } from "@/components/dataTable/data-table";
import { columns } from "@/components/dataTable/columns";
import EmployeeHome from "@/components/employee/EmployeeHome";
import DailyTaskHome from "@/components/dailyTask/DailyTaskHome";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { tableSummaryData } from "@/data/projectsummarydata";

const ProjectManagement = async () => {
  const data = await tableSummaryData();
  return (
    <>
      <ProjectHeader />
      <ProjectHome />
      <div className="my-8">
        <EmployeeHome />
      </div>
      <div className="my-8">
        <DailyTaskHome />
      </div>
      <div className="my-8">
        <Card className=" p-2">
          <CardTitle className="relative text-[1.2rem] text-gray-300 font-semibold my-3">
            Projects Summary
          </CardTitle>
          <div className="relative overflow-x-auto">
            <DataTable columns={columns} data={data} />
          </div>
        </Card>
      </div>
      <div className="my-8">
        <Card className="p-2">
          <CardTitle className="relative text-[1.2rem] text-gray-300 font-semibold my-3">
            Project Analysis
          </CardTitle>
          <CardContent></CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProjectManagement;
