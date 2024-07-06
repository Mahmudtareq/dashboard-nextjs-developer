"use client";

import dynamic from "next/dynamic";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data1 = [
  {
    week: "Week 1",
    totalProblems: 4000,
    completedProblems: 2400,
    pendingProblems: 1600,
  },
  {
    week: "Week 2",
    totalProblems: 3000,
    completedProblems: 1398,
    pendingProblems: 1602,
  },
  {
    week: "Week 3",
    totalProblems: 2000,
    completedProblems: 980,
    pendingProblems: 1020,
  },
  {
    week: "Week 4",
    totalProblems: 27,
    completedProblems: 10,
    pendingProblems: 1780,
  },
  {
    week: "Week 5",
    totalProblems: 80,
    completedProblems: 10,
    pendingProblems: 70,
  },
  {
    week: "Week 6",
    totalProblems: 80,
    completedProblems: 10,
    pendingProblems: 70,
  },
 
];


const ParChart = dynamic(
  () => import("recharts").then((recharts) => recharts.BarChart),
  { ssr: false }
);
const TotalSloveChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <ParChart
          data={data1}
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalProblems"
            fill="#8884d8"
            background={{ fill: "#eee" }}
          />
          <Bar dataKey="completedProblems" fill="#82ca9d" />
        </ParChart>
      </ResponsiveContainer>
    </>
  );
};

export default TotalSloveChart;
