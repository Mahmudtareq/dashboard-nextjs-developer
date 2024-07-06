"use client";

import AreaChartPlot from "../recharts/AreaChartPlot";
import LineChartPlot from "../recharts/LineChartPlot";
import PieChartPlot from "../recharts/PieChartPlot";
import RadarChartPlot from "../recharts/RadarChartPlot";

const Charts = () => {
  return (
    <>
      <section className="flex my-4 px-4 gap-3">
        <div className="lg:w-1/2 w-full h-[300px] bg-gray-700 rounded">
          <AreaChartPlot />
        </div>
        <div className="lg:w-1/2 w-full h-[300px] bg-gray-700 rounded">
          <PieChartPlot />
        </div>
      </section>
      <section className="flex my-4 px-4 gap-3">
        <div className="lg:w-1/2 w-full h-[300px] bg-gray-700 rounded">
          <LineChartPlot />
        </div>
        <div className="lg:w-1/2 w-full h-[300px] bg-gray-700 rounded">
          <RadarChartPlot />
        </div>
      </section>
    </>
  );
};

export default Charts;
