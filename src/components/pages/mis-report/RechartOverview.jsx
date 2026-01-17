"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Legend,
  Pie,
  Cell,
} from "recharts";

/* ---------- Data ---------- */

const revenueExpenseData = [
  { month: "Jan", expenses: 32000, revenue: 45000 },
  { month: "Feb", expenses: 35000, revenue: 52000 },
  { month: "Mar", expenses: 38000, revenue: 48000 },
  { month: "Apr", expenses: 36000, revenue: 55000 },
  { month: "May", expenses: 42000, revenue: 62000 },
  { month: "Jun", expenses: 45000, revenue: 68000 },
];

const clientDistributionData = [
  { name: "Premium", value: 36 },
  { name: "Business", value: 31 },
  { name: "Enterprise", value: 23 },
  { name: "Basic", value: 10 },
];

const COLORS = ["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B"];


export default function RechartOverview() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-7">
      
     
     <div className="rounded-xl bg-white p-4 shadow-sm">
  <h3 className="font-inter font-medium text-[1.25rem] tracking-[-0.028rem] mb-4">
    Revenue vs Expenses
  </h3>

  <div className="h-[260px]">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={revenueExpenseData}>
        <XAxis
          dataKey="month"
          tick={{ fontSize: 12, fill: "#6B7280" }}
        />
        <YAxis
          tick={{ fontSize: 12, fill: "#6B7280" }}
        />
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          align="center"
          iconType="circle"
          wrapperStyle={{ paddingTop: 12 }}
          formatter={(value) => (
            <span className="text-sm text-gray-600 font-inter">
              {value}
            </span>
          )}
        />

        <Bar
          dataKey="expenses"
          name="Expenses"
          fill="#EF4444"
          radius={[4, 4, 0, 0]}
          barSize={14}
        />
        <Bar
          dataKey="revenue"
          name="Revenue"
          fill="#3B82F6"
          radius={[4, 4, 0, 0]}
          barSize={14}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>


<div className="rounded-xl bg-white p-4 shadow-sm">
  <h3 className="font-inter font-medium text-[1.25rem] tracking-[-0.028rem] mb-4">
    Client Distribution by Plan
  </h3>

  <div className="h-[260px] flex items-center justify-center">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={clientDistributionData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={90}
          paddingAngle={0}
          label={({ name, value }) => `${name} ${value}%`}
          labelLine={false}
        >
          {clientDistributionData.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
</div>



    </div>
  );
}
