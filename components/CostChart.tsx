"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Compute", value: 45 },
  { name: "Storage", value: 20 },
  { name: "Database", value: 15 },
  { name: "Networking", value: 10 },
  { name: "AI Services", value: 10 },
];

const COLORS = [
  "#ec4899",
  "#8b5cf6",
  "#3b82f6",
  "#14b8a6",
  "#f59e0b",
];

export default function CostChart() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4">
        Cost Breakdown
      </h2>

      <div className="h-80">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={120}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}