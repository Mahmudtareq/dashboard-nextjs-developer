import AnalyticsPieCharts from "@/components/anaiytics/AnalyticsPieCharts";
import { pieChartData1, pieChartData2 } from "@/data/piechartdata";

const AnalyticsPage = async () => {
  const data1 = pieChartData1();
  const data2 = pieChartData2();
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-9 col-span-12">
          <AnalyticsPieCharts data1={data1} data2={data2} />
        </div>
        <div className="lg:col-span-3 col-span-12 ">chart2</div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
