"use client";

import { useState } from "react";
import { salesData } from "./data/salesData";
import BarChart from "./components/charts/SalesBarChart";
import LineChart from "./components/charts/SalesLineChart";
import PieChart from "./components/charts/SalesPieChart";

export default function DashboardPage() {
  const [year, setYear] = useState<2023 | 2024 | 2025>(2025);
  const [threshold, setThreshold] = useState<string>("");
  const [filteredData, setFilteredData] = useState(salesData[year]);

  const data = filteredData;

  const totalSales = data.reduce((acc, item) => acc + item.sales, 0);
  const avgSales = data.length ? totalSales / data.length : 0;
  const highestSale = data.length ? Math.max(...data.map((item) => item.sales)) : 0;
  const lowestSale = data.length ? Math.min(...data.map((item) => item.sales)) : 0;

  const applyThresholdFilter = () => {
    if (threshold === "") return;
    const result = salesData[year].filter((item) => item.sales >= Number(threshold));
    setFilteredData(result);
  };

  const resetFilter = () => {
    setThreshold("");
    setFilteredData(salesData[year]);
  };

  return (
    <main className="p-8 bg-gray-100 min-h-screen text-gray-900">
      <h1 className="text-3xl font-bold mb-2">Sales Dashboard</h1>
      <p className="text-gray-600 mb-6">Monitor and analyze your monthly sales performance.</p>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
        <select
          value={year}
          onChange={(e) => {
            const selectedYear = Number(e.target.value) as 2023 | 2024 | 2025;
            setYear(selectedYear);
            setFilteredData(salesData[selectedYear]);
          }}
          className="border rounded px-3 py-2"
        >
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>

        <input
          type="number"
          placeholder="Enter sales threshold"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <button
          onClick={applyThresholdFilter}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Apply Filter
        </button>
        <button
          onClick={resetFilter}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BarChart data={data} />
        <LineChart data={data} />
        <PieChart data={data} />
      </div>
    </main>
  );
}