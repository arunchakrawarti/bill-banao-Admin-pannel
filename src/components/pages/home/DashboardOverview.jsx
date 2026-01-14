"use client";
import StatsCard from "@/components/molecules/StatsCard";
import React from "react";



const DashboardOverview = () => {
  return (
    <div className="space-y-6 mt-3">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {statsConfig.map((item, index) => (
        <StatsCard
          key={index}
          title={item.title}
          value={item.value}
          icon={item.icon}
          iconBg={item.iconBg}
          change={item.change}
          percent={item.percent}
          variant={item.variant}
        />
      ))}
    </div>
    </div>
  );
};

export default DashboardOverview;

export const statsConfig = [
  {
    title: "Total Clients",
    value: "1,234",
    icon: "ri-user-line",
    iconBg: "bg-blue-500",
    change: 2.7,
    percent: 2.7,
    variant: "dashboard",
  },
  {
    title: "Total Invoices",
    value: "1,234",
    icon: "ri-file-list-3-line",
    iconBg: "bg-green-500",
    change: 2.7,
    percent: 2.7,
    variant: "dashboard",
  },
  {
    title: "Estimates",
    value: "1,234",
    icon: "ri-money-dollar-circle-line",
    iconBg: "bg-yellow-500",
    change: -2.7,
    percent: 2.7,
    variant: "dashboard",
  },
  {
    title: "Amount Due",
    value: "1,234",
    icon: "ri-money-dollar-circle-line",
    iconBg: "bg-yellow-500",
    change: -2.7,
    percent: 2.7,
    variant: "dashboard",
  },
];
