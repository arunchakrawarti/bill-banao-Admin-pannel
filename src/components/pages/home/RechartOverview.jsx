"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const barData = [
  { name: "Jan", received: 120, pending: 80 },
  { name: "Feb", received: 122, pending: 82 },
  { name: "Mar", received: 123, pending: 81 },
  { name: "Apr", received: 124, pending: 83 },
  { name: "May", received: 125, pending: 82 },
  { name: "Jun", received: 126, pending: 83 },
  { name: "Jul", received: 124, pending: 84 },
  { name: "Aug", received: 126, pending: 85 },
  { name: "Sep", received: 127, pending: 84 },
  { name: "Oct", received: 125, pending: 83 },
  { name: "Nov", received: 126, pending: 82 },
  { name: "Dec", received: 127, pending: 81 },
];

const donutData = [
  { name: "Invoiced", value: 45, color: "#6366F1" },
  { name: "Received", value: 25, color: "#2563EB" },
  { name: "Pending", value: 20, color: "#4FD1C5" },
  { name: "XYZ", value: 10, color: "#A855F7" },
];

export default function RechartOverview() {
  return (
    <div className="grid mt-7 grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm lg:col-span-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Sales Analytic</h2>
          <button className="border border-blue-500 text-blue-600 px-4 py-2 rounded-md text-sm font-medium">
            Monthly ⌄
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <Stat title="Total Sales" value="$1000" color="text-indigo-500" />
          <Stat title="Receipts" value="$1000" color="text-green-500" />
          <Stat title="Expenses" value="$1000" color="text-red-500" />
          <Stat title="Earnings" value="$1000" color="text-gray-900" />
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} barGap={8}>
              <XAxis dataKey="name" tick={{ fill: "#888", fontSize: 12 }} />
              <YAxis tick={{ fill: "#888", fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="received" fill="#6366F1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="pending" fill="#FB923C" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center gap-6 mt-4 text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-indigo-500 rounded"></span> Received
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-orange-400 rounded"></span> Pending
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold">Sales Analytic</h2>
          <button className="border border-blue-500 text-blue-600 px-3 py-1.5 rounded-md text-xs font-medium">
            Monthly ⌄
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={donutData}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
              >
                {donutData.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mt-4 text-xs">
          {donutData.map((d, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: d.color }}
              />
              <span className="text-gray-600">{d.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value, color }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-xl font-semibold ${color}`}>{value}</p>
    </div>
  );
}
