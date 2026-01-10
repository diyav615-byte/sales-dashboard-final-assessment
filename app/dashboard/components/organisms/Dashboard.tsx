"use client";

import { useState, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { salesDataByYear } from "../../data/salesData";
import { SalesRecord } from "../../type/sales";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a4de6c"];

export default function Dashboard() {
  const [year, setYear] = useState<number>(2023);
  const [threshold, setThreshold] = useState<number | "">("");

  // filter data based on year & threshold
  const filteredData = useMemo(() => {
    const data = salesDataByYear[year] || [];
    if (threshold !== "") {
      return data.filter((item) => item.sales >= threshold);
    }
    return data;
  }, [year, threshold]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        Sales Dashboard
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        {/* Year Dropdown */}
        <select
          className="border rounded p-2 text-black bg-white"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          {Object.keys(salesDataByYear).map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        {/* Threshold Input */}
        <input
          type="number"
          placeholder="Min sales threshold..."
          className="border rounded p-2 text-black bg-white"
          value={threshold}
          onChange={(e) =>
            setThreshold(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-center">Pie Chart</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={filteredData}
                dataKey="sales"
                nameKey="product"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {filteredData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-center">Bar Chart</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={filteredData}>
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg md:col-span-2">
          <h2 className="text-xl font-semibold mb-2 text-center">Line Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredData}>
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
