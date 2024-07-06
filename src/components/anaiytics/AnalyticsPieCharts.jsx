"use client";
import { Pie, PieChart } from "recharts";

const AnalyticsPieCharts = ({ data1, data2 }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data1}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={data2}
        dataKey="value"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
    </PieChart>
  );
};

export default AnalyticsPieCharts;
