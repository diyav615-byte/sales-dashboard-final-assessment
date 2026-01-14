"use client";

import { useState } from "react";
import { salesData } from "./data/salesData";
import BarChart from "./components/charts/SalesBarChart";
import LineChart from "./components/charts/SalesLineChart";
import PieChart from "./components/charts/SalesPieChart";

export default function DashboardPage() {
  const [year, setYear] = useState<2023 | 2024 | 2025>(2025);

  const data = salesData[year];

  // 1️⃣ Calculate metrics
  const totalSales = data.reduce((acc, item) => acc + item.sales, 0);
  const avgSales = totalSales / data.length;
  const highestSale = Math.max(...data.map((item) => item.sales));
  const lowestSale = Math.min(...data.map((item) => item.sales));

  return (
    <main className="p-8 bg-gray-100 min-h-screen text-gray-900">
      <h1 className="text-3xl font-bold mb-2">Sales Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Monitor and analyze your monthly sales performance.
      </p>

      {/* YEAR SELECT */}
      <select
        value={year}
        onChange={(e) => setYear(Number(e.target.value) as any)}
        className="border rounded px-3 py-2 mb-6"
      >
        <option value={2023}>2023</option>
        <option value={2024}>2024</option>
        <option value={2025}>2025</option>
      </select>

      {/* METRICS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Total Sales</p>
          <p className="text-xl font-bold">₹{Number(totalSales).toLocaleString("en-IN")}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Average Sales</p>
          <p className="text-xl font-bold">₹{Number(avgSales).toLocaleString("en-IN")}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Highest Sale</p>
          <p className="text-xl font-bold">₹{Number(highestSale).toLocaleString("en-IN")}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Lowest Sale</p>
          <p className="text-xl font-bold">₹{Number(lowestSale).toLocaleString("en-IN")}</p>
        </div>
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BarChart data={data} />
        <LineChart data={data} />
        <PieChart data={data} />
      </div>
    </main>
  );
}
