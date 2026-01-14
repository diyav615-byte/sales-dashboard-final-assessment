"use client";

import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: { month: string; sales: number }[];
};

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#f97316",
  "#a855f7",
  "#ef4444",
  "#14b8a6",
  "#eab308",
  "#6366f1",
  "#ec4899",
  "#64748b",
  "#84cc16",
  "#06b6d4",
];

export default function PieChart({ data }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow md:col-span-2">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Sales Distribution
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <RePieChart>
          <Pie
            data={data}
            dataKey="sales"
            nameKey="month"
            outerRadius={120}
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
        </RePieChart>
      </ResponsiveContainer>
    </div>
  );
}
