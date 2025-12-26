"use client";

import { useState } from "react";
import SalesChart from "../molecules/SalesChart";
import { salesDataByYear } from "../../data/salesData";

export default function DashboardPage() {
  const [year, setYear] = useState(2023);
  const [threshold, setThreshold] = useState<number | "">("");

  // Filter data based on threshold
  const filteredData = salesDataByYear[year].filter(
    (item) => threshold === "" || item.value >= threshold
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-green-100 to-orange-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Sales Dashboard</h1>

      {/* Year Dropdown */}
      <div className="flex justify-center mb-4 gap-4">
        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="p-2 rounded border border-black bg-white text-black"
        >
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>

        <input
          type="number"
          placeholder="Enter sales threshold"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value === "" ? "" : Number(e.target.value))}
          className="p-2 rounded border border-black text-black"
        />
      </div>

      {/* Charts */}
      <SalesChart data={filteredData} />
    </div>
  );
}