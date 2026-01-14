"use client";

import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: { month: string; sales: number }[];
};

export default function BarChart({ data }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Monthly Sales Overview
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <ReBarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="sales"
            fill="#3b82f6"
            radius={[6, 6, 0, 0]}
          />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
}
