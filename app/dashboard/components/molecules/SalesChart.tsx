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

const salesData = [
  { year: 2022, month: "Jan", sales: 400 },
  { year: 2022, month: "Feb", sales: 300 },
  { year: 2023, month: "Jan", sales: 500 },
  { year: 2023, month: "Feb", sales: 450 },
  { year: 2024, month: "Jan", sales: 600 },
  { year: 2024, month: "Feb", sales: 550 },
];

const COLORS = ["#0088FE", "#00C49F"];

export default function SalesChart() {
  const [selectedYear, setSelectedYear] = useState(2023);
  const [chartType, setChartType] = useState<"line" | "pie" | "bar">("line");

  const filteredData = salesData.filter(
    (item) => item.year === selectedYear
  );

  return (
    <div className="mt-6">

      {/* YEAR FILTER */}
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
        className="border p-2 rounded mb-4 mr-4"
      >
        <option value={2022}>2022</option>
        <option value={2023}>2023</option>
        <option value={2024}>2024</option>
      </select>

      {/* CHART BUTTONS */}
      <div className="mb-4">
        <button
          onClick={() => setChartType("line")}
          className="border px-4 py-2 rounded mr-2"
        >
          Line Chart
        </button>

        <button
          onClick={() => setChartType("bar")}
          className="border px-4 py-2 rounded mr-2"
        >
          Bar Chart
        </button>

        <button
          onClick={() => setChartType("pie")}
          className="border px-4 py-2 rounded"
        >
          Pie Chart
        </button>
      </div>

      {/* LINE CHART */}
      {chartType === "line" && (
        <LineChart width={500} height={300} data={filteredData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      )}

      {/* BAR CHART */}
      {chartType === "bar" && (
        <BarChart width={500} height={300} data={filteredData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
      )}

      {/* PIE CHART */}
      {chartType === "pie" && (
        <PieChart width={400} height={300}>
          <Pie
            data={filteredData}
            dataKey="sales"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {filteredData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
}