"use client";

import { useState, useMemo } from "react";
import SalesCharts from "./components/molecules/SalesChart";
import { salesDataByYear} from "./data/salesData";
import { SalesRecord } from "./type/sales";

export default function Dashboard() {
  const [year, setYear] = useState<number>(2023);
  const [threshold, setThreshold] = useState<number | "">("");

  // useMemo prevents recalculating on every render unless year or threshold changes
  const filteredData = useMemo(() => {
    const data = salesDataByYear[year] || [];
    
    if (threshold !== "") {
      return data.filter((item) => item.sales >= threshold);
    }
    return data;
  }, [year, threshold]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Sales Dashboard</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        {/* Year Dropdown */}
        <select
          className="border rounded p-2 text-black bg-white"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          {Object.keys(salesDataByYear).map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>

        {/* Threshold Input */}
        <input
          type="number"
          placeholder="Min sales threshold..."
          className="border rounded p-2 text-black bg-white"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value === "" ? "" : Number(e.target.value))}
        />
      </div>

      {/* Charts */}
      <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg">
        <SalesCharts data ={filteredData} />
      </div>
    </div>
  );
}