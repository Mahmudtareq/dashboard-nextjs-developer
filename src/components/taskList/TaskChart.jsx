"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TaskChart = ({ taskStatistics }) => {
  return (
    <div className="overflow-x-auto">
      <BarChart
        className="overflow-x-auto"
        width={300}
        height={300}
        data={taskStatistics}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {typeof window !== "undefined" && (
          <>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </>
        )}
      </BarChart>
    </div>
  );
};

export default TaskChart;
