import BugsCrd from "@/components/bugs/BugsCrd";
import BugsHeader from "@/components/bugs/BugsHeader";
import Charts from "@/components/bugs/Charts";
import TotalSloveChart from "@/components/bugs/TotalSloveChar";
import { Badge } from "@/components/ui/badge";
import { BugPlay, CheckCheck, PercentSquareIcon } from "lucide-react";
const bugs = [
  {
    id: 1,
    title: "Total Problems",
    icon: <BugPlay />,
    total: 50,
    percentage_completed: 70,
  },
  {
    id: 2,
    title: "Completed Problems",
    icon: <CheckCheck />,
    total: 20,
    percentage_completed: 40,
  },
  {
    id: 3,
    title: "Pending Problems",
    icon: <PercentSquareIcon />,
    total: 10,
    percentage_completed: 60,
  },
  {
    id: 4,
    title: "Reviewing Problems",
    icon: <CheckCheck />,
    total: 5,
    percentage_completed: 20,
  },
];

const page = () => {
  return (
    <div>
      <BugsHeader />
      <div className="grid lg:grid-cols-4 gap-4">
        {bugs.map((item) => (
          <BugsCrd key={item.id} item={item} />
        ))}
      </div>
      <div className="my-8">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="lg:col-span-6 col-span-12 lg:p-4 p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-800">
            <div className="flex flex-col items-start mb-6">
              <span className="flex items-center gap-2">
                <h2 className="text-xl font-[600]">Total Problems</h2>
                <Badge variant="destructive">16,247</Badge>
              </span>
              <p className="font-[500] text-slate-500">Last 7 days</p>
            </div>
            <TotalSloveChart />
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm flex items-center">
                  {" "}
                  <Badge className="h-3 me-2"></Badge>
                  Completed
                </span>{" "}
                <span className="text-sm">52%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm flex items-center">
                  {" "}
                  <Badge variant="secondary" className="h-3 me-2"></Badge>
                  Pending Task
                </span>{" "}
                <span className="text-sm">48%</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12"></div>
        </div>
      </div>

      <div className="flex-grow relative">
        <Charts />
      </div>
    </div>
  );
};

export default page;
