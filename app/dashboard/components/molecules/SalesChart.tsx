"use client";

import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

type Props = {
  data: { month: string; value: number }[];
};

const COLORS = ["#6366f1", "#22c55e", "#f97316", "#ef4444", "#eab308", "#8b5cf6"];

export default function SalesCharts({ data }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
      {/* Bar Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2 text-center">Bar Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2 text-center">Line Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2 text-center">Pie Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="month" outerRadius={100} fill="#f97316" label>
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}