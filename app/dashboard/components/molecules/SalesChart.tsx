"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

import type { SalesRecord } from "../../type/sales";

type SalesChartProps = {
  data: SalesRecord[];
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function SalesChart({ data }: SalesChartProps) {
  const [chartType, setChartType] =
    useState<"line" | "bar" | "pie">("line");

  if (!data || data.length === 0) {
    return <p className="text-center">No data available</p>;
  }

  return (
    <div className="mt-6">
      {/* Buttons */}
      <div className="mb-4 flex justify-center gap-3">
        <button onClick={() => setChartType("line")}>Line</button>
        <button onClick={() => setChartType("bar")}>Bar</button>
        <button onClick={() => setChartType("pie")}>Pie</button>
      </div>

      {/* Line Chart */}
      {chartType === "line" && (
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line dataKey="sales" />
        </LineChart>
      )}

      {/* Bar Chart */}
      {chartType === "bar" && (
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" />
        </BarChart>
      )}

      {/* Pie Chart */}
      {chartType === "pie" && (
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            dataKey="sales"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
}
