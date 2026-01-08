"use client";

import { useState } from "react";
import SalesChart from "../molecules/SalesChart";
import { salesDataByYear } from "../../data/salesData";
import { SalesRecord } from "../../type/sales";

export default function DashboardPage() {
  const [year, setYear] = useState(2023);
  const [threshold, setThreshold] = useState<number | "">("");

  const filteredData: SalesRecord[] =
    salesDataByYear[year]?.filter(
      (item) => threshold === "" || item.sales >= threshold
    ) ?? [];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Sales Dashboard
      </h1>

      <div className="flex justify-center mb-4 gap-4">
        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="p-2 rounded border"
        >
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>

        <input
          type="number"
          placeholder="Sales threshold"
          value={threshold}
          onChange={(e) =>
            setThreshold(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="p-2 rounded border"
        />
      </div>

      <SalesChart data={filteredData} />
    </div>
  );
}
